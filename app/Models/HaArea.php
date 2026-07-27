<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HaArea extends Model
{
    protected $fillable = [
        'ha_id', 'name', 'floor_id', 'icon', 'aliases', 'labels', 'raw',
    ];

    protected function casts(): array
    {
        return [
            'aliases' => 'array',
            'labels' => 'array',
            'raw' => 'array',
        ];
    }
}
