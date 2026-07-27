<?php

namespace App\Http\Controllers\HaAi;

use App\Http\Controllers\Controller;
use App\Models\HaArea;
use App\Models\HaEntity;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\View\View;

class DeviceController extends Controller
{
    public function index(Request $request, Project $project): View
    {
        $this->authorize('view', $project);

        $q = trim((string) $request->query('q', ''));
        $areas = HaArea::query()->orderBy('name')->get()->keyBy('ha_id');

        $entities = HaEntity::query()
            ->when($q !== '', function ($query) use ($q) {
                $term = '%'.$q.'%';
                $query->where(function ($inner) use ($term) {
                    $inner->where('entity_id', 'like', $term)
                        ->orWhere('friendly_name', 'like', $term)
                        ->orWhere('domain', 'like', $term)
                        ->orWhere('state', 'like', $term);
                });
            })
            ->orderBy('area_id')
            ->orderBy('domain')
            ->orderBy('friendly_name')
            ->limit(1000)
            ->get();

        /** @var Collection<string, Collection<int, HaEntity>> $grouped */
        $grouped = $entities->groupBy(function (HaEntity $entity) use ($areas) {
            if ($entity->area_id && $areas->has($entity->area_id)) {
                return $areas->get($entity->area_id)->name;
            }

            return 'Unassigned';
        })->sortKeys();

        return view('ha-ai.devices.index', compact('project', 'grouped', 'q', 'entities'));
    }
}
