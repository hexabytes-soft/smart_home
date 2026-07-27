<?php

namespace App\Http\Controllers\HaAi;

use App\Http\Controllers\Controller;
use App\Http\Requests\HaAi\StoreMappingRequest;
use App\Models\HaComponentMapping;
use App\Models\Project;
use App\Services\HaAi\HaComponentMappingService;
use App\Services\HaAi\ProjectHaContextService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;
use InvalidArgumentException;

class MappingController extends Controller
{
    public function index(Request $request, Project $project, ProjectHaContextService $context, HaComponentMappingService $mappings): View
    {
        $this->authorize('view', $project);

        $stats = $context->mappingStats($project);
        $entities = $mappings->searchableEntities($request->query('q'));

        return view('ha-ai.mapping.index', [
            'project' => $project,
            'linked' => $stats['linked'],
            'unlinked' => $stats['unlinked'],
            'entities' => $entities,
            'q' => (string) $request->query('q', ''),
        ]);
    }

    public function store(StoreMappingRequest $request, Project $project, HaComponentMappingService $mappings): RedirectResponse
    {
        $this->authorize('editMap', $project);

        try {
            $mappings->link(
                $project,
                $request->validated('map_device_id'),
                $request->validated('entity_id')
            );
        } catch (InvalidArgumentException $e) {
            return back()->withErrors(['mapping' => $e->getMessage()]);
        }

        return back()->with('status', 'Component linked to Home Assistant entity.');
    }

    public function destroy(Project $project, HaComponentMapping $mapping, HaComponentMappingService $mappings): RedirectResponse
    {
        $this->authorize('editMap', $project);

        try {
            $mappings->unlink($project, $mapping);
        } catch (InvalidArgumentException $e) {
            return back()->withErrors(['mapping' => $e->getMessage()]);
        }

        return back()->with('status', 'Mapping removed.');
    }
}
