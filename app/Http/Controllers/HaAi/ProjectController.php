<?php

namespace App\Http\Controllers\HaAi;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Services\HaAi\ProjectHaContextService;
use Illuminate\Http\Request;
use Illuminate\View\View;

class ProjectController extends Controller
{
    public function index(Request $request): View
    {
        $user = $request->user();
        $projects = Project::query()
            ->with('owner')
            ->when(
                ! $user->hasAnyRole(['admin', 'manager']),
                fn ($q) => $q->where('user_id', $user->id)
            )
            ->latest()
            ->paginate(24);

        return view('ha-ai.projects.index', compact('projects'));
    }

    public function show(Project $project, ProjectHaContextService $context): View
    {
        $this->authorize('view', $project);
        $stats = $context->dashboardStats($project);

        return view('ha-ai.projects.show', compact('project', 'stats'));
    }
}
