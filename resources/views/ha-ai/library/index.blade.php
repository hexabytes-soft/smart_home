@extends('layouts.ha-ai')

@section('title', 'Library')

@section('content')
    <div class="flex flex-wrap gap-2 mb-4">
        @foreach (['automations' => 'Automations', 'scripts' => 'Scripts', 'scenes' => 'Scenes'] as $key => $label)
            <a href="{{ route('ha-ai.library', [$project, $key]) }}" @class(['btn-secondary text-xs py-1.5 px-3', '!border-brand-500/50 text-brand-300' => $type === $key])>{{ $label }}</a>
        @endforeach
    </div>

    <div class="card overflow-hidden">
        <table class="w-full text-sm text-left">
            <thead>
                <tr class="text-[10px] uppercase text-surface-500 border-b border-surface-800">
                    <th class="px-4 py-3">Name</th>
                    <th class="px-4 py-3">Entity</th>
                    <th class="px-4 py-3">State</th>
                    <th class="px-4 py-3 text-right">Actions</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-surface-800">
                @foreach ($items as $item)
                    @php
                        $entityId = $item->entity_id;
                        $name = $item->friendly_name ?: $entityId;
                        $explainType = $type === 'automations' ? 'automation' : rtrim($type, 's');
                    @endphp
                    <tr>
                        <td class="px-4 py-3 text-white">{{ $name }}</td>
                        <td class="px-4 py-3 font-mono text-[11px] text-brand-300">{{ $entityId }}</td>
                        <td class="px-4 py-3 font-mono text-xs text-emerald-300">{{ $item->state }}</td>
                        <td class="px-4 py-3 text-right">
                            <form method="POST" action="{{ route('ha-ai.explain', $project) }}" class="inline">
                                @csrf
                                <input type="hidden" name="type" value="{{ $explainType }}">
                                <input type="hidden" name="key" value="{{ $entityId }}">
                                <button class="text-xs text-brand-300 hover:text-brand-200">Explain</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
    <div class="mt-4">{{ $items->links() }}</div>
@endsection
