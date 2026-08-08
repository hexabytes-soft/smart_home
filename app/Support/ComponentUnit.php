<?php

namespace App\Support;

final class ComponentUnit
{
    public const PIECE = 'piece';

    public const METER = 'meter';

    /**
     * @return list<string>
     */
    public static function all(): array
    {
        return [self::PIECE, self::METER];
    }

    /**
     * @return array<string, string>
     */
    public static function labels(): array
    {
        return [
            self::PIECE => 'Piece (عدد)',
            self::METER => 'Meter (متر) — price per 1 m',
        ];
    }

    public static function label(string $unit): string
    {
        return self::labels()[$unit] ?? ucfirst($unit);
    }

    public static function short(string $unit): string
    {
        return match ($unit) {
            self::METER => 'm',
            default => 'pc',
        };
    }

    public static function isMeter(string $unit): bool
    {
        return $unit === self::METER;
    }
}
