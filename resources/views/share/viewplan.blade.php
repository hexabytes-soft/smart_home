<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ $project->name }} — Floor Plan</title>
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700&display=swap" rel="stylesheet">
    @vite(['resources/css/app.css', 'resources/css/studio.css', 'resources/js/map-editor.js'])
</head>
<body class="font-sans antialiased bg-[#0b0f17] overflow-hidden">
    <div
        id="map-editor-root"
        class="studio-shell studio-shell--viewer"
        data-viewer-only="true"
        data-initial-view-mode="plan2d"
        data-can-edit="false"
        data-map-data='@json($mapData ?? $project->mapDataForViewer())'
        data-width="{{ $project->width }}"
        data-depth="{{ $project->depth }}"
        data-live-url="{{ route('share.data', $token) }}"
        data-map-revision="{{ $project->updated_at?->timestamp ?? 0 }}"
        data-project-name="{{ $project->name }}"
        data-smart-catalog='@json($smartCatalog ?? [])'
    >
        <header class="studio-topbar">
            <div class="studio-topbar-group min-w-0">
                <span class="studio-topbar-title">{{ $project->name }}</span>
                <span class="studio-chip hidden sm:inline-flex">2D Plan</span>
                <span class="studio-topbar-meta">{{ $project->width }}×{{ $project->depth }} m</span>
            </div>

            <div id="floor-switcher" class="studio-topbar-group items-center gap-1"></div>

            <div class="flex-1 min-w-2"></div>

            <div class="studio-topbar-group">
                <span id="live-sync-badge" class="studio-chip text-emerald-400/90 border-emerald-500/30">Live</span>
            </div>
        </header>

        <div class="studio-workspace studio-workspace--viewer">
            <div class="studio-viewport-wrap">
                <div id="map-canvas" class="studio-viewport">
                    <div id="map-loading" class="studio-viewer-loading">
                        <svg class="animate-spin w-5 h-5 text-brand-400" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                        <span>Loading floor plan…</span>
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
        </div>

        <footer class="studio-statusbar">
            <span id="map-status" class="studio-status-hint">Loading 2D plan…</span>
            <span class="studio-status-context text-surface-500">Pinch or buttons to zoom · drag to pan · long-press device for details</span>
        </footer>
    </div>
    <div id="device-details-popover" class="device-details-popover hidden" role="dialog" aria-live="polite"></div>
</body>
</html>
