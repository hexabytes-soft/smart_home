<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'title',
        'description',
        'buy_price',
        'sell_price',
        'images',
        'thumbnail',
    ];

    protected function casts(): array
    {
        return [
            'buy_price' => 'decimal:3',
            'sell_price' => 'decimal:3',
            'images' => 'array',
        ];
    }

    /**
     * @return list<string>
     */
    public function imagePaths(): array
    {
        return array_values(array_filter((array) ($this->images ?? [])));
    }

    /**
     * Image paths with the selected thumbnail first (for galleries).
     *
     * @return list<string>
     */
    public function orderedImagePaths(): array
    {
        $paths = $this->imagePaths();
        $thumb = $this->thumbnailPath();
        if (! $thumb || count($paths) < 2) {
            return $paths;
        }

        return array_values(array_unique(array_merge([$thumb], $paths)));
    }

    /**
     * Absolute public URL for a stored image path.
     * Uses the current request host/port in local (e.g. http://127.0.0.1:8000),
     * and APP_URL / ASSET_URL in production.
     */
    public function imageUrl(string $path): string
    {
        $path = ltrim($path, '/');
        if (str_starts_with($path, 'storage/')) {
            return asset($path);
        }

        return asset('storage/'.$path);
    }

    public function thumbnailPath(): ?string
    {
        $paths = $this->imagePaths();
        if ($paths === []) {
            return null;
        }

        $thumbnail = $this->thumbnail;
        if (is_string($thumbnail) && $thumbnail !== '' && in_array($thumbnail, $paths, true)) {
            return $thumbnail;
        }

        return $paths[0];
    }

    public function primaryImageUrl(): ?string
    {
        $path = $this->thumbnailPath();

        return $path ? $this->imageUrl($path) : null;
    }

    public function isThumbnail(string $path): bool
    {
        return $this->thumbnailPath() === $path;
    }

    /**
     * @return list<string>
     */
    public function imageUrls(): array
    {
        return array_map(
            fn (string $path) => $this->imageUrl($path),
            $this->orderedImagePaths()
        );
    }
}
