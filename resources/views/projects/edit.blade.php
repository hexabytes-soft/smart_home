<x-app-layout>
    <x-slot name="header">
        <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="min-w-0">
                <div class="flex items-center gap-2 text-xs text-surface-500 mb-1">
                    <a href="{{ route('projects.show', $project) }}" class="hover:text-brand-300 transition-colors truncate">{{ $project->name }}</a>
                    <span>/</span>
                    <span class="text-surface-400">Edit</span>
                </div>
                <h2 class="text-2xl font-bold text-white">Edit project</h2>
                <p class="text-sm text-surface-400 mt-0.5">Update title, client info, and map settings</p>
            </div>
            <a href="{{ route('projects.show', $project) }}" class="btn-secondary text-xs">Back to details</a>
        </div>
    </x-slot>

    <div class="p-4 sm:p-6 lg:p-8">
        <div class="max-w-3xl space-y-6">
            @if ($errors->any())
                <div class="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm">
                    Please fix the highlighted fields.
                </div>
            @endif

            <form method="POST" action="{{ route('projects.update', $project) }}" class="card p-6 sm:p-8 space-y-8">
                @csrf
                @method('PUT')

                <section class="space-y-5">
                    <div>
                        <h3 class="text-sm font-semibold text-white">Title & description</h3>
                        <p class="text-xs text-surface-500 mt-1">The project name appears in the studio, invoices, and share links.</p>
                    </div>

                    <div>
                        <x-input-label for="name" value="Project title / name" />
                        <x-text-input
                            id="name"
                            name="name"
                            class="block mt-1.5 w-full text-lg font-semibold"
                            :value="old('name', $project->name)"
                            required
                            autofocus
                            placeholder="Villa Al Mouj"
                        />
                        <x-input-error :messages="$errors->get('name')" class="mt-2" />
                    </div>

                    <div>
                        <x-input-label for="description" value="Description" />
                        <textarea id="description" name="description" rows="3" class="input-dark block mt-1.5 w-full" placeholder="Optional notes about the project…">{{ old('description', $project->description) }}</textarea>
                        <x-input-error :messages="$errors->get('description')" class="mt-2" />
                    </div>
                </section>

                <section class="space-y-5 pt-2 border-t border-surface-800">
                    <div>
                        <h3 class="text-sm font-semibold text-white">Client details</h3>
                        <p class="text-xs text-surface-500 mt-1">Used on quotations / invoices.</p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div>
                            <x-input-label for="client_name" value="Client name / اسم العميل" />
                            <x-text-input id="client_name" name="client_name" class="block mt-1.5 w-full" :value="old('client_name', $project->client_name)" />
                            <x-input-error :messages="$errors->get('client_name')" class="mt-2" />
                        </div>
                        <div>
                            <x-input-label for="client_phone" value="Client phone / رقم الهاتف" />
                            <x-text-input id="client_phone" name="client_phone" class="block mt-1.5 w-full" :value="old('client_phone', $project->client_phone)" placeholder="+968 …" />
                            <x-input-error :messages="$errors->get('client_phone')" class="mt-2" />
                        </div>
                        <div>
                            <x-input-label for="project_location" value="Project location / مكان المشروع" />
                            <x-text-input id="project_location" name="project_location" class="block mt-1.5 w-full" :value="old('project_location', $project->project_location)" />
                            <x-input-error :messages="$errors->get('project_location')" class="mt-2" />
                        </div>
                    </div>
                </section>

                <section class="space-y-5 pt-2 border-t border-surface-800">
                    <div>
                        <h3 class="text-sm font-semibold text-white">Project settings</h3>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div>
                            <x-input-label for="type" value="Type" />
                            <select id="type" name="type" class="input-dark block mt-1.5 w-full">
                                @foreach (['home', 'building', 'apartment', 'office'] as $type)
                                    <option value="{{ $type }}" @selected(old('type', $project->type) === $type)>{{ ucfirst($type) }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div>
                            <x-input-label for="status" value="Status" />
                            <select id="status" name="status" class="input-dark block mt-1.5 w-full">
                                @foreach (['draft', 'published', 'archived'] as $status)
                                    <option value="{{ $status }}" @selected(old('status', $project->status) === $status)>{{ ucfirst($status) }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div>
                            <x-input-label for="map_mode" value="Map mode" />
                            <select id="map_mode" name="map_mode" class="input-dark block mt-1.5 w-full">
                                @foreach (['3d' => '3D', '2d' => '2D', '360' => '360°'] as $value => $label)
                                    <option value="{{ $value }}" @selected(old('map_mode', $project->map_mode) === $value)>{{ $label }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div>
                            <x-input-label for="width" value="Width (m)" />
                            <x-text-input id="width" name="width" type="number" min="5" max="200" class="block mt-1.5 w-full" :value="old('width', $project->width)" required />
                        </div>
                        <div>
                            <x-input-label for="depth" value="Depth (m)" />
                            <x-text-input id="depth" name="depth" type="number" min="5" max="200" class="block mt-1.5 w-full" :value="old('depth', $project->depth)" required />
                        </div>
                        <div>
                            <x-input-label for="floors_count" value="Floors" />
                            <x-text-input id="floors_count" name="floors_count" type="number" min="1" max="50" class="block mt-1.5 w-full" :value="old('floors_count', $project->floors_count)" required />
                        </div>
                    </div>
                </section>

                <div class="flex flex-wrap items-center gap-3 pt-4 border-t border-surface-800">
                    <x-primary-button>Save changes</x-primary-button>
                    <a href="{{ route('projects.show', $project) }}" class="text-sm text-surface-400 hover:text-white transition-colors">Cancel</a>
                </div>
            </form>

            @can('delete', $project)
                <form method="POST" action="{{ route('projects.destroy', $project) }}" class="card p-5 border-rose-500/20" onsubmit="return confirm('Delete this project permanently?')">
                    @csrf
                    @method('DELETE')
                    <div class="flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <p class="text-sm font-semibold text-rose-300">Danger zone</p>
                            <p class="text-xs text-surface-500 mt-0.5">This permanently deletes the project and its map data.</p>
                        </div>
                        <x-danger-button>Delete project</x-danger-button>
                    </div>
                </form>
            @endcan
        </div>
    </div>
</x-app-layout>
