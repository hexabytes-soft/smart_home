<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HaSyncRun extends Model
{
    protected $fillable = [
        'status',
        'devices_count',
        'entities_count',
        'areas_count',
        'floors_count',
        'labels_count',
        'scripts_count',
        'scenes_count',
        'automations_count',
        'error_message',
        'started_at',
        'finished_at',
    ];

    protected function casts(): array
    {
        return [
            'started_at' => 'datetime',
            'finished_at' => 'datetime',
        ];
    }
}
