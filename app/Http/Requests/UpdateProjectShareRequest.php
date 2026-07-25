<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProjectShareRequest extends FormRequest
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
            'share_enabled' => ['sometimes', 'boolean'],
            'share_password' => ['nullable', 'string', 'min:4', 'max:64'],
            'regenerate_token' => ['sometimes', 'boolean'],
        ];
    }
}
