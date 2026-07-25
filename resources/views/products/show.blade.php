<x-app-layout>
    <x-slot name="header">
        <div class="flex flex-wrap items-center justify-between gap-4">
            <div>
                <h2 class="text-2xl font-bold text-white truncate">{{ $product->title }}</h2>
                <p class="text-sm text-surface-400 mt-0.5">Product details</p>
            </div>
            <div class="flex flex-wrap gap-2">
                @can('update', $product)
                    <a href="{{ route('products.edit', $product) }}" class="btn-secondary text-xs py-2 px-4">Edit</a>
                @endcan
                <a href="{{ route('products.index') }}" class="btn-secondary text-xs py-2 px-4">Back</a>
            </div>
        </div>
    </x-slot>

    <div class="p-4 sm:p-6 lg:p-8">
        @if (session('status'))
            <div class="mb-6 p-4 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm">
                {{ session('status') }}
            </div>
        @endif

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="lg:col-span-2 card p-6 space-y-5">
                <div>
                    <p class="text-[11px] uppercase tracking-wide text-surface-500 mb-1">Title</p>
                    <p class="text-lg font-semibold text-white">{{ $product->title }}</p>
                </div>
                <div>
                    <p class="text-[11px] uppercase tracking-wide text-surface-500 mb-1">Description</p>
                    <p class="text-sm text-surface-300 whitespace-pre-wrap">{{ $product->description ?: '—' }}</p>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="rounded-xl border border-surface-700 bg-surface-800/40 p-4">
                        <p class="text-[11px] uppercase tracking-wide text-surface-500 mb-1">Buy price</p>
                        <p class="text-xl font-semibold text-white">{{ $product->buy_price !== null ? number_format((float) $product->buy_price, 2) : '—' }}</p>
                    </div>
                    <div class="rounded-xl border border-surface-700 bg-surface-800/40 p-4">
                        <p class="text-[11px] uppercase tracking-wide text-surface-500 mb-1">Sell price</p>
                        <p class="text-xl font-semibold text-emerald-300">{{ $product->sell_price !== null ? number_format((float) $product->sell_price, 2) : '—' }}</p>
                    </div>
                </div>
            </div>

            <div class="card p-6 space-y-4">
                <p class="text-sm font-semibold text-white">Images</p>
                @php $urls = $product->imageUrls(); @endphp
                @if (count($urls))
                    <div class="grid grid-cols-2 gap-3">
                        @foreach ($urls as $url)
                            <a href="{{ $url }}" target="_blank" class="block aspect-square rounded-xl overflow-hidden border border-surface-700 bg-surface-950">
                                <img src="{{ $url }}" alt="" class="w-full h-full object-cover">
                            </a>
                        @endforeach
                    </div>
                @else
                    <p class="text-sm text-surface-500">No images</p>
                @endif

                @can('delete', $product)
                    <form method="POST" action="{{ route('products.destroy', $product) }}" class="pt-4 border-t border-surface-800" onsubmit="return confirm('Delete this product?')">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="text-sm text-rose-400 hover:text-rose-300">Delete product</button>
                    </form>
                @endcan
            </div>
        </div>
    </div>
</x-app-layout>
