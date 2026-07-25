<?php

namespace App\Services\FloorPlan;

use App\Services\Gemini\GeminiClient;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;
use RuntimeException;
use Throwable;

class FloorPlanImportService
{
    private const DEFAULT_WALL_HEIGHT = 3.0;

    private const DEFAULT_WALL_THICKNESS = 0.2;

    private const MAX_IMAGES = 20;

    private const ROOM_PRESET_COLORS = [
        'living' => 0xa7f3d0,
        'bedroom' => 0x99f6e4,
        'kitchen' => 0xfde68a,
        'bathroom' => 0xbae6fd,
        'media' => 0xbfdbfe,
        'dining' => 0xfecdd3,
        'office' => 0xe9d5ff,
        'laundry' => 0xc7d2fe,
        'garage' => 0xd1d5db,
        'default' => 0xe5e7eb,
    ];

    /** Higher = preferred when multiple sheets describe the same floor. */
    private const SHEET_PRIORITY = [
        'architectural_floor_plan' => 100,
        'roof_plan' => 90,
        'electric_floor_plan' => 40,
        'sanitary_floor_plan' => 30,
    ];

    public function __construct(
        protected GeminiClient $gemini,
        protected FloorPlanGeometryNormalizer $geometryNormalizer,
        protected FloorPlanImagePreprocessor $imagePreprocessor
    ) {}

    /**
     * @param  UploadedFile|list<UploadedFile>  $images
     * @param  array{
     *     overall_width?: float|null,
     *     overall_depth?: float|null,
     *     wall_height?: float|null,
     *     notes?: string|null,
     *     floor_names?: list<string|null>,
     *     source_paths?: list<string|null>
     * }  $hints
     * @return array{map_data: array<string, mixed>, width: int, depth: int, floors_count: int, warnings: list<string>, model: string|null}
     */
    public function import(UploadedFile|array $images, array $hints = []): array
    {
        $files = is_array($images) ? array_values($images) : [$images];
        $files = array_values(array_filter($files, fn ($f) => $f instanceof UploadedFile));

        if ($files === []) {
            throw new RuntimeException('Upload at least one plan image.');
        }

        if (count($files) > self::MAX_IMAGES) {
            throw new RuntimeException('You can upload at most '.self::MAX_IMAGES.' images at once.');
        }

        $floorNames = array_values((array) ($hints['floor_names'] ?? []));
        $userWallHeight = isset($hints['wall_height']) ? (float) $hints['wall_height'] : null;
        $allWarnings = [];
        $models = [];
        $analyzed = [];
        $detectedWallHeight = null;

        foreach ($files as $index => $file) {
            $hintName = trim((string) ($floorNames[$index] ?? ''));

            try {
                if ($this->isPdf($file)) {
                    $pdfItems = $this->importPdfDocument($file, $hints, $hintName, sourceIndex: $index);
                    foreach ($pdfItems['items'] as $item) {
                        $analyzed[] = $item;
                    }
                    $models = array_merge($models, $pdfItems['models']);
                    array_push($allWarnings, ...$pdfItems['warnings']);

                    continue;
                }

                $classification = $this->classifySheet($file, $hints, $index, count($files), $hintName);
                $models[] = $classification['_meta']['model'] ?? null;
                unset($classification['_meta']);

                $sheetType = $this->normalizeSheetType((string) ($classification['sheet_type'] ?? 'other'));
                $sheetTitle = trim((string) ($classification['sheet_title'] ?? $hintName ?: 'Image '.($index + 1)));

                if (in_array($sheetType, ['elevation', 'section'], true)) {
                    $h = $this->extractHeightMeters($classification);
                    if ($h !== null) {
                        $detectedWallHeight = $detectedWallHeight
                            ? ($detectedWallHeight + $h) / 2
                            : $h;
                        $allWarnings[] = "{$sheetTitle}: used for wall height (~{$h} m).";
                    } else {
                        $allWarnings[] = "{$sheetTitle}: elevation/section skipped.";
                    }

                    continue;
                }

                if (! $this->isConvertibleSheetType($sheetType, $classification)) {
                    $forced = $this->forceExtractFile($file, $hints, $index, count($files), $hintName);
                    if ($forced !== null) {
                        $analyzed[] = $forced;
                        $allWarnings[] = "{$sheetTitle}: imported via fallback wall tracing.";

                        continue;
                    }

                    $reason = trim((string) ($classification['skip_reason'] ?? 'not a floor plan layout'));
                    $allWarnings[] = "{$sheetTitle}: skipped — {$reason}";

                    continue;
                }

                $raw = $this->extractGeometry($file, $classification, $hints, $index, count($files));
                $models[] = $raw['_meta']['model'] ?? null;
                unset($raw['_meta']);

                if (! $this->hasFloorGeometry($raw)) {
                    $forced = $this->forceExtractFile($file, $hints, $index, count($files), $hintName);
                    if ($forced !== null) {
                        $analyzed[] = $forced;
                        $allWarnings[] = "{$sheetTitle}: imported via fallback wall tracing.";

                        continue;
                    }

                    $allWarnings[] = "{$sheetTitle}: floor plan detected but no walls extracted — skipped.";

                    continue;
                }

                $analyzed[] = [
                    'index' => $index,
                    'source_index' => $index,
                    'raw' => array_merge($classification, $raw),
                    'sheet_type' => $sheetType,
                    'sheet_title' => $sheetTitle,
                    'hint_name' => $hintName,
                    'priority' => self::SHEET_PRIORITY[$sheetType] ?? 10,
                ];
            } catch (Throwable $e) {
                $label = $this->isPdf($file) ? 'PDF' : 'File';
                $allWarnings[] = "{$label} ".($index + 1).': skipped ('.$e->getMessage().')';

                continue;
            }
        }

        if ($analyzed === []) {
            $allWarnings[] = 'Retrying with simplified wall tracing…';
            foreach ($files as $index => $file) {
                $hintName = trim((string) ($floorNames[$index] ?? ''));
                try {
                    $forced = $this->forceExtractFile($file, $hints, $index, count($files), $hintName);
                    if ($forced !== null) {
                        $analyzed[] = $forced;
                    }
                } catch (Throwable $e) {
                    $allWarnings[] = 'Retry '.($index + 1).': '.$e->getMessage();
                }
            }
        }

        if ($analyzed === []) {
            throw new RuntimeException(
                'No usable floor-plan sheets found. Upload architectural sheets like "GROUND FLOOR PLAN", "FIRST FLOOR PLAN", or "ROOF PLAN" — not cover pages, elevations, schedules, or 3D renders only.'
            );
        }

        // Prefer architectural plans over electric/sanitary for the same floor.
        $analyzed = $this->dedupeSheets($analyzed, $allWarnings);

        $wallHeight = $userWallHeight
            ?? $detectedWallHeight
            ?? self::DEFAULT_WALL_HEIGHT;
        if ($wallHeight < 2.0 || $wallHeight > 6.0) {
            $wallHeight = self::DEFAULT_WALL_HEIGHT;
        }

        $floors = [];
        $maxWidth = 0.0;
        $maxDepth = 0.0;
        $referenceWidth = isset($hints['overall_width']) ? (float) $hints['overall_width'] : null;
        $referenceDepth = isset($hints['overall_depth']) ? (float) $hints['overall_depth'] : null;
        $level = 0;

        foreach ($analyzed as $item) {
            $name = $this->resolveFloorName($item);
            $floorId = 'floor-'.($level + 1);

            $floorHints = $hints;
            if ($level > 0 && $referenceWidth && $referenceDepth) {
                $floorHints['overall_width'] = $referenceWidth;
                $floorHints['overall_depth'] = $referenceDepth;
            }

            try {
                $normalized = $this->normalizeFloor(
                    $item['raw'],
                    $floorHints,
                    $level,
                    $floorId,
                    $name,
                    $wallHeight
                );
            } catch (RuntimeException $e) {
                $allWarnings[] = "{$name}: skipped — ".$e->getMessage();

                continue;
            }

            if ($level === 0 && ! $referenceWidth && ! $referenceDepth) {
                $referenceWidth = $normalized['max_x'];
                $referenceDepth = $normalized['max_z'];
            }

            $floor = $normalized['floor'];
            // Keep optional reference image for alignment, but do not show it by default —
            // import must feel like editable walls/rooms/doors, not a pasted PDF.
            $sourceIndex = $item['source_index'] ?? $item['index'] ?? null;
            $sourcePaths = array_values((array) ($hints['source_paths'] ?? []));
            if (is_int($sourceIndex) && isset($sourcePaths[$sourceIndex]) && is_string($sourcePaths[$sourceIndex]) && $sourcePaths[$sourceIndex] !== '') {
                $floor['underlay'] = [
                    'url' => '/storage/'.ltrim($sourcePaths[$sourceIndex], '/'),
                    'opacity' => 0,
                    'visible' => false,
                    'bounds' => [0, 0, round($normalized['max_x'], 4), round($normalized['max_z'], 4)],
                ];
            }

            $floors[] = $floor;
            $maxWidth = max($maxWidth, $normalized['max_x']);
            $maxDepth = max($maxDepth, $normalized['max_z']);

            foreach ($normalized['warnings'] as $warning) {
                $allWarnings[] = "{$name}: {$warning}";
            }

            $level++;
        }

        if ($floors === []) {
            $hint = $allWarnings !== []
                ? ' Details: '.implode(' ', array_slice($allWarnings, 0, 3))
                : '';
            throw new RuntimeException(
                'AI could not extract a usable wall layout. Try a clearer floor plan image, enter overall width/depth in meters, or upload the architectural floor plan page only.'.$hint
            );
        }

        $width = (int) max(1, ceil($maxWidth + 0.5));
        $depth = (int) max(1, ceil($maxDepth + 0.5));

        $mapData = [
            'version' => 1,
            'unit' => 'm',
            'active_floor' => 0,
            'camera' => [
                'position' => [$maxWidth / 2, max(8, max($maxWidth, $maxDepth) * 0.7), $maxDepth + max(8, $maxDepth * 0.6)],
                'target' => [$maxWidth / 2, 0, $maxDepth / 2],
            ],
            'sim360' => [
                'position' => [$maxWidth / 2, $maxDepth / 2],
                'yaw' => 0,
                'pitch' => 0,
            ],
            'floors' => $floors,
            'import_meta' => [
                'source' => 'gemini',
                'floors_imported' => count($floors),
                'images_uploaded' => count($files),
                'wall_height_m' => round($wallHeight, 2),
                'detected_width' => round($maxWidth, 2),
                'detected_depth' => round($maxDepth, 2),
            ],
        ];

        return [
            'map_data' => $mapData,
            'width' => $width,
            'depth' => $depth,
            'floors_count' => count($floors),
            'warnings' => $allWarnings,
            'model' => collect($models)->filter()->last(),
        ];
    }

    /**
     * Convert Gemini (or hand-authored) floor-plan JSON into editor map_data.
     *
     * @param  array<string, mixed>  $payload
     * @param  array{
     *     overall_width?: float|null,
     *     overall_depth?: float|null,
     *     wall_height?: float|null,
     *     notes?: string|null,
     *     floor_names?: list<string|null>
     * }  $hints
     * @return array{map_data: array<string, mixed>, width: int, depth: int, floors_count: int, warnings: list<string>, model: string|null}
     */
    public function importFromJson(array $payload, array $hints = []): array
    {
        $floorsIn = $payload['floors'] ?? null;
        if (! is_array($floorsIn) || $floorsIn === []) {
            throw new RuntimeException('JSON must include a non-empty "floors" array with wall/room data.');
        }

        $floorNames = array_values((array) ($hints['floor_names'] ?? []));
        $userWallHeight = isset($hints['wall_height']) ? (float) $hints['wall_height'] : null;
        $payloadHeight = null;
        foreach ($floorsIn as $floorRaw) {
            if (is_array($floorRaw) && isset($floorRaw['height']) && is_numeric($floorRaw['height'])) {
                $payloadHeight = (float) $floorRaw['height'];
                break;
            }
        }

        $wallHeight = $userWallHeight ?? $payloadHeight ?? self::DEFAULT_WALL_HEIGHT;
        if ($wallHeight < 2.0 || $wallHeight > 6.0) {
            $wallHeight = self::DEFAULT_WALL_HEIGHT;
        }

        $allWarnings = [];
        foreach ((array) ($payload['warnings'] ?? []) as $warning) {
            if (is_string($warning) && $warning !== '') {
                $allWarnings[] = $warning;
            }
        }

        $analyzed = [];
        foreach ($floorsIn as $i => $floorRaw) {
            if (! is_array($floorRaw)) {
                continue;
            }

            $hintName = trim((string) ($floorNames[$i] ?? ''));
            $name = trim((string) ($floorRaw['name'] ?? ''));
            $title = $hintName !== '' ? $hintName : ($name !== '' ? $name : 'Floor '.($i + 1));

            $subRaw = $payload;
            $subRaw['floors'] = [$floorRaw];
            if (! isset($subRaw['footprint_width_m']) && isset($payload['detected_width'])) {
                $subRaw['footprint_width_m'] = $payload['detected_width'];
            }
            if (! isset($subRaw['footprint_depth_m']) && isset($payload['detected_depth'])) {
                $subRaw['footprint_depth_m'] = $payload['detected_depth'];
            }

            if (! $this->hasFloorGeometry($subRaw) && ! $this->hasRoomGeometry($subRaw)) {
                $allWarnings[] = "{$title}: skipped — no walls or room polygons.";

                continue;
            }

            $analyzed[] = [
                'index' => $i,
                'source_index' => $i,
                'raw' => $subRaw,
                'sheet_type' => 'architectural_floor_plan',
                'sheet_title' => $title,
                'hint_name' => $hintName,
                'priority' => self::SHEET_PRIORITY['architectural_floor_plan'],
            ];
        }

        if ($analyzed === []) {
            throw new RuntimeException('No usable floors found in JSON. Each floor needs walls[] and/or rooms[] polygons.');
        }

        $hints['from_json'] = true;
        $floors = [];
        $maxWidth = 0.0;
        $maxDepth = 0.0;
        $referenceWidth = isset($hints['overall_width']) ? (float) $hints['overall_width'] : null;
        $referenceDepth = isset($hints['overall_depth']) ? (float) $hints['overall_depth'] : null;
        $level = 0;

        foreach ($analyzed as $item) {
            $name = $this->resolveFloorName($item);
            $floorId = 'floor-'.($level + 1);

            $floorHints = $hints;
            if ($level > 0 && $referenceWidth && $referenceDepth) {
                $floorHints['overall_width'] = $referenceWidth;
                $floorHints['overall_depth'] = $referenceDepth;
            }

            try {
                $normalized = $this->normalizeFloor(
                    $item['raw'],
                    $floorHints,
                    $level,
                    $floorId,
                    $name,
                    $wallHeight
                );
            } catch (RuntimeException $e) {
                $allWarnings[] = "{$name}: skipped — ".$e->getMessage();

                continue;
            }

            if ($level === 0 && ! $referenceWidth && ! $referenceDepth) {
                $referenceWidth = $normalized['max_x'];
                $referenceDepth = $normalized['max_z'];
            }

            $floors[] = $normalized['floor'];
            $maxWidth = max($maxWidth, $normalized['max_x']);
            $maxDepth = max($maxDepth, $normalized['max_z']);

            foreach ($normalized['warnings'] as $warning) {
                $allWarnings[] = "{$name}: {$warning}";
            }

            $level++;
        }

        if ($floors === []) {
            throw new RuntimeException(
                'Could not convert JSON into a 2D map. Check that floors include walls with from/to and rooms with polygons.'
                .($allWarnings !== [] ? ' Details: '.implode(' ', array_slice($allWarnings, 0, 3)) : '')
            );
        }

        $width = (int) max(1, ceil($maxWidth + 0.5));
        $depth = (int) max(1, ceil($maxDepth + 0.5));

        $mapData = [
            'version' => 1,
            'unit' => 'm',
            'active_floor' => 0,
            'camera' => [
                'position' => [$maxWidth / 2, max(8, max($maxWidth, $maxDepth) * 0.7), $maxDepth + max(8, $maxDepth * 0.6)],
                'target' => [$maxWidth / 2, 0, $maxDepth / 2],
            ],
            'sim360' => [
                'position' => [$maxWidth / 2, $maxDepth / 2],
                'yaw' => 0,
                'pitch' => 0,
            ],
            'floors' => $floors,
            'import_meta' => [
                'source' => 'gemini_json',
                'floors_imported' => count($floors),
                'images_uploaded' => 0,
                'wall_height_m' => round($wallHeight, 2),
                'detected_width' => round($maxWidth, 2),
                'detected_depth' => round($maxDepth, 2),
            ],
        ];

        return [
            'map_data' => $mapData,
            'width' => $width,
            'depth' => $depth,
            'floors_count' => count($floors),
            'warnings' => $allWarnings,
            'model' => null,
        ];
    }

    /**
     * @param  array{overall_width?: float|null, overall_depth?: float|null, wall_height?: float|null, notes?: string|null}  $hints
     * @return array<string, mixed>
     */
    protected function classifySheet(
        UploadedFile $image,
        array $hints,
        int $index,
        int $total,
        string $hintName
    ): array {
        return $this->callGemini($image, $this->buildClassifyPrompt($hints, $index, $total, $hintName), $this->classifyInstruction());
    }

    /**
     * @param  array<string, mixed>  $classification
     * @param  array{overall_width?: float|null, overall_depth?: float|null, wall_height?: float|null, notes?: string|null}  $hints
     * @return array<string, mixed>
     */
    protected function extractGeometry(
        UploadedFile $image,
        array $classification,
        array $hints,
        int $index,
        int $total
    ): array {
        $raw = $this->callGemini(
            $image,
            $this->buildExtractPrompt($classification, $hints, $index, $total),
            $this->extractInstruction()
        );

        $score = $this->geometryScore($raw);
        $best = $raw;
        $bestScore = $score;

        // Sparse results mean the model skimmed the sheet — force a denser rebuild.
        if ($bestScore < 40) {
            $retry = $this->callGemini(
                $image,
                $this->buildExtractPrompt($classification, $hints, $index, $total, retry: true),
                $this->extractInstruction(retry: true)
            );
            $retryScore = $this->geometryScore($retry);
            if ($retryScore > $bestScore) {
                $best = $retry;
                $bestScore = $retryScore;
            }
        }

        if ($bestScore < 25) {
            $forced = $this->callGemini(
                $image,
                $this->buildForceExtractPrompt($hints, $index, $total, $classification['sheet_title'] ?? ''),
                $this->forceExtractInstruction()
            );
            if ($this->geometryScore($forced) > $bestScore) {
                return $forced;
            }
        }

        return $best;
    }

    /**
     * Higher = denser usable map for the editor.
     *
     * @param  array<string, mixed>  $raw
     */
    protected function geometryScore(array $raw): int
    {
        $walls = count((array) data_get($raw, 'floors.0.walls', []));
        $rooms = 0;
        foreach ((array) data_get($raw, 'floors.0.rooms', []) as $room) {
            if (is_array($room) && count((array) ($room['polygon'] ?? [])) >= 3) {
                $rooms++;
            }
        }
        $doors = count((array) data_get($raw, 'floors.0.doors', []));
        $windows = count((array) data_get($raw, 'floors.0.windows', []));

        return ($walls * 2) + ($rooms * 4) + ($doors * 2) + ($windows * 2);
    }

    /**
     * @param  array{overall_width?: float|null, overall_depth?: float|null, wall_height?: float|null, notes?: string|null}  $hints
     * @return array{index:int, raw:array<string,mixed>, sheet_type:string, sheet_title:string, hint_name:string, priority:int}|null
     */
    protected function forceExtractFile(
        UploadedFile $file,
        array $hints,
        int $index,
        int $total,
        string $hintName
    ): ?array {
        if ($this->isPdf($file)) {
            $pdf = $this->importPdfDocument($file, $hints, $hintName, force: true, sourceIndex: $index);
            if ($pdf['items'] === []) {
                return null;
            }

            return $pdf['items'][0];
        }

        $title = $hintName !== '' ? $hintName : 'Floor plan '.($index + 1);
        $raw = $this->callGemini(
            $file,
            $this->buildForceExtractPrompt($hints, $index, $total, $title),
            $this->forceExtractInstruction()
        );
        unset($raw['_meta']);

        if (! $this->hasFloorGeometry($raw)) {
            return null;
        }

        return [
            'index' => $index,
            'source_index' => $index,
            'raw' => $raw,
            'sheet_type' => 'architectural_floor_plan',
            'sheet_title' => $title,
            'hint_name' => $hintName,
            'priority' => self::SHEET_PRIORITY['architectural_floor_plan'],
        ];
    }

    protected function forceExtractInstruction(): string
    {
        return <<<'PROMPT'
You digitize ONE architectural floor-plan drawing into editable smart-home EDITOR COMPONENTS.

Convert the drawing into these objects ONLY (our system schema):
1) walls[] — every thick black wall as a segment {id, from:[x,z], to:[x,z], thickness, height}
2) rooms[] — every labeled space {id, name, preset, polygon:[[x,z],...]}
3) doors[] — every door swing symbol {id, at:[x,z], width, height, style}
4) windows[] — every window in exterior walls {id, at:[x,z], width, height, sill, style}

Rules:
- Do NOT describe the image. Do NOT return image metadata.
- Trace ALL interior partitions AND outer perimeter. A villa floor usually needs 25–80 wall segments.
- Every labeled room (Bed Room, Majlis, T&B, Dress, Laundry, Maid, Kitchen, Store, Balcony…) must become a room polygon.
- Room presets: bedroom|living|kitchen|bathroom|dining|office|laundry|garage|media|default
  (Majlis/Family/OPEN hall → living; T&B/Bath/WC → bathroom; Dress/Store → default; Laundry/Ironing → laundry)
- Door styles: swing_modern|interior|double_french|sliding_glass|garage
- Window styles: standard|wide|sliding|floor_ceiling
- Coordinates in METERS. Convert mm (6500→6.5). Origin = bottom-left of building footprint. X right, Z up.
- Ignore title block, stamps, watermarks, dimension text, electrical symbols, furniture outlines unless they are walls.

Output ONLY valid JSON with floors[0] containing walls, rooms, doors, windows.
PROMPT;
    }

    /**
     * @param  array{overall_width?: float|null, overall_depth?: float|null, wall_height?: float|null, notes?: string|null}  $hints
     */
    protected function buildForceExtractPrompt(array $hints, int $index, int $total, string $title): string
    {
        $lines = [
            'Digitize this floor plan into our editor wall/room/door/window components.',
            "Sheet: {$title}. File ".($index + 1)." of {$total}.",
            'Return COMPLETE geometry — not a simplified box. Include every room label as a room polygon.',
            'Minimum target: 20+ wall segments, all labeled rooms, all door swings, all exterior windows.',
        ];

        if ($hints['overall_width'] ?? null) {
            $lines[] = 'Building width ≈ '.$hints['overall_width'].' m';
        }
        if ($hints['overall_depth'] ?? null) {
            $lines[] = 'Building depth ≈ '.$hints['overall_depth'].' m';
        }
        if (trim((string) ($hints['notes'] ?? '')) !== '') {
            $lines[] = 'Notes: '.$hints['notes'];
        }

        return implode("\n", $lines);
    }

    protected function callGemini(UploadedFile $file, string $prompt, string $systemInstruction): array
    {
        $visionFile = $this->imagePreprocessor->prepareForVision($file);
        $mime = $this->resolveMimeType($visionFile);
        $base64 = base64_encode((string) file_get_contents($visionFile->getRealPath()));

        try {
            return $this->gemini->generateContent(
                [
                    ['text' => $prompt],
                    [
                        'inline_data' => [
                            'mime_type' => $mime,
                            'data' => $base64,
                        ],
                    ],
                ],
                $systemInstruction
            );
        } finally {
            if ($visionFile !== $file && is_file($visionFile->getRealPath())) {
                @unlink($visionFile->getRealPath());
            }
        }
    }

    protected function resolveMimeType(UploadedFile $file): string
    {
        $mime = strtolower((string) ($file->getMimeType() ?: ''));
        $ext = strtolower((string) $file->getClientOriginalExtension());

        if ($ext === 'pdf' || $mime === 'application/pdf') {
            return 'application/pdf';
        }

        return match (true) {
            str_contains($mime, 'png') => 'image/png',
            str_contains($mime, 'webp') => 'image/webp',
            str_contains($mime, 'gif') => 'image/gif',
            default => 'image/jpeg',
        };
    }

    protected function isPdf(UploadedFile $file): bool
    {
        $mime = strtolower((string) ($file->getMimeType() ?: ''));
        $ext = strtolower((string) $file->getClientOriginalExtension());

        return $ext === 'pdf' || $mime === 'application/pdf';
    }

    /**
     * @param  array{overall_width?: float|null, overall_depth?: float|null, wall_height?: float|null, notes?: string|null}  $hints
     * @return array{items: list<array<string,mixed>>, warnings: list<string>, models: list<string|null>}
     */
    protected function importPdfDocument(UploadedFile $pdf, array $hints, string $hintName, bool $force = false, int $sourceIndex = 0): array
    {
        $warnings = [];
        $models = [];
        $items = [];

        $raw = $this->callGemini(
            $pdf,
            $force ? $this->buildForceExtractPrompt($hints, 0, 1, $hintName ?: $pdf->getClientOriginalName())
                : $this->buildPdfExtractPrompt($hints, $hintName),
            $force ? $this->forceExtractInstruction() : $this->pdfExtractInstruction()
        );
        $models[] = $raw['_meta']['model'] ?? null;
        unset($raw['_meta']);

        foreach ((array) ($raw['warnings'] ?? []) as $warning) {
            if (is_string($warning) && $warning !== '') {
                $warnings[] = $warning;
            }
        }

        $floorsIn = (array) ($raw['floors'] ?? []);

        if ($floorsIn === [] && $this->hasFloorGeometry($raw)) {
            $floorsIn = [(array) data_get($raw, 'floors.0', [])];
        }

        if ($floorsIn === [] && ! $force) {
            return $this->importPdfDocument($pdf, $hints, $hintName, force: true);
        }

        if ($floorsIn === []) {
            $warnings[] = ($hintName ?: $pdf->getClientOriginalName()).': no floor plans found in PDF.';

            return compact('items', 'warnings', 'models');
        }

        foreach ($floorsIn as $i => $floorRaw) {
            if (! is_array($floorRaw)) {
                continue;
            }

            $subRaw = $raw;
            $subRaw['floors'] = [$floorRaw];
            $name = trim((string) ($floorRaw['name'] ?? ''));
            $title = $name !== '' ? $name : 'PDF floor '.($i + 1);

            if (! $this->hasFloorGeometry($subRaw) && ! $this->hasRoomGeometry($subRaw)) {
                $warnings[] = "{$title}: skipped — not enough walls extracted.";

                continue;
            }

            $items[] = [
                'index' => $i,
                'source_index' => $sourceIndex,
                'raw' => $subRaw,
                'sheet_type' => 'architectural_floor_plan',
                'sheet_title' => $title,
                'hint_name' => $hintName,
                'priority' => self::SHEET_PRIORITY['architectural_floor_plan'],
            ];
        }

        if ($items === []) {
            $warnings[] = ($hintName ?: $pdf->getClientOriginalName()).': PDF uploaded but no usable walls were extracted.';
        } else {
            $warnings[] = sprintf(
                'PDF "%s": imported %d floor layer(s).',
                $pdf->getClientOriginalName(),
                count($items)
            );
        }

        return compact('items', 'warnings', 'models');
    }

    /**
     * @param  array{overall_width?: float|null, overall_depth?: float|null, wall_height?: float|null, notes?: string|null}  $hints
     */
    protected function buildPdfExtractPrompt(array $hints, string $hintName): string
    {
        $notes = trim((string) ($hints['notes'] ?? ''));
        $lines = [
            'This PDF is an architectural drawing package (villa / residential).',
            'Scan EVERY page. For each page that is a top-down floor plan or roof plan with walls, add one entry to floors[].',
            'Skip cover pages, 3D renders, elevations, sections, schedules, and title blocks without wall layout.',
            'Each floors[] item must include walls (many segments), rooms, doors, and windows in meters.',
            $hintName !== '' ? "User label for this PDF: {$hintName}" : '',
        ];

        if ($hints['overall_width'] ?? null) {
            $lines[] = 'Target footprint width ≈ '.$hints['overall_width'].' m';
        }
        if ($hints['overall_depth'] ?? null) {
            $lines[] = 'Target footprint depth ≈ '.$hints['overall_depth'].' m';
        }
        if ($notes !== '') {
            $lines[] = "Notes: {$notes}";
        }

        $lines[] = 'Return JSON with floors[] (one object per floor plan page), dimension_unit_detected, footprint_width_m, footprint_depth_m, warnings[].';

        return implode("\n", array_filter($lines));
    }

    protected function pdfExtractInstruction(): string
    {
        return <<<'PROMPT'
You digitize architectural PDF packages into JSON for a 2D/3D floor-plan editor.

Rules:
- Process ALL pages in the PDF.
- Only include pages with a top-down wall layout (GROUND FLOOR PLAN, FIRST FLOOR PLAN, ROOF PLAN, etc.).
- Ignore electrical-only, sanitary-only, elevation, section, schedule, and cover sheets unless they contain a full wall layout.
- Trace thick black wall lines. Coordinates in meters (convert mm: 6500 → 6.5).
- Origin bottom-left of building footprint. X right, Z up on the sheet.
- Each floors[] entry: id, name, level, height, rooms[], walls[], doors[], windows[], components=[], smart_devices=[], labels=[].
- doors/windows: use wall_id + position 0..1 OR "at":[x,z] world coords.
- Typical villa ≈ 18–22 m × 14–18 m.

Output ONLY valid JSON. No markdown fences.
PROMPT;
    }

    protected function classifyInstruction(): string
    {
        return <<<'PROMPT'
Classify one page from a villa/residential architectural PDF package.
Identify sheet title from the drawing (e.g. GROUND FLOOR PLAN, FRONT ELEVATION, ELECTRIC SCHEDULE).
Return JSON only.
PROMPT;
    }

    protected function extractInstruction(bool $retry = false): string
    {
        $extra = $retry
            ? "\nRETRY: previous pass was TOO SPARSE (few walls/rooms). Trace EVERY partition wall and EVERY labeled room. Target ≥30 wall segments and ≥8 rooms for a villa floor."
            : '';

        return <<<PROMPT
You are a CAD digitizer for a smart-home map editor.

GOAL: convert this ONE floor-plan drawing into editable SYSTEM COMPONENTS (walls, rooms, doors, windows) — not a screenshot, not a description.

Our editor schema (floors[0]):
- walls: [{id, from:[x,z], to:[x,z], height, thickness}]
- rooms: [{id, name, preset, polygon:[[x,z],...]}]
- doors: [{id, label, at:[x,z], width, height, style}]
- windows: [{id, label, at:[x,z], width, height, sill, style}]
- components: []
- smart_devices: []
- labels: [{id, text, position:[x,z], size}]

METHOD:
1. Ignore title block / stamps / watermarks / dimension numbers / electric symbols.
2. Read outer dimension chains → footprint_width_m, footprint_depth_m (meters).
3. Trace OUTER perimeter as orthogonal wall segments.
4. Trace ALL interior partitions (bedrooms, baths, dress, maid, laundry, pantry, stairs void edges, lift shaft).
5. Build one room polygon per text label (M.BED ROOM, BED ROOM, T&B, DRESS, MAID ROOM, LAUNDRY, IRONING, STORE, BALCONY, OPEN, PANTRY, LIFT…).
6. Place a door at every door-swing arc center with style interior (or swing_modern for main entries).
7. Place a window at every W1/W2/… mark on exterior walls; use schedule sizes when visible (mm→m).
8. Coordinates in METERS. Origin bottom-left of building. X right, Z up on the sheet.
9. Presets: bedroom, living, kitchen, bathroom, dining, office, laundry, garage, media, default.

Quality bar for a villa first/ground floor:
- walls ≥ 25 segments
- rooms ≥ 8
- doors ≥ 6
- windows ≥ 4

Output ONLY valid JSON. No markdown.{$extra}
PROMPT;
    }

    /**
     * @param  array{overall_width?: float|null, overall_depth?: float|null, wall_height?: float|null, notes?: string|null}  $hints
     */
    protected function buildClassifyPrompt(array $hints, int $index, int $total, string $hintName): string
    {
        return implode("\n", [
            'Classify this architectural sheet.',
            "Image {$index} of {$total}.",
            $hintName !== '' ? "User label: {$hintName}" : '',
            'usable_for_walls=true ONLY for top-down architectural floor/roof plans with wall layout.',
            'Cover pages, 3D renders, site plans without rooms, elevations, sections, schedules → usable_for_walls=false.',
            'Return JSON:',
            '{"sheet_type":"architectural_floor_plan|roof_plan|electric_floor_plan|sanitary_floor_plan|elevation|section|schedule|cover|other","sheet_title":"GROUND FLOOR PLAN","usable_for_walls":true,"skip_reason":null,"floor_label":"Ground Floor","floor_level":0,"floor_to_floor_height_m":4.0}',
        ]);
    }

    /**
     * @param  array<string, mixed>  $classification
     * @param  array{overall_width?: float|null, overall_depth?: float|null, wall_height?: float|null, notes?: string|null}  $hints
     */
    protected function buildExtractPrompt(array $classification, array $hints, int $index, int $total, bool $retry = false): string
    {
        $title = $classification['sheet_title'] ?? 'Floor Plan';
        $floorLabel = $classification['floor_label'] ?? $title;
        $notes = trim((string) ($hints['notes'] ?? ''));

        $schema = <<<'JSON'
{
  "dimension_unit_detected": "m",
  "scale_confidence": "high",
  "footprint_width_m": 20.0,
  "footprint_depth_m": 17.0,
  "warnings": [],
  "floors": [{
    "id": "floor-1",
    "name": "First Floor",
    "level": 1,
    "height": 3.5,
    "rooms": [
      {"id":"room-mbed","name":"Master Bedroom","preset":"bedroom","polygon":[[12,0],[18.7,0],[18.7,5],[12,5]]},
      {"id":"room-bath","name":"T&B","preset":"bathroom","polygon":[[15.5,5],[18.7,5],[18.7,7.3],[15.5,7.3]]}
    ],
    "walls": [
      {"id":"w-ext-s","from":[0,0],"to":[20,0],"height":3.5,"thickness":0.2},
      {"id":"w-int-1","from":[12,0],"to":[12,5],"height":3.5,"thickness":0.15}
    ],
    "doors": [
      {"id":"d1","label":"D1","at":[12,2.5],"width":0.9,"height":2.1,"style":"interior"}
    ],
    "windows": [
      {"id":"w1","label":"W1","at":[15,0],"width":2.4,"height":1.5,"sill":0.9,"style":"wide"}
    ],
    "components": [],
    "smart_devices": [],
    "labels": [
      {"id":"lbl-1","text":"Master Bedroom","position":[15.3,2.5],"size":14}
    ]
  }]
}
JSON;

        $lines = [
            $retry
                ? 'RETRY — rebuild COMPLETE wall graph and EVERY room as editor components.'
                : 'Digitize this floor plan into our smart-home editor components (walls, rooms, doors, windows).',
            "Sheet: {$title} ({$floorLabel}). Image {$index}/{$total}.",
            'Trace thick black walls. Convert every room label into a room polygon with the correct preset.',
            'Place doors on swing symbols and windows on W# marks. Coordinates in meters.',
            'Do not return a simplified rectangle of the whole villa — return the real room layout.',
        ];

        if ($hints['overall_width'] ?? null) {
            $lines[] = 'Target footprint width ≈ '.$hints['overall_width'].' m';
        }
        if ($hints['overall_depth'] ?? null) {
            $lines[] = 'Target footprint depth ≈ '.$hints['overall_depth'].' m';
        }
        if ($notes !== '') {
            $lines[] = "Notes: {$notes}";
        }

        $lines[] = 'JSON schema example:';
        $lines[] = $schema;

        return implode("\n", $lines);
    }

    /**
     * @deprecated Single-pass kept for reference — use classifySheet + extractGeometry.
     * @param  array{overall_width?: float|null, overall_depth?: float|null, wall_height?: float|null, notes?: string|null}  $hints
     * @return array<string, mixed>
     */
    protected function analyzeSheet(
        UploadedFile $image,
        array $hints,
        int $index,
        int $total,
        string $hintName
    ): array {
        return $this->callGemini($image, $this->buildUserPrompt($hints, $index, $total, $hintName), $this->systemInstruction());
    }

    protected function systemInstruction(): string
    {
        return <<<'PROMPT'
You analyze architectural drawing package pages (villa / residential CAD PDF screenshots) for a smart-home 3D editor.

Typical package pages (Art World Engineering style and similar):
- Cover / 3D render / perspective → NOT convertible to walls
- GROUND FLOOR PLAN / FIRST FLOOR PLAN / ROOF PLAN (architectural) → CONVERT
- ELECTRIC PLAN / SANITARY PLAN (still show walls under symbols) → CONVERT only if no better architectural sheet exists; ignore electrical/plumbing symbols
- FRONT/SIDE ELEVATION / SECTION → extract floor-to-floor height only, no wall layout
- ELECTRIC SCHEDULE / door-window schedule tables alone → SKIP

When converting a floor plan:
- Trace thick black wall lines only (ignore red dimension strings, grid bubbles, legends, title blocks, electric symbols, plumbing dashed lines)
- Units: plans often label rooms as 6.50x6.80 (meters) OR 6500/650 (mm/cm). ALWAYS output meters.
- Origin at bottom-left of the MAIN building footprint (ignore "EXISTING BUILDING" annex unless clearly part of the villa)
- X right, Z up on the sheet
- walls: from/to segments in meters; thickness ~0.15–0.30
- doors/windows: use Schedule of Doors/Windows sizes when visible (convert mm→m). Attach via wall_id + position 0..1
- Leave components and smart_devices empty
- Room presets: living, bedroom, kitchen, bathroom, media, dining, office, laundry, garage, default
  (Majlis/Family Hall → living; Bath/Wash → bathroom; Dress → default)

Return ONLY JSON. No markdown.
PROMPT;
    }

    /**
     * @param  array{overall_width?: float|null, overall_depth?: float|null, wall_height?: float|null, notes?: string|null}  $hints
     */
    protected function buildUserPrompt(array $hints, int $index, int $total, string $hintName): string
    {
        $width = $hints['overall_width'] ?? null;
        $depth = $hints['overall_depth'] ?? null;
        $height = $hints['wall_height'] ?? null;
        $notes = trim((string) ($hints['notes'] ?? ''));

        $scaleLines = [];
        if ($width) {
            $scaleLines[] = "- Overall building width (X) ≈ {$width} m";
        }
        if ($depth) {
            $scaleLines[] = "- Overall building depth (Z) ≈ {$depth} m";
        }
        if ($height) {
            $scaleLines[] = "- Wall/floor height ≈ {$height} m";
        }
        if ($scaleLines === []) {
            $scaleLines[] = '- Read labeled dimensions / scale bar / room sizes. Convert mm or cm to meters.';
        }

        $notesLine = $notes !== '' ? "User notes: {$notes}" : 'No extra notes.';
        $hintLine = $hintName !== ''
            ? "User labeled this upload as: \"{$hintName}\" (may be wrong — trust the sheet title on the drawing)."
            : 'No user floor label.';

        $schema = <<<'JSON'
{
  "sheet_type": "architectural_floor_plan|roof_plan|electric_floor_plan|sanitary_floor_plan|elevation|section|schedule|cover|other",
  "sheet_title": "GROUND FLOOR PLAN",
  "usable_for_walls": true,
  "skip_reason": null,
  "floor_label": "Ground Floor",
  "floor_level": 0,
  "scale_confidence": "high|medium|low",
  "dimension_unit_detected": "m|cm|mm",
  "detected_width": 20.0,
  "detected_depth": 15.0,
  "floor_to_floor_height_m": 4.0,
  "warnings": [],
  "floors": [
    {
      "id": "floor-1",
      "name": "Ground Floor",
      "level": 0,
      "height": 4.0,
      "rooms": [
        {"id": "room-majlis", "name": "Majlis", "preset": "living", "polygon": [[10,0],[16.5,0],[16.5,6.5],[10,6.5]]}
      ],
      "walls": [
        {"id": "wall-1", "from": [0,0], "to": [20,0], "height": 4.0, "thickness": 0.2}
      ],
      "doors": [
        {"id": "door-1", "wall_id": "wall-1", "position": 0.45, "width": 1.0, "height": 2.3, "style": "swing_modern"}
      ],
      "windows": [
        {"id": "window-1", "wall_id": "wall-1", "position": 0.7, "width": 2.0, "height": 1.6, "sill": 0.9, "style": "wide"}
      ],
      "components": [],
      "smart_devices": []
    }
  ]
}
JSON;

        return implode("\n", [
            "This is image ".($index + 1)." of {$total} from a villa architectural PDF package.",
            $hintLine,
            'First classify the sheet. If it is NOT a top-down floor/roof layout with walls, set usable_for_walls=false, put a clear skip_reason, and leave floors=[].',
            'If it IS a floor/roof plan, extract walls/rooms/doors/windows carefully in meters.',
            'If it is elevation or section, set sheet_type accordingly, usable_for_walls=false, and fill floor_to_floor_height_m from level markers (e.g. +0.00 to +4.00 => 4.0).',
            'Scale constraints:',
            ...$scaleLines,
            $notesLine,
            'JSON schema (adapt values):',
            $schema,
        ]);
    }

    protected function normalizeSheetType(string $type): string
    {
        $type = Str::lower(trim($type));

        return match (true) {
            str_contains($type, 'architect') || $type === 'floor_plan' || $type === 'plan' => 'architectural_floor_plan',
            str_contains($type, 'roof') => 'roof_plan',
            str_contains($type, 'electric') => 'electric_floor_plan',
            str_contains($type, 'sanitary') || str_contains($type, 'plumb') => 'sanitary_floor_plan',
            str_contains($type, 'elev') => 'elevation',
            str_contains($type, 'section') => 'section',
            str_contains($type, 'schedule') || str_contains($type, 'legend') => 'schedule',
            str_contains($type, 'cover') || str_contains($type, 'render') || str_contains($type, '3d') => 'cover',
            default => $type ?: 'other',
        };
    }

    /**
     * @param  array<string, mixed>  $classification
     */
    protected function isConvertibleSheetType(string $sheetType, array $classification): bool
    {
        if (! isset(self::SHEET_PRIORITY[$sheetType])) {
            return false;
        }

        if (array_key_exists('usable_for_walls', $classification) && $classification['usable_for_walls'] === false) {
            return false;
        }

        return true;
    }

    /**
     * @param  array<string, mixed>  $raw
     */
    protected function hasFloorGeometry(array $raw): bool
    {
        $walls = (array) data_get($raw, 'floors.0.walls', []);

        if (count($walls) >= 1) {
            return true;
        }

        return $this->hasRoomGeometry($raw);
    }

    /**
     * @param  array<string, mixed>  $raw
     */
    protected function hasRoomGeometry(array $raw): bool
    {
        $rooms = (array) data_get($raw, 'floors.0.rooms', []);
        foreach ($rooms as $room) {
            if (! is_array($room)) {
                continue;
            }
            if (count((array) ($room['polygon'] ?? [])) >= 3) {
                return true;
            }
        }

        return false;
    }

    /**
     * @param  array<string, mixed>  $raw
     * @deprecated
     */
    protected function isConvertibleSheet(string $sheetType, array $raw): bool
    {
        return $this->isConvertibleSheetType($sheetType, $raw) && $this->hasFloorGeometry($raw);
    }

    /**
     * @param  array<string, mixed>  $raw
     */
    protected function extractHeightMeters(array $raw): ?float
    {
        foreach (['floor_to_floor_height_m', 'wall_height_m', 'detected_wall_height'] as $key) {
            if (isset($raw[$key]) && is_numeric($raw[$key])) {
                $h = (float) $raw[$key];
                if ($h >= 2.2 && $h <= 5.5) {
                    return round($h, 2);
                }
            }
        }

        return null;
    }

    /**
     * @param  list<array{index:int, raw:array<string,mixed>, sheet_type:string, sheet_title:string, hint_name:string, priority:int}>  $analyzed
     * @param  list<string>  $warnings
     * @return list<array{index:int, raw:array<string,mixed>, sheet_type:string, sheet_title:string, hint_name:string, priority:int}>
     */
    protected function dedupeSheets(array $analyzed, array &$warnings): array
    {
        usort($analyzed, function (array $a, array $b): int {
            $levelA = $this->guessFloorLevel($a);
            $levelB = $this->guessFloorLevel($b);
            if ($levelA !== $levelB) {
                return $levelA <=> $levelB;
            }

            return $b['priority'] <=> $a['priority'];
        });

        $bestByLevel = [];
        foreach ($analyzed as $item) {
            $levelKey = $this->guessFloorLevel($item);
            if (! isset($bestByLevel[$levelKey])) {
                $bestByLevel[$levelKey] = $item;

                continue;
            }

            $warnings[] = $item['sheet_title'].': skipped duplicate of '.$bestByLevel[$levelKey]['sheet_title']
                .' (prefer architectural over electric/sanitary).';
        }

        ksort($bestByLevel);

        return array_values($bestByLevel);
    }

    /**
     * @param  array{raw:array<string,mixed>, sheet_type:string, sheet_title:string, hint_name:string}  $item
     */
    protected function guessFloorLevel(array $item): int
    {
        $raw = $item['raw'];
        if (isset($raw['floor_level']) && is_numeric($raw['floor_level'])) {
            return (int) $raw['floor_level'];
        }

        $hay = Str::lower(
            ($item['hint_name'] ?? '').' '
            .($item['sheet_title'] ?? '').' '
            .(string) ($raw['floor_label'] ?? '').' '
            .$item['sheet_type']
        );

        return match (true) {
            str_contains($hay, 'roof') || str_contains($hay, 'terrace') => 2,
            str_contains($hay, 'second') || str_contains($hay, '2nd') || preg_match('/\bf2\b/', $hay) === 1 => 2,
            str_contains($hay, 'first') || str_contains($hay, '1st') || str_contains($hay, 'upper') => 1,
            str_contains($hay, 'ground') || str_contains($hay, 'gf') || str_contains($hay, 'g+') => 0,
            default => (int) ($item['index'] ?? 0),
        };
    }

    /**
     * @param  array{raw:array<string,mixed>, sheet_type:string, sheet_title:string, hint_name:string}  $item
     */
    protected function resolveFloorName(array $item): string
    {
        if ($item['hint_name'] !== '' && ! preg_match('/^(floor|image)\s*\d+$/i', $item['hint_name'])) {
            // Keep user name only if it doesn't look like auto "Third Floor" for a non-plan.
            $lower = Str::lower($item['hint_name']);
            if (! str_contains($lower, 'third') || str_contains(Str::lower($item['sheet_title']), 'third')) {
                return $item['hint_name'];
            }
        }

        $label = trim((string) ($item['raw']['floor_label'] ?? ''));
        if ($label !== '') {
            return $label;
        }

        $title = Str::upper($item['sheet_title']);

        return match (true) {
            str_contains($title, 'ROOF') => 'Roof Floor',
            str_contains($title, 'FIRST') => 'First Floor',
            str_contains($title, 'GROUND') => 'Ground Floor',
            str_contains($title, 'SECOND') => 'Second Floor',
            default => $item['sheet_title'] ?: $this->defaultFloorName($this->guessFloorLevel($item)),
        };
    }

    protected function defaultFloorName(int $index): string
    {
        return match ($index) {
            0 => 'Ground Floor',
            1 => 'First Floor',
            2 => 'Roof Floor',
            default => 'Floor '.($index + 1),
        };
    }

    /**
     * @param  array<string, mixed>  $raw
     * @param  array{overall_width?: float|null, overall_depth?: float|null, wall_height?: float|null, notes?: string|null}  $hints
     * @return array{floor: array<string, mixed>, max_x: float, max_z: float, warnings: list<string>}
     */
    protected function normalizeFloor(
        array $raw,
        array $hints,
        int $level,
        string $floorId,
        string $floorName,
        float $wallHeight
    ): array {
        $warnings = [];
        foreach ((array) ($raw['warnings'] ?? []) as $warning) {
            if (is_string($warning) && $warning !== '') {
                $warnings[] = $warning;
            }
        }

        $floorsIn = $raw['floors'] ?? null;
        if (! is_array($floorsIn) || $floorsIn === []) {
            throw new RuntimeException('no floor geometry in AI response');
        }

        $unit = Str::lower((string) ($raw['dimension_unit_detected'] ?? 'm'));
        $unitScale = match (true) {
            $unit === 'mm' => 0.001,
            $unit === 'cm' => 0.01,
            default => 1.0,
        };

        $floorRaw = $floorsIn[0];
        $idPrefix = $floorId.'-';

        $unitScale = $this->detectUnitScaleFromRaw($floorRaw, $unitScale);

        $walls = $this->normalizeWalls((array) ($floorRaw['walls'] ?? []), $wallHeight, $idPrefix, $unitScale);
        $rooms = $this->normalizeRooms((array) ($floorRaw['rooms'] ?? []), $idPrefix, $unitScale);
        $doors = $this->normalizeDoors((array) ($floorRaw['doors'] ?? []), $walls, $idPrefix);
        $windows = $this->normalizeWindows((array) ($floorRaw['windows'] ?? []), $walls, $idPrefix);
        $labels = $this->normalizeLabels((array) ($floorRaw['labels'] ?? []), $idPrefix, $unitScale);

        if ($walls === [] && $rooms !== []) {
            $walls = $this->synthesizeWallsFromRooms($rooms, $wallHeight, $idPrefix);
            $warnings[] = 'Walls generated from room outlines.';
        }

        if ($walls === []) {
            throw new RuntimeException('no usable walls extracted');
        }

        [$minX, $minZ, $maxX, $maxZ] = $this->bounds($walls, $rooms);
        $spanX = max(0.5, $maxX - $minX);
        $spanZ = max(0.5, $maxZ - $minZ);

        // Auto-fix if model forgot to convert mm (e.g. spans of thousands).
        if ($spanX > 200 || $spanZ > 200) {
            $fix = ($spanX > 2000 || $spanZ > 2000) ? 0.001 : 0.01;
            $this->scaleGeometry($walls, $rooms, $fix, $fix);
            $this->scaleOpenings($doors, $windows, $fix, $fix);
            [$minX, $minZ, $maxX, $maxZ] = $this->bounds($walls, $rooms);
            $spanX = max(0.5, $maxX - $minX);
            $spanZ = max(0.5, $maxZ - $minZ);
            $warnings[] = 'Auto-converted oversized coordinates to meters.';
        }

        $this->translateGeometry($walls, $rooms, -$minX, -$minZ);
        $this->translateOpenings($doors, $windows, -$minX, -$minZ);

        $refined = $this->geometryNormalizer->refine(
            compact('walls', 'rooms', 'doors', 'windows'),
            [
                'footprint_width_m' => $hints['overall_width'] ?? null,
                'footprint_depth_m' => $hints['overall_depth'] ?? null,
                'detected_width' => $hints['overall_width'] ?? null,
                'detected_depth' => $hints['overall_depth'] ?? null,
                'gentle' => ! isset($hints['overall_width']) && ! isset($hints['overall_depth']),
            ]
        );

        $wallsBeforeRefine = $walls;
        $walls = $refined['walls'];
        $rooms = $refined['rooms'];
        $doors = $refined['doors'];
        $windows = $refined['windows'];
        $warnings = array_merge($warnings, $refined['warnings']);

        if ($walls === [] && $wallsBeforeRefine !== []) {
            $walls = $wallsBeforeRefine;
            $warnings[] = 'Kept raw wall segments after cleanup removed too much geometry.';
        }

        if ($walls === [] && $rooms !== []) {
            $walls = $this->synthesizeWallsFromRooms($rooms, $wallHeight, $idPrefix);
            $warnings[] = 'Walls re-generated from room outlines after cleanup.';
        }

        if ($walls === []) {
            throw new RuntimeException('walls lost during geometry cleanup');
        }

        [$minX, $minZ, $maxX, $maxZ] = $this->bounds($walls, $rooms);
        $maxX -= $minX;
        $maxZ -= $minZ;

        $targetW = isset($hints['overall_width']) ? (float) $hints['overall_width'] : null;
        $targetD = isset($hints['overall_depth']) ? (float) $hints['overall_depth'] : null;

        if ($targetW || $targetD) {
            $scaleX = $targetW ? $targetW / max($maxX, 0.5) : 1.0;
            $scaleZ = $targetD ? $targetD / max($maxZ, 0.5) : 1.0;
            if ($targetW && ! $targetD) {
                $scaleZ = $scaleX;
            } elseif ($targetD && ! $targetW) {
                $scaleX = $scaleZ;
            }
            if (abs($scaleX - 1.0) > 0.02 || abs($scaleZ - 1.0) > 0.02) {
                $this->scaleGeometry($walls, $rooms, $scaleX, $scaleZ);
                $this->scaleOpenings($doors, $windows, $scaleX, $scaleZ);
                $maxX *= $scaleX;
                $maxZ *= $scaleZ;
            }
        }

        if (! $targetW && ! $targetD) {
            $confidence = (string) ($raw['scale_confidence'] ?? 'medium');
            if ($confidence === 'low') {
                $warnings[] = 'Scale confidence is low — enter overall width/depth if sizes look wrong.';
            }
            if ($maxX > 80 || $maxZ > 80 || $maxX < 2 || $maxZ < 2) {
                $warnings[] = 'Detected footprint looks unusual; verify dimensions.';
            }
        }

        if ($rooms === []) {
            $warnings[] = 'No rooms detected — walls imported; paint rooms later.';
        }

        // Rebuild labels after all transforms so they sit on final room centers.
        $labels = $this->labelsFromRooms($rooms, $idPrefix);

        // Reject obviously empty / title-page extractions (e.g. one "PROPOSED VILLA" box).
        $roomNames = collect($rooms)->pluck('name')->map(fn ($n) => Str::lower((string) $n))->all();
        $looksLikeTitlePage = ! ($hints['from_json'] ?? false)
            && count($rooms) <= 2
            && count($walls) < 12
            && collect($roomNames)->contains(fn ($n) => str_contains($n, 'proposed') || str_contains($n, 'villa') || str_contains($n, 'project'));

        if ($looksLikeTitlePage) {
            throw new RuntimeException('sheet looks like a cover/title page, not a floor plan layout');
        }

        return [
            'floor' => [
                'id' => $floorId,
                'name' => $floorName,
                'level' => $level,
                'height' => $wallHeight,
                'rooms' => $rooms,
                'walls' => $walls,
                'doors' => $doors,
                'windows' => $windows,
                'components' => [],
                'smart_devices' => [],
                'labels' => $labels,
            ],
            'max_x' => $maxX,
            'max_z' => $maxZ,
            'warnings' => $warnings,
        ];
    }

    /**
     * @param  list<mixed>  $walls
     * @return list<array<string, mixed>>
     */
    protected function normalizeWalls(array $walls, float $wallHeight, string $idPrefix = '', float $unitScale = 1.0): array
    {
        $out = [];
        $i = 1;

        foreach ($walls as $wall) {
            if (! is_array($wall)) {
                continue;
            }

            $from = $this->wallEndpoint($wall, 'from', 'start', 'x1', 'y1', 'z1', $unitScale);
            $to = $this->wallEndpoint($wall, 'to', 'end', 'x2', 'y2', 'z2', $unitScale);
            if (! $from || ! $to) {
                continue;
            }

            $len = hypot($to[0] - $from[0], $to[1] - $from[1]);
            if ($len < 0.05) {
                continue;
            }

            $id = $this->safeId($wall['id'] ?? null, $idPrefix.'wall-'.$i);
            if ($idPrefix !== '' && ! str_starts_with($id, $idPrefix)) {
                $id = $idPrefix.$id;
            }

            $thickness = $this->floatOr($wall['thickness'] ?? null, self::DEFAULT_WALL_THICKNESS, 0.05, 0.6);
            if ($unitScale !== 1.0 && isset($wall['thickness']) && is_numeric($wall['thickness'])) {
                $thickness = $this->floatOr(((float) $wall['thickness']) * $unitScale, self::DEFAULT_WALL_THICKNESS, 0.05, 0.6);
            }

            $out[] = [
                'id' => $id,
                'from' => $from,
                'to' => $to,
                'height' => $this->floatOr($wall['height'] ?? null, $wallHeight, 2.0, 6.0),
                'thickness' => $thickness,
            ];
            $i++;
        }

        return $out;
    }

    /**
     * @param  list<mixed>  $rooms
     * @return list<array<string, mixed>>
     */
    protected function normalizeRooms(array $rooms, string $idPrefix = '', float $unitScale = 1.0): array
    {
        $out = [];
        $i = 1;

        foreach ($rooms as $room) {
            if (! is_array($room)) {
                continue;
            }

            $polygon = [];
            foreach ((array) ($room['polygon'] ?? []) as $pt) {
                $p = $this->point($pt, $unitScale);
                if ($p) {
                    $polygon[] = $p;
                }
            }

            if (count($polygon) < 3) {
                continue;
            }

            $preset = $this->guessPreset(
                (string) ($room['preset'] ?? ''),
                (string) ($room['name'] ?? '')
            );

            $id = $this->safeId($room['id'] ?? null, $idPrefix.'room-'.$i);
            if ($idPrefix !== '' && ! str_starts_with($id, $idPrefix)) {
                $id = $idPrefix.$id;
            }

            $out[] = [
                'id' => $id,
                'name' => (string) ($room['name'] ?? Str::headline($preset)),
                'preset' => $preset,
                'color' => self::ROOM_PRESET_COLORS[$preset] ?? self::ROOM_PRESET_COLORS['default'],
                'polygon' => $polygon,
            ];
            $i++;
        }

        return $out;
    }

    /**
     * @param  list<mixed>  $doors
     * @param  list<array<string, mixed>>  $walls
     * @return list<array<string, mixed>>
     */
    protected function normalizeDoors(array $doors, array $walls, string $idPrefix = ''): array
    {
        $wallIds = array_column($walls, 'id');
        $wallIdMap = $this->prefixedIdLookup($wallIds, $idPrefix);
        $out = [];
        $i = 1;

        $styles = [
            'swing_modern', 'swing_classic', 'sliding_glass', 'double_french',
            'pivot_modern', 'arched', 'interior', 'garage',
        ];

        foreach ($doors as $door) {
            if (! is_array($door)) {
                continue;
            }

            $wallId = $this->resolvePrefixedId((string) ($door['wall_id'] ?? ''), $wallIdMap, $wallIds);

            $style = (string) ($door['style'] ?? 'swing_modern');
            if (! in_array($style, $styles, true)) {
                $style = 'swing_modern';
            }

            $width = $this->openingMeters($door['width'] ?? null, 0.9);
            $height = $this->openingMeters($door['height'] ?? null, 2.1);

            $id = $this->safeId($door['id'] ?? null, $idPrefix.'door-'.$i);
            if ($idPrefix !== '' && ! str_starts_with($id, $idPrefix)) {
                $id = $idPrefix.$id;
            }

            $entry = [
                'id' => $id,
                'wall_id' => $wallId ?? '',
                'position' => isset($door['position']) && is_numeric($door['position'])
                    ? (float) $door['position']
                    : null,
                'width' => $this->floatOr($width, 0.9, 0.6, 3.5),
                'height' => $this->floatOr($height, 2.1, 1.8, 3.0),
                'style' => $style,
            ];

            if (isset($door['at']) && is_array($door['at'])) {
                $entry['at'] = $this->point($door['at'], 1.0);
            } elseif (isset($door['position_xy']) && is_array($door['position_xy'])) {
                $entry['at'] = $this->point($door['position_xy'], 1.0);
            }

            if ($wallId !== null) {
                $entry['position'] = $this->floatOr($entry['position'], 0.5, 0.05, 0.95);
            }

            $out[] = $entry;
            $i++;
        }

        return $out;
    }

    /**
     * @param  list<mixed>  $windows
     * @param  list<array<string, mixed>>  $walls
     * @return list<array<string, mixed>>
     */
    protected function normalizeWindows(array $windows, array $walls, string $idPrefix = ''): array
    {
        $wallIds = array_column($walls, 'id');
        $wallIdMap = $this->prefixedIdLookup($wallIds, $idPrefix);
        $out = [];
        $i = 1;

        $styles = ['standard', 'wide', 'sliding', 'bay', 'floor_ceiling', 'arched', 'skylight'];

        foreach ($windows as $window) {
            if (! is_array($window)) {
                continue;
            }

            $wallId = $this->resolvePrefixedId((string) ($window['wall_id'] ?? ''), $wallIdMap, $wallIds);

            $style = (string) ($window['style'] ?? 'standard');
            if (! in_array($style, $styles, true)) {
                $style = 'standard';
            }

            $width = $this->openingMeters($window['width'] ?? null, 1.2);
            $height = $this->openingMeters($window['height'] ?? null, 1.2);
            $sill = $this->openingMeters($window['sill'] ?? null, 0.9);

            $id = $this->safeId($window['id'] ?? null, $idPrefix.'window-'.$i);
            if ($idPrefix !== '' && ! str_starts_with($id, $idPrefix)) {
                $id = $idPrefix.$id;
            }

            $entry = [
                'id' => $id,
                'wall_id' => $wallId ?? '',
                'position' => isset($window['position']) && is_numeric($window['position'])
                    ? (float) $window['position']
                    : null,
                'width' => $this->floatOr($width, 1.2, 0.4, 4.0),
                'height' => $this->floatOr($height, 1.2, 0.4, 3.0),
                'sill' => $this->floatOr($sill, 0.9, 0.0, 2.0),
                'style' => $style,
            ];

            if (isset($window['at']) && is_array($window['at'])) {
                $entry['at'] = $this->point($window['at'], 1.0);
            } elseif (isset($window['position_xy']) && is_array($window['position_xy'])) {
                $entry['at'] = $this->point($window['position_xy'], 1.0);
            }

            if ($wallId !== null) {
                $entry['position'] = $this->floatOr($entry['position'], 0.5, 0.05, 0.95);
            }

            $out[] = $entry;
            $i++;
        }

        return $out;
    }

    /**
     * Convert opening sizes that may be mm (e.g. 1000) into meters.
     */
    protected function openingMeters(mixed $value, float $default): float
    {
        if (! is_numeric($value)) {
            return $default;
        }

        $n = (float) $value;
        if ($n > 30) {
            return $n / 1000; // mm
        }
        if ($n > 10) {
            return $n / 100; // cm
        }

        return $n;
    }

    /**
     * @param  list<string>  $ids
     * @return array<string, string>
     */
    protected function prefixedIdLookup(array $ids, string $idPrefix): array
    {
        $map = [];
        foreach ($ids as $id) {
            $map[$id] = $id;
            if ($idPrefix !== '' && str_starts_with($id, $idPrefix)) {
                $map[substr($id, strlen($idPrefix))] = $id;
            }
        }

        return $map;
    }

    /**
     * @param  array<string, string>  $map
     * @param  list<string>  $ids
     */
    protected function resolvePrefixedId(string $rawId, array $map, array $ids): ?string
    {
        if ($rawId === '') {
            return null;
        }

        if (isset($map[$rawId])) {
            return $map[$rawId];
        }

        if (in_array($rawId, $ids, true)) {
            return $rawId;
        }

        return null;
    }

    /**
     * @param  list<array<string, mixed>>  $walls
     * @param  list<array<string, mixed>>  $rooms
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
            foreach ($room['polygon'] as [$x, $z]) {
                $consume($x, $z);
            }
        }

        if (! is_finite($minX)) {
            return [0.0, 0.0, 10.0, 8.0];
        }

        return [$minX, $minZ, $maxX, $maxZ];
    }

    /**
     * @param  list<array<string, mixed>>  $doors
     * @param  list<array<string, mixed>>  $windows
     */
    protected function translateOpenings(array &$doors, array &$windows, float $dx, float $dz): void
    {
        foreach ($doors as &$door) {
            if (isset($door['at']) && is_array($door['at'])) {
                $door['at'][0] += $dx;
                $door['at'][1] += $dz;
            }
        }
        unset($door);

        foreach ($windows as &$window) {
            if (isset($window['at']) && is_array($window['at'])) {
                $window['at'][0] += $dx;
                $window['at'][1] += $dz;
            }
        }
        unset($window);
    }

    /**
     * @param  list<array<string, mixed>>  $doors
     * @param  list<array<string, mixed>>  $windows
     */
    protected function scaleOpenings(array &$doors, array &$windows, float $sx, float $sz): void
    {
        foreach ($doors as &$door) {
            if (isset($door['at']) && is_array($door['at'])) {
                $door['at'][0] *= $sx;
                $door['at'][1] *= $sz;
            }
        }
        unset($door);

        foreach ($windows as &$window) {
            if (isset($window['at']) && is_array($window['at'])) {
                $window['at'][0] *= $sx;
                $window['at'][1] *= $sz;
            }
        }
        unset($window);
    }

    /**
     * @param  list<array<string, mixed>>  $walls
     * @param  list<array<string, mixed>>  $rooms
     */
    protected function translateGeometry(array &$walls, array &$rooms, float $dx, float $dz): void
    {
        foreach ($walls as &$wall) {
            $wall['from'][0] += $dx;
            $wall['from'][1] += $dz;
            $wall['to'][0] += $dx;
            $wall['to'][1] += $dz;
        }
        unset($wall);

        foreach ($rooms as &$room) {
            foreach ($room['polygon'] as &$pt) {
                $pt[0] += $dx;
                $pt[1] += $dz;
            }
            unset($pt);
        }
        unset($room);
    }

    /**
     * @param  list<array<string, mixed>>  $walls
     * @param  list<array<string, mixed>>  $rooms
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
     * @return array{0: float, 1: float}|null
     */
    protected function point(mixed $value, float $unitScale = 1.0): ?array
    {
        if (! is_array($value)) {
            return null;
        }

        if (isset($value['x'], $value['z']) && is_numeric($value['x']) && is_numeric($value['z'])) {
            return [
                round(((float) $value['x']) * $unitScale, 3),
                round(((float) $value['z']) * $unitScale, 3),
            ];
        }

        if (isset($value['x'], $value['y']) && is_numeric($value['x']) && is_numeric($value['y'])) {
            return [
                round(((float) $value['x']) * $unitScale, 3),
                round(((float) $value['y']) * $unitScale, 3),
            ];
        }

        if (count($value) < 2) {
            return null;
        }

        $keys = array_keys($value);
        $a = $value[$keys[0]] ?? null;
        $b = $value[$keys[1]] ?? null;

        if (! is_numeric($a) || ! is_numeric($b)) {
            return null;
        }

        return [
            round(((float) $a) * $unitScale, 3),
            round(((float) $b) * $unitScale, 3),
        ];
    }

    /**
     * @param  array<string, mixed>  $wall
     * @return array{0: float, 1: float}|null
     */
    protected function wallEndpoint(
        array $wall,
        string $fromKey,
        string $altKey,
        string $xKey,
        string $yKey,
        string $zKey,
        float $unitScale
    ): ?array {
        $pt = $this->point($wall[$fromKey] ?? $wall[$altKey] ?? null, $unitScale);
        if ($pt) {
            return $pt;
        }

        if (isset($wall[$xKey], $wall[$zKey]) && is_numeric($wall[$xKey]) && is_numeric($wall[$zKey])) {
            return $this->point([$wall[$xKey], $wall[$zKey]], $unitScale);
        }

        if (isset($wall[$xKey], $wall[$yKey]) && is_numeric($wall[$xKey]) && is_numeric($wall[$yKey])) {
            return $this->point([$wall[$xKey], $wall[$yKey]], $unitScale);
        }

        return null;
    }

    /**
     * @param  array<string, mixed>  $floorRaw
     */
    protected function detectUnitScaleFromRaw(array $floorRaw, float $currentScale): float
    {
        if ($currentScale !== 1.0) {
            return $currentScale;
        }

        $max = 0.0;
        foreach ((array) ($floorRaw['walls'] ?? []) as $wall) {
            if (! is_array($wall)) {
                continue;
            }
            foreach (['from', 'to', 'start', 'end'] as $key) {
                $pt = $wall[$key] ?? null;
                if (is_array($pt)) {
                    foreach ($pt as $v) {
                        if (is_numeric($v)) {
                            $max = max($max, abs((float) $v));
                        }
                    }
                }
            }
            foreach (['x1', 'x2', 'y1', 'y2', 'z1', 'z2'] as $key) {
                if (isset($wall[$key]) && is_numeric($wall[$key])) {
                    $max = max($max, abs((float) $wall[$key]));
                }
            }
        }

        foreach ((array) ($floorRaw['rooms'] ?? []) as $room) {
            foreach ((array) ($room['polygon'] ?? []) as $pt) {
                if (is_array($pt)) {
                    foreach ($pt as $v) {
                        if (is_numeric($v)) {
                            $max = max($max, abs((float) $v));
                        }
                    }
                }
            }
        }

        if ($max > 5000) {
            return 0.001;
        }
        if ($max > 80) {
            return 0.01;
        }

        return $currentScale;
    }

    /**
     * @param  list<array<string, mixed>>  $rooms
     * @return list<array<string, mixed>>
     */
    protected function synthesizeWallsFromRooms(array $rooms, float $wallHeight, string $idPrefix): array
    {
        $walls = [];
        $seen = [];
        $i = 1;

        foreach ($rooms as $room) {
            $poly = $room['polygon'] ?? [];
            $count = count($poly);
            if ($count < 3) {
                continue;
            }

            for ($j = 0; $j < $count; $j++) {
                $from = $poly[$j];
                $to = $poly[($j + 1) % $count];
                $key = $this->wallEdgeKey($from, $to);
                $rev = $this->wallEdgeKey($to, $from);
                if (isset($seen[$key]) || isset($seen[$rev])) {
                    continue;
                }
                $seen[$key] = true;

                $len = hypot($to[0] - $from[0], $to[1] - $from[1]);
                if ($len < 0.05) {
                    continue;
                }

                $walls[] = [
                    'id' => $idPrefix.'wall-syn-'.$i,
                    'from' => $from,
                    'to' => $to,
                    'height' => $wallHeight,
                    'thickness' => self::DEFAULT_WALL_THICKNESS,
                ];
                $i++;
            }
        }

        return $walls;
    }

    /**
     * @param  array{0: float, 1: float}  $a
     * @param  array{0: float, 1: float}  $b
     */
    protected function wallEdgeKey(array $a, array $b): string
    {
        return round($a[0], 2).','.round($a[1], 2).'-'.round($b[0], 2).','.round($b[1], 2);
    }

    protected function floatOr(mixed $value, float $default, float $min, float $max): float
    {
        $n = is_numeric($value) ? (float) $value : $default;

        return max($min, min($max, $n));
    }

    protected function safeId(mixed $id, string $fallback): string
    {
        $id = is_string($id) ? trim($id) : '';
        if ($id === '' || ! preg_match('/^[a-zA-Z0-9_\-]+$/', $id)) {
            return $fallback;
        }

        return $id;
    }

    protected function guessPreset(string $preset, string $name): string
    {
        $allowed = array_keys(self::ROOM_PRESET_COLORS);
        $preset = Str::lower(trim($preset));
        if (in_array($preset, $allowed, true)) {
            return $preset;
        }

        $hay = Str::lower($name.' '.$preset);

        return match (true) {
            str_contains($hay, 'bed') || str_contains($hay, 'master') || str_contains($hay, 'm.bed') => 'bedroom',
            str_contains($hay, 'kitchen') || str_contains($hay, 'cook') || str_contains($hay, 'pantry') => 'kitchen',
            str_contains($hay, 'bath') || str_contains($hay, 'wc') || str_contains($hay, 'toilet')
                || str_contains($hay, 'wash') || str_contains($hay, 't&b') || str_contains($hay, 't & b') => 'bathroom',
            str_contains($hay, 'living') || str_contains($hay, 'lounge') || str_contains($hay, 'salon')
                || str_contains($hay, 'majlis') || str_contains($hay, 'family') || str_contains($hay, 'seating')
                || $hay === 'open' || str_contains($hay, 'hall') => 'living',
            str_contains($hay, 'dining') => 'dining',
            str_contains($hay, 'office') || str_contains($hay, 'study') => 'office',
            str_contains($hay, 'laundry') || str_contains($hay, 'utility') || str_contains($hay, 'ironing') => 'laundry',
            str_contains($hay, 'garage') || str_contains($hay, 'parking') => 'garage',
            str_contains($hay, 'media') || str_contains($hay, 'cinema') || str_contains($hay, 'tv') => 'media',
            str_contains($hay, 'maid') || str_contains($hay, 'dress') || str_contains($hay, 'store')
                || str_contains($hay, 'lift') || str_contains($hay, 'balcony') || str_contains($hay, 'stair') => 'default',
            default => 'default',
        };
    }

    /**
     * @param  list<mixed>  $labels
     * @return list<array<string, mixed>>
     */
    protected function normalizeLabels(array $labels, string $idPrefix = '', float $unitScale = 1.0): array
    {
        $out = [];
        $i = 1;

        foreach ($labels as $label) {
            if (! is_array($label)) {
                continue;
            }

            $text = trim((string) ($label['text'] ?? $label['name'] ?? ''));
            if ($text === '') {
                continue;
            }

            $pos = $this->point($label['position'] ?? $label['at'] ?? null, $unitScale);
            if (! $pos) {
                continue;
            }

            $id = $this->safeId($label['id'] ?? null, $idPrefix.'label-'.$i);
            if ($idPrefix !== '' && ! str_starts_with($id, $idPrefix)) {
                $id = $idPrefix.$id;
            }

            $out[] = [
                'id' => $id,
                'text' => $text,
                'position' => $pos,
                'size' => (int) $this->floatOr($label['size'] ?? null, 14, 10, 48),
                'bold' => (bool) ($label['bold'] ?? false),
            ];
            $i++;
        }

        return $out;
    }

    /**
     * @param  list<array<string, mixed>>  $rooms
     * @return list<array<string, mixed>>
     */
    protected function labelsFromRooms(array $rooms, string $idPrefix): array
    {
        $out = [];
        $i = 1;
        foreach ($rooms as $room) {
            $poly = $room['polygon'] ?? [];
            if (count($poly) < 3) {
                continue;
            }
            $cx = array_sum(array_column($poly, 0)) / count($poly);
            $cz = array_sum(array_column($poly, 1)) / count($poly);
            $out[] = [
                'id' => $idPrefix.'label-'.$i,
                'text' => (string) ($room['name'] ?? 'Room'),
                'position' => [round($cx, 3), round($cz, 3)],
                'size' => 14,
                'bold' => false,
            ];
            $i++;
        }

        return $out;
    }
}
