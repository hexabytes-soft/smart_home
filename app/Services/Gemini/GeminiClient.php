<?php

namespace App\Services\Gemini;

use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Client\RequestException;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use RuntimeException;

class GeminiClient
{
    /**
     * @param  array<int, array{text?: string, inline_data?: array{mime_type: string, data: string}}>  $parts
     * @return array<string, mixed>
     */
    public function generateContent(array $parts, ?string $systemInstruction = null): array
    {
        $apiKey = config('services.gemini.api_key');

        if (blank($apiKey)) {
            throw new RuntimeException('Gemini API key is not configured.');
        }

        $models = $this->modelCandidates();
        $lastError = null;

        foreach ($models as $model) {
            try {
                return $this->requestModel($model, $apiKey, $parts, $systemInstruction);
            } catch (RuntimeException $e) {
                $lastError = $e;
                Log::warning('Gemini model failed, trying fallback', [
                    'model' => $model,
                    'message' => $e->getMessage(),
                ]);
            }
        }

        throw $lastError ?? new RuntimeException('Gemini request failed.');
    }

    /**
     * @return list<string>
     */
    protected function modelCandidates(): array
    {
        $primary = (string) config('services.gemini.model');
        $fallbacks = config('services.gemini.fallback_models', []);

        return array_values(array_unique(array_filter([
            $primary,
            ...(is_array($fallbacks) ? $fallbacks : []),
        ])));
    }

    /**
     * @param  array<int, array{text?: string, inline_data?: array{mime_type: string, data: string}}>  $parts
     * @return array<string, mixed>
     */
    protected function requestModel(
        string $model,
        string $apiKey,
        array $parts,
        ?string $systemInstruction
    ): array {
        $version = config('services.gemini.api_version', 'v1beta');
        $url = sprintf(
            'https://generativelanguage.googleapis.com/%s/models/%s:generateContent',
            $version,
            $model
        );

        $payload = [
            'contents' => [
                [
                    'role' => 'user',
                    'parts' => $parts,
                ],
            ],
            'generationConfig' => [
                'temperature' => 0.1,
                'maxOutputTokens' => (int) config('services.gemini.max_output_tokens', 8192),
                'responseMimeType' => 'application/json',
            ],
        ];

        if ($systemInstruction) {
            $payload['systemInstruction'] = [
                'parts' => [
                    ['text' => $systemInstruction],
                ],
            ];
        }

        $thinkingBudget = (int) config('services.gemini.thinking_budget', 0);
        if ($thinkingBudget > 0) {
            $payload['generationConfig']['thinkingConfig'] = [
                'thinkingBudget' => $thinkingBudget,
            ];
        }

        $retries = max(0, (int) config('services.gemini.retries', 2));
        $attempt = 0;
        $lastException = null;

        while ($attempt <= $retries) {
            $attempt++;

            try {
                $response = Http::timeout((int) config('services.gemini.timeout', 60))
                    ->connectTimeout((int) config('services.gemini.connect_timeout', 20))
                    ->acceptJson()
                    ->asJson()
                    ->withQueryParameters(['key' => $apiKey])
                    ->post($url, $payload);

                if ($response->status() === 429 || $response->serverError()) {
                    throw new RuntimeException(
                        "Gemini HTTP {$response->status()}: ".$response->json('error.message', $response->body())
                    );
                }

                if ($response->failed()) {
                    throw new RuntimeException(
                        "Gemini HTTP {$response->status()}: ".$response->json('error.message', $response->body())
                    );
                }

                $data = $response->json();
                $text = $this->extractResponseText($data);

                if (trim($text) === '') {
                    $blockReason = data_get($data, 'promptFeedback.blockReason')
                        ?? data_get($data, 'candidates.0.finishReason', 'empty');

                    throw new RuntimeException("Gemini returned no usable content ({$blockReason}).");
                }

                $decoded = $this->decodeJsonResponse($text);

                if (! is_array($decoded)) {
                    throw new RuntimeException('Gemini response was not valid JSON.');
                }

                $decoded['_meta'] = [
                    'model' => $model,
                    'finish_reason' => data_get($data, 'candidates.0.finishReason'),
                ];

                return $decoded;
            } catch (ConnectionException|RequestException|RuntimeException $e) {
                $lastException = $e instanceof RuntimeException
                    ? $e
                    : new RuntimeException($e->getMessage(), 0, $e);

                if ($attempt <= $retries) {
                    usleep(250_000 * $attempt);
                }
            }
        }

        throw $lastException ?? new RuntimeException("Gemini model {$model} failed.");
    }

    /**
     * @param  array<string, mixed>  $data
     */
    protected function extractResponseText(array $data): string
    {
        $parts = data_get($data, 'candidates.0.content.parts', []);
        if (! is_array($parts)) {
            return '';
        }

        $text = '';
        foreach ($parts as $part) {
            if (is_array($part) && is_string($part['text'] ?? null)) {
                $text .= $part['text'];
            }
        }

        return $text;
    }

    /**
     * @return array<string, mixed>|null
     */
    protected function decodeJsonResponse(string $text): ?array
    {
        $decoded = json_decode($text, true);
        if (is_array($decoded)) {
            return $decoded;
        }

        if (preg_match('/```(?:json)?\s*(\{.*)\s*```/s', $text, $matches)) {
            $decoded = json_decode($matches[1], true);
            if (is_array($decoded)) {
                return $decoded;
            }
        }

        if (preg_match('/\{.*\}/s', $text, $matches)) {
            $decoded = json_decode($matches[0], true);
            if (is_array($decoded)) {
                return $decoded;
            }
        }

        // Salvage truncated JSON (common when output hits token limit).
        $trimmed = rtrim($text);
        if (str_starts_with($trimmed, '{') && ! str_ends_with($trimmed, '}')) {
            $attempts = [$trimmed.'}]}', $trimmed.'}]', $trimmed.'}'];
            foreach ($attempts as $candidate) {
                $decoded = json_decode($candidate, true);
                if (is_array($decoded)) {
                    return $decoded;
                }
            }
        }

        return null;
    }
}
