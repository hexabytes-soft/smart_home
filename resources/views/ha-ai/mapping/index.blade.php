@extends('layouts.ha-ai')

@section('title', 'Mapping')

@section('content')
    <div class="flex flex-wrap items-end justify-between gap-4">
        <div>
            <h1 class="text-xl font-bold text-white">Component mapping</h1>
            <p class="text-sm text-surface-400 mt-1">Link each placed map device to one Home Assistant entity.</p>
        </div>
        <form method="GET" class="flex gap-2">
            <input type="search" name="q" value="{{ $q }}" placeholder="Filter entities…" class="input-dark text-sm min-w-[200px]">
            <button class="btn-secondary text-xs py-2 px-3">Filter</button>
        </form>
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <section class="space-y-3">
            <h2 class="text-sm font-semibold text-amber-300">Unlinked components ({{ count($unlinked) }})</h2>
            @forelse ($unlinked as $device)
                <div class="card p-4 space-y-3" x-data="{ entityId: '' }">
                    <div class="flex items-start gap-3">
                        <span class="text-2xl">{{ $device['icon'] }}</span>
                        <div class="min-w-0">
                            <p class="font-medium text-white">{{ $device['label'] }}</p>
                            <p class="text-[11px] text-surface-500 font-mono">{{ $device['map_device_id'] }} · {{ $device['component_key'] }}</p>
                            <p class="text-xs text-surface-400 mt-1">
                                {{ $device['room_name'] ?: 'No room' }} · {{ $device['floor_name'] }}
                            </p>
                        </div>
                    </div>
                    <form method="POST" action="{{ route('ha-ai.mappings.store', $project) }}" class="flex flex-wrap gap-2 items-end">
                        @csrf
                        <input type="hidden" name="map_device_id" value="{{ $device['map_device_id'] }}">
                        <div class="flex-1 min-w-[180px]">
                            <label class="block text-[10px] text-surface-500 mb-1">Entity</label>
                            <select name="entity_id" x-model="entityId" required class="input-dark w-full text-sm font-mono">
                                <option value="">Select entity…</option>
                                @foreach ($entities as $entity)
                                    <option value="{{ $entity->entity_id }}">
                                        {{ $entity->friendly_name ?: $entity->entity_id }} ({{ $entity->entity_id }})
                                    </option>
                                @endforeach
                            </select>
                        </div>
                        <button type="submit" class="btn-primary text-xs py-2 px-3" :disabled="!entityId">Link</button>
                    </form>
                </div>
            @empty
                <div class="card p-6 text-sm text-surface-400">All placed components are linked.</div>
            @endforelse
        </section>

        <section class="space-y-3">
            <h2 class="text-sm font-semibold text-emerald-300">Linked components ({{ count($linked) }})</h2>
            @forelse ($linked as $device)
                <div class="card p-4 flex flex-wrap items-start justify-between gap-3">
                    <div class="flex items-start gap-3 min-w-0">
                        <span class="text-2xl">{{ $device['icon'] }}</span>
                        <div class="min-w-0">
                            <p class="font-medium text-white">{{ $device['label'] }}</p>
                            <p class="text-xs text-surface-400">{{ $device['room_name'] ?: 'No room' }} · {{ $device['floor_name'] }}</p>
                            <p class="font-mono text-[11px] text-brand-300 mt-1">{{ $device['mapping']->entity_id }}</p>
                            @if ($device['entity'])
                                <p class="text-[11px] text-surface-500 mt-0.5">
                                    State: <span class="text-emerald-300 font-mono">{{ $device['entity']->state }}</span>
                                </p>
                            @endif
                        </div>
                    </div>
                    <form method="POST" action="{{ route('ha-ai.mappings.destroy', [$project, $device['mapping']]) }}" onsubmit="return confirm('Unlink this component?')">
                        @csrf
                        @method('DELETE')
                        <button class="text-xs text-rose-400 hover:text-rose-300">Unlink</button>
                    </form>
                </div>
            @empty
                <div class="card p-6 text-sm text-surface-400">No linked components yet.</div>
            @endforelse
        </section>
    </div>
@endsection
