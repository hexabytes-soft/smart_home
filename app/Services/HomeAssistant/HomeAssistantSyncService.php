<?php

namespace App\Services\HomeAssistant;

use App\Models\HaArea;
use App\Models\HaAutomationRemote;
use App\Models\HaDevice;
use App\Models\HaEntity;
use App\Models\HaFloor;
use App\Models\HaLabel;
use App\Models\HaScene;
use App\Models\HaScript;
use App\Models\HaSyncRun;
use Illuminate\Support\Facades\DB;
use Throwable;

class HomeAssistantSyncService
{
    public function __construct(
        private readonly HomeAssistantClient $client,
    ) {}

    public function syncAll(): HaSyncRun
    {
        $run = HaSyncRun::query()->create([
            'status' => 'running',
            'started_at' => now(),
        ]);

        try {
            $states = $this->client->getStates();
            $registries = $this->safeRegistries();

            $counts = DB::transaction(function () use ($states, $registries) {
                return [
                    'areas' => $this->syncAreas($registries['areas'] ?? []),
                    'floors' => $this->syncFloors($registries['floors'] ?? []),
                    'labels' => $this->syncLabels($registries['labels'] ?? []),
                    'devices' => $this->syncDevices($registries['devices'] ?? []),
                    'entities' => $this->syncEntities($states, $registries['entities'] ?? []),
                    'scripts' => $this->syncDomainCollection($states, 'script', HaScript::class),
                    'scenes' => $this->syncDomainCollection($states, 'scene', HaScene::class),
                    'automations' => $this->syncAutomations($states),
                ];
            });

            $run->update([
                'status' => 'success',
                'areas_count' => $counts['areas'],
                'floors_count' => $counts['floors'],
                'labels_count' => $counts['labels'],
                'devices_count' => $counts['devices'],
                'entities_count' => $counts['entities'],
                'scripts_count' => $counts['scripts'],
                'scenes_count' => $counts['scenes'],
                'automations_count' => $counts['automations'],
                'finished_at' => now(),
                'error_message' => null,
            ]);
        } catch (Throwable $e) {
            $run->update([
                'status' => 'failed',
                'error_message' => $e->getMessage(),
                'finished_at' => now(),
            ]);
            throw $e;
        }

        return $run->fresh();
    }

    /**
     * @return array<string, list<array<string, mixed>>>
     */
    protected function safeRegistries(): array
    {
        try {
            return $this->client->fetchRegistries();
        } catch (Throwable) {
            return [
                'areas' => [],
                'devices' => [],
                'entities' => [],
                'floors' => [],
                'labels' => [],
            ];
        }
    }

    /**
     * @param  list<array<string, mixed>>  $rows
     */
    protected function syncAreas(array $rows): int
    {
        $seen = [];
        foreach ($rows as $row) {
            $id = (string) ($row['area_id'] ?? $row['id'] ?? '');
            if ($id === '') {
                continue;
            }
            $seen[] = $id;
            HaArea::query()->updateOrCreate(
                ['ha_id' => $id],
                [
                    'name' => (string) ($row['name'] ?? $id),
                    'floor_id' => $row['floor_id'] ?? null,
                    'icon' => $row['icon'] ?? null,
                    'aliases' => $row['aliases'] ?? [],
                    'labels' => $row['labels'] ?? [],
                    'raw' => $row,
                ]
            );
        }

        return count($seen);
    }

    /**
     * @param  list<array<string, mixed>>  $rows
     */
    protected function syncFloors(array $rows): int
    {
        $count = 0;
        foreach ($rows as $row) {
            $id = (string) ($row['floor_id'] ?? $row['id'] ?? '');
            if ($id === '') {
                continue;
            }
            HaFloor::query()->updateOrCreate(
                ['ha_id' => $id],
                [
                    'name' => (string) ($row['name'] ?? $id),
                    'level' => isset($row['level']) ? (int) $row['level'] : null,
                    'icon' => $row['icon'] ?? null,
                    'aliases' => $row['aliases'] ?? [],
                    'raw' => $row,
                ]
            );
            $count++;
        }

        return $count;
    }

    /**
     * @param  list<array<string, mixed>>  $rows
     */
    protected function syncLabels(array $rows): int
    {
        $count = 0;
        foreach ($rows as $row) {
            $id = (string) ($row['label_id'] ?? $row['id'] ?? '');
            if ($id === '') {
                continue;
            }
            HaLabel::query()->updateOrCreate(
                ['ha_id' => $id],
                [
                    'name' => (string) ($row['name'] ?? $id),
                    'color' => $row['color'] ?? null,
                    'icon' => $row['icon'] ?? null,
                    'description' => $row['description'] ?? null,
                    'raw' => $row,
                ]
            );
            $count++;
        }

        return $count;
    }

    /**
     * @param  list<array<string, mixed>>  $rows
     */
    protected function syncDevices(array $rows): int
    {
        $count = 0;
        foreach ($rows as $row) {
            $id = (string) ($row['id'] ?? '');
            if ($id === '') {
                continue;
            }
            HaDevice::query()->updateOrCreate(
                ['ha_id' => $id],
                [
                    'name' => $row['name'] ?? null,
                    'name_by_user' => $row['name_by_user'] ?? null,
                    'manufacturer' => $row['manufacturer'] ?? null,
                    'model' => $row['model'] ?? null,
                    'area_id' => $row['area_id'] ?? null,
                    'labels' => $row['labels'] ?? [],
                    'raw' => $row,
                ]
            );
            $count++;
        }

        return $count;
    }

    /**
     * @param  list<array<string, mixed>>  $states
     * @param  list<array<string, mixed>>  $registry
     */
    protected function syncEntities(array $states, array $registry): int
    {
        $registryByEntity = [];
        foreach ($registry as $row) {
            $eid = (string) ($row['entity_id'] ?? '');
            if ($eid !== '') {
                $registryByEntity[$eid] = $row;
            }
        }

        $count = 0;
        foreach ($states as $state) {
            $entityId = (string) ($state['entity_id'] ?? '');
            if ($entityId === '' || ! str_contains($entityId, '.')) {
                continue;
            }

            $domain = explode('.', $entityId, 2)[0];
            $attrs = is_array($state['attributes'] ?? null) ? $state['attributes'] : [];
            $reg = $registryByEntity[$entityId] ?? [];

            HaEntity::query()->updateOrCreate(
                ['entity_id' => $entityId],
                [
                    'domain' => $domain,
                    'friendly_name' => $attrs['friendly_name'] ?? ($reg['name'] ?? null),
                    'platform' => $reg['platform'] ?? null,
                    'device_id' => $reg['device_id'] ?? null,
                    'area_id' => $reg['area_id'] ?? null,
                    'state' => isset($state['state']) ? (string) $state['state'] : null,
                    'attributes' => $attrs,
                    'labels' => $reg['labels'] ?? [],
                    'disabled' => (bool) ($reg['disabled_by'] ?? false),
                    'raw' => ['state' => $state, 'registry' => $reg],
                    'state_changed_at' => isset($state['last_changed']) ? date('Y-m-d H:i:s', strtotime((string) $state['last_changed'])) : null,
                ]
            );
            $count++;
        }

        return $count;
    }

    /**
     * @param  list<array<string, mixed>>  $states
     * @param  class-string  $modelClass
     */
    protected function syncDomainCollection(array $states, string $domain, string $modelClass): int
    {
        $count = 0;
        foreach ($states as $state) {
            $entityId = (string) ($state['entity_id'] ?? '');
            if (! str_starts_with($entityId, $domain.'.')) {
                continue;
            }
            $attrs = is_array($state['attributes'] ?? null) ? $state['attributes'] : [];
            $modelClass::query()->updateOrCreate(
                ['entity_id' => $entityId],
                [
                    'friendly_name' => $attrs['friendly_name'] ?? null,
                    'state' => isset($state['state']) ? (string) $state['state'] : null,
                    'attributes' => $attrs,
                    'raw' => $state,
                ]
            );
            $count++;
        }

        return $count;
    }

    /**
     * @param  list<array<string, mixed>>  $states
     */
    protected function syncAutomations(array $states): int
    {
        $count = 0;
        foreach ($states as $state) {
            $entityId = (string) ($state['entity_id'] ?? '');
            if (! str_starts_with($entityId, 'automation.')) {
                continue;
            }
            $attrs = is_array($state['attributes'] ?? null) ? $state['attributes'] : [];
            HaAutomationRemote::query()->updateOrCreate(
                ['entity_id' => $entityId],
                [
                    'friendly_name' => $attrs['friendly_name'] ?? null,
                    'state' => isset($state['state']) ? (string) $state['state'] : null,
                    'ha_automation_id' => $attrs['id'] ?? null,
                    'attributes' => $attrs,
                    'raw' => $state,
                ]
            );
            $count++;
        }

        return $count;
    }
}
