<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\View;

class ProductController extends Controller
{
    public function index(Request $request): View
    {
        $this->authorize('viewAny', Product::class);

        $products = Product::query()
            ->when(
                $request->filled('q'),
                fn ($query) => $query->where('title', 'like', '%'.$request->string('q').'%')
            )
            ->latest()
            ->paginate(12)
            ->withQueryString();

        return view('products.index', compact('products'));
    }

    public function create(): View
    {
        $this->authorize('create', Product::class);

        return view('products.create');
    }

    public function store(StoreProductRequest $request): RedirectResponse
    {
        $data = $request->safe()->only(['title', 'description', 'buy_price', 'sell_price']);
        $images = $this->storeImages($request->file('images'));
        $data['images'] = $images !== [] ? $images : null;

        if ($images !== []) {
            $index = (int) $request->input('thumbnail_index', 0);
            if ($index < 0 || $index >= count($images)) {
                $index = 0;
            }
            $data['thumbnail'] = $images[$index];
        }

        $product = Product::query()->create($data);

        return redirect()
            ->route('products.show', $product)
            ->with('status', 'Product created.');
    }

    public function show(Product $product): View
    {
        $this->authorize('view', $product);

        return view('products.show', compact('product'));
    }

    public function edit(Product $product): View
    {
        $this->authorize('update', $product);

        return view('products.edit', compact('product'));
    }

    public function update(UpdateProductRequest $request, Product $product): RedirectResponse
    {
        $data = $request->safe()->only(['title', 'description', 'buy_price', 'sell_price']);

        $paths = $product->imagePaths();
        $remove = array_values(array_filter((array) $request->input('remove_images', [])));

        if ($remove !== []) {
            $paths = array_values(array_filter(
                $paths,
                fn (string $path) => ! in_array($path, $remove, true)
            ));
            foreach ($remove as $path) {
                Storage::disk('public')->delete($path);
            }
        }

        $paths = array_merge($paths, $this->storeImages($request->file('images')));
        $data['images'] = $paths !== [] ? $paths : null;

        $chosen = $request->input('thumbnail');
        if (is_string($chosen) && $chosen !== '' && in_array($chosen, $paths, true)) {
            $data['thumbnail'] = $chosen;
        } elseif ($paths === []) {
            $data['thumbnail'] = null;
        } elseif (! in_array((string) $product->thumbnail, $paths, true)) {
            $data['thumbnail'] = $paths[0];
        }

        $product->update($data);

        return redirect()
            ->route('products.show', $product)
            ->with('status', 'Product updated.');
    }

    public function destroy(Product $product): RedirectResponse
    {
        $this->authorize('delete', $product);

        foreach ($product->imagePaths() as $path) {
            Storage::disk('public')->delete($path);
        }

        $product->delete();

        return redirect()
            ->route('products.index')
            ->with('status', 'Product deleted.');
    }

    /**
     * @param  array<int, UploadedFile>|UploadedFile|null  $files
     * @return list<string>
     */
    protected function storeImages(array|UploadedFile|null $files): array
    {
        if ($files instanceof UploadedFile) {
            $files = [$files];
        }

        $paths = [];

        foreach (array_values(array_filter($files ?? [])) as $file) {
            if (! $file instanceof UploadedFile || ! $file->isValid()) {
                continue;
            }
            $paths[] = $file->store('products', 'public');
        }

        return $paths;
    }
}
