<x-app-layout>
    <x-slot name="header">
        <div>
            <h2 class="text-2xl font-bold text-white">New Product</h2>
            <p class="text-sm text-surface-400 mt-0.5">Title and sell price are required for the store</p>
        </div>
    </x-slot>

    <div class="p-4 sm:p-6 lg:p-8">
        <div class="max-w-3xl">
            <div class="card p-6 sm:p-8">
                <form
                    method="POST"
                    action="{{ route('products.store') }}"
                    enctype="multipart/form-data"
                    class="space-y-6"
                    x-data="{
                        previews: [],
                        thumbIndex: 0,
                        onFiles(event) {
                            const files = Array.from(event.target.files || []);
                            this.previews.forEach((p) => URL.revokeObjectURL(p.url));
                            this.previews = files.map((file, index) => ({
                                index,
                                name: file.name,
                                url: URL.createObjectURL(file),
                            }));
                            this.thumbIndex = 0;
                        },
                        setThumb(index) {
                            this.thumbIndex = index;
                        }
                    }"
                >
                    @csrf

                    <div>
                        <x-input-label for="title" value="Title" />
                        <x-text-input id="title" name="title" class="block mt-1.5 w-full" :value="old('title')" required autofocus placeholder="Product name" />
                        <x-input-error :messages="$errors->get('title')" class="mt-2" />
                    </div>

                    <div>
                        <x-input-label for="description" value="Description (optional)" />
                        <textarea id="description" name="description" rows="4" class="input-dark block mt-1.5 w-full" placeholder="Optional description…">{{ old('description') }}</textarea>
                        <x-input-error :messages="$errors->get('description')" class="mt-2" />
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <x-input-label for="buy_price" value="Buy price (optional, OMR)" />
                            <x-text-input id="buy_price" name="buy_price" type="number" min="0" step="0.001" class="block mt-1.5 w-full" :value="old('buy_price')" placeholder="0.000" />
                            <x-input-error :messages="$errors->get('buy_price')" class="mt-2" />
                        </div>
                        <div>
                            <x-input-label for="sell_price" value="Sell price (required, OMR)" />
                            <x-text-input id="sell_price" name="sell_price" type="number" min="0" step="0.001" class="block mt-1.5 w-full" :value="old('sell_price')" required placeholder="0.000" />
                            <p class="mt-1 text-[11px] text-surface-500">Shown on the public store with the Omani Rial symbol.</p>
                            <x-input-error :messages="$errors->get('sell_price')" class="mt-2" />
                        </div>
                    </div>

                    <div>
                        <x-input-label for="images" value="Images" />
                        <input
                            id="images"
                            name="images[]"
                            type="file"
                            accept="image/jpeg,image/png,image/webp,image/gif"
                            multiple
                            class="mt-1.5 block w-full text-sm text-surface-400 file:mr-3 file:rounded-lg file:border-0 file:bg-surface-800 file:px-3 file:py-2 file:text-xs file:font-medium file:text-surface-200 hover:file:bg-surface-700"
                            @change="onFiles($event)"
                        />
                        <p class="mt-1 text-[11px] text-surface-500">JPEG, PNG, WebP, GIF · multiple images · 5MB each · pick a thumbnail below</p>
                        <x-input-error :messages="$errors->get('images')" class="mt-2" />
                        <x-input-error :messages="$errors->get('images.*')" class="mt-2" />
                        <x-input-error :messages="$errors->get('thumbnail_index')" class="mt-2" />

                        <input type="hidden" name="thumbnail_index" :value="thumbIndex">

                        <div class="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3" x-show="previews.length" x-cloak>
                            <template x-for="item in previews" :key="item.index">
                                <div
                                    class="relative aspect-square rounded-xl overflow-hidden border bg-surface-950"
                                    :class="thumbIndex === item.index ? 'border-brand-400 ring-2 ring-brand-500/40' : 'border-surface-700'"
                                >
                                    <img :src="item.url" :alt="item.name" class="w-full h-full object-cover">
                                    <div class="absolute inset-x-0 bottom-0 bg-black/75 px-2 py-2">
                                        <label class="flex items-center gap-1.5 text-[10px] text-surface-100 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="thumbnail_choice"
                                                class="border-surface-500 bg-surface-800 text-brand-500 focus:ring-brand-500/40"
                                                :checked="thumbIndex === item.index"
                                                @change="setThumb(item.index)"
                                            >
                                            Thumbnail
                                        </label>
                                        <p class="mt-1 text-[10px] text-surface-400 truncate" x-text="item.name"></p>
                                    </div>
                                    <span
                                        class="absolute top-2 left-2 px-1.5 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wide bg-brand-500 text-white"
                                        x-show="thumbIndex === item.index"
                                    >Thumb</span>
                                </div>
                            </template>
                        </div>
                    </div>

                    <div class="flex items-center gap-4 pt-4 border-t border-surface-800">
                        <x-primary-button>Create product</x-primary-button>
                        <a href="{{ route('products.index') }}" class="text-sm text-surface-400 hover:text-white transition-colors">Cancel</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
