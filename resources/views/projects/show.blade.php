<x-app-layout>
    <x-slot name="header">
        <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="min-w-0">
                <div class="flex items-center gap-2 text-xs text-surface-500 mb-1">
                    <a href="{{ route('projects.index') }}" class="hover:text-brand-300 transition-colors">Projects</a>
                    <span>/</span>
                    <span class="text-surface-400 truncate">Details</span>
                </div>
                <h2 class="text-2xl font-bold text-white truncate">{{ $project->name }}</h2>
                <p class="text-sm text-surface-400 mt-0.5 capitalize">
                    {{ $project->type }} · {{ $project->map_mode }} ·
                    <span class="{{ $project->status === 'published' ? 'text-emerald-400' : ($project->status === 'archived' ? 'text-surface-500' : 'text-amber-400') }}">{{ $project->status }}</span>
                </p>
            </div>
            <div class="flex flex-wrap gap-2">
                <a href="#benefits" class="btn-secondary">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                    Benefits
                </a>
                <a href="{{ route('projects.map', $project) }}" class="btn-primary">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
                    Open map
                </a>
                @can('update', $project)
                    <a href="{{ route('projects.edit', $project) }}" class="btn-secondary">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                        Edit title & details
                    </a>
                @endcan
            </div>
        </div>
    </x-slot>

    <div class="p-4 sm:p-6 lg:p-8 space-y-6">
        @if (session('status'))
            <div class="p-4 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm">
                {{ session('status') }}
            </div>
        @endif

        {{-- Title hero --}}
        <section class="card overflow-hidden">
            <div class="relative p-6 sm:p-8 bg-gradient-to-br from-surface-900 via-surface-900 to-brand-950/40">
                <div class="absolute inset-0 opacity-40 pointer-events-none"
                     style="background: radial-gradient(ellipse 60% 80% at 90% 10%, rgba(34,211,238,0.18), transparent 55%);"></div>
                <div class="relative flex flex-wrap items-start justify-between gap-4">
                    <div class="min-w-0 space-y-3">
                        <p class="text-[11px] uppercase tracking-[0.16em] font-semibold text-brand-300/90">Project title</p>
                        <h1 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">{{ $project->name }}</h1>
                        @if ($project->description)
                            <p class="text-surface-300 max-w-2xl leading-relaxed">{{ $project->description }}</p>
                        @else
                            <p class="text-surface-500 text-sm">No description yet.</p>
                        @endif
                        @can('update', $project)
                            <a href="{{ route('projects.edit', $project) }}" class="inline-flex items-center gap-1.5 text-sm text-brand-300 hover:text-brand-200 transition-colors">
                                Change name / title
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                            </a>
                        @endcan
                    </div>
                    <span class="px-3 py-1.5 rounded-xl text-xs font-semibold capitalize border
                        {{ $project->status === 'published'
                            ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                            : ($project->status === 'archived'
                                ? 'bg-surface-800 text-surface-400 border-surface-700'
                                : 'bg-amber-500/15 text-amber-300 border-amber-500/30') }}">
                        {{ $project->status }}
                    </span>
                </div>
            </div>
        </section>

        {{-- Stats --}}
        <section class="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="card p-4 sm:p-5">
                <p class="text-[11px] uppercase tracking-wider text-surface-500 mb-1">Type</p>
                <p class="text-lg font-semibold text-white capitalize">{{ $project->type }}</p>
            </div>
            <div class="card p-4 sm:p-5">
                <p class="text-[11px] uppercase tracking-wider text-surface-500 mb-1">Map mode</p>
                <p class="text-lg font-semibold text-white uppercase">{{ $project->map_mode }}</p>
            </div>
            <div class="card p-4 sm:p-5">
                <p class="text-[11px] uppercase tracking-wider text-surface-500 mb-1">Size</p>
                <p class="text-lg font-semibold text-white">{{ $project->width }}×{{ $project->depth }} <span class="text-sm font-medium text-surface-400">m</span></p>
            </div>
            <div class="card p-4 sm:p-5">
                <p class="text-[11px] uppercase tracking-wider text-surface-500 mb-1">Floors</p>
                <p class="text-lg font-semibold text-white">{{ $project->floors_count }}</p>
            </div>
        </section>

        @include('projects.partials.benefits', ['project' => $project, 'benefitStats' => $benefitStats])

        {{-- Client + owner --}}
        <section class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div class="card p-5 lg:col-span-2">
                <div class="flex items-center justify-between gap-3 mb-4">
                    <h3 class="text-sm font-semibold text-white">Client & location</h3>
                    @can('update', $project)
                        <a href="{{ route('projects.edit', $project) }}" class="text-xs text-brand-300 hover:text-brand-200">Edit</a>
                    @endcan
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div class="rounded-xl border border-surface-800 bg-surface-950/50 p-4">
                        <p class="text-[11px] uppercase tracking-wider text-surface-500 mb-1">اسم العميل / Client</p>
                        <p class="text-sm font-medium text-surface-100">{{ $project->client_name ?: '—' }}</p>
                    </div>
                    <div class="rounded-xl border border-surface-800 bg-surface-950/50 p-4">
                        <p class="text-[11px] uppercase tracking-wider text-surface-500 mb-1">رقم الهاتف / Phone</p>
                        <p class="text-sm font-medium text-surface-100" dir="ltr">{{ $project->client_phone ?: '—' }}</p>
                    </div>
                    <div class="rounded-xl border border-surface-800 bg-surface-950/50 p-4">
                        <p class="text-[11px] uppercase tracking-wider text-surface-500 mb-1">مكان المشروع / Location</p>
                        <p class="text-sm font-medium text-surface-100">{{ $project->project_location ?: '—' }}</p>
                    </div>
                </div>
            </div>
            <div class="card p-5">
                <h3 class="text-sm font-semibold text-white mb-4">Owner</h3>
                <div class="flex items-center gap-3">
                    <div class="w-11 h-11 rounded-xl bg-brand-500/15 border border-brand-500/25 flex items-center justify-center text-brand-300 font-bold">
                        {{ strtoupper(substr($project->owner->name ?? 'U', 0, 1)) }}
                    </div>
                    <div class="min-w-0">
                        <p class="text-sm font-semibold text-white truncate">{{ $project->owner->name }}</p>
                        <p class="text-xs text-surface-500 truncate">{{ $project->owner->email ?? '' }}</p>
                    </div>
                </div>
                <dl class="mt-5 space-y-2 text-xs text-surface-500">
                    <div class="flex justify-between gap-3">
                        <dt>Created</dt>
                        <dd class="text-surface-300">{{ $project->created_at?->format('d M Y') }}</dd>
                    </div>
                    <div class="flex justify-between gap-3">
                        <dt>Updated</dt>
                        <dd class="text-surface-300">{{ $project->updated_at?->diffForHumans() }}</dd>
                    </div>
                </dl>
            </div>
        </section>

        @can('update', $project)
            @include('projects.partials.share-settings', ['project' => $project])
        @endcan

        <details class="card group">
            <summary class="cursor-pointer list-none flex items-center justify-between gap-3 px-5 py-4">
                <div>
                    <h3 class="text-sm font-semibold text-white">Map data (advanced)</h3>
                    <p class="text-xs text-surface-500 mt-0.5">Raw JSON used by the studio — walls, rooms, devices, underlays</p>
                </div>
                <span class="text-surface-500 group-open:rotate-180 transition-transform">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </span>
            </summary>
            <div class="px-5 pb-5">
                <pre class="text-xs bg-surface-950 border border-surface-800 rounded-xl p-4 overflow-auto max-h-80 text-surface-300 font-mono">{{ json_encode($project->map_data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) }}</pre>
            </div>
        </details>
    </div>
</x-app-layout>
