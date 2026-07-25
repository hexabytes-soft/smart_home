<?php

namespace App\Policies;

use App\Models\Project;
use App\Models\User;

class ProjectPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->can('projects.view');
    }

    public function view(User $user, Project $project): bool
    {
        if (! $user->can('projects.view')) {
            return false;
        }

        if ($user->hasRole('admin') || $user->hasRole('manager')) {
            return true;
        }

        return $project->user_id === $user->id;
    }

    public function create(User $user): bool
    {
        return $user->can('projects.create');
    }

    public function update(User $user, Project $project): bool
    {
        if (! $user->can('projects.update')) {
            return false;
        }

        if ($user->hasRole('admin') || $user->hasRole('manager')) {
            return true;
        }

        return $project->user_id === $user->id;
    }

    public function delete(User $user, Project $project): bool
    {
        if (! $user->can('projects.delete')) {
            return false;
        }

        if ($user->hasRole('admin') || $user->hasRole('manager')) {
            return true;
        }

        return $project->user_id === $user->id;
    }

    public function editMap(User $user, Project $project): bool
    {
        return $user->can('map.edit') && $this->update($user, $project);
    }
}
