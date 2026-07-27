<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class HaProjectKnowledge extends Model
{
    protected $table = 'ha_project_knowledge';

    protected $fillable = [
        'project_id',
        'house_description',
        'customer_preferences',
        'device_naming_conventions',
        'automation_rules',
        'preferred_behaviors',
        'notes',
        'constraints',
        'installed_integrations',
        'network_protocols',
        'esphome_devices',
        'energy_preferences',
        'security_preferences',
    ];

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    public static function fieldLabels(): array
    {
        return [
            'house_description' => 'House description',
            'customer_preferences' => 'Customer preferences',
            'device_naming_conventions' => 'Device naming conventions',
            'automation_rules' => 'Automation rules',
            'preferred_behaviors' => 'Preferred behaviors',
            'notes' => 'Notes',
            'constraints' => 'Constraints',
            'installed_integrations' => 'Installed integrations',
            'network_protocols' => 'Zigbee / Z-Wave / WiFi information',
            'esphome_devices' => 'ESPHome devices',
            'energy_preferences' => 'Energy preferences',
            'security_preferences' => 'Security preferences',
        ];
    }

    /**
     * @return array<string, string>
     */
    public function toAiContext(): array
    {
        $context = [];
        foreach (array_keys(self::fieldLabels()) as $field) {
            $value = trim((string) ($this->{$field} ?? ''));
            if ($value !== '') {
                $context[$field] = $value;
            }
        }

        return $context;
    }

    public function isEmpty(): bool
    {
        return $this->toAiContext() === [];
    }
}
