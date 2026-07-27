@extends('layouts.ha-ai')

@section('title', 'Health')

@section('content')
    <h1 class="text-xl font-bold text-white">Project health</h1>
    <p class="text-sm text-surface-400 mt-1">Sync status, mapping coverage, and AI score.</p>

    <div class="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div class="card p-4 border-brand-500/30 bg-brand-500/10 lg:col-span-1">
            <p class="text-[11px] uppercase text-brand-300/80">AI score</p>
            <p class="text-3xl font-bold text-brand-200 mt-1">{{ $report['ai_score'] }}</p>
        </div>
        <div class="card p-4">
            <p class="text-[11px] uppercase text-surface-500">Last sync</p>
            <p class="text-sm text-white mt-1">{{ $report['sync_status'] }}</p>
            <p class="text-[10px] text-surface-500">{{ $report['last_sync']?->finished_at?->diffForHumans() ?? 'Never' }}</p>
        </div>
        <div class="card p-4">
            <p class="text-[11px] uppercase text-surface-500">Linked / Unlinked</p>
            <p class="text-xl text-white mt-1">{{ $report['linked_components'] }} / {{ $report['unlinked_components'] }}</p>
        </div>
        <div class="card p-4">
            <p class="text-[11px] uppercase text-surface-500">Unavailable entities</p>
            <p class="text-xl text-amber-300 mt-1">{{ $report['unavailable_entities'] }}</p>
        </div>
        <div class="card p-4">
            <p class="text-[11px] uppercase text-surface-500">Broken automations</p>
            <p class="text-xl text-rose-300 mt-1">{{ $report['broken_automations'] }}</p>
        </div>
        <div class="card p-4">
            <p class="text-[11px] uppercase text-surface-500">Duplicate groups</p>
            <p class="text-xl text-white mt-1">{{ $report['duplicate_automations'] }}</p>
        </div>
    </div>

    <div class="card p-5 mt-4 space-y-2">
        <h2 class="text-sm font-semibold text-white">Recommendations</h2>
        @forelse ($report['recommendations'] as $tip)
            <p class="text-sm text-surface-300">• {{ $tip }}</p>
        @empty
            <p class="text-sm text-surface-500">Looking healthy.</p>
        @endforelse
        <div class="pt-3 flex flex-wrap gap-2">
            <a href="{{ route('ha-ai.optimizer', $project) }}" class="btn-secondary text-xs py-2 px-3">Run optimizer</a>
            <a href="{{ route('ha-ai.mapping', $project) }}" class="btn-secondary text-xs py-2 px-3">Fix mapping</a>
        </div>
    </div>
@endsection
