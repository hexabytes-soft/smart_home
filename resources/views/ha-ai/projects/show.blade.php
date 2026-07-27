@extends('layouts.ha-ai')

@section('title', $project->name)

@section('content')
    <div class="flex flex-wrap items-start justify-between gap-4">
        <div>
            <a href="{{ route('ha-ai.index') }}" class="text-xs text-surface-500 hover:text-brand-300">← All projects</a>
            <h1 class="text-2xl font-bold text-white mt-1">{{ $project->name }}</h1>
            <p class="text-sm text-surface-400 mt-1">
                {{ $project->client_name ?: 'No client' }}
                @if ($project->project_location)
                    · {{ $project->project_location }}
                @endif
            </p>
        </div>
        <div class="flex flex-wrap gap-2">
            <form method="POST" action="{{ route('ha-ai.connection.test') }}">@csrf<button class="btn-secondary text-xs py-2 px-3">Test connection</button></form>
            <form method="POST" action="{{ route('ha-ai.sync') }}" x-data="{ loading: false }" @submit="loading = true">
                @csrf
                <button class="btn-primary text-xs py-2 px-3" :disabled="loading">
                    <span x-show="!loading">Sync HA</span>
                    <span x-cloak x-show="loading">Syncing…</span>
                </button>
            </form>
        </div>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div class="card p-4">
            <p class="text-[11px] uppercase tracking-wide text-surface-500">Last sync</p>
            <p class="text-sm font-semibold text-white mt-1">
                @if ($stats['last_sync'])
                    {{ $stats['last_sync']->finished_at?->diffForHumans() ?? $stats['last_sync']->created_at->diffForHumans() }}
                    <span class="text-surface-500 font-normal">({{ $stats['last_sync']->status }})</span>
                @else
                    Never
                @endif
            </p>
        </div>
        <div class="card p-4">
            <p class="text-[11px] uppercase tracking-wide text-surface-500">HA entities</p>
            <p class="text-xl font-semibold text-white mt-1">{{ $stats['entity_count'] }}</p>
            <p class="text-[10px] text-surface-500">{{ $stats['device_count'] }} devices</p>
        </div>
        <div class="card p-4">
            <p class="text-[11px] uppercase tracking-wide text-surface-500">Linked / Unlinked</p>
            <p class="text-xl font-semibold text-white mt-1">{{ $stats['linked_components'] }} / {{ $stats['unlinked_components'] }}</p>
            <p class="text-[10px] text-surface-500">{{ $stats['placed_components'] }} placed components</p>
        </div>
        <div class="card p-4">
            <p class="text-[11px] uppercase tracking-wide text-surface-500">Automations</p>
            <p class="text-xl font-semibold text-white mt-1">{{ $stats['generated_automations'] }}</p>
            <p class="text-[10px] text-surface-500">{{ $stats['uploaded_automations'] }} uploaded · {{ $stats['failed_automations'] }} failed</p>
        </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <a href="{{ route('ha-ai.knowledge.edit', $project) }}" class="card p-4 hover:border-brand-500/40 transition-colors">
            <p class="font-semibold text-white">Knowledge</p>
            <p class="text-xs text-surface-400 mt-1">Permanent AI memory for this house</p>
        </a>
        <a href="{{ route('ha-ai.chat', $project) }}" class="card p-4 hover:border-brand-500/40 transition-colors">
            <p class="font-semibold text-white">AI Chat</p>
            <p class="text-xs text-surface-400 mt-1">Ask about this project only</p>
        </a>
        <a href="{{ route('ha-ai.health', $project) }}" class="card p-4 hover:border-brand-500/40 transition-colors">
            <p class="font-semibold text-white">Health</p>
            <p class="text-xs text-surface-400 mt-1">Score, sync, duplicates, recommendations</p>
        </a>
        <a href="{{ route('ha-ai.devices', $project) }}" class="card p-4 hover:border-brand-500/40 transition-colors">
            <p class="font-semibold text-white">Devices</p>
            <p class="text-xs text-surface-400 mt-1">Browse synced entities by area</p>
        </a>
        <a href="{{ route('ha-ai.mapping', $project) }}" class="card p-4 hover:border-brand-500/40 transition-colors">
            <p class="font-semibold text-white">Mapping</p>
            <p class="text-xs text-surface-400 mt-1">Link map components to entities</p>
        </a>
        <a href="{{ route('ha-ai.automations.builder', $project) }}" class="card p-4 hover:border-brand-500/40 transition-colors">
            <p class="font-semibold text-white">Builder</p>
            <p class="text-xs text-surface-400 mt-1">Describe automation → Gemini YAML</p>
        </a>
        <a href="{{ route('ha-ai.automations.index', $project) }}" class="card p-4 hover:border-brand-500/40 transition-colors">
            <p class="font-semibold text-white">History</p>
            <p class="text-xs text-surface-400 mt-1">Generated, uploaded, failed, drafts</p>
        </a>
        <a href="{{ route('ha-ai.search', $project) }}" class="card p-4 hover:border-brand-500/40 transition-colors">
            <p class="font-semibold text-white">Search</p>
            <p class="text-xs text-surface-400 mt-1">Find anything + backup import/export</p>
        </a>
        <a href="{{ route('ha-ai.optimizer', $project) }}" class="card p-4 hover:border-brand-500/40 transition-colors">
            <p class="font-semibold text-white">Optimizer</p>
            <p class="text-xs text-surface-400 mt-1">Duplicates, unused, broken refs</p>
        </a>
    </div>
@endsection
