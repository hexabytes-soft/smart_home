@extends('layouts.ha-ai')

@section('title', 'Compare versions')

@section('content')
    <a href="{{ route('ha-ai.automations.versions', [$project, $automation]) }}" class="text-xs text-surface-500 hover:text-brand-300">← Versions</a>
    <h1 class="text-xl font-bold text-white mt-2">Compare v{{ $diff['left_version'] }} ↔ v{{ $diff['right_version'] }}</h1>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <div class="card overflow-hidden">
            <div class="px-3 py-2 border-b border-surface-800 text-xs text-surface-500">v{{ $diff['left_version'] }}</div>
            <pre class="p-3 text-[11px] font-mono text-surface-300 overflow-auto max-h-[70vh]">{{ $diff['left'] }}</pre>
        </div>
        <div class="card overflow-hidden">
            <div class="px-3 py-2 border-b border-surface-800 text-xs text-surface-500">v{{ $diff['right_version'] }}</div>
            <pre class="p-3 text-[11px] font-mono text-surface-300 overflow-auto max-h-[70vh]">{{ $diff['right'] }}</pre>
        </div>
    </div>
@endsection
