<?php

namespace Database\Seeders;

use App\Models\SmartComponent;
use Illuminate\Database\Seeder;

class SmartComponentSeeder extends Seeder
{
    public function run(): void
    {
        $items = [
            ['key' => 'smoke_detector', 'name' => 'Smoke detector', 'icon' => '🚨', 'price' => 8, 'mount' => 'ceiling', 'model' => 'Smoke Alarm'],
            ['key' => 'gas_detector', 'name' => 'Gas detector', 'icon' => '⛽', 'price' => 12, 'mount' => 'ceiling', 'model' => 'Gas Alarm'],
            ['key' => 'vibration_sensor', 'name' => 'Vibration sensor', 'icon' => '📳', 'price' => 6, 'mount' => 'wall', 'model' => 'Vibration'],
            ['key' => 'door_sensor', 'name' => 'Door sensor', 'icon' => '🚪', 'price' => 4, 'mount' => 'door', 'model' => 'Door Contact'],
            ['key' => 'intercom', 'name' => 'Entercom', 'icon' => '📞', 'price' => 45, 'mount' => 'wall', 'model' => 'Video Intercom'],
            ['key' => 'main_screen', 'name' => 'Main Screen', 'icon' => '🖥️', 'price' => 80, 'mount' => 'wall', 'model' => 'Wall Display'],
            ['key' => 'motion_sensor', 'name' => 'Motion sensor', 'icon' => '👁️', 'price' => 7, 'mount' => 'wall', 'model' => 'PIR Motion'],
            ['key' => 'micro_sensor', 'name' => 'Micro sensor', 'icon' => '🎤', 'price' => 9, 'mount' => 'wall', 'model' => 'Sound / Mic'],
            ['key' => 'camera', 'name' => 'Camera', 'icon' => '📷', 'price' => 2, 'mount' => 'ceiling', 'model' => 'Dome Camera'],
            ['key' => 'ir_remote', 'name' => 'IR remote', 'icon' => '📡', 'price' => 15, 'mount' => 'wall', 'model' => 'Broadlink RM'],
            ['key' => 'wifi_router', 'name' => 'Wifi router', 'icon' => '🌐', 'price' => 25, 'mount' => 'floor', 'model' => 'Home Router'],
            ['key' => 'access_point', 'name' => 'Access point', 'icon' => '📶', 'price' => 35, 'mount' => 'ceiling', 'model' => 'Ceiling AP'],
            ['key' => 'socket', 'name' => 'Socket', 'icon' => '🔌', 'price' => 3, 'mount' => 'wall', 'model' => 'Smart Socket'],
            ['key' => 'switch', 'name' => 'Switch', 'icon' => '🔘', 'price' => 4, 'mount' => 'wall', 'model' => 'Wall Switch'],
            ['key' => 'speakers', 'name' => 'Speakers', 'icon' => '🔊', 'price' => 20, 'mount' => 'wall', 'model' => 'Wall Speakers'],
        ];

        foreach ($items as $index => $item) {
            SmartComponent::query()->updateOrCreate(
                ['key' => $item['key']],
                [
                    ...$item,
                    'sort_order' => $index + 1,
                    'is_active' => true,
                ]
            );
        }
    }
}
