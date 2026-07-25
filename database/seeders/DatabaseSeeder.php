<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RolePermissionSeeder::class,
            AdminUserSeeder::class,
            SmartComponentSeeder::class,
        ]);

        $admin = User::query()->where('email', 'admin@smarthome.test')->first();

        if ($admin && ! Project::query()->where('slug', 'demo-smart-villa')->exists()) {
            Project::query()->create([
                'user_id' => $admin->id,
                'name' => 'Demo Smart Villa',
                'slug' => 'demo-smart-villa',
                'description' => 'Starter home project with a basic 3D floor map, outer walls, and a main door.',
                'type' => 'home',
                'status' => 'draft',
                'map_mode' => '3d',
                'width' => 20,
                'depth' => 15,
                'floors_count' => 1,
            ]);
        }
    }
}
