<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">Edit · {{ $project->name }}</h2>
    </x-slot>

    <div class="py-8">
        <div class="max-w-3xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white shadow-sm sm:rounded-lg p-6">
                <form method="POST" action="{{ route('projects.update', $project) }}" class="space-y-5">
                    @csrf
                    @method('PUT')

                    <div>
                        <x-input-label for="name" value="Name" />
                        <x-text-input id="name" name="name" class="block mt-1 w-full" :value="old('name', $project->name)" required />
                        <x-input-error :messages="$errors->get('name')" class="mt-2" />
                    </div>

                    <div>
                        <x-input-label for="description" value="Description" />
                        <textarea id="description" name="description" rows="3" class="block mt-1 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">{{ old('description', $project->description) }}</textarea>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <x-input-label for="client_name" value="Client name / اسم العميل" />
                            <x-text-input id="client_name" name="client_name" class="block mt-1 w-full" :value="old('client_name', $project->client_name)" />
                            <x-input-error :messages="$errors->get('client_name')" class="mt-2" />
                        </div>
                        <div>
                            <x-input-label for="client_phone" value="Client phone / رقم الهاتف" />
                            <x-text-input id="client_phone" name="client_phone" class="block mt-1 w-full" :value="old('client_phone', $project->client_phone)" />
                            <x-input-error :messages="$errors->get('client_phone')" class="mt-2" />
                        </div>
                        <div>
                            <x-input-label for="project_location" value="Project location / مكان المشروع" />
                            <x-text-input id="project_location" name="project_location" class="block mt-1 w-full" :value="old('project_location', $project->project_location)" />
                            <x-input-error :messages="$errors->get('project_location')" class="mt-2" />
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <x-input-label for="type" value="Type" />
                            <select id="type" name="type" class="block mt-1 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                                @foreach (['home', 'building', 'apartment', 'office'] as $type)
                                    <option value="{{ $type }}" @selected(old('type', $project->type) === $type)>{{ ucfirst($type) }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div>
                            <x-input-label for="status" value="Status" />
                            <select id="status" name="status" class="block mt-1 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                                @foreach (['draft', 'published', 'archived'] as $status)
                                    <option value="{{ $status }}" @selected(old('status', $project->status) === $status)>{{ ucfirst($status) }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div>
                            <x-input-label for="map_mode" value="Map mode" />
                            <select id="map_mode" name="map_mode" class="block mt-1 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                                @foreach (['3d' => '3D', '2d' => '2D', '360' => '360°'] as $value => $label)
                                    <option value="{{ $value }}" @selected(old('map_mode', $project->map_mode) === $value)>{{ $label }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <x-input-label for="width" value="Width (m)" />
                            <x-text-input id="width" name="width" type="number" min="5" max="200" class="block mt-1 w-full" :value="old('width', $project->width)" required />
                        </div>
                        <div>
                            <x-input-label for="depth" value="Depth (m)" />
                            <x-text-input id="depth" name="depth" type="number" min="5" max="200" class="block mt-1 w-full" :value="old('depth', $project->depth)" required />
                        </div>
                        <div>
                            <x-input-label for="floors_count" value="Floors" />
                            <x-text-input id="floors_count" name="floors_count" type="number" min="1" max="50" class="block mt-1 w-full" :value="old('floors_count', $project->floors_count)" required />
                        </div>
                    </div>

                    <div class="flex items-center justify-between pt-2">
                        <div class="flex items-center gap-3">
                            <x-primary-button>Save</x-primary-button>
                            <a href="{{ route('projects.show', $project) }}" class="text-sm text-gray-600 hover:text-gray-900">Cancel</a>
                        </div>
                    </div>
                </form>

                @can('delete', $project)
                    <form method="POST" action="{{ route('projects.destroy', $project) }}" class="mt-8 pt-6 border-t border-gray-100" onsubmit="return confirm('Delete this project?')">
                        @csrf
                        @method('DELETE')
                        <x-danger-button>Delete project</x-danger-button>
                    </form>
                @endcan
            </div>
        </div>
    </div>
</x-app-layout>
