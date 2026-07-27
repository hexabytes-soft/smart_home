<?php

namespace App\Http\Controllers\HaAi;

use App\Http\Controllers\Controller;
use App\Models\HaAutomationRemote;
use App\Models\HaAutomationVersion;
use App\Models\HaProjectAutomation;
use App\Models\HaScene;
use App\Models\HaScript;
use App\Models\Project;
use App\Services\HaAi\HaAutomationInsightService;
use App\Services\HaAi\HaAutomationVersionService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Throwable;

class InsightController extends Controller
{
    public function library(Project $project, string $type): View
    {
        $this->authorize('view', $project);
        abort_unless(in_array($type, ['automations', 'scripts', 'scenes'], true), 404);

        $items = match ($type) {
            'automations' => HaAutomationRemote::query()->orderBy('friendly_name')->paginate(40),
            'scripts' => HaScript::query()->orderBy('friendly_name')->paginate(40),
            'scenes' => HaScene::query()->orderBy('friendly_name')->paginate(40),
        };

        return view('ha-ai.library.index', compact('project', 'type', 'items'));
    }

    public function explain(Request $request, Project $project, HaAutomationInsightService $insights): View|RedirectResponse
    {
        $this->authorize('view', $project);
        $validated = $request->validate([
            'type' => ['required', 'in:local_automation,automation,script,scene'],
            'key' => ['required', 'string', 'max:255'],
        ]);

        try {
            $result = $insights->explain($project, $validated['type'], $validated['key']);
        } catch (Throwable $e) {
            return back()->withErrors(['explain' => $e->getMessage()]);
        }

        return view('ha-ai.insights.explain', [
            'project' => $project,
            'result' => $result,
            'type' => $validated['type'],
            'key' => $validated['key'],
        ]);
    }

    public function debug(Project $project, HaProjectAutomation $automation, HaAutomationInsightService $insights): View|RedirectResponse
    {
        $this->authorize('view', $project);
        abort_unless((int) $automation->project_id === (int) $project->id, 404);

        try {
            $result = $insights->debug($project, $automation);
        } catch (Throwable $e) {
            return back()->withErrors(['debug' => $e->getMessage()]);
        }

        return view('ha-ai.insights.debug', compact('project', 'automation', 'result'));
    }

    public function simulate(Request $request, Project $project, HaProjectAutomation $automation, HaAutomationInsightService $insights): View
    {
        $this->authorize('view', $project);
        abort_unless((int) $automation->project_id === (int) $project->id, 404);

        $yaml = $request->input('yaml', $automation->yaml);
        $simulation = $insights->simulate((string) $yaml);

        return view('ha-ai.insights.simulate', compact('project', 'automation', 'simulation', 'yaml'));
    }

    public function versions(Project $project, HaProjectAutomation $automation, HaAutomationVersionService $versions): View
    {
        $this->authorize('view', $project);
        abort_unless((int) $automation->project_id === (int) $project->id, 404);

        return view('ha-ai.automations.versions', [
            'project' => $project,
            'automation' => $automation,
            'versions' => $versions->list($automation),
        ]);
    }

    public function restoreVersion(
        Project $project,
        HaProjectAutomation $automation,
        HaAutomationVersion $version,
        HaAutomationVersionService $versions,
    ): RedirectResponse {
        $this->authorize('editMap', $project);
        abort_unless((int) $automation->project_id === (int) $project->id, 404);

        $versions->restore($automation, $version, auth()->user());

        return redirect()
            ->route('ha-ai.automations.show', [$project, $automation])
            ->with('status', 'Restored version v'.$version->version_number);
    }

    public function compareVersions(
        Request $request,
        Project $project,
        HaProjectAutomation $automation,
        HaAutomationVersionService $versions,
    ): View|RedirectResponse {
        $this->authorize('view', $project);
        abort_unless((int) $automation->project_id === (int) $project->id, 404);

        $validated = $request->validate([
            'left' => ['required', 'integer'],
            'right' => ['required', 'integer'],
        ]);

        $left = HaAutomationVersion::query()->where('ha_project_automation_id', $automation->id)->findOrFail($validated['left']);
        $right = HaAutomationVersion::query()->where('ha_project_automation_id', $automation->id)->findOrFail($validated['right']);
        $diff = $versions->compare($left, $right);

        return view('ha-ai.automations.compare', compact('project', 'automation', 'left', 'right', 'diff'));
    }
}
