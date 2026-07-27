<?php

namespace App\Services\HaAi;

use App\Models\HaProjectAutomation;
use App\Services\HomeAssistant\HomeAssistantClient;
use App\Services\HomeAssistant\HomeAssistantSyncService;
use Illuminate\Support\Str;
use Throwable;

class HaAutomationUploadService
{
    public function __construct(
        private readonly HaYamlValidator $validator,
        private readonly HomeAssistantClient $client,
        private readonly HomeAssistantSyncService $syncService,
    ) {}

    /**
     * @return array{
     *     automation: HaProjectAutomation,
     *     reload_ok: bool,
     *     reload_error: ?string,
     *     message: string
     * }
     */
    public function upload(HaProjectAutomation $automation): array
    {
        $validation = $this->validator->validate($automation->yaml);
        if (! $validation['valid']) {
            $automation->update([
                'status' => HaProjectAutomation::STATUS_FAILED,
                'error_message' => implode('; ', $validation['errors']),
            ]);

            throw new \InvalidArgumentException(implode('; ', $validation['errors']));
        }

        $config = $this->validator->toConfigArray($automation->yaml);
        $automationId = (string) ($config['id'] ?? $automation->ha_automation_id ?: ('ha_ai_'.Str::slug((string) ($config['alias'] ?? 'automation')).'_'.$automation->id));
        $config['id'] = $automationId;
        if (empty($config['alias'])) {
            $config['alias'] = $automation->name ?: 'HA AI Automation '.$automation->id;
        }

        try {
            try {
                $this->client->upsertAutomationConfigHttp($automationId, $config);
            } catch (Throwable) {
                $this->client->upsertAutomationConfig($automationId, $config);
            }
        } catch (Throwable $e) {
            $automation->update([
                'status' => HaProjectAutomation::STATUS_FAILED,
                'error_message' => $e->getMessage(),
            ]);
            throw $e;
        }

        $automation->update([
            'status' => HaProjectAutomation::STATUS_UPLOADED,
            'ha_automation_id' => $automationId,
            'name' => $config['alias'] ?? $automation->name,
            'description' => $config['description'] ?? $automation->description,
            'yaml' => $this->dumpPreferredYaml($config, $automation->yaml),
            'error_message' => null,
            'uploaded_at' => now(),
        ]);

        $automation = $automation->fresh();

        try {
            $this->client->reloadAutomations();
        } catch (Throwable $e) {
            $reloadError = $e->getMessage();
            $automation->update([
                'error_message' => 'Home Assistant reload failed: '.$reloadError,
            ]);

            return [
                'automation' => $automation->fresh(),
                'reload_ok' => false,
                'reload_error' => $reloadError,
                'message' => 'Automation uploaded, but Home Assistant reload failed.',
            ];
        }

        try {
            $this->syncService->syncAll();
        } catch (Throwable) {
            // Activation succeeded; local sync is best-effort.
        }

        return [
            'automation' => $automation->fresh(),
            'reload_ok' => true,
            'reload_error' => null,
            'message' => 'Automation uploaded and activated successfully.',
        ];
    }

    /**
     * @param  array<string, mixed>  $config
     */
    protected function dumpPreferredYaml(array $config, string $fallback): string
    {
        try {
            return \Symfony\Component\Yaml\Yaml::dump($config, 8, 2);
        } catch (Throwable) {
            return $fallback;
        }
    }
}
