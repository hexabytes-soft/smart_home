<?php

namespace App\Services\HaAi;

use App\Models\HaAutomationRemote;
use App\Models\HaComponentMapping;
use App\Models\HaEntity;
use App\Models\HaProjectAutomation;
use App\Models\HaProjectKnowledge;
use App\Models\HaScene;
use App\Models\HaScript;
use App\Models\Project;
use App\Models\SmartComponent;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use ZipArchive;

class HaProjectBackupService
{
    public function __construct(
        private readonly HaProjectKnowledgeService $knowledge,
        private readonly ProjectHaContextService $projectContext,
    ) {}

    public function exportZip(Project $project): string
    {
        $payload = [
            'exported_at' => now()->toIso8601String(),
            'version' => 1,
            'project' => $project->only([
                'id', 'name', 'slug', 'description', 'client_name', 'client_phone',
                'project_location', 'type', 'status', 'map_mode', 'width', 'depth',
                'floors_count', 'map_data',
            ]),
            'knowledge' => $this->knowledge->forProject($project)->only(array_keys(HaProjectKnowledge::fieldLabels())),
            'smart_components_catalog' => SmartComponent::query()->ordered()->get()->toArray(),
            'entity_mappings' => HaComponentMapping::query()->where('project_id', $project->id)->get()->toArray(),
            'placed_devices' => $this->projectContext->placedDevices($project),
            'automations_local' => HaProjectAutomation::query()->where('project_id', $project->id)->get()->toArray(),
            'automations_remote' => HaAutomationRemote::query()->get()->toArray(),
            'scripts' => HaScript::query()->get()->toArray(),
            'scenes' => HaScene::query()->get()->toArray(),
            'helpers' => HaEntity::query()->whereIn('domain', HaProjectAiContextService::HELPER_DOMAINS)->get()->toArray(),
            'ai_history' => HaProjectAutomation::query()->where('project_id', $project->id)->latest()->get()->toArray(),
        ];

        // Strip relation objects from placed devices for JSON
        $payload['placed_devices'] = array_map(function ($d) {
            return [
                'map_device_id' => $d['map_device_id'],
                'component_key' => $d['component_key'],
                'label' => $d['label'],
                'room_name' => $d['room_name'],
                'floor_name' => $d['floor_name'],
                'entity_id' => $d['mapping']->entity_id ?? null,
            ];
        }, $payload['placed_devices']);

        $dir = storage_path('app/ha-ai-backups');
        File::ensureDirectoryExists($dir);
        $basename = 'ha-ai-'.$project->slug.'-'.now()->format('Ymd-His');
        $jsonPath = $dir.DIRECTORY_SEPARATOR.$basename.'.json';
        $zipPath = $dir.DIRECTORY_SEPARATOR.$basename.'.zip';

        File::put($jsonPath, json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));

        $zip = new ZipArchive;
        if ($zip->open($zipPath, ZipArchive::CREATE | ZipArchive::OVERWRITE) !== true) {
            throw new \RuntimeException('Unable to create backup ZIP.');
        }
        $zip->addFile($jsonPath, 'project-backup.json');
        $zip->close();
        @unlink($jsonPath);

        return $zipPath;
    }

    /**
     * Import knowledge + mappings + local automations into an existing project (safe merge).
     *
     * @return array{imported: list<string>}
     */
    public function importZip(Project $project, string $zipPath): array
    {
        $zip = new ZipArchive;
        if ($zip->open($zipPath) !== true) {
            throw new \InvalidArgumentException('Invalid ZIP file.');
        }
        $json = $zip->getFromName('project-backup.json');
        $zip->close();
        if ($json === false) {
            throw new \InvalidArgumentException('project-backup.json missing in ZIP.');
        }
        $data = json_decode($json, true);
        if (! is_array($data)) {
            throw new \InvalidArgumentException('Invalid backup JSON.');
        }

        $imported = [];

        if (isset($data['knowledge']) && is_array($data['knowledge'])) {
            $this->knowledge->update($project, $data['knowledge']);
            $imported[] = 'knowledge';
        }

        if (isset($data['entity_mappings']) && is_array($data['entity_mappings'])) {
            foreach ($data['entity_mappings'] as $row) {
                if (! is_array($row) || empty($row['map_device_id']) || empty($row['entity_id'])) {
                    continue;
                }
                HaComponentMapping::query()->updateOrCreate(
                    [
                        'project_id' => $project->id,
                        'map_device_id' => $row['map_device_id'],
                    ],
                    [
                        'component_key' => $row['component_key'] ?? 'unknown',
                        'entity_id' => $row['entity_id'],
                        'room_name' => $row['room_name'] ?? null,
                    ]
                );
            }
            $imported[] = 'entity_mappings';
        }

        if (isset($data['automations_local']) && is_array($data['automations_local'])) {
            foreach ($data['automations_local'] as $row) {
                if (! is_array($row) || empty($row['yaml'])) {
                    continue;
                }
                HaProjectAutomation::query()->create([
                    'project_id' => $project->id,
                    'user_id' => auth()->id(),
                    'name' => ($row['name'] ?? 'Imported').' (import)',
                    'description' => $row['description'] ?? null,
                    'status' => HaProjectAutomation::STATUS_DRAFT,
                    'selected_map_device_ids' => $row['selected_map_device_ids'] ?? [],
                    'prompt' => $row['prompt'] ?? 'Imported from backup',
                    'yaml' => $row['yaml'],
                    'ha_automation_id' => null,
                    'error_message' => null,
                ]);
            }
            $imported[] = 'automations_local';
        }

        return ['imported' => $imported];
    }
}
