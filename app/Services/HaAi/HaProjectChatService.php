<?php

namespace App\Services\HaAi;

use App\Models\HaProjectChatMessage;
use App\Models\Project;
use App\Models\User;
use App\Services\Gemini\GeminiClient;
use Illuminate\Support\Collection;
use InvalidArgumentException;

class HaProjectChatService
{
    public function __construct(
        private readonly HaProjectAiContextService $context,
        private readonly GeminiClient $gemini,
    ) {}

    /**
     * @return Collection<int, HaProjectChatMessage>
     */
    public function history(Project $project, int $limit = 100): Collection
    {
        return HaProjectChatMessage::query()
            ->where('project_id', $project->id)
            ->orderBy('id')
            ->limit($limit)
            ->get();
    }

    public function ask(Project $project, User $user, string $message): HaProjectChatMessage
    {
        $message = trim($message);
        if ($message === '') {
            throw new InvalidArgumentException('Message cannot be empty.');
        }

        HaProjectChatMessage::query()->create([
            'project_id' => $project->id,
            'user_id' => $user->id,
            'role' => 'user',
            'content' => $message,
        ]);

        $context = $this->context->build($project);
        $recent = $this->history($project, 24)
            ->map(fn (HaProjectChatMessage $m) => [
                'role' => $m->role,
                'content' => $m->content,
            ])
            ->all();

        $system = <<<'SYS'
You are a Home Assistant project assistant for ONE selected project only.
Answer using only the provided project context JSON.
Be practical and specific. Reference real entity_ids and automation names from context.
If information is missing, say what is missing.
Return ONLY valid JSON: {"answer":"markdown-capable plain text answer"}
SYS;

        $userPrompt = "Project context:\n"
            .json_encode($context, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES)
            ."\n\nRecent chat:\n"
            .json_encode($recent, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES)
            ."\n\nLatest user question:\n".$message;

        $decoded = $this->gemini->generateContent(
            [['text' => $userPrompt]],
            $system
        );

        $answer = trim((string) ($decoded['answer'] ?? ''));
        if ($answer === '') {
            $answer = 'I could not produce an answer from the current project context.';
        }

        return HaProjectChatMessage::query()->create([
            'project_id' => $project->id,
            'user_id' => null,
            'role' => 'assistant',
            'content' => $answer,
        ]);
    }
}
