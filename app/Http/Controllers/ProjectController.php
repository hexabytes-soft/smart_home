<?php

namespace App\Http\Controllers;

use App\Http\Requests\ImportFloorPlanJsonRequest;
use App\Http\Requests\ImportFloorPlanRequest;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Models\Project;
use App\Models\SmartComponent;
use App\Services\FloorPlan\FloorPlanImportService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;
use RuntimeException;
use Throwable;

class ProjectController extends Controller
{
    public function index(Request $request): View
    {
        $this->authorize('viewAny', Project::class);

        $user = $request->user();

        $projects = Project::query()
            ->with('owner')
            ->when(
                ! $user->hasAnyRole(['admin', 'manager']),
                fn ($query) => $query->where('user_id', $user->id)
            )
            ->latest()
            ->paginate(12);

        return view('projects.index', compact('projects'));
    }

    public function create(): View
    {
        $this->authorize('create', Project::class);

        return view('projects.create');
    }

    public function store(StoreProjectRequest $request): RedirectResponse
    {
        $project = Project::query()->create([
            ...$request->validated(),
            'user_id' => $request->user()->id,
            'status' => 'draft',
        ]);

        return redirect()
            ->route('projects.map', $project)
            ->with('status', 'Project created. Start building your map.');
    }

    public function show(Project $project): View
    {
        $this->authorize('view', $project);

        return view('projects.show', compact('project'));
    }

    public function edit(Project $project): View
    {
        $this->authorize('update', $project);

        return view('projects.edit', compact('project'));
    }

    public function update(UpdateProjectRequest $request, Project $project): RedirectResponse
    {
        $project->update($request->validated());

        return redirect()
            ->route('projects.show', $project)
            ->with('status', 'Project updated.');
    }

    public function destroy(Project $project): RedirectResponse
    {
        $this->authorize('delete', $project);

        $project->delete();

        return redirect()
            ->route('projects.index')
            ->with('status', 'Project deleted.');
    }

    public function map(Project $project): View
    {
        $this->authorize('view', $project);

        $smartCatalog = SmartComponent::query()
            ->active()
            ->ordered()
            ->get()
            ->map(fn (SmartComponent $component) => $component->toCatalogItem())
            ->values()
            ->all();

        $mapData = $project->mapDataForViewer();

        return view('projects.map', compact('project', 'smartCatalog', 'mapData'));
    }

    public function updateMap(Request $request, Project $project): RedirectResponse
    {
        $this->authorize('editMap', $project);

        $validated = $request->validate([
            'map_data' => ['required', 'json'],
            'map_mode' => ['nullable', 'in:2d,3d,360'],
            'width' => ['nullable', 'integer', 'min:1', 'max:200'],
            'depth' => ['nullable', 'integer', 'min:1', 'max:200'],
        ]);

        $project->map_data = json_decode($validated['map_data'], true);

        if (! empty($validated['map_mode'])) {
            $project->map_mode = $validated['map_mode'];
        }

        if (! empty($validated['width'])) {
            $project->width = $validated['width'];
        }

        if (! empty($validated['depth'])) {
            $project->depth = $validated['depth'];
        }

        $project->save();

        return back()->with('status', 'Map saved.');
    }

    public function importFloorPlan(
        ImportFloorPlanRequest $request,
        Project $project,
        FloorPlanImportService $importer
    ): JsonResponse {
        $this->authorize('editMap', $project);

        if (blank(config('services.gemini.api_key'))) {
            return response()->json([
                'message' => 'AI import is not configured. Add GEMINI_API_KEY to your .env file and restart the server.',
            ], 503);
        }

        try {
            $sourcePaths = [];
            foreach ($request->planImages() as $image) {
                $sourcePaths[] = $image->store("projects/{$project->id}/import-sources", 'public');
            }

            $result = $importer->import($request->planImages(), [
                'overall_width' => $request->filled('overall_width') ? (float) $request->input('overall_width') : null,
                'overall_depth' => $request->filled('overall_depth') ? (float) $request->input('overall_depth') : null,
                'wall_height' => $request->filled('wall_height') ? (float) $request->input('wall_height') : null,
                'notes' => $request->input('notes'),
                'floor_names' => array_values((array) $request->input('floor_names', [])),
                'source_paths' => $sourcePaths,
            ]);
        } catch (RuntimeException $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ], 422);
        } catch (Throwable $e) {
            report($e);

            return response()->json([
                'message' => 'Floor plan import failed. Please try again or use a clearer image.',
            ], 500);
        }

        $apply = $request->boolean('apply', true);

        if ($apply) {
            $project->map_data = $result['map_data'];
            $project->width = $result['width'];
            $project->depth = $result['depth'];
            $project->floors_count = $result['floors_count'];
            $project->map_mode = '2d';
            $project->save();
        }

        return response()->json([
            'message' => $apply
                ? 'Floor plan imported. Switch floors in the editor, then add smart devices.'
                : 'Floor plan converted. Review before saving.',
            'map_data' => $result['map_data'],
            'width' => $result['width'],
            'depth' => $result['depth'],
            'floors_count' => $result['floors_count'],
            'warnings' => $result['warnings'],
            'model' => $result['model'],
            'applied' => $apply,
        ]);
    }

    public function importFloorPlanJson(
        ImportFloorPlanJsonRequest $request,
        Project $project,
        FloorPlanImportService $importer
    ): JsonResponse {
        $this->authorize('editMap', $project);

        $payload = $request->decodedPayload();
        if ($payload === null) {
            return response()->json([
                'message' => 'Paste valid JSON from Gemini (must include a floors array).',
            ], 422);
        }

        try {
            $result = $importer->importFromJson($payload, [
                'overall_width' => $request->filled('overall_width') ? (float) $request->input('overall_width') : null,
                'overall_depth' => $request->filled('overall_depth') ? (float) $request->input('overall_depth') : null,
                'wall_height' => $request->filled('wall_height') ? (float) $request->input('wall_height') : null,
            ]);
        } catch (RuntimeException $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ], 422);
        } catch (Throwable $e) {
            report($e);

            return response()->json([
                'message' => 'JSON import failed. Check the Gemini JSON format against the plan rules.',
            ], 500);
        }

        $apply = $request->boolean('apply', true);

        if ($apply) {
            $project->map_data = $result['map_data'];
            $project->width = $result['width'];
            $project->depth = $result['depth'];
            $project->floors_count = $result['floors_count'];
            $project->map_mode = '2d';
            $project->save();
        }

        return response()->json([
            'message' => $apply
                ? 'Gemini JSON converted to 2D map.'
                : 'JSON converted. Review before saving.',
            'map_data' => $result['map_data'],
            'width' => $result['width'],
            'depth' => $result['depth'],
            'floors_count' => $result['floors_count'],
            'warnings' => $result['warnings'],
            'model' => $result['model'],
            'applied' => $apply,
        ]);
    }

    public function uploadUnderlay(Request $request, Project $project): JsonResponse
    {
        $this->authorize('editMap', $project);

        $request->validate([
            'image' => ['required', 'file', 'mimes:jpeg,jpg,png,webp,gif', 'max:20480'],
        ]);

        $path = $request->file('image')->store("projects/{$project->id}/underlays", 'public');
        $relative = '/storage/'.ltrim($path, '/');

        return response()->json([
            'message' => 'Floor image uploaded.',
            'url' => Project::toAbsolutePublicUrl($relative),
        ]);
    }
}
