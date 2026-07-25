@props(['project'])

<div class="bg-white shadow-sm sm:rounded-lg p-6 space-y-4">
    <div>
        <h3 class="font-medium text-gray-900">Public 2D floor plan</h3>
        <p class="text-sm text-gray-500 mt-1">
            Share a password-protected link so clients can view the home as a 2D plan with floor layers. Updates automatically when you save.
        </p>
    </div>

    <form method="POST" action="{{ route('projects.share.update', $project) }}" class="space-y-4">
        @csrf
        @method('PUT')

        <label class="flex items-center gap-2 text-sm text-gray-700">
            <input type="hidden" name="share_enabled" value="0">
            <input
                type="checkbox"
                name="share_enabled"
                value="1"
                @checked(old('share_enabled', $project->share_enabled))
                class="rounded border-gray-300 text-slate-800 focus:ring-slate-500"
            >
            Enable public link
        </label>

        <div>
            <label for="share_password" class="block text-sm font-medium text-gray-700">Viewer password</label>
            <input
                id="share_password"
                name="share_password"
                type="text"
                autocomplete="new-password"
                placeholder="{{ $project->share_password ? 'Leave blank to keep current password' : 'Set a password for viewers' }}"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"
            >
            @error('share_password')
                <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
            @enderror
            <p class="mt-1 text-xs text-gray-500">Give this password to anyone you want to view the home. Minimum 4 characters.</p>
        </div>

        @if ($project->share_enabled && $project->share_token)
            <div class="rounded-md border border-slate-200 bg-slate-50 p-3 space-y-2">
                <p class="text-xs font-medium text-gray-600 uppercase tracking-wide">Public URL</p>
                <div class="flex flex-col sm:flex-row gap-2">
                    <input
                        type="text"
                        readonly
                        value="{{ $project->shareUrl() }}"
                        id="share-url-field"
                        class="flex-1 rounded-md border-gray-300 bg-white text-sm font-mono"
                    >
                    <button type="button" onclick="navigator.clipboard.writeText(document.getElementById('share-url-field').value)" class="inline-flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md text-xs font-semibold uppercase tracking-widest text-gray-700 hover:bg-gray-50">
                        Copy
                    </button>
                </div>
            </div>

            <label class="flex items-center gap-2 text-sm text-gray-600">
                <input type="hidden" name="regenerate_token" value="0">
                <input type="checkbox" name="regenerate_token" value="1" class="rounded border-gray-300 text-slate-800 focus:ring-slate-500">
                Regenerate link (old URLs will stop working)
            </label>
        @endif

        <button type="submit" class="inline-flex items-center px-4 py-2 bg-slate-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-slate-700">
            Save sharing settings
        </button>
    </form>
</div>
