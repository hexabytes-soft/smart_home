@extends('layouts.ha-ai')

@section('title', 'Devices')

@section('content')
    <div class="flex flex-wrap items-end justify-between gap-4">
        <div>
            <h1 class="text-xl font-bold text-white">Home Assistant devices</h1>
            <p class="text-sm text-surface-400 mt-1">Grouped by area · {{ $entities->count() }} shown</p>
        </div>
        <form method="GET" action="{{ route('ha-ai.devices', $project) }}" class="flex gap-2">
            <input type="search" name="q" value="{{ $q }}" placeholder="Search entities…" class="input-dark text-sm min-w-[220px]">
            <button class="btn-secondary text-xs py-2 px-3">Search</button>
        </form>
    </div>

    <div class="space-y-3" x-data="{ open: {} }">
        @forelse ($grouped as $areaName => $areaEntities)
            <div class="card overflow-hidden">
                <button
                    type="button"
                    class="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-surface-900/50"
                    @click="open['{{ md5($areaName) }}'] = !open['{{ md5($areaName) }}']"
                >
                    <span class="font-semibold text-white">{{ $areaName }}</span>
                    <span class="text-xs text-surface-500">{{ $areaEntities->count() }} · <span x-text="open['{{ md5($areaName) }}'] ? 'Hide' : 'Show'"></span></span>
                </button>
                <div class="border-t border-surface-800 divide-y divide-surface-800/80" x-show="open['{{ md5($areaName) }}'] !== false" x-cloak>
                    @foreach ($areaEntities as $entity)
                        <div class="px-4 py-3 grid grid-cols-1 lg:grid-cols-12 gap-2 text-sm">
                            <div class="lg:col-span-4">
                                <p class="text-white font-medium">{{ $entity->friendly_name ?: $entity->entity_id }}</p>
                                <p class="font-mono text-[11px] text-brand-300/90">{{ $entity->entity_id }}</p>
                            </div>
                            <div class="lg:col-span-2 text-surface-400">
                                <span class="text-[10px] uppercase text-surface-500">Domain</span>
                                <p>{{ $entity->domain }}</p>
                            </div>
                            <div class="lg:col-span-2">
                                <span class="text-[10px] uppercase text-surface-500">State</span>
                                <p class="font-mono text-emerald-300">{{ $entity->state }}</p>
                            </div>
                            <div class="lg:col-span-4">
                                <span class="text-[10px] uppercase text-surface-500">Attributes</span>
                                <pre class="text-[10px] text-surface-400 overflow-auto max-h-20 mt-0.5">{{ json_encode($entity->attributes ?? [], JSON_UNESCAPED_SLASHES) }}</pre>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        @empty
            <div class="card p-10 text-center text-surface-400">
                No entities yet. Run <strong class="text-surface-200">Sync Home Assistant</strong> first.
            </div>
        @endforelse
    </div>
@endsection
