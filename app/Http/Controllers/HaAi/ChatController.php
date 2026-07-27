<?php

namespace App\Http\Controllers\HaAi;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Services\HaAi\HaProjectChatService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Throwable;

class ChatController extends Controller
{
    public function index(Project $project, HaProjectChatService $chat): View
    {
        $this->authorize('view', $project);

        return view('ha-ai.chat.index', [
            'project' => $project,
            'messages' => $chat->history($project),
        ]);
    }

    public function store(Request $request, Project $project, HaProjectChatService $chat): RedirectResponse
    {
        $this->authorize('editMap', $project);
        $validated = $request->validate([
            'message' => ['required', 'string', 'min:2', 'max:8000'],
        ]);

        try {
            $chat->ask($project, $request->user(), $validated['message']);
        } catch (Throwable $e) {
            return back()->withInput()->withErrors(['message' => $e->getMessage()]);
        }

        return back();
    }
}
