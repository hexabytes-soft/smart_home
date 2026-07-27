<?php

namespace App\Services\HomeAssistant;

use RuntimeException;

/**
 * Minimal Home Assistant WebSocket client for registry dumps and automation upsert.
 */
class HomeAssistantWebSocket
{
    /** @var resource|null */
    private $socket = null;

    private int $msgId = 1;

    public function __construct(
        private readonly string $baseUrl,
        private readonly string $token,
        private readonly int $timeout = 60,
    ) {}

    /**
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
        $this->connectAndAuth();

        try {
            return [
                'areas' => $this->sendCommand('config/area_registry/list'),
                'devices' => $this->sendCommand('config/device_registry/list'),
                'entities' => $this->sendCommand('config/entity_registry/list'),
                'floors' => $this->sendCommand('config/floor_registry/list'),
                'labels' => $this->sendCommand('config/label_registry/list'),
            ];
        } finally {
            $this->close();
        }
    }

    /**
     * @param  array<string, mixed>  $config
     */
    public function upsertAutomation(string $automationId, array $config): void
    {
        $this->connectAndAuth();

        try {
            $payload = $config;
            $payload['id'] = $automationId;
            $this->sendCommand('automation/config', [
                'automation_id' => $automationId,
                'config' => $payload,
            ]);
        } finally {
            $this->close();
        }
    }

    private function connectAndAuth(): void
    {
        $parts = parse_url($this->baseUrl);
        if (! is_array($parts) || empty($parts['host'])) {
            throw new RuntimeException('Invalid HOME_ASSISTANT_URL.');
        }

        $scheme = ($parts['scheme'] ?? 'http') === 'https' ? 'ssl' : 'tcp';
        $port = $parts['port'] ?? (($scheme === 'ssl') ? 443 : 8123);
        $host = $parts['host'];
        $path = rtrim($parts['path'] ?? '', '/').'/api/websocket';

        $remote = "{$scheme}://{$host}:{$port}";
        $errno = 0;
        $errstr = '';
        $context = stream_context_create([
            'ssl' => [
                'verify_peer' => true,
                'verify_peer_name' => true,
            ],
        ]);

        $socket = @stream_socket_client(
            $remote,
            $errno,
            $errstr,
            $this->timeout,
            STREAM_CLIENT_CONNECT,
            $context
        );

        if ($socket === false) {
            throw new RuntimeException("WebSocket connect failed: {$errstr} ({$errno})");
        }

        stream_set_timeout($socket, $this->timeout);
        $this->socket = $socket;

        $key = base64_encode(random_bytes(16));
        $headers = "GET {$path} HTTP/1.1\r\n"
            ."Host: {$host}:{$port}\r\n"
            ."Upgrade: websocket\r\n"
            ."Connection: Upgrade\r\n"
            ."Sec-WebSocket-Key: {$key}\r\n"
            ."Sec-WebSocket-Version: 13\r\n"
            ."\r\n";

        fwrite($socket, $headers);
        $response = '';
        while (! str_contains($response, "\r\n\r\n")) {
            $chunk = fread($socket, 1024);
            if ($chunk === false || $chunk === '') {
                throw new RuntimeException('WebSocket handshake failed (empty response).');
            }
            $response .= $chunk;
        }

        if (! str_contains($response, '101')) {
            throw new RuntimeException('WebSocket handshake rejected by Home Assistant.');
        }

        $hello = $this->readJson();
        if (($hello['type'] ?? '') !== 'auth_required') {
            throw new RuntimeException('Unexpected HA WebSocket hello.');
        }

        $this->writeJson(['type' => 'auth', 'access_token' => $this->token]);
        $auth = $this->readJson();
        if (($auth['type'] ?? '') !== 'auth_ok') {
            throw new RuntimeException('Home Assistant WebSocket authentication failed.');
        }
    }

    /**
     * @param  array<string, mixed>  $extra
     * @return list<array<string, mixed>>|array<string, mixed>
     */
    private function sendCommand(string $type, array $extra = []): array
    {
        $id = $this->msgId++;
        $this->writeJson(array_merge(['id' => $id, 'type' => $type], $extra));

        while (true) {
            $msg = $this->readJson();
            if (($msg['id'] ?? null) !== $id) {
                continue;
            }
            if (($msg['type'] ?? '') === 'result' && ($msg['success'] ?? false) === true) {
                $result = $msg['result'] ?? [];

                return is_array($result) ? $result : [];
            }

            $error = $msg['error']['message'] ?? json_encode($msg);
            throw new RuntimeException("HA command {$type} failed: {$error}");
        }
    }

    /**
     * @param  array<string, mixed>  $payload
     */
    private function writeJson(array $payload): void
    {
        $this->writeFrame(json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) ?: '{}');
    }

    /**
     * @return array<string, mixed>
     */
    private function readJson(): array
    {
        $data = $this->readFrame();
        $decoded = json_decode($data, true);
        if (! is_array($decoded)) {
            throw new RuntimeException('Invalid JSON from Home Assistant WebSocket.');
        }

        return $decoded;
    }

    private function writeFrame(string $payload): void
    {
        if (! is_resource($this->socket)) {
            throw new RuntimeException('WebSocket not connected.');
        }

        $len = strlen($payload);
        $mask = random_bytes(4);
        $header = chr(0x81);

        if ($len <= 125) {
            $header .= chr(0x80 | $len);
        } elseif ($len <= 65535) {
            $header .= chr(0x80 | 126).pack('n', $len);
        } else {
            $header .= chr(0x80 | 127).pack('J', $len);
        }

        $masked = '';
        for ($i = 0; $i < $len; $i++) {
            $masked .= $payload[$i] ^ $mask[$i % 4];
        }

        fwrite($this->socket, $header.$mask.$masked);
    }

    private function readFrame(): string
    {
        if (! is_resource($this->socket)) {
            throw new RuntimeException('WebSocket not connected.');
        }

        $header = $this->readBytes(2);
        $byte1 = ord($header[0]);
        $byte2 = ord($header[1]);
        $opcode = $byte1 & 0x0F;
        $masked = (bool) ($byte2 & 0x80);
        $len = $byte2 & 0x7F;

        if ($len === 126) {
            $ext = $this->readBytes(2);
            $len = unpack('n', $ext)[1];
        } elseif ($len === 127) {
            $ext = $this->readBytes(8);
            $len = unpack('J', $ext)[1];
        }

        $maskKey = $masked ? $this->readBytes(4) : '';
        $payload = $len > 0 ? $this->readBytes($len) : '';

        if ($masked && $maskKey !== '') {
            $unmasked = '';
            for ($i = 0; $i < strlen($payload); $i++) {
                $unmasked .= $payload[$i] ^ $maskKey[$i % 4];
            }
            $payload = $unmasked;
        }

        if ($opcode === 0x8) {
            throw new RuntimeException('Home Assistant closed the WebSocket.');
        }

        return $payload;
    }

    private function readBytes(int $length): string
    {
        $data = '';
        while (strlen($data) < $length) {
            $chunk = fread($this->socket, $length - strlen($data));
            if ($chunk === false || $chunk === '') {
                $meta = stream_get_meta_data($this->socket);
                if (! empty($meta['timed_out'])) {
                    throw new RuntimeException('Home Assistant WebSocket timed out.');
                }
                throw new RuntimeException('Unexpected end of WebSocket stream.');
            }
            $data .= $chunk;
        }

        return $data;
    }

    private function close(): void
    {
        if (is_resource($this->socket)) {
            fclose($this->socket);
        }
        $this->socket = null;
    }
}
