<?php

namespace App\Http\Requests\HaAi;

use Illuminate\Foundation\Http\FormRequest;

class GenerateAutomationRequest extends FormRequest
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
            'map_device_ids' => ['required', 'array', 'min:1'],
            'map_device_ids.*' => ['required', 'string', 'max:120'],
            'prompt' => ['required', 'string', 'min:10', 'max:10000'],
        ];
    }
}
