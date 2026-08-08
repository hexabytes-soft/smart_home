<?php

namespace App\Support;

final class ProjectStatus
{
    public const DRAFT = 'draft';

    public const PENDING = 'pending';

    public const IN_PROGRESS = 'in_progress';

    public const AGREED = 'agreed';

    public const COMPLETED = 'completed';

    public const TRASH = 'trash';

    /**
     * @return list<string>
     */
    public static function all(): array
    {
        return [
            self::DRAFT,
            self::PENDING,
            self::IN_PROGRESS,
            self::AGREED,
            self::COMPLETED,
            self::TRASH,
        ];
    }

    /**
     * Statuses shown in the main projects list (everything except trash).
     *
     * @return list<string>
     */
    public static function active(): array
    {
        return array_values(array_filter(
            self::all(),
            fn (string $status) => $status !== self::TRASH
        ));
    }

    /**
     * @return array<string, string>
     */
    public static function labels(): array
    {
        return [
            self::DRAFT => 'Draft',
            self::PENDING => 'Pending',
            self::IN_PROGRESS => 'In progress',
            self::AGREED => 'تم الاتفاق',
            self::COMPLETED => 'Completed',
            self::TRASH => 'Trash',
        ];
    }

    public static function label(string $status): string
    {
        return self::labels()[$status] ?? ucfirst(str_replace('_', ' ', $status));
    }

    public static function badgeClasses(string $status): string
    {
        return match ($status) {
            self::DRAFT => 'bg-amber-500/20 text-amber-300 border-amber-500/30',
            self::PENDING => 'bg-sky-500/20 text-sky-300 border-sky-500/30',
            self::IN_PROGRESS => 'bg-brand-500/20 text-brand-300 border-brand-500/30',
            self::AGREED => 'bg-violet-500/20 text-violet-300 border-violet-500/30',
            self::COMPLETED => 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
            self::TRASH => 'bg-rose-500/15 text-rose-300 border-rose-500/30',
            default => 'bg-surface-800 text-surface-300 border-surface-700',
        };
    }

    public static function isValid(string $status): bool
    {
        return in_array($status, self::all(), true);
    }

    public static function isTrash(string $status): bool
    {
        return $status === self::TRASH;
    }
}
