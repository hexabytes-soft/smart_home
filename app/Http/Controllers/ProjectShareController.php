<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateProjectShareRequest;
use App\Models\Project;
use App\Models\SmartComponent;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\View\View;

class ProjectShareController extends Controller
{
    public function update(UpdateProjectShareRequest $request, Project $project): RedirectResponse
    {
        if ($request->boolean('regenerate_token')) {
            $project->share_token = (string) Str::uuid();
        }

        if ($request->boolean('share_enabled')) {
            if (empty($project->share_token)) {
                $project->share_token = (string) Str::uuid();
            }

            $password = $request->input('share_password');

            if ($password) {
                $project->share_password = Hash::make($password);
            } elseif (! $project->share_password) {
                return back()
                    ->withInput()
                    ->withErrors(['share_password' => 'Set a viewer password before enabling the public link.']);
            }

            $project->share_enabled = true;
        } else {
            $project->share_enabled = false;
        }

        $project->save();

        return back()->with('status', $project->share_enabled
            ? 'Public 2D plan link is active. Share the URL and password with your client.'
            : 'Public 360° link disabled.');
    }

    public function gate(string $token): View|RedirectResponse
    {
        $project = $this->sharedProject($token);

        if ($this->isUnlocked($token)) {
            return redirect()->route('share.viewPlan', $token);
        }

        return view('share.gate', compact('project', 'token'));
    }

    public function unlock(Request $request, string $token): RedirectResponse
    {
        $project = $this->sharedProject($token);

        $request->validate([
            'password' => ['required', 'string', 'max:64'],
        ]);

        if (! $project->share_password || ! Hash::check($request->input('password'), $project->share_password)) {
            return back()
                ->withInput()
                ->withErrors(['password' => 'Incorrect password.']);
        }

        $request->session()->put($this->sessionKey($token), true);
        $request->session()->save();

        return redirect()->route('share.viewPlan', $token);
    }

    public function viewPlan(Request $request, string $token): View|RedirectResponse
    {
        $project = $this->sharedProject($token);

        if (! $this->isUnlocked($token)) {
            return redirect()->route('share.gate', $token);
        }

        $smartCatalog = SmartComponent::query()
            ->active()
            ->ordered()
            ->get()
            ->map(fn (SmartComponent $component) => $component->toCatalogItem())
            ->values()
            ->all();

        $mapData = $project->mapDataForViewer();

        return view('share.viewplan', compact('project', 'token', 'smartCatalog', 'mapData'));
    }

    public function view360(Request $request, string $token): View|RedirectResponse
    {
        $project = $this->sharedProject($token);

        if (! $this->isUnlocked($token)) {
            return redirect()->route('share.gate', $token);
        }

        return view('share.view360', compact('project', 'token'));
    }

    public function data(Request $request, string $token): JsonResponse
    {
        $project = $this->sharedProject($token);

        if (! $this->isUnlocked($token)) {
            abort(403, 'Unlock the viewer with the password first.');
        }

        return response()->json([
            'map_data' => $project->mapDataForViewer(),
            'width' => $project->width,
            'depth' => $project->depth,
            'updated_at' => $project->updated_at?->toIso8601String(),
        ]);
    }

    protected function sharedProject(string $token): Project
    {
        return Project::query()
            ->where('share_token', $token)
            ->where('share_enabled', true)
            ->firstOrFail();
    }

    protected function sessionKey(string $token): string
    {
        return 'share_unlocked.'.$token;
    }

    protected function isUnlocked(string $token): bool
    {
        return (bool) session($this->sessionKey($token));
    }
}
