<?php

namespace App\Http\Controllers\HaAi;

use App\Http\Controllers\Controller;
use App\Services\HomeAssistant\HomeAssistantClient;
use App\Services\HomeAssistant\HomeAssistantSyncService;
use Illuminate\Http\RedirectResponse;
use Throwable;

class SyncController extends Controller
{
    public function test(HomeAssistantClient $client): RedirectResponse
    {
        $result = $client->testConnection();

        if (! $result['ok']) {
            return back()->withErrors(['connection' => $result['message']]);
        }

        $version = $result['version'] ?? null;
        $message = $result['message'].($version ? " (v{$version})" : '');

        return back()->with('status', 'Home Assistant connected: '.$message);
    }

    public function sync(HomeAssistantSyncService $sync): RedirectResponse
    {
        try {
            $run = $sync->syncAll();

            return back()->with(
                'status',
                "Sync complete — entities {$run->entities_count}, devices {$run->devices_count}, areas {$run->areas_count}."
            );
        } catch (Throwable $e) {
            return back()->withErrors(['sync' => $e->getMessage()]);
        }
    }
}
