<?php

namespace App\Http\Controllers\HaAi;

use App\Http\Controllers\Controller;
use App\Http\Requests\HaAi\UpdateProjectKnowledgeRequest;
use App\Models\Project;
use App\Services\HaAi\HaProjectKnowledgeService;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class KnowledgeController extends Controller
{
    public function edit(Project $project, HaProjectKnowledgeService $knowledge): View
    {
        $this->authorize('view', $project);

        return view('ha-ai.knowledge.edit', [
            'project' => $project,
            'knowledge' => $knowledge->forProject($project),
        ]);
    }

    public function update(
        UpdateProjectKnowledgeRequest $request,
        Project $project,
        HaProjectKnowledgeService $knowledge,
    ): RedirectResponse {
        $this->authorize('editMap', $project);

        $knowledge->update($project, $request->validated());

        return redirect()
            ->route('ha-ai.knowledge.edit', $project)
            ->with('status', 'Project knowledge saved. Gemini will use it on the next request.');
    }
}
