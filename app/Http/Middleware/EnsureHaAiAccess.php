<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureHaAiAccess
{
    public const SESSION_KEY = 'ha_ai_unlocked';

    public function handle(Request $request, Closure $next): Response
    {
        if (! $request->user()?->hasAnyRole(['admin', 'manager'])) {
            abort(403, 'HA AI workspace is restricted to admin and manager roles.');
        }

        if (! $request->session()->get(self::SESSION_KEY)) {
            return redirect()->route('ha-ai.login');
        }

        return $next($request);
    }
}
