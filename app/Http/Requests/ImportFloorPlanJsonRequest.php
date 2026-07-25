<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;

class ImportFloorPlanJsonRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()?->can('editMap', $this->route('project')) ?? false;
    }

    /**
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'json' => ['required', 'string', 'min:2', 'max:5000000'],
            'overall_width' => ['nullable', 'numeric', 'min:2', 'max:120'],
            'overall_depth' => ['nullable', 'numeric', 'min:2', 'max:120'],
            'wall_height' => ['nullable', 'numeric', 'min:2', 'max:6'],
            'apply' => ['nullable', 'boolean'],
        ];
    }

    public function withValidator(Validator $validator): void
    {
        $validator->after(function (Validator $validator): void {
            if ($this->decodedPayload() === null) {
                $validator->errors()->add('json', 'Paste valid JSON from Gemini (must include a floors array).');
            }
        });
    }

    /**
     * @return array<string, mixed>|null
     */
    public function decodedPayload(): ?array
    {
        $raw = trim((string) $this->input('json', ''));
        if ($raw === '') {
            return null;
        }

        // Strip markdown fences if the user pasted ```json ... ```
        if (preg_match('/```(?:json)?\s*(\{.*\})\s*```/s', $raw, $matches)) {
            $raw = $matches[1];
        }

        $decoded = json_decode($raw, true);
        if (! is_array($decoded)) {
            // Try to salvage first { ... } block
            if (preg_match('/\{.*\}/s', $raw, $matches)) {
                $decoded = json_decode($matches[0], true);
            }
        }

        if (! is_array($decoded)) {
            return null;
        }

        if (! isset($decoded['floors']) || ! is_array($decoded['floors'])) {
            return null;
        }

        return $decoded;
    }
}
