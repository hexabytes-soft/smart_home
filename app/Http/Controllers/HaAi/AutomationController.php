<?php

namespace App\Http\Controllers\HaAi;

use App\Http\Controllers\Controller;
use App\Http\Requests\HaAi\DecideAutomationRequest;
use App\Http\Requests\HaAi\GenerateAutomationRequest;
use App\Models\HaProjectAutomation;
use App\Models\Project;
use App\Services\HaAi\HaAutomationAnalyzer;
use App\Services\HaAi\HaAutomationGenerator;
use App\Services\HaAi\HaAutomationUploadService;
use App\Services\HaAi\HaYamlValidator;
use App\Services\HaAi\ProjectHaContextService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\View\View;
use Throwable;

class AutomationController extends Controller
{
    public function index(Request $request, Project $project): View
    {
        $this->authorize('view', $project);

        $q = trim((string) $request->query('q', ''));
        $status = (string) $request->query('status', '');

        $automations = HaProjectAutomation::query()
            ->where('project_id', $project->id)
            ->when($q !== '', function ($query) use ($q) {
                $term = '%'.$q.'%';
                $query->where(function ($inner) use ($term) {
                    $inner->where('name', 'like', $term)
                        ->orWhere('description', 'like', $term)
                        ->orWhere('prompt', 'like', $term)
                        ->orWhere('status', 'like', $term);
                });
            })
            ->when($status !== '', fn ($query) => $query->where('status', $status))
            ->latest()
            ->paginate(20)
            ->withQueryString();

        return view('ha-ai.automations.index', compact('project', 'automations', 'q', 'status'));
    }

    public function builder(Project $project, ProjectHaContextService $context): View
    {
        $this->authorize('view', $project);
        $stats = $context->mappingStats($project);

        return view('ha-ai.automations.builder', [
            'project' => $project,
            'linked' => $stats['linked'],
            'automation' => null,
        ]);
    }

    public function analyze(
        GenerateAutomationRequest $request,
        Project $project,
        HaAutomationAnalyzer $analyzer,
        HaAutomationGenerator $generator,
    ): RedirectResponse|View {
        $this->authorize('editMap', $project);

        $mapDeviceIds = $request->validated('map_device_ids');
        $prompt = $request->validated('prompt');

        try {
            $analysis = $analyzer->analyze($project, $mapDeviceIds, $prompt);
        } catch (Throwable $e) {
            return back()->withInput()->withErrors(['generate' => $e->getMessage()]);
        }

        $pending = [
            'project_id' => $project->id,
            'map_device_ids' => $mapDeviceIds,
            'prompt' => $prompt,
            'analysis' => $analysis,
        ];
        $request->session()->put(HaAutomationAnalyzer::SESSION_KEY, $pending);

        if (! $analyzer->shouldDeferToUser($analysis)) {
            try {
                $automation = $generator->generate(
                    $project,
                    $request->user(),
                    $mapDeviceIds,
                    $prompt,
                    null,
                    ['mode' => 'create_new']
                );
            } catch (Throwable $e) {
                return back()->withInput()->withErrors(['generate' => $e->getMessage()]);
            }

            $request->session()->forget(HaAutomationAnalyzer::SESSION_KEY);

            return redirect()
                ->route('ha-ai.automations.show', [$project, $automation])
                ->with('status', 'No close duplicate found. New automation YAML generated — review before upload.');
        }

        return redirect()->route('ha-ai.automations.analysis', $project);
    }

    public function analysis(Request $request, Project $project): View|RedirectResponse
    {
        $this->authorize('view', $project);

        $pending = $request->session()->get(HaAutomationAnalyzer::SESSION_KEY);
        if (! is_array($pending) || (int) ($pending['project_id'] ?? 0) !== (int) $project->id) {
            return redirect()
                ->route('ha-ai.automations.builder', $project)
                ->withErrors(['generate' => 'No pending analysis. Submit the builder form again.']);
        }

        return view('ha-ai.automations.analysis', [
            'project' => $project,
            'prompt' => $pending['prompt'],
            'mapDeviceIds' => $pending['map_device_ids'],
            'analysis' => $pending['analysis'],
        ]);
    }

    public function decide(
        DecideAutomationRequest $request,
        Project $project,
        HaAutomationGenerator $generator,
    ): RedirectResponse {
        $this->authorize('editMap', $project);

        $pending = $request->session()->get(HaAutomationAnalyzer::SESSION_KEY);
        if (! is_array($pending) || (int) ($pending['project_id'] ?? 0) !== (int) $project->id) {
            return redirect()
                ->route('ha-ai.automations.builder', $project)
                ->withErrors(['generate' => 'Analysis expired. Submit the builder form again.']);
        }

        $action = $request->validated('action');
        $mapDeviceIds = $pending['map_device_ids'];
        $prompt = $pending['prompt'];
        $analysis = $pending['analysis'];
        $existing = $analysis['existing_automation'] ?? null;
        $haId = is_array($existing) ? ($existing['ha_automation_id'] ?: null) : null;
        if (! $haId && is_array($existing) && ! empty($existing['entity_id'])) {
            // entity_id like automation.living_room_motion_light → often id is the object id
            $haId = str_starts_with((string) $existing['entity_id'], 'automation.')
                ? substr((string) $existing['entity_id'], strlen('automation.'))
                : (string) $existing['entity_id'];
        }

        try {
            if ($action === 'reuse') {
                if (! $haId) {
                    throw new \InvalidArgumentException('No existing automation ID available to reuse.');
                }
                $automation = $generator->reuseExisting(
                    $project,
                    $request->user(),
                    $mapDeviceIds,
                    $prompt,
                    $haId,
                    $existing['alias'] ?? null
                );
                $status = 'Existing automation loaded for review (reused).';
            } elseif ($action === 'modify') {
                if (! $haId) {
                    throw new \InvalidArgumentException('No existing automation ID available to modify.');
                }
                $automation = $generator->generate(
                    $project,
                    $request->user(),
                    $mapDeviceIds,
                    $prompt,
                    null,
                    [
                        'mode' => 'modify',
                        'preserve_automation_id' => $haId,
                    ]
                );
                $status = 'Existing automation updated in draft YAML (ID preserved). Review before upload.';
            } else {
                $automation = $generator->generate(
                    $project,
                    $request->user(),
                    $mapDeviceIds,
                    $prompt,
                    null,
                    ['mode' => 'create_new']
                );
                $status = 'New automation YAML generated. Review before upload.';
            }
        } catch (Throwable $e) {
            return back()->withErrors(['generate' => $e->getMessage()]);
        }

        $request->session()->forget(HaAutomationAnalyzer::SESSION_KEY);

        return redirect()
            ->route('ha-ai.automations.show', [$project, $automation])
            ->with('status', $status);
    }

    public function show(Project $project, HaProjectAutomation $automation, HaYamlValidator $validator): View
    {
        $this->authorize('view', $project);
        $this->ensureBelongs($project, $automation);
        $validation = $validator->validate($automation->yaml);

        return view('ha-ai.automations.show', compact('project', 'automation', 'validation'));
    }

    public function regenerate(
        Request $request,
        Project $project,
        HaProjectAutomation $automation,
        HaAutomationGenerator $generator,
    ): RedirectResponse {
        $this->authorize('editMap', $project);
        $this->ensureBelongs($project, $automation);

        $validated = $request->validate([
            'map_device_ids' => ['required', 'array', 'min:1'],
            'map_device_ids.*' => ['required', 'string', 'max:120'],
            'prompt' => ['required', 'string', 'min:10', 'max:10000'],
        ]);

        try {
            $generator->generate(
                $project,
                $request->user(),
                $validated['map_device_ids'],
                $validated['prompt'],
                $automation,
                [
                    'mode' => $automation->ha_automation_id ? 'modify' : 'create_new',
                    'preserve_automation_id' => $automation->ha_automation_id,
                ]
            );
        } catch (Throwable $e) {
            return back()->withInput()->withErrors(['generate' => $e->getMessage()]);
        }

        return back()->with('status', 'Automation regenerated.');
    }

    public function upload(
        Project $project,
        HaProjectAutomation $automation,
        HaAutomationUploadService $uploader,
        Request $request,
    ): RedirectResponse {
        $this->authorize('editMap', $project);
        $this->ensureBelongs($project, $automation);

        if ($request->filled('yaml')) {
            $request->validate(['yaml' => ['required', 'string', 'max:200000']]);
            $newYaml = $request->string('yaml')->toString();
            if ($newYaml !== $automation->yaml) {
                app(\App\Services\HaAi\HaAutomationVersionService::class)
                    ->snapshot($automation, $request->user(), 'Before upload edit');
                $automation->update(['yaml' => $newYaml]);
                app(\App\Services\HaAi\HaAutomationVersionService::class)
                    ->snapshot($automation->fresh(), $request->user(), 'Edited before upload');
            }
        }

        try {
            $result = $uploader->upload($automation->fresh());
        } catch (Throwable $e) {
            return back()->withErrors(['upload' => $e->getMessage()]);
        }

        if (! $result['reload_ok']) {
            return back()
                ->with('status', $result['message'])
                ->withErrors([
                    'reload' => 'Home Assistant reload failed: '.($result['reload_error'] ?? 'Unknown error'),
                ]);
        }

        return back()->with('status', $result['message']);
    }

    public function clone(Project $project, HaProjectAutomation $automation): RedirectResponse
    {
        $this->authorize('editMap', $project);
        $this->ensureBelongs($project, $automation);

        $clone = $automation->replicate([
            'ha_automation_id',
            'uploaded_at',
            'error_message',
        ]);
        $clone->status = HaProjectAutomation::STATUS_DRAFT;
        $clone->name = ($automation->name ?: 'Automation').' (clone)';
        $clone->user_id = auth()->id();
        $clone->save();

        return redirect()
            ->route('ha-ai.automations.show', [$project, $clone])
            ->with('status', 'Automation cloned as draft.');
    }

    public function download(Project $project, HaProjectAutomation $automation): Response
    {
        $this->authorize('view', $project);
        $this->ensureBelongs($project, $automation);

        $filename = 'automation-'.$automation->id.'.yaml';

        return response($automation->yaml, 200, [
            'Content-Type' => 'text/yaml; charset=UTF-8',
            'Content-Disposition' => 'attachment; filename="'.$filename.'"',
        ]);
    }

    protected function ensureBelongs(Project $project, HaProjectAutomation $automation): void
    {
        abort_unless((int) $automation->project_id === (int) $project->id, 404);
    }
}
