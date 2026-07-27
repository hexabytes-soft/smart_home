<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HaScene extends Model
{
    protected $fillable = [
        'entity_id', 'friendly_name', 'state', 'attributes', 'raw',
    ];

    protected function casts(): array
    {
        return [
            'attributes' => 'array',
            'raw' => 'array',
        ];
    }
}
