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
        'buy_price',
        'unit',
        'mount',
        'model',
        'sort_order',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'price' => 'decimal:3',
            'buy_price' => 'decimal:3',
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
     * @return array{key: string, name: string, icon: string, price: float, buy_price: float, unit: string, mount: string, model: ?string}
     */
    public function toCatalogItem(): array
    {
        return [
            'key' => $this->key,
            'name' => $this->name,
            'icon' => $this->icon ?: '●',
            'price' => (float) $this->price,
            'buy_price' => (float) $this->buy_price,
            'unit' => $this->unit ?: 'piece',
            'mount' => $this->mount ?: 'wall',
            'model' => $this->model,
        ];
    }
}
