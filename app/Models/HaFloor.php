<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HaFloor extends Model
{
    protected $fillable = [
        'ha_id', 'name', 'level', 'icon', 'aliases', 'raw',
    ];

    protected function casts(): array
    {
        return [
            'level' => 'integer',
            'aliases' => 'array',
            'raw' => 'array',
        ];
    }
}
