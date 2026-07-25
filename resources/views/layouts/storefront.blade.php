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
<body class="storefront antialiased">
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
</body>
</html>
