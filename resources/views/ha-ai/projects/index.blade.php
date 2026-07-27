@extends('layouts.ha-ai')

@section('title', 'Projects')

@section('content')
    <div class="flex flex-wrap items-start justify-between gap-4">
        <div>
            <h1 class="text-2xl font-bold text-white">Projects</h1>
            <p class="text-sm text-surface-400 mt-1">Select an existing project to open the automation workspace.</p>
        </div>
        <div class="flex flex-wrap gap-2">
            <form method="POST" action="{{ route('ha-ai.connection.test') }}">
                @csrf
                <button class="btn-secondary text-xs py-2 px-3">Test HA connection</button>
            </form>
            <form method="POST" action="{{ route('ha-ai.sync') }}" x-data="{ loading: false }" @submit="loading = true">
                @csrf
                <button class="btn-primary text-xs py-2 px-3" :disabled="loading">
                    <span x-show="!loading">Sync Home Assistant</span>
                    <span x-cloak x-show="loading">Syncing…</span>
                </button>
            </form>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        @forelse ($projects as $project)
            <a href="{{ route('ha-ai.projects.show', $project) }}" class="card p-5 hover:border-brand-500/40 transition-colors block">
                <h2 class="text-lg font-semibold text-white">{{ $project->name }}</h2>
                <p class="text-sm text-surface-400 mt-1 line-clamp-2">{{ $project->description ?: 'No description' }}</p>
                <div class="mt-4 flex flex-wrap gap-2 text-[11px] text-surface-500">
                    <span class="capitalize">{{ $project->type }}</span>
                    <span>·</span>
                    <span>{{ $project->floors_count }} floor(s)</span>
                    <span>·</span>
                    <span class="capitalize">{{ $project->status }}</span>
                </div>
            </a>
        @empty
            <div class="col-span-full card p-10 text-center text-surface-400">
                No projects found. Create one in the main app first.
            </div>
        @endforelse
    </div>

    @if ($projects->hasPages())
        <div>{{ $projects->links() }}</div>
    @endif
@endsection
