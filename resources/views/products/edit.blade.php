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
                            <x-input-label for="buy_price" value="Buy price (optional, OMR)" />
                            <x-text-input id="buy_price" name="buy_price" type="number" min="0" step="0.001" class="block mt-1.5 w-full" :value="old('buy_price', $product->buy_price !== null ? number_format((float) $product->buy_price, 3, '.', '') : '')" placeholder="0.000" />
                            <x-input-error :messages="$errors->get('buy_price')" class="mt-2" />
                        </div>
                        <div>
                            <x-input-label for="sell_price" value="Sell price (required, OMR)" />
                            <x-text-input id="sell_price" name="sell_price" type="number" min="0" step="0.001" class="block mt-1.5 w-full" :value="old('sell_price', $product->sell_price !== null ? number_format((float) $product->sell_price, 3, '.', '') : '')" required placeholder="0.000" />
                            <p class="mt-1 text-[11px] text-surface-500">Shown on the public store with the Omani Rial symbol.</p>
                            <x-input-error :messages="$errors->get('sell_price')" class="mt-2" />
                        </div>
                    </div>

                    @if (count($product->imagePaths()))
                        <div>
                            <div class="flex flex-wrap items-end justify-between gap-2 mb-2">
                                <div>
                                    <p class="text-xs font-medium text-surface-300">Current images</p>
                                    <p class="text-[11px] text-surface-500 mt-0.5">Choose which image is the store thumbnail, or mark images to remove.</p>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                @foreach ($product->imagePaths() as $path)
                                    <div class="relative aspect-square rounded-xl overflow-hidden border {{ $product->isThumbnail($path) ? 'border-brand-400 ring-2 ring-brand-500/40' : 'border-surface-700' }} bg-surface-950">
                                        <img src="{{ $product->imageUrl($path) }}" alt="" class="w-full h-full object-cover">
                                        <div class="absolute inset-x-0 bottom-0 bg-black/75 px-2 py-2 space-y-1.5">
                                            <label class="flex items-center gap-1.5 text-[10px] text-surface-100 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="thumbnail"
                                                    value="{{ $path }}"
                                                    @checked(old('thumbnail', $product->thumbnailPath()) === $path)
                                                    class="border-surface-500 bg-surface-800 text-brand-500 focus:ring-brand-500/40"
                                                >
                                                Thumbnail
                                            </label>
                                            <label class="flex items-center gap-1.5 text-[10px] text-surface-300 cursor-pointer">
                                                <input type="checkbox" name="remove_images[]" value="{{ $path }}" class="rounded border-surface-600 bg-surface-800 text-rose-500">
                                                Remove
                                            </label>
                                        </div>
                                        @if ($product->isThumbnail($path))
                                            <span class="absolute top-2 left-2 px-1.5 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wide bg-brand-500 text-white">Thumb</span>
                                        @endif
                                    </div>
                                @endforeach
                            </div>
                            <x-input-error :messages="$errors->get('thumbnail')" class="mt-2" />
                        </div>
                    @endif

                    <div>
                        <x-product-image-upload
                            label="Add more images"
                            hint="Select multiple photos at once, or pick again to add more. They will be added to this product."
                        />
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
