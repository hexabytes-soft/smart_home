<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\View\View;

class StorefrontController extends Controller
{
    public function index(Request $request): View
    {
        $products = Product::query()
            ->when(
                $request->filled('q'),
                fn ($query) => $query->where(function ($inner) use ($request) {
                    $term = '%'.$request->string('q').'%';
                    $inner->where('title', 'like', $term)
                        ->orWhere('description', 'like', $term);
                })
            )
            ->latest()
            ->paginate(12)
            ->withQueryString();

        return view('storefront.index', [
            'products' => $products,
            'query' => (string) $request->string('q'),
            'featured' => Product::query()->latest()->take(1)->first(),
        ]);
    }

    public function show(Product $product): View
    {
        $related = Product::query()
            ->where('id', '!=', $product->id)
            ->latest()
            ->take(4)
            ->get();

        return view('storefront.show', compact('product', 'related'));
    }
}
