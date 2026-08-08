<x-app-layout>
    <x-slot name="header">
        <div class="flex flex-wrap items-center justify-between gap-4">
            <div>
                <h2 class="text-2xl font-bold text-white">Smart Components</h2>
                <p class="text-sm text-surface-400 mt-0.5 inline-flex items-center gap-1.5">
                    Devices used on floor maps · prices in
                    <x-omr class="text-surface-300" />
                    Omani Rial
                </p>
            </div>
            @can('create', App\Models\SmartComponent::class)
                <a href="{{ route('smart-components.create') }}" class="btn-primary">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                    New component
                </a>
            @endcan
        </div>
    </x-slot>

    <div class="p-4 sm:p-6 lg:p-8 space-y-6">
        @if (session('status'))
            <div class="p-4 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm">
                {{ session('status') }}
            </div>
        @endif

        <form method="GET" action="{{ route('smart-components.index') }}" class="flex flex-wrap gap-3">
            <input type="search" name="q" value="{{ request('q') }}" placeholder="Search components…" class="input-dark flex-1 min-w-[200px]">
            <button type="submit" class="btn-secondary text-xs py-2.5 px-4">Search</button>
        </form>

        <div class="card overflow-hidden">
            <div class="overflow-x-auto">
                <table class="w-full text-left">
                    <thead>
                        <tr class="border-b border-surface-800 text-[11px] uppercase tracking-wide text-surface-500">
                            <th class="px-4 py-3 font-medium">Component</th>
                            <th class="px-4 py-3 font-medium">Key</th>
                            <th class="px-4 py-3 font-medium">Mount</th>
                            <th class="px-4 py-3 font-medium">Unit</th>
                            <th class="px-4 py-3 font-medium">
                                <span class="inline-flex items-center gap-1">Buy <x-omr /></span>
                            </th>
                            <th class="px-4 py-3 font-medium">
                                <span class="inline-flex items-center gap-1">Sell <x-omr /></span>
                            </th>
                            <th class="px-4 py-3 font-medium">Status</th>
                            <th class="px-4 py-3 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-surface-800">
                        @forelse ($components as $component)
                            <tr class="hover:bg-surface-800/30 transition-colors">
                                <td class="px-4 py-3">
                                    <div class="flex items-center gap-3">
                                        <span class="w-10 h-10 rounded-xl bg-surface-800 flex items-center justify-center text-xl">{{ $component->icon }}</span>
                                        <div class="min-w-0">
                                            <p class="text-sm font-medium text-white truncate">{{ $component->name }}</p>
                                            <p class="text-[11px] text-surface-500 truncate">{{ $component->model ?: '—' }}</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-4 py-3 text-xs font-mono text-surface-400">{{ $component->key }}</td>
                                <td class="px-4 py-3 text-xs text-surface-300 capitalize">{{ $component->mount }}</td>
                                <td class="px-4 py-3 text-xs text-surface-300">
                                    {{ \App\Support\ComponentUnit::short($component->unit ?: 'piece') }}
                                    @if (($component->unit ?: 'piece') === 'meter')
                                        <span class="text-surface-500">/1m</span>
                                    @endif
                                </td>
                                <td class="px-4 py-3" colspan="2">
                                    @can('update', $component)
                                        <form method="POST" action="{{ route('smart-components.updatePrice', $component) }}" class="flex flex-wrap items-center gap-2">
                                            @csrf
                                            @method('PATCH')
                                            <input type="number" name="buy_price" min="0" step="0.001" title="Buy" value="{{ number_format((float) $component->buy_price, 3, '.', '') }}" class="w-24 rounded-lg border-surface-700 bg-surface-900 text-sm text-white font-mono">
                                            <input type="number" name="price" min="0" step="0.001" title="Sell" value="{{ number_format((float) $component->price, 3, '.', '') }}" class="w-24 rounded-lg border-surface-700 bg-surface-900 text-sm text-white font-mono">
                                            <button type="submit" class="btn-secondary text-[10px] py-1.5 px-2">Save</button>
                                        </form>
                                    @else
                                        <div class="flex items-center gap-4 font-mono text-sm">
                                            <span class="text-surface-300"><x-omr :amount="$component->buy_price" /></span>
                                            <span class="text-brand-300"><x-omr :amount="$component->price" /></span>
                                        </div>
                                    @endcan
                                </td>
                                <td class="px-4 py-3">
                                    @if ($component->is_active)
                                        <span class="text-[11px] text-emerald-400">Active</span>
                                    @else
                                        <span class="text-[11px] text-surface-500">Hidden</span>
                                    @endif
                                </td>
                                <td class="px-4 py-3 text-right">
                                    <div class="inline-flex items-center gap-2">
                                        @can('update', $component)
                                            <a href="{{ route('smart-components.edit', $component) }}" class="btn-secondary text-xs py-1.5 px-3">Edit</a>
                                        @endcan
                                        @can('delete', $component)
                                            <form method="POST" action="{{ route('smart-components.destroy', $component) }}" onsubmit="return confirm('Delete {{ $component->name }}?')">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="text-xs text-rose-400 hover:text-rose-300 px-2">Delete</button>
                                            </form>
                                        @endcan
                                    </div>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="7" class="px-4 py-12 text-center text-surface-400">
                                    No smart components yet.
                                    @can('create', App\Models\SmartComponent::class)
                                        <a href="{{ route('smart-components.create') }}" class="text-brand-400 hover:text-brand-300">Add the first one →</a>
                                    @endcan
                                </td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>

        @if ($components->hasPages())
            <div>{{ $components->links() }}</div>
        @endif
    </div>
</x-app-layout>
