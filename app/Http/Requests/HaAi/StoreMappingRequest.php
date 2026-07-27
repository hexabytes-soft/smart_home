<?php

namespace App\Http\Requests\HaAi;

use Illuminate\Foundation\Http\FormRequest;

class StoreMappingRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user() !== null;
    }

    /**
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'map_device_id' => ['required', 'string', 'max:120'],
            'entity_id' => ['required', 'string', 'max:255', 'regex:/^[a-z0-9_]+\.[a-z0-9_]+$/i'],
        ];
    }
}
