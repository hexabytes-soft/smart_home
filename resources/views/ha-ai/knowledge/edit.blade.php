@extends('layouts.ha-ai')

@section('title', 'Project Knowledge')

@section('content')
    <div>
        <h1 class="text-xl font-bold text-white">Project knowledge</h1>
        <p class="text-sm text-surface-400 mt-1">
            Permanent AI memory for this project. Included automatically in every Gemini analysis and generation.
        </p>
    </div>

    <form method="POST" action="{{ route('ha-ai.knowledge.update', $project) }}" class="space-y-4">
        @csrf
        @method('PUT')

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            @foreach (\App\Models\HaProjectKnowledge::fieldLabels() as $field => $label)
                <div class="card p-4 space-y-2 {{ in_array($field, ['house_description', 'notes', 'constraints'], true) ? 'lg:col-span-2' : '' }}">
                    <label for="{{ $field }}" class="block text-sm font-semibold text-white">{{ $label }}</label>
                    <textarea
                        id="{{ $field }}"
                        name="{{ $field }}"
                        rows="{{ in_array($field, ['house_description', 'notes', 'constraints', 'automation_rules'], true) ? 5 : 3 }}"
                        class="input-dark w-full text-sm leading-relaxed"
                        placeholder="Optional — leave blank if not needed"
                    >{{ old($field, $knowledge->{$field}) }}</textarea>
                    @error($field)
                        <p class="text-xs text-rose-400">{{ $message }}</p>
                    @enderror
                </div>
            @endforeach
        </div>

        <div class="flex flex-wrap items-center justify-between gap-3">
            <p class="text-xs text-surface-500">
                Tip: write clear conventions (e.g. “lights turn off after 10 minutes of no motion at night”).
            </p>
            <button type="submit" class="btn-primary text-xs py-2.5 px-4">Save knowledge</button>
        </div>
    </form>
@endsection
