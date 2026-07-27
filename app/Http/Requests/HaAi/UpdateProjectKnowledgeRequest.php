<?php

namespace App\Http\Requests\HaAi;

use App\Models\HaProjectKnowledge;
use Illuminate\Foundation\Http\FormRequest;

class UpdateProjectKnowledgeRequest extends FormRequest
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
        $rules = [];
        foreach (array_keys(HaProjectKnowledge::fieldLabels()) as $field) {
            $rules[$field] = ['nullable', 'string', 'max:20000'];
        }

        return $rules;
    }
}
