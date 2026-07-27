<?php

namespace App\Services\HaAi;

use App\Models\HaAutomationRemote;
use App\Models\HaEntity;
use App\Models\HaProjectAutomation;
use App\Models\HaScene;
use App\Models\HaScript;
use App\Models\Project;
use App\Services\Gemini\GeminiClient;
use Illuminate\Support\Str;

class HaProjectOptimizerService
{
    public function __construct(
        private readonly HaProjectAiContextService $context,
        private readonly ProjectHaContextService $projectContext,
        private readonly GeminiClient $gemini,
    ) {}

    /**
     * @return array{findings: array<string, mixed>, ai_report: string, score_hints: array<string, int>}
     */
    public function analyze(Project $project): array
    {
        $mapping = $this->projectContext->mappingStats($project);
        $automations = HaAutomationRemote::query()->get();
        $scripts = HaScript::query()->get();
        $scenes = HaScene::query()->get();
        $entities = HaEntity::query()->get();
        $helpers = $entities->whereIn('domain', HaProjectAiContextService::HELPER_DOMAINS);

        $local = HaProjectAutomation::query()->where('project_id', $project->id)->get();

        $duplicates = [];
        $byAlias = $automations->groupBy(fn ($a) => Str::lower(trim((string) $a->friendly_name)));
        foreach ($byAlias as $alias => $group) {
            if ($alias !== '' && $group->count() > 1) {
                $duplicates[] = [
                    'alias' => $alias,
                    'entity_ids' => $group->pluck('entity_id')->all(),
                ];
            }
        }

        $referenced = [];
        foreach ($local as $auto) {
            $config = $this->context->parseAutomationConfig($auto->yaml);
            foreach ($this->context->extractEntityIds($config ?? []) as $id) {
                $referenced[$id] = true;
            }
        }
        foreach ($automations as $auto) {
            foreach ($this->context->extractEntityIds($auto->attributes ?? []) as $id) {
                $referenced[$id] = true;
            }
        }

        $broken = [];
        foreach (array_keys($referenced) as $entityId) {
            if (! $entities->contains('entity_id', $entityId)) {
                $broken[] = $entityId;
            } else {
                $ent = $entities->firstWhere('entity_id', $entityId);
                if ($ent && in_array((string) $ent->state, ['unavailable', 'unknown'], true)) {
                    $broken[] = $entityId.' ('.$ent->state.')';
                }
            }
        }

        $unusedScripts = $scripts->filter(fn ($s) => ! isset($referenced[$s->entity_id]))->pluck('entity_id')->all();
        $unusedScenes = $scenes->filter(fn ($s) => ! isset($referenced[$s->entity_id]))->pluck('entity_id')->all();
        $unusedHelpers = $helpers->filter(fn ($h) => ! isset($referenced[$h->entity_id]))->pluck('entity_id')->take(50)->values()->all();

        $unlinkedEntities = $mapping['unlinked'];

        $findings = [
            'duplicate_automations' => $duplicates,
            'unused_scripts' => $unusedScripts,
            'unused_scenes' => $unusedScenes,
            'unused_helpers' => $unusedHelpers,
            'broken_entity_references' => array_values(array_unique($broken)),
            'unlinked_components' => count($unlinkedEntities),
            'linked_components' => $mapping['linked_count'],
            'conflicting_candidates' => $this->conflictCandidates($local),
            'missing_automations_suggestions' => $mapping['unlinked_count'] > 0
                ? ['Some placed components are unlinked — consider mapping before adding automations.']
                : [],
        ];

        $context = $this->context->build($project);
        $system = <<<'SYS'
You are a Home Assistant project optimizer.
Given findings and project context, write a complete optimization report covering duplicates, conflicts, unused items, broken references, and missing automations.
Return ONLY JSON: {"report":"detailed plain text report"}
SYS;

        $decoded = $this->gemini->generateContent(
            [['text' => json_encode(['findings' => $findings, 'project_context_summary' => [
                'knowledge' => $context['project_knowledge'] ?? [],
                'rooms' => $context['rooms'] ?? [],
                'linked' => $mapping['linked_count'],
                'unlinked' => $mapping['unlinked_count'],
            ]], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT)]],
            $system
        );

        return [
            'findings' => $findings,
            'ai_report' => (string) ($decoded['report'] ?? 'No report generated.'),
            'score_hints' => [
                'duplicates' => count($duplicates),
                'broken' => count($broken),
                'unlinked' => $mapping['unlinked_count'],
            ],
        ];
    }

    /**
     * @param  \Illuminate\Support\Collection<int, HaProjectAutomation>  $local
     * @return list<array{a: string, b: string, reason: string}>
     */
    protected function conflictCandidates($local): array
    {
        $out = [];
        $items = $local->values();
        for ($i = 0; $i < $items->count(); $i++) {
            for ($j = $i + 1; $j < $items->count(); $j++) {
                $a = $items[$i];
                $b = $items[$j];
                $ea = $this->context->extractEntityIds($this->context->parseAutomationConfig($a->yaml) ?? []);
                $eb = $this->context->extractEntityIds($this->context->parseAutomationConfig($b->yaml) ?? []);
                $overlap = array_values(array_intersect($ea, $eb));
                if (count($overlap) >= 2) {
                    $out[] = [
                        'a' => (string) ($a->name ?: 'Automation #'.$a->id),
                        'b' => (string) ($b->name ?: 'Automation #'.$b->id),
                        'reason' => 'Share entities: '.implode(', ', array_slice($overlap, 0, 5)),
                    ];
                }
            }
        }

        return array_slice($out, 0, 30);
    }
}
