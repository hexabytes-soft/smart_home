<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ $project->name }} — 360° Tour</title>
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700&display=swap" rel="stylesheet">
    @vite(['resources/css/app.css', 'resources/css/studio.css', 'resources/js/map-editor.js'])
</head>
<body class="font-sans antialiased bg-[#0b0f17] overflow-hidden">
    <div
        id="map-editor-root"
        class="studio-shell studio-shell--viewer"
        data-viewer-only="true"
        data-can-edit="false"
        data-map-data='@json($project->map_data ?? [])'
        data-width="{{ $project->width }}"
        data-depth="{{ $project->depth }}"
        data-live-url="{{ route('share.data', $token) }}"
        data-map-revision="{{ $project->updated_at?->timestamp ?? 0 }}"
        data-project-name="{{ $project->name }}"
    >
        <header class="studio-topbar">
            <div class="studio-topbar-group min-w-0">
                <span class="studio-topbar-title">{{ $project->name }}</span>
                <span class="studio-chip hidden sm:inline-flex">360° Tour</span>
                <span class="studio-topbar-meta">{{ $project->width }}×{{ $project->depth }} m</span>
            </div>

            <div id="floor-switcher" class="studio-topbar-group hidden items-center gap-1"></div>

            <div class="flex-1 min-w-2"></div>

            <div class="studio-topbar-group studio-segment">
                <button type="button" id="night-mode-btn" class="view-mode-btn">Day</button>
            </div>

            <div class="studio-topbar-group">
                <span id="live-sync-badge" class="studio-chip text-emerald-400/90 border-emerald-500/30">Live</span>
            </div>
        </header>

        <div class="studio-workspace studio-workspace--viewer">
            <div class="studio-viewport-wrap">
                <div id="map-canvas" class="studio-viewport">
                    <div id="sim-overlay" class="studio-viewer-hint">
                        Click to look · WASD move · drag look · E door · N day/night
                    </div>
                    <div id="map-loading" class="studio-viewer-loading">
                        <svg class="animate-spin w-5 h-5 text-brand-400" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                        <span>Loading 360° tour…</span>
                    </div>
                </div>
            </div>
        </div>

        <footer class="studio-statusbar">
            <span id="map-status" class="studio-status-hint">Loading 360° view…</span>
            <span class="studio-status-context text-surface-500">Updates when the designer saves</span>
        </footer>
    </div>
</body>
</html>
