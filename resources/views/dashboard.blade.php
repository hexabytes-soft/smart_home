<x-app-layout>
    <x-slot name="header">
        <div class="flex flex-wrap items-center justify-between gap-4">
            <div>
                <h2 class="text-2xl font-bold text-white">Dashboard</h2>
                <p class="text-sm text-surface-400 mt-0.5">Welcome back, {{ auth()->user()->name }}</p>
            </div>
            <div class="flex flex-wrap items-center gap-2">
                @can('projects.create')
                    <a href="{{ route('projects.create') }}" class="btn-primary">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                        New Project
                    </a>
                @endcan
            </div>
        </div>
    </x-slot>

    <div class="p-4 sm:p-6 lg:p-8 space-y-8">
        @if (session('status'))
            <div class="p-4 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm">
                {{ session('status') }}
            </div>
        @endif

        {{-- Stats --}}
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="stat-card">
                <div class="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div class="relative">
                    <div class="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center mb-4">
                        <svg class="w-5 h-5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"/></svg>
                    </div>
                    <p class="text-sm text-surface-400">Total Projects</p>
                    <p class="mt-1 text-3xl font-bold text-white">{{ $stats['projects'] }}</p>
                </div>
            </div>
            <div class="stat-card">
                <div class="relative">
                    <div class="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                        <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <p class="text-sm text-surface-400">Published</p>
                    <p class="mt-1 text-3xl font-bold text-white">{{ $stats['published'] }}</p>
                </div>
            </div>
            <div class="stat-card">
                <div class="relative">
                    <div class="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                        <svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                    </div>
                    <p class="text-sm text-surface-400">Drafts</p>
                    <p class="mt-1 text-3xl font-bold text-white">{{ $stats['drafts'] }}</p>
                </div>
            </div>
        </div>

        {{-- Quick actions --}}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            @can('projects.create')
                <a href="{{ route('projects.create') }}" class="card p-6 flex items-center gap-4 hover:border-brand-500/40 transition-all group">
                    <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500/30 to-brand-600/20 flex items-center justify-center group-hover:shadow-glow transition-shadow">
                        <svg class="w-7 h-7 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                    </div>
                    <div>
                        <p class="font-semibold text-white">Create new project</p>
                        <p class="text-sm text-surface-400 mt-0.5">Start a home, building, or office design</p>
                    </div>
                </a>
            @endcan
            <a href="{{ route('projects.index') }}" class="card p-6 flex items-center gap-4 hover:border-brand-500/40 transition-all group">
                <div class="w-14 h-14 rounded-2xl bg-surface-800 flex items-center justify-center group-hover:bg-surface-700 transition-colors">
                    <svg class="w-7 h-7 text-surface-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z"/></svg>
                </div>
                <div>
                    <p class="font-semibold text-white">Browse all projects</p>
                    <p class="text-sm text-surface-400 mt-0.5">View and manage your designs</p>
                </div>
            </a>
        </div>

        {{-- Recent projects --}}
        <div class="card">
            <div class="px-6 py-5 border-b border-surface-800 flex items-center justify-between">
                <h3 class="font-semibold text-white">Recent projects</h3>
                <a href="{{ route('projects.index') }}" class="text-sm text-brand-400 hover:text-brand-300 transition-colors">View all →</a>
            </div>
            <div class="divide-y divide-surface-800">
                @forelse ($recentProjects as $project)
                    <div class="px-6 py-4 flex items-center justify-between gap-4 hover:bg-surface-800/30 transition-colors">
                        <div class="flex items-center gap-4 min-w-0">
                            <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-surface-700 to-surface-800 flex items-center justify-center shrink-0">
                                <svg class="w-5 h-5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                            </div>
                            <div class="min-w-0">
                                <a href="{{ route('projects.show', $project) }}" class="font-medium text-white hover:text-brand-300 transition-colors truncate block">{{ $project->name }}</a>
                                <p class="text-sm text-surface-500 capitalize">{{ $project->type }} · {{ $project->map_mode }} · {{ $project->status }}</p>
                            </div>
                        </div>
                        <a href="{{ route('projects.map', $project) }}" class="btn-secondary shrink-0 text-xs py-2 px-4">
                            Open map
                        </a>
                    </div>
                @empty
                    <div class="px-6 py-12 text-center">
                        <div class="w-16 h-16 rounded-2xl bg-surface-800 flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-surface-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"/></svg>
                        </div>
                        <p class="text-surface-400">No projects yet</p>
                        @can('projects.create')
                            <a href="{{ route('projects.create') }}" class="inline-block mt-3 text-brand-400 hover:text-brand-300">Create your first project →</a>
                        @endcan
                    </div>
                @endforelse
            </div>
        </div>
    </div>
</x-app-layout>
