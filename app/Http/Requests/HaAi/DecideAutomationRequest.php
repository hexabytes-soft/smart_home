<?php

namespace App\Http\Requests\HaAi;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class DecideAutomationRequest extends FormRequest
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
            'action' => ['required', Rule::in(['modify', 'create_new', 'reuse'])],
        ];
    }
}
