@extends('layouts.ha-ai')

@section('title', 'AI Chat')

@section('content')
    <div class="flex flex-wrap items-end justify-between gap-3">
        <div>
            <h1 class="text-xl font-bold text-white">Project AI chat</h1>
            <p class="text-sm text-surface-400 mt-1">Answers use this project’s knowledge, entities, automations, and sync data only.</p>
        </div>
    </div>

    <div class="card overflow-hidden flex flex-col min-h-[60vh]">
        <div class="flex-1 overflow-y-auto p-4 space-y-3 max-h-[55vh] studio-scroll">
            @forelse ($messages as $message)
                <div @class([
                    'max-w-3xl rounded-xl px-3 py-2 text-sm whitespace-pre-wrap',
                    'ml-auto bg-brand-500/15 border border-brand-500/25 text-brand-50' => $message->role === 'user',
                    'mr-auto bg-surface-900 border border-surface-800 text-surface-200' => $message->role !== 'user',
                ])>
                    <p class="text-[10px] uppercase tracking-wide mb-1 opacity-60">{{ $message->role }}</p>
                    {{ $message->content }}
                </div>
            @empty
                <p class="text-sm text-surface-500 text-center py-10">Ask about automations, devices, duplicates, kitchen logic, optimization…</p>
            @endforelse
        </div>
        <form method="POST" action="{{ route('ha-ai.chat.store', $project) }}" class="border-t border-surface-800 p-4 flex gap-2" x-data="{ loading: false }" @submit="loading=true">
            @csrf
            <textarea name="message" rows="2" required class="input-dark flex-1 text-sm" placeholder="Ask about this project…">{{ old('message') }}</textarea>
            <button class="btn-primary self-end text-xs py-2 px-4" :disabled="loading">
                <span x-show="!loading">Send</span>
                <span x-cloak x-show="loading">…</span>
            </button>
        </form>
    </div>
@endsection
