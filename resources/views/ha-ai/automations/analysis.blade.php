@extends('layouts.ha-ai')

@section('title', 'AI Analysis')

@section('content')
    <div>
        <a href="{{ route('ha-ai.automations.builder', $project) }}" class="text-xs text-surface-500 hover:text-brand-300">← Back to builder</a>
        <h1 class="text-xl font-bold text-white mt-1">AI analysis</h1>
        <p class="text-sm text-surface-400 mt-1">Review similarity before generating YAML.</p>
    </div>

    <div class="card p-5 space-y-4 border-brand-500/20">
        <div class="flex flex-wrap items-start justify-between gap-3">
            <div>
                <p class="text-[11px] uppercase tracking-wide text-surface-500">Existing automation found</p>
                <h2 class="text-lg font-semibold text-white mt-1">
                    {{ $analysis['existing_automation']['alias'] ?? $analysis['existing_automation']['entity_id'] ?? 'Similar automation' }}
                </h2>
                @if (! empty($analysis['existing_automation']['entity_id']))
                    <p class="font-mono text-[11px] text-brand-300 mt-1">{{ $analysis['existing_automation']['entity_id'] }}</p>
                @endif
                @if (! empty($analysis['existing_automation']['ha_automation_id']))
                    <p class="text-[11px] text-surface-500 mt-0.5">ID: <span class="font-mono">{{ $analysis['existing_automation']['ha_automation_id'] }}</span></p>
                @endif
            </div>
            <div class="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-center min-w-[110px]">
                <p class="text-[10px] uppercase text-amber-200/80">Similarity</p>
                <p class="text-2xl font-bold text-amber-200">{{ $analysis['similarity_percent'] }}%</p>
            </div>
        </div>

        <div class="rounded-xl bg-surface-950/60 border border-surface-800 p-4">
            <p class="text-[11px] uppercase tracking-wide text-surface-500 mb-1">Recommendation</p>
            <p class="text-sm text-white font-medium capitalize">
                @if ($analysis['recommendation'] === 'modify')
                    Modify the existing automation instead of creating a duplicate.
                @elseif ($analysis['recommendation'] === 'reuse')
                    Reuse the existing automation — it already matches this request.
                @else
                    Create a completely new automation.
                @endif
            </p>
            <p class="text-sm text-surface-300 mt-3 whitespace-pre-wrap">{{ $analysis['analysis_summary'] }}</p>
            @if (! empty($analysis['rationale']) && $analysis['rationale'] !== $analysis['analysis_summary'])
                <p class="text-xs text-surface-500 mt-3 whitespace-pre-wrap">{{ $analysis['rationale'] }}</p>
            @endif
        </div>

        <div class="rounded-xl border border-surface-800 p-4">
            <p class="text-[11px] uppercase tracking-wide text-surface-500 mb-1">Your request</p>
            <p class="text-sm text-surface-300 whitespace-pre-wrap">{{ $prompt }}</p>
        </div>

        <form method="POST" action="{{ route('ha-ai.automations.decide', $project) }}" class="flex flex-wrap gap-2 pt-2" x-data="{ loading: null }" @submit="loading = $event.submitter?.value">
            @csrf
            <button
                type="submit"
                name="action"
                value="modify"
                class="btn-primary text-xs py-2.5 px-4"
                :disabled="loading !== null"
            >
                <span x-show="loading !== 'modify'">Modify Existing</span>
                <span x-cloak x-show="loading === 'modify'">Updating…</span>
            </button>
            <button
                type="submit"
                name="action"
                value="create_new"
                class="btn-secondary text-xs py-2.5 px-4"
                :disabled="loading !== null"
            >
                <span x-show="loading !== 'create_new'">Create New Anyway</span>
                <span x-cloak x-show="loading === 'create_new'">Generating…</span>
            </button>
            @if (($analysis['recommendation'] ?? '') === 'reuse' || ($analysis['similarity_percent'] ?? 0) >= 90)
                <button
                    type="submit"
                    name="action"
                    value="reuse"
                    class="btn-secondary text-xs py-2.5 px-4"
                    :disabled="loading !== null"
                >
                    <span x-show="loading !== 'reuse'">Reuse Existing</span>
                    <span x-cloak x-show="loading === 'reuse'">Loading…</span>
                </button>
            @endif
        </form>
    </div>
@endsection
