@extends('layouts.ha-ai')

@section('title', 'Simulate')

@section('content')
    <a href="{{ route('ha-ai.automations.show', [$project, $automation]) }}" class="text-xs text-surface-500 hover:text-brand-300">← Automation</a>
    <h1 class="text-xl font-bold text-white mt-2">Automation simulator</h1>
    <p class="text-sm text-surface-400 mt-1">Dry-run against current synced entity states (no upload).</p>

    <div class="mt-4 inline-flex px-3 py-1.5 rounded-lg text-xs font-semibold
        {{ $simulation['overall'] === 'passed' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-rose-500/15 text-rose-300' }}">
        Overall: {{ strtoupper($simulation['overall']) }}
    </div>

    <div class="mt-5 space-y-3">
        @foreach ($simulation['steps'] as $step)
            <div class="card p-4 flex gap-3">
                <div class="text-lg leading-none {{ $step['status'] === 'passed' ? 'text-emerald-400' : 'text-rose-400' }}">
                    {{ $step['status'] === 'passed' ? '✔' : '✖' }}
                </div>
                <div>
                    <p class="text-sm font-semibold text-white">{{ ucfirst($step['stage']) }} · {{ $step['label'] }}</p>
                    <p class="text-xs text-surface-400 mt-1 break-all">{{ $step['detail'] }}</p>
                </div>
            </div>
            @if (! $loop->last)
                <div class="text-center text-surface-600 text-xs">↓</div>
            @endif
        @endforeach
    </div>
@endsection
