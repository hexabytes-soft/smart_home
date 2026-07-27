@extends('layouts.ha-ai')

@section('title', 'Optimizer')

@section('content')
    <h1 class="text-xl font-bold text-white">Project optimizer</h1>
    <p class="text-sm text-surface-400 mt-1">Duplicates, conflicts, unused items, broken references.</p>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
        <div class="card p-4 space-y-2 text-sm">
            <h2 class="font-semibold text-white">Findings</h2>
            <pre class="text-[11px] text-surface-400 overflow-auto max-h-96">{{ json_encode($result['findings'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) }}</pre>
        </div>
        <div class="card p-4 space-y-2 text-sm">
            <h2 class="font-semibold text-white">AI report</h2>
            <div class="text-surface-300 whitespace-pre-wrap leading-relaxed">{{ $result['ai_report'] }}</div>
        </div>
    </div>
@endsection
