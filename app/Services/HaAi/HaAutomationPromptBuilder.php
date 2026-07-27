<?php

namespace App\Services\HaAi;

use App\Models\HaArea;
use App\Models\HaAutomationRemote;
use App\Models\HaEntity;
use App\Models\HaFloor;
use App\Models\HaProjectAutomation;
use App\Models\HaScene;
use App\Models\HaScript;
use App\Models\Project;
use InvalidArgumentException;

class HaAutomationPromptBuilder
{
    public function __construct(
        private readonly ProjectHaContextService $context,
        private readonly HaProjectKnowledgeService $knowledge,
    ) {}

    /**
     * @param  list<string>  $mapDeviceIds
     * @return array<string, mixed>
     */
    public function buildFullContext(Project $project, array $mapDeviceIds): array
    {
        $devices = collect($this->context->placedDevices($project))
            ->whereIn('map_device_id', $mapDeviceIds)
            ->values();

        if ($devices->isEmpty()) {
            throw new InvalidArgumentException('Select at least one smart component.');
        }

        $unlinked = $devices->filter(fn ($d) => $d['mapping'] === null || blank($d['mapping']->entity_id));
        if ($unlinked->isNotEmpty()) {
            $names = $unlinked->map(fn ($d) => $d['label'])->implode(', ');
            throw new InvalidArgumentException('Unlinked components cannot be used: '.$names);
        }

        $entityIds = $devices->map(fn ($d) => $d['mapping']->entity_id)->unique()->values();
        $entities = HaEntity::query()->whereIn('entity_id', $entityIds)->get()->keyBy('entity_id');

        $selected = [];
        foreach ($devices as $device) {
            $entityId = $device['mapping']->entity_id;
            /** @var HaEntity|null $entity */
            $entity = $entities->get($entityId);
            $selected[] = [
                'map_device_id' => $device['map_device_id'],
                'component' => $device['label'],
                'component_key' => $device['component_key'],
                'room' => $device['room_name'],
                'floor' => $device['floor_name'],
                'entity_id' => $entityId,
                'domain' => $entity?->domain,
                'friendly_name' => $entity?->friendly_name,
                'state' => $entity?->state,
                'attributes' => $entity?->attributes ?? [],
            ];
        }

        $existingAutomations = HaAutomationRemote::query()
            ->orderBy('friendly_name')
            ->get()
            ->map(fn (HaAutomationRemote $row) => [
                'entity_id' => $row->entity_id,
                'ha_automation_id' => $row->ha_automation_id,
                'alias' => $row->friendly_name,
                'state' => $row->state,
                'attributes' => $row->attributes ?? [],
            ])
            ->all();

        $projectHistory = HaProjectAutomation::query()
            ->where('project_id', $project->id)
            ->latest()
            ->limit(40)
            ->get(['id', 'name', 'description', 'status', 'ha_automation_id', 'prompt', 'yaml'])
            ->map(fn (HaProjectAutomation $row) => [
                'local_id' => $row->id,
                'name' => $row->name,
                'description' => $row->description,
                'status' => $row->status,
                'ha_automation_id' => $row->ha_automation_id,
                'prompt' => $row->prompt,
                'yaml_preview' => mb_substr((string) $row->yaml, 0, 1200),
            ])
            ->all();

        return [
            'project' => [
                'name' => $project->name,
                'slug' => $project->slug,
                'client' => $project->client_name,
                'location' => $project->project_location,
            ],
            'project_knowledge' => $this->knowledge->toContext($project),
            'rooms' => $this->context->rooms($project),
            'selected_components' => $selected,
            'linked_home_assistant_entities' => $selected,
            'current_states' => collect($selected)->map(fn ($s) => [
                'entity_id' => $s['entity_id'],
                'state' => $s['state'],
                'attributes' => $s['attributes'],
            ])->values()->all(),
            'areas' => HaArea::query()->orderBy('name')->get(['ha_id', 'name', 'floor_id'])->toArray(),
            'floors' => HaFloor::query()->orderBy('level')->get(['ha_id', 'name', 'level'])->toArray(),
            'existing_automations' => $existingAutomations,
            'existing_scripts' => HaScript::query()->orderBy('friendly_name')->get(['entity_id', 'friendly_name', 'state', 'attributes'])->toArray(),
            'existing_scenes' => HaScene::query()->orderBy('friendly_name')->get(['entity_id', 'friendly_name', 'state', 'attributes'])->toArray(),
            'project_automation_history' => $projectHistory,
            'domains_in_selection' => collect($selected)->pluck('domain')->filter()->unique()->values()->all(),
        ];
    }

    /**
     * @param  list<string>  $mapDeviceIds
     * @return array{system: string, user: string}
     */
    public function buildAnalysisPrompt(Project $project, array $mapDeviceIds, string $prompt): array
    {
        $context = $this->buildFullContext($project, $mapDeviceIds);

        $system = <<<'SYS'
You are a Home Assistant automation architect.
Analyze whether the user's requested automation already exists or partially exists.
Treat project_knowledge as permanent project memory and respect its preferences, constraints, naming conventions, and behaviors.
You MUST return ONLY valid JSON (no markdown) with this exact shape:
{
  "similar_found": boolean,
  "similarity_percent": number,
  "recommendation": "reuse" | "modify" | "create_new",
  "existing_automation": {
    "entity_id": string|null,
    "ha_automation_id": string|null,
    "alias": string|null
  } | null,
  "rationale": string,
  "analysis_summary": string
}
Rules:
- Compare against existing_automations and project_automation_history.
- Prefer reuse/modify when intent and entities overlap strongly.
- Never invent entity IDs.
- similarity_percent is 0-100.
SYS;

        $user = "Home Assistant + project context (JSON):\n"
            .json_encode($context, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES)
            ."\n\nUser automation request:\n"
            .trim($prompt)
            ."\n\nReturn the analysis JSON only.";

        return ['system' => $system, 'user' => $user];
    }

    /**
     * @param  list<string>  $mapDeviceIds
     * @param  array{mode: string, preserve_automation_id?: ?string, existing_yaml?: ?string}  $options
     * @return array{system: string, user: string}
     */
    public function buildGenerationPrompt(Project $project, array $mapDeviceIds, string $prompt, array $options = []): array
    {
        $context = $this->buildFullContext($project, $mapDeviceIds);
        $mode = $options['mode'] ?? 'create_new';
        $preserveId = $options['preserve_automation_id'] ?? null;
        $existingYaml = $options['existing_yaml'] ?? null;

        $system = <<<'SYS'
You are a Home Assistant automation engineer.
Treat project_knowledge as permanent project memory. Follow its house description, customer preferences, naming conventions, automation rules, preferred behaviors, notes, constraints, integrations, network info, ESPHome notes, energy preferences, and security preferences.
Return ONLY valid JSON (no markdown) with this shape:
{
  "alias": string,
  "description": string,
  "yaml": string
}
Rules for "yaml":
- Must be valid Home Assistant automation YAML as a string.
- No markdown fences inside yaml.
- Use ONLY entity_id values from context. Never invent entity IDs.
- Prefer schema: id, alias, description, trigger/triggers, condition/conditions (optional), action/actions.
- Stay consistent with project_knowledge and previous project style.
SYS;

        if ($mode === 'modify' && $preserveId) {
            $system .= "\n- This is a MODIFY operation. You MUST keep automation id exactly: {$preserveId}";
            $system .= "\n- Update triggers/actions to satisfy the new request while preserving that id.";
        } else {
            $system .= "\n- This is CREATE NEW. Use a unique new id (slug-like, not colliding with existing automations).";
        }

        $user = "Context (JSON):\n"
            .json_encode($context, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES)
            ."\n\nUser request:\n".trim($prompt);

        if ($existingYaml) {
            $user .= "\n\nExisting automation YAML to base changes on:\n".$existingYaml;
        }

        $user .= "\n\nReturn JSON with alias, description, and yaml.";

        return ['system' => $system, 'user' => $user];
    }

    /**
     * @deprecated Use buildGenerationPrompt / buildAnalysisPrompt
     *
     * @param  list<string>  $mapDeviceIds
     * @return array{system: string, user: string}
     */
    public function build(Project $project, array $mapDeviceIds, string $prompt): array
    {
        return $this->buildGenerationPrompt($project, $mapDeviceIds, $prompt, ['mode' => 'create_new']);
    }
}
