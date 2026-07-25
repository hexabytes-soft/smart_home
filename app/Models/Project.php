<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;

class Project extends Model
{
    /** @use HasFactory<\Database\Factories\ProjectFactory> */
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
        'slug',
        'description',
        'type',
        'status',
        'map_mode',
        'width',
        'depth',
        'floors_count',
        'map_data',
        'thumbnail_path',
        'share_token',
        'share_password',
        'share_enabled',
    ];

    protected function casts(): array
    {
        return [
            'map_data' => 'array',
            'width' => 'integer',
            'depth' => 'integer',
            'floors_count' => 'integer',
            'share_enabled' => 'boolean',
        ];
    }

    protected static function booted(): void
    {
        static::creating(function (Project $project): void {
            if (empty($project->slug)) {
                $project->slug = static::uniqueSlug($project->name);
            }

            if (empty($project->map_data)) {
                $project->map_data = static::defaultMapData($project);
            }
        });
    }

    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function shareUrl(): ?string
    {
        if (! $this->share_enabled || ! $this->share_token) {
            return null;
        }

        return route('share.gate', $this->share_token);
    }

    public static function uniqueSlug(string $name): string
    {
        $base = Str::slug($name) ?: 'project';
        $slug = $base;
        $i = 1;

        while (static::query()->where('slug', $slug)->exists()) {
            $slug = "{$base}-{$i}";
            $i++;
        }

        return $slug;
    }

    /**
     * Seed a simple rectangular floor with outer walls and one door opening.
     */
    public static function defaultMapData(Project $project): array
    {
        $w = (float) ($project->width ?: 20);
        $d = (float) ($project->depth ?: 15);
        $midX = $w * 0.55;

        return [
            'version' => 1,
            'unit' => 'm',
            'camera' => [
                'position' => [$w / 2, 10, $d + 10],
                'target' => [$w / 2, 0, $d / 2],
            ],
            'floors' => [
                [
                    'id' => 'floor-1',
                    'name' => 'Ground Floor',
                    'level' => 0,
                    'height' => 2.8,
                    'rooms' => [
                        [
                            'id' => 'room-living',
                            'name' => 'Living Room',
                            'preset' => 'living',
                            'color' => 0xa7f3d0,
                            'polygon' => [[0, 0], [$midX, 0], [$midX, $d], [0, $d]],
                        ],
                        [
                            'id' => 'room-bedroom',
                            'name' => 'Bedroom',
                            'preset' => 'bedroom',
                            'color' => 0x99f6e4,
                            'polygon' => [[$midX, 0], [$w, 0], [$w, $d * 0.55], [$midX, $d * 0.55]],
                        ],
                        [
                            'id' => 'room-kitchen',
                            'name' => 'Kitchen',
                            'preset' => 'kitchen',
                            'color' => 0xfde68a,
                            'polygon' => [[$midX, $d * 0.55], [$w, $d * 0.55], [$w, $d], [$midX, $d]],
                        ],
                    ],
                    'walls' => [
                        ['id' => 'wall-n', 'from' => [0, 0], 'to' => [$w, 0], 'height' => 2.8, 'thickness' => 0.15],
                        ['id' => 'wall-e', 'from' => [$w, 0], 'to' => [$w, $d], 'height' => 2.8, 'thickness' => 0.15],
                        ['id' => 'wall-s', 'from' => [$w, $d], 'to' => [0, $d], 'height' => 2.8, 'thickness' => 0.15],
                        ['id' => 'wall-w', 'from' => [0, $d], 'to' => [0, 0], 'height' => 2.8, 'thickness' => 0.15],
                        ['id' => 'wall-divider', 'from' => [$midX, 0], 'to' => [$midX, $d], 'height' => 2.8, 'thickness' => 0.12],
                        ['id' => 'wall-kitchen', 'from' => [$midX, $d * 0.55], 'to' => [$w, $d * 0.55], 'height' => 2.8, 'thickness' => 0.12],
                    ],
                    'doors' => [
                        [
                            'id' => 'door-main',
                            'wall_id' => 'wall-s',
                            'position' => 0.25,
                            'width' => 1.0,
                            'height' => 2.1,
                            'style' => 'swing_modern',
                        ],
                        [
                            'id' => 'door-interior',
                            'wall_id' => 'wall-divider',
                            'position' => 0.35,
                            'width' => 0.9,
                            'height' => 2.05,
                            'style' => 'interior',
                        ],
                        [
                            'id' => 'door-bedroom',
                            'wall_id' => 'wall-divider',
                            'position' => 0.75,
                            'width' => 0.9,
                            'height' => 2.05,
                            'style' => 'interior',
                        ],
                    ],
                    'windows' => [
                        [
                            'id' => 'window-living',
                            'wall_id' => 'wall-w',
                            'position' => 0.5,
                            'width' => 1.8,
                            'height' => 1.4,
                            'sill' => 0.8,
                            'style' => 'wide',
                        ],
                        [
                            'id' => 'window-bedroom',
                            'wall_id' => 'wall-e',
                            'position' => 0.25,
                            'width' => 1.2,
                            'height' => 1.2,
                            'sill' => 0.9,
                            'style' => 'standard',
                        ],
                        [
                            'id' => 'window-kitchen',
                            'wall_id' => 'wall-e',
                            'position' => 0.78,
                            'width' => 1.5,
                            'height' => 1.2,
                            'sill' => 0.9,
                            'style' => 'sliding',
                        ],
                    ],
                    'smart_devices' => [
                        ['id' => 'smart-light-l1', 'type' => 'smart_light', 'position' => [$w * 0.15, $d * 0.35], 'rotation' => 0, 'mount' => 'ceiling', 'on' => false],
                        ['id' => 'smart-light-l2', 'type' => 'smart_light', 'position' => [$w * 0.28, $d * 0.55], 'rotation' => 0, 'mount' => 'ceiling', 'on' => false],
                        ['id' => 'smart-light-b1', 'type' => 'smart_light', 'position' => [$w * 0.78, $d * 0.28], 'rotation' => 0, 'mount' => 'ceiling', 'on' => false],
                        ['id' => 'smart-light-k1', 'type' => 'ceiling_panel', 'position' => [$w * 0.78, $d * 0.72], 'rotation' => 0, 'mount' => 'ceiling', 'on' => false],
                        ['id' => 'smart-ac-living', 'type' => 'ac_split', 'position' => [$w * 0.15, $d * 0.12], 'rotation' => 0, 'mount' => 'wall', 'on' => true],
                        ['id' => 'smart-ac-bed', 'type' => 'ac_split', 'position' => [$w * 0.88, $d * 0.2], 'rotation' => -1.57, 'mount' => 'wall', 'on' => true],
                        ['id' => 'smart-cam-1', 'type' => 'camera', 'position' => [$w * 0.08, $d * 0.5], 'rotation' => 0, 'mount' => 'ceiling', 'on' => true],
                        ['id' => 'smart-motion-1', 'type' => 'motion_sensor', 'position' => [$midX + 0.15, $d * 0.3], 'rotation' => 0, 'mount' => 'wall', 'on' => true],
                        ['id' => 'smart-temp-1', 'type' => 'thermostat', 'position' => [$w * 0.75, $d * 0.25], 'rotation' => 0, 'mount' => 'wall', 'on' => true],
                        ['id' => 'smart-screen-1', 'type' => 'control_screen', 'position' => [$w * 0.12, $d * 0.15], 'rotation' => 0, 'mount' => 'wall', 'on' => true],
                    ],
                    'components' => [
                        [
                            'id' => 'comp-sofa',
                            'type' => 'sofa',
                            'position' => [$w * 0.22, $d * 0.55],
                            'rotation' => 0,
                            'width' => 2.2,
                            'depth' => 0.9,
                            'height' => 0.85,
                        ],
                        [
                            'id' => 'comp-tv',
                            'type' => 'tv',
                            'position' => [$w * 0.22, $d * 0.18],
                            'rotation' => 0,
                            'width' => 1.11,
                            'depth' => 0.06,
                            'height' => 0.62,
                        ],
                        [
                            'id' => 'comp-bed',
                            'type' => 'bed',
                            'position' => [$w * 0.78, $d * 0.28],
                            'rotation' => 0,
                            'width' => 2.0,
                            'depth' => 1.6,
                            'height' => 0.55,
                        ],
                    ],
                ],
            ],
        ];
    }
}
