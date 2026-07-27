<?php

namespace App\Services\HaAi;

use App\Models\HaAutomationRemote;
use App\Models\HaEntity;
use App\Models\HaProjectAutomation;
use App\Models\HaScene;
use App\Models\HaScript;
use App\Models\Project;
use App\Models\SmartComponent;

class HaGlobalSearchService
{
    /**
     * @return array<string, list<array{type: string, title: string, subtitle: string, key: string}>>
     */
    public function search(Project $project, string $q, int $limit = 40): array
    {
        $q = trim($q);
        if ($q === '') {
            return [
                'automations' => [],
                'scripts' => [],
                'scenes' => [],
                'helpers' => [],
                'entities' => [],
                'components' => [],
            ];
        }

        $term = '%'.$q.'%';

        $localAutos = HaProjectAutomation::query()
            ->where('project_id', $project->id)
            ->where(function ($query) use ($term) {
                $query->where('name', 'like', $term)
                    ->orWhere('description', 'like', $term)
                    ->orWhere('yaml', 'like', $term)
                    ->orWhere('prompt', 'like', $term);
            })
            ->limit($limit)
            ->get()
            ->map(fn ($a) => [
                'type' => 'local_automation',
                'title' => $a->name ?: 'Automation #'.$a->id,
                'subtitle' => $a->status,
                'key' => (string) $a->id,
                'url' => route('ha-ai.automations.show', [$project, $a]),
            ]);

        $remoteAutos = HaAutomationRemote::query()
            ->where(function ($query) use ($term) {
                $query->where('friendly_name', 'like', $term)->orWhere('entity_id', 'like', $term);
            })
            ->limit($limit)
            ->get()
            ->map(fn ($a) => [
                'type' => 'automation',
                'title' => $a->friendly_name ?: $a->entity_id,
                'subtitle' => $a->entity_id,
                'key' => $a->entity_id,
                'url' => route('ha-ai.search', $project).'?q='.urlencode($q),
            ]);

        return [
            'automations' => $localAutos->concat($remoteAutos)->take($limit)->values()->all(),
            'scripts' => HaScript::query()
                ->where(function ($query) use ($term) {
                    $query->where('friendly_name', 'like', $term)->orWhere('entity_id', 'like', $term);
                })->limit($limit)->get()
                ->map(fn ($s) => [
                    'type' => 'script',
                    'title' => $s->friendly_name ?: $s->entity_id,
                    'subtitle' => $s->entity_id,
                    'key' => $s->entity_id,
                    'url' => route('ha-ai.library', [$project, 'scripts']),
                ])->all(),
            'scenes' => HaScene::query()
                ->where(function ($query) use ($term) {
                    $query->where('friendly_name', 'like', $term)->orWhere('entity_id', 'like', $term);
                })->limit($limit)->get()
                ->map(fn ($s) => [
                    'type' => 'scene',
                    'title' => $s->friendly_name ?: $s->entity_id,
                    'subtitle' => $s->entity_id,
                    'key' => $s->entity_id,
                    'url' => route('ha-ai.library', [$project, 'scenes']),
                ])->all(),
            'helpers' => HaEntity::query()
                ->whereIn('domain', HaProjectAiContextService::HELPER_DOMAINS)
                ->where(function ($query) use ($term) {
                    $query->where('friendly_name', 'like', $term)->orWhere('entity_id', 'like', $term);
                })->limit($limit)->get()
                ->map(fn ($e) => [
                    'type' => 'helper',
                    'title' => $e->friendly_name ?: $e->entity_id,
                    'subtitle' => $e->entity_id.' · '.$e->state,
                    'key' => $e->entity_id,
                    'url' => route('ha-ai.devices', $project).'?q='.urlencode($e->entity_id),
                ])->all(),
            'entities' => HaEntity::query()
                ->where(function ($query) use ($term) {
                    $query->where('friendly_name', 'like', $term)
                        ->orWhere('entity_id', 'like', $term)
                        ->orWhere('domain', 'like', $term);
                })->limit($limit)->get()
                ->map(fn ($e) => [
                    'type' => 'entity',
                    'title' => $e->friendly_name ?: $e->entity_id,
                    'subtitle' => $e->entity_id.' · '.$e->state,
                    'key' => $e->entity_id,
                    'url' => route('ha-ai.devices', $project).'?q='.urlencode($e->entity_id),
                ])->all(),
            'components' => SmartComponent::query()
                ->where(function ($query) use ($term) {
                    $query->where('name', 'like', $term)->orWhere('key', 'like', $term)->orWhere('model', 'like', $term);
                })->limit($limit)->get()
                ->map(fn ($c) => [
                    'type' => 'component',
                    'title' => $c->name,
                    'subtitle' => $c->key,
                    'key' => $c->key,
                    'url' => route('ha-ai.mapping', $project),
                ])->all(),
        ];
    }
}
