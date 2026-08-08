@props([
    'inputId' => 'images',
    'name' => 'images[]',
    'label' => 'Images',
    'hint' => 'Select multiple images at once, or add more — they stack together.',
    'showThumbnailPicker' => false,
    'required' => false,
])

<div
    class="space-y-3"
    x-data="{
        files: [],
        previews: [],
        thumbIndex: 0,
        syncInput() {
            const dt = new DataTransfer();
            this.files.forEach((file) => dt.items.add(file));
            this.$refs.fileInput.files = dt.files;
            this.previews.forEach((p) => URL.revokeObjectURL(p.url));
            this.previews = this.files.map((file, index) => ({
                index,
                name: file.name,
                url: URL.createObjectURL(file),
            }));
            if (this.thumbIndex >= this.files.length) this.thumbIndex = 0;
        },
        onPick(event) {
            const incoming = Array.from(event.target.files || []);
            if (!incoming.length) return;
            incoming.forEach((file) => {
                const duplicate = this.files.some((f) => f.name === file.name && f.size === file.size && f.lastModified === file.lastModified);
                if (!duplicate) this.files.push(file);
            });
            this.syncInput();
        },
        removeAt(index) {
            this.files = this.files.filter((_, i) => i !== index);
            if (this.thumbIndex === index) this.thumbIndex = 0;
            else if (this.thumbIndex > index) this.thumbIndex -= 1;
            this.syncInput();
        },
        clearAll() {
            this.files = [];
            this.thumbIndex = 0;
            this.syncInput();
        },
        setThumb(index) {
            this.thumbIndex = index;
        }
    }"
>
    <div class="flex flex-wrap items-end justify-between gap-2">
        <div>
            <x-input-label :for="$inputId" :value="$label" />
            <p class="mt-0.5 text-[11px] text-surface-500">{{ $hint }}</p>
        </div>
        <button
            type="button"
            class="text-[11px] text-surface-400 hover:text-rose-300 transition-colors"
            x-show="previews.length"
            x-cloak
            @click="clearAll()"
        >
            Clear selected
        </button>
    </div>

    <input
        x-ref="fileInput"
        id="{{ $inputId }}"
        name="{{ $name }}"
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        multiple
        @if ($required) required @endif
        class="mt-1 block w-full text-sm text-surface-400 file:mr-3 file:rounded-lg file:border-0 file:bg-surface-800 file:px-3 file:py-2 file:text-xs file:font-medium file:text-surface-200 hover:file:bg-surface-700"
        @change="onPick($event)"
    />

    <p class="text-[11px] text-surface-500">
        JPEG, PNG, WebP, GIF · up to 5MB each ·
        <span x-text="previews.length ? (previews.length + ' image(s) ready') : 'no new images yet'"></span>
    </p>

    @if ($showThumbnailPicker)
        <input type="hidden" name="thumbnail_index" :value="thumbIndex">
    @endif

    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3" x-show="previews.length" x-cloak>
        <template x-for="item in previews" :key="item.index + '-' + item.name">
            <div
                class="relative aspect-square rounded-xl overflow-hidden border bg-surface-950 border-surface-700"
                @if ($showThumbnailPicker)
                    :class="thumbIndex === item.index ? 'border-brand-400 ring-2 ring-brand-500/40' : 'border-surface-700'"
                @endif
            >
                <img :src="item.url" :alt="item.name" class="w-full h-full object-cover">
                <div class="absolute inset-x-0 bottom-0 bg-black/75 px-2 py-2 space-y-1">
                    @if ($showThumbnailPicker)
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
                    @endif
                    <p class="text-[10px] text-surface-400 truncate" x-text="item.name"></p>
                </div>
                <button
                    type="button"
                    class="absolute top-2 right-2 w-7 h-7 rounded-lg bg-black/70 text-rose-300 hover:bg-rose-500/30 text-sm leading-none"
                    title="Remove"
                    @click="removeAt(item.index)"
                >×</button>
                @if ($showThumbnailPicker)
                    <span
                        class="absolute top-2 left-2 px-1.5 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wide bg-brand-500 text-white"
                        x-show="thumbIndex === item.index"
                    >Thumb</span>
                @endif
            </div>
        </template>
    </div>

    {{ $slot ?? '' }}
</div>
