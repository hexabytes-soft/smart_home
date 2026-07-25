<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;

class ImportFloorPlanRequest extends FormRequest
{
    private const ALLOWED_MIMES = [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/webp',
        'image/gif',
        'application/pdf',
    ];

    private const ALLOWED_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'pdf'];

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
            'images' => ['nullable', 'array', 'max:20'],
            'images.*' => ['file', 'max:20480'],
            'image' => ['nullable', 'file', 'max:20480'],
            'floor_names' => ['nullable', 'array', 'max:20'],
            'floor_names.*' => ['nullable', 'string', 'max:80'],
            'overall_width' => ['nullable', 'numeric', 'min:2', 'max:120'],
            'overall_depth' => ['nullable', 'numeric', 'min:2', 'max:120'],
            'wall_height' => ['nullable', 'numeric', 'min:2', 'max:6'],
            'notes' => ['nullable', 'string', 'max:1000'],
            'apply' => ['nullable', 'boolean'],
        ];
    }

    public function withValidator(Validator $validator): void
    {
        $validator->after(function (Validator $validator): void {
            $files = $this->planImages();

            if ($files === []) {
                $validator->errors()->add('images', 'Upload at least one floor plan image or PDF.');

                return;
            }

            foreach ($files as $index => $file) {
                if (! $this->isAllowedPlanFile($file)) {
                    $validator->errors()->add(
                        "images.{$index}",
                        'Each file must be a JPEG, PNG, WebP, GIF image, or PDF floor plan.'
                    );
                }
            }
        });
    }

    /**
     * @return list<\Illuminate\Http\UploadedFile>
     */
    public function planImages(): array
    {
        $images = $this->file('images', []);
        if (! is_array($images)) {
            $images = [];
        }

        $images = array_values(array_filter($images));

        if ($images === [] && $this->hasFile('image')) {
            return [$this->file('image')];
        }

        return $images;
    }

    protected function isAllowedPlanFile(\Illuminate\Http\UploadedFile $file): bool
    {
        $mime = strtolower((string) $file->getMimeType());
        $ext = strtolower((string) $file->getClientOriginalExtension());

        if (in_array($mime, self::ALLOWED_MIMES, true)) {
            return true;
        }

        return in_array($ext, self::ALLOWED_EXTENSIONS, true);
    }
}
