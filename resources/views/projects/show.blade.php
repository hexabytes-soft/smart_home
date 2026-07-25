<x-app-layout>
    <x-slot name="header">
        <div class="flex items-center justify-between">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">{{ $project->name }}</h2>
            <div class="flex gap-2">
                <a href="{{ route('projects.map', $project) }}" class="inline-flex items-center px-4 py-2 bg-slate-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-slate-700">Open map</a>
                @can('update', $project)
                    <a href="{{ route('projects.edit', $project) }}" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest hover:bg-gray-50">Edit</a>
                @endcan
            </div>
        </div>
    </x-slot>

    <div class="py-8">
        <div class="max-w-4xl mx-auto sm:px-6 lg:px-8 space-y-6">
            @if (session('status'))
                <div class="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-md">{{ session('status') }}</div>
            @endif

            <div class="bg-white shadow-sm sm:rounded-lg p-6 space-y-4">
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                    <div>
                        <p class="text-gray-500">Type</p>
                        <p class="font-medium capitalize">{{ $project->type }}</p>
                    </div>
                    <div>
                        <p class="text-gray-500">Status</p>
                        <p class="font-medium capitalize">{{ $project->status }}</p>
                    </div>
                    <div>
                        <p class="text-gray-500">Map mode</p>
                        <p class="font-medium uppercase">{{ $project->map_mode }}</p>
                    </div>
                    <div>
                        <p class="text-gray-500">Size</p>
                        <p class="font-medium">{{ $project->width }}×{{ $project->depth }} m · {{ $project->floors_count }} floor(s)</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div>
                        <p class="text-gray-500">Client / اسم العميل</p>
                        <p class="mt-1 text-gray-800">{{ $project->client_name ?: '—' }}</p>
                    </div>
                    <div>
                        <p class="text-gray-500">Phone / رقم الهاتف</p>
                        <p class="mt-1 text-gray-800">{{ $project->client_phone ?: '—' }}</p>
                    </div>
                    <div>
                        <p class="text-gray-500">Location / مكان المشروع</p>
                        <p class="mt-1 text-gray-800">{{ $project->project_location ?: '—' }}</p>
                    </div>
                </div>
                <div>
                    <p class="text-gray-500 text-sm">Description</p>
                    <p class="mt-1 text-gray-800">{{ $project->description ?: '—' }}</p>
                </div>
                <div>
                    <p class="text-gray-500 text-sm">Owner</p>
                    <p class="mt-1 text-gray-800">{{ $project->owner->name }}</p>
                </div>
            </div>

            @can('update', $project)
                @include('projects.partials.share-settings', ['project' => $project])
            @endcan

            <div class="bg-white shadow-sm sm:rounded-lg p-6">
                <h3 class="font-medium text-gray-900 mb-2">Map data preview</h3>
                <p class="text-sm text-gray-500 mb-3">Stored as JSON — walls, doors, rooms, and (later) smart components.</p>
                <pre class="text-xs bg-slate-50 border border-slate-200 rounded-md p-4 overflow-auto max-h-80">{{ json_encode($project->map_data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) }}</pre>
            </div>
        </div>
    </div>
</x-app-layout>
