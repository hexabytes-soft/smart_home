<aside x-data="{ open: false }" class="hidden lg:flex fixed inset-y-0 left-0 z-40 w-64 bg-surface-900 border-r border-surface-800 flex-col">
    {{-- Logo --}}
    <div class="flex items-center gap-3 px-6 h-16 border-b border-surface-800 shrink-0">
        <a href="{{ route('dashboard') }}" class="flex items-center gap-3">
            <x-application-logo class="w-9 h-9" />
            <span class="font-bold text-white tracking-tight">Smart Home</span>
        </a>
    </div>

    {{-- Nav links --}}
    <nav class="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        <p class="px-4 text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3">Menu</p>

        <a href="{{ route('dashboard') }}" class="{{ request()->routeIs('dashboard') ? 'nav-item-active' : 'nav-item' }}">
            <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
            Dashboard
        </a>

        @can('projects.view')
            <a href="{{ route('projects.index') }}" class="{{ request()->routeIs('projects.*') ? 'nav-item-active' : 'nav-item' }}">
                <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                Projects
            </a>
        @endcan

        @can('products.view')
            <a href="{{ route('products.index') }}" class="{{ request()->routeIs('products.*') ? 'nav-item-active' : 'nav-item' }}">
                <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                Products
            </a>
            <a href="{{ route('shop.index') }}" target="_blank" class="nav-item">
                <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                Store front
            </a>
        @endcan

        @can('viewAny', App\Models\SmartComponent::class)
            <a href="{{ route('smart-components.index') }}" class="{{ request()->routeIs('smart-components.*') ? 'nav-item-active' : 'nav-item' }}">
                <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>
                Smart Components
            </a>
        @endcan

        @role('admin|manager')
            <a href="{{ route('admin.users.index') }}" class="{{ request()->routeIs('admin.users.*') ? 'nav-item-active' : 'nav-item' }}">
                <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                Users
            </a>
        @endrole

        @can('products.create')
            <div class="pt-4">
                <a href="{{ route('products.create') }}" class="btn-secondary w-full text-center mb-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                    New Product
                </a>
            </div>
        @endcan

        @can('projects.create')
            <div class="{{ auth()->user()?->can('products.create') ? '' : 'pt-4' }}">
                <a href="{{ route('projects.create') }}" class="btn-primary w-full text-center">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                    New Project
                </a>
            </div>
        @endcan
    </nav>

    {{-- User menu --}}
    <div class="px-4 py-4 border-t border-surface-800 shrink-0">
        <x-dropdown align="top" width="56">
            <x-slot name="trigger">
                <button class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-surface-800 transition-colors text-left">
                    <div class="w-9 h-9 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-sm font-bold text-white shrink-0">
                        {{ strtoupper(substr(Auth::user()->name, 0, 1)) }}
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-white truncate">{{ Auth::user()->name }}</p>
                        <p class="text-xs text-surface-500 truncate">
                            @if(Auth::user()->roles->first())
                                {{ ucfirst(Auth::user()->roles->first()->name) }}
                            @else
                                {{ Auth::user()->email }}
                            @endif
                        </p>
                    </div>
                    <svg class="w-4 h-4 text-surface-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                </button>
            </x-slot>

            <x-slot name="content">
                <x-dropdown-link :href="route('profile.edit')">
                    {{ __('Profile') }}
                </x-dropdown-link>

                <form method="POST" action="{{ route('logout') }}">
                    @csrf
                    <x-dropdown-link :href="route('logout')"
                            onclick="event.preventDefault(); this.closest('form').submit();">
                        {{ __('Log Out') }}
                    </x-dropdown-link>
                </form>
            </x-slot>
        </x-dropdown>
    </div>
</aside>

{{-- Mobile overlay nav --}}
<div x-data="{ open: false }" class="lg:hidden fixed top-0 left-0 right-0 z-50 bg-surface-900 border-b border-surface-800">
    <div class="flex items-center justify-between px-4 h-14">
        <a href="{{ route('dashboard') }}" class="flex items-center gap-2">
            <x-application-logo class="w-8 h-8" />
            <span class="font-bold text-white">Smart Home</span>
        </a>
        <button @click="open = !open" class="p-2 rounded-lg text-surface-400 hover:text-white hover:bg-surface-800">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
    </div>
    <div x-show="open" x-transition class="px-4 pb-4 space-y-1 border-t border-surface-800">
        <a href="{{ route('dashboard') }}" class="block nav-item">Dashboard</a>
        @can('projects.view')
            <a href="{{ route('projects.index') }}" class="block nav-item">Projects</a>
        @endcan
        @can('products.view')
            <a href="{{ route('products.index') }}" class="block nav-item">Products</a>
            <a href="{{ route('shop.index') }}" class="block nav-item">Store front</a>
        @endcan
        @can('viewAny', App\Models\SmartComponent::class)
            <a href="{{ route('smart-components.index') }}" class="block nav-item">Smart Components</a>
        @endcan
        @role('admin|manager')
            <a href="{{ route('admin.users.index') }}" class="block nav-item">Users</a>
        @endrole
    </div>
</div>
