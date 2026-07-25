<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ $project->name }} — 360° View</title>
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700&display=swap" rel="stylesheet">
    @vite(['resources/css/app.css'])
</head>
<body class="font-sans antialiased bg-surface-950 text-white min-h-screen flex items-center justify-center px-4 py-10">
    <div class="w-full max-w-md">
        <div class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-500/15 border border-brand-500/30 mb-4">
                <svg class="w-7 h-7 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            </div>
            <h1 class="text-2xl font-bold tracking-tight">{{ $project->name }}</h1>
            <p class="mt-2 text-sm text-surface-400">Enter the password to view the home floor plan in 2D</p>
        </div>

        <div class="rounded-2xl border border-surface-800 bg-surface-900/80 backdrop-blur-sm p-6 shadow-xl">
            @if ($errors->any())
                <div class="mb-4 rounded-lg border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-sm text-rose-200">
                    {{ $errors->first() }}
                </div>
            @endif

            <form method="POST" action="{{ route('share.unlock', $token) }}" class="space-y-4">
                @csrf
                <div>
                    <label for="password" class="block text-xs font-medium text-surface-300 mb-1.5">Viewer password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autofocus
                        class="w-full rounded-xl border-surface-700 bg-surface-800 text-white placeholder-surface-500 focus:border-brand-500 focus:ring-brand-500"
                        placeholder="Password from your designer"
                    >
                </div>
                <button type="submit" class="w-full rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold py-2.5 transition-colors">
                    View floor plan in 2D
                </button>
            </form>
        </div>

        <p class="mt-6 text-center text-xs text-surface-600">
            {{ $project->width }}×{{ $project->depth }} m · Live preview — updates when the designer saves
        </p>
    </div>
</body>
</html>
