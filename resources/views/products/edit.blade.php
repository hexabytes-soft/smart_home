<x-app-layout>
    <x-slot name="header">
        <div>
            <h2 class="text-2xl font-bold text-white">Edit Product</h2>
            <p class="text-sm text-surface-400 mt-0.5">{{ $product->title }}</p>
        </div>
    </x-slot>

    <div class="p-4 sm:p-6 lg:p-8">
        <div class="max-w-3xl">
            <div class="card p-6 sm:p-8">
                <form method="POST" action="{{ route('products.update', $product) }}" enctype="multipart/form-data" class="space-y-6">
                    @csrf
                    @method('PUT')

                    <div>
                        <x-input-label for="title" value="Title" />
                        <x-text-input id="title" name="title" class="block mt-1.5 w-full" :value="old('title', $product->title)" required autofocus />
                        <x-input-error :messages="$errors->get('title')" class="mt-2" />
                    </div>

                    <div>
                        <x-input-label for="description" value="Description (optional)" />
                        <textarea id="description" name="description" rows="4" class="input-dark block mt-1.5 w-full">{{ old('description', $product->description) }}</textarea>
                        <x-input-error :messages="$errors->get('description')" class="mt-2" />
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <x-input-label for="buy_price" value="Buy price (optional)" />
                            <x-text-input id="buy_price" name="buy_price" type="number" min="0" step="0.01" class="block mt-1.5 w-full" :value="old('buy_price', $product->buy_price)" placeholder="0.00" />
                            <x-input-error :messages="$errors->get('buy_price')" class="mt-2" />
                        </div>
                        <div>
                            <x-input-label for="sell_price" value="Sell price (optional)" />
                            <x-text-input id="sell_price" name="sell_price" type="number" min="0" step="0.01" class="block mt-1.5 w-full" :value="old('sell_price', $product->sell_price)" placeholder="0.00" />
                            <x-input-error :messages="$errors->get('sell_price')" class="mt-2" />
                        </div>
                    </div>

                    @if (count($product->imagePaths()))
                        <div>
                            <p class="text-xs font-medium text-surface-300 mb-2">Current images</p>
                            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                @foreach ($product->imagePaths() as $path)
                                    <label class="relative block aspect-square rounded-xl overflow-hidden border border-surface-700 bg-surface-950 cursor-pointer group">
                                        <img src="{{ $product->imageUrl($path) }}" alt="" class="w-full h-full object-cover">
                                        <span class="absolute inset-x-0 bottom-0 bg-black/70 text-[10px] text-center py-1.5 text-surface-200 group-has-[:checked]:text-rose-300">
                                            <input type="checkbox" name="remove_images[]" value="{{ $path }}" class="mr-1 rounded border-surface-600 bg-surface-800 text-rose-500">
                                            Remove
                                        </span>
                                    </label>
                                @endforeach
                            </div>
                        </div>
                    @endif

                    <div>
                        <x-input-label for="images" value="Add images (optional)" />
                        <input id="images" name="images[]" type="file" accept="image/jpeg,image/png,image/webp,image/gif" multiple class="mt-1.5 block w-full text-sm text-surface-400 file:mr-3 file:rounded-lg file:border-0 file:bg-surface-800 file:px-3 file:py-2 file:text-xs file:font-medium file:text-surface-200 hover:file:bg-surface-700" />
                        <p class="mt-1 text-[11px] text-surface-500">JPEG, PNG, WebP, GIF · multiple images · 5MB each</p>
                        <x-input-error :messages="$errors->get('images')" class="mt-2" />
                        <x-input-error :messages="$errors->get('images.*')" class="mt-2" />
                    </div>

                    <div class="flex items-center gap-4 pt-4 border-t border-surface-800">
                        <x-primary-button>Save changes</x-primary-button>
                        <a href="{{ route('products.show', $product) }}" class="text-sm text-surface-400 hover:text-white transition-colors">Cancel</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
