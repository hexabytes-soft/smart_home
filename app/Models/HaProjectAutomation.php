<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class HaProjectAutomation extends Model
{
    public const STATUS_DRAFT = 'draft';

    public const STATUS_GENERATED = 'generated';

    public const STATUS_UPLOADED = 'uploaded';

    public const STATUS_FAILED = 'failed';

    protected $fillable = [
        'project_id',
        'user_id',
        'name',
        'description',
        'status',
        'selected_map_device_ids',
        'prompt',
        'yaml',
        'ha_automation_id',
        'error_message',
        'uploaded_at',
    ];

    protected function casts(): array
    {
        return [
            'selected_map_device_ids' => 'array',
            'uploaded_at' => 'datetime',
        ];
    }

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
