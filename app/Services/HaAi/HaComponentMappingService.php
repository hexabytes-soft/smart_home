<?php

namespace App\Services\HaAi;

use App\Models\HaComponentMapping;
use App\Models\HaEntity;
use App\Models\Project;
use Illuminate\Support\Collection;
use InvalidArgumentException;

class HaComponentMappingService
{
    public function __construct(
        private readonly ProjectHaContextService $context,
    ) {}

    public function link(Project $project, string $mapDeviceId, string $entityId): HaComponentMapping
    {
        $entityId = trim($entityId);
        if (! preg_match('/^[a-z0-9_]+\.[a-z0-9_]+$/i', $entityId)) {
            throw new InvalidArgumentException('Invalid Home Assistant entity_id format.');
        }

        if (! HaEntity::query()->where('entity_id', $entityId)->exists()) {
            throw new InvalidArgumentException('Entity not found. Sync Home Assistant first.');
        }

        $device = collect($this->context->placedDevices($project))
            ->firstWhere('map_device_id', $mapDeviceId);

        if (! $device) {
            throw new InvalidArgumentException('Map device not found on this project.');
        }

        return HaComponentMapping::query()->updateOrCreate(
            [
                'project_id' => $project->id,
                'map_device_id' => $mapDeviceId,
            ],
            [
                'component_key' => $device['component_key'],
                'entity_id' => $entityId,
                'room_name' => $device['room_name'],
            ]
        );
    }

    public function unlink(Project $project, HaComponentMapping $mapping): void
    {
        if ((int) $mapping->project_id !== (int) $project->id) {
            throw new InvalidArgumentException('Mapping does not belong to this project.');
        }

        $mapping->delete();
    }

    /**
     * @return Collection<int, HaEntity>
     */
    public function searchableEntities(?string $q = null): Collection
    {
        return HaEntity::query()
            ->when($q, function ($query) use ($q) {
                $term = '%'.$q.'%';
                $query->where(function ($inner) use ($term) {
                    $inner->where('entity_id', 'like', $term)
                        ->orWhere('friendly_name', 'like', $term)
                        ->orWhere('domain', 'like', $term);
                });
            })
            ->where('disabled', false)
            ->orderBy('domain')
            ->orderBy('friendly_name')
            ->limit(300)
            ->get();
    }
}
