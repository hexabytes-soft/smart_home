@php
$geminiPlanRulesPrompt = <<<'PROMPT'
You are a CAD digitizer. Convert this architectural floor-plan PDF into JSON for a smart-home 2D/3D map editor.

RULES
1. Output ONLY valid JSON. No markdown. No explanation.
2. Units: METERS only. If a dimension is 6500, convert to 6.5.
3. Origin: bottom-left corner of the MAIN building footprint.
4. Axes: X = right, Z = up on the sheet (not Y).
5. Ignore: title block, stamps, watermarks, dimension text, grid bubbles, electrical symbols, furniture drawings.
6. Process ONLY top-down floor/roof plans (GROUND FLOOR PLAN, FIRST FLOOR PLAN, ROOF PLAN…).
   Skip elevations, sections, schedules, cover pages, 3D renders.
7. One floors[] item per floor plan page.
8. Trace ALL thick black walls (outer + interior). A villa floor usually needs 25–80 wall segments.
9. Every labeled room becomes a rooms[] polygon.
10. Every door swing becomes a doors[] item.
11. Every window (W1, W2…) becomes a windows[] item.

COORDINATES
- walls.from / walls.to = [x, z]
- rooms.polygon = [[x,z],[x,z],...] closed loop, ≥3 points
- doors.at / windows.at = [x, z] world position on the wall
- labels.position = [x, z]

ALLOWED VALUES
room.preset:
  bedroom | living | kitchen | bathroom | dining | office | laundry | garage | media | default

Mapping hints:
  Majlis / Family / Hall / OPEN → living
  Bed Room / M.Bed → bedroom
  T&B / Bath / WC → bathroom
  Kitchen / Pantry → kitchen
  Laundry / Ironing → laundry
  Dress / Store / Maid / Lift / Balcony / Stairs → default

door.style:
  swing_modern | swing_classic | sliding_glass | double_french | pivot_modern | arched | interior | garage

window.style:
  standard | wide | sliding | bay | floor_ceiling | arched | skylight

DEFAULT SIZES (if schedule missing)
- wall thickness: 0.20 exterior, 0.15 interior
- wall/floor height: 3.0 (or read from elevation if present)
- door: width 0.90, height 2.10, style "interior"
- main entrance door: width 1.00, height 2.20, style "swing_modern"
- window: width 1.20, height 1.40, sill 0.90, style "standard"
- wide exterior window: width 2.40, height 1.50, style "wide"

QUALITY TARGET (per floor)
- walls ≥ 25
- rooms ≥ 8 (if labels exist)
- doors ≥ 6
- windows ≥ 4
Do NOT return a single big rectangle for the whole villa.

JSON SCHEMA (follow exactly):
{
  "version": 1,
  "unit": "m",
  "active_floor": 0,
  "footprint_width_m": 20.0,
  "footprint_depth_m": 17.0,
  "floors": [
    {
      "id": "floor-1",
      "name": "Ground Floor",
      "level": 0,
      "height": 3.0,
      "rooms": [
        {
          "id": "room-majlis",
          "name": "Majlis",
          "preset": "living",
          "polygon": [[0,0],[6.5,0],[6.5,5.2],[0,5.2]]
        }
      ],
      "walls": [
        {
          "id": "wall-1",
          "from": [0,0],
          "to": [20,0],
          "height": 3.0,
          "thickness": 0.2
        },
        {
          "id": "wall-2",
          "from": [6.5,0],
          "to": [6.5,5.2],
          "height": 3.0,
          "thickness": 0.15
        }
      ],
      "doors": [
        {
          "id": "door-1",
          "label": "D1",
          "at": [3.2,0],
          "width": 1.0,
          "height": 2.2,
          "style": "swing_modern"
        }
      ],
      "windows": [
        {
          "id": "window-1",
          "label": "W1",
          "at": [10.0,0],
          "width": 2.4,
          "height": 1.5,
          "sill": 0.9,
          "style": "wide"
        }
      ],
      "components": [],
      "smart_devices": [],
      "labels": [
        {
          "id": "label-1",
          "text": "Majlis",
          "position": [3.2,2.6],
          "size": 14
        }
      ]
    }
  ],
  "warnings": []
}

FLOOR NAMING
- level 0 = Ground Floor
- level 1 = First Floor
- level 2 = Roof Floor (or Second Floor if not roof)

Also fill:
- footprint_width_m / footprint_depth_m from outer dimension chains
- warnings[] for anything uncertain (scale, skipped pages, missing doors)
PROMPT;
@endphp

{{-- Modal --}}
<div id="gemini-plan-rules-modal" class="hidden fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="gemini-plan-rules-title">
    <div class="w-full max-w-3xl rounded-2xl border border-surface-700 bg-surface-900 shadow-2xl max-h-[90vh] flex flex-col">
        <div class="flex items-start justify-between gap-3 px-5 py-4 border-b border-surface-800 shrink-0">
            <div>
                <h3 id="gemini-plan-rules-title" class="text-sm font-semibold text-white">Gemini floor-plan rules</h3>
                <p class="text-[11px] text-surface-500 mt-0.5">Copy this prompt into Gemini with your PDF, then paste the JSON into the map importer</p>
            </div>
            <button type="button" data-gemini-rules-close class="p-1.5 rounded-lg text-surface-400 hover:text-white hover:bg-surface-800 transition-colors" aria-label="Close">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        </div>

        <div class="p-5 space-y-4 overflow-y-auto studio-scroll flex-1 min-h-0">
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                <div class="rounded-xl border border-surface-700 bg-surface-800/50 p-3">
                    <p class="text-surface-500 uppercase tracking-wide text-[10px] mb-1">Wall</p>
                    <p class="text-surface-200 font-mono leading-relaxed">id, from:[x,z], to:[x,z], thickness, height</p>
                </div>
                <div class="rounded-xl border border-surface-700 bg-surface-800/50 p-3">
                    <p class="text-surface-500 uppercase tracking-wide text-[10px] mb-1">Room</p>
                    <p class="text-surface-200 font-mono leading-relaxed">id, name, preset, polygon</p>
                </div>
                <div class="rounded-xl border border-surface-700 bg-surface-800/50 p-3">
                    <p class="text-surface-500 uppercase tracking-wide text-[10px] mb-1">Door</p>
                    <p class="text-surface-200 font-mono leading-relaxed">id, at:[x,z], width, height, style</p>
                </div>
                <div class="rounded-xl border border-surface-700 bg-surface-800/50 p-3">
                    <p class="text-surface-500 uppercase tracking-wide text-[10px] mb-1">Window</p>
                    <p class="text-surface-200 font-mono leading-relaxed">id, at:[x,z], width, height, sill, style</p>
                </div>
                <div class="rounded-xl border border-surface-700 bg-surface-800/50 p-3">
                    <p class="text-surface-500 uppercase tracking-wide text-[10px] mb-1">Label</p>
                    <p class="text-surface-200 font-mono leading-relaxed">id, text, position:[x,z], size</p>
                </div>
                <div class="rounded-xl border border-surface-700 bg-surface-800/50 p-3">
                    <p class="text-surface-500 uppercase tracking-wide text-[10px] mb-1">Axes</p>
                    <p class="text-surface-200 font-mono leading-relaxed">meters · X right · Z up</p>
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between gap-2 mb-1.5">
                    <label for="gemini-plan-rules-text" class="text-xs font-medium text-surface-300">Full prompt for Gemini</label>
                    <button type="button" id="gemini-plan-rules-copy" class="btn-secondary text-[11px] py-1.5 px-3">Copy prompt</button>
                </div>
                <textarea id="gemini-plan-rules-text" readonly rows="18" class="w-full rounded-xl border-surface-700 bg-surface-950 text-[11px] font-mono text-surface-300 leading-relaxed resize-y">{{ $geminiPlanRulesPrompt }}</textarea>
                <p id="gemini-plan-rules-copied" class="hidden mt-1.5 text-[11px] text-emerald-400">Copied — paste into Gemini with your PDF.</p>
            </div>
        </div>

        <div class="px-5 py-4 border-t border-surface-800 flex items-center justify-end gap-2 shrink-0">
            <button type="button" data-gemini-rules-close class="btn-secondary text-xs py-2 px-4">Close</button>
        </div>
    </div>
</div>

@once
    @push('scripts')
        <script>
            (function () {
                const modal = document.getElementById('gemini-plan-rules-modal');
                if (!modal) return;

                const open = () => modal.classList.remove('hidden');
                const close = () => modal.classList.add('hidden');

                document.querySelectorAll('[data-gemini-rules-open]').forEach((btn) => {
                    btn.addEventListener('click', (e) => {
                        e.preventDefault();
                        open();
                    });
                });

                modal.querySelectorAll('[data-gemini-rules-close]').forEach((btn) => {
                    btn.addEventListener('click', close);
                });

                modal.addEventListener('click', (e) => {
                    if (e.target === modal) close();
                });

                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape' && !modal.classList.contains('hidden')) close();
                });

                const copyBtn = document.getElementById('gemini-plan-rules-copy');
                const textEl = document.getElementById('gemini-plan-rules-text');
                const copied = document.getElementById('gemini-plan-rules-copied');
                copyBtn?.addEventListener('click', async () => {
                    try {
                        await navigator.clipboard.writeText(textEl?.value || '');
                        copied?.classList.remove('hidden');
                        setTimeout(() => copied?.classList.add('hidden'), 2500);
                    } catch (_) {
                        textEl?.select();
                        document.execCommand('copy');
                        copied?.classList.remove('hidden');
                        setTimeout(() => copied?.classList.add('hidden'), 2500);
                    }
                });
            })();
        </script>
    @endpush
@endonce
