<?php

namespace App\Services\HaAi;

use App\Models\HaProjectAutomation;
use App\Models\Project;
use App\Models\User;
use App\Services\Gemini\GeminiClient;
use App\Services\HomeAssistant\HomeAssistantClient;
use RuntimeException;
use Throwable;

class HaAutomationGenerator
{
    public function __construct(
        private readonly HaAutomationPromptBuilder $promptBuilder,
        private readonly GeminiClient $gemini,
        private readonly HaYamlValidator $validator,
        private readonly HomeAssistantClient $haClient,
    ) {}

    /**
     * @param  list<string>  $mapDeviceIds
     * @param  array{mode?: string, preserve_automation_id?: ?string, existing_yaml?: ?string}  $options
     */
    public function generate(
        Project $project,
        User $user,
        array $mapDeviceIds,
        string $prompt,
        ?HaProjectAutomation $existing = null,
        array $options = [],
    ): HaProjectAutomation {
        $mode = $options['mode'] ?? 'create_new';
        $preserveId = $options['preserve_automation_id'] ?? null;
        $existingYaml = $options['existing_yaml'] ?? null;

        if ($mode === 'modify' && $preserveId && blank($existingYaml)) {
            $existingYaml = $this->fetchExistingYaml($preserveId);
        }

        $built = $this->promptBuilder->buildGenerationPrompt($project, $mapDeviceIds, $prompt, [
            'mode' => $mode,
            'preserve_automation_id' => $preserveId,
            'existing_yaml' => $existingYaml,
        ]);

        $decoded = $this->gemini->generateContent(
            [['text' => $built['user']]],
            $built['system']
        );

        $yaml = $this->extractYamlFromResponse($decoded);
        $validation = $this->validator->validate($yaml);

        if (! $validation['valid']) {
            throw new RuntimeException('Gemini returned invalid YAML: '.implode('; ', $validation['errors']));
        }

        if ($mode === 'modify' && $preserveId) {
            $yaml = $this->forceAutomationId($yaml, $preserveId);
        }

        $meta = $this->validator->extractMeta($yaml);
        $alias = (string) ($decoded['alias'] ?? $meta['alias'] ?? ($existing?->name ?: 'Generated automation'));
        $description = (string) ($decoded['description'] ?? $meta['description'] ?? $existing?->description ?? '');

        $payload = [
            'project_id' => $project->id,
            'user_id' => $user->id,
            'name' => $alias !== '' ? $alias : 'Generated automation',
            'description' => $description !== '' ? $description : null,
            'status' => HaProjectAutomation::STATUS_GENERATED,
            'selected_map_device_ids' => array_values($mapDeviceIds),
            'prompt' => $prompt,
            'yaml' => $yaml,
            'ha_automation_id' => $mode === 'modify' ? $preserveId : ($meta['id'] ?? null),
            'error_message' => null,
        ];

        if ($existing) {
            app(HaAutomationVersionService::class)->snapshot($existing, $user, 'Before regenerate');
            $existing->update($payload);
            $fresh = $existing->fresh();
            app(HaAutomationVersionService::class)->snapshot($fresh, $user, 'After regenerate');

            return $fresh;
        }

        $created = HaProjectAutomation::query()->create($payload);
        app(HaAutomationVersionService::class)->snapshot($created, $user, 'Initial generation');

        return $created;
    }

    /**
     * Reuse an existing HA automation without regenerating YAML intent from scratch.
     *
     * @param  list<string>  $mapDeviceIds
     */
    public function reuseExisting(
        Project $project,
        User $user,
        array $mapDeviceIds,
        string $prompt,
        string $haAutomationId,
        ?string $alias = null,
    ): HaProjectAutomation {
        $yaml = $this->fetchExistingYaml($haAutomationId);
        if (blank($yaml)) {
            throw new RuntimeException('Could not load existing automation config from Home Assistant.');
        }

        $yaml = $this->forceAutomationId($yaml, $haAutomationId);
        $meta = $this->validator->extractMeta($yaml);

        return HaProjectAutomation::query()->create([
            'project_id' => $project->id,
            'user_id' => $user->id,
            'name' => $alias ?: ($meta['alias'] ?? 'Existing automation'),
            'description' => $meta['description'] ?? 'Reused existing Home Assistant automation.',
            'status' => HaProjectAutomation::STATUS_GENERATED,
            'selected_map_device_ids' => array_values($mapDeviceIds),
            'prompt' => $prompt,
            'yaml' => $yaml,
            'ha_automation_id' => $haAutomationId,
            'error_message' => null,
        ]);
    }

    protected function fetchExistingYaml(string $automationId): ?string
    {
        try {
            $config = $this->haClient->getAutomationConfig($automationId);
            if ($config === []) {
                return null;
            }

            return \Symfony\Component\Yaml\Yaml::dump($config, 8, 2);
        } catch (Throwable) {
            return null;
        }
    }

    /**
     * @param  array<string, mixed>  $decoded
     */
    protected function extractYamlFromResponse(array $decoded): string
    {
        if (isset($decoded['yaml']) && is_string($decoded['yaml']) && trim($decoded['yaml']) !== '') {
            return $this->stripFences(trim($decoded['yaml']));
        }

        // Fallback if model returned yaml under another key.
        foreach (['automation_yaml', 'content', 'result'] as $key) {
            if (isset($decoded[$key]) && is_string($decoded[$key]) && trim($decoded[$key]) !== '') {
                return $this->stripFences(trim($decoded[$key]));
            }
        }

        throw new RuntimeException('Gemini response did not include automation YAML.');
    }

    protected function forceAutomationId(string $yaml, string $automationId): string
    {
        $result = $this->validator->validate($yaml);
        $data = $result['data'];
        if (! is_array($data)) {
            return $yaml;
        }
        if (array_is_list($data)) {
            $data = $data[0] ?? [];
        }
        if (! is_array($data)) {
            return $yaml;
        }

        $data['id'] = $automationId;

        return \Symfony\Component\Yaml\Yaml::dump($data, 8, 2);
    }

    protected function stripFences(string $text): string
    {
        $text = trim($text);
        if (preg_match('/^```(?:ya?ml)?\s*(.*?)\s*```$/is', $text, $m)) {
            return trim($m[1]);
        }

        return $text;
    }
}
