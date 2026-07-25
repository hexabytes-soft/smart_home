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
    ];

    protected function casts(): array
    {
        return [
            'buy_price' => 'decimal:2',
            'sell_price' => 'decimal:2',
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

    public function primaryImageUrl(): ?string
    {
        $path = $this->imagePaths()[0] ?? null;

        return $path ? $this->imageUrl($path) : null;
    }

    /**
     * @return list<string>
     */
    public function imageUrls(): array
    {
        return array_map(
            fn (string $path) => $this->imageUrl($path),
            $this->imagePaths()
        );
    }
}
