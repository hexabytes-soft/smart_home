<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'HA AI') · {{ config('app.name') }}</title>
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700&display=swap" rel="stylesheet" />
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <style>[x-cloak]{display:none!important}</style>
    @stack('head')
</head>
<body class="font-sans antialiased bg-surface-950 text-surface-100" x-data="haAiShell()">
    <div class="min-h-screen flex flex-col">
        <header class="sticky top-0 z-30 border-b border-surface-800 bg-surface-950/90 backdrop-blur-xl">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
                <div class="flex items-center gap-3 min-w-0">
                    <a href="{{ route('ha-ai.index') }}" class="font-semibold text-white tracking-tight truncate">
                        HA AI <span class="text-brand-400 font-normal">Workspace</span>
                    </a>
                    @isset($project)
                        <span class="text-surface-600 hidden sm:inline">/</span>
                        <span class="text-sm text-surface-300 truncate hidden sm:inline">{{ $project->name }}</span>
                    @endisset
                </div>
                <div class="flex items-center gap-2">
                    @auth
                        <span class="text-xs text-surface-500 hidden md:inline">{{ auth()->user()->name }}</span>
                    @endauth
                    <form method="POST" action="{{ route('ha-ai.logout') }}">
                        @csrf
                        <button type="submit" class="btn-secondary text-xs py-1.5 px-3">Lock</button>
                    </form>
                </div>
            </div>
            @isset($project)
                <nav class="border-t border-surface-800/80">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-1 overflow-x-auto text-sm">
                        @php
                            $tabs = [
                                'ha-ai.projects.show' => 'Dashboard',
                                'ha-ai.knowledge.edit' => 'Knowledge',
                                'ha-ai.chat' => 'Chat',
                                'ha-ai.devices' => 'Devices',
                                'ha-ai.mapping' => 'Mapping',
                                'ha-ai.automations.builder' => 'Builder',
                                'ha-ai.automations.index' => 'History',
                                'ha-ai.health' => 'Health',
                                'ha-ai.search' => 'Search',
                            ];
                        @endphp
                        @foreach ($tabs as $route => $label)
                            <a
                                href="{{ route($route, $project) }}"
                                @class([
                                    'px-3 py-2.5 whitespace-nowrap border-b-2 transition-colors',
                                    'border-brand-400 text-brand-300' => request()->routeIs($route),
                                    'border-transparent text-surface-400 hover:text-surface-200' => ! request()->routeIs($route),
                                ])
                            >{{ $label }}</a>
                        @endforeach
                        <div class="relative ml-auto" x-data="{ open: false }">
                            <button type="button" class="px-3 py-2.5 text-surface-400 hover:text-surface-200" @click="open=!open">More ▾</button>
                            <div x-cloak x-show="open" @click.outside="open=false" class="absolute right-0 mt-1 w-48 rounded-xl border border-surface-700 bg-surface-900 shadow-xl z-40 py-1 text-sm">
                                <a href="{{ route('ha-ai.library', [$project, 'automations']) }}" class="block px-3 py-2 hover:bg-surface-800">HA Library</a>
                                <a href="{{ route('ha-ai.optimizer', $project) }}" class="block px-3 py-2 hover:bg-surface-800">Optimizer</a>
                                <a href="{{ route('ha-ai.logs', $project) }}" class="block px-3 py-2 hover:bg-surface-800">Smart Logs</a>
                                <a href="{{ route('ha-ai.backup.export', $project) }}" class="block px-3 py-2 hover:bg-surface-800">Export backup</a>
                            </div>
                        </div>
                    </div>
                </nav>
            @endisset
        </header>

        <main class="flex-1">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
                @if (session('status'))
                    <div class="rounded-xl border border-brand-500/30 bg-brand-500/10 px-4 py-3 text-sm text-brand-200" x-init="toast(sessionStatus)" data-status="{{ session('status') }}">
                        {{ session('status') }}
                    </div>
                @endif
                @if ($errors->any())
                    <div class="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
                        <ul class="list-disc list-inside space-y-1">
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif

                @yield('content')
            </div>
        </main>
    </div>

    <div
        class="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm"
        aria-live="polite"
    >
        <template x-for="t in toasts" :key="t.id">
            <div
                class="rounded-xl border px-4 py-3 text-sm shadow-xl backdrop-blur"
                :class="t.type === 'error'
                    ? 'border-rose-500/40 bg-rose-950/90 text-rose-100'
                    : 'border-brand-500/40 bg-surface-900/95 text-surface-100'"
                x-text="t.message"
            ></div>
        </template>
    </div>

    <script>
        function haAiShell() {
            return {
                toasts: [],
                toast(message, type = 'ok') {
                    if (!message) return;
                    const id = Date.now() + Math.random();
                    this.toasts.push({ id, message, type });
                    setTimeout(() => {
                        this.toasts = this.toasts.filter(t => t.id !== id);
                    }, 4200);
                },
                init() {
                    const el = document.querySelector('[data-status]');
                    if (el?.dataset.status) this.toast(el.dataset.status);
                    window.haAiToast = (msg, type) => this.toast(msg, type);
                }
            }
        }
    </script>
    @stack('scripts')
</body>
</html>
