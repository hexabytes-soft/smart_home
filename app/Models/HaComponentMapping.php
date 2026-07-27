<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class HaComponentMapping extends Model
{
    protected $fillable = [
        'project_id',
        'map_device_id',
        'component_key',
        'entity_id',
        'room_name',
    ];

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    public function entity(): BelongsTo
    {
        return $this->belongsTo(HaEntity::class, 'entity_id', 'entity_id');
    }
}
