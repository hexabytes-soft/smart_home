<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HaAutomationRemote extends Model
{
    protected $table = 'ha_automations_remote';

    protected $fillable = [
        'entity_id', 'friendly_name', 'state', 'ha_automation_id', 'attributes', 'raw',
    ];

    protected function casts(): array
    {
        return [
            'attributes' => 'array',
            'raw' => 'array',
        ];
    }
}
