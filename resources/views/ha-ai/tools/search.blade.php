@extends('layouts.ha-ai')

@section('title', 'Search')

@section('content')
    <h1 class="text-xl font-bold text-white">Search everywhere</h1>
    <form method="GET" class="mt-4 flex gap-2" x-data>
        <input type="search" name="q" value="{{ $q }}" autofocus placeholder="Automations, scripts, scenes, helpers, entities, components…" class="input-dark flex-1 text-sm" @input.debounce.300ms="$el.form.requestSubmit()">
        <button class="btn-secondary text-xs py-2 px-3">Search</button>
    </form>

    @if ($q !== '')
        <div class="mt-5 space-y-5">
            @foreach ($results as $group => $items)
                <section>
                    <h2 class="text-xs uppercase tracking-wide text-surface-500 mb-2">{{ $group }} ({{ count($items) }})</h2>
                    <div class="card divide-y divide-surface-800">
                        @forelse ($items as $item)
                            <a href="{{ $item['url'] }}" class="block px-4 py-3 hover:bg-surface-900/50">
                                <p class="text-sm text-white">{{ $item['title'] }}</p>
                                <p class="text-[11px] text-surface-500 font-mono">{{ $item['subtitle'] }}</p>
                            </a>
                        @empty
                            <p class="px-4 py-3 text-sm text-surface-500">No matches</p>
                        @endforelse
                    </div>
                </section>
            @endforeach
        </div>
    @endif

    <div class="card p-5 mt-6 space-y-3">
        <h2 class="text-sm font-semibold text-white">Backup</h2>
        <div class="flex flex-wrap gap-2">
            <a href="{{ route('ha-ai.backup.export', $project) }}" class="btn-secondary text-xs py-2 px-3">Export ZIP</a>
        </div>
        <form method="POST" action="{{ route('ha-ai.backup.import', $project) }}" enctype="multipart/form-data" class="flex flex-wrap gap-2 items-center">
            @csrf
            <input type="file" name="backup" accept=".zip" required class="text-xs text-surface-400">
            <button class="btn-primary text-xs py-2 px-3">Import ZIP</button>
        </form>
    </div>
@endsection
