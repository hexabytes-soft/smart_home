@extends('layouts.storefront')

@section('title', $product->title)
@section('meta_description', \Illuminate\Support\Str::limit(strip_tags((string) $product->description) ?: $product->title, 155))

@section('content')
    @php
        $images = $product->imageUrls();
        $hasImages = count($images) > 0;
        $cardProduct = [
            'id' => $product->id,
            'title' => $product->title,
            'price' => $product->sell_price !== null ? (float) $product->sell_price : null,
            'image' => $product->primaryImageUrl(),
        ];
    @endphp

    <div class="sf-detail"
         x-data="{
            active: 0,
            images: {{ Js::from($images) }},
            product: {{ Js::from($cardProduct) }},
            get current() { return this.images[this.active] || null },
            next() { if (!this.images.length) return; this.active = (this.active + 1) % this.images.length },
            prev() { if (!this.images.length) return; this.active = (this.active - 1 + this.images.length) % this.images.length },
            addToCart() { $store.cart.add(this.product) },
            buyNow() { $store.cart.buyNow(this.product) }
         }"
         @keydown.right.window="next()"
         @keydown.left.window="prev()">
        <nav class="sf-crumb" aria-label="Breadcrumb">
            <a href="{{ route('shop.index') }}">Store</a>
            <span aria-hidden="true">/</span>
            <span class="text-[var(--sf-ink)]">{{ $product->title }}</span>
        </nav>

        <div class="sf-detail-grid">
            <div>
                <div class="sf-gallery-main">
                    @if ($hasImages)
                        <img :src="current" src="{{ $images[0] }}" alt="{{ $product->title }}">
                    @else
                        <div class="sf-placeholder absolute inset-0">
                            <svg class="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"/></svg>
                        </div>
                    @endif
                </div>

                @if (count($images) > 1)
                    <div class="sf-thumbs" role="list">
                        @foreach ($images as $i => $url)
                            <button
                                type="button"
                                class="sf-thumb"
                                :class="{ 'is-active': active === {{ $i }} }"
                                @click="active = {{ $i }}"
                                aria-label="View image {{ $i + 1 }}"
                            >
                                <img src="{{ $url }}" alt="">
                            </button>
                        @endforeach
                    </div>
                @endif
            </div>

            <div class="sf-detail-panel">
                <p class="sf-hero-kicker" style="color: var(--sf-accent);">Product</p>
                <h1 class="sf-detail-title">{{ $product->title }}</h1>

                <p class="sf-detail-price {{ $product->sell_price === null ? 'sf-price-muted' : '' }}">
                    @if ($product->sell_price !== null)
                        <x-omr :amount="$product->sell_price" :decimals="2" />
                    @else
                        Price on request
                    @endif
                </p>

                @if ($product->description)
                    <div class="sf-detail-desc">{{ $product->description }}</div>
                @else
                    <p class="sf-detail-desc">No description provided.</p>
                @endif

                <div class="sf-meta-row">
                    <span class="sf-chip">{{ count($images) }} {{ Str::plural('photo', count($images)) }}</span>
                    @if (count($images) > 1)
                        <span class="sf-chip">← → gallery</span>
                    @endif
                </div>

                <div class="flex flex-wrap gap-3" style="animation: sf-in 0.7s ease 0.18s both;">
                    <button type="button" class="sf-btn sf-btn-soft" @click="addToCart()">Add to cart</button>
                    <button type="button" class="sf-btn sf-btn-primary" @click="buyNow()">Buy directly</button>
                    <a href="{{ route('shop.index') }}#collection" class="sf-btn sf-btn-dark">Back to store</a>
                    @can('update', $product)
                        <a href="{{ route('products.edit', $product) }}" class="sf-btn sf-btn-soft">Edit</a>
                    @endcan
                </div>
            </div>
        </div>

        @if ($related->isNotEmpty())
            <h2 class="sf-related-title">More products</h2>
            <div class="sf-grid">
                @foreach ($related as $item)
                    <a href="{{ route('shop.show', $item) }}" class="sf-product">
                        <div class="sf-product-media">
                            @if ($item->primaryImageUrl())
                                <img src="{{ $item->primaryImageUrl() }}" alt="{{ $item->title }}" loading="lazy">
                            @else
                                <div class="sf-placeholder">
                                    <svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16"/></svg>
                                </div>
                            @endif
                        </div>
                        <div class="sf-product-body">
                            <h3 class="sf-product-title">{{ $item->title }}</h3>
                            <p class="{{ $item->sell_price !== null ? 'sf-price' : 'sf-price-muted' }}">
                                @if ($item->sell_price !== null)
                                    <x-omr :amount="$item->sell_price" :decimals="2" />
                                @else
                                    On request
                                @endif
                            </p>
                        </div>
                    </a>
                @endforeach
            </div>
        @endif
    </div>
@endsection
