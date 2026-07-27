<x-app-layout>
    <x-slot name="header">
        <div class="flex items-center gap-3 py-0.5">
            <a href="{{ route('projects.show', $project) }}" class="btn-ghost shrink-0 !px-2 !py-1.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            </a>
            <div class="min-w-0 flex items-center gap-2">
                <h2 class="text-sm font-semibold text-white truncate">{{ $project->name }}</h2>
                <span class="studio-chip hidden sm:inline-flex">Design Studio</span>
            </div>
        </div>
    </x-slot>

    @push('head')
        @vite(['resources/css/studio.css', 'resources/js/map-editor.js'])
    @endpush

    <div
        id="map-editor-root"
        class="studio-shell"
        data-map-data='@json($mapData ?? $project->mapDataForViewer())'
        data-width="{{ $project->width }}"
        data-depth="{{ $project->depth }}"
        data-can-edit="{{ auth()->user()->can('editMap', $project) ? 'true' : 'false' }}"
        data-underlay-url="{{ route('projects.map.underlay', $project) }}"
        data-project-name="{{ $project->name }}"
        data-client-name="{{ $project->client_name }}"
        data-client-phone="{{ $project->client_phone }}"
        data-project-location="{{ $project->project_location }}"
        data-smart-catalog='@json($smartCatalog ?? [])'
        data-initial-view-mode="plan2d"
    >
        @if (session('status'))
            <div class="fixed top-16 right-4 z-50 px-3 py-2 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs">
                {{ session('status') }}
            </div>
        @endif

        {{-- Studio command bar --}}
        <header class="studio-topbar">
            <div class="studio-topbar-group">
                <span class="studio-topbar-title">{{ $project->name }}</span>
                <span class="studio-topbar-meta">{{ $project->width }}×{{ $project->depth }} m</span>
            </div>

            <div class="studio-topbar-divider"></div>

            <div class="studio-topbar-group studio-segment">
                <button type="button" data-view-mode="plan2d" class="view-mode-active">2D Plan</button>
                <button type="button" data-view-mode="studio" class="view-mode-btn">3D</button>
                <button type="button" data-view-mode="view360" class="view-mode-btn">360°</button>
                <button type="button" id="night-mode-btn" class="view-mode-btn hidden" data-sim-only>Day</button>
            </div>

            <div id="floor-switcher" class="studio-topbar-group hidden items-center gap-1"></div>

            <div class="flex-1 min-w-2"></div>

            <div class="studio-topbar-group">
                <label data-studio-panel class="studio-chip cursor-pointer select-none">
                    <input type="checkbox" id="snap-toggle" checked class="rounded border-surface-600 bg-surface-800 text-brand-500 w-3 h-3">
                    <span>Snap</span>
                </label>
                @can('editMap', $project)
                    <button type="button" id="quotation-btn" class="studio-btn-icon hidden sm:inline-flex" title="Quotation / Invoice">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 7h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z"/></svg>
                    </button>
                    <button type="button" id="share-viewer-btn" class="studio-btn-icon hidden sm:inline-flex" title="Share public plan URL">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
                    </button>
                    <button type="button" id="import-plan-btn" class="studio-btn-icon hidden sm:inline-flex" title="Import floor image">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                    </button>
                    <button type="button" id="save-map-btn" class="studio-btn-save">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/></svg>
                        Save
                    </button>
                @endcan
            </div>
        </header>

        {{-- Workspace --}}
        <div class="studio-workspace @cannot('editMap', $project) studio-workspace--view @endcannot">
            @can('editMap', $project)
                <aside data-studio-panel class="studio-tool-rail" aria-label="Tools">
                    <button type="button" data-tool="select" class="tool-btn-active" title="Select (V)">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5"/></svg>
                        <span>Select</span>
                    </button>
                    <div class="flex-1 min-h-2"></div>
                    <button type="button" data-tool="delete" class="tool-btn !text-red-400/80 hover:!text-red-300" title="Delete">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                        <span>Delete</span>
                    </button>
                    <button type="button" id="clear-floor-btn" class="tool-btn !text-red-400/80 hover:!text-red-300" title="Delete all on this floor">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v4m0 4h.01M5.07 19h13.86a2 2 0 001.74-3.35L13.74 4.35a2 2 0 00-3.48 0L3.33 15.65A2 2 0 005.07 19z"/></svg>
                        <span>Clear all</span>
                    </button>
                </aside>
            @endcan

            <aside data-studio-panel class="studio-outliner-panel" aria-label="Scene outliner">
                <div class="studio-dock-head">
                    <span class="studio-dock-title">Outliner</span>
                    <span id="outliner-count" class="text-[10px] text-surface-600">0</span>
                </div>
                <div class="studio-outliner-body studio-scroll">
                    <input type="search" id="outliner-search" class="studio-outliner-search" placeholder="Filter…" autocomplete="off">
                    <div id="map-elements-list" class="space-y-0.5"></div>
                </div>
            </aside>

            <div class="studio-viewport-wrap">
                <div id="map-canvas" class="studio-viewport">
                    <div id="sim-overlay" class="hidden absolute top-3 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white text-xs pointer-events-none">
                        WASD move · drag look · E door · Esc exit
                    </div>
                    <div id="map-loading" class="absolute inset-0 flex items-center justify-center text-surface-400 text-sm z-10">
                        <div class="flex items-center gap-3">
                            <svg class="animate-spin w-5 h-5 text-brand-400" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                            Loading studio…
                        </div>
                    </div>
                    <div class="plan2d-zoom-controls" aria-label="Zoom controls">
                        <button type="button" data-plan-zoom="in" class="plan2d-zoom-btn" title="Zoom in" aria-label="Zoom in">+</button>
                        <button type="button" data-plan-zoom="out" class="plan2d-zoom-btn" title="Zoom out" aria-label="Zoom out">−</button>
                        <button type="button" data-plan-zoom="fit" class="plan2d-zoom-btn plan2d-zoom-fit" title="Fit to view" aria-label="Fit to view">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
                        </button>
                    </div>
                </div>
            </div>

            <aside data-studio-panel class="studio-dock @cannot('editMap', $project) studio-dock--compact @endcannot">
                @can('editMap', $project)
                    <section class="studio-dock-panel">
                        <div class="studio-dock-head">
                            <span class="studio-dock-title">Devices</span>
                            <span id="studio-placing-badge" class="studio-chip hidden"></span>
                        </div>
                        <div class="studio-dock-body">
                            <div class="studio-asset-layout">
                                <div class="studio-asset-content studio-scroll">
                                    <div data-catalog-panel="smart" class="space-y-2">
                                        <div id="ha-device-grid" class="device-grid"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                @endcan

                <section class="studio-dock-panel">
                    <div class="studio-dock-head">
                        <span class="studio-dock-title">Properties</span>
                    </div>
                    <div id="map-properties" class="studio-inspector-body studio-scroll">
                        <p class="studio-empty">Select an element in the viewport or outliner.</p>
                    </div>
                </section>
            </aside>
        </div>

        <footer class="studio-statusbar">
            <span id="map-status" class="studio-status-hint">Ready — pick a room kit or draw walls to begin</span>
            <span id="studio-context" class="studio-status-context"></span>
            <div class="studio-status-actions">
                <span class="hidden lg:inline">R rotate · Ctrl+D dup</span>
            </div>
        </footer>

        @can('editMap', $project)
            <form id="map-form" method="POST" action="{{ route('projects.map.update', $project) }}" class="hidden">
                @csrf
                @method('PUT')
                <input type="hidden" name="map_mode" id="map_mode_input" value="2d">
                <input type="hidden" name="width" id="map_width_input" value="{{ $project->width }}">
                <input type="hidden" name="depth" id="map_depth_input" value="{{ $project->depth }}">
                <textarea name="map_data" id="map_data_input">{{ json_encode($mapData ?? $project->mapDataForViewer()) }}</textarea>
            </form>
        @endcan
    </div>

    @can('editMap', $project)
        <div id="import-plan-modal" class="hidden fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <div class="w-full max-w-md rounded-2xl border border-surface-700 bg-surface-900 shadow-2xl">
                <div class="flex items-center justify-between gap-3 px-5 py-4 border-b border-surface-800">
                    <div>
                        <h3 class="text-sm font-semibold text-white">Import floor image</h3>
                        <p class="text-[11px] text-surface-500 mt-0.5">Use a plan photo as the canvas, then place components on top</p>
                    </div>
                    <button type="button" data-import-close class="p-1.5 rounded-lg text-surface-400 hover:text-white hover:bg-surface-800 transition-colors" aria-label="Close">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                    </button>
                </div>
                <form id="import-plan-form" class="p-5 space-y-4">
                    <div id="import-paste-zone" tabindex="0" class="rounded-xl border border-dashed border-surface-600 bg-surface-800/40 px-4 py-8 text-center outline-none focus:border-brand-500/50 cursor-pointer">
                        <p class="text-xs text-surface-300">Drop, browse, or <span class="text-brand-400 font-medium">Ctrl+V paste</span></p>
                        <p class="text-[10px] text-surface-500 mt-1">JPEG, PNG, WebP, or GIF · one image for the current floor</p>
                        <input id="import-plan-image" name="image" type="file" accept="image/jpeg,image/png,image/webp,image/gif" class="sr-only">
                    </div>
                    <div id="import-image-preview" class="hidden rounded-xl border border-surface-700 bg-surface-800/50 overflow-hidden">
                        <img id="import-image-preview-img" alt="" class="w-full max-h-48 object-contain bg-surface-950">
                        <p id="import-image-preview-name" class="px-3 py-2 text-[11px] text-surface-400 truncate"></p>
                    </div>
                    <p id="import-plan-error" class="hidden text-xs text-rose-300"></p>
                    <div class="flex items-center justify-end gap-2 pt-1">
                        <button type="button" data-import-close class="btn-secondary text-xs py-2 px-4">Cancel</button>
                        <button type="submit" id="import-plan-submit" class="btn-secondary text-xs py-2 px-4" disabled>Place on floor</button>
                    </div>
                </form>
            </div>
        </div>

        <div id="quotation-modal" class="hidden fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <div class="w-full max-w-3xl rounded-2xl border border-surface-700 bg-surface-900 shadow-2xl max-h-[92vh] overflow-hidden flex flex-col">
                <div class="flex items-center justify-between gap-3 px-5 py-4 border-b border-surface-800 shrink-0">
                    <div>
                        <h3 class="text-sm font-semibold text-white">Quotation · عرض سعر</h3>
                        <p class="text-[11px] text-surface-500 mt-0.5 flex items-center gap-1.5">
                            {{ $project->name }} ·
                            <span class="omr-symbol inline-block w-3.5 h-3.5" role="img" aria-label="OMR" style="--omr-mask: url('{{ asset('images/omr-symbol.png') }}')"></span>
                            Omani Rial
                        </p>
                    </div>
                    <div class="flex items-center gap-2">
                        <button type="button" id="quotation-print-btn" class="btn-secondary text-xs py-1.5 px-3">Print invoice</button>
                        <button type="button" data-quotation-close class="p-1.5 rounded-lg text-surface-400 hover:text-white hover:bg-surface-800 transition-colors" aria-label="Close">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                        </button>
                    </div>
                </div>
                <div id="quotation-body" class="p-5 overflow-y-auto studio-scroll flex-1 space-y-4">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label for="quotation-client" class="block text-[10px] font-medium text-surface-400 mb-1">اسم العميل / Client name</label>
                            <input id="quotation-client" type="text" class="w-full rounded-lg border-surface-700 bg-surface-800 text-sm text-white" placeholder="Client name" value="{{ $project->client_name }}">
                        </div>
                        <div>
                            <label for="quotation-phone" class="block text-[10px] font-medium text-surface-400 mb-1">رقم الهاتف / Client phone</label>
                            <input id="quotation-phone" type="text" class="w-full rounded-lg border-surface-700 bg-surface-800 text-sm text-white" placeholder="+968 …" value="{{ $project->client_phone }}">
                        </div>
                        <div>
                            <label for="quotation-location" class="block text-[10px] font-medium text-surface-400 mb-1">مكان المشروع / Project location</label>
                            <input id="quotation-location" type="text" class="w-full rounded-lg border-surface-700 bg-surface-800 text-sm text-white" placeholder="Location" value="{{ $project->project_location }}">
                        </div>
                        <div>
                            <label for="quotation-notes" class="block text-[10px] font-medium text-surface-400 mb-1">Notes</label>
                            <input id="quotation-notes" type="text" class="w-full rounded-lg border-surface-700 bg-surface-800 text-sm text-white" placeholder="Optional notes">
                        </div>
                    </div>

                    <div id="quotation-lines" class="rounded-xl border border-surface-700 overflow-hidden"></div>

                    <div class="rounded-xl border border-surface-700 bg-surface-800/30 p-3 space-y-3">
                        <div class="flex flex-wrap items-center justify-between gap-2">
                            <p class="text-[11px] font-semibold text-surface-200">خدمات إضافية / Extra services</p>
                            <button type="button" id="quotation-save-defaults-btn" class="btn-secondary text-[10px] py-1 px-2.5">
                                Save for all quotations
                            </button>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <label for="quotation-programming" class="block text-[10px] font-medium text-surface-400 mb-1">سعر البرمجة / Programming</label>
                                <input id="quotation-programming" type="number" min="0" step="0.001" value="0" class="w-full rounded-lg border-surface-700 bg-surface-800 text-sm text-white font-mono">
                            </div>
                            <div>
                                <label for="quotation-installation" class="block text-[10px] font-medium text-surface-400 mb-1">سعر التركيب / Installation</label>
                                <input id="quotation-installation" type="number" min="0" step="0.001" value="0" class="w-full rounded-lg border-surface-700 bg-surface-800 text-sm text-white font-mono">
                            </div>
                        </div>
                        <p class="text-[10px] text-surface-500">Saved with this project automatically. Use “Save for all quotations” to reuse these amounts on other projects.</p>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div>
                            <label for="quotation-discount" class="block text-[10px] font-medium text-surface-400 mb-1">Discount %</label>
                            <input id="quotation-discount" type="number" min="0" max="100" step="0.1" value="0" class="w-full rounded-lg border-surface-700 bg-surface-800 text-sm text-white">
                        </div>
                        <div>
                            <label for="quotation-tva" class="block text-[10px] font-medium text-surface-400 mb-1">TVA / VAT %</label>
                            <input id="quotation-tva" type="number" min="0" max="100" step="0.1" value="5" class="w-full rounded-lg border-surface-700 bg-surface-800 text-sm text-white">
                        </div>
                        <div class="col-span-2 flex items-end">
                            <p class="text-[10px] text-surface-500">Default VAT in Oman is often 5%. Set to 0 if not applicable.</p>
                        </div>
                    </div>

                    <div id="quotation-totals" class="rounded-xl border border-surface-700 bg-surface-800/40 p-4 space-y-2"></div>
                </div>
            </div>
        </div>

        <div id="share-viewer-modal" class="hidden fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <div class="w-full max-w-lg rounded-2xl border border-surface-700 bg-surface-900 shadow-2xl max-h-[90vh] overflow-y-auto">
                <div class="flex items-center justify-between gap-3 px-5 py-4 border-b border-surface-800 sticky top-0 bg-surface-900 z-10">
                    <div>
                        <h3 class="text-sm font-semibold text-white">Share plan URL</h3>
                        <p class="text-[11px] text-surface-500 mt-0.5">Public link shows your floor image and placed components</p>
                    </div>
                    <button type="button" data-share-close class="p-1.5 rounded-lg text-surface-400 hover:text-white hover:bg-surface-800 transition-colors" aria-label="Close">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                    </button>
                </div>
                <div class="p-5">
                <form method="POST" action="{{ route('projects.share.update', $project) }}" class="space-y-4">
                    @csrf
                    @method('PUT')

                    <label class="flex items-center gap-2 text-sm text-surface-200">
                        <input type="hidden" name="share_enabled" value="0">
                        <input type="checkbox" name="share_enabled" value="1" @checked($project->share_enabled) class="rounded border-surface-600 bg-surface-800 text-brand-500">
                        Enable public plan link
                    </label>

                    <div>
                        <label for="studio-share-password" class="block text-xs font-medium text-surface-300 mb-1">Viewer password</label>
                        <input id="studio-share-password" name="share_password" type="text" autocomplete="new-password" placeholder="{{ $project->share_password ? 'Leave blank to keep current' : 'Min. 4 characters' }}" class="w-full rounded-lg border-surface-700 bg-surface-800 text-sm text-white">
                        @error('share_password')
                            <p class="mt-1 text-xs text-rose-300">{{ $message }}</p>
                        @enderror
                    </div>

                    @if ($project->share_enabled && $project->share_token)
                        <div class="rounded-xl border border-surface-700 bg-surface-800/50 p-3 space-y-2">
                            <p class="text-[10px] font-medium text-surface-400 uppercase tracking-wide">Public URL</p>
                            <div class="flex gap-2">
                                <input type="text" readonly value="{{ $project->shareUrl() }}" id="studio-share-url" class="flex-1 rounded-lg border-surface-700 bg-surface-900 text-xs font-mono text-surface-200">
                                <button type="button" onclick="navigator.clipboard.writeText(document.getElementById('studio-share-url').value)" class="studio-btn-icon shrink-0" title="Copy URL">📋</button>
                            </div>
                        </div>
                        <label class="flex items-center gap-2 text-xs text-surface-400">
                            <input type="hidden" name="regenerate_token" value="0">
                            <input type="checkbox" name="regenerate_token" value="1" class="rounded border-surface-600 bg-surface-800 text-brand-500">
                            Regenerate link
                        </label>
                    @endif

                    <button type="submit" class="studio-btn-save w-full justify-center">Save sharing</button>
                </form>
                </div>
            </div>
        </div>
    @endcan

    <div id="device-details-popover" class="device-details-popover hidden" role="dialog" aria-live="polite"></div>
</x-app-layout>
