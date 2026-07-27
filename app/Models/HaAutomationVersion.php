<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class HaAutomationVersion extends Model
{
    protected $fillable = [
        'ha_project_automation_id',
        'user_id',
        'version_number',
        'name',
        'yaml',
        'change_summary',
    ];

    public function automation(): BelongsTo
    {
        return $this->belongsTo(HaProjectAutomation::class, 'ha_project_automation_id');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
