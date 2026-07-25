<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Smart Home') }}</title>

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700&display=swap" rel="stylesheet" />

        @vite(['resources/css/app.css', 'resources/js/app.js'])
        @stack('head')
    </head>
    <body class="font-sans antialiased bg-surface-950 text-surface-100">
        <div class="min-h-screen flex">
            @include('layouts.navigation')

            <div class="flex-1 flex flex-col min-w-0 lg:pl-64 pt-14 lg:pt-0">
                @isset($header)
                    <header class="sticky top-0 z-20 bg-surface-950/80 backdrop-blur-xl border-b border-surface-800">
                        <div class="px-4 sm:px-6 lg:px-8 py-5">
                            {{ $header }}
                        </div>
                    </header>
                @endisset

                <main class="flex-1">
                    {{ $slot }}
                </main>
            </div>
        </div>

        @stack('scripts')
    </body>
</html>
