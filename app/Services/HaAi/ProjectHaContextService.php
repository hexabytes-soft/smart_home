<?php

namespace App\Services\HaAi;

use App\Models\HaComponentMapping;
use App\Models\HaEntity;
use App\Models\HaProjectAutomation;
use App\Models\HaSyncRun;
use App\Models\Project;
use App\Models\SmartComponent;

class ProjectHaContextService
{
    /**
     * @return list<array{
     *     map_device_id: string,
     *     component_key: string,
     *     label: string,
     *     icon: string,
     *     floor_id: string,
     *     floor_name: string,
     *     room_id: ?string,
     *     room_name: ?string,
     *     position: array{0: float, 1: float}|null,
     *     mapping: ?HaComponentMapping,
     *     entity: ?HaEntity
     * }>
     */
    public function placedDevices(Project $project): array
    {
        $catalog = SmartComponent::query()->get()->keyBy('key');
        $mappings = HaComponentMapping::query()
            ->where('project_id', $project->id)
            ->with('entity')
            ->get()
            ->keyBy('map_device_id');

        $devices = [];
        foreach ($project->map_data['floors'] ?? [] as $floor) {
            if (! is_array($floor)) {
                continue;
            }
            $floorId = (string) ($floor['id'] ?? '');
            $floorName = (string) ($floor['name'] ?? $floorId);
            $rooms = is_array($floor['rooms'] ?? null) ? $floor['rooms'] : [];

            foreach ($floor['smart_devices'] ?? [] as $device) {
                if (! is_array($device)) {
                    continue;
                }
                $id = (string) ($device['id'] ?? '');
                $type = (string) ($device['type'] ?? '');
                if ($id === '' || $type === '') {
                    continue;
                }

                $pos = $device['position'] ?? null;
                $x = is_array($pos) ? (float) ($pos[0] ?? 0) : 0.0;
                $z = is_array($pos) ? (float) ($pos[1] ?? 0) : 0.0;
                $room = $this->roomAt($rooms, $x, $z);
                /** @var SmartComponent|null $component */
                $component = $catalog->get($type);
                /** @var HaComponentMapping|null $mapping */
                $mapping = $mappings->get($id);

                $devices[] = [
                    'map_device_id' => $id,
                    'component_key' => $type,
                    'label' => $component?->name ?: $type,
                    'icon' => $component?->icon ?: '●',
                    'floor_id' => $floorId,
                    'floor_name' => $floorName,
                    'room_id' => $room['id'] ?? null,
                    'room_name' => $room['name'] ?? null,
                    'position' => is_array($pos) ? [(float) ($pos[0] ?? 0), (float) ($pos[1] ?? 0)] : null,
                    'mapping' => $mapping,
                    'entity' => $mapping?->entity,
                ];
            }
        }

        return $devices;
    }

    /**
     * @return array{linked: list<array>, unlinked: list<array>, linked_count: int, unlinked_count: int, total: int}
     */
    public function mappingStats(Project $project): array
    {
        $devices = $this->placedDevices($project);
        $linked = array_values(array_filter($devices, fn ($d) => $d['mapping'] !== null));
        $unlinked = array_values(array_filter($devices, fn ($d) => $d['mapping'] === null));

        return [
            'linked' => $linked,
            'unlinked' => $unlinked,
            'linked_count' => count($linked),
            'unlinked_count' => count($unlinked),
            'total' => count($devices),
        ];
    }

    /**
     * @return array<string, mixed>
     */
    public function dashboardStats(Project $project): array
    {
        $mapping = $this->mappingStats($project);
        $lastSync = HaSyncRun::query()->latest('id')->first();
        $automations = HaProjectAutomation::query()->where('project_id', $project->id);

        return [
            'last_sync' => $lastSync,
            'entity_count' => HaEntity::query()->count(),
            'device_count' => \App\Models\HaDevice::query()->count(),
            'placed_components' => $mapping['total'],
            'linked_components' => $mapping['linked_count'],
            'unlinked_components' => $mapping['unlinked_count'],
            'generated_automations' => (clone $automations)->count(),
            'uploaded_automations' => (clone $automations)->where('status', HaProjectAutomation::STATUS_UPLOADED)->count(),
            'failed_automations' => (clone $automations)->where('status', HaProjectAutomation::STATUS_FAILED)->count(),
            'draft_automations' => (clone $automations)->where('status', HaProjectAutomation::STATUS_DRAFT)->count(),
        ];
    }

    /**
     * @return list<array{id: string, name: string, floor: string}>
     */
    public function rooms(Project $project): array
    {
        $rooms = [];
        foreach ($project->map_data['floors'] ?? [] as $floor) {
            if (! is_array($floor)) {
                continue;
            }
            $floorName = (string) ($floor['name'] ?? '');
            foreach ($floor['rooms'] ?? [] as $room) {
                if (! is_array($room)) {
                    continue;
                }
                $rooms[] = [
                    'id' => (string) ($room['id'] ?? ''),
                    'name' => (string) ($room['name'] ?? ''),
                    'floor' => $floorName,
                ];
            }
        }

        return $rooms;
    }

    /**
     * @param  list<array<string, mixed>>  $rooms
     * @return array{id: string, name: string}|null
     */
    protected function roomAt(array $rooms, float $x, float $z): ?array
    {
        foreach ($rooms as $room) {
            $polygon = $room['polygon'] ?? null;
            if (! is_array($polygon) || count($polygon) < 3) {
                continue;
            }
            if ($this->pointInPolygon($x, $z, $polygon)) {
                return [
                    'id' => (string) ($room['id'] ?? ''),
                    'name' => (string) ($room['name'] ?? ''),
                ];
            }
        }

        return null;
    }

    /**
     * @param  list<array{0: float|int, 1: float|int}|list<float|int>>  $polygon
     */
    protected function pointInPolygon(float $x, float $z, array $polygon): bool
    {
        $inside = false;
        $n = count($polygon);
        for ($i = 0, $j = $n - 1; $i < $n; $j = $i++) {
            $xi = (float) ($polygon[$i][0] ?? 0);
            $zi = (float) ($polygon[$i][1] ?? 0);
            $xj = (float) ($polygon[$j][0] ?? 0);
            $zj = (float) ($polygon[$j][1] ?? 0);
            $intersect = (($zi > $z) !== ($zj > $z))
                && ($x < ($xj - $xi) * ($z - $zi) / (($zj - $zi) ?: 1e-12) + $xi);
            if ($intersect) {
                $inside = ! $inside;
            }
        }

        return $inside;
    }
}
