<?php

namespace App\Services\HaAi;

use App\Models\Project;
use App\Services\Gemini\GeminiClient;
use RuntimeException;

class HaAutomationAnalyzer
{
    public const SESSION_KEY = 'ha_ai_pending_automation';

    public function __construct(
        private readonly HaAutomationPromptBuilder $promptBuilder,
        private readonly GeminiClient $gemini,
    ) {}

    /**
     * @param  list<string>  $mapDeviceIds
     * @return array{
     *     similar_found: bool,
     *     similarity_percent: int,
     *     recommendation: string,
     *     existing_automation: ?array{entity_id: ?string, ha_automation_id: ?string, alias: ?string},
     *     rationale: string,
     *     analysis_summary: string
     * }
     */
    public function analyze(Project $project, array $mapDeviceIds, string $prompt): array
    {
        $built = $this->promptBuilder->buildAnalysisPrompt($project, $mapDeviceIds, $prompt);
        $decoded = $this->gemini->generateContent(
            [['text' => $built['user']]],
            $built['system']
        );

        unset($decoded['_meta']);

        $recommendation = strtolower((string) ($decoded['recommendation'] ?? 'create_new'));
        if (! in_array($recommendation, ['reuse', 'modify', 'create_new'], true)) {
            $recommendation = 'create_new';
        }

        $existing = $decoded['existing_automation'] ?? null;
        if (! is_array($existing)) {
            $existing = null;
        } else {
            $existing = [
                'entity_id' => isset($existing['entity_id']) ? (string) $existing['entity_id'] : null,
                'ha_automation_id' => isset($existing['ha_automation_id']) ? (string) $existing['ha_automation_id'] : null,
                'alias' => isset($existing['alias']) ? (string) $existing['alias'] : null,
            ];
            if ($existing['entity_id'] === null && $existing['ha_automation_id'] === null && $existing['alias'] === null) {
                $existing = null;
            }
        }

        $similarity = (int) round((float) ($decoded['similarity_percent'] ?? 0));
        $similarity = max(0, min(100, $similarity));
        $similarFound = (bool) ($decoded['similar_found'] ?? ($similarity >= 60 && $existing !== null));

        if (! $similarFound) {
            $recommendation = 'create_new';
        }

        return [
            'similar_found' => $similarFound,
            'similarity_percent' => $similarity,
            'recommendation' => $recommendation,
            'existing_automation' => $existing,
            'rationale' => (string) ($decoded['rationale'] ?? $decoded['analysis_summary'] ?? 'No additional rationale provided.'),
            'analysis_summary' => (string) ($decoded['analysis_summary'] ?? $decoded['rationale'] ?? 'Analysis complete.'),
        ];
    }

    public function shouldDeferToUser(array $analysis): bool
    {
        if (! ($analysis['similar_found'] ?? false)) {
            return false;
        }

        $recommendation = $analysis['recommendation'] ?? 'create_new';
        $similarity = (int) ($analysis['similarity_percent'] ?? 0);

        return in_array($recommendation, ['reuse', 'modify'], true) || $similarity >= 60;
    }
}
