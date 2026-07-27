<?php

namespace App\Services\HaAi;

use App\Models\HaAutomationRemote;
use App\Models\HaDevice;
use App\Models\HaEntity;
use App\Models\HaProjectAutomation;
use App\Models\HaScene;
use App\Models\HaScript;
use App\Models\HaSyncRun;
use App\Models\Project;

/**
 * Shared read-only project context for chat, explain, debug, optimizer, health.
 */
class HaProjectAiContextService
{
    public const HELPER_DOMAINS = [
        'input_boolean',
        'input_button',
        'input_datetime',
        'input_number',
        'input_select',
        'input_text',
        'timer',
        'counter',
        'schedule',
    ];

    public function __construct(
        private readonly ProjectHaContextService $projectContext,
        private readonly HaProjectKnowledgeService $knowledge,
        private readonly HaYamlValidator $yamlValidator,
    ) {}

    /**
     * @return array<string, mixed>
     */
    public function build(Project $project, bool $includeFullYamlHistory = false): array
    {
        $mapping = $this->projectContext->mappingStats($project);
        $lastSync = HaSyncRun::query()->latest('id')->first();

        $entities = HaEntity::query()
            ->orderBy('domain')
            ->orderBy('entity_id')
            ->limit(2000)
            ->get(['entity_id', 'domain', 'friendly_name', 'state', 'area_id', 'device_id', 'attributes', 'disabled']);

        $helpers = $entities->whereIn('domain', self::HELPER_DOMAINS)->values();

        $historyQuery = HaProjectAutomation::query()
            ->where('project_id', $project->id)
            ->latest()
            ->limit(50);

        $history = $historyQuery->get()->map(function (HaProjectAutomation $row) use ($includeFullYamlHistory) {
            return [
                'id' => $row->id,
                'name' => $row->name,
                'description' => $row->description,
                'status' => $row->status,
                'ha_automation_id' => $row->ha_automation_id,
                'prompt' => $row->prompt,
                'yaml' => $includeFullYamlHistory
                    ? $row->yaml
                    : mb_substr((string) $row->yaml, 0, 1500),
                'error_message' => $row->error_message,
                'updated_at' => optional($row->updated_at)?->toIso8601String(),
            ];
        })->all();

        return [
            'project' => [
                'id' => $project->id,
                'name' => $project->name,
                'slug' => $project->slug,
                'client' => $project->client_name,
                'location' => $project->project_location,
                'description' => $project->description,
            ],
            'project_knowledge' => $this->knowledge->toContext($project),
            'rooms' => $this->projectContext->rooms($project),
            'smart_components' => array_map(function ($d) {
                return [
                    'map_device_id' => $d['map_device_id'],
                    'label' => $d['label'],
                    'component_key' => $d['component_key'],
                    'room' => $d['room_name'],
                    'floor' => $d['floor_name'],
                    'entity_id' => $d['mapping']->entity_id ?? null,
                    'linked' => $d['mapping'] !== null,
                    'state' => $d['entity']->state ?? null,
                ];
            }, array_merge($mapping['linked'], $mapping['unlinked'])),
            'linked_components' => $mapping['linked_count'],
            'unlinked_components' => $mapping['unlinked_count'],
            'entities_sample' => $entities->take(400)->map(fn (HaEntity $e) => [
                'entity_id' => $e->entity_id,
                'domain' => $e->domain,
                'friendly_name' => $e->friendly_name,
                'state' => $e->state,
                'area_id' => $e->area_id,
                'disabled' => $e->disabled,
            ])->values()->all(),
            'helpers' => $helpers->map(fn (HaEntity $e) => [
                'entity_id' => $e->entity_id,
                'domain' => $e->domain,
                'friendly_name' => $e->friendly_name,
                'state' => $e->state,
            ])->all(),
            'existing_automations' => HaAutomationRemote::query()->orderBy('friendly_name')->get()->map(fn ($r) => [
                'entity_id' => $r->entity_id,
                'ha_automation_id' => $r->ha_automation_id,
                'alias' => $r->friendly_name,
                'state' => $r->state,
                'last_triggered' => data_get($r->attributes, 'last_triggered'),
                'attributes' => $r->attributes,
            ])->all(),
            'existing_scripts' => HaScript::query()->orderBy('friendly_name')->get(['entity_id', 'friendly_name', 'state', 'attributes'])->toArray(),
            'existing_scenes' => HaScene::query()->orderBy('friendly_name')->get(['entity_id', 'friendly_name', 'state', 'attributes'])->toArray(),
            'devices' => HaDevice::query()->limit(500)->get(['ha_id', 'name', 'name_by_user', 'area_id', 'manufacturer', 'model'])->toArray(),
            'automation_history' => $history,
            'last_synchronization' => $lastSync ? [
                'status' => $lastSync->status,
                'finished_at' => optional($lastSync->finished_at)?->toIso8601String(),
                'entities_count' => $lastSync->entities_count,
                'devices_count' => $lastSync->devices_count,
                'automations_count' => $lastSync->automations_count,
                'error_message' => $lastSync->error_message,
            ] : null,
        ];
    }

    /**
     * @return array<string, mixed>|null
     */
    public function parseAutomationConfig(?string $yaml): ?array
    {
        if (blank($yaml)) {
            return null;
        }
        $result = $this->yamlValidator->validate($yaml);
        if (! is_array($result['data'])) {
            return null;
        }
        $data = $result['data'];
        if (array_is_list($data)) {
            $data = $data[0] ?? null;
        }

        return is_array($data) ? $data : null;
    }

    /**
     * Extract entity_ids referenced in nested config arrays.
     *
     * @param  mixed  $node
     * @return list<string>
     */
    public function extractEntityIds(mixed $node): array
    {
        $found = [];
        $walk = function ($value) use (&$walk, &$found) {
            if (is_string($value) && preg_match('/^[a-z0-9_]+\.[a-z0-9_]+$/i', $value)) {
                $found[$value] = true;
            } elseif (is_array($value)) {
                foreach ($value as $k => $v) {
                    if (in_array($k, ['entity_id', 'entity', 'device_id'], true) || is_int($k)) {
                        if (is_string($v) && preg_match('/^[a-z0-9_]+\.[a-z0-9_]+$/i', $v)) {
                            $found[$v] = true;
                        } elseif (is_array($v)) {
                            $walk($v);
                        }
                    } else {
                        $walk($v);
                    }
                }
            }
        };
        $walk($node);

        return array_keys($found);
    }
}
