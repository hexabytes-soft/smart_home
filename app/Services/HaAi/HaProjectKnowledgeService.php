<?php

namespace App\Services\HaAi;

use App\Models\HaProjectKnowledge;
use App\Models\Project;

class HaProjectKnowledgeService
{
    public function forProject(Project $project): HaProjectKnowledge
    {
        return HaProjectKnowledge::query()->firstOrCreate(
            ['project_id' => $project->id],
            []
        );
    }

    /**
     * @param  array<string, mixed>  $data
     */
    public function update(Project $project, array $data): HaProjectKnowledge
    {
        $knowledge = $this->forProject($project);
        $payload = [];

        foreach (array_keys(HaProjectKnowledge::fieldLabels()) as $field) {
            if (array_key_exists($field, $data)) {
                $value = $data[$field];
                $payload[$field] = is_string($value) ? trim($value) : null;
                if ($payload[$field] === '') {
                    $payload[$field] = null;
                }
            }
        }

        $knowledge->update($payload);

        return $knowledge->fresh();
    }

    /**
     * @return array<string, string>
     */
    public function toContext(Project $project): array
    {
        return $this->forProject($project)->toAiContext();
    }
}
