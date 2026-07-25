<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()?->can('products.update') ?? false;
    }

    /**
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:180'],
            'description' => ['nullable', 'string', 'max:5000'],
            'buy_price' => ['nullable', 'numeric', 'min:0', 'max:99999999.99'],
            'sell_price' => ['nullable', 'numeric', 'min:0', 'max:99999999.99'],
            'images' => ['nullable', 'array'],
            'images.*' => ['image', 'mimes:jpeg,jpg,png,webp,gif', 'max:5120'],
            'remove_images' => ['nullable', 'array'],
            'remove_images.*' => ['string', 'max:255'],
        ];
    }
}
