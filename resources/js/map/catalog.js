/** Door styles available in the studio */
export const FLOOR_LEVEL_PRESETS = [
    { level: -2, label: 'Basement -2', labelAr: 'قبو ٢', short: 'B2' },
    { level: -1, label: 'Basement', labelAr: 'تحت الأرض', short: 'B1' },
    { level: 0, label: 'Ground', labelAr: 'الأرضي', short: 'G' },
    { level: 1, label: 'First', labelAr: 'الأول', short: '1' },
    { level: 2, label: 'Second', labelAr: 'الثاني', short: '2' },
    { level: 3, label: 'Third', labelAr: 'الثالث', short: '3' },
    { level: 4, label: 'Fourth', labelAr: 'الرابع', short: '4' },
    { level: 5, label: 'Fifth', labelAr: 'الخامس', short: '5' },
];

export function floorLabelForLevel(level, bilingual = true) {
    const preset = FLOOR_LEVEL_PRESETS.find((p) => p.level === level);
    if (!preset) {
        const fallback = level < 0 ? `Basement ${Math.abs(level)}` : `Floor ${level}`;
        return bilingual ? fallback : fallback;
    }
    return bilingual ? `${preset.labelAr} · ${preset.label}` : preset.labelAr;
}

export function floorShortLabel(floor) {
    const level = floor?.level ?? 0;
    const preset = FLOOR_LEVEL_PRESETS.find((p) => p.level === level);
    if (preset) return preset.labelAr;
    return floor?.name?.split('·')[0]?.trim() || `F${level}`;
}

export function nextFloorLevel(floors) {
    const levels = (floors || []).map((f) => Number(f.level) || 0);
    if (!levels.length) return 0;
    return Math.max(...levels) + 1;
}

export const DOOR_STYLES = {
    swing_modern: { label: 'Modern Swing', icon: '🚪', width: 1.0, height: 2.1, type: 'swing_modern' },
    swing_classic: { label: 'Classic Panel', icon: '🪵', width: 1.0, height: 2.1, type: 'swing_classic' },
    sliding_glass: { label: 'Glass Sliding', icon: '↔️', width: 1.6, height: 2.2, type: 'sliding_glass' },
    double_french: { label: 'French Double', icon: '🚪', width: 1.8, height: 2.1, type: 'double_french' },
    pivot_modern: { label: 'Pivot Modern', icon: '↩️', width: 1.0, height: 2.2, type: 'pivot_modern' },
    arched: { label: 'Arched', icon: '⌒', width: 1.0, height: 2.3, type: 'arched' },
    interior: { label: 'Interior Flush', icon: '🚪', width: 0.9, height: 2.05, type: 'interior' },
    garage: { label: 'Garage Wide', icon: '🚗', width: 2.4, height: 2.1, type: 'garage' },
};

/** Window styles */
export const WINDOW_STYLES = {
    standard: { label: 'Standard', icon: '🪟', width: 1.2, height: 1.2, sill: 0.9, type: 'standard' },
    wide: { label: 'Wide Picture', icon: '🖼️', width: 2.0, height: 1.4, sill: 0.8, type: 'wide' },
    sliding: { label: 'Sliding Glass', icon: '↔️', width: 1.8, height: 2.0, sill: 0.1, type: 'sliding' },
    bay: { label: 'Bay Window', icon: '🏠', width: 2.2, height: 1.3, sill: 0.7, type: 'bay' },
    floor_ceiling: { label: 'Floor-to-Ceiling', icon: '🌅', width: 1.5, height: 2.4, sill: 0.05, type: 'floor_ceiling' },
    arched: { label: 'Arched', icon: '⌒', width: 1.2, height: 1.5, sill: 0.9, type: 'arched' },
    skylight: { label: 'Skylight', icon: '☀️', width: 1.0, height: 0.8, sill: 2.0, type: 'skylight' },
};

/** Home Assistant device categories */
export const HA_CATEGORIES = {
    all: { label: 'All', icon: '🏠' },
};

/**
 * Placeable smart devices for floor-image annotation.
 * Keys stay stable for map_data persistence.
 * icon = emoji glyph shown in UI + on the 2D map.
 * price = unit price in Omani Rial (OMR / ر.ع.).
 */
export const SMART_CATALOG = {
    smoke_detector: { label: 'Smoke detector', icon: '🚨', price: 8, category: 'all', haDomain: 'binary_sensor', model: 'Smoke Alarm', mount: 'ceiling', defaultHeight: 2.73, w: 0.14, h: 0.05 },
    gas_detector: { label: 'Gas detector', icon: '⛽', price: 12, category: 'all', haDomain: 'binary_sensor', model: 'Gas Alarm', mount: 'ceiling', defaultHeight: 2.73, w: 0.12, h: 0.05 },
    vibration_sensor: { label: 'Vibration sensor', icon: '📳', price: 6, category: 'all', haDomain: 'binary_sensor', model: 'Vibration', mount: 'wall', defaultHeight: 1.0, w: 0.08, h: 0.08 },
    door_sensor: { label: 'Door sensor', icon: '🚪', price: 4, category: 'all', haDomain: 'binary_sensor', model: 'Door Contact', mount: 'door', defaultHeight: 1.0, w: 0.08, h: 0.12 },
    intercom: { label: 'Entercom', icon: '📞', price: 45, category: 'all', haDomain: 'switch', model: 'Video Intercom', mount: 'wall', defaultHeight: 1.45, w: 0.15, h: 0.22 },
    main_screen: { label: 'Main Screen', icon: '🖥️', price: 80, category: 'all', haDomain: 'media_player', model: 'Wall Display', mount: 'wall', defaultHeight: 1.4, w: 0.6, h: 0.45 },
    motion_sensor: { label: 'Motion sensor', icon: '👁️', price: 7, category: 'all', haDomain: 'binary_sensor', model: 'PIR Motion', mount: 'wall', defaultHeight: 2.2, w: 0.12, h: 0.12 },
    micro_sensor: { label: 'Micro sensor', icon: '🎤', price: 9, category: 'all', haDomain: 'binary_sensor', model: 'Sound / Mic', mount: 'wall', defaultHeight: 2.2, w: 0.1, h: 0.1 },
    camera: { label: 'Camera', icon: '📷', price: 2, category: 'all', haDomain: 'camera', model: 'Dome Camera', mount: 'ceiling', defaultHeight: 2.72, w: 0.2, h: 0.15 },
    ir_remote: { label: 'IR remote', icon: '📡', price: 15, category: 'all', haDomain: 'remote', model: 'Broadlink RM', mount: 'wall', defaultHeight: 2.3, w: 0.08, h: 0.08 },
    wifi_router: { label: 'Wifi router', icon: '🌐', price: 25, category: 'all', haDomain: 'device_tracker', model: 'Home Router', mount: 'floor', w: 0.22, h: 0.06 },
    access_point: { label: 'Access point', icon: '📶', price: 35, category: 'all', haDomain: 'device_tracker', model: 'Ceiling AP', mount: 'ceiling', defaultHeight: 2.74, w: 0.25, h: 0.08 },
    socket: { label: 'Socket', icon: '🔌', price: 3, category: 'all', haDomain: 'switch', model: 'Smart Socket', mount: 'wall', defaultHeight: 0.35, w: 0.08, h: 0.12 },
    switch: { label: 'Switch', icon: '🔘', price: 4, category: 'all', haDomain: 'switch', model: 'Wall Switch', mount: 'wall', defaultHeight: 1.2, w: 0.12, h: 0.18 },
    speakers: { label: 'Speakers', icon: '🔊', price: 20, category: 'all', haDomain: 'media_player', model: 'Wall Speakers', mount: 'wall', defaultHeight: 1.8, w: 0.22, h: 0.32 },
};

export const CURRENCY = {
    code: 'OMR',
    label: 'ر.ع.',
    name: 'Omani Rial',
    symbolUrl: '/images/omr-symbol.png',
};

export function omrSymbolUrl() {
    if (typeof window !== 'undefined' && window.location?.origin) {
        return `${window.location.origin}${CURRENCY.symbolUrl}`;
    }
    return CURRENCY.symbolUrl;
}

/** Plain text for titles / status bars */
export function formatOmrPlain(amount) {
    const n = Number(amount);
    const safe = Number.isFinite(n) ? n : 0;
    return `${safe.toFixed(3)} ${CURRENCY.code}`;
}

/** HTML with official Omani Rial symbol (inherits text color via CSS mask) */
export function formatOmr(amount) {
    const n = Number(amount);
    const safe = Number.isFinite(n) ? n : 0;
    const src = omrSymbolUrl();
    return `<span class="omr-amount"><span class="omr-symbol" role="img" aria-label="OMR" style="--omr-mask:url('${src}')"></span>${safe.toFixed(3)}</span>`;
}

/** Print-safe HTML using a solid ink PNG (CSS masks often fail in print) */
export function formatOmrPrint(amount, symbolUrl = null) {
    const n = Number(amount);
    const safe = Number.isFinite(n) ? n : 0;
    const src = symbolUrl || `${typeof window !== 'undefined' ? window.location.origin : ''}/images/omr-symbol-ink.png`;
    return `<span class="omr-amount"><img class="omr-symbol" src="${src}" alt="OMR" width="18" height="18">${safe.toFixed(3)}</span>`;
}

export function deviceUnitPrice(type, device = null) {
    const stored = device?.price;
    if (stored != null && Number.isFinite(Number(stored))) return Number(stored);
    const catalog = SMART_CATALOG[type];
    return Number(catalog?.price) || 0;
}

/** Product UoM: piece | meter */
export function catalogUnit(type) {
    return SMART_CATALOG[type]?.unit || 'piece';
}

export function isMeterUnit(unitOrType) {
    const unit = SMART_CATALOG[unitOrType]?.unit || unitOrType;
    return unit === 'meter';
}

export function unitShortLabel(unit) {
    return unit === 'meter' ? 'm' : 'pc';
}

/** Quantity for quotation: meters or piece count (default 1). */
export function deviceQuantity(device) {
    const qty = Number(device?.qty);
    if (Number.isFinite(qty) && qty > 0) return qty;
    return 1;
}

/**
 * Replace the in-memory smart catalog with rows from the Smart Components admin.
 * Mutates SMART_CATALOG / SMART_CATALOG_ORDER so all map modules stay in sync.
 */
export function applySmartCatalogFromServer(items) {
    if (!Array.isArray(items) || !items.length) return;

    for (const key of Object.keys(SMART_CATALOG)) {
        delete SMART_CATALOG[key];
    }
    SMART_CATALOG_ORDER.length = 0;

    items.forEach((item) => {
        if (!item?.key) return;
        SMART_CATALOG[item.key] = {
            label: item.name || item.key,
            icon: item.icon || '●',
            price: Number(item.price) || 0,
            buy_price: Number(item.buy_price) || 0,
            unit: item.unit === 'meter' ? 'meter' : 'piece',
            category: 'all',
            haDomain: 'sensor',
            model: item.model || item.name || item.key,
            mount: item.mount || 'wall',
            defaultHeight: item.mount === 'ceiling' ? 2.73 : item.mount === 'floor' ? 0.05 : 1.4,
            w: 0.14,
            h: 0.14,
        };
        SMART_CATALOG_ORDER.push(item.key);
    });
}

/** Preferred display order in the studio asset list */
export const SMART_CATALOG_ORDER = [
    'smoke_detector',
    'gas_detector',
    'vibration_sensor',
    'door_sensor',
    'intercom',
    'main_screen',
    'motion_sensor',
    'micro_sensor',
    'camera',
    'ir_remote',
    'wifi_router',
    'access_point',
    'socket',
    'switch',
    'speakers',
];

/** Device types that auto on/off with room presence */
export const AUTO_LIGHT_TYPES = new Set(
    Object.entries(SMART_CATALOG).filter(([, s]) => s.autoLight).map(([k]) => k)
);

export function isAutoLightType(type) {
    return AUTO_LIGHT_TYPES.has(type) || type === 'lamp';
}

export function getDevicesByCategory(category) {
    const entries = SMART_CATALOG_ORDER
        .filter((key) => SMART_CATALOG[key])
        .map((key) => [key, SMART_CATALOG[key]]);

    if (category === 'all') return entries;

    return entries.filter(([, spec]) => spec.category === category);
}

/** Furniture catalog — TV sized for ~50" (111×62 cm) */
export const FURNITURE_CATALOG = {
    sofa: { label: 'Sofa', icon: '🛋️', w: 2.2, d: 0.9, h: 0.85, color: 0x4b5563 },
    bed: { label: 'Bed', icon: '🛏️', w: 2.0, d: 1.6, h: 0.55, color: 0x6366f1 },
    dining_table: { label: 'Dining Table', icon: '🍽️', w: 1.6, d: 0.9, h: 0.75, color: 0x92400e },
    chair: { label: 'Chair', icon: '🪑', w: 0.5, d: 0.5, h: 0.9, color: 0x78716c },
    desk: { label: 'Desk', icon: '🖥️', w: 1.4, d: 0.7, h: 0.75, color: 0x57534e },
    tv: { label: 'TV 50"', icon: '📺', w: 1.11, d: 0.06, h: 0.62, color: 0x111827, emissive: 0x1e3a5f, inches: 50 },
    fridge: { label: 'Fridge', icon: '🧊', w: 0.7, d: 0.7, h: 1.8, color: 0xe5e7eb },
    oven: { label: 'Oven', icon: '🔥', w: 0.6, d: 0.6, h: 0.9, color: 0x374151 },
    sink: { label: 'Sink', icon: '🚰', w: 0.8, d: 0.5, h: 0.9, color: 0x9ca3af },
    bathtub: { label: 'Bathtub', icon: '🛁', w: 1.7, d: 0.75, h: 0.55, color: 0xf3f4f6 },
    toilet: { label: 'Toilet', icon: '🚽', w: 0.45, d: 0.7, h: 0.85, color: 0xffffff },
    wardrobe: { label: 'Wardrobe', icon: '👔', w: 1.2, d: 0.6, h: 2.2, color: 0x78350f },
    lamp: { label: 'Floor Lamp', icon: '💡', w: 0.35, d: 0.35, h: 1.5, color: 0xfbbf24, emissive: 0xf59e0b, autoLight: true },
    stairs: { label: 'Stairs', icon: '🪜', w: 1.2, d: 2.4, h: 0.2, color: 0x6b7280, steps: 6 },
    plant: { label: 'Plant', icon: '🪴', w: 0.4, d: 0.4, h: 0.9, color: 0x16a34a },
};

/** Group furniture for catalog UI */
export const FURNITURE_CATEGORIES = {
    living: { label: 'Living', icon: '🛋️', items: ['sofa', 'tv', 'lamp', 'plant'] },
    bedroom: { label: 'Bedroom', icon: '🛏️', items: ['bed', 'wardrobe', 'lamp'] },
    kitchen: { label: 'Kitchen', icon: '🍳', items: ['fridge', 'oven', 'sink', 'dining_table', 'chair'] },
    bathroom: { label: 'Bathroom', icon: '🚿', items: ['toilet', 'bathtub', 'sink'] },
    other: { label: 'Other', icon: '📦', items: ['desk', 'stairs', 'plant'] },
};

/** Pre-built room kits — click to place walls + furniture + smart devices */
export const KIT_CATEGORIES = {
    bathroom: { label: 'Bathroom', icon: '🚿' },
    kitchen: { label: 'Kitchen', icon: '🍳' },
    bedroom: { label: 'Bedroom', icon: '🛏️' },
    living: { label: 'Living', icon: '🛋️' },
    utility: { label: 'Utility', icon: '🔧' },
};

export const ROOM_KITS = {
    bathroom_standard: {
        label: 'Standard Bathroom',
        category: 'bathroom',
        icon: '🚿',
        preset: 'bathroom',
        description: '2.5 × 2 m · tub, toilet, sink, lights',
        footprint: { w: 2.5, d: 2.0 },
        structure: true,
        door: { wall: 0, position: 0.5, width: 0.85, style: 'interior' },
        items: [
            { kind: 'component', type: 'toilet', at: [0.45, 0.45], rotation: 0 },
            { kind: 'component', type: 'bathtub', at: [1.55, 1.15], rotation: 0 },
            { kind: 'component', type: 'sink', at: [0.55, 1.55], rotation: Math.PI },
            { kind: 'smart', type: 'smart_light', at: [1.25, 1.0], mount: 'ceiling' },
            { kind: 'smart', type: 'motion_sensor', at: [2.35, 1.0], mount: 'wall', height: 2.2 },
        ],
    },
    bathroom_powder: {
        label: 'Powder Room',
        category: 'bathroom',
        icon: '🚽',
        preset: 'bathroom',
        description: '1.8 × 1.5 m · compact guest bath',
        footprint: { w: 1.8, d: 1.5 },
        structure: true,
        door: { wall: 0, position: 0.5, width: 0.75, style: 'interior' },
        items: [
            { kind: 'component', type: 'toilet', at: [0.4, 0.4], rotation: 0 },
            { kind: 'component', type: 'sink', at: [1.0, 1.0], rotation: Math.PI },
            { kind: 'smart', type: 'smart_light', at: [0.9, 0.75], mount: 'ceiling' },
        ],
    },
    kitchen_galley: {
        label: 'Galley Kitchen',
        category: 'kitchen',
        icon: '🍳',
        preset: 'kitchen',
        description: '3 × 2.5 m · fridge, oven, sink, dining',
        footprint: { w: 3.0, d: 2.5 },
        structure: true,
        door: { wall: 0, position: 0.35, width: 0.9, style: 'interior' },
        items: [
            { kind: 'component', type: 'fridge', at: [0.45, 0.45], rotation: 0 },
            { kind: 'component', type: 'oven', at: [1.2, 0.45], rotation: 0 },
            { kind: 'component', type: 'sink', at: [2.0, 0.45], rotation: 0 },
            { kind: 'component', type: 'dining_table', at: [1.5, 1.6], rotation: 0 },
            { kind: 'component', type: 'chair', at: [1.0, 1.7], rotation: 0 },
            { kind: 'component', type: 'chair', at: [2.0, 1.7], rotation: Math.PI },
            { kind: 'smart', type: 'smart_light', at: [1.5, 1.25], mount: 'ceiling' },
        ],
    },
    kitchen_l_shape: {
        label: 'L-Shape Kitchen',
        category: 'kitchen',
        icon: '🥘',
        preset: 'kitchen',
        description: '4 × 3 m · full kitchen + dining nook',
        footprint: { w: 4.0, d: 3.0 },
        structure: true,
        door: { wall: 0, position: 0.25, width: 0.9, style: 'interior' },
        items: [
            { kind: 'component', type: 'fridge', at: [0.5, 0.5], rotation: 0 },
            { kind: 'component', type: 'oven', at: [1.3, 0.5], rotation: 0 },
            { kind: 'component', type: 'sink', at: [2.1, 0.5], rotation: 0 },
            { kind: 'component', type: 'dining_table', at: [2.8, 2.0], rotation: 0 },
            { kind: 'component', type: 'chair', at: [2.3, 2.1], rotation: 0 },
            { kind: 'component', type: 'chair', at: [3.3, 2.1], rotation: Math.PI },
            { kind: 'smart', type: 'smart_light', at: [2.0, 1.5], mount: 'ceiling' },
            { kind: 'smart', type: 'motion_sensor', at: [3.85, 1.5], mount: 'wall', height: 2.2 },
        ],
    },
    bedroom_master: {
        label: 'Master Bedroom',
        category: 'bedroom',
        icon: '🛏️',
        preset: 'bedroom',
        description: '4.5 × 4 m · bed, wardrobe, smart lighting',
        footprint: { w: 4.5, d: 4.0 },
        structure: true,
        door: { wall: 0, position: 0.7, width: 0.9, style: 'interior' },
        items: [
            { kind: 'component', type: 'bed', at: [2.25, 2.5], rotation: 0 },
            { kind: 'component', type: 'wardrobe', at: [0.7, 3.2], rotation: Math.PI / 2 },
            { kind: 'component', type: 'lamp', at: [0.8, 1.2], rotation: 0 },
            { kind: 'component', type: 'lamp', at: [3.7, 1.2], rotation: 0 },
            { kind: 'smart', type: 'smart_light', at: [2.25, 2.0], mount: 'ceiling' },
            { kind: 'smart', type: 'temp_sensor', at: [4.3, 2.0], mount: 'wall', height: 1.5 },
        ],
    },
    bedroom_guest: {
        label: 'Guest Bedroom',
        category: 'bedroom',
        icon: '🛌',
        preset: 'bedroom',
        description: '3 × 3 m · bed + bedside lamp',
        footprint: { w: 3.0, d: 3.0 },
        structure: true,
        door: { wall: 0, position: 0.5, width: 0.85, style: 'interior' },
        items: [
            { kind: 'component', type: 'bed', at: [1.5, 1.8], rotation: 0 },
            { kind: 'component', type: 'lamp', at: [0.6, 0.8], rotation: 0 },
            { kind: 'smart', type: 'smart_light', at: [1.5, 1.5], mount: 'ceiling' },
        ],
    },
    living_basic: {
        label: 'Living Room',
        category: 'living',
        icon: '🛋️',
        preset: 'living',
        description: '5 × 4 m · sofa, TV, lamp, plant',
        footprint: { w: 5.0, d: 4.0 },
        structure: true,
        door: { wall: 0, position: 0.2, width: 1.0, style: 'swing_modern' },
        items: [
            { kind: 'component', type: 'sofa', at: [2.5, 2.8], rotation: 0 },
            { kind: 'component', type: 'tv', at: [2.5, 0.6], rotation: 0 },
            { kind: 'component', type: 'lamp', at: [0.7, 0.7], rotation: 0 },
            { kind: 'component', type: 'plant', at: [4.2, 3.2], rotation: 0 },
            { kind: 'smart', type: 'smart_light', at: [2.5, 2.0], mount: 'ceiling' },
            { kind: 'smart', type: 'smart_curtain', at: [4.85, 2.0], mount: 'wall', height: 2.4 },
        ],
    },
    laundry_room: {
        label: 'Laundry',
        category: 'utility',
        icon: '🧺',
        preset: 'laundry',
        description: '2 × 2.5 m · sink + smart plug',
        footprint: { w: 2.0, d: 2.5 },
        structure: true,
        door: { wall: 0, position: 0.5, width: 0.8, style: 'interior' },
        items: [
            { kind: 'component', type: 'sink', at: [1.0, 0.5], rotation: 0 },
            { kind: 'smart', type: 'smart_plug', at: [0.5, 1.8], mount: 'floor' },
            { kind: 'smart', type: 'smart_light', at: [1.0, 1.25], mount: 'ceiling' },
            { kind: 'smart', type: 'water_leak', at: [1.0, 0.3], mount: 'floor' },
        ],
    },
    office_nook: {
        label: 'Home Office',
        category: 'utility',
        icon: '💼',
        preset: 'office',
        description: '3 × 2.5 m · desk, chair, lamp',
        footprint: { w: 3.0, d: 2.5 },
        structure: true,
        door: { wall: 0, position: 0.5, width: 0.85, style: 'interior' },
        items: [
            { kind: 'component', type: 'desk', at: [1.5, 1.3], rotation: 0 },
            { kind: 'component', type: 'chair', at: [1.5, 1.9], rotation: Math.PI },
            { kind: 'component', type: 'lamp', at: [0.5, 0.5], rotation: 0 },
            { kind: 'smart', type: 'smart_light', at: [1.5, 1.25], mount: 'ceiling' },
        ],
    },
};

export function getKitsByCategory(category) {
    return Object.entries(ROOM_KITS)
        .filter(([, kit]) => category === 'all' || kit.category === category)
        .sort((a, b) => a[1].label.localeCompare(b[1].label));
}

export const ROOM_PRESETS = {
    living: { label: 'Living Room', color: 0xa7f3d0 },
    bedroom: { label: 'Bedroom', color: 0x99f6e4 },
    kitchen: { label: 'Kitchen', color: 0xfde68a },
    bathroom: { label: 'Bathroom', color: 0xbae6fd },
    media: { label: 'Media Room', color: 0xbfdbfe },
    dining: { label: 'Dining', color: 0xfecdd3 },
    office: { label: 'Office', color: 0xe9d5ff },
    laundry: { label: 'Laundry', color: 0xc7d2fe },
    garage: { label: 'Garage', color: 0xd1d5db },
    default: { label: 'Room', color: 0xe5e7eb },
};

export function hexColor(val) {
    if (typeof val === 'number') return val;
    if (typeof val === 'string' && val.startsWith('#')) return parseInt(val.replace('#', ''), 16);
    return 0xe5e7eb;
}

/** Point inside polygon (ray casting) */
export function pointInPolygon(x, z, polygon) {
    if (!polygon?.length || polygon.length < 3) return false;
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const [xi, zi] = polygon[i];
        const [xj, zj] = polygon[j];
        if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) inside = !inside;
    }
    return inside;
}
