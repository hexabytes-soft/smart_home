<x-guest-layout>
    <div class="mb-8">
        <h2 class="text-2xl font-bold text-white">Welcome back</h2>
        <p class="mt-2 text-surface-400">Sign in to continue designing your smart home</p>
    </div>

    <x-auth-session-status class="mb-4 p-3 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm" :status="session('status')" />

    <form method="POST" action="{{ route('login') }}" class="space-y-5">
        @csrf

        <div>
            <x-input-label for="email" :value="__('Email')" class="text-surface-300" />
            <x-text-input id="email" class="block mt-1.5 w-full" type="email" name="email" :value="old('email')" required autofocus autocomplete="username" placeholder="you@example.com" />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>

        <div>
            <x-input-label for="password" :value="__('Password')" class="text-surface-300" />
            <x-text-input id="password" class="block mt-1.5 w-full" type="password" name="password" required autocomplete="current-password" placeholder="••••••••" />
            <x-input-error :messages="$errors->get('password')" class="mt-2" />
        </div>

        <div class="flex items-center justify-between">
            <label for="remember_me" class="inline-flex items-center">
                <input id="remember_me" type="checkbox" class="rounded border-surface-600 bg-surface-800 text-brand-500 focus:ring-brand-500/30" name="remember">
                <span class="ms-2 text-sm text-surface-400">{{ __('Remember me') }}</span>
            </label>

            @if (Route::has('password.request'))
                <a class="text-sm text-brand-400 hover:text-brand-300 transition-colors" href="{{ route('password.request') }}">
                    {{ __('Forgot password?') }}
                </a>
            @endif
        </div>

        <x-primary-button class="w-full justify-center py-3">
            {{ __('Sign in') }}
        </x-primary-button>
    </form>
</x-guest-layout>
