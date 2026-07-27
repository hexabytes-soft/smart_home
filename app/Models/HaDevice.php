<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HaDevice extends Model
{
    protected $fillable = [
        'ha_id', 'name', 'name_by_user', 'manufacturer', 'model', 'area_id', 'labels', 'raw',
    ];

    protected function casts(): array
    {
        return [
            'labels' => 'array',
            'raw' => 'array',
        ];
    }

    public function displayName(): string
    {
        return $this->name_by_user ?: $this->name ?: $this->ha_id;
    }
}
