@extends('layouts.ha-ai')

@section('title', 'History')

@section('content')
    <div class="flex flex-wrap items-end justify-between gap-4">
        <div>
            <h1 class="text-xl font-bold text-white">Automation history</h1>
            <p class="text-sm text-surface-400 mt-1">Generated, uploaded, failed, and draft automations for this project.</p>
        </div>
        <a href="{{ route('ha-ai.automations.builder', $project) }}" class="btn-primary text-xs py-2 px-3">New automation</a>
    </div>

    <form method="GET" class="flex flex-wrap gap-2">
        <input type="search" name="q" value="{{ $q }}" placeholder="Search…" class="input-dark text-sm min-w-[200px]">
        <select name="status" class="input-dark text-sm">
            <option value="">All statuses</option>
            @foreach (['generated', 'uploaded', 'failed', 'draft'] as $s)
                <option value="{{ $s }}" @selected($status === $s)>{{ ucfirst($s) }}</option>
            @endforeach
        </select>
        <button class="btn-secondary text-xs py-2 px-3">Search</button>
    </form>

    <div class="card overflow-hidden">
        <div class="overflow-x-auto">
            <table class="w-full text-left text-sm">
                <thead>
                    <tr class="text-[10px] uppercase tracking-wide text-surface-500 border-b border-surface-800 bg-surface-950/60">
                        <th class="px-4 py-3 font-medium">Name</th>
                        <th class="px-4 py-3 font-medium">Status</th>
                        <th class="px-4 py-3 font-medium">Updated</th>
                        <th class="px-4 py-3 font-medium text-right">Actions</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-surface-800">
                    @forelse ($automations as $automation)
                        <tr class="hover:bg-surface-900/40">
                            <td class="px-4 py-3">
                                <p class="text-white font-medium">{{ $automation->name ?: 'Untitled' }}</p>
                                <p class="text-[11px] text-surface-500 line-clamp-1">{{ \Illuminate\Support\Str::limit($automation->prompt, 80) }}</p>
                            </td>
                            <td class="px-4 py-3">
                                <span @class([
                                    'inline-flex px-2 py-0.5 rounded-lg text-[11px] font-semibold capitalize',
                                    'bg-emerald-500/15 text-emerald-300' => $automation->status === 'uploaded',
                                    'bg-brand-500/15 text-brand-300' => $automation->status === 'generated',
                                    'bg-rose-500/15 text-rose-300' => $automation->status === 'failed',
                                    'bg-surface-800 text-surface-300' => $automation->status === 'draft',
                                ])>{{ $automation->status }}</span>
                            </td>
                            <td class="px-4 py-3 text-surface-400 text-xs">{{ $automation->updated_at?->diffForHumans() }}</td>
                            <td class="px-4 py-3 text-right space-x-2">
                                <a href="{{ route('ha-ai.automations.show', [$project, $automation]) }}" class="text-brand-300 hover:text-brand-200 text-xs">Open</a>
                                <form method="POST" action="{{ route('ha-ai.automations.clone', [$project, $automation]) }}" class="inline">@csrf<button class="text-xs text-surface-400 hover:text-white">Clone</button></form>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="4" class="px-4 py-10 text-center text-surface-400">No automations yet.</td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>

    @if ($automations->hasPages())
        <div>{{ $automations->links() }}</div>
    @endif
@endsection
