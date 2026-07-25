<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class SmartComponent extends Model
{
    protected $fillable = [
        'key',
        'name',
        'icon',
        'price',
        'mount',
        'model',
        'sort_order',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'price' => 'decimal:3',
            'sort_order' => 'integer',
            'is_active' => 'boolean',
        ];
    }

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }

    public function scopeOrdered(Builder $query): Builder
    {
        return $query->orderBy('sort_order')->orderBy('name');
    }

    /**
     * Shape used by the map studio catalog.
     *
     * @return array{key: string, name: string, icon: string, price: float, mount: string, model: ?string}
     */
    public function toCatalogItem(): array
    {
        return [
            'key' => $this->key,
            'name' => $this->name,
            'icon' => $this->icon ?: '●',
            'price' => (float) $this->price,
            'mount' => $this->mount ?: 'wall',
            'model' => $this->model,
        ];
    }
}
