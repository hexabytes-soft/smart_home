@extends('layouts.ha-ai')

@section('title', 'Unlock')

@section('content')
    <div class="max-w-md mx-auto mt-16">
        <div class="card p-6 sm:p-8 space-y-6">
            <div>
                <p class="text-[11px] uppercase tracking-[0.16em] text-brand-300/80 font-semibold mb-2">Private</p>
                <h1 class="text-2xl font-bold text-white">HA AI Workspace</h1>
                <p class="text-sm text-surface-400 mt-2">Enter the integrator password from your environment to continue.</p>
            </div>
            <form method="POST" action="{{ route('ha-ai.login.submit') }}" class="space-y-4">
                @csrf
                <div>
                    <label for="password" class="block text-xs font-medium text-surface-400 mb-1.5">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        required
                        autofocus
                        autocomplete="current-password"
                        class="input-dark w-full"
                    >
                    @error('password')
                        <p class="mt-2 text-sm text-rose-400">{{ $message }}</p>
                    @enderror
                </div>
                <button type="submit" class="btn-primary w-full justify-center">Unlock workspace</button>
            </form>
        </div>
    </div>
@endsection
