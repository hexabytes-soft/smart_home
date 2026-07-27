<x-app-layout>
    <x-slot name="header">
        <div class="flex flex-wrap items-center justify-between gap-4">
            <div>
                <h2 class="text-2xl font-bold text-white">Projects</h2>
                <p class="text-sm text-surface-400 mt-0.5">Your homes, buildings & floor plans</p>
            </div>
            @can('projects.create')
                <a href="{{ route('projects.create') }}" class="btn-primary">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                    New Project
                </a>
            @endcan
        </div>
    </x-slot>

    <div class="p-4 sm:p-6 lg:p-8">
        @if (session('status'))
            <div class="mb-6 p-4 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm">
                {{ session('status') }}
            </div>
        @endif

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            @forelse ($projects as $project)
                <article class="card overflow-hidden group hover:border-brand-500/30 transition-all duration-300">
                    <div class="h-40 relative bg-gradient-to-br from-surface-800 via-surface-900 to-surface-950 overflow-hidden">
                        <div class="absolute inset-0 opacity-30">
                            <svg class="w-full h-full" viewBox="0 0 200 120" preserveAspectRatio="none">
                                <defs>
                                    <pattern id="grid-{{ $project->id }}" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(6,182,212,0.3)" stroke-width="0.5"/>
                                    </pattern>
                                </defs>
                                <rect width="200" height="120" fill="url(#grid-{{ $project->id }})"/>
                                <rect x="30" y="25" width="140" height="70" fill="none" stroke="rgba(6,182,212,0.5)" stroke-width="1.5"/>
                                <rect x="85" y="95" width="20" height="4" fill="rgba(146,64,14,0.8)"/>
                            </svg>
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-t from-surface-900 via-transparent to-transparent"></div>
                        <div class="absolute bottom-4 left-4 right-4">
                            <h3 class="text-lg font-bold text-white">{{ $project->name }}</h3>
                            <p class="text-sm text-surface-400 capitalize">{{ $project->type }} · {{ $project->map_mode }} map</p>
                        </div>
                        <span class="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-xs font-medium capitalize
                            {{ $project->status === 'published' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30' }}">
                            {{ $project->status }}
                        </span>
                    </div>
                    <div class="p-5 space-y-4">
                        <p class="text-sm text-surface-400 line-clamp-2 min-h-[2.5rem]">{{ $project->description ?: 'No description yet' }}</p>
                        <div class="flex items-center gap-4 text-xs text-surface-500">
                            <span class="flex items-center gap-1">
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
                                {{ $project->width }}×{{ $project->depth }} m
                            </span>
                            <span>{{ $project->floors_count }} floor(s)</span>
                        </div>
                        @php $stats = $projectBenefits[$project->id] ?? null; @endphp
                        @if ($stats)
                            <div class="grid grid-cols-3 gap-2 text-[11px]">
                                <div class="rounded-lg bg-surface-950/60 border border-surface-800 px-2 py-1.5">
                                    <p class="text-surface-500">Buy</p>
                                    <p class="font-mono text-surface-200"><x-omr :amount="$stats['total_buy']" class="gap-0.5" /></p>
                                </div>
                                <div class="rounded-lg bg-surface-950/60 border border-surface-800 px-2 py-1.5">
                                    <p class="text-surface-500">Sell</p>
                                    <p class="font-mono text-emerald-300"><x-omr :amount="$stats['total_sell']" class="gap-0.5" /></p>
                                </div>
                                <div class="rounded-lg bg-brand-500/10 border border-brand-500/25 px-2 py-1.5">
                                    <p class="text-brand-300/80">Benefit</p>
                                    <p class="font-mono {{ $stats['total_benefit'] >= 0 ? 'text-brand-300' : 'text-rose-300' }}"><x-omr :amount="$stats['total_benefit']" class="gap-0.5" /></p>
                                </div>
                            </div>
                        @endif
                        <div class="flex gap-2 pt-1">
                            <a href="{{ route('projects.map', $project) }}" class="btn-primary flex-1 text-center text-xs py-2.5">
                                Open Map
                            </a>
                            <a href="{{ route('projects.show', $project) }}#benefits" class="btn-secondary flex-1 text-center text-xs py-2.5">
                                Benefits
                            </a>
                            <a href="{{ route('projects.show', $project) }}" class="btn-secondary text-center text-xs py-2.5 px-3" title="Details">
                                Details
                            </a>
                            @can('update', $project)
                                <a href="{{ route('projects.edit', $project) }}" class="btn-secondary text-center text-xs py-2.5 px-3" title="Edit title">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                                </a>
                            @endcan
                        </div>
                    </div>
                </article>
            @empty
                <div class="col-span-full card p-12 text-center">
                    <div class="w-16 h-16 rounded-2xl bg-surface-800 flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-surface-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"/></svg>
                    </div>
                    <p class="text-surface-400 mb-2">No projects yet</p>
                    @can('projects.create')
                        <a href="{{ route('projects.create') }}" class="text-brand-400 hover:text-brand-300">Create your first project →</a>
                    @endcan
                </div>
            @endforelse
        </div>

        @if($projects->hasPages())
            <div class="mt-8">{{ $projects->links() }}</div>
        @endif
    </div>
</x-app-layout>
