<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::query()->updateOrCreate(
            ['email' => 'admin@smarthome.test'],
            [
                'name' => 'Admin',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
            ]
        );

        $admin->syncRoles(['admin']);

        $designer = User::query()->updateOrCreate(
            ['email' => 'designer@smarthome.test'],
            [
                'name' => 'Designer',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
            ]
        );

        $designer->syncRoles(['designer']);
    }
}
