<?php

namespace App\Http\Controllers\HaAi;

use App\Http\Controllers\Controller;
use App\Http\Middleware\EnsureHaAiAccess;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class AuthController extends Controller
{
    public function showLogin(Request $request): View|RedirectResponse
    {
        if ($request->session()->get(EnsureHaAiAccess::SESSION_KEY)) {
            return redirect()->route('ha-ai.index');
        }

        return view('ha-ai.login');
    }

    public function login(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'password' => ['required', 'string'],
        ]);

        $expected = (string) config('services.ha_ai.password');

        if ($expected === '' || ! hash_equals($expected, $validated['password'])) {
            return back()
                ->withErrors(['password' => 'Invalid HA AI password.']);
        }

        $request->session()->put(EnsureHaAiAccess::SESSION_KEY, true);
        $request->session()->regenerate();

        return redirect()->intended(route('ha-ai.index'));
    }

    public function logout(Request $request): RedirectResponse
    {
        $request->session()->forget(EnsureHaAiAccess::SESSION_KEY);

        return redirect()->route('ha-ai.login');
    }
}
