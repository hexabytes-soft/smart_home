<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreProjectRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()?->can('projects.create') ?? false;
    }

    /**
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:120'],
            'description' => ['nullable', 'string', 'max:2000'],
            'client_name' => ['nullable', 'string', 'max:120'],
            'client_phone' => ['nullable', 'string', 'max:40'],
            'project_location' => ['nullable', 'string', 'max:255'],
            'type' => ['required', Rule::in(['home', 'building', 'apartment', 'office'])],
            'map_mode' => ['required', Rule::in(['2d', '3d', '360'])],
            'width' => ['required', 'integer', 'min:5', 'max:200'],
            'depth' => ['required', 'integer', 'min:5', 'max:200'],
            'floors_count' => ['required', 'integer', 'min:1', 'max:50'],
        ];
    }
}
