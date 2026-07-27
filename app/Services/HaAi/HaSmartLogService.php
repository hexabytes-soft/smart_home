<?php

namespace App\Services\HaAi;

use App\Models\Project;
use App\Services\Gemini\GeminiClient;
use App\Services\HomeAssistant\HomeAssistantClient;
use Illuminate\Support\Facades\Http;
use RuntimeException;

class HaSmartLogService
{
    public function __construct(
        private readonly HomeAssistantClient $haClient,
        private readonly HaProjectAiContextService $context,
        private readonly GeminiClient $gemini,
    ) {}

    /**
     * @return list<array<string, mixed>>
     */
    public function fetchLogs(int $limit = 200): array
    {
        // Prefer Supervisor-style endpoint when available; fallback to error log via template is unreliable.
        $url = $this->haClient->baseUrl().'/api/error_log';
        $response = Http::withToken($this->haClient->token())
            ->timeout($this->haClient->timeout())
            ->withHeaders(['Accept' => 'text/plain'])
            ->get($url);

        if (! $response->successful()) {
            // Some installs expose logs only via websocket; return empty with note.
            throw new RuntimeException(
                'Unable to read Home Assistant error log (HTTP '.$response->status().'). Ensure the token can access /api/error_log.'
            );
        }

        $text = $response->body();
        $lines = preg_split("/\r\n|\n|\r/", $text) ?: [];
        $lines = array_slice(array_values(array_filter($lines, fn ($l) => trim($l) !== '')), -$limit);

        return array_map(fn ($line, $i) => [
            'id' => $i + 1,
            'line' => $line,
        ], $lines, array_keys($lines));
    }

    /**
     * @param  list<array<string, mixed>>|null  $logs
     * @return array{answer: string}
     */
    public function ask(Project $project, string $question, ?array $logs = null): array
    {
        $logs ??= $this->fetchLogs(150);
        $context = $this->context->build($project);

        $system = <<<'SYS'
You are a Home Assistant log analyst for one project.
Explain failures, errors, and suggest fixes using logs + project context.
Return ONLY JSON: {"answer":"detailed plain text"}
SYS;

        $decoded = $this->gemini->generateContent(
            [['text' => json_encode([
                'question' => $question,
                'recent_logs' => $logs,
                'project_context' => [
                    'knowledge' => $context['project_knowledge'] ?? [],
                    'entities_sample' => array_slice($context['entities_sample'] ?? [], 0, 100),
                    'automations' => array_slice($context['existing_automations'] ?? [], 0, 80),
                ],
            ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT)]],
            $system
        );

        return [
            'answer' => (string) ($decoded['answer'] ?? 'No answer generated.'),
            'logs' => $logs,
        ];
    }
}
