@extends('layouts.ha-ai')

@section('title', $automation->name ?: 'Automation')

@push('head')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/github-dark.min.css">
@endpush

@section('content')
    <div class="flex flex-wrap items-start justify-between gap-4">
        <div>
            <a href="{{ route('ha-ai.automations.index', $project) }}" class="text-xs text-surface-500 hover:text-brand-300">← History</a>
            <h1 class="text-xl font-bold text-white mt-1">{{ $automation->name ?: 'Untitled automation' }}</h1>
            <p class="text-sm text-surface-400 mt-1">{{ $automation->description ?: 'No description' }}</p>
            <p class="mt-2">
                <span @class([
                    'inline-flex px-2 py-0.5 rounded-lg text-[11px] font-semibold capitalize',
                    'bg-emerald-500/15 text-emerald-300' => $automation->status === 'uploaded',
                    'bg-brand-500/15 text-brand-300' => $automation->status === 'generated',
                    'bg-rose-500/15 text-rose-300' => $automation->status === 'failed',
                    'bg-surface-800 text-surface-300' => $automation->status === 'draft',
                ])>{{ $automation->status }}</span>
            </p>
        </div>
        <div class="flex flex-wrap gap-2">
            <form method="POST" action="{{ route('ha-ai.explain', $project) }}">
                @csrf
                <input type="hidden" name="type" value="local_automation">
                <input type="hidden" name="key" value="{{ $automation->id }}">
                <button class="btn-secondary text-xs py-2 px-3">Explain</button>
            </form>
            <form method="POST" action="{{ route('ha-ai.automations.debug', [$project, $automation]) }}">
                @csrf
                <button class="btn-secondary text-xs py-2 px-3">Debug</button>
            </form>
            <form method="POST" action="{{ route('ha-ai.automations.simulate', [$project, $automation]) }}">
                @csrf
                <input type="hidden" name="yaml" id="simulate-yaml" value="">
                <button type="submit" class="btn-secondary text-xs py-2 px-3" onclick="document.getElementById('simulate-yaml').value=document.getElementById('yaml-editor').value">Simulate</button>
            </form>
            <a href="{{ route('ha-ai.automations.versions', [$project, $automation]) }}" class="btn-secondary text-xs py-2 px-3">Versions</a>
            <button type="button" class="btn-secondary text-xs py-2 px-3" onclick="navigator.clipboard.writeText(document.getElementById('yaml-editor').value); window.haAiToast && haAiToast('Copied YAML')">Copy</button>
            <a href="{{ route('ha-ai.automations.download', [$project, $automation]) }}" class="btn-secondary text-xs py-2 px-3">Download</a>
            <form method="POST" action="{{ route('ha-ai.automations.clone', [$project, $automation]) }}">@csrf<button class="btn-secondary text-xs py-2 px-3">Clone</button></form>
        </div>
    </div>

    @if (! $validation['valid'])
        <div class="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
            <p class="font-semibold mb-1">YAML validation errors</p>
            <ul class="list-disc list-inside">
                @foreach ($validation['errors'] as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    @if ($automation->error_message)
        <div class="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
            {{ $automation->error_message }}
        </div>
    @endif

    <div class="card p-4 space-y-2">
        <h2 class="text-sm font-semibold text-white">Original prompt</h2>
        <p class="text-sm text-surface-300 whitespace-pre-wrap">{{ $automation->prompt }}</p>
    </div>

    <form method="POST" action="{{ route('ha-ai.automations.upload', [$project, $automation]) }}" class="space-y-4" x-data="{ loading: false }" @submit="loading = true">
        @csrf
        <div class="card overflow-hidden">
            <div class="px-4 py-3 border-b border-surface-800 flex items-center justify-between">
                <h2 class="text-sm font-semibold text-white">Generated YAML</h2>
                <span class="text-[11px] text-surface-500">Editable before approve</span>
            </div>
            <textarea
                id="yaml-editor"
                name="yaml"
                rows="22"
                class="w-full bg-surface-950 text-surface-100 font-mono text-xs p-4 border-0 focus:ring-0"
            >{{ old('yaml', $automation->yaml) }}</textarea>
            <pre class="hidden"><code class="language-yaml">{{ $automation->yaml }}</code></pre>
        </div>

        <div class="flex flex-wrap gap-2">
            <button type="submit" class="btn-primary" :disabled="loading || {{ $validation['valid'] ? 'false' : 'true' }}">
                <span x-show="!loading">Approve &amp; Upload</span>
                <span x-cloak x-show="loading">Uploading…</span>
            </button>
        </div>
    </form>

    <form method="POST" action="{{ route('ha-ai.automations.regenerate', [$project, $automation]) }}" class="card p-4 space-y-3" x-data="{ loading: false }" @submit="loading = true">
        @csrf
        <h2 class="text-sm font-semibold text-white">Regenerate</h2>
        @foreach ($automation->selected_map_device_ids ?? [] as $id)
            <input type="hidden" name="map_device_ids[]" value="{{ $id }}">
        @endforeach
        <textarea name="prompt" rows="4" class="input-dark w-full text-sm" required>{{ old('prompt', $automation->prompt) }}</textarea>
        <button class="btn-secondary text-xs py-2 px-3" :disabled="loading">
            <span x-show="!loading">Regenerate with Gemini</span>
            <span x-cloak x-show="loading">Regenerating…</span>
        </button>
    </form>
@endsection
