<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'Store') — {{ config('app.name', 'Smart Home') }}</title>
    <meta name="description" content="@yield('meta_description', 'Browse curated smart-home products from Smart Home.')">

    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=bebas-neue:400|manrope:400,500,600,700,800&display=swap" rel="stylesheet" />

    @vite(['resources/css/app.css', 'resources/css/storefront.css', 'resources/js/app.js'])
    <style>[x-cloak]{display:none!important}</style>
</head>
<body class="storefront antialiased" x-data>
    <div class="storefront-shell">
        <div class="storefront-content">
            <header class="sf-nav">
                <div class="sf-nav-inner">
                    <a href="{{ route('shop.index') }}" class="sf-brand">
                        <x-application-logo class="w-8 h-8" />
                        <span>Smart Home</span>
                    </a>

                    <nav class="sf-nav-links" aria-label="Store">
                        <a href="{{ route('shop.index') }}" class="sf-nav-link {{ request()->routeIs('shop.index') ? 'is-active' : '' }}">Store</a>
                        <button type="button" class="sf-nav-link sf-cart-btn" @click="$store.cart.open = true" aria-label="Open cart">
                            Cart
                            <span class="sf-cart-count" x-text="$store.cart.count" x-show="$store.cart.count > 0" x-cloak></span>
                        </button>
                        @auth
                            <a href="{{ route('dashboard') }}" class="sf-nav-link">Dashboard</a>
                        @else
                            <a href="{{ route('login') }}" class="sf-nav-cta">Sign in</a>
                        @endauth
                    </nav>
                </div>
            </header>

            @yield('content')

            <footer class="sf-footer">
                <p class="sf-display">Smart Home</p>
                <p>&copy; {{ date('Y') }} · Designed for living spaces</p>
            </footer>
        </div>
    </div>

    {{-- Cart drawer --}}
    <div
        class="sf-cart-overlay"
        x-show="$store.cart.open"
        x-cloak
        x-transition.opacity
        @click="$store.cart.open = false"
        @keydown.escape.window="$store.cart.open = false"
    ></div>
    <aside
        class="sf-cart-drawer"
        x-show="$store.cart.open"
        x-cloak
        x-transition:enter="sf-cart-enter"
        x-transition:enter-start="sf-cart-enter-start"
        x-transition:enter-end="sf-cart-enter-end"
        x-transition:leave="sf-cart-leave"
        x-transition:leave-start="sf-cart-leave-start"
        x-transition:leave-end="sf-cart-leave-end"
        @click.stop
        role="dialog"
        aria-label="Shopping cart"
    >
        <div class="sf-cart-head">
            <h2>Cart</h2>
            <button type="button" class="sf-cart-close" @click="$store.cart.open = false" aria-label="Close cart">×</button>
        </div>

        <div class="sf-cart-body">
            <template x-if="!$store.cart.items.length">
                <p class="sf-cart-empty">Your cart is empty.</p>
            </template>

            <template x-for="item in $store.cart.items" :key="item.id">
                <div class="sf-cart-item">
                    <div class="sf-cart-item-info">
                        <p class="sf-cart-item-title" x-text="item.title"></p>
                        <p class="sf-cart-item-price">
                            <span class="omr-symbol" role="img" aria-label="OMR" style="--omr-mask: url('{{ asset('images/omr-symbol.png') }}')"></span>
                            <span x-text="item.price != null ? Number(item.price).toFixed(3) : 'On request'"></span>
                        </p>
                    </div>
                    <div class="sf-cart-item-actions">
                        <input
                            type="number"
                            min="1"
                            max="99"
                            class="sf-cart-qty"
                            :value="item.qty"
                            @change="$store.cart.setQty(item.id, $event.target.value)"
                        >
                        <button type="button" class="sf-cart-remove" @click="$store.cart.remove(item.id)">Remove</button>
                    </div>
                </div>
            </template>
        </div>

        <div class="sf-cart-foot" x-show="$store.cart.items.length" x-cloak>
            <div class="sf-cart-subtotal">
                <span>Subtotal</span>
                <span class="inline-flex items-center gap-1">
                    <span class="omr-symbol" role="img" aria-label="OMR" style="--omr-mask: url('{{ asset('images/omr-symbol.png') }}')"></span>
                    <span x-text="Number($store.cart.subtotal).toFixed(3)"></span>
                </span>
            </div>
            <button type="button" class="sf-btn sf-btn-primary w-full justify-center" @click="$store.cart.checkoutWhatsApp()">
                Buy via WhatsApp
            </button>
            <p class="sf-cart-hint">Sends your item list to +968 7806 4276</p>
        </div>
    </aside>

    <a
        class="sf-wa-float"
        href="https://wa.me/96878064276"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact WhatsApp"
        title="WhatsApp +968 7806 4276"
    >
        <svg viewBox="0 0 32 32" aria-hidden="true" fill="currentColor">
            <path d="M16.04 3C9.4 3 4 8.3 4 14.84c0 2.1.56 4.14 1.62 5.94L4 29l8.42-1.56a12.1 12.1 0 0 0 3.62.55h.01c6.64 0 12.04-5.3 12.04-11.84C28.09 8.3 22.68 3 16.04 3zm0 21.55h-.01a10 10 0 0 1-5.1-1.4l-.36-.21-4.99.93.95-4.86-.24-.38a9.9 9.9 0 0 1-1.52-5.29c0-5.46 4.53-9.9 10.11-9.9 5.58 0 10.1 4.44 10.1 9.9 0 5.46-4.53 9.9-10.1 9.9zm5.55-7.42c-.3-.15-1.79-.88-2.07-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.27-.46-2.42-1.48a9.1 9.1 0 0 1-1.68-2.08c-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.02-1.05 2.49s1.08 2.89 1.23 3.09c.15.2 2.12 3.23 5.14 4.53.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.79-.73 2.04-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35z"/>
        </svg>
    </a>
</body>
</html>
