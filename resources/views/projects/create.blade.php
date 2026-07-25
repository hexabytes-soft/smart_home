<x-app-layout>
    <x-slot name="header">
        <div>
            <h2 class="text-2xl font-bold text-white">New Project</h2>
            <p class="text-sm text-surface-400 mt-0.5">Create a home or building and start designing in 3D</p>
        </div>
    </x-slot>

    <div class="p-4 sm:p-6 lg:p-8">
        <div class="max-w-3xl">
            <div class="card p-6 sm:p-8">
                <p class="text-sm text-surface-400 mb-8">You'll get a starter floor plan with outer walls and a door. Open the 3D editor to add more walls, doors, and rooms.</p>

                <form method="POST" action="{{ route('projects.store') }}" class="space-y-6">
                    @csrf

                    <div>
                        <x-input-label for="name" value="Project name" />
                        <x-text-input id="name" name="name" class="block mt-1.5 w-full" :value="old('name')" required autofocus placeholder="My Smart Home" />
                        <x-input-error :messages="$errors->get('name')" class="mt-2" />
                    </div>

                    <div>
                        <x-input-label for="description" value="Description" />
                        <textarea id="description" name="description" rows="3" class="input-dark block mt-1.5 w-full" placeholder="Optional description…">{{ old('description') }}</textarea>
                        <x-input-error :messages="$errors->get('description')" class="mt-2" />
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div>
                            <x-input-label for="client_name" value="Client name / اسم العميل" />
                            <x-text-input id="client_name" name="client_name" class="block mt-1.5 w-full" :value="old('client_name')" placeholder="Client full name" />
                            <x-input-error :messages="$errors->get('client_name')" class="mt-2" />
                        </div>
                        <div>
                            <x-input-label for="client_phone" value="Client phone / رقم الهاتف" />
                            <x-text-input id="client_phone" name="client_phone" class="block mt-1.5 w-full" :value="old('client_phone')" placeholder="+968 7xxx xxxx" />
                            <x-input-error :messages="$errors->get('client_phone')" class="mt-2" />
                        </div>
                        <div>
                            <x-input-label for="project_location" value="Project location / مكان المشروع" />
                            <x-text-input id="project_location" name="project_location" class="block mt-1.5 w-full" :value="old('project_location')" placeholder="Muscat, …" />
                            <x-input-error :messages="$errors->get('project_location')" class="mt-2" />
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <x-input-label for="type" value="Type" />
                            <select id="type" name="type" class="input-dark block mt-1.5 w-full">
                                @foreach (['home', 'building', 'apartment', 'office'] as $type)
                                    <option value="{{ $type }}" @selected(old('type', 'home') === $type)>{{ ucfirst($type) }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div>
                            <x-input-label for="map_mode" value="Map mode" />
                            <select id="map_mode" name="map_mode" class="input-dark block mt-1.5 w-full">
                                @foreach (['3d' => '3D (recommended)', '2d' => '2D Floorplan', '360' => '360°'] as $value => $label)
                                    <option value="{{ $value }}" @selected(old('map_mode', '3d') === $value)>{{ $label }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div>
                            <x-input-label for="width" value="Width (m)" />
                            <x-text-input id="width" name="width" type="number" min="5" max="200" class="block mt-1.5 w-full" :value="old('width', 20)" required />
                        </div>
                        <div>
                            <x-input-label for="depth" value="Depth (m)" />
                            <x-text-input id="depth" name="depth" type="number" min="5" max="200" class="block mt-1.5 w-full" :value="old('depth', 15)" required />
                        </div>
                        <div>
                            <x-input-label for="floors_count" value="Floors" />
                            <x-text-input id="floors_count" name="floors_count" type="number" min="1" max="50" class="block mt-1.5 w-full" :value="old('floors_count', 1)" required />
                        </div>
                    </div>

                    <div class="flex items-center gap-4 pt-4 border-t border-surface-800">
                        <x-primary-button>Create & open map</x-primary-button>
                        <a href="{{ route('projects.index') }}" class="text-sm text-surface-400 hover:text-white transition-colors">Cancel</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
