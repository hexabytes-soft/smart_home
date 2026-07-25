<?php

namespace App\Policies;

use App\Models\SmartComponent;
use App\Models\User;

class SmartComponentPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->can('components.manage') || $user->can('map.edit') || $user->can('map.view');
    }

    public function view(User $user, SmartComponent $smartComponent): bool
    {
        return $this->viewAny($user);
    }

    public function create(User $user): bool
    {
        return $user->can('components.manage');
    }

    public function update(User $user, SmartComponent $smartComponent): bool
    {
        return $user->can('components.manage');
    }

    public function delete(User $user, SmartComponent $smartComponent): bool
    {
        return $user->can('components.manage');
    }
}
