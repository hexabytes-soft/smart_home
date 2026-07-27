@extends('layouts.ha-ai')

@section('title', 'Smart Logs')

@section('content')
    <h1 class="text-xl font-bold text-white">Smart logs</h1>
    <p class="text-sm text-surface-400 mt-1">Home Assistant error log + AI analysis for this project.</p>

    @if ($error)
        <div class="card p-4 mt-4 text-sm text-rose-200 border-rose-500/30 bg-rose-500/10">{{ $error }}</div>
    @endif

    @if (session('log_answer'))
        <div class="card p-5 mt-4 text-sm text-surface-200 whitespace-pre-wrap">{{ session('log_answer') }}</div>
    @endif

    <form method="POST" action="{{ route('ha-ai.logs.ask', $project) }}" class="card p-4 mt-4 space-y-3" x-data="{ loading:false }" @submit="loading=true">
        @csrf
        <textarea name="question" rows="3" required class="input-dark w-full text-sm" placeholder="Why did this fail? Explain this error. Suggest a fix…">{{ old('question') }}</textarea>
        <button class="btn-primary text-xs py-2 px-3" :disabled="loading">
            <span x-show="!loading">Ask AI</span>
            <span x-cloak x-show="loading">Analyzing…</span>
        </button>
    </form>

    <div class="card mt-4 overflow-hidden">
        <div class="px-4 py-3 border-b border-surface-800 text-xs text-surface-500">Recent log lines</div>
        <pre class="p-4 text-[11px] text-surface-400 overflow-auto max-h-[50vh] font-mono">@foreach($entries as $entry){{ $entry['line'] }}
@endforeach</pre>
    </div>
@endsection
