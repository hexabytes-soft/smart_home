<?php

namespace App\Services\HomeAssistant;

use Illuminate\Support\Facades\Http;
use RuntimeException;

class HomeAssistantClient
{
    public function baseUrl(): string
    {
        $url = (string) config('services.home_assistant.url');
        if ($url === '') {
            throw new RuntimeException('HOME_ASSISTANT_URL is not configured.');
        }

        return $url;
    }

    public function token(): string
    {
        $token = (string) config('services.home_assistant.token');
        if ($token === '') {
            throw new RuntimeException('HOME_ASSISTANT_TOKEN is not configured.');
        }

        return $token;
    }

    public function timeout(): int
    {
        return (int) config('services.home_assistant.timeout', 60);
    }

    /**
     * @return array{ok: bool, message: string, version?: string}
     */
    public function testConnection(): array
    {
        try {
            $response = Http::withToken($this->token())
                ->timeout($this->timeout())
                ->acceptJson()
                ->get($this->baseUrl().'/api/');

            if (! $response->successful()) {
                return [
                    'ok' => false,
                    'message' => 'Home Assistant returned HTTP '.$response->status(),
                ];
            }

            $data = $response->json();

            return [
                'ok' => true,
                'message' => (string) ($data['message'] ?? 'Connected'),
                'version' => isset($data['version']) ? (string) $data['version'] : null,
            ];
        } catch (\Throwable $e) {
            return [
                'ok' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    /**
     * @return list<array<string, mixed>>
     */
    public function getStates(): array
    {
        $response = Http::withToken($this->token())
            ->timeout($this->timeout())
            ->acceptJson()
            ->get($this->baseUrl().'/api/states');

        if (! $response->successful()) {
            throw new RuntimeException('Failed to fetch HA states (HTTP '.$response->status().').');
        }

        $data = $response->json();

        return is_array($data) ? $data : [];
    }

    /**
     * @return array<string, mixed>
     */
    public function getConfig(): array
    {
        $response = Http::withToken($this->token())
            ->timeout($this->timeout())
            ->acceptJson()
            ->get($this->baseUrl().'/api/config');

        if (! $response->successful()) {
            throw new RuntimeException('Failed to fetch HA config (HTTP '.$response->status().').');
        }

        $data = $response->json();

        return is_array($data) ? $data : [];
    }

    /**
     * Fetch area/device/entity/floor/label registries via WebSocket API.
     *
     * @return array{
     *     areas: list<array<string, mixed>>,
     *     devices: list<array<string, mixed>>,
     *     entities: list<array<string, mixed>>,
     *     floors: list<array<string, mixed>>,
     *     labels: list<array<string, mixed>>
     * }
     */
    public function fetchRegistries(): array
    {
        $ws = new HomeAssistantWebSocket($this->baseUrl(), $this->token(), $this->timeout());

        return $ws->fetchRegistries();
    }

    /**
     * Create or update an automation config via WebSocket.
     *
     * @param  array<string, mixed>  $config
     */
    public function upsertAutomationConfig(string $automationId, array $config): void
    {
        $ws = new HomeAssistantWebSocket($this->baseUrl(), $this->token(), $this->timeout());
        $ws->upsertAutomation($automationId, $config);
    }

    /**
     * REST fallback for automation config (HA Core REST).
     *
     * @param  array<string, mixed>  $config
     */
    public function upsertAutomationConfigHttp(string $automationId, array $config): void
    {
        $response = Http::withToken($this->token())
            ->timeout($this->timeout())
            ->acceptJson()
            ->asJson()
            ->post($this->baseUrl().'/api/config/automation/config/'.$automationId, $config);

        if (! $response->successful()) {
            throw new RuntimeException(
                'Failed to upload automation (HTTP '.$response->status().'): '.$response->body()
            );
        }
    }

    /**
     * @return array<string, mixed>
     */
    public function getAutomationConfig(string $automationId): array
    {
        $response = Http::withToken($this->token())
            ->timeout($this->timeout())
            ->acceptJson()
            ->get($this->baseUrl().'/api/config/automation/config/'.$automationId);

        if (! $response->successful()) {
            throw new RuntimeException(
                'Failed to fetch automation config (HTTP '.$response->status().'): '.$response->body()
            );
        }

        $data = $response->json();

        return is_array($data) ? $data : [];
    }

    /**
     * Reload Home Assistant automations and wait for the response.
     *
     * @throws RuntimeException
     */
    public function reloadAutomations(): void
    {
        $response = Http::withToken($this->token())
            ->timeout($this->timeout())
            ->acceptJson()
            ->asJson()
            ->post($this->baseUrl().'/api/services/automation/reload', (object) []);

        if (! $response->successful()) {
            throw new RuntimeException(
                'Home Assistant automation reload failed (HTTP '.$response->status().'): '.$response->body()
            );
        }
    }
}
