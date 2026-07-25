<?php

namespace App\Services\FloorPlan;

/**
 * Cleans and calibrates AI-extracted floor plan geometry for the 3D editor.
 */
class FloorPlanGeometryNormalizer
{
    private const SNAP = 0.05;

    private const ORTHO_TOLERANCE_DEG = 8.0;

    private const MERGE_TOLERANCE = 0.15;

    /**
     * @param  array{walls: list<array<string,mixed>>, rooms: list<array<string,mixed>>, doors: list<array<string,mixed>>, windows: list<array<string,mixed>>}  $geometry
     * @param  array<string, mixed>  $calibration
     * @return array{walls: list<array<string,mixed>>, rooms: list<array<string,mixed>>, doors: list<array<string,mixed>>, windows: list<array<string,mixed>>, warnings: list<string>}
     */
    public function refine(array $geometry, array $calibration = []): array
    {
        $warnings = [];
        $walls = $geometry['walls'] ?? [];
        $rooms = $geometry['rooms'] ?? [];
        $doors = $geometry['doors'] ?? [];
        $windows = $geometry['windows'] ?? [];

        if ($walls === []) {
            return [
                'walls' => [],
                'rooms' => $rooms,
                'doors' => $doors,
                'windows' => $windows,
                'warnings' => ['No walls to refine.'],
            ];
        }

        foreach ($walls as &$wall) {
            $wall['from'] = $this->snapPoint($wall['from']);
            $wall['to'] = $this->snapPoint($wall['to']);
        }
        unset($wall);

        $walls = $this->orthogonalizeWalls($walls);
        if (! ($calibration['gentle'] ?? false)) {
            $walls = $this->mergeCollinearWalls($walls);
        }
        $walls = $this->dedupeWalls($walls);

        foreach ($rooms as &$room) {
            $room['polygon'] = array_map(fn ($pt) => $this->snapPoint($pt), $room['polygon'] ?? []);
        }
        unset($room);

        [$walls, $rooms, $scaleWarning] = $this->calibrateScale($walls, $rooms, $calibration);
        if ($scaleWarning) {
            $warnings[] = $scaleWarning;
        }

        $doorResult = $this->attachOpenings($doors, $walls, 'door');
        $doors = $doorResult['openings'];
        $warnings = array_merge($warnings, $doorResult['warnings']);

        $windowResult = $this->attachOpenings($windows, $walls, 'window');
        $windows = $windowResult['openings'];
        $warnings = array_merge($warnings, $windowResult['warnings']);

        if ($rooms === [] && count($walls) >= 4) {
            $warnings[] = 'Rooms not detected — wall layout kept; paint rooms in the editor.';
        }

        return [
            'walls' => array_values($walls),
            'rooms' => array_values($rooms),
            'doors' => array_values($doors),
            'windows' => array_values($windows),
            'warnings' => $warnings,
        ];
    }

    /**
     * @param  list<array<string,mixed>>  $walls
     * @param  list<array<string,mixed>>  $rooms
     * @param  array<string, mixed>  $calibration
     * @return array{0: list<array<string,mixed>>, 1: list<array<string,mixed>>, 2: string|null}
     */
    protected function calibrateScale(array $walls, array $rooms, array $calibration): array
    {
        [$minX, $minZ, $maxX, $maxZ] = $this->bounds($walls, $rooms);
        $spanX = max(0.5, $maxX - $minX);
        $spanZ = max(0.5, $maxZ - $minZ);

        $targetW = $this->floatVal($calibration['footprint_width_m'] ?? $calibration['detected_width'] ?? null);
        $targetD = $this->floatVal($calibration['footprint_depth_m'] ?? $calibration['detected_depth'] ?? null);

        if (! $targetW && ! $targetD) {
            return [$walls, $rooms, null];
        }

        $scaleX = $targetW ? $targetW / $spanX : 1.0;
        $scaleZ = $targetD ? $targetD / $spanZ : 1.0;

        if ($targetW && ! $targetD) {
            $scaleZ = $scaleX;
        } elseif ($targetD && ! $targetW) {
            $scaleX = $scaleZ;
        } else {
            $uniform = ($scaleX + $scaleZ) / 2;
            if (abs($scaleX - $scaleZ) / max($uniform, 0.001) < 0.25) {
                $scaleX = $uniform;
                $scaleZ = $uniform;
            }
        }

        if (abs($scaleX - 1.0) < 0.02 && abs($scaleZ - 1.0) < 0.02) {
            return [$walls, $rooms, null];
        }

        $this->scaleGeometry($walls, $rooms, $scaleX, $scaleZ);

        return [
            $walls,
            $rooms,
            sprintf('Scaled footprint to %.1f×%.1f m using plan dimensions.', $targetW ?: $spanX * $scaleX, $targetD ?: $spanZ * $scaleZ),
        ];
    }

    /**
     * @param  list<array<string,mixed>>  $openings
     * @param  list<array<string,mixed>>  $walls
     * @return array{openings: list<array<string,mixed>>, warnings: list<string>}
     */
    protected function attachOpenings(array $openings, array $walls, string $kind): array
    {
        $out = [];
        $warnings = [];

        foreach ($openings as $opening) {
            if (! is_array($opening)) {
                continue;
            }

            $wallId = (string) ($opening['wall_id'] ?? '');
            $at = $opening['at'] ?? $opening['position_xy'] ?? null;
            $position = isset($opening['position']) && is_numeric($opening['position'])
                ? (float) $opening['position']
                : null;

            if ($wallId !== '' && $this->wallExists($walls, $wallId)) {
                if ($position === null) {
                    $position = 0.5;
                }
            } elseif (is_array($at) && count($at) >= 2) {
                $match = $this->nearestWall($walls, (float) $at[0], (float) $at[1]);
                if ($match === null) {
                    $warnings[] = ucfirst($kind).' '.($opening['id'] ?? '?').' could not be placed on a wall.';

                    continue;
                }
                $wallId = $match['wall_id'];
                $position = $match['position'];
            } else {
                $warnings[] = ucfirst($kind).' '.($opening['id'] ?? '?').' has no wall reference.';

                continue;
            }

            $out[] = [
                'id' => $opening['id'] ?? $kind.'-'.$wallId,
                'wall_id' => $wallId,
                'position' => max(0.05, min(0.95, $position ?? 0.5)),
                'width' => $opening['width'] ?? ($kind === 'door' ? 0.9 : 1.2),
                'height' => $opening['height'] ?? ($kind === 'door' ? 2.1 : 1.2),
                'style' => $opening['style'] ?? ($kind === 'door' ? 'swing_modern' : 'standard'),
                ...($kind === 'window' ? ['sill' => $opening['sill'] ?? 0.9] : []),
            ];
        }

        return ['openings' => $out, 'warnings' => $warnings];
    }

    /**
     * @param  list<array<string,mixed>>  $walls
     * @return array{wall_id: string, position: float}|null
     */
    protected function nearestWall(array $walls, float $x, float $z): ?array
    {
        $best = null;
        $bestDist = INF;

        foreach ($walls as $wall) {
            $x1 = $wall['from'][0];
            $z1 = $wall['from'][1];
            $x2 = $wall['to'][0];
            $z2 = $wall['to'][1];
            $dx = $x2 - $x1;
            $dz = $z2 - $z1;
            $len2 = $dx * $dx + $dz * $dz;
            if ($len2 < 0.01) {
                continue;
            }

            $t = max(0, min(1, (($x - $x1) * $dx + ($z - $z1) * $dz) / $len2));
            $px = $x1 + $t * $dx;
            $pz = $z1 + $t * $dz;
            $dist = hypot($x - $px, $z - $pz);

            if ($dist < $bestDist) {
                $bestDist = $dist;
                $best = ['wall_id' => $wall['id'], 'position' => $t];
            }
        }

        // Must be within ~1.5m of a wall centerline.
        if ($best === null || $bestDist > 1.5) {
            return null;
        }

        return $best;
    }

    /**
     * @param  list<array<string,mixed>>  $walls
     */
    protected function wallExists(array $walls, string $id): bool
    {
        foreach ($walls as $wall) {
            if ($wall['id'] === $id) {
                return true;
            }
        }

        return false;
    }

    /**
     * @param  list<array<string,mixed>>  $walls
     * @return list<array<string,mixed>>
     */
    protected function orthogonalizeWalls(array $walls): array
    {
        foreach ($walls as &$wall) {
            [$fx, $fz] = $wall['from'];
            [$tx, $tz] = $wall['to'];
            $dx = abs($tx - $fx);
            $dz = abs($tz - $fz);

            if ($dx < self::MERGE_TOLERANCE || $dz < self::MERGE_TOLERANCE) {
                if ($dx <= $dz) {
                    $wall['to'][0] = $fx;
                } else {
                    $wall['to'][1] = $fz;
                }

                continue;
            }

            $angle = rad2deg(atan2($tz - $fz, $tx - $fx));
            $norm = fmod($angle + 360, 360);
            $nearH = min(abs($norm), abs($norm - 180), abs($norm - 360)) <= self::ORTHO_TOLERANCE_DEG;
            $nearV = abs($norm - 90) <= self::ORTHO_TOLERANCE_DEG || abs($norm - 270) <= self::ORTHO_TOLERANCE_DEG;

            if ($nearH) {
                $wall['to'][1] = $fz;
            } elseif ($nearV) {
                $wall['to'][0] = $fx;
            }
        }
        unset($wall);

        return $walls;
    }

    /**
     * @param  list<array<string,mixed>>  $walls
     * @return list<array<string,mixed>>
     */
    protected function mergeCollinearWalls(array $walls): array
    {
        $merged = true;
        while ($merged) {
            $merged = false;
            $count = count($walls);

            for ($i = 0; $i < $count; $i++) {
                for ($j = $i + 1; $j < $count; $j++) {
                    $a = $walls[$i];
                    $b = $walls[$j];

                    if (! $this->sameAxis($a, $b)) {
                        continue;
                    }

                    $joined = $this->tryJoinWalls($a, $b);
                    if ($joined === null) {
                        continue;
                    }

                    $walls[$i] = $joined;
                    array_splice($walls, $j, 1);
                    $merged = true;
                    break 2;
                }
            }
        }

        return $walls;
    }

    /**
     * @param  array<string,mixed>  $a
     * @param  array<string,mixed>  $b
     */
    protected function sameAxis(array $a, array $b): bool
    {
        $aH = abs($a['from'][1] - $a['to'][1]) < self::MERGE_TOLERANCE;
        $bH = abs($b['from'][1] - $b['to'][1]) < self::MERGE_TOLERANCE;
        $aV = abs($a['from'][0] - $a['to'][0]) < self::MERGE_TOLERANCE;
        $bV = abs($b['from'][0] - $b['to'][0]) < self::MERGE_TOLERANCE;

        if ($aH && $bH) {
            return abs($a['from'][1] - $b['from'][1]) < self::MERGE_TOLERANCE;
        }
        if ($aV && $bV) {
            return abs($a['from'][0] - $b['from'][0]) < self::MERGE_TOLERANCE;
        }

        return false;
    }

    /**
     * @param  array<string,mixed>  $a
     * @param  array<string,mixed>  $b
     * @return array<string,mixed>|null
     */
    protected function tryJoinWalls(array $a, array $b): ?array
    {
        $points = [
            $a['from'], $a['to'], $b['from'], $b['to'],
        ];

        $horizontal = abs($a['from'][1] - $a['to'][1]) < self::MERGE_TOLERANCE;
        $coord = $horizontal ? 0 : 1;
        $fixed = $horizontal ? $a['from'][1] : $a['from'][0];

        $vals = array_map(fn ($p) => $p[$coord], $points);
        sort($vals);

        // Endpoints must touch or overlap.
        if ($vals[1] - $vals[0] > self::MERGE_TOLERANCE && $vals[2] - $vals[1] > self::MERGE_TOLERANCE) {
            return null;
        }

        $min = min($vals);
        $max = max($vals);

        if ($horizontal) {
            return [
                ...$a,
                'from' => [$min, $fixed],
                'to' => [$max, $fixed],
            ];
        }

        return [
            ...$a,
            'from' => [$fixed, $min],
            'to' => [$fixed, $max],
        ];
    }

    /**
     * @param  list<array<string,mixed>>  $walls
     * @return list<array<string,mixed>>
     */
    protected function dedupeWalls(array $walls): array
    {
        $seen = [];
        $out = [];

        foreach ($walls as $wall) {
            $key = $this->wallKey($wall);
            if (isset($seen[$key])) {
                continue;
            }
            $seen[$key] = true;
            $len = hypot($wall['to'][0] - $wall['from'][0], $wall['to'][1] - $wall['from'][1]);
            if ($len >= 0.1) {
                $out[] = $wall;
            }
        }

        return $out;
    }

    /**
     * @param  array<string,mixed>  $wall
     */
    protected function wallKey(array $wall): string
    {
        $a = $this->snapPoint($wall['from']);
        $b = $this->snapPoint($wall['to']);
        $p1 = sprintf('%.2f,%.2f', $a[0], $a[1]);
        $p2 = sprintf('%.2f,%.2f', $b[0], $b[1]);

        return $p1 < $p2 ? "{$p1}|{$p2}" : "{$p2}|{$p1}";
    }

    /**
     * @param  list<array<string,mixed>>  $walls
     * @param  list<array<string,mixed>>  $rooms
     */
    protected function scaleGeometry(array &$walls, array &$rooms, float $sx, float $sz): void
    {
        foreach ($walls as &$wall) {
            $wall['from'][0] *= $sx;
            $wall['from'][1] *= $sz;
            $wall['to'][0] *= $sx;
            $wall['to'][1] *= $sz;
        }
        unset($wall);

        foreach ($rooms as &$room) {
            foreach ($room['polygon'] as &$pt) {
                $pt[0] *= $sx;
                $pt[1] *= $sz;
            }
            unset($pt);
        }
        unset($room);
    }

    /**
     * @param  list<array<string,mixed>>  $walls
     * @param  list<array<string,mixed>>  $rooms
     * @return array{0: float, 1: float, 2: float, 3: float}
     */
    protected function bounds(array $walls, array $rooms): array
    {
        $minX = INF;
        $minZ = INF;
        $maxX = -INF;
        $maxZ = -INF;

        $consume = function (float $x, float $z) use (&$minX, &$minZ, &$maxX, &$maxZ): void {
            $minX = min($minX, $x);
            $minZ = min($minZ, $z);
            $maxX = max($maxX, $x);
            $maxZ = max($maxZ, $z);
        };

        foreach ($walls as $wall) {
            $consume($wall['from'][0], $wall['from'][1]);
            $consume($wall['to'][0], $wall['to'][1]);
        }

        foreach ($rooms as $room) {
            foreach ($room['polygon'] ?? [] as [$x, $z]) {
                $consume($x, $z);
            }
        }

        if (! is_finite($minX)) {
            return [0.0, 0.0, 10.0, 8.0];
        }

        return [$minX, $minZ, $maxX, $maxZ];
    }

    /**
     * @param  array{0: float, 1: float}|list<float>  $pt
     * @return array{0: float, 1: float}
     */
    protected function snapPoint(array $pt): array
    {
        return [
            round($pt[0] / self::SNAP) * self::SNAP,
            round($pt[1] / self::SNAP) * self::SNAP,
        ];
    }

    protected function floatVal(mixed $value): ?float
    {
        if (! is_numeric($value)) {
            return null;
        }

        $n = (float) $value;

        return $n > 0 ? $n : null;
    }
}
