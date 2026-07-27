<?php

namespace App\Services\HaAi;

use App\Models\HaAutomationRemote;
use App\Models\HaEntity;
use App\Models\HaProjectAutomation;
use App\Models\HaScene;
use App\Models\HaScript;
use App\Models\Project;
use App\Services\Gemini\GeminiClient;
use App\Services\HomeAssistant\HomeAssistantClient;
use InvalidArgumentException;
use Throwable;

class HaAutomationInsightService
{
    public function __construct(
        private readonly HaProjectAiContextService $context,
        private readonly GeminiClient $gemini,
        private readonly HomeAssistantClient $haClient,
        private readonly HaYamlValidator $yamlValidator,
    ) {}

    /**
     * @return array{title: string, explanation: string}
     */
    public function explain(Project $project, string $type, string $key): array
    {
        $subject = $this->resolveSubject($type, $key);
        $context = $this->context->build($project);

        $system = <<<'SYS'
Explain a Home Assistant automation/script/scene for an integrator.
Cover: what it does, why it exists, when it runs, entities used, triggers, conditions, actions, possible problems, possible improvements.
Use project context. Return ONLY JSON: {"title":"string","explanation":"detailed plain text"}
SYS;

        $decoded = $this->gemini->generateContent(
            [['text' => "Project context:\n".json_encode($context, JSON_UNESCAPED_UNICODE)."\n\nSubject:\n".json_encode($subject, JSON_UNESCAPED_UNICODE)]],
            $system
        );

        return [
            'title' => (string) ($decoded['title'] ?? $subject['name'] ?? 'Explanation'),
            'explanation' => (string) ($decoded['explanation'] ?? 'No explanation generated.'),
            'subject' => $subject,
        ];
    }

    /**
     * @return array{title: string, report: string}
     */
    public function debug(Project $project, HaProjectAutomation $automation): array
    {
        $config = $this->context->parseAutomationConfig($automation->yaml) ?? [];
        $entityIds = $this->context->extractEntityIds($config);
        $states = HaEntity::query()->whereIn('entity_id', $entityIds)->get()
            ->mapWithKeys(fn (HaEntity $e) => [$e->entity_id => [
                'state' => $e->state,
                'attributes' => $e->attributes,
            ]]);

        $remote = null;
        if ($automation->ha_automation_id) {
            $remote = HaAutomationRemote::query()
                ->where('ha_automation_id', $automation->ha_automation_id)
                ->orWhere('entity_id', 'automation.'.$automation->ha_automation_id)
                ->first();
        }

        $payload = [
            'project_knowledge' => $this->context->build($project)['project_knowledge'] ?? [],
            'automation' => [
                'name' => $automation->name,
                'yaml' => $automation->yaml,
                'config' => $config,
                'triggers' => $config['trigger'] ?? $config['triggers'] ?? null,
                'conditions' => $config['condition'] ?? $config['conditions'] ?? null,
                'actions' => $config['action'] ?? $config['actions'] ?? null,
                'last_triggered' => data_get($remote?->attributes, 'last_triggered'),
                'remote_state' => $remote?->state,
            ],
            'current_entity_states' => $states,
        ];

        $system = <<<'SYS'
You are a Home Assistant automation debugger.
Explain why it may be working or failing, missing entities, invalid logic, and better implementation.
Return ONLY JSON: {"title":"string","report":"detailed plain text"}
SYS;

        $decoded = $this->gemini->generateContent(
            [['text' => json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT)]],
            $system
        );

        return [
            'title' => (string) ($decoded['title'] ?? 'Debug report'),
            'report' => (string) ($decoded['report'] ?? 'No debug report generated.'),
        ];
    }

    /**
     * Simulate automation against current states (no HA call).
     *
     * @return array{steps: list<array{stage: string, label: string, status: string, detail: string}>, overall: string}
     */
    public function simulate(string $yaml): array
    {
        $config = $this->context->parseAutomationConfig($yaml);
        if (! $config) {
            return [
                'steps' => [[
                    'stage' => 'parse',
                    'label' => 'Parse YAML',
                    'status' => 'failed',
                    'detail' => 'Invalid automation YAML.',
                ]],
                'overall' => 'failed',
            ];
        }

        $triggers = $config['trigger'] ?? $config['triggers'] ?? [];
        $conditions = $config['condition'] ?? $config['conditions'] ?? [];
        $actions = $config['action'] ?? $config['actions'] ?? [];
        if (! is_array($triggers) || (! array_is_list($triggers) && $triggers !== [])) {
            $triggers = [$triggers];
        }
        if (! is_array($conditions)) {
            $conditions = $conditions ? [$conditions] : [];
        } elseif (! array_is_list($conditions) && $conditions !== []) {
            $conditions = [$conditions];
        }
        if (! is_array($actions) || (! array_is_list($actions) && $actions !== [])) {
            $actions = [$actions];
        }

        $steps = [];
        $entityIds = $this->context->extractEntityIds($config);
        $states = HaEntity::query()->whereIn('entity_id', $entityIds)->get()->keyBy('entity_id');

        $triggerPass = count($triggers) > 0;
        foreach ($triggers as $i => $trigger) {
            $detail = is_array($trigger) ? json_encode($trigger, JSON_UNESCAPED_SLASHES) : (string) $trigger;
            $entity = is_array($trigger) ? ($trigger['entity_id'] ?? null) : null;
            $ok = true;
            $note = 'Trigger definition present (runtime event not simulated).';
            if (is_string($entity)) {
                $ent = $states->get($entity);
                if (! $ent) {
                    $ok = false;
                    $note = "Referenced entity missing locally: {$entity}";
                } else {
                    $note = "Entity {$entity} current state: {$ent->state}";
                }
            }
            $steps[] = [
                'stage' => 'trigger',
                'label' => 'Trigger #'.($i + 1),
                'status' => $ok ? 'passed' : 'failed',
                'detail' => $note.' · '.$detail,
            ];
            $triggerPass = $triggerPass && $ok;
        }
        if ($triggers === []) {
            $steps[] = [
                'stage' => 'trigger',
                'label' => 'Trigger',
                'status' => 'failed',
                'detail' => 'No triggers defined.',
            ];
            $triggerPass = false;
        }

        $conditionPass = true;
        if ($conditions === []) {
            $steps[] = [
                'stage' => 'condition',
                'label' => 'Conditions',
                'status' => 'passed',
                'detail' => 'No conditions (always pass).',
            ];
        } else {
            foreach ($conditions as $i => $condition) {
                $eval = $this->evaluateCondition($condition, $states);
                $steps[] = [
                    'stage' => 'condition',
                    'label' => 'Condition #'.($i + 1),
                    'status' => $eval['ok'] ? 'passed' : 'failed',
                    'detail' => $eval['detail'],
                ];
                $conditionPass = $conditionPass && $eval['ok'];
            }
        }

        $actionPass = count($actions) > 0;
        foreach ($actions as $i => $action) {
            $entity = is_array($action) ? ($action['entity_id'] ?? data_get($action, 'target.entity_id')) : null;
            if (is_array($entity)) {
                $entity = $entity[0] ?? null;
            }
            $ok = true;
            $note = 'Action would run (simulation only).';
            if (is_string($entity)) {
                if (! $states->has($entity) && ! HaEntity::query()->where('entity_id', $entity)->exists()) {
                    $ok = false;
                    $note = "Action target entity missing: {$entity}";
                } else {
                    $note = "Action targets {$entity}.";
                }
            }
            $steps[] = [
                'stage' => 'action',
                'label' => 'Action #'.($i + 1),
                'status' => $ok ? 'passed' : 'failed',
                'detail' => $note.' · '.(is_array($action) ? json_encode($action, JSON_UNESCAPED_SLASHES) : (string) $action),
            ];
            $actionPass = $actionPass && $ok;
        }
        if ($actions === []) {
            $steps[] = [
                'stage' => 'action',
                'label' => 'Actions',
                'status' => 'failed',
                'detail' => 'No actions defined.',
            ];
            $actionPass = false;
        }

        $overall = ($triggerPass && $conditionPass && $actionPass) ? 'passed' : 'failed';

        return compact('steps', 'overall');
    }

    /**
     * @param  mixed  $condition
     * @param  \Illuminate\Support\Collection<string, HaEntity>  $states
     * @return array{ok: bool, detail: string}
     */
    protected function evaluateCondition(mixed $condition, $states): array
    {
        if (! is_array($condition)) {
            return ['ok' => true, 'detail' => 'Non-structured condition — assumed pass in simulator.'];
        }

        $type = $condition['condition'] ?? $condition['type'] ?? null;
        if ($type === 'state' || isset($condition['entity_id'], $condition['state'])) {
            $entityId = $condition['entity_id'] ?? null;
            $expected = $condition['state'] ?? null;
            if (! is_string($entityId)) {
                return ['ok' => false, 'detail' => 'State condition missing entity_id.'];
            }
            $ent = $states->get($entityId) ?? HaEntity::query()->where('entity_id', $entityId)->first();
            if (! $ent) {
                return ['ok' => false, 'detail' => "Entity unavailable: {$entityId}"];
            }
            $ok = (string) $ent->state === (string) $expected;

            return [
                'ok' => $ok,
                'detail' => $ok
                    ? "{$entityId} is {$ent->state} (expected {$expected})"
                    : "{$entityId} is {$ent->state}, expected {$expected}",
            ];
        }

        if ($type === 'numeric_state' && isset($condition['entity_id'])) {
            $entityId = (string) $condition['entity_id'];
            $ent = $states->get($entityId) ?? HaEntity::query()->where('entity_id', $entityId)->first();
            if (! $ent || ! is_numeric($ent->state)) {
                return ['ok' => false, 'detail' => "Numeric state unavailable for {$entityId}"];
            }
            $value = (float) $ent->state;
            $ok = true;
            if (isset($condition['above']) && $value <= (float) $condition['above']) {
                $ok = false;
            }
            if (isset($condition['below']) && $value >= (float) $condition['below']) {
                $ok = false;
            }

            return ['ok' => $ok, 'detail' => "{$entityId} numeric state={$value}"];
        }

        return [
            'ok' => true,
            'detail' => 'Condition type "'.($type ?: 'unknown').'" not fully simulated — marked pass for structure check. '.json_encode($condition, JSON_UNESCAPED_SLASHES),
        ];
    }

    /**
     * @return array<string, mixed>
     */
    protected function resolveSubject(string $type, string $key): array
    {
        return match ($type) {
            'local_automation' => $this->localAutomationSubject($key),
            'automation' => $this->remoteAutomation($key),
            'script' => $this->scriptSubject($key),
            'scene' => $this->sceneSubject($key),
            default => throw new InvalidArgumentException('Unknown subject type.'),
        };
    }

    /**
     * @return array<string, mixed>
     */
    protected function localAutomationSubject(string $key): array
    {
        $row = HaProjectAutomation::query()->findOrFail($key);

        return [
            'type' => 'local_automation',
            'id' => $row->id,
            'name' => $row->name,
            'description' => $row->description,
            'yaml' => $row->yaml,
            'status' => $row->status,
            'ha_automation_id' => $row->ha_automation_id,
            'prompt' => $row->prompt,
        ];
    }

    /**
     * @return array<string, mixed>
     */
    protected function remoteAutomation(string $entityId): array
    {
        $row = HaAutomationRemote::query()->where('entity_id', $entityId)->firstOrFail();
        $yaml = null;
        if ($row->ha_automation_id) {
            try {
                $config = $this->haClient->getAutomationConfig($row->ha_automation_id);
                $yaml = \Symfony\Component\Yaml\Yaml::dump($config, 8, 2);
            } catch (Throwable) {
                $yaml = null;
            }
        }

        return [
            'type' => 'automation',
            'name' => $row->friendly_name,
            'entity_id' => $row->entity_id,
            'ha_automation_id' => $row->ha_automation_id,
            'state' => $row->state,
            'attributes' => $row->attributes,
            'yaml' => $yaml,
        ];
    }

    /**
     * @return array<string, mixed>
     */
    protected function scriptSubject(string $entityId): array
    {
        $row = HaScript::query()->where('entity_id', $entityId)->firstOrFail();

        return [
            'type' => 'script',
            'name' => $row->friendly_name,
            'entity_id' => $row->entity_id,
            'state' => $row->state,
            'attributes' => $row->attributes,
        ];
    }

    /**
     * @return array<string, mixed>
     */
    protected function sceneSubject(string $entityId): array
    {
        $row = HaScene::query()->where('entity_id', $entityId)->firstOrFail();

        return [
            'type' => 'scene',
            'name' => $row->friendly_name,
            'entity_id' => $row->entity_id,
            'state' => $row->state,
            'attributes' => $row->attributes,
        ];
    }
}
