<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        $permissions = [
            'users.view',
            'users.create',
            'users.update',
            'users.delete',
            'roles.view',
            'roles.manage',
            'projects.view',
            'projects.create',
            'projects.update',
            'projects.delete',
            'projects.publish',
            'products.view',
            'products.create',
            'products.update',
            'products.delete',
            'map.edit',
            'map.view',
            'components.manage',
            'simulation.run',
        ];

        foreach ($permissions as $permission) {
            Permission::findOrCreate($permission);
        }

        $admin = Role::findOrCreate('admin');
        $admin->syncPermissions(Permission::all());

        $manager = Role::findOrCreate('manager');
        $manager->syncPermissions([
            'users.view',
            'projects.view',
            'projects.create',
            'projects.update',
            'projects.delete',
            'projects.publish',
            'products.view',
            'products.create',
            'products.update',
            'products.delete',
            'map.edit',
            'map.view',
            'components.manage',
            'simulation.run',
        ]);

        $designer = Role::findOrCreate('designer');
        $designer->syncPermissions([
            'projects.view',
            'projects.create',
            'projects.update',
            'products.view',
            'products.create',
            'products.update',
            'map.edit',
            'map.view',
            'components.manage',
            'simulation.run',
        ]);

        $viewer = Role::findOrCreate('viewer');
        $viewer->syncPermissions([
            'projects.view',
            'products.view',
            'map.view',
            'simulation.run',
        ]);
    }
}
