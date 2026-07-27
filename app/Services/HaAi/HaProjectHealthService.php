<?php

namespace App\Services\HaAi;

use App\Models\HaAutomationRemote;
use App\Models\HaDevice;
use App\Models\HaEntity;
use App\Models\HaProjectAutomation;
use App\Models\HaSyncRun;
use App\Models\Project;
use Illuminate\Support\Str;

class HaProjectHealthService
{
    public function __construct(
        private readonly ProjectHaContextService $projectContext,
        private readonly HaProjectOptimizerService $optimizer,
    ) {}

    /**
     * @return array<string, mixed>
     */
    public function report(Project $project): array
    {
        $mapping = $this->projectContext->mappingStats($project);
        $lastSync = HaSyncRun::query()->latest('id')->first();
        $unavailable = HaEntity::query()->whereIn('state', ['unavailable', 'unknown'])->count();
        $offlineHint = HaDevice::query()->whereNull('name')->count(); // soft signal
        $failedAutos = HaProjectAutomation::query()
            ->where('project_id', $project->id)
            ->where('status', HaProjectAutomation::STATUS_FAILED)
            ->count();

        $duplicates = HaAutomationRemote::query()
            ->get()
            ->groupBy(fn ($a) => Str::lower(trim((string) $a->friendly_name)))
            ->filter(fn ($g, $alias) => $alias !== '' && $g->count() > 1)
            ->count();

        $linked = $mapping['linked_count'];
        $unlinked = $mapping['unlinked_count'];
        $total = max(1, $linked + $unlinked);

        $score = 100;
        $score -= min(30, (int) round(($unlinked / $total) * 30));
        $score -= min(20, $unavailable);
        $score -= min(15, $failedAutos * 5);
        $score -= min(15, $duplicates * 3);
        if (! $lastSync || $lastSync->status !== 'success') {
            $score -= 20;
        } elseif ($lastSync->finished_at && $lastSync->finished_at->lt(now()->subDays(7))) {
            $score -= 10;
        }
        $score = max(0, min(100, $score));

        $recommendations = [];
        if ($unlinked > 0) {
            $recommendations[] = "Link {$unlinked} unlinked component(s) on the Mapping page.";
        }
        if ($unavailable > 0) {
            $recommendations[] = "{$unavailable} entities are unavailable/unknown — check devices and sync.";
        }
        if ($failedAutos > 0) {
            $recommendations[] = "{$failedAutos} local automation(s) failed — open History and fix YAML/upload errors.";
        }
        if ($duplicates > 0) {
            $recommendations[] = "{$duplicates} duplicate automation name group(s) detected — run Optimizer.";
        }
        if (! $lastSync) {
            $recommendations[] = 'Run Home Assistant Sync to populate entities and automations.';
        }

        return [
            'ai_score' => $score,
            'last_sync' => $lastSync,
            'sync_status' => $lastSync?->status ?? 'never',
            'linked_components' => $linked,
            'unlinked_components' => $unlinked,
            'unavailable_entities' => $unavailable,
            'offline_devices_hint' => $offlineHint,
            'broken_automations' => $failedAutos,
            'duplicate_automations' => $duplicates,
            'recommendations' => $recommendations,
        ];
    }
}
