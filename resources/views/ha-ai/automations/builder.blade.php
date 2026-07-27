@extends('layouts.ha-ai')

@section('title', 'Builder')

@section('content')
    <div>
        <h1 class="text-xl font-bold text-white">Automation builder</h1>
        <p class="text-sm text-surface-400 mt-1">Gemini first checks existing HA automations, then generates YAML only after you confirm.</p>
    </div>

    @if (! count($linked))
        <div class="card p-6 text-sm text-amber-200 border-amber-500/30 bg-amber-500/10">
            No linked components. <a href="{{ route('ha-ai.mapping', $project) }}" class="underline text-amber-100">Map devices first</a>.
        </div>
    @else
        <form
            method="POST"
            action="{{ route('ha-ai.automations.analyze', $project) }}"
            class="space-y-5"
            x-data="{ loading: false, selected: [] }"
            @submit="loading = true"
        >
            @csrf
            <section class="card p-4 space-y-3">
                <h2 class="text-sm font-semibold text-white">Linked smart components</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                    @foreach ($linked as $device)
                        <label class="flex items-start gap-3 rounded-xl border border-surface-800 bg-surface-950/40 p-3 cursor-pointer hover:border-brand-500/40">
                            <input
                                type="checkbox"
                                name="map_device_ids[]"
                                value="{{ $device['map_device_id'] }}"
                                class="mt-1 rounded border-surface-600 bg-surface-800 text-brand-500"
                                @checked(collect(old('map_device_ids', []))->contains($device['map_device_id']))
                                @change="selected = Array.from(document.querySelectorAll('[name=\'map_device_ids[]\']:checked')).map(i => i.value)"
                            >
                            <span class="min-w-0">
                                <span class="block text-sm text-white">{{ $device['icon'] }} {{ $device['label'] }}</span>
                                <span class="block text-[11px] font-mono text-brand-300">{{ $device['mapping']->entity_id }}</span>
                                <span class="block text-[11px] text-surface-500">{{ $device['room_name'] ?: 'No room' }}</span>
                            </span>
                        </label>
                    @endforeach
                </div>
            </section>

            <section class="card p-4 space-y-3">
                <label for="prompt" class="text-sm font-semibold text-white">Automation request</label>
                <textarea
                    id="prompt"
                    name="prompt"
                    rows="8"
                    required
                    minlength="10"
                    class="input-dark w-full font-sans text-sm leading-relaxed"
                    placeholder="Describe your automation in natural language.&#10;&#10;Example:&#10;When motion is detected in the living room after sunset, turn on the main light for five minutes."
                >{{ old('prompt') }}</textarea>
            </section>

            <button type="submit" class="btn-primary" :disabled="loading || selected.length === 0">
                <span x-show="!loading">Analyze with Gemini</span>
                <span x-cloak x-show="loading">Analyzing existing automations…</span>
            </button>
        </form>
    @endif
@endsection
