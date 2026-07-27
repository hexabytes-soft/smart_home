<x-app-layout>
    <x-slot name="header">
        <div class="flex flex-wrap items-center justify-between gap-4">
            <div>
                <h2 class="text-2xl font-bold text-white">Products</h2>
                <p class="text-sm text-surface-400 mt-0.5">Catalog with buy &amp; sell prices</p>
            </div>
            @can('products.create')
                <div class="flex flex-wrap gap-2">
                    <a href="{{ route('shop.index') }}" target="_blank" class="btn-secondary">
                        View store
                    </a>
                    <a href="{{ route('products.create') }}" class="btn-primary">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                        New Product
                    </a>
                </div>
            @else
                <a href="{{ route('shop.index') }}" target="_blank" class="btn-secondary">View store</a>
            @endcan
        </div>
    </x-slot>

    <div class="p-4 sm:p-6 lg:p-8 space-y-6">
        @if (session('status'))
            <div class="p-4 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm">
                {{ session('status') }}
            </div>
        @endif

        <form method="GET" action="{{ route('products.index') }}" class="flex flex-wrap gap-3">
            <input type="search" name="q" value="{{ request('q') }}" placeholder="Search products…" class="input-dark flex-1 min-w-[200px]">
            <button type="submit" class="btn-secondary text-xs py-2.5 px-4">Search</button>
        </form>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            @forelse ($products as $product)
                <article class="card overflow-hidden group hover:border-brand-500/30 transition-all duration-300">
                    <div class="h-40 relative bg-surface-950 overflow-hidden">
                        @if ($product->primaryImageUrl())
                            <img src="{{ $product->primaryImageUrl() }}" alt="{{ $product->title }}" class="w-full h-full object-cover">
                        @else
                            <div class="absolute inset-0 flex items-center justify-center text-surface-600">
                                <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                            </div>
                        @endif
                        <div class="absolute inset-0 bg-gradient-to-t from-surface-900 via-transparent to-transparent"></div>
                        <div class="absolute bottom-4 left-4 right-4">
                            <h3 class="text-lg font-bold text-white truncate">{{ $product->title }}</h3>
                        </div>
                    </div>
                    <div class="p-5 space-y-4">
                        <p class="text-sm text-surface-400 line-clamp-2 min-h-[2.5rem]">{{ $product->description ?: 'No description' }}</p>
                        <div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                            <span class="text-surface-500">
                                Buy:
                                @if ($product->buy_price !== null)
                                    <x-omr :amount="$product->buy_price" class="text-surface-300" />
                                @else
                                    —
                                @endif
                            </span>
                            <span class="text-brand-300 font-semibold inline-flex items-center gap-1">
                                Sell:
                                @if ($product->sell_price !== null)
                                    <x-omr :amount="$product->sell_price" />
                                @else
                                    <span class="text-amber-300">Add price</span>
                                @endif
                            </span>
                        </div>
                        <div class="flex gap-2 pt-1">
                            <a href="{{ route('products.show', $product) }}" class="btn-primary flex-1 text-center text-xs py-2.5">View</a>
                            @can('update', $product)
                                <a href="{{ route('products.edit', $product) }}" class="btn-secondary flex-1 text-center text-xs py-2.5">Edit</a>
                            @endcan
                        </div>
                    </div>
                </article>
            @empty
                <div class="col-span-full card p-12 text-center">
                    <div class="w-16 h-16 rounded-2xl bg-surface-800 flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-surface-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                    </div>
                    <p class="text-surface-400 mb-2">No products yet</p>
                    @can('products.create')
                        <a href="{{ route('products.create') }}" class="text-brand-400 hover:text-brand-300">Add your first product →</a>
                    @endcan
                </div>
            @endforelse
        </div>

        @if ($products->hasPages())
            <div class="mt-2">{{ $products->links() }}</div>
        @endif
    </div>
</x-app-layout>
