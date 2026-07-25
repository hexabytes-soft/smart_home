@extends('layouts.storefront')

@section('title', 'Store')
@section('meta_description', 'Explore the Smart Home product collection — curated pieces for modern living.')

@section('content')
    @php
        $heroImage = asset('images/storefront/hero-smart-home.jpg');
    @endphp

    <section class="sf-hero" aria-label="Smart Home store">
        <div
            class="sf-hero-media has-photo"
            style="background-image: linear-gradient(0deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.35) 48%, rgba(0,0,0,0.45) 100%), url('{{ $heroImage }}');"
            aria-hidden="true"
        ></div>

        <div class="sf-hero-inner">
            <p class="sf-hero-kicker">Product store</p>
            <h1 class="sf-hero-brand">Smart Home</h1>
            <p class="sf-hero-line">A focused collection for modern spaces — clear pricing, strong visuals, no clutter.</p>
            <div class="sf-hero-actions">
                <a href="#collection" class="sf-btn sf-btn-primary">Shop collection</a>
                @auth
                    <a href="{{ route('products.index') }}" class="sf-btn sf-btn-ghost">Manage products</a>
                @endauth
            </div>
        </div>
    </section>

    <section id="collection" class="sf-section">
        <div class="sf-section-head">
            <div>
                <h2 class="sf-section-title">Collection</h2>
                <p class="sf-section-sub">
                    @if ($query !== '')
                        Results for “{{ $query }}”
                    @else
                        {{ $products->total() }} {{ Str::plural('item', $products->total()) }}
                    @endif
                </p>
            </div>

            <form method="GET" action="{{ route('shop.index') }}" class="sf-search" role="search">
                <input type="search" name="q" value="{{ $query }}" placeholder="Search…" aria-label="Search products">
                <button type="submit">Go</button>
            </form>
        </div>

        @if ($products->count())
            <div class="sf-grid">
                @foreach ($products as $product)
                    <a href="{{ route('shop.show', $product) }}" class="sf-product">
                        <div class="sf-product-media">
                            @if ($product->primaryImageUrl())
                                <img src="{{ $product->primaryImageUrl() }}" alt="{{ $product->title }}" loading="lazy">
                            @else
                                <div class="sf-placeholder">
                                    <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"/></svg>
                                </div>
                            @endif
                        </div>
                        <div class="sf-product-body">
                            <h3 class="sf-product-title">{{ $product->title }}</h3>
                            <p class="{{ $product->sell_price !== null ? 'sf-price' : 'sf-price-muted' }}">
                                @if ($product->sell_price !== null)
                                    {{ number_format((float) $product->sell_price, 2) }}
                                @else
                                    On request
                                @endif
                            </p>
                        </div>
                    </a>
                @endforeach
            </div>

            @if ($products->hasPages())
                <div class="sf-pagination">
                    {{ $products->links() }}
                </div>
            @endif
        @else
            <div class="sf-empty">
                <p class="sf-display text-4xl mb-2">No items</p>
                <p class="text-sm text-[var(--sf-muted)] mb-5">
                    @if ($query !== '')
                        Nothing matched that search.
                    @else
                        Products will appear here once added.
                    @endif
                </p>
                @if ($query !== '')
                    <a href="{{ route('shop.index') }}" class="sf-btn sf-btn-dark">Clear search</a>
                @endif
            </div>
        @endif
    </section>
@endsection
