<?php

namespace App\Services\HaAi;

use App\Models\HaAutomationVersion;
use App\Models\HaProjectAutomation;
use App\Models\User;
use Illuminate\Support\Collection;

class HaAutomationVersionService
{
    /**
     * @return Collection<int, HaAutomationVersion>
     */
    public function list(HaProjectAutomation $automation): Collection
    {
        return HaAutomationVersion::query()
            ->where('ha_project_automation_id', $automation->id)
            ->orderByDesc('version_number')
            ->get();
    }

    public function snapshot(HaProjectAutomation $automation, ?User $user = null, ?string $summary = null): HaAutomationVersion
    {
        $next = (int) HaAutomationVersion::query()
            ->where('ha_project_automation_id', $automation->id)
            ->max('version_number') + 1;

        return HaAutomationVersion::query()->create([
            'ha_project_automation_id' => $automation->id,
            'user_id' => $user?->id,
            'version_number' => max(1, $next),
            'name' => $automation->name,
            'yaml' => $automation->yaml,
            'change_summary' => $summary,
        ]);
    }

    public function restore(HaProjectAutomation $automation, HaAutomationVersion $version, ?User $user = null): HaProjectAutomation
    {
        if ((int) $version->ha_project_automation_id !== (int) $automation->id) {
            throw new \InvalidArgumentException('Version does not belong to this automation.');
        }

        $this->snapshot($automation, $user, 'Snapshot before restore of v'.$version->version_number);

        $automation->update([
            'yaml' => $version->yaml,
            'name' => $version->name ?: $automation->name,
            'status' => HaProjectAutomation::STATUS_GENERATED,
            'error_message' => null,
        ]);

        $this->snapshot($automation->fresh(), $user, 'Restored from v'.$version->version_number);

        return $automation->fresh();
    }

    /**
     * @return array{left: string, right: string, left_version: int, right_version: int}
     */
    public function compare(HaAutomationVersion $a, HaAutomationVersion $b): array
    {
        return [
            'left' => $a->yaml,
            'right' => $b->yaml,
            'left_version' => $a->version_number,
            'right_version' => $b->version_number,
        ];
    }
}
