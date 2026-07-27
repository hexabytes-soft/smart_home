<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HaLabel extends Model
{
    protected $fillable = [
        'ha_id', 'name', 'color', 'icon', 'description', 'raw',
    ];

    protected function casts(): array
    {
        return [
            'raw' => 'array',
        ];
    }
}
