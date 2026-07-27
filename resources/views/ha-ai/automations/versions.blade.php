@extends('layouts.ha-ai')

@section('title', 'Versions')

@section('content')
    <a href="{{ route('ha-ai.automations.show', [$project, $automation]) }}" class="text-xs text-surface-500 hover:text-brand-300">← Automation</a>
    <h1 class="text-xl font-bold text-white mt-2">Version history</h1>

    <form method="GET" action="{{ route('ha-ai.automations.versions.compare', [$project, $automation]) }}" class="card p-4 mt-4 flex flex-wrap gap-2 items-end">
        <div>
            <label class="text-[10px] text-surface-500">Left</label>
            <select name="left" class="input-dark text-sm" required>
                @foreach ($versions as $v)
                    <option value="{{ $v->id }}">v{{ $v->version_number }} · {{ $v->created_at?->format('Y-m-d H:i') }}</option>
                @endforeach
            </select>
        </div>
        <div>
            <label class="text-[10px] text-surface-500">Right</label>
            <select name="right" class="input-dark text-sm" required>
                @foreach ($versions as $v)
                    <option value="{{ $v->id }}">v{{ $v->version_number }} · {{ $v->created_at?->format('Y-m-d H:i') }}</option>
                @endforeach
            </select>
        </div>
        <button class="btn-secondary text-xs py-2 px-3">Compare</button>
    </form>

    <div class="card mt-4 divide-y divide-surface-800">
        @forelse ($versions as $version)
            <div class="px-4 py-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                    <p class="text-sm text-white">v{{ $version->version_number }} · {{ $version->name }}</p>
                    <p class="text-[11px] text-surface-500">{{ $version->change_summary }} · {{ $version->created_at?->diffForHumans() }}</p>
                </div>
                <form method="POST" action="{{ route('ha-ai.automations.versions.restore', [$project, $automation, $version]) }}" onsubmit="return confirm('Restore this version?')">
                    @csrf
                    <button class="text-xs text-brand-300">Restore</button>
                </form>
            </div>
        @empty
            <p class="px-4 py-8 text-sm text-surface-500 text-center">No versions yet. Generate or regenerate to create snapshots.</p>
        @endforelse
    </div>
@endsection
