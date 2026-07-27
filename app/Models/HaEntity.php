<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HaEntity extends Model
{
    protected $fillable = [
        'entity_id',
        'domain',
        'friendly_name',
        'platform',
        'device_id',
        'area_id',
        'state',
        'attributes',
        'labels',
        'disabled',
        'raw',
        'state_changed_at',
    ];

    protected function casts(): array
    {
        return [
            'attributes' => 'array',
            'labels' => 'array',
            'raw' => 'array',
            'disabled' => 'boolean',
            'state_changed_at' => 'datetime',
        ];
    }
}
