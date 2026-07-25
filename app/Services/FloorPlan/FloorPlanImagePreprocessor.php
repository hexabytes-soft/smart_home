<?php

namespace App\Services\FloorPlan;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

/**
 * Prepares plan images for AI: crop title blocks, boost contrast for wall lines.
 */
class FloorPlanImagePreprocessor
{
    /**
     * Crop the right title-block strip and return a temp UploadedFile focused on the drawing.
     */
    public function prepareForVision(UploadedFile $file): UploadedFile
    {
        $mime = strtolower((string) ($file->getMimeType() ?: ''));
        $ext = strtolower((string) $file->getClientOriginalExtension());

        if ($ext === 'pdf' || $mime === 'application/pdf') {
            return $file;
        }

        if (! function_exists('imagecreatefromstring')) {
            return $file;
        }

        $bytes = @file_get_contents($file->getRealPath());
        if ($bytes === false || $bytes === '') {
            return $file;
        }

        $src = @imagecreatefromstring($bytes);
        if ($src === false) {
            return $file;
        }

        $w = imagesx($src);
        $h = imagesy($src);
        if ($w < 200 || $h < 200) {
            imagedestroy($src);

            return $file;
        }

        // Architectural sheets put the title block on the right (~22–30% width).
        $cropW = (int) max(100, round($w * 0.74));
        $cropH = $h;
        $dst = imagecreatetruecolor($cropW, $cropH);
        if ($dst === false) {
            imagedestroy($src);

            return $file;
        }

        $white = imagecolorallocate($dst, 255, 255, 255);
        imagefill($dst, 0, 0, $white);
        imagecopy($dst, $src, 0, 0, 0, 0, $cropW, $cropH);

        // Mild contrast so thick wall lines stand out for vision models.
        if (function_exists('imagefilter')) {
            imagefilter($dst, IMG_FILTER_CONTRAST, -18);
            imagefilter($dst, IMG_FILTER_BRIGHTNESS, 6);
        }

        $dir = storage_path('app/temp/plan-vision');
        File::ensureDirectoryExists($dir);
        $path = $dir.DIRECTORY_SEPARATOR.Str::uuid().'.png';
        imagepng($dst, $path, 6);
        imagedestroy($dst);
        imagedestroy($src);

        return new UploadedFile(
            $path,
            pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME).'-plan.png',
            'image/png',
            null,
            true
        );
    }
}
