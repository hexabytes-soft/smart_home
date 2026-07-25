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
    </head>
    <body class="font-sans text-white antialiased">
        <div class="min-h-screen flex">
            {{-- Brand panel --}}
            <div class="hidden lg:flex lg:w-1/2 xl:w-[55%] relative bg-surface-950 overflow-hidden">
                <div class="absolute inset-0 bg-mesh-gradient"></div>
                <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-60"></div>

                <div class="relative z-10 flex flex-col justify-between p-12 xl:p-16 w-full">
                    <div class="flex items-center gap-3">
                        <x-application-logo class="w-11 h-11" />
                        <span class="text-xl font-bold tracking-tight">Smart Home</span>
                    </div>

                    <div class="space-y-8 max-w-lg">
                        <div>
                            <h1 class="text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
                                Design homes in
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">3D</span>
                            </h1>
                            <p class="mt-4 text-lg text-surface-400 leading-relaxed">
                                Build floor plans, place walls and doors, and visualize your smart home before you build.
                            </p>
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <div class="rounded-2xl bg-surface-900/60 border border-surface-800 p-4 backdrop-blur-sm">
                                <div class="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center mb-3">
                                    <svg class="w-5 h-5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                                </div>
                                <p class="font-semibold text-sm">3D Map Builder</p>
                                <p class="text-xs text-surface-500 mt-1">Walls, doors & rooms</p>
                            </div>
                            <div class="rounded-2xl bg-surface-900/60 border border-surface-800 p-4 backdrop-blur-sm">
                                <div class="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center mb-3">
                                    <svg class="w-5 h-5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
                                </div>
                                <p class="font-semibold text-sm">Smart Components</p>
                                <p class="text-xs text-surface-500 mt-1">Lights, sensors & more</p>
                            </div>
                        </div>
                    </div>

                    <p class="text-sm text-surface-600">&copy; {{ date('Y') }} Smart Home Platform</p>
                </div>
            </div>

            {{-- Auth form --}}
            <div class="flex-1 flex items-center justify-center bg-surface-950 lg:bg-surface-900 px-6 py-12">
                <div class="w-full max-w-md">
                    <div class="lg:hidden flex items-center gap-3 mb-8">
                        <x-application-logo class="w-10 h-10" />
                        <span class="text-lg font-bold">Smart Home</span>
                    </div>

                    {{ $slot }}
                </div>
            </div>
        </div>
    </body>
</html>
