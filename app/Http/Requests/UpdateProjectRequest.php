<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateProjectRequest extends FormRequest
{
    public function authorize(): bool
    {
        $project = $this->route('project');

        return $this->user()?->can('update', $project) ?? false;
    }

    /**
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:120'],
            'description' => ['nullable', 'string', 'max:2000'],
            'type' => ['required', Rule::in(['home', 'building', 'apartment', 'office'])],
            'status' => ['required', Rule::in(['draft', 'published', 'archived'])],
            'map_mode' => ['required', Rule::in(['2d', '3d', '360'])],
            'width' => ['required', 'integer', 'min:5', 'max:200'],
            'depth' => ['required', 'integer', 'min:5', 'max:200'],
            'floors_count' => ['required', 'integer', 'min:1', 'max:50'],
        ];
    }
}
