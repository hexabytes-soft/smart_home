<x-app-layout>
    <x-slot name="header">
        <div>
            <h2 class="text-2xl font-bold text-white">Edit {{ $component->name }}</h2>
            <p class="text-sm text-surface-400 mt-0.5">Price updates apply to new placements and quotations that use catalog price</p>
        </div>
    </x-slot>

    <div class="p-4 sm:p-6 lg:p-8">
        <div class="max-w-2xl">
            <div class="card p-6 sm:p-8">
                <form method="POST" action="{{ route('smart-components.update', $component) }}" class="space-y-5">
                    @csrf
                    @method('PUT')
                    @include('smart-components._form', ['component' => $component])
                    <div class="flex items-center gap-4 pt-4 border-t border-surface-800">
                        <x-primary-button>Save changes</x-primary-button>
                        <a href="{{ route('smart-components.index') }}" class="text-sm text-surface-400 hover:text-white transition-colors">Cancel</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
