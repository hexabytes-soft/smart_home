@props(['project'])

<section class="card p-5 sm:p-6 space-y-5">
    <div class="flex flex-wrap items-start justify-between gap-3">
        <div>
            <h3 class="text-sm font-semibold text-white">Public share link</h3>
            <p class="text-xs text-surface-500 mt-1 max-w-xl">
                Password-protected 2D plan for clients. Updates when you save the map.
            </p>
        </div>
        @if ($project->share_enabled)
            <span class="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Live</span>
        @else
            <span class="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-surface-800 text-surface-400 border border-surface-700">Off</span>
        @endif
    </div>

    <form method="POST" action="{{ route('projects.share.update', $project) }}" class="space-y-4">
        @csrf
        @method('PUT')

        <label class="flex items-center gap-2.5 text-sm text-surface-200">
            <input type="hidden" name="share_enabled" value="0">
            <input
                type="checkbox"
                name="share_enabled"
                value="1"
                @checked(old('share_enabled', $project->share_enabled))
                class="rounded border-surface-600 bg-surface-800 text-brand-500 focus:ring-brand-500/40"
            >
            Enable public plan link
        </label>

        <div>
            <label for="share_password" class="block text-xs font-medium text-surface-300 mb-1.5">Viewer password</label>
            <input
                id="share_password"
                name="share_password"
                type="text"
                autocomplete="new-password"
                placeholder="{{ $project->share_password ? 'Leave blank to keep current password' : 'Set a password (min. 4 characters)' }}"
                class="input-dark block w-full"
            >
            @error('share_password')
                <p class="mt-1 text-xs text-rose-300">{{ $message }}</p>
            @enderror
        </div>

        @if ($project->share_enabled && $project->share_token)
            <div class="rounded-xl border border-surface-700 bg-surface-950/60 p-4 space-y-2">
                <p class="text-[11px] font-semibold uppercase tracking-wider text-surface-500">Public URL</p>
                <div class="flex flex-col sm:flex-row gap-2">
                    <input
                        type="text"
                        readonly
                        value="{{ $project->shareUrl() }}"
                        id="share-url-field"
                        class="input-dark flex-1 font-mono text-xs"
                    >
                    <button
                        type="button"
                        onclick="navigator.clipboard.writeText(document.getElementById('share-url-field').value)"
                        class="btn-secondary text-xs py-2.5 px-4"
                    >
                        Copy
                    </button>
                </div>
            </div>

            <label class="flex items-center gap-2.5 text-sm text-surface-400">
                <input type="hidden" name="regenerate_token" value="0">
                <input type="checkbox" name="regenerate_token" value="1" class="rounded border-surface-600 bg-surface-800 text-brand-500 focus:ring-brand-500/40">
                Regenerate link (old URLs stop working)
            </label>
        @endif

        <button type="submit" class="btn-primary text-xs">Save sharing settings</button>
    </form>
</section>
