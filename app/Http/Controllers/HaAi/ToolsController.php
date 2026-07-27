<?php

namespace App\Http\Controllers\HaAi;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Services\HaAi\HaGlobalSearchService;
use App\Services\HaAi\HaProjectBackupService;
use App\Services\HaAi\HaProjectHealthService;
use App\Services\HaAi\HaProjectOptimizerService;
use App\Services\HaAi\HaSmartLogService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\View\View;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Throwable;

class ToolsController extends Controller
{
    public function health(Project $project, HaProjectHealthService $health): View
    {
        $this->authorize('view', $project);

        return view('ha-ai.tools.health', [
            'project' => $project,
            'report' => $health->report($project),
        ]);
    }

    public function optimizer(Project $project, HaProjectOptimizerService $optimizer): View|RedirectResponse
    {
        $this->authorize('view', $project);

        try {
            $result = $optimizer->analyze($project);
        } catch (Throwable $e) {
            return back()->withErrors(['optimizer' => $e->getMessage()]);
        }

        return view('ha-ai.tools.optimizer', compact('project', 'result'));
    }

    public function search(Request $request, Project $project, HaGlobalSearchService $search): View
    {
        $this->authorize('view', $project);
        $q = (string) $request->query('q', '');

        return view('ha-ai.tools.search', [
            'project' => $project,
            'q' => $q,
            'results' => $search->search($project, $q),
        ]);
    }

    public function backupExport(Project $project, HaProjectBackupService $backup): BinaryFileResponse
    {
        $this->authorize('view', $project);
        $path = $backup->exportZip($project);

        return response()->download($path, basename($path))->deleteFileAfterSend(true);
    }

    public function backupImport(Request $request, Project $project, HaProjectBackupService $backup): RedirectResponse
    {
        $this->authorize('editMap', $project);
        $request->validate([
            'backup' => ['required', 'file', 'mimes:zip', 'max:51200'],
        ]);

        $uploaded = $request->file('backup');
        $full = $uploaded->getRealPath();

        try {
            $result = $backup->importZip($project, $full);
        } catch (Throwable $e) {
            return back()->withErrors(['backup' => $e->getMessage()]);
        }

        return back()->with('status', 'Backup imported: '.implode(', ', $result['imported']));
    }

    public function logs(Request $request, Project $project, HaSmartLogService $logs): View
    {
        $this->authorize('view', $project);
        $error = null;
        $entries = [];
        try {
            $entries = $logs->fetchLogs();
        } catch (Throwable $e) {
            $error = $e->getMessage();
        }

        return view('ha-ai.tools.logs', [
            'project' => $project,
            'entries' => $entries,
            'error' => $error,
            'answer' => session('log_answer'),
        ]);
    }

    public function logsAsk(Request $request, Project $project, HaSmartLogService $logs): RedirectResponse
    {
        $this->authorize('editMap', $project);
        $validated = $request->validate([
            'question' => ['required', 'string', 'min:3', 'max:5000'],
        ]);

        try {
            $result = $logs->ask($project, $validated['question']);
        } catch (Throwable $e) {
            return back()->withInput()->withErrors(['question' => $e->getMessage()]);
        }

        return back()->with('log_answer', $result['answer'])->with('status', 'Log analysis ready.');
    }
}
