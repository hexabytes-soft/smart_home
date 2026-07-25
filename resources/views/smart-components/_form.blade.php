@php
    /** @var \App\Models\SmartComponent|null $smartComponent */
    $smartComponent = $smartComponent ?? null;
@endphp

<div>
    <x-input-label for="name" value="Name" />
    <x-text-input id="name" name="name" class="block mt-1.5 w-full" :value="old('name', $smartComponent?->name)" required autofocus placeholder="Camera" />
    <x-input-error :messages="$errors->get('name')" class="mt-2" />
</div>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
    <div>
        <x-input-label for="icon" value="Icon (emoji)" />
        <x-text-input id="icon" name="icon" class="block mt-1.5 w-full" :value="old('icon', $smartComponent?->icon ?: '📷')" maxlength="32" placeholder="📷" />
        <x-input-error :messages="$errors->get('icon')" class="mt-2" />
    </div>
    <div>
        <x-input-label for="price" value="Price (OMR)" />
        <x-text-input
            id="price"
            name="price"
            type="number"
            min="0"
            step="0.001"
            class="block mt-1.5 w-full"
            :value="old('price', $smartComponent ? number_format((float) $smartComponent->price, 3, '.', '') : '0.000')"
            required
        />
        <x-input-error :messages="$errors->get('price')" class="mt-2" />
    </div>
</div>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
    <div>
        <x-input-label for="mount" value="Mount" />
        <select id="mount" name="mount" class="input-dark block mt-1.5 w-full">
            @foreach (['ceiling' => 'Ceiling', 'wall' => 'Wall', 'floor' => 'Floor', 'door' => 'Door'] as $value => $label)
                <option value="{{ $value }}" @selected(old('mount', $smartComponent?->mount ?? 'wall') === $value)>{{ $label }}</option>
            @endforeach
        </select>
        <x-input-error :messages="$errors->get('mount')" class="mt-2" />
    </div>
    <div>
        <x-input-label for="model" value="Model (optional)" />
        <x-text-input id="model" name="model" class="block mt-1.5 w-full" :value="old('model', $smartComponent?->model)" placeholder="Dome Camera" />
        <x-input-error :messages="$errors->get('model')" class="mt-2" />
    </div>
</div>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
    <div>
        <x-input-label for="key" value="Key (optional)" />
        <x-text-input id="key" name="key" class="block mt-1.5 w-full font-mono text-sm" :value="old('key', $smartComponent?->key)" placeholder="camera" />
        <p class="mt-1 text-[11px] text-surface-500">Lowercase id used in maps. Auto-generated from name if empty.</p>
        <x-input-error :messages="$errors->get('key')" class="mt-2" />
    </div>
    <div>
        <x-input-label for="sort_order" value="Sort order" />
        <x-text-input id="sort_order" name="sort_order" type="number" min="0" class="block mt-1.5 w-full" :value="old('sort_order', $smartComponent?->sort_order ?? 0)" />
        <x-input-error :messages="$errors->get('sort_order')" class="mt-2" />
    </div>
</div>

<label class="flex items-center gap-2 text-sm text-surface-200">
    <input type="hidden" name="is_active" value="0">
    <input type="checkbox" name="is_active" value="1" @checked((bool) old('is_active', $smartComponent?->is_active ?? true)) class="rounded border-surface-600 bg-surface-800 text-brand-500">
    Active in map studio
</label>
