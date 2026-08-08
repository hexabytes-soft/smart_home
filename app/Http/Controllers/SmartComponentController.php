<?php

namespace App\Http\Controllers;

use App\Models\SmartComponent;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\View\View;

class SmartComponentController extends Controller
{
    public function index(Request $request): View
    {
        $this->authorize('viewAny', SmartComponent::class);

        $components = SmartComponent::query()
            ->ordered()
            ->when(
                $request->filled('q'),
                fn ($query) => $query->where(function ($q) use ($request) {
                    $term = '%'.$request->string('q').'%';
                    $q->where('name', 'like', $term)
                        ->orWhere('key', 'like', $term)
                        ->orWhere('model', 'like', $term);
                })
            )
            ->paginate(30)
            ->withQueryString();

        return view('smart-components.index', compact('components'));
    }

    public function create(): View
    {
        $this->authorize('create', SmartComponent::class);

        return view('smart-components.create');
    }

    public function store(Request $request): RedirectResponse
    {
        $this->authorize('create', SmartComponent::class);

        $data = $this->validated($request);
        $data['key'] = $this->uniqueKey($data['key'] ?? $data['name']);
        $data['sort_order'] = $data['sort_order'] ?? ((int) SmartComponent::query()->max('sort_order') + 1);

        SmartComponent::query()->create($data);

        return redirect()
            ->route('smart-components.index')
            ->with('status', 'Smart component created.');
    }

    public function edit(SmartComponent $smartComponent): View
    {
        $this->authorize('update', $smartComponent);

        return view('smart-components.edit', ['smartComponent' => $smartComponent]);
    }

    public function update(Request $request, SmartComponent $smartComponent): RedirectResponse
    {
        $this->authorize('update', $smartComponent);

        $data = $this->validated($request, $smartComponent);
        if (! empty($data['key']) && $data['key'] !== $smartComponent->key) {
            $data['key'] = $this->uniqueKey($data['key'], $smartComponent->id);
        } else {
            unset($data['key']);
        }

        $smartComponent->update($data);

        return redirect()
            ->route('smart-components.index')
            ->with('status', 'Smart component updated.');
    }

    public function updatePrice(Request $request, SmartComponent $smartComponent): RedirectResponse
    {
        $this->authorize('update', $smartComponent);

        $validated = $request->validate([
            'price' => ['required', 'numeric', 'min:0', 'max:999999'],
            'buy_price' => ['required', 'numeric', 'min:0', 'max:999999'],
        ]);

        $smartComponent->update([
            'price' => $validated['price'],
            'buy_price' => $validated['buy_price'],
        ]);

        return back()->with('status', "{$smartComponent->name} prices updated.");
    }

    public function destroy(SmartComponent $smartComponent): RedirectResponse
    {
        $this->authorize('delete', $smartComponent);

        $smartComponent->delete();

        return redirect()
            ->route('smart-components.index')
            ->with('status', 'Smart component deleted.');
    }

    /**
     * @return array<string, mixed>
     */
    protected function validated(Request $request, ?SmartComponent $existing = null): array
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:120'],
            'key' => ['nullable', 'string', 'max:80', 'regex:/^[a-z0-9_]*$/'],
            'icon' => ['nullable', 'string', 'max:64'],
            'price' => ['required', 'numeric', 'min:0', 'max:999999'],
            'buy_price' => ['required', 'numeric', 'min:0', 'max:999999'],
            'unit' => ['required', 'in:piece,meter'],
            'mount' => ['required', 'in:ceiling,wall,floor,door'],
            'model' => ['nullable', 'string', 'max:120'],
            'sort_order' => ['nullable', 'integer', 'min:0', 'max:9999'],
            'is_active' => ['sometimes', 'boolean'],
        ]);

        if (($data['key'] ?? '') === '') {
            unset($data['key']);
        }

        $data['icon'] = ($data['icon'] ?? '') !== '' ? $data['icon'] : '●';
        $data['is_active'] = $request->boolean('is_active', $existing?->is_active ?? true);
        $data['sort_order'] = isset($data['sort_order']) ? (int) $data['sort_order'] : ($existing?->sort_order ?? 0);

        return $data;
    }

    protected function uniqueKey(string $source, ?int $ignoreId = null): string
    {
        $base = Str::slug($source, '_');
        $base = preg_replace('/[^a-z0-9_]/', '', strtolower($base ?: 'component')) ?: 'component';
        $key = $base;
        $i = 1;

        while (
            SmartComponent::query()
                ->when($ignoreId, fn ($q) => $q->where('id', '!=', $ignoreId))
                ->where('key', $key)
                ->exists()
        ) {
            $key = "{$base}_{$i}";
            $i++;
        }

        return $key;
    }
}
