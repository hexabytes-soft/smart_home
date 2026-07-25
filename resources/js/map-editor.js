import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import {
    buildWallGroup,
    buildDoorGroup,
    buildWindowGroup,
    buildFurnitureGroup,
    buildSmartDeviceGroup,
    buildFloorMesh,
    buildCeiling,
    buildRoomLabel,
    isInDoorway,
    getDoorCenter,
    applyDoorOpenAmount,
    wallLen,
} from './map/builders.js';
import {
    DOOR_STYLES,
    WINDOW_STYLES,
    SMART_CATALOG,
    FURNITURE_CATALOG,
    FURNITURE_CATEGORIES,
    ROOM_KITS,
    KIT_CATEGORIES,
    ROOM_PRESETS,
    FLOOR_LEVEL_PRESETS,
    floorLabelForLevel,
    floorShortLabel,
    nextFloorLevel,
    getDevicesByCategory,
    isAutoLightType,
    pointInPolygon,
    hexColor,
    formatOmr,
    deviceUnitPrice,
    SMART_CATALOG_ORDER,
    applySmartCatalogFromServer,
} from './map/catalog.js';
import { Plan2DRenderer } from './map/plan2d-renderer.js';

const GRID_SNAP = 0.5;
const DEFAULT_WALL_HEIGHT = 2.8;
const DEFAULT_WALL_THICKNESS = 0.15;
const WALK_RADIUS = 0.15;

function uid(prefix) {
    return `${prefix}-${crypto.randomUUID().slice(0, 8)}`;
}

function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
}

function snap(value, enabled) {
    if (!enabled) return Math.round(value * 100) / 100;
    return Math.round(value / GRID_SNAP) * GRID_SNAP;
}

function snapPoint(x, z, enabled) {
    return [snap(x, enabled), snap(z, enabled)];
}

function resolveEntity(object) {
    let current = object;
    while (current) {
        if (current.userData?.type && current.userData?.id) return current;
        current = current.parent;
    }
    return null;
}

function wallLength(wall) {
    return Math.hypot(wall.to[0] - wall.from[0], wall.to[1] - wall.from[1]);
}

function projectOnWall(wall, x, z) {
    const [x1, z1] = wall.from;
    const [x2, z2] = wall.to;
    const dx = x2 - x1;
    const dz = z2 - z1;
    const len2 = dx * dx + dz * dz;
    if (len2 < 0.001) return 0.5;
    return clamp(((x - x1) * dx + (z - z1) * dz) / len2, 0, 1);
}

function openingPositionLimits(wall, openingWidth) {
    const len = wallLength(wall) || 0.1;
    const half = (openingWidth || 1) / 2;
    return [half / len, 1 - half / len];
}

export class MapEditor {
    constructor(root) {
        this.root = root;
        this.canEdit = root.dataset.canEdit === 'true';
        this.projectWidth = parseFloat(root.dataset.width) || 20;
        this.projectDepth = parseFloat(root.dataset.depth) || 15;
        this.mapData = JSON.parse(root.dataset.mapData || '{}');
        this.viewerOnly = root.dataset.viewerOnly === 'true';
        this.initialViewMode = root.dataset.initialViewMode || (this.viewerOnly ? 'plan2d' : 'plan2d');
        this.liveUrl = root.dataset.liveUrl || '';
        this.liveRevision = root.dataset.mapRevision || '';
        this.liveSyncTimer = null;

        try {
            applySmartCatalogFromServer(JSON.parse(root.dataset.smartCatalog || '[]'));
        } catch (_) {
            // keep built-in fallback catalog
        }

        this.container = root.querySelector('#map-canvas');
        this.longPressTimer = null;
        this.longPressMoved = false;
        this.deviceDetailsEl = document.querySelector('#device-details-popover');
        this.toolButtons = root.querySelectorAll('[data-tool]');
        this.kitsCatalogEl = root.querySelector('#kits-catalog');
        this.itemsCatalogEl = root.querySelector('#items-catalog');
        this.doorsCatalogEl = root.querySelector('#doors-catalog');
        this.windowsCatalogEl = root.querySelector('#windows-catalog');
        this.roomsCatalogEl = root.querySelector('#rooms-catalog');
        this.componentButtons = [];
        this.smartButtons = [];
        this.doorStyleButtons = [];
        this.windowStyleButtons = [];
        this.roomPaintButtons = [];
        this.kitButtons = [];
        this.catalogTabs = root.querySelectorAll('[data-catalog-tab]');
        this.catalogPanels = root.querySelectorAll('[data-catalog-panel]');
        this.statusEl = root.querySelector('#map-status');
        this.contextEl = root.querySelector('#studio-context');
        this.placingBadgeEl = root.querySelector('#studio-placing-badge');
        this.assetScrollEl = root.querySelector('.studio-asset-content');
        this.outlinerSearchEl = root.querySelector('#outliner-search');
        this.outlinerCountEl = root.querySelector('#outliner-count');
        this.outlinerFilter = '';
        this.propsEl = root.querySelector('#map-properties');
        this.listEl = root.querySelector('#map-elements-list');
        this.saveBtn = document.querySelector('#save-map-btn');
        this.clearFloorBtn = document.querySelector('#clear-floor-btn');
        this.snapToggle = root.querySelector('#snap-toggle');
        this.viewModeButtons = root.querySelectorAll('[data-view-mode]');
        this.studioPanels = root.querySelectorAll('[data-studio-panel]');
        this.simOverlay = root.querySelector('#sim-overlay');
        this.form = root.querySelector('#map-form');
        this.input = root.querySelector('#map_data_input');
        this.widthInput = root.querySelector('#map_width_input');
        this.depthInput = root.querySelector('#map_depth_input');
        this.importUrl = root.dataset.underlayUrl || '';
        this.importBtn = document.querySelector('#import-plan-btn');
        this.importModal = document.querySelector('#import-plan-modal');
        this.importForm = document.querySelector('#import-plan-form');
        this.importError = document.querySelector('#import-plan-error');
        this.importSubmit = document.querySelector('#import-plan-submit');
        this.importCloseButtons = document.querySelectorAll('[data-import-close]');
        this.importImageInput = document.querySelector('#import-plan-image');
        this.importPasteZone = document.querySelector('#import-paste-zone');
        this.importPreview = document.querySelector('#import-image-preview');
        this.importPreviewImg = document.querySelector('#import-image-preview-img');
        this.importPreviewName = document.querySelector('#import-image-preview-name');
        this.importFile = null;
        this.floorSwitcherEl = root.querySelector('#floor-switcher');
        this.quotationBtn = document.querySelector('#quotation-btn');
        this.quotationModal = document.querySelector('#quotation-modal');
        this.quotationLinesEl = document.querySelector('#quotation-lines');
        this.quotationTotalsEl = document.querySelector('#quotation-totals');
        this.quotationClientInput = document.querySelector('#quotation-client');
        this.quotationNotesInput = document.querySelector('#quotation-notes');
        this.quotationDiscountInput = document.querySelector('#quotation-discount');
        this.quotationTvaInput = document.querySelector('#quotation-tva');
        this.quotationPrintBtn = document.querySelector('#quotation-print-btn');
        this.activeFloorIndex = Number(this.mapData.active_floor) || 0;

        this.viewMode = this.initialViewMode;
        this.eyeHeight = 1.65;
        this.walkKeys = { w: false, a: false, s: false, d: false, shift: false };
        this.look360 = { yaw: 0, pitch: 0, dragging: false, lastX: 0, lastY: 0 };
        this.walkLookDrag = false;
        this.doorAnimStates = new Map();
        this.nearDoorId = null;
        this.currentRoomId = null;
        this.nightMode = this.isNightTime();
        this.smartCategoryFilter = 'all';
        this.kitCategoryFilter = 'all';
        this.furnitureCategoryFilter = 'all';
        this.haCategoryEl = root.querySelector('#ha-category-filter');
        this.haDeviceGridEl = root.querySelector('#ha-device-grid');
        this.nightModeBtn = root.querySelector('#night-mode-btn');
        this.walkVelocity = new THREE.Vector3();

        this.tool = 'select';
        this.snapEnabled = true;
        this.placingComponent = null;
        this.placingSmart = null;
        this.placingKit = null;
        this.selectedDoorStyle = 'swing_modern';
        this.selectedWindowStyle = 'standard';
        this.selected = null;
        this.wallStart = null;
        this.wallPreviewEnd = null;
        this.cursorWorld = null;
        this.previewLine = null;
        this.startMarker = null;
        this.previewComponent = null;
        this.previewKit = null;
        this.drag = null;
        this.labelEditor = null;
        this.meshes = { walls: new Map(), doors: new Map(), windows: new Map(), components: new Map(), smart: new Map() };
        this.decorMeshes = [];

        this.normalizeMapData();
        this.initScene();
        this.bindEvents();

        if (this.viewerOnly) {
            this.updateNightModeUI();
            this.renderFloorSwitcher();
            this.rebuildScene();
            this.setViewMode('plan2d');
            this.startLiveSync();
            requestAnimationFrame(() => this.onResize());
            this.animate();
            return;
        }

        this.setTool('select');
        this.setCatalogTab('smart');
        this.renderAllCatalogs();
        this.updateStyleButtons();
        this.updateNightModeUI();
        this.renderFloorSwitcher();
        if (this.viewMode !== 'plan2d') {
            this.rebuildScene();
        }
        this.renderElementsList();
        this.updateStudioContext();
        this.setViewMode(this.initialViewMode);
        requestAnimationFrame(() => this.onResize());
        this.animate();
    }

    normalizeMapData() {
        if (!Array.isArray(this.mapData.floors) || !this.mapData.floors.length) {
            this.mapData.floors = [{
                id: 'floor-1', name: 'Ground Floor', level: 0, height: DEFAULT_WALL_HEIGHT,
                rooms: [], walls: [], doors: [], windows: [], components: [], smart_devices: [], labels: [],
            }];
        }

        this.activeFloorIndex = clamp(
            Number(this.mapData.active_floor) || 0,
            0,
            this.mapData.floors.length - 1
        );
        this.mapData.active_floor = this.activeFloorIndex;

        this.mapData.floors.forEach((floor, index) => {
            floor.id ??= `floor-${index + 1}`;
            floor.name ??= floorLabelForLevel(floor.level ?? index);
            floor.level ??= index;
            floor.height ??= DEFAULT_WALL_HEIGHT;
            floor.walls ??= [];
            floor.doors ??= [];
            floor.windows ??= [];
            floor.components ??= [];
            floor.smart_devices ??= [];
            floor.labels ??= [];
            floor.rooms ??= [];

            floor.walls.forEach((w) => {
                w.thickness ??= DEFAULT_WALL_THICKNESS;
                w.height ??= floor.height || DEFAULT_WALL_HEIGHT;
            });
            floor.doors.forEach((d) => {
                if (d.type === 'swing') d.style = 'swing_modern';
                if (d.type === 'sliding') d.style = 'sliding_glass';
                if (d.type === 'double') d.style = 'double_french';
                d.style ??= d.type ?? 'swing_modern';
            });
            floor.windows.forEach((w) => {
                w.style ??= w.type ?? 'standard';
            });
            floor.rooms.forEach((r) => {
                if (r.preset && !r.color) r.color = ROOM_PRESETS[r.preset]?.color;
            });
        });
    }

    getFloor() {
        if (!this.mapData.floors?.length) {
            this.mapData.floors = [{
                id: 'floor-1', name: 'Ground Floor', level: 0, height: DEFAULT_WALL_HEIGHT,
                rooms: [], walls: [], doors: [], windows: [], components: [], smart_devices: [], labels: [],
            }];
            this.activeFloorIndex = 0;
        }

        if (this.activeFloorIndex < 0 || this.activeFloorIndex >= this.mapData.floors.length) {
            this.activeFloorIndex = 0;
        }

        const floor = this.mapData.floors[this.activeFloorIndex];
        floor.walls ??= [];
        floor.doors ??= [];
        floor.windows ??= [];
        floor.components ??= [];
        floor.smart_devices ??= [];
        floor.labels ??= [];
        floor.rooms ??= [];
        floor.height ??= DEFAULT_WALL_HEIGHT;
        return floor;
    }

    setActiveFloor(index) {
        if (!this.mapData.floors?.length) return;
        const next = clamp(index, 0, this.mapData.floors.length - 1);
        if (next === this.activeFloorIndex) return;

        this.activeFloorIndex = next;
        this.mapData.active_floor = next;
        this.selected = null;
        this.wallStart = null;
        this.wallPreviewEnd = null;
        this.doorAnimStates.clear();
        this.nearDoorId = null;
        this.currentRoomId = null;
        this.renderFloorSwitcher();
        if (this.viewMode === 'plan2d') {
            this.renderPlan2d();
        } else {
            this.rebuildScene();
        }
        if (!this.viewerOnly) {
            this.renderElementsList();
            this.renderProperties();
        }
        const floor = this.getFloor();
        if (this.viewerOnly && this.viewMode === 'plan2d') {
            this.renderPlan2d();
        }
        this.setStatus(this.viewerOnly
            ? `Viewing ${floor.name || `Floor ${next + 1}`}`
            : `Editing ${floor.name || `Floor ${next + 1}`}`);
    }

    renderFloorSwitcher() {
        if (!this.floorSwitcherEl) return;
        const floors = this.mapData.floors || [];
        const sorted = floors
            .map((floor, index) => ({ floor, index }))
            .sort((a, b) => (a.floor.level ?? 0) - (b.floor.level ?? 0));

        this.floorSwitcherEl.classList.remove('hidden');
        this.floorSwitcherEl.classList.add('flex');
        const tabs = sorted.map(({ floor, index }) => {
            const active = index === this.activeFloorIndex;
            const label = floorShortLabel(floor);
            const title = floor.name || floorLabelForLevel(floor.level ?? 0);
            return `<button type="button" data-floor-index="${index}" class="${active ? 'view-mode-active' : 'view-mode-btn'}" title="${title}">${label}</button>`;
        }).join('');

        const addBtn = this.canEdit && !this.viewerOnly
            ? `<button type="button" data-floor-add class="view-mode-btn !px-2" title="Add floor layer">+</button>`
            : '';

        this.floorSwitcherEl.innerHTML = `<div class="studio-segment studio-floor-switcher">${tabs}${addBtn}</div>`;
    }

    addFloorLayer() {
        if (!this.canEdit) return;
        const floors = this.mapData.floors;
        const level = nextFloorLevel(floors);
        floors.push({
            id: uid('floor'),
            name: floorLabelForLevel(level),
            level,
            height: DEFAULT_WALL_HEIGHT,
            rooms: [],
            walls: [],
            doors: [],
            windows: [],
            components: [],
            smart_devices: [],
            labels: [],
        });
        this.setActiveFloor(floors.length - 1);
        this.setStatus(`Added ${floorLabelForLevel(level)} — switch floors in the top bar`);
    }

    initScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0a0f1a);
        this.scene.fog = new THREE.Fog(0x0a0f1a, 50, 140);

        const w = Math.max(this.container.clientWidth, 1);
        const h = Math.max(this.container.clientHeight, 1);

        this.camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 500);
        const cam = this.mapData.camera || {};
        this.camera.position.set(...(cam.position || [this.projectWidth / 2, 12, this.projectDepth + 12]));

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(w, h);
        this.renderer.shadowMap.enabled = true;
        this.container.appendChild(this.renderer.domElement);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target.set(...(cam.target || [this.projectWidth / 2, 0, this.projectDepth / 2]));
        this.controls.enableDamping = true;
        this.controls.maxPolarAngle = Math.PI / 2.05;

        this.scene.add(this.ambientLight = new THREE.AmbientLight(0xfff5eb, 0.45));
        this.sun = new THREE.DirectionalLight(0xfff8f0, 1.1);
        this.sun.position.set(15, 25, 10);
        this.sun.castShadow = true;
        this.sun.shadow.mapSize.set(2048, 2048);
        this.sun.shadow.camera.near = 0.5;
        this.sun.shadow.camera.far = 80;
        this.scene.add(this.sun);
        this.hemiLight = new THREE.HemisphereLight(0xdbeafe, 0x44403c, 0.35);
        this.scene.add(this.hemiLight);

        const gridSize = Math.max(this.projectWidth, this.projectDepth) * 1.5;
        this.grid = new THREE.GridHelper(gridSize, gridSize * 2, 0x1a4a5a, 0x152030);
        this.scene.add(this.grid);

        this.groundPlane = new THREE.Mesh(
            new THREE.PlaneGeometry(gridSize * 2, gridSize * 2),
            new THREE.MeshBasicMaterial({ visible: false })
        );
        this.groundPlane.rotation.x = -Math.PI / 2;
        this.scene.add(this.groundPlane);

        this.handleGroup = new THREE.Group();
        this.scene.add(this.handleGroup);

        this.raycaster = new THREE.Raycaster();
        this.pointer = new THREE.Vector2();

        this.materials = {
            floor: new THREE.MeshStandardMaterial({ color: 0x8B7355, roughness: 0.85, metalness: 0.05 }),
            ceiling: new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.95, side: THREE.DoubleSide }),
            wall: new THREE.MeshStandardMaterial({ color: 0xe8e4df, roughness: 0.82 }),
            wallSelected: new THREE.MeshStandardMaterial({ color: 0x67e8f9, roughness: 0.5, emissive: 0x0891b2, emissiveIntensity: 0.35 }),
            componentSelected: new THREE.MeshStandardMaterial({ color: 0xa78bfa, emissive: 0x7c3aed, emissiveIntensity: 0.3 }),
            preview: new THREE.LineBasicMaterial({ color: 0x22d3ee }),
            marker: new THREE.MeshBasicMaterial({ color: 0x22d3ee }),
            previewGhost: new THREE.MeshStandardMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.35 }),
            handle: new THREE.MeshBasicMaterial({ color: 0x22d3ee }),
        };

        this.pointerLock = new PointerLockControls(this.camera, this.renderer.domElement);
        this.clock = new THREE.Clock();

        const canvas = this.renderer.domElement;
        canvas.tabIndex = 0;
        canvas.setAttribute('role', 'application');
        canvas.setAttribute('aria-label', '3D map viewport');

        this.root.querySelector('#map-loading')?.remove();

        this.plan2d = new Plan2DRenderer(this.container);
        this.bindPlan2dEvents();
    }

    bindPlan2dEvents() {
        if (!this.plan2d) return;
        const canvas = this.plan2d.canvas;
        canvas.addEventListener('wheel', (e) => {
            if (this.viewMode !== 'plan2d') return;
            this.plan2d.onWheel(e);
            this.renderPlan2d();
        }, { passive: false });
        canvas.addEventListener('pointerdown', (e) => {
            if (this.viewMode !== 'plan2d') return;
            // Closing first so any new tap (map empty space / other device) hides the popup.
            this.hideDeviceDetails();
            this.startSmartLongPress(e);
            if (this.plan2d.onPointerDown(e)) return;
            this.onPointerDown(e);
        });
        canvas.addEventListener('pointermove', (e) => {
            if (this.viewMode !== 'plan2d') return;
            if (this.longPressTimer) {
                const dx = e.clientX - (this.longPressOrigin?.x || 0);
                const dy = e.clientY - (this.longPressOrigin?.y || 0);
                if (Math.hypot(dx, dy) > 8) {
                    this.longPressMoved = true;
                    this.clearSmartLongPress();
                }
            }
            this.plan2d.onPointerMove(e);
            if (this.plan2d.isPanning) {
                this.renderPlan2d();
                return;
            }
            this.onPointerMove(e);
        });
        canvas.addEventListener('pointerup', () => {
            const fired = this.longPressFired;
            this.clearSmartLongPress();
            this.plan2d?.onPointerUp();
            if (!fired) this.hideDeviceDetails();
        });
        canvas.addEventListener('pointercancel', () => {
            this.clearSmartLongPress();
            this.plan2d?.onPointerUp();
            this.hideDeviceDetails();
        });
        canvas.addEventListener('dblclick', (e) => {
            if (this.viewMode !== 'plan2d' || !this.canEdit) return;
            const { sx, sy } = this.getPlan2dScreen(e);
            const hit = this.plan2d.hitTest(this.getFloor(), sx, sy);
            if (hit?.type === 'label') {
                e.preventDefault();
                const label = this.getFloor().labels.find((l) => l.id === hit.id);
                if (label) this.openLabelEditor({ labelId: label.id, worldPos: label.position, text: label.text });
            }
        });
        canvas.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            if (this.viewMode !== 'plan2d') return;
            this.showSmartDetailsAtEvent(e);
        });

        if (!this._deviceDetailsDismissBound) {
            this._deviceDetailsDismissBound = true;
            const dismissIfOutside = (e) => {
                if (!this.isDeviceDetailsOpen()) return;
                // Ignore the same gesture that opened the popup.
                if (this.longPressFired && this.longPressTimer == null && e.type === 'pointerup') return;
                if (canvas.contains(e.target)) return;
                this.hideDeviceDetails();
            };
            document.addEventListener('pointerdown', dismissIfOutside, true);
            document.addEventListener('click', dismissIfOutside, true);
        }
    }

    startSmartLongPress(event) {
        this.clearSmartLongPress();
        this.longPressMoved = false;
        this.longPressFired = false;
        this.longPressOrigin = { x: event.clientX, y: event.clientY };
        const { sx, sy } = this.getPlan2dScreen(event);
        const hit = this.plan2d.hitTest(this.getFloor(), sx, sy);
        if (hit?.type !== 'smart') return;

        this.longPressTimer = window.setTimeout(() => {
            if (this.longPressMoved) return;
            this.longPressFired = true;
            this.showSmartDetails(hit.id, event.clientX, event.clientY);
        }, 480);
    }

    clearSmartLongPress() {
        if (this.longPressTimer) {
            window.clearTimeout(this.longPressTimer);
            this.longPressTimer = null;
        }
    }

    isDeviceDetailsOpen() {
        const el = this.ensureDeviceDetailsEl();
        return Boolean(el?.classList.contains('is-open'));
    }

    ensureDeviceDetailsEl() {
        if (!this.deviceDetailsEl || !document.body.contains(this.deviceDetailsEl)) {
            this.deviceDetailsEl = document.querySelector('#device-details-popover');
        }
        return this.deviceDetailsEl;
    }

    showSmartDetailsAtEvent(event) {
        const { sx, sy } = this.getPlan2dScreen(event);
        const hit = this.plan2d.hitTest(this.getFloor(), sx, sy);
        if (hit?.type !== 'smart') {
            this.hideDeviceDetails();
            return;
        }
        this.longPressFired = true;
        this.showSmartDetails(hit.id, event.clientX, event.clientY);
    }

    showSmartDetails(deviceId, clientX, clientY) {
        const el = this.ensureDeviceDetailsEl();
        if (!el) return;
        const floor = this.getFloor();
        const device = floor.smart_devices.find((s) => s.id === deviceId);
        if (!device) return;

        const spec = SMART_CATALOG[device.type] || {};
        const catalogPrice = Number(spec.price);
        const price = Number.isFinite(catalogPrice)
            ? catalogPrice
            : deviceUnitPrice(device.type, device);
        el.innerHTML = `
            <div class="device-details-icon">${spec.icon || '●'}</div>
            <div class="device-details-body">
                <p class="device-details-name">${spec.label || device.type}</p>
                <p class="device-details-price">${formatOmr(price)}</p>
            </div>
        `;
        el.classList.add('is-open');
        el.classList.remove('hidden');
        el.style.display = 'flex';

        const pad = 12;
        const rect = el.getBoundingClientRect();
        let left = clientX + 12;
        let top = clientY + 12;
        if (left + rect.width > window.innerWidth - pad) left = clientX - rect.width - 12;
        if (top + rect.height > window.innerHeight - pad) top = clientY - rect.height - 12;
        el.style.left = `${Math.max(pad, left)}px`;
        el.style.top = `${Math.max(pad, top)}px`;

        this.selectById('smart', deviceId);
        this.setStatus(`${spec.label || device.type} · ${formatOmr(price)}`);
    }

    hideDeviceDetails() {
        const el = this.ensureDeviceDetailsEl();
        if (!el) return;
        el.classList.remove('is-open');
        el.classList.add('hidden');
        el.style.display = 'none';
    }

    isDesignMode() {
        return this.viewMode === 'studio' || this.viewMode === 'plan2d';
    }

    getPlan2dScreen(event) {
        const rect = this.plan2d.canvas.getBoundingClientRect();
        return { sx: event.clientX - rect.left, sy: event.clientY - rect.top };
    }

    getWorldPoint(event) {
        if (this.viewMode === 'plan2d') {
            const { sx, sy } = this.getPlan2dScreen(event);
            const [wx, wz] = this.plan2d.screenToWorld(sx, sy);
            return snapPoint(wx, wz, this.snapEnabled);
        }
        return this.getGroundPoint(event);
    }

    getHitAtEvent(event) {
        if (this.viewMode === 'plan2d') {
            const { sx, sy } = this.getPlan2dScreen(event);
            const hit = this.plan2d.hitTest(this.getFloor(), sx, sy);
            return hit ? { userData: { type: hit.type, id: hit.id } } : null;
        }
        return this.getIntersectedObject(event);
    }

    getPlacementGhost() {
        if (!this.cursorWorld || this.viewMode !== 'plan2d') return null;
        if (this.tool === 'furniture' && this.placingComponent) {
            const spec = FURNITURE_CATALOG[this.placingComponent];
            if (!spec) return null;
            return { position: this.cursorWorld, width: spec.w, depth: spec.d };
        }
        if (this.tool === 'kit' && this.placingKit) {
            const kit = ROOM_KITS[this.placingKit];
            if (!kit) return null;
            return { position: this.cursorWorld, width: kit.footprint.w, depth: kit.footprint.d };
        }
        if (this.tool === 'smart' && this.placingSmart) {
            return {
                kind: 'smart',
                type: this.placingSmart,
                position: this.cursorWorld,
                width: 0.6,
                depth: 0.6,
            };
        }
        return null;
    }

    ensurePlan2dLayout() {
        if (!this.plan2d || !this.container) return;
        const w = Math.max(this.container.clientWidth, 1);
        const h = Math.max(this.container.clientHeight, 1);
        this.plan2d.resize(w, h);
        this.plan2d.fitToBounds(this.projectWidth, this.projectDepth);
    }

    renderPlan2d() {
        if (!this.plan2d || this.viewMode !== 'plan2d') return;
        if (!this.plan2d.viewW || !this.plan2d.viewH) {
            this.ensurePlan2dLayout();
        }
        const floor = this.getFloor();
        const previewWall = this.wallStart
            ? { from: this.wallStart, to: this.wallPreviewEnd || this.wallStart }
            : null;
        this.plan2d.render({
            floor,
            projectWidth: this.projectWidth,
            projectDepth: this.projectDepth,
            selected: this.selected,
            floorLabel: floor.name || floorShortLabel(floor),
            previewWall,
            placementGhost: this.getPlacementGhost(),
            onUnderlayReady: () => {
                if (this.viewMode === 'plan2d') this.renderPlan2d();
            },
        });
    }

    bindEvents() {
        this.toolButtons.forEach((btn) => {
            btn.addEventListener('click', () => {
                this.endDrag();
                this.placingComponent = null;
                this.placingSmart = null;
                this.placingKit = null;
                this.updateComponentButtons();
                this.updateSmartButtons();
                this.updateKitButtons();
                this.removePreviewComponent();
                this.removePreviewSmart();
                this.removePreviewKit();
                const tool = btn.dataset.tool;
                this.setTool(tool);
            });
        });

        this.catalogTabs.forEach((tab) => {
            tab.addEventListener('click', () => this.setCatalogTab(tab.dataset.catalogTab));
        });

        this.viewModeButtons.forEach((btn) => {
            btn.addEventListener('click', () => this.setViewMode(btn.dataset.viewMode));
        });

        this.snapToggle?.addEventListener('change', (e) => {
            this.snapEnabled = e.target.checked;
            this.setStatus(this.snapEnabled ? 'Grid snap ON (0.5m)' : 'Grid snap OFF — free placement');
        });

        const canvas = this.renderer.domElement;
        canvas.addEventListener('pointerdown', (e) => this.onPointerDown(e));
        canvas.addEventListener('pointermove', (e) => this.onPointerMove(e));
        window.addEventListener('pointerup', () => this.endDrag());
        window.addEventListener('resize', () => this.onResize());
        window.addEventListener('keydown', (e) => this.onKeyDown(e));
        window.addEventListener('keyup', (e) => this.onKeyUp(e));

        this.renderer.domElement.addEventListener('mouseup', () => {
            this.look360.dragging = false;
            this.walkLookDrag = false;
        });
        this.renderer.domElement.addEventListener('mouseleave', () => {
            this.look360.dragging = false;
            this.walkLookDrag = false;
        });

        this.pointerLock.addEventListener('lock', () => {
            if (this.viewMode === 'view360') {
                this.look360.yaw = this.camera.rotation.y;
                this.look360.pitch = this.camera.rotation.x;
                this.setStatus('360° — WASD move · mouse look · E door · Shift run · Esc exit');
            }
        });
        this.pointerLock.addEventListener('unlock', () => {
            if (this.viewMode === 'view360') {
                this.look360.yaw = this.camera.rotation.y;
                this.look360.pitch = this.camera.rotation.x;
                this.setStatus('360° — click view · WASD move · drag look · E door · Esc exit');
            }
        });

        this.nightModeBtn?.addEventListener('click', () => {
            this.nightMode = !this.nightMode;
            this.applySceneLighting(this.viewMode !== 'studio');
            this.updateNightModeUI();
            if (this.nightMode && this.currentRoomId) {
                this.setRoomLights(this.currentRoomId, true);
            }
        });

        this.saveBtn?.addEventListener('click', () => this.save());

        this.clearFloorBtn?.addEventListener('click', () => this.clearCurrentFloor());

        this.importBtn?.addEventListener('click', () => this.openImportModal());
        this.importCloseButtons.forEach((btn) => {
            btn.addEventListener('click', () => this.closeImportModal());
        });
        this.importModal?.addEventListener('click', (e) => {
            if (e.target === this.importModal) this.closeImportModal();
        });
        this.importForm?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitFloorImage();
        });
        this.importImageInput?.addEventListener('change', () => {
            const file = this.importImageInput.files?.[0] || null;
            this.setImportFile(file);
        });
        this.importPasteZone?.addEventListener('click', (e) => {
            if (e.target.closest('input, button, a')) return;
            this.importImageInput?.click();
        });
        this.importPasteZone?.addEventListener('dragover', (e) => {
            e.preventDefault();
            this.importPasteZone.classList.add('border-brand-500/60', 'bg-brand-500/10');
        });
        this.importPasteZone?.addEventListener('dragleave', () => {
            this.importPasteZone.classList.remove('border-brand-500/60', 'bg-brand-500/10');
        });
        this.importPasteZone?.addEventListener('drop', (e) => {
            e.preventDefault();
            this.importPasteZone.classList.remove('border-brand-500/60', 'bg-brand-500/10');
            const file = Array.from(e.dataTransfer?.files || []).find((f) => this.isImportableImage(f));
            if (file) this.setImportFile(file);
        });
        document.addEventListener('paste', (e) => this.onImportPaste(e));

        const shareBtn = document.querySelector('#share-viewer-btn');
        const shareModal = document.querySelector('#share-viewer-modal');
        shareBtn?.addEventListener('click', () => shareModal?.classList.remove('hidden'));
        document.querySelectorAll('[data-share-close]').forEach((btn) => {
            btn.addEventListener('click', () => shareModal?.classList.add('hidden'));
        });
        shareModal?.addEventListener('click', (e) => {
            if (e.target === shareModal) shareModal.classList.add('hidden');
        });

        this.quotationBtn?.addEventListener('click', () => this.openQuotationModal());
        document.querySelectorAll('[data-quotation-close]').forEach((btn) => {
            btn.addEventListener('click', () => this.closeQuotationModal());
        });
        this.quotationModal?.addEventListener('click', (e) => {
            if (e.target === this.quotationModal) this.closeQuotationModal();
        });
        this.quotationDiscountInput?.addEventListener('input', () => this.renderQuotation());
        this.quotationTvaInput?.addEventListener('input', () => this.renderQuotation());
        this.quotationClientInput?.addEventListener('change', () => this.persistQuotationMeta());
        this.quotationNotesInput?.addEventListener('change', () => this.persistQuotationMeta());
        this.quotationPrintBtn?.addEventListener('click', () => this.printQuotation());

        this.floorSwitcherEl?.addEventListener('click', (e) => {
            if (e.target.closest('[data-floor-add]')) {
                this.addFloorLayer();
                return;
            }
            const btn = e.target.closest('[data-floor-index]');
            if (!btn) return;
            this.setActiveFloor(Number(btn.dataset.floorIndex));
        });

        this.propsEl?.addEventListener('click', (e) => {
            if (e.target.closest('[data-underlay-replace]')) {
                this.openImportModal();
                return;
            }
            if (e.target.closest('[data-underlay-remove]')) {
                this.removeFloorUnderlay();
                return;
            }

            if (e.target.closest('[data-action="delete"]')) this.deleteSelected();
            if (e.target.closest('[data-action="rotate"]')) this.rotateSelected(-90);
            if (e.target.closest('[data-action="rotate-cw"]')) this.rotateSelected(90);
            if (e.target.closest('[data-action="duplicate"]')) this.duplicateSelected();

            const styleBtn = e.target.closest('[data-prop-style]');
            if (styleBtn) {
                this.applyProperty('style', styleBtn.dataset.propStyle, false);
                this.renderProperties(false);
                return;
            }

            const openingSizeBtn = e.target.closest('[data-opening-size]');
            if (openingSizeBtn) {
                this.applyOpeningSizePreset(openingSizeBtn.dataset.openingSize);
                this.renderProperties(false);
                return;
            }

            const compSizeBtn = e.target.closest('[data-component-size]');
            if (compSizeBtn) {
                this.applyComponentSizePreset(compSizeBtn.dataset.componentSize);
                this.renderProperties(false);
                return;
            }

            const presetBtn = e.target.closest('[data-prop-preset]');
            if (presetBtn) {
                this.applyProperty('preset', presetBtn.dataset.propPreset, false);
                this.renderProperties(false);
                return;
            }

            if (e.target.closest('[data-action="reset-size"]')) {
                this.applyComponentSizePreset('standard');
                this.renderProperties(false);
            }
        });

        this.propsEl?.addEventListener('input', (e) => {
            const underlayProp = e.target.closest('[data-underlay-prop]');
            if (underlayProp) {
                const prop = underlayProp.dataset.underlayProp;
                if (underlayProp.type === 'range') {
                    const num = this.propsEl.querySelector(`input[type="number"][data-underlay-prop="${prop}"]`);
                    if (num) num.value = underlayProp.value;
                } else if (underlayProp.type === 'number') {
                    const range = this.propsEl.querySelector(`input[type="range"][data-underlay-prop="${prop}"]`);
                    if (range) range.value = underlayProp.value;
                }
                this.applyUnderlayProperty(prop, underlayProp.value, underlayProp.type === 'range' || underlayProp.type === 'number');
                return;
            }

            const el = e.target.closest('[data-prop]');
            if (!el) return;

            const prop = el.dataset.prop;

            if (el.type === 'range') {
                const num = this.propsEl.querySelector(`input[type="number"][data-prop="${prop}"]`);
                if (num) num.value = el.value;
                this.applyProperty(prop, el.value, true);
                return;
            }

            if (el.type === 'number') {
                const range = this.propsEl.querySelector(`input[data-range-sync="${prop}"]`);
                if (range) range.value = el.value;
                this.applyProperty(prop, el.value, true);
                return;
            }

            this.applyProperty(prop, el.value, el.type === 'number');
            if (el.tagName === 'TEXTAREA') this.renderElementsList();
        });

        this.propsEl?.addEventListener('change', (e) => {
            const underlayProp = e.target.closest('[data-underlay-prop]');
            if (underlayProp && underlayProp.type === 'checkbox') {
                this.applyUnderlayProperty(underlayProp.dataset.underlayProp, underlayProp.checked ? 'true' : 'false', false);
                return;
            }

            const el = e.target.closest('[data-prop]');
            if (!el) return;

            if (el.type === 'checkbox') {
                this.applyProperty(el.dataset.prop, el.checked ? 'true' : 'false', false);
                return;
            }

            if (el.tagName === 'SELECT') this.applyProperty(el.dataset.prop, el.value, false);
        });

        this.outlinerSearchEl?.addEventListener('input', (e) => {
            this.outlinerFilter = e.target.value.trim().toLowerCase();
            this.renderElementsList();
        });
    }

    preserveScroll(el, fn) {
        const top = el?.scrollTop ?? 0;
        fn();
        if (el) el.scrollTop = top;
    }

    updatePlacingBadge() {
        if (!this.placingBadgeEl) return;
        let label = '';
        if (this.placingKit && ROOM_KITS[this.placingKit]) {
            label = ROOM_KITS[this.placingKit].label;
        } else if (this.placingComponent && FURNITURE_CATALOG[this.placingComponent]) {
            label = FURNITURE_CATALOG[this.placingComponent].label;
        } else if (this.placingSmart && SMART_CATALOG[this.placingSmart]) {
            label = SMART_CATALOG[this.placingSmart].label;
        }

        if (label) {
            this.placingBadgeEl.textContent = `Placing: ${label}`;
            this.placingBadgeEl.classList.remove('hidden');
            this.placingBadgeEl.classList.add('studio-chip-active');
        } else {
            this.placingBadgeEl.classList.add('hidden');
            this.placingBadgeEl.classList.remove('studio-chip-active');
        }
    }

    updateStudioContext() {
        if (!this.contextEl) return;
        const toolLabels = {
            select: 'Select',
            kit: 'Room kit',
            wall: 'Wall',
            door: 'Door',
            window: 'Window',
            furniture: 'Item',
            smart: 'Smart',
            delete: 'Delete',
        };
        this.contextEl.textContent = toolLabels[this.tool] ? `Tool: ${toolLabels[this.tool]}` : '';
        this.updatePlacingBadge();
    }

    updateComponentButtons() {
        this.componentButtons.forEach((btn) => {
            const active = this.placingComponent === btn.dataset.component;
            btn.classList.toggle('catalog-tile-active', active);
        });
    }

    updateKitButtons() {
        this.kitButtons.forEach((btn) => {
            const active = this.placingKit === btn.dataset.kit;
            btn.classList.toggle('kit-card-active', active);
            btn.classList.toggle('kit-card', !active);
        });
    }

    updateSmartButtons() {
        this.smartButtons.forEach((btn) => {
            const active = this.placingSmart === btn.dataset.smart;
            btn.classList.toggle('catalog-tile-active', active);
        });
    }

    updateStyleButtons() {
        this.doorStyleButtons.forEach((btn) => {
            const active = this.selectedDoorStyle === btn.getAttribute('data-door-style');
            btn.classList.toggle('catalog-style-row-active', active);
        });
        this.windowStyleButtons.forEach((btn) => {
            const active = this.selectedWindowStyle === btn.getAttribute('data-window-style');
            btn.classList.toggle('catalog-style-row-active', active);
        });
    }

    renderAllCatalogs() {
        this.renderSmartCatalog();
    }

    renderSmartCatalog() {
        if (!this.haDeviceGridEl) return;

        this.preserveScroll(this.assetScrollEl, () => {
        const devices = getDevicesByCategory('all');
        this.haDeviceGridEl.className = 'device-grid';
        this.haDeviceGridEl.innerHTML = devices.map(([key, spec]) => `
            <button type="button" data-smart="${key}" title="${spec.label} · ${formatOmr(spec.price)}" class="catalog-tile">
                <span class="catalog-tile-icon" aria-hidden="true">${spec.icon}</span>
                <span class="catalog-tile-label">${spec.label}</span>
                <span class="catalog-tile-price">${formatOmr(spec.price)}</span>
            </button>
        `).join('');

        this.smartButtons = this.haDeviceGridEl.querySelectorAll('[data-smart]');
        this.smartButtons.forEach((btn) => {
            btn.addEventListener('click', () => {
                this.placingComponent = null;
                this.placingKit = null;
                this.updateComponentButtons();
                this.updateKitButtons();
                this.placingSmart = btn.dataset.smart;
                this.updateSmartButtons();
                this.setTool('smart');
            });
        });
        this.updateSmartButtons();
        });
    }

    setCatalogTab(tab) {
        this.catalogTabs.forEach((btn) => {
            const active = btn.dataset.catalogTab === tab;
            btn.classList.toggle('studio-asset-tab-active', active);
            btn.classList.toggle('studio-asset-tab', !active);
        });
        this.catalogPanels.forEach((panel) => {
            panel.classList.toggle('hidden', panel.dataset.catalogPanel !== tab);
        });
    }

    setViewMode(mode) {
        this.endDrag();
        if (mode === 'walk') mode = 'view360';
        if (this.viewerOnly && mode !== 'plan2d') return;
        this.viewMode = mode;

        this.viewModeButtons.forEach((btn) => {
            btn.classList.toggle('view-mode-active', btn.dataset.viewMode === mode);
            btn.classList.toggle('view-mode-btn', btn.dataset.viewMode !== mode);
        });

        const isPlan2d = mode === 'plan2d';
        const isStudio = mode === 'studio';
        const is360 = mode === 'view360';

        this.studioPanels.forEach((el) => el.classList.toggle('hidden', !isPlan2d && !isStudio));
        this.handleGroup.visible = isStudio;
        this.grid.visible = isStudio;
        this.nightModeBtn?.classList.toggle('hidden', !is360);
        if (this.simOverlay) this.simOverlay.classList.toggle('hidden', !is360);

        this.renderer.domElement.classList.toggle('hidden', isPlan2d);
        this.renderer.domElement.style.pointerEvents = isPlan2d ? 'none' : '';
        if (isPlan2d) {
            this.plan2d?.show();
            this.ensurePlan2dLayout();
        } else {
            this.plan2d?.hide();
        }

        this.controls.enabled = isStudio;
        this.pointerLock.unlock();

        if (!isPlan2d) this.rebuildScene();

        if (is360) {
            this.enter360Mode();
        } else if (isStudio) {
            this.restoreStudioCamera();
            this.setTool('select');
        } else if (isPlan2d) {
            this.renderPlan2d();
            if (!this.viewerOnly) this.setTool(this.tool || 'select');
            this.setStatus('2D plan — import image, place devices · shift+drag pan');
        }
    }

    getSimOrigin() {
        const saved = this.mapData.sim360?.position;
        if (saved) return saved;
        return [this.projectWidth / 2, this.projectDepth / 2];
    }

    isNightTime() {
        const h = new Date().getHours();
        return h >= 18 || h < 6;
    }

    updateNightModeUI() {
        if (!this.nightModeBtn) return;
        this.nightModeBtn.classList.toggle('view-mode-active', this.nightMode);
        this.nightModeBtn.classList.toggle('view-mode-btn', !this.nightMode);
        this.nightModeBtn.textContent = this.nightMode ? '🌙 Night ON' : '☀️ Day';
    }

    getRoomAt(x, z) {
        const floor = this.getFloor();
        for (const room of floor.rooms || []) {
            if (room.polygon && pointInPolygon(x, z, room.polygon)) return room.id;
        }
        return null;
    }

    setRoomLights(roomId, on) {
        const floor = this.getFloor();
        let changed = false;
        for (const device of floor.smart_devices) {
            if (!isAutoLightType(device.type)) continue;
            const dr = this.getRoomAt(device.position[0], device.position[1]);
            if (dr === roomId && device.on !== on) {
                device.on = on;
                changed = true;
            }
        }
        for (const comp of floor.components) {
            if (!isAutoLightType(comp.type)) continue;
            const cr = this.getRoomAt(comp.position[0], comp.position[1]);
            if (cr === roomId && comp.on !== on) {
                comp.on = on;
                changed = true;
            }
        }
        if (changed) this.refreshAutomatedLights();
    }

    refreshAutomatedLights() {
        const floor = this.getFloor();
        const floorY = 0;
        const immersive = this.viewMode !== 'studio';

        floor.smart_devices.forEach((device) => {
            if (!isAutoLightType(device.type)) return;
            const old = this.meshes.smart.get(device.id);
            if (old) { this.scene.remove(old); this.disposeObject3D(old); }
            const sel = this.selected?.type === 'smart' && this.selected.id === device.id;
            const g = buildSmartDeviceGroup(device, floorY, SMART_CATALOG, sel, immersive);
            if (g) {
                this.meshes.smart.set(device.id, g);
                this.scene.add(g);
            }
        });

        floor.components.forEach((comp) => {
            if (comp.type !== 'lamp') return;
            const old = this.meshes.components.get(comp.id);
            if (old) { this.scene.remove(old); this.disposeObject3D(old); }
            const g = buildFurnitureGroup(comp, floorY, FURNITURE_CATALOG);
            if (g) {
                this.meshes.components.set(comp.id, g);
                this.scene.add(g);
            }
        });
    }

    updateRoomAutomation() {
        if (this.viewMode === 'studio') return;
        const roomId = this.getRoomAt(this.camera.position.x, this.camera.position.z);
        if (roomId === this.currentRoomId) return;

        if (this.currentRoomId) {
            this.setRoomLights(this.currentRoomId, false);
        }
        this.currentRoomId = roomId;
        if (roomId) {
            this.setRoomLights(roomId, true);
        }
    }

    enterImmersiveMode() {
        this.nightMode = this.isNightTime();
        this.updateNightModeUI();
        this.currentRoomId = null;
    }

    enterWalkMode() {
        this.enterImmersiveMode();
        const [x, z] = this.getSimOrigin();
        this.camera.position.set(x, this.eyeHeight, z);
        const sim = this.mapData.sim360 || {};
        this.look360.yaw = sim.yaw || 0;
        this.look360.pitch = sim.pitch || 0;
        this.apply360Rotation();
        this.applySceneLighting(true);
        this.updateRoomAutomation();
        this.setStatus('WASD move · E door · N night mode · lights auto on/off per room');
        this.tryPointerLock();
    }

    enter360Mode() {
        this.enterImmersiveMode();
        const [prefX, prefZ] = this.getSimOrigin();
        const sim = this.mapData.sim360 || {};
        const [x, z] = this.findWalkableSpawn(prefX, prefZ);
        this.camera.position.set(x, this.eyeHeight, z);
        this.look360.yaw = sim.yaw || 0;
        this.look360.pitch = sim.pitch || 0;
        this.apply360Rotation();
        this.applySceneLighting(true);
        this.updateRoomAutomation();
        this.persistSimPosition();
        const hint = this.viewerOnly
            ? '360° tour — click view · WASD move · drag look · E door · N night'
            : '360° — click view · WASD move · drag look · E door · N night · Esc exit';
        this.setStatus(hint);
        queueMicrotask(() => this.renderer.domElement.focus());
    }

    /** Find a position not inside wall collision (AI imports often block map center). */
    findWalkableSpawn(preferredX, preferredZ) {
        const tryPoint = (x, z) => (this.canWalkTo(x, z) ? [x, z] : null);

        const preferred = tryPoint(preferredX, preferredZ);
        if (preferred) return preferred;

        const floor = this.getFloor();
        for (const room of floor.rooms || []) {
            const poly = room.polygon;
            if (!poly?.length) continue;

            const xs = poly.map((p) => p[0]);
            const zs = poly.map((p) => p[1]);
            const minX = Math.min(...xs);
            const maxX = Math.max(...xs);
            const minZ = Math.min(...zs);
            const maxZ = Math.max(...zs);
            const cx = xs.reduce((s, v) => s + v, 0) / xs.length;
            const cz = zs.reduce((s, v) => s + v, 0) / zs.length;

            const candidates = [[cx, cz]];
            for (let x = minX + 0.5; x <= maxX - 0.5; x += 0.75) {
                for (let z = minZ + 0.5; z <= maxZ - 0.5; z += 0.75) {
                    if (pointInPolygon(x, z, poly)) candidates.push([x, z]);
                }
            }

            for (const [x, z] of candidates) {
                const hit = tryPoint(x, z);
                if (hit) return hit;
            }
        }

        for (let radius = 0.5; radius <= Math.max(this.projectWidth, this.projectDepth); radius += 0.5) {
            const steps = Math.max(8, Math.ceil(radius * 4));
            for (let i = 0; i < steps; i++) {
                const angle = (i / steps) * Math.PI * 2;
                const x = preferredX + Math.cos(angle) * radius;
                const z = preferredZ + Math.sin(angle) * radius;
                const hit = tryPoint(x, z);
                if (hit) return hit;
            }
        }

        return [preferredX, preferredZ];
    }

    tryPointerLock() {
        if (this.viewMode !== 'view360') return;
        if (document.pointerLockElement === this.renderer.domElement) return;
        this.renderer.domElement.requestPointerLock?.();
    }

    apply360Rotation() {
        this.camera.rotation.order = 'YXZ';
        this.camera.rotation.y = this.look360.yaw;
        this.camera.rotation.x = this.look360.pitch;
        this.camera.rotation.z = 0;
    }

    restoreStudioCamera() {
        const cam = this.mapData.camera || {};
        this.camera.position.set(...(cam.position || [this.projectWidth / 2, 12, this.projectDepth + 12]));
        this.camera.rotation.set(0, 0, 0);
        this.controls.target.set(...(cam.target || [this.projectWidth / 2, 0, this.projectDepth / 2]));
    }

    distToWall(px, pz, wall) {
        const [x1, z1] = wall.from;
        const [x2, z2] = wall.to;
        const dx = x2 - x1;
        const dz = z2 - z1;
        const len2 = dx * dx + dz * dz;
        if (len2 < 0.001) return Math.hypot(px - x1, pz - z1);
        let t = clamp(((px - x1) * dx + (pz - z1) * dz) / len2, 0, 1);
        const nx = x1 + t * dx;
        const nz = z1 + t * dz;
        return Math.hypot(px - nx, pz - nz);
    }

    canWalkTo(x, z) {
        const r = WALK_RADIUS;
        const floor = this.getFloor();
        for (const wall of floor.walls) {
            const d = this.distToWall(x, z, wall);
            const halfT = (wall.thickness || DEFAULT_WALL_THICKNESS) / 2;
            if (d < r + halfT) {
                if (isInDoorway(x, z, wall, floor.doors)) continue;
                return false;
            }
        }
        return true;
    }

    tryMove(dx, dz) {
        const x = this.camera.position.x;
        const z = this.camera.position.z;
        const nx = x + dx;
        const nz = z + dz;
        let moved = false;

        if (this.canWalkTo(nx, nz)) {
            this.camera.position.x = nx;
            this.camera.position.z = nz;
            moved = true;
        } else {
            if (this.canWalkTo(nx, z)) {
                this.camera.position.x = nx;
                moved = true;
            }
            if (this.canWalkTo(this.camera.position.x, nz)) {
                this.camera.position.z = nz;
                moved = true;
            }
        }

        this.camera.position.y = this.eyeHeight;
        if (moved) this.persistSimPosition();

        return moved;
    }

    getMoveYaw() {
        if (this.viewMode === 'view360') return this.look360.yaw;
        if (this.pointerLock.isLocked) return this.camera.rotation.y;
        return this.look360.yaw;
    }

    updateFirstPerson(delta) {
        if (this.viewMode !== 'view360') return;

        const speed = (this.walkKeys.shift ? 6.5 : 3.8) * delta;
        const yaw = this.getMoveYaw();
        const forward = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw));
        const right = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw));
        const move = new THREE.Vector3();

        if (this.walkKeys.w) move.add(forward);
        if (this.walkKeys.s) move.sub(forward);
        if (this.walkKeys.d) move.add(right);
        if (this.walkKeys.a) move.sub(right);

        if (move.lengthSq() > 0) {
            move.normalize().multiplyScalar(speed);
            const moved = this.tryMove(move.x, move.z);
            if (!moved && !this._walkBlockedHint) {
                this._walkBlockedHint = true;
                this.setStatus('360° — movement blocked by walls · try another spot or fix walls in Studio');
            } else if (moved) {
                this._walkBlockedHint = false;
            }
            this.updateDoorProximity(move);
        } else {
            this.updateDoorProximity(new THREE.Vector3());
        }

        this.updateDoorAnimations(delta);
        this.updateRoomAutomation();
    }

    persistSimPosition() {
        if (this.viewMode !== 'view360') return;
        this.mapData.sim360 = {
            position: [this.camera.position.x, this.camera.position.z],
            yaw: this.look360.yaw,
            pitch: this.look360.pitch,
        };
    }

    initDoorAnimStates() {
        const prev = new Map(this.doorAnimStates);
        this.doorAnimStates.clear();
        for (const door of this.getFloor().doors) {
            const old = prev.get(door.id);
            this.doorAnimStates.set(door.id, {
                open: old?.open ?? 0,
                target: old?.target ?? 0,
            });
        }
    }

    updateDoorProximity(moveDir) {
        const floor = this.getFloor();
        let nearest = null;
        let nearestDist = Infinity;
        const px = this.camera.position.x;
        const pz = this.camera.position.z;

        for (const door of floor.doors) {
            const wall = floor.walls.find((w) => w.id === door.wall_id);
            if (!wall) continue;
            const { x, z } = getDoorCenter(door, wall);
            const dist = Math.hypot(px - x, pz - z);
            if (dist < nearestDist) {
                nearestDist = dist;
                nearest = door;
            }
            const state = this.doorAnimStates.get(door.id);
            if (!state) continue;

            if (dist < 2.2) {
                const toDoor = new THREE.Vector3(x - px, 0, z - pz);
                if (toDoor.lengthSq() > 0.01) toDoor.normalize();
                const moveNorm = moveDir.lengthSq() > 0 ? moveDir.clone().normalize() : null;
                const movingToward = moveNorm && moveNorm.dot(toDoor) > 0.2;
                if (movingToward || dist < 1.4) state.target = 1;
            } else if (dist > 3.2) {
                state.target = 0;
            }
        }

        this.nearDoorId = nearestDist < 2.5 ? nearest?.id : null;
    }

    toggleNearestDoor() {
        if (!this.nearDoorId) return;
        const state = this.doorAnimStates.get(this.nearDoorId);
        if (state) state.target = state.target > 0.5 ? 0 : 1;
    }

    updateDoorAnimations(delta) {
        const lerpSpeed = 4 * delta;
        this.doorAnimStates.forEach((state, doorId) => {
            state.open += (state.target - state.open) * Math.min(1, lerpSpeed);
            if (Math.abs(state.target - state.open) < 0.005) state.open = state.target;
            const mesh = this.meshes.doors.get(doorId);
            if (mesh) applyDoorOpenAmount(mesh, state.open);
        });
    }

    onKeyUp(event) {
        const k = event.key.toLowerCase();
        if (k in this.walkKeys) this.walkKeys[k] = false;
        if (event.key === 'Shift') this.walkKeys.shift = false;
    }

    setTool(tool) {
        if (!this.isDesignMode()) return;
        this.tool = tool;
        this.cancelWallDraw();
        this.toolButtons.forEach((btn) => {
            btn.classList.toggle('tool-btn-active', btn.dataset.tool === tool);
            btn.classList.toggle('tool-btn', btn.dataset.tool !== tool);
        });

        const hints = {
            select: 'Select & drag to move · Click room floor to paint · Edit properties →',
            kit: this.placingKit
                ? `Click floor corner to place ${ROOM_KITS[this.placingKit]?.label || 'room kit'}`
                : 'Pick a room kit from the library (bathroom, kitchen, bedroom…)',
            wall: 'Click two points to draw walls · Esc to cancel',
            door: `Click any wall for ${DOOR_STYLES[this.selectedDoorStyle]?.label || 'door'}`,
            window: `Click any wall for ${WINDOW_STYLES[this.selectedWindowStyle]?.label || 'window'}`,
            furniture: this.placingComponent
                ? `Click floor to place ${FURNITURE_CATALOG[this.placingComponent]?.label}`
                : 'Pick an item from the Items tab, then click floor',
            smart: this.placingSmart
                ? `Click to place ${SMART_CATALOG[this.placingSmart]?.label}`
                : 'Pick a smart device, then click floor/wall area',
            text: 'Click anywhere on the 2D plan to add text · double-click to edit',
            delete: 'Click any element to delete',
        };
        this.setStatus(hints[tool] || '');
        this.updateStudioContext();
    }

    setStatus(text) {
        if (this.statusEl) this.statusEl.textContent = text;
    }

    allInteractables() {
        return [
            ...this.meshes.walls.values(),
            ...this.meshes.doors.values(),
            ...this.meshes.windows.values(),
            ...this.meshes.components.values(),
            ...this.meshes.smart.values(),
            ...this.decorMeshes.filter((m) => m.userData?.type === 'room'),
        ];
    }

    updatePointer(event) {
        const rect = this.renderer.domElement.getBoundingClientRect();
        this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        this.raycaster.setFromCamera(this.pointer, this.camera);
    }

    getGroundPoint(event) {
        this.updatePointer(event);
        const hits = this.raycaster.intersectObject(this.groundPlane);
        if (!hits.length) return null;
        return snapPoint(hits[0].point.x, hits[0].point.z, this.snapEnabled);
    }

    getIntersectedObject(event, objects = null) {
        this.updatePointer(event);
        const hits = this.raycaster.intersectObjects(objects || this.allInteractables(), true);
        return resolveEntity(hits[0]?.object) || null;
    }

    getHandleAt(event) {
        if (this.viewMode === 'plan2d') {
            const { sx, sy } = this.getPlan2dScreen(event);
            return this.plan2d.hitTestWallHandle(this.getFloor(), this.selected, sx, sy);
        }
        this.updatePointer(event);
        const hits = this.raycaster.intersectObjects(this.handleGroup.children, false);
        return hits[0]?.object || null;
    }

    onPointerDown(event) {
        if (this.viewMode === 'view360') {
            this.renderer.domElement.focus();
            if (event.button === 0) {
                this.tryPointerLock();
                this.look360.dragging = true;
                this.look360.lastX = event.clientX;
                this.look360.lastY = event.clientY;
                try {
                    event.target.setPointerCapture?.(event.pointerId);
                } catch {
                    /* ignore */
                }
            }
            return;
        }
        if (!this.canEdit) return;
        if (this.viewMode === 'plan2d' && this.plan2d?.isPanning) return;

        if (this.tool === 'wall') {
            const pt = this.getWorldPoint(event);
            if (!pt) return;
            if (!this.wallStart) {
                this.wallStart = pt;
                this.wallPreviewEnd = pt;
                this.showStartMarker(pt);
                this.setStatus('Click end point · Esc to cancel');
            } else {
                this.addWall(this.wallStart, pt);
                this.cancelWallDraw();
            }
            return;
        }

        if (this.tool === 'furniture' && this.placingComponent) {
            const pt = this.getWorldPoint(event);
            if (pt) this.addComponent(this.placingComponent, pt);
            return;
        }

        if (this.tool === 'kit' && this.placingKit) {
            const pt = this.getWorldPoint(event);
            if (pt) this.placeRoomKit(this.placingKit, pt[0], pt[1]);
            return;
        }

        if (this.tool === 'smart' && this.placingSmart) {
            const pt = this.getWorldPoint(event);
            if (pt) this.addSmartDevice(this.placingSmart, pt);
            return;
        }

        if (this.tool === 'text') {
            if (this.viewMode !== 'plan2d') {
                this.setStatus('Switch to 2D Plan to add text labels');
                return;
            }
            const pt = this.getWorldPoint(event);
            if (!pt) return;
            this.openLabelEditor({ worldPos: pt, text: '' });
            return;
        }

        const handle = this.getHandleAt(event);
        if (handle && this.tool === 'select') {
            this.startDrag(handle.userData.dragType, handle.userData.refId, handle.userData.endpoint);
            return;
        }

        const hit = this.getHitAtEvent(event);

        if (this.tool === 'door' && hit?.userData.type === 'wall') {
            const pt = this.getWorldPoint(event);
            this.addOpeningOnWall(hit.userData.id, 'door', pt);
            return;
        }
        if (this.tool === 'window' && hit?.userData.type === 'wall') {
            const pt = this.getWorldPoint(event);
            this.addOpeningOnWall(hit.userData.id, 'window', pt);
            return;
        }
        if (this.tool === 'delete' && hit) {
            this.deleteById(hit.userData.type, hit.userData.id);
            return;
        }

        if (this.tool === 'select') {
            if (hit?.userData.type === 'door' || hit?.userData.type === 'window') {
                this.selectById(hit.userData.type, hit.userData.id);
                this.startDrag('opening-slide', hit.userData.id);
            } else if (hit?.userData.type === 'component' || hit?.userData.type === 'smart') {
                this.selectById(hit.userData.type, hit.userData.id);
                this.startDrag('component-move', hit.userData.id);
            } else if (hit?.userData.type === 'label') {
                this.selectById('label', hit.userData.id);
                this.startDrag('label-move', hit.userData.id);
            } else if (hit?.userData.type === 'room') {
                this.selectById('room', hit.userData.id);
            } else if (hit?.userData.type === 'wall') {
                this.selectById('wall', hit.userData.id);
            } else {
                this.selectObject(null);
            }
            this.renderElementsList();
            if (this.viewMode === 'plan2d') this.renderPlan2d();
        }
    }

    onPointerMove(event) {
        if (this.viewMode === 'view360') {
            if (document.pointerLockElement === this.renderer.domElement) {
                return;
            }
            if (this.look360.dragging) {
                const dx = event.clientX - this.look360.lastX;
                const dy = event.clientY - this.look360.lastY;
                this.look360.lastX = event.clientX;
                this.look360.lastY = event.clientY;
                this.look360.yaw -= dx * 0.004;
                this.look360.pitch = clamp(this.look360.pitch - dy * 0.004, -Math.PI / 2 + 0.1, Math.PI / 2 - 0.1);
                this.apply360Rotation();
                this.persistSimPosition();
            }
            return;
        }

        if (!this.isDesignMode() || !this.canEdit) return;

        if (this.drag) {
            this.processDrag(event);
            return;
        }

        const pt = this.getWorldPoint(event);
        if (pt) this.cursorWorld = pt;

        if (this.tool === 'wall' && this.wallStart) {
            if (pt) {
                this.wallPreviewEnd = pt;
                if (this.viewMode === 'plan2d') this.renderPlan2d();
                else this.updatePreviewLine(this.wallStart, pt);
            }
            return;
        }

        if (this.tool === 'furniture' && this.placingComponent) {
            if (pt) {
                if (this.viewMode === 'plan2d') this.renderPlan2d();
                else this.updatePreviewComponent(this.placingComponent, pt);
            }
            return;
        }

        if (this.tool === 'kit' && this.placingKit) {
            if (pt) {
                if (this.viewMode === 'plan2d') this.renderPlan2d();
                else this.updatePreviewKit(this.placingKit, pt);
            }
            return;
        }

        if (this.tool === 'smart' && this.placingSmart) {
            if (pt) {
                if (this.viewMode === 'plan2d') this.renderPlan2d();
                else this.updatePreviewSmart(this.placingSmart, pt);
            }
        }
    }

    startDrag(type, refId, endpoint = null) {
        this.drag = { type, refId, endpoint };
        this.controls.enabled = false;
    }

    endDrag() {
        if (this.drag) {
            this.drag = null;
            this.controls.enabled = true;
            this.renderElementsList();
            this.renderProperties();
            this.updateHandles();
        }
    }

    processDrag(event) {
        const floor = this.getFloor();
        const pt = this.getWorldPoint(event);
        if (!pt) return;

        if (this.drag.type === 'wall-from' || this.drag.type === 'wall-to') {
            const wall = floor.walls.find((w) => w.id === this.drag.refId);
            if (!wall) return;
            if (this.drag.type === 'wall-from') wall.from = pt;
            else wall.to = pt;
            this.refreshScene();
            return;
        }

        if (this.drag.type === 'opening-slide') {
            const door = floor.doors.find((d) => d.id === this.drag.refId);
            const win = floor.windows.find((w) => w.id === this.drag.refId);
            const item = door || win;
            if (!item) return;
            const wall = floor.walls.find((w) => w.id === item.wall_id);
            if (!wall) return;
            let t = projectOnWall(wall, pt[0], pt[1]);
            const [minT, maxT] = openingPositionLimits(wall, item.width);
            item.position = Math.round(clamp(t, minT, maxT) * 1000) / 1000;
            this.refreshScene();
            return;
        }

        if (this.drag.type === 'component-move') {
            const comp = floor.components.find((c) => c.id === this.drag.refId);
            const smart = floor.smart_devices.find((s) => s.id === this.drag.refId);
            const item = comp || smart;
            if (!item) return;
            item.position = pt;
            this.refreshScene();
            return;
        }

        if (this.drag.type === 'label-move') {
            const label = floor.labels.find((l) => l.id === this.drag.refId);
            if (!label) return;
            label.position = pt;
            this.refreshScene();
        }
    }

    refreshScene() {
        if (this.viewMode === 'plan2d') {
            this.renderPlan2d();
        } else {
            this.rebuildScene();
        }
    }

    onKeyDown(event) {
        const k = event.key.toLowerCase();

        if (this.viewMode === 'view360') {
            if (k in this.walkKeys || event.key === 'Shift') {
                event.preventDefault();
            }
            if (k in this.walkKeys) this.walkKeys[k] = true;
            if (event.key === 'Shift') this.walkKeys.shift = true;

            if (event.key === 'Escape') {
                if (document.pointerLockElement === this.renderer.domElement) {
                    document.exitPointerLock?.();
                    return;
                }
                if (!this.viewerOnly) {
                    this.setViewMode('studio');
                }
                return;
            }

            if (k === 'e') {
                event.preventDefault();
                this.toggleNearestDoor();
                return;
            }

            if (k === 'n') {
                event.preventDefault();
                this.nightMode = !this.nightMode;
                this.applySceneLighting(true);
                this.updateNightModeUI();
                if (this.nightMode && this.currentRoomId) this.setRoomLights(this.currentRoomId, true);
                return;
            }

            return;
        }

        if (k in this.walkKeys) this.walkKeys[k] = true;
        if (event.key === 'Shift') this.walkKeys.shift = true;

        if (event.key === 'Escape') {
            if (this.labelEditor) {
                this.closeLabelEditor(true);
                return;
            }
            this.endDrag();
            this.cancelWallDraw();
            this.placingComponent = null;
            this.placingSmart = null;
            this.placingKit = null;
            this.updateComponentButtons();
            this.updateSmartButtons();
            this.updateKitButtons();
            this.removePreviewComponent();
            this.removePreviewSmart();
            this.removePreviewKit();
            if (this.tool === 'furniture' || this.tool === 'smart' || this.tool === 'kit') this.setTool('select');
            return;
        }

        if (!this.isDesignMode() || !this.canEdit) return;

        if ((event.key === 'Delete' || event.key === 'Backspace') && this.selected) {
            event.preventDefault();
            this.deleteSelected();
        }
        if (event.key === 'r' && (this.selected?.type === 'component' || this.selected?.type === 'smart')) this.rotateSelected(90);
        if (event.key === 'd' && event.ctrlKey && this.selected) {
            event.preventDefault();
            this.duplicateSelected();
        }
    }

    showStartMarker(point) {
        if (this.viewMode === 'plan2d') {
            this.renderPlan2d();
            return;
        }
        this.removeStartMarker();
        this.startMarker = new THREE.Mesh(new THREE.SphereGeometry(0.15, 16, 16), this.materials.marker);
        this.startMarker.position.set(point[0], 0.15, point[1]);
        this.scene.add(this.startMarker);
    }

    removeStartMarker() {
        if (this.startMarker) {
            this.scene.remove(this.startMarker);
            this.startMarker.geometry.dispose();
            this.startMarker = null;
        }
    }

    updatePreviewLine(from, to) {
        if (this.previewLine) {
            this.scene.remove(this.previewLine);
            this.previewLine.geometry.dispose();
        }
        this.previewLine = new THREE.Line(
            new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(from[0], 0.05, from[1]),
                new THREE.Vector3(to[0], 0.05, to[1]),
            ]),
            this.materials.preview
        );
        this.scene.add(this.previewLine);
    }

    updatePreviewComponent(type, point) {
        this.removePreviewComponent();
        const spec = FURNITURE_CATALOG[type];
        if (!spec) return;
        const mesh = buildFurnitureGroup({ type, ...spec, position: point, rotation: 0, width: spec.w, depth: spec.d, height: spec.h }, 0, FURNITURE_CATALOG, true);
        if (mesh) {
            this.previewComponent = mesh;
            this.scene.add(mesh);
        }
    }

    updatePreviewSmart(type, point) {
        this.removePreviewSmart();
        const spec = SMART_CATALOG[type];
        if (!spec) return;
        const mesh = buildSmartDeviceGroup({ type, position: point, rotation: 0, mount: spec.mount, on: true }, 0, SMART_CATALOG, false, false);
        if (mesh) {
            this.previewSmart = mesh;
            this.scene.add(mesh);
        }
    }

    removePreviewSmart() {
        if (this.previewSmart) {
            this.scene.remove(this.previewSmart);
            this.disposeObject3D(this.previewSmart);
            this.previewSmart = null;
        }
    }

    removePreviewComponent() {
        if (this.previewComponent) {
            this.scene.remove(this.previewComponent);
            this.disposeObject3D(this.previewComponent);
            this.previewComponent = null;
        }
    }

    updatePreviewKit(kitKey, corner) {
        this.removePreviewKit();
        const kit = ROOM_KITS[kitKey];
        if (!kit?.footprint) return;

        const { w, d } = kit.footprint;
        const [x0, z0] = corner;
        const points = [
            new THREE.Vector3(x0, 0.02, z0),
            new THREE.Vector3(x0 + w, 0.02, z0),
            new THREE.Vector3(x0 + w, 0.02, z0 + d),
            new THREE.Vector3(x0, 0.02, z0 + d),
        ];
        const geom = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.LineLoop(geom, new THREE.LineBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.85 }));
        const fill = new THREE.Mesh(
            new THREE.PlaneGeometry(w, d),
            new THREE.MeshBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.12, side: THREE.DoubleSide })
        );
        fill.rotation.x = -Math.PI / 2;
        fill.position.set(x0 + w / 2, 0.01, z0 + d / 2);

        const group = new THREE.Group();
        group.add(line, fill);
        this.previewKit = group;
        this.scene.add(group);
    }

    removePreviewKit() {
        if (this.previewKit) {
            this.scene.remove(this.previewKit);
            this.previewKit.traverse((obj) => {
                if (obj.geometry) obj.geometry.dispose();
                if (obj.material) {
                    if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
                    else obj.material.dispose();
                }
            });
            this.previewKit = null;
        }
    }

    cancelWallDraw() {
        this.wallStart = null;
        this.wallPreviewEnd = null;
        this.removeStartMarker();
        if (this.previewLine) {
            this.scene.remove(this.previewLine);
            this.previewLine.geometry.dispose();
            this.previewLine = null;
        }
        if (this.viewMode === 'plan2d') this.renderPlan2d();
    }

    addWall(from, to) {
        if (from[0] === to[0] && from[1] === to[1]) return;
        const floor = this.getFloor();
        const wall = {
            id: uid('wall'), from, to,
            height: floor.height || DEFAULT_WALL_HEIGHT,
            thickness: DEFAULT_WALL_THICKNESS,
        };
        floor.walls.push(wall);
        this.refreshScene();
        this.renderElementsList();
        this.selectById('wall', wall.id);
    }

    addOpeningOnWall(wallRef, kind, worldPoint = null) {
        const wallId = typeof wallRef === 'string' ? wallRef : wallRef.userData?.id;
        const floor = this.getFloor();
        const wall = floor.walls.find((w) => w.id === wallId);
        if (!wall) return;

        let t;
        if (worldPoint) {
            t = projectOnWall(wall, worldPoint[0], worldPoint[1]);
        } else {
            const hits = this.raycaster.intersectObject(wallRef, true);
            if (!hits.length) return;
            t = projectOnWall(wall, hits[0].point.x, hits[0].point.z);
        }

        const list = kind === 'door' ? floor.doors : floor.windows;
        const styleKey = kind === 'door' ? this.selectedDoorStyle : this.selectedWindowStyle;
        const catalog = kind === 'door' ? DOOR_STYLES : WINDOW_STYLES;
        const styleSpec = catalog[styleKey] || Object.values(catalog)[0];

        const item = {
            id: uid(kind),
            wall_id: wall.id,
            position: Math.round(t * 100) / 100,
            width: styleSpec.width,
            height: styleSpec.height,
            style: styleSpec.type,
            ...(kind === 'window' ? { sill: styleSpec.sill ?? 0.9 } : {}),
        };
        const [minT, maxT] = openingPositionLimits(wall, item.width);
        item.position = clamp(item.position, minT, maxT);

        list.push(item);
        this.refreshScene();
        this.renderElementsList();
        this.selectById(kind, item.id);
        this.setStatus(`${styleSpec.label} placed — drag along wall or edit in inspector →`);
    }

    addComponent(type, position) {
        const spec = FURNITURE_CATALOG[type];
        if (!spec) return;
        const floor = this.getFloor();
        const component = {
            id: uid('comp'), type, position, rotation: 0,
            width: spec.w, depth: spec.d, height: spec.h,
        };
        floor.components.push(component);
        this.refreshScene();
        this.renderElementsList();
        this.selectById('component', component.id);
    }

    addSmartDevice(type, position) {
        const spec = SMART_CATALOG[type];
        if (!spec) return;
        const floor = this.getFloor();
        const device = {
            id: uid('smart'),
            type,
            position,
            rotation: 0,
            mount: spec.mount,
            ceiling_height: spec.defaultHeight ?? 2.75,
            height_offset: spec.defaultHeight ?? 1.35,
            on: true,
            price: Number(spec.price) || 0,
        };
        floor.smart_devices.push(device);
        this.refreshScene();
        this.renderElementsList();
        this.selectById('smart', device.id);
    }

    addLabel(position, text) {
        const floor = this.getFloor();
        const label = {
            id: uid('label'),
            text: text || 'Text',
            position,
            size: 14,
            color: '#e2e8f0',
        };
        floor.labels.push(label);
        this.refreshScene();
        this.renderElementsList();
        this.selectById('label', label.id);
        return label;
    }

    openLabelEditor({ labelId = null, worldPos, text = '' }) {
        if (!this.canEdit || this.viewMode !== 'plan2d') return;
        this.closeLabelEditor(true);

        const [sx, sy] = this.plan2d.worldToScreen(worldPos[0], worldPos[1]);
        const input = document.createElement('textarea');
        input.className = 'plan2d-label-editor';
        input.value = text;
        input.rows = Math.min(6, Math.max(1, String(text).split('\n').length));
        input.style.left = `${sx}px`;
        input.style.top = `${sy}px`;
        input.placeholder = 'Type label…';
        this.container.appendChild(input);
        input.focus();
        input.select();

        const commit = () => {
            const value = input.value.replace(/\r\n/g, '\n');
            const trimmed = value.trim();
            if (labelId) {
                const label = this.getFloor().labels.find((l) => l.id === labelId);
                if (label) {
                    if (trimmed) {
                        label.text = value;
                        this.selectById('label', label.id);
                    } else {
                        this.deleteById('label', labelId);
                    }
                }
            } else if (trimmed) {
                this.addLabel(worldPos, value);
            }
            this.closeLabelEditor(true);
            this.refreshScene();
            this.renderElementsList();
            this.renderProperties();
        };

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                commit();
            }
            if (e.key === 'Escape') {
                e.preventDefault();
                this.closeLabelEditor(true);
            }
        });
        input.addEventListener('blur', () => commit());

        this.labelEditor = { input, labelId, worldPos };
    }

    closeLabelEditor(removeOnly = false) {
        if (!this.labelEditor) return;
        const { input } = this.labelEditor;
        input.remove();
        this.labelEditor = null;
        if (!removeOnly) this.renderPlan2d();
    }

    placeRoomKit(kitKey, originX, originZ) {
        const kit = ROOM_KITS[kitKey];
        if (!kit) return;

        const floor = this.getFloor();
        const groupId = uid('kit');
        const { w, d } = kit.footprint;
        const x0 = originX;
        const z0 = originZ;
        const x1 = x0 + w;
        const z1 = z0 + d;
        const createdWalls = [];

        if (kit.structure) {
            const polygon = [[x0, z0], [x1, z0], [x1, z1], [x0, z1]];
            floor.rooms.push({
                id: uid('room'),
                name: kit.label,
                preset: kit.preset,
                color: ROOM_PRESETS[kit.preset]?.color ?? ROOM_PRESETS.default.color,
                polygon,
                kit_group: groupId,
            });

            const segments = [
                { from: [x0, z0], to: [x1, z0] },
                { from: [x1, z0], to: [x1, z1] },
                { from: [x1, z1], to: [x0, z1] },
                { from: [x0, z1], to: [x0, z0] },
            ];

            segments.forEach((seg) => {
                const wall = {
                    id: uid('wall'),
                    from: seg.from,
                    to: seg.to,
                    height: floor.height || DEFAULT_WALL_HEIGHT,
                    thickness: DEFAULT_WALL_THICKNESS,
                    kit_group: groupId,
                };
                floor.walls.push(wall);
                createdWalls.push(wall);
            });

            if (kit.door && createdWalls.length) {
                const wallIdx = clamp(kit.door.wall ?? 0, 0, createdWalls.length - 1);
                const doorWall = createdWalls[wallIdx];
                const doorStyle = kit.door.style || 'interior';
                const styleSpec = DOOR_STYLES[doorStyle] || DOOR_STYLES.interior;
                floor.doors.push({
                    id: uid('door'),
                    wall_id: doorWall.id,
                    position: kit.door.position ?? 0.5,
                    width: kit.door.width ?? styleSpec.width,
                    height: kit.door.height ?? styleSpec.height,
                    style: styleSpec.type,
                    kit_group: groupId,
                });
            }
        }

        for (const item of kit.items || []) {
            const px = x0 + item.at[0];
            const pz = z0 + item.at[1];

            if (item.kind === 'component') {
                const spec = FURNITURE_CATALOG[item.type];
                if (!spec) continue;
                floor.components.push({
                    id: uid('comp'),
                    type: item.type,
                    position: [px, pz],
                    rotation: item.rotation ?? 0,
                    width: spec.w,
                    depth: spec.d,
                    height: spec.h,
                    kit_group: groupId,
                });
            } else if (item.kind === 'smart') {
                const spec = SMART_CATALOG[item.type];
                if (!spec) continue;
                floor.smart_devices.push({
                    id: uid('smart'),
                    type: item.type,
                    position: [px, pz],
                    rotation: item.rotation ?? 0,
                    mount: item.mount || spec.mount,
                    ceiling_height: item.height ?? spec.defaultHeight ?? 2.75,
                    height_offset: item.height ?? spec.defaultHeight ?? 1.35,
                    on: true,
                    price: Number(spec.price) || 0,
                    kit_group: groupId,
                });
            }
        }

        this.refreshScene();
        this.renderElementsList();
        this.setStatus(`${kit.label} placed — drag items to adjust · view in 360°`);
    }

    selectObject(mesh) {
        this.selected = mesh ? { type: mesh.userData.type, id: mesh.userData.id } : null;
        this.updateSelectionHighlight();
        this.updateHandles();
        this.renderProperties();
    }

    selectById(type, id) {
        this.selected = { type, id };
        this.updateSelectionHighlight();
        this.updateHandles();
        this.renderProperties();
    }

    rotateSelected(degrees = 90) {
        if (this.selected?.type !== 'component' && this.selected?.type !== 'smart') return;
        const floor = this.getFloor();
        const comp = floor.components.find((c) => c.id === this.selected.id);
        const smart = floor.smart_devices.find((s) => s.id === this.selected.id);
        const item = comp || smart;
        if (!item) return;
        item.rotation = ((item.rotation || 0) + (degrees * Math.PI / 180)) % (Math.PI * 2);
        this.refreshScene();
    }

    duplicateSelected() {
        if (!this.selected || !this.canEdit) return;
        const floor = this.getFloor();
        const offset = this.snapEnabled ? GRID_SNAP : 0.5;

        if (this.selected.type === 'wall') {
            const w = floor.walls.find((x) => x.id === this.selected.id);
            if (!w) return;
            const copy = { ...JSON.parse(JSON.stringify(w)), id: uid('wall'), from: [w.from[0] + offset, w.from[1]], to: [w.to[0] + offset, w.to[1]] };
            floor.walls.push(copy);
            this.selectById('wall', copy.id);
        } else if (this.selected.type === 'door') {
            const d = floor.doors.find((x) => x.id === this.selected.id);
            if (!d) return;
            const copy = { ...JSON.parse(JSON.stringify(d)), id: uid('door'), position: clamp(d.position + 0.15, 0.05, 0.95) };
            floor.doors.push(copy);
            this.selectById('door', copy.id);
        } else if (this.selected.type === 'window') {
            const w = floor.windows.find((x) => x.id === this.selected.id);
            if (!w) return;
            const copy = { ...JSON.parse(JSON.stringify(w)), id: uid('window'), position: clamp(w.position + 0.15, 0.05, 0.95) };
            floor.windows.push(copy);
            this.selectById('window', copy.id);
        } else if (this.selected.type === 'component') {
            const c = floor.components.find((x) => x.id === this.selected.id);
            if (!c) return;
            const copy = { ...JSON.parse(JSON.stringify(c)), id: uid('comp'), position: [c.position[0] + offset, c.position[1] + offset] };
            floor.components.push(copy);
            this.selectById('component', copy.id);
        } else if (this.selected.type === 'smart') {
            const s = floor.smart_devices.find((x) => x.id === this.selected.id);
            if (!s) return;
            const copy = { ...JSON.parse(JSON.stringify(s)), id: uid('smart'), position: [s.position[0] + offset, s.position[1] + offset] };
            floor.smart_devices.push(copy);
            this.selectById('smart', copy.id);
        }
        this.refreshScene();
        this.renderElementsList();
    }

    applyProperty(prop, rawValue, isNumber) {
        if (!this.selected || !this.canEdit) return;
        const floor = this.getFloor();
        const value = isNumber ? parseFloat(rawValue) : rawValue;
        if (isNumber && Number.isNaN(value)) return;

        const find = {
            wall: () => floor.walls.find((w) => w.id === this.selected.id),
            door: () => floor.doors.find((d) => d.id === this.selected.id),
            window: () => floor.windows.find((w) => w.id === this.selected.id),
            component: () => floor.components.find((c) => c.id === this.selected.id),
            smart: () => floor.smart_devices.find((s) => s.id === this.selected.id),
            label: () => floor.labels.find((l) => l.id === this.selected.id),
            room: () => floor.rooms.find((r) => r.id === this.selected.id),
        }[this.selected.type]?.();

        if (!find) return;

        const parts = prop.split('.');
        if (parts.length === 2) {
            const axis = parts[1] === 'x' ? 0 : 1;
            const coord = snap(value, this.snapEnabled);
            if (parts[0] === 'from') find.from[axis] = coord;
            else if (parts[0] === 'to') find.to[axis] = coord;
            else if (parts[0] === 'position') find.position[axis] = coord;
        } else if (prop === 'rotation') {
            find.rotation = (value * Math.PI) / 180;
        } else if (prop === 'position_pct') {
            const wall = floor.walls.find((w) => w.id === find.wall_id);
            if (wall) {
                const [minT, maxT] = openingPositionLimits(wall, find.width);
                find.position = clamp(value / 100, minT, maxT);
            }
        } else if (prop === 'wall_id') {
            find.wall_id = value;
            const wall = floor.walls.find((w) => w.id === value);
            if (wall) {
                const [minT, maxT] = openingPositionLimits(wall, find.width);
                find.position = clamp(find.position, minT, maxT);
            }
        } else if (prop === 'style') {
            const catalog = this.selected.type === 'door' ? DOOR_STYLES : WINDOW_STYLES;
            const spec = catalog[value];
            if (spec) {
                find.style = spec.type;
                find.width = spec.width;
                find.height = spec.height;
                if (this.selected.type === 'window') find.sill = spec.sill ?? find.sill;
            } else {
                find.style = value;
            }
        } else if (prop === 'on') {
            find.on = value === 'true' || value === true;
            const lightType = this.selected.type === 'smart' ? find.type : find.type;
            if (isAutoLightType(lightType)) {
                this.refreshAutomatedLights();
                return;
            }
        } else if (prop === 'color' && this.selected.type === 'label') {
            find.color = value;
        } else if (prop === 'color' && this.selected.type === 'room') {
            find.color = hexColor(value);
        } else if (prop === 'frame_color') {
            find.frame_color = value;
        } else if (prop === 'color' && (this.selected.type === 'door')) {
            find.color = value;
        } else if (prop === 'preset' && this.selected.type === 'room') {
            find.preset = value;
            find.color = ROOM_PRESETS[value]?.color ?? find.color;
        } else if (prop === 'name') {
            find.name = value;
        } else {
            find[prop] = value;
        }

        this.refreshScene();
    }

    updateSelectionHighlight() {
        if (this.viewMode === 'plan2d') {
            this.renderPlan2d();
            return;
        }

        const floor = this.getFloor();
        const floorY = 0;

        this.meshes.walls.forEach((mesh, id) => {
            const sel = this.selected?.type === 'wall' && this.selected.id === id;
            mesh.traverse((c) => { if (c.isMesh) c.material = sel ? this.materials.wallSelected : this.materials.wall; });
        });

        floor.doors.forEach((door) => {
            const wall = floor.walls.find((w) => w.id === door.wall_id);
            if (!wall) return;
            const sel = this.selected?.type === 'door' && this.selected.id === door.id;
            const old = this.meshes.doors.get(door.id);
            if (old) { this.scene.remove(old); this.disposeObject3D(old); }
            const g = buildDoorGroup(door, wall, floorY, sel);
            this.meshes.doors.set(door.id, g);
            this.scene.add(g);
            const state = this.doorAnimStates.get(door.id);
            if (state) applyDoorOpenAmount(g, state.open);
        });

        floor.windows.forEach((win) => {
            const wall = floor.walls.find((w) => w.id === win.wall_id);
            if (!wall) return;
            const sel = this.selected?.type === 'window' && this.selected.id === win.id;
            const old = this.meshes.windows.get(win.id);
            if (old) { this.scene.remove(old); this.disposeObject3D(old); }
            const g = buildWindowGroup(win, wall, floorY, sel);
            this.meshes.windows.set(win.id, g);
            this.scene.add(g);
        });

        this.meshes.components.forEach((mesh, id) => {
            const sel = this.selected?.type === 'component' && this.selected.id === id;
            mesh.traverse((c) => {
                if (!c.isMesh || c.material?.isPointLight) return;
                if (sel) c.material = this.materials.componentSelected;
            });
        });

        floor.smart_devices.forEach((device) => {
            const sel = this.selected?.type === 'smart' && this.selected.id === device.id;
            const old = this.meshes.smart.get(device.id);
            if (old) { this.scene.remove(old); this.disposeObject3D(old); }
            const g = buildSmartDeviceGroup(device, floorY, SMART_CATALOG, sel, this.viewMode !== 'studio');
            if (g) {
                this.meshes.smart.set(device.id, g);
                this.scene.add(g);
            }
        });
    }

    updateHandles() {
        while (this.handleGroup.children.length) {
            const c = this.handleGroup.children[0];
            this.handleGroup.remove(c);
            c.geometry?.dispose();
        }
        if (!this.selected || !this.canEdit) return;

        const floor = this.getFloor();
        const floorY = 0;

        if (this.selected.type === 'wall') {
            const wall = floor.walls.find((w) => w.id === this.selected.id);
            if (!wall) return;
            this.addHandle(wall.from[0], floorY + 0.2, wall.from[1], 'wall-from', wall.id, 'from');
            this.addHandle(wall.to[0], floorY + 0.2, wall.to[1], 'wall-to', wall.id, 'to');
        }

        if (this.selected.type === 'door' || this.selected.type === 'window') {
            const list = this.selected.type === 'door' ? floor.doors : floor.windows;
            const item = list.find((x) => x.id === this.selected.id);
            const wall = floor.walls.find((w) => w.id === item?.wall_id);
            if (item && wall) {
                const t = item.position ?? 0.5;
                const x = wall.from[0] + (wall.to[0] - wall.from[0]) * t;
                const z = wall.from[1] + (wall.to[1] - wall.from[1]) * t;
                const y = this.selected.type === 'window' ? floorY + (item.sill || 0.9) + (item.height || 1.2) / 2 : floorY + (item.height || 2.1) / 2;
                this.addHandle(x, y, z, 'opening-slide', item.id);
            }
        }
    }

    addHandle(x, y, z, dragType, refId, endpoint = null) {
        const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 12), this.materials.handle);
        mesh.position.set(x, y, z);
        mesh.userData = { dragType, refId, endpoint, isHandle: true };
        this.handleGroup.add(mesh);
    }

    deleteSelected() {
        if (!this.selected) return;
        this.deleteById(this.selected.type, this.selected.id);
    }

    countFloorElements(floor) {
        return (floor.walls?.length || 0)
            + (floor.doors?.length || 0)
            + (floor.windows?.length || 0)
            + (floor.rooms?.length || 0)
            + (floor.components?.length || 0)
            + (floor.smart_devices?.length || 0)
            + (floor.labels?.length || 0);
    }

    resetPlacementState() {
        this.endDrag();
        this.cancelWallDraw();
        this.placingComponent = null;
        this.placingSmart = null;
        this.placingKit = null;
        this.updateComponentButtons();
        this.updateSmartButtons();
        this.updateKitButtons();
        this.removePreviewComponent();
        this.removePreviewSmart();
        this.removePreviewKit();
        this.closeLabelEditor(true);
    }

    clearFloorData(floor) {
        floor.walls = [];
        floor.doors = [];
        floor.windows = [];
        floor.rooms = [];
        floor.components = [];
        floor.smart_devices = [];
        floor.labels = [];
    }

    clearCurrentFloor() {
        if (!this.canEdit) return;

        const floor = this.getFloor();
        const floorName = floor.name || floorShortLabel(floor);
        const count = this.countFloorElements(floor);

        if (count === 0) {
            this.setStatus(`${floorName} is already empty`);
            return;
        }

        const floorsTotal = this.mapData.floors?.length || 1;
        const otherFloors = floorsTotal > 1
            ? '\n\nOther floor layers are not affected.'
            : '';

        const ok = window.confirm(
            `Delete ALL elements on "${floorName}"?\n\n`
            + 'This removes walls, doors, windows, rooms, furniture, smart devices, and text labels.'
            + '\nThe floor image (if any) is kept.'
            + otherFloors
        );
        if (!ok) return;

        this.clearFloorData(floor);
        this.selected = null;
        this.resetPlacementState();
        if (this.tool !== 'select') this.setTool('select');
        this.refreshScene();
        this.renderElementsList();
        this.renderProperties();
        this.setStatus(`Cleared all elements on ${floorName} — ${count} item(s) removed`);
    }

    deleteById(type, id) {
        const floor = this.getFloor();

        if (type === 'wall') {
            floor.walls = floor.walls.filter((w) => w.id !== id);
            floor.doors = floor.doors.filter((d) => d.wall_id !== id);
            floor.windows = floor.windows.filter((w) => w.wall_id !== id);
        } else if (type === 'door') floor.doors = floor.doors.filter((d) => d.id !== id);
        else if (type === 'window') floor.windows = floor.windows.filter((w) => w.id !== id);
        else if (type === 'component') floor.components = floor.components.filter((c) => c.id !== id);
        else if (type === 'smart') floor.smart_devices = floor.smart_devices.filter((s) => s.id !== id);
        else if (type === 'label') floor.labels = floor.labels.filter((l) => l.id !== id);

        this.selected = null;
        this.refreshScene();
        this.renderElementsList();
        this.renderProperties();
    }

    deleteObject(mesh) {
        this.deleteById(mesh.userData.type, mesh.userData.id);
    }

    disposeObject3D(obj) {
        obj.traverse((child) => {
            child.geometry?.dispose();
            if (child.material) {
                Array.isArray(child.material) ? child.material.forEach((m) => m.dispose()) : child.material.dispose();
            }
        });
    }

    clearMeshes() {
        ['walls', 'doors', 'windows', 'components', 'smart'].forEach((key) => {
            this.meshes[key].forEach((m) => { this.scene.remove(m); this.disposeObject3D(m); });
            this.meshes[key].clear();
        });
        this.decorMeshes.forEach((c) => {
            this.scene.remove(c);
            if (c.geometry) c.geometry.dispose();
            if (c.material?.map) c.material.map.dispose();
            c.material?.dispose();
        });
        this.decorMeshes = [];
        this.scene.children.filter((c) => c.userData.isFloor || c.userData.isCeiling).forEach((c) => {
            this.scene.remove(c);
            c.geometry?.dispose();
        });
    }

    roomColor(room) {
        if (room.color) return typeof room.color === 'number' ? room.color : hexColor(room.color);
        if (room.preset && ROOM_PRESETS[room.preset]) return ROOM_PRESETS[room.preset].color;
        return ROOM_PRESETS.default.color;
    }

    rebuildScene() {
        if (this.viewMode === 'plan2d') {
            this.renderPlan2d();
            return;
        }

        this.clearMeshes();
        const floor = this.getFloor();
        // Edit one floor at a time at ground level for easier studio / walk navigation.
        const floorY = 0;
        const immersive = this.viewMode !== 'studio';

        const rooms = floor.rooms?.length ? floor.rooms : [{
            id: 'room-default',
            name: 'Floor',
            polygon: [[0, 0], [this.projectWidth, 0], [this.projectWidth, this.projectDepth], [0, this.projectDepth]],
            color: ROOM_PRESETS.default.color,
        }];

        rooms.forEach((room) => {
            const poly = room.polygon || [];
            const fl = buildFloorMesh(poly, floorY, this.roomColor(room));
            if (fl) {
                fl.userData = { type: 'room', id: room.id, isFloor: true };
                this.scene.add(fl);
                this.decorMeshes.push(fl);
            }
            if (immersive) {
                const ceil = buildCeiling(poly, floorY, floor.height || DEFAULT_WALL_HEIGHT, this.materials.ceiling);
                if (ceil) this.scene.add(ceil);
            }
            if (!immersive) {
                const label = buildRoomLabel(room, floorY);
                if (label) {
                    this.scene.add(label);
                    this.decorMeshes.push(label);
                }
            }
        });

        floor.walls.forEach((wall) => {
            const g = buildWallGroup(wall, floorY, floor.doors, floor.windows, this.materials.wall);
            this.meshes.walls.set(wall.id, g);
            this.scene.add(g);
        });

        floor.doors.forEach((door) => {
            const wall = floor.walls.find((w) => w.id === door.wall_id);
            if (!wall) return;
            const sel = this.selected?.type === 'door' && this.selected.id === door.id;
            const g = buildDoorGroup(door, wall, floorY, sel);
            this.meshes.doors.set(door.id, g);
            this.scene.add(g);
        });

        this.initDoorAnimStates();
        this.doorAnimStates.forEach((state, doorId) => {
            const mesh = this.meshes.doors.get(doorId);
            if (mesh) applyDoorOpenAmount(mesh, state.open);
        });

        floor.windows.forEach((win) => {
            const wall = floor.walls.find((w) => w.id === win.wall_id);
            if (!wall) return;
            const sel = this.selected?.type === 'window' && this.selected.id === win.id;
            const g = buildWindowGroup(win, wall, floorY, sel);
            this.meshes.windows.set(win.id, g);
            this.scene.add(g);
        });

        floor.components.forEach((comp) => {
            const g = buildFurnitureGroup(comp, floorY, FURNITURE_CATALOG);
            if (g) {
                this.meshes.components.set(comp.id, g);
                this.scene.add(g);
            }
        });

        floor.smart_devices.forEach((device) => {
            const sel = this.selected?.type === 'smart' && this.selected.id === device.id;
            const g = buildSmartDeviceGroup(device, floorY, SMART_CATALOG, sel, immersive);
            if (g) {
                this.meshes.smart.set(device.id, g);
                this.scene.add(g);
            }
        });

        this.applySceneLighting(immersive);

        this.updateSelectionHighlight();
        this.updateHandles();
    }

    applySceneLighting(immersive) {
        if (immersive && this.nightMode) {
            this.scene.background = new THREE.Color(0x0c0a09);
            this.scene.fog = new THREE.Fog(0x0c0a09, 6, 28);
            this.ambientLight.intensity = 0.12;
            this.ambientLight.color.setHex(0x1e3a5f);
            this.sun.intensity = 0.08;
            this.hemiLight.intensity = 0.1;
            this.materials.wall.color.setHex(0xd6d3d1);
            this.materials.ceiling.color.setHex(0xa8a29e);
            this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
            this.renderer.toneMappingExposure = 0.85;
        } else if (immersive) {
            this.scene.background = new THREE.Color(0x292524);
            this.scene.fog = new THREE.Fog(0x292524, 10, 40);
            this.ambientLight.intensity = 0.7;
            this.ambientLight.color.setHex(0xfff7ed);
            this.sun.intensity = 0.45;
            this.hemiLight.intensity = 0.6;
            this.materials.wall.color.setHex(0xf5f5f4);
            this.materials.ceiling.color.setHex(0xffffff);
            this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
            this.renderer.toneMappingExposure = 1.1;
        } else {
            this.scene.background = new THREE.Color(0x0a0f1a);
            this.scene.fog = new THREE.Fog(0x0a0f1a, 50, 140);
            this.ambientLight.intensity = 0.45;
            this.ambientLight.color.setHex(0xfff5eb);
            this.sun.intensity = 1.1;
            this.hemiLight.intensity = 0.35;
            this.materials.wall.color.setHex(0xe8e4df);
            this.materials.ceiling.color.setHex(0xf8fafc);
            this.renderer.toneMapping = THREE.NoToneMapping;
            this.renderer.toneMappingExposure = 1;
        }
    }

    // ─── Property inspector (studio panel) ───

    propsWrap(content) {
        return `<div class="inspector-panel">${content}</div>`;
    }

    propsHeader(icon, title, subtitle) {
        return `<div class="inspector-head">
            <span class="inspector-head-icon">${icon}</span>
            <div class="min-w-0">
                <p class="inspector-head-title">${title}</p>
                <p class="inspector-head-sub">${subtitle}</p>
            </div>
        </div>`;
    }

    propsSection(title, hint = '') {
        return `<div class="inspector-section">
            <p class="inspector-section-title">${title}</p>
            ${hint ? `<p class="inspector-section-hint">${hint}</p>` : ''}
        </div>`;
    }

    statRow(items) {
        return `<div class="inspector-stat-row">${
            items.map((item) => `<span class="inspector-stat">
                <span class="inspector-stat-label">${item.label}</span>
                <span class="inspector-stat-value">${item.value}</span>
            </span>`).join('')
        }</div>`;
    }

    numControl(prop, label, value, opts = {}) {
        const step = opts.step ?? 0.1;
        const min = opts.min ?? 0;
        const max = opts.max ?? 100;
        const unit = opts.unit ?? 'm';
        const showSlider = opts.slider !== false;
        const safeVal = clamp(Number(value) || 0, min, max);
        const slider = showSlider
            ? `<input type="range" data-prop="${prop}" data-range-sync="${prop}" value="${safeVal}" step="${step}" min="${min}" max="${max}" class="inspector-range">`
            : '';
        return `<div class="inspector-control">
            <div class="inspector-control-head">
                <label class="inspector-control-label">${label}</label>
                <div class="inspector-num-wrap">
                    <input type="number" data-prop="${prop}" value="${safeVal}" step="${step}" min="${min}" max="${max}" class="inspector-num-input">
                    <span class="inspector-unit">${unit}</span>
                </div>
            </div>
            ${slider}
        </div>`;
    }

    textControl(prop, label, value, opts = {}) {
        return `<div class="inspector-control inspector-control--text">
            <label class="inspector-control-label">${label}</label>
            <input type="text" data-prop="${prop}" value="${value ?? ''}" maxlength="${opts.max ?? 120}" class="inspector-text-input" placeholder="${opts.placeholder ?? ''}">
        </div>`;
    }

    textAreaControl(prop, label, value, opts = {}) {
        const safe = String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return `<div class="inspector-control inspector-control--text">
            <label class="inspector-control-label">${label}</label>
            <textarea data-prop="${prop}" rows="${opts.rows ?? 3}" maxlength="${opts.max ?? 500}" class="inspector-text-input min-h-[4.5rem] resize-y" placeholder="${opts.placeholder ?? ''}">${safe}</textarea>
        </div>`;
    }

    colorControl(prop, label, value) {
        const hex = typeof value === 'number'
            ? `#${value.toString(16).padStart(6, '0')}`
            : (value?.startsWith('#') ? value : '#e5e7eb');
        return `<div class="inspector-color">
            <span class="inspector-control-label">${label}</span>
            <label class="inspector-color-swatch" style="--swatch:${hex}">
                <input type="color" data-prop="${prop}" value="${hex}" class="inspector-color-input">
                <span class="inspector-color-hex">${hex}</span>
            </label>
        </div>`;
    }

    toggleControl(prop, label, checked) {
        return `<label class="inspector-toggle">
            <span class="inspector-control-label">${label}</span>
            <input type="checkbox" data-prop="${prop}" ${checked ? 'checked' : ''} class="sr-only">
            <span class="inspector-toggle-track" aria-hidden="true"></span>
        </label>`;
    }

    presetRow(attr, presets, activeKey, labels = {}) {
        const defaults = { compact: 'S', standard: 'M', wide: 'L', large: 'L', ...labels };
        return `<div class="inspector-preset-row">${
            presets.map((key) => `<button type="button" ${attr}="${key}" class="inspector-preset-btn ${activeKey === key ? 'inspector-preset-btn-active' : ''}" title="${key}">${defaults[key] || key}</button>`).join('')
        }</div>`;
    }

    stylePickerGrid(catalog, activeKey) {
        return `<div class="inspector-style-grid">${
            Object.entries(catalog).map(([key, spec]) => {
                const active = activeKey === key;
                return `<button type="button" data-prop-style="${key}" class="inspector-style-chip ${active ? 'inspector-style-chip-active' : ''}" title="${spec.label}">
                    <span class="inspector-style-icon">${spec.icon || '•'}</span>
                    <span class="inspector-style-name">${spec.label}</span>
                </button>`;
            }).join('')
        }</div>`;
    }

    roomPresetGrid(activeKey) {
        return `<div class="inspector-style-grid">${
            Object.entries(ROOM_PRESETS).filter(([k]) => k !== 'default').map(([key, preset]) => {
                const color = `#${(preset.color >>> 0).toString(16).padStart(6, '0')}`;
                const active = activeKey === key;
                return `<button type="button" data-prop-preset="${key}" class="inspector-style-chip ${active ? 'inspector-style-chip-active' : ''}" title="${preset.label}">
                    <span class="inspector-style-icon w-4 h-4 rounded-full border border-white/20" style="background:${color}"></span>
                    <span class="inspector-style-name">${preset.label}</span>
                </button>`;
            }).join('')
        }</div>`;
    }

    rotateControls() {
        if (!this.canEdit) return '';
        return `<div class="inspector-rotate-row">
            <button type="button" data-action="rotate" class="inspector-icon-btn" title="Rotate -90°">↺</button>
            <span class="inspector-control-label">Rotation</span>
            <button type="button" data-action="rotate-cw" class="inspector-icon-btn" title="Rotate +90°">↻</button>
        </div>`;
    }

    actionButtons() {
        if (!this.canEdit) return '';
        return `<div class="inspector-actions">
            <button type="button" data-action="duplicate" class="inspector-action-btn">Duplicate</button>
            <button type="button" data-action="delete" class="inspector-action-btn inspector-action-btn--danger">Delete</button>
        </div>`;
    }

    /** @deprecated use numControl */
    colorField(label, prop, value) {
        return this.colorControl(prop, label, value);
    }

    /** @deprecated use numControl */
    field(label, prop, value, opts = {}) {
        if (opts.text) return this.textControl(prop, label, value, opts);
        return this.numControl(prop, label, value, opts);
    }

    /** @deprecated */
    selectField(label, prop, value, options) {
        const opts = options.map(([v, l]) => `<option value="${v}" ${String(value) === String(v) ? 'selected' : ''}>${l}</option>`).join('');
        return `<div class="inspector-control inspector-control--text">
            <label class="inspector-control-label">${label}</label>
            <select data-prop="${prop}" class="inspector-select">${opts}</select>
        </div>`;
    }

    renderElementsList() {
        if (!this.listEl) return;
        const scrollEl = this.listEl.parentElement;
        const floor = this.getFloor();
        const items = [
            ...floor.walls.map((w) => ({ kind: 'wall', id: w.id, label: `Wall · ${wallLength(w).toFixed(1)}m × ${(w.thickness || DEFAULT_WALL_THICKNESS).toFixed(2)}m` })),
            ...floor.doors.map((d) => ({ kind: 'door', id: d.id, label: `Door · ${Math.round((d.position || 0.5) * 100)}% · ${d.width}m` })),
            ...floor.windows.map((w) => ({ kind: 'window', id: w.id, label: `Window · ${Math.round((w.position || 0.5) * 100)}%` })),
            ...floor.components.map((c) => ({ kind: 'component', id: c.id, label: FURNITURE_CATALOG[c.type]?.label || c.type })),
            ...floor.smart_devices.map((s) => ({ kind: 'smart', id: s.id, label: `${SMART_CATALOG[s.type]?.icon || '●'} ${SMART_CATALOG[s.type]?.label || s.type}` })),
            ...floor.labels.map((l) => ({ kind: 'label', id: l.id, label: `Text · ${(l.text || '').split('\n')[0].slice(0, 32) || 'Empty'}` })),
            ...floor.rooms.map((r) => ({ kind: 'room', id: r.id, label: `Room · ${r.name || 'Unnamed'}` })),
        ];

        const filtered = this.outlinerFilter
            ? items.filter((item) => item.label.toLowerCase().includes(this.outlinerFilter))
            : items;

        if (this.outlinerCountEl) {
            this.outlinerCountEl.textContent = String(items.length);
        }

        this.preserveScroll(scrollEl, () => {
            if (!filtered.length) {
                this.listEl.innerHTML = `<p class="studio-empty">${items.length ? 'No matches.' : 'No elements yet — place a kit or draw walls.'}</p>`;
                return;
            }

            this.listEl.innerHTML = filtered.map((item) => {
                const active = this.selected?.type === item.kind && this.selected.id === item.id;
                return `<button type="button" data-select="${item.kind}:${item.id}" class="${active ? 'studio-outliner-item-active' : 'studio-outliner-item'}">${item.label}</button>`;
            }).join('');

            this.listEl.querySelectorAll('[data-select]').forEach((btn) => {
                btn.addEventListener('click', () => {
                    const [type, id] = btn.dataset.select.split(':');
                    this.selectById(type, id);
                    this.renderElementsList();
                });
            });
        });
    }

    resolveStyleKey(catalog, storedStyle) {
        if (catalog[storedStyle]) return storedStyle;
        const match = Object.entries(catalog).find(([, spec]) => spec.type === storedStyle);
        return match?.[0] || Object.keys(catalog)[0];
    }

    guessOpeningSizePreset(item, catalog, styleKey) {
        const spec = catalog[styleKey];
        if (!spec) return 'standard';
        const wRatio = item.width / spec.width;
        const hRatio = item.height / spec.height;
        if (wRatio < 0.92 && hRatio < 0.98) return 'compact';
        if (wRatio > 1.08 || hRatio > 1.05) return 'wide';
        return 'standard';
    }

    guessComponentSizePreset(comp) {
        const spec = FURNITURE_CATALOG[comp.type];
        if (!spec) return 'standard';
        const avg = ((comp.width / spec.w) + (comp.depth / spec.d) + (comp.height / spec.h)) / 3;
        if (avg < 0.92) return 'compact';
        if (avg > 1.08) return 'large';
        return 'standard';
    }

    applyOpeningSizePreset(preset) {
        if (!this.selected || (this.selected.type !== 'door' && this.selected.type !== 'window')) return;
        const floor = this.getFloor();
        const catalog = this.selected.type === 'door' ? DOOR_STYLES : WINDOW_STYLES;
        const item = this.selected.type === 'door'
            ? floor.doors.find((d) => d.id === this.selected.id)
            : floor.windows.find((w) => w.id === this.selected.id);
        if (!item) return;

        const styleKey = this.resolveStyleKey(catalog, item.style || item.type);
        const spec = catalog[styleKey];
        const mult = {
            compact: [0.85, 0.95],
            standard: [1, 1],
            wide: [1.2, 1.05],
        }[preset] || [1, 1];

        item.width = Math.round(spec.width * mult[0] * 100) / 100;
        item.height = Math.round(spec.height * mult[1] * 100) / 100;
        if (this.selected.type === 'window') {
            item.sill = spec.sill ?? item.sill;
        }

        this.refreshScene();
    }

    applyComponentSizePreset(preset) {
        if (this.selected?.type !== 'component') return;
        const floor = this.getFloor();
        const comp = floor.components.find((c) => c.id === this.selected.id);
        if (!comp) return;
        const spec = FURNITURE_CATALOG[comp.type];
        if (!spec) return;

        const mult = { compact: 0.85, standard: 1, large: 1.15 }[preset] || 1;
        comp.width = Math.round(spec.w * mult * 100) / 100;
        comp.depth = Math.round(spec.d * mult * 100) / 100;
        comp.height = Math.round(spec.h * mult * 100) / 100;
        this.refreshScene();
    }

    renderProperties(focus = true) {
        if (!this.propsEl) return;

        if (!this.selected) {
            this.propsEl.innerHTML = this.renderFloorImagePanel();
            return;
        }

        const floor = this.getFloor();

        if (this.selected.type === 'wall') {
            const wall = floor.walls.find((w) => w.id === this.selected.id);
            if (!wall) return;
            const len = wallLength(wall).toFixed(2);
            const thick = wall.thickness || DEFAULT_WALL_THICKNESS;
            this.propsEl.innerHTML = this.propsWrap(`
                ${this.propsHeader('🧱', 'Wall', 'Drag cyan handles to move endpoints')}
                ${this.statRow([
                    { label: 'Length', value: `${len} m` },
                    { label: 'Height', value: `${wall.height} m` },
                    { label: 'Thick', value: `${thick} m` },
                ])}
                ${this.propsSection('Dimensions')}
                ${this.numControl('height', 'Height', wall.height, { step: 0.1, min: 0.5, max: 6 })}
                ${this.numControl('thickness', 'Thickness', thick, { step: 0.05, min: 0.05, max: 1 })}
                <details class="inspector-advanced">
                    <summary>Placement</summary>
                    <div class="inspector-advanced-body">
                        ${this.numControl('from.x', 'Start X', wall.from[0], { step: 0.1, min: -200, max: 200 })}
                        ${this.numControl('from.z', 'Start Z', wall.from[1], { step: 0.1, min: -200, max: 200 })}
                        ${this.numControl('to.x', 'End X', wall.to[0], { step: 0.1, min: -200, max: 200 })}
                        ${this.numControl('to.z', 'End Z', wall.to[1], { step: 0.1, min: -200, max: 200 })}
                    </div>
                </details>
                ${this.actionButtons()}
            `);
            return;
        }

        if (this.selected.type === 'door') {
            const door = floor.doors.find((d) => d.id === this.selected.id);
            if (!door) return;
            const styleKey = this.resolveStyleKey(DOOR_STYLES, door.style || door.type || 'swing_modern');
            const spec = DOOR_STYLES[styleKey];
            const sizePreset = this.guessOpeningSizePreset(door, DOOR_STYLES, styleKey);
            this.propsEl.innerHTML = this.propsWrap(`
                ${this.propsHeader(spec?.icon || '🚪', spec?.label || 'Door', 'Drag along wall to reposition')}
                ${this.propsSection('Style')}
                ${this.stylePickerGrid(DOOR_STYLES, styleKey)}
                ${this.propsSection('Quick size', 'S · M · L presets')}
                ${this.presetRow('data-opening-size', ['compact', 'standard', 'wide'], sizePreset, { compact: 'S', standard: 'M', wide: 'L' })}
                ${this.propsSection('Dimensions')}
                ${this.numControl('width', 'Width', door.width, { step: 0.05, min: 0.5, max: 3 })}
                ${this.numControl('height', 'Height', door.height, { step: 0.05, min: 1.5, max: 3 })}
                <details class="inspector-advanced">
                    <summary>More options</summary>
                    <div class="inspector-advanced-body">
                        ${this.numControl('position_pct', 'Along wall', Math.round((door.position || 0.5) * 100), { step: 1, min: 5, max: 95, unit: '%' })}
                        ${this.colorControl('frame_color', 'Frame', door.frame_color || '#ffffff')}
                        ${this.colorControl('color', 'Panel', door.color || '#8B6914')}
                    </div>
                </details>
                ${this.actionButtons()}
            `);
            return;
        }

        if (this.selected.type === 'window') {
            const win = floor.windows.find((w) => w.id === this.selected.id);
            if (!win) return;
            const styleKey = this.resolveStyleKey(WINDOW_STYLES, win.style || win.type || 'standard');
            const spec = WINDOW_STYLES[styleKey];
            const sizePreset = this.guessOpeningSizePreset(win, WINDOW_STYLES, styleKey);
            this.propsEl.innerHTML = this.propsWrap(`
                ${this.propsHeader(spec?.icon || '🪟', spec?.label || 'Window', 'Drag along wall to reposition')}
                ${this.propsSection('Style')}
                ${this.stylePickerGrid(WINDOW_STYLES, styleKey)}
                ${this.propsSection('Quick size', 'S · M · L presets')}
                ${this.presetRow('data-opening-size', ['compact', 'standard', 'wide'], sizePreset, { compact: 'S', standard: 'M', wide: 'L' })}
                ${this.propsSection('Dimensions')}
                ${this.numControl('width', 'Width', win.width, { step: 0.05, min: 0.4, max: 4 })}
                ${this.numControl('height', 'Height', win.height, { step: 0.05, min: 0.4, max: 3 })}
                ${this.numControl('sill', 'Sill height', win.sill ?? 0.9, { step: 0.05, min: 0, max: 2.5 })}
                <details class="inspector-advanced">
                    <summary>More options</summary>
                    <div class="inspector-advanced-body">
                        ${this.numControl('position_pct', 'Along wall', Math.round((win.position || 0.5) * 100), { step: 1, min: 5, max: 95, unit: '%' })}
                        ${this.colorControl('frame_color', 'Frame', win.frame_color || '#ffffff')}
                    </div>
                </details>
                ${this.actionButtons()}
            `);
            return;
        }

        if (this.selected.type === 'component') {
            const comp = floor.components.find((c) => c.id === this.selected.id);
            if (!comp) return;
            const spec = FURNITURE_CATALOG[comp.type] || {};
            const label = spec.label || comp.type;
            const sizePreset = this.guessComponentSizePreset(comp);
            this.propsEl.innerHTML = this.propsWrap(`
                ${this.propsHeader(spec.icon || '📦', label, 'Drag on floor to move')}
                ${this.statRow([
                    { label: 'W', value: `${comp.width} m` },
                    { label: 'D', value: `${comp.depth} m` },
                    { label: 'H', value: `${comp.height} m` },
                ])}
                ${this.propsSection('Quick size', 'S · M · L presets')}
                ${this.presetRow('data-component-size', ['compact', 'standard', 'large'], sizePreset, { compact: 'S', standard: 'M', large: 'L' })}
                ${this.propsSection('Dimensions')}
                ${this.numControl('width', 'Width', comp.width, { step: 0.05, min: 0.1, max: 8 })}
                ${this.numControl('depth', 'Depth', comp.depth, { step: 0.05, min: 0.1, max: 8 })}
                ${this.numControl('height', 'Height', comp.height, { step: 0.05, min: 0.1, max: 4 })}
                ${this.rotateControls()}
                <details class="inspector-advanced">
                    <summary>Placement</summary>
                    <div class="inspector-advanced-body">
                        ${this.numControl('position.x', 'Position X', comp.position[0], { step: 0.1, min: -200, max: 200 })}
                        ${this.numControl('position.z', 'Position Z', comp.position[1], { step: 0.1, min: -200, max: 200 })}
                        ${this.numControl('rotation', 'Rotation', Math.round(((comp.rotation || 0) * 180) / Math.PI), { step: 15, min: 0, max: 360, unit: '°' })}
                        <button type="button" data-action="reset-size" class="inspector-action-btn w-full mt-1">Reset default size</button>
                    </div>
                </details>
                ${this.actionButtons()}
            `);
            return;
        }

        if (this.selected.type === 'smart') {
            const device = floor.smart_devices.find((s) => s.id === this.selected.id);
            if (!device) return;
            const spec = SMART_CATALOG[device.type] || {};
            const unitPrice = deviceUnitPrice(device.type, device);
            this.propsEl.innerHTML = this.propsWrap(`
                ${this.propsHeader(spec.icon || '●', spec.label || device.type, spec.model || 'Smart device')}
                ${this.statRow([
                    ...(spec.haDomain ? [{ label: 'HA', value: spec.haDomain }] : []),
                    { label: 'Price', value: formatOmr(unitPrice) },
                ])}
                ${this.toggleControl('on', 'Power', device.on !== false)}
                ${this.propsSection('Price (OMR)')}
                ${this.numControl('price', 'Unit price', unitPrice, { step: 0.1, min: 0, max: 99999 })}
                ${this.propsSection('Placement')}
                ${this.numControl('position.x', 'Position X', device.position[0], { step: 0.1, min: -200, max: 200 })}
                ${this.numControl('position.z', 'Position Z', device.position[1], { step: 0.1, min: -200, max: 200 })}
                ${this.numControl('rotation', 'Rotation', Math.round(((device.rotation || 0) * 180) / Math.PI), { step: 15, min: 0, max: 360, unit: '°' })}
                ${this.rotateControls()}
                ${this.actionButtons()}
            `);
            return;
        }

        if (this.selected.type === 'label') {
            const label = floor.labels.find((l) => l.id === this.selected.id);
            if (!label) return;
            this.propsEl.innerHTML = this.propsWrap(`
                ${this.propsHeader('T', 'Text label', 'Shown on 2D plan · double-click to edit')}
                ${this.textAreaControl('text', 'Text', label.text || '', { placeholder: 'Room name, dimensions, notes…', rows: 4, max: 500 })}
                ${this.propsSection('Style')}
                ${this.numControl('size', 'Font size', label.size || 14, { step: 1, min: 8, max: 48, unit: 'px' })}
                ${this.colorControl('color', 'Color', label.color || '#e2e8f0')}
                ${this.propsSection('Placement')}
                ${this.numControl('position.x', 'Position X', label.position[0], { step: 0.1, min: -200, max: 200 })}
                ${this.numControl('position.z', 'Position Z', label.position[1], { step: 0.1, min: -200, max: 200 })}
                ${this.actionButtons()}
            `);
            return;
        }

        if (this.selected.type === 'room') {
            const room = floor.rooms.find((r) => r.id === this.selected.id);
            if (!room) return;
            this.propsEl.innerHTML = this.propsWrap(`
                ${this.propsHeader('🏠', room.name || 'Room', 'Floor color & preset')}
                ${this.textControl('name', 'Name', room.name || '', { placeholder: 'Living room' })}
                ${this.propsSection('Preset')}
                ${this.roomPresetGrid(room.preset || 'default')}
                ${this.colorControl('color', 'Custom color', this.roomColor(room))}
            `);
        }
    }

    save() {
        if (this.viewMode === 'studio') {
            this.mapData.camera = {
                position: this.camera.position.toArray(),
                target: this.controls.target.toArray(),
            };
        } else if (this.viewMode === 'view360') {
            this.mapData.sim360 = {
                position: [this.camera.position.x, this.camera.position.z],
                yaw: this.look360.yaw,
                pitch: this.look360.pitch,
            };
        }
        const modeInput = this.root.querySelector('#map_mode_input');
        if (modeInput) {
            modeInput.value = this.viewMode === 'plan2d' ? '2d' : this.viewMode === 'view360' ? '360' : '3d';
        }
        if (this.input) this.input.value = JSON.stringify(this.mapData);
        if (this.widthInput) this.widthInput.value = String(Math.round(this.projectWidth) || 20);
        if (this.depthInput) this.depthInput.value = String(Math.round(this.projectDepth) || 15);
        this.form?.submit();
    }

    renderFloorImagePanel() {
        const floor = this.getFloor();
        const underlay = floor.underlay;
        const hasImage = Boolean(underlay?.url);

        if (!hasImage) {
            return `<div class="inspector-empty">
                <span class="inspector-empty-icon">◎</span>
                <p>Import a floor image, then place components on it. Share a public URL when ready.</p>
                <button type="button" data-underlay-replace class="btn-secondary text-xs py-2 px-3 mt-3">Import floor image</button>
            </div>`;
        }

        const opacity = Math.round((underlay.opacity ?? 0.9) * 100);
        const visible = underlay.visible !== false;
        const opacityControl = this.numControl('opacity_pct', 'Opacity', opacity, { step: 1, min: 5, max: 100, unit: '%' })
            .replaceAll('data-prop=', 'data-underlay-prop=');
        const visibleControl = this.toggleControl('visible', 'Show image', visible)
            .replaceAll('data-prop=', 'data-underlay-prop=');
        return this.propsWrap(`
            ${this.propsHeader('🖼', 'Floor image', 'Background for this floor')}
            <div class="rounded-lg overflow-hidden border border-surface-700 bg-surface-950 mb-3">
                <img src="${underlay.url}" alt="" class="w-full max-h-28 object-contain">
            </div>
            ${this.propsSection('Display')}
            ${visibleControl}
            ${opacityControl}
            <div class="flex gap-2 mt-3">
                <button type="button" data-underlay-replace class="btn-secondary text-xs py-2 px-3 flex-1">Replace</button>
                <button type="button" data-underlay-remove class="btn-secondary text-xs py-2 px-3 text-rose-300">Remove</button>
            </div>
            <p class="text-[10px] text-surface-500 mt-3">Place furniture, devices, and labels on the image, then Save and Share a public URL.</p>
        `);
    }

    applyUnderlayProperty(prop, value, isNumber) {
        if (!this.canEdit) return;
        const floor = this.getFloor();
        if (!floor.underlay) return;

        if (prop === 'visible') {
            floor.underlay.visible = value === true || value === 'true' || value === 1 || value === '1';
        } else if (prop === 'opacity' || prop === 'opacity_pct') {
            const pct = Number(value);
            const opacity = prop === 'opacity_pct' ? pct / 100 : pct;
            floor.underlay.opacity = Math.min(1, Math.max(0.05, Number.isFinite(opacity) ? opacity : 0.9));
        }

        this.renderPlan2d();
    }

    removeFloorUnderlay() {
        if (!this.canEdit) return;
        const floor = this.getFloor();
        if (!floor.underlay?.url) return;
        if (!window.confirm('Remove the floor image from this floor?')) return;
        delete floor.underlay;
        this.renderPlan2d();
        this.renderProperties();
        this.setStatus('Floor image removed');
    }

    openImportModal() {
        if (!this.canEdit || !this.importModal) return;
        this.clearImportError();
        this.setImportFile(null);
        this.importModal.classList.remove('hidden');
        queueMicrotask(() => this.importPasteZone?.focus());
    }

    isImportModalOpen() {
        return Boolean(this.importModal && !this.importModal.classList.contains('hidden'));
    }

    isImportableImage(file) {
        if (!file) return false;
        const type = (file.type || '').toLowerCase();
        const name = (file.name || '').toLowerCase();
        return type.startsWith('image/')
            || /\.(jpe?g|png|webp|gif)$/i.test(name);
    }

    onImportPaste(event) {
        if (!this.isImportModalOpen() || this.importSubmit?.disabled) return;

        const items = Array.from(event.clipboardData?.items || []);
        for (const item of items) {
            if (item.kind === 'file' && item.type.startsWith('image/')) {
                const file = item.getAsFile();
                if (file) {
                    event.preventDefault();
                    this.setImportFile(file);
                    this.clearImportError();
                    this.setStatus('Pasted floor image');
                    return;
                }
            }
        }
    }

    setImportFile(file) {
        if (this._importPreviewUrl) {
            URL.revokeObjectURL(this._importPreviewUrl);
            this._importPreviewUrl = null;
        }

        this.importFile = file && this.isImportableImage(file) ? file : null;

        if (this.importImageInput) {
            const dt = new DataTransfer();
            if (this.importFile) dt.items.add(this.importFile);
            this.importImageInput.files = dt.files;
        }

        if (this.importSubmit) this.importSubmit.disabled = !this.importFile;

        if (!this.importFile) {
            this.importPreview?.classList.add('hidden');
            if (this.importPreviewImg) this.importPreviewImg.removeAttribute('src');
            if (this.importPreviewName) this.importPreviewName.textContent = '';
            if (file) this.showImportError('Only JPEG, PNG, WebP, or GIF images are supported.');
            return;
        }

        this.clearImportError();
        this._importPreviewUrl = URL.createObjectURL(this.importFile);
        if (this.importPreviewImg) this.importPreviewImg.src = this._importPreviewUrl;
        if (this.importPreviewName) this.importPreviewName.textContent = this.importFile.name;
        this.importPreview?.classList.remove('hidden');
    }

    closeImportModal() {
        if (!this.importModal || this._importBusy) return;
        this.importModal.classList.add('hidden');
        this.clearImportError();
        this.setImportFile(null);
    }

    clearImportError() {
        if (!this.importError) return;
        this.importError.textContent = '';
        this.importError.classList.add('hidden');
    }

    showImportError(message) {
        if (!this.importError) return;
        this.importError.textContent = message;
        this.importError.classList.remove('hidden');
    }

    setImportBusy(busy) {
        this._importBusy = Boolean(busy);
        if (this.importSubmit) {
            this.importSubmit.disabled = busy || !this.importFile;
            this.importSubmit.textContent = busy ? 'Uploading…' : 'Place on floor';
        }
        this.importForm?.querySelectorAll('input, button').forEach((el) => {
            if (el === this.importSubmit) return;
            if (el.hasAttribute('data-import-close')) {
                el.disabled = busy;
                return;
            }
            if (el.type !== 'submit') el.disabled = busy;
        });
        if (this.importPasteZone) {
            this.importPasteZone.classList.toggle('pointer-events-none', busy);
            this.importPasteZone.classList.toggle('opacity-60', busy);
        }
    }

    async submitFloorImage() {
        if (!this.importUrl || !this.importFile) {
            this.showImportError('Choose an image first.');
            return;
        }

        const csrf = document.querySelector('meta[name="csrf-token"]')?.content;
        const body = new FormData();
        body.append('image', this.importFile);

        this.clearImportError();
        this.setImportBusy(true);
        this.setStatus('Uploading floor image…');

        try {
            const response = await fetch(this.importUrl, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    ...(csrf ? { 'X-CSRF-TOKEN': csrf } : {}),
                },
                body,
                credentials: 'same-origin',
            });

            const data = await response.json().catch(() => ({}));
            if (!response.ok) {
                const errValues = data.errors ? Object.values(data.errors).flat() : [];
                throw new Error(data.message || errValues[0] || `Upload failed (${response.status})`);
            }

            if (!data.url) throw new Error('Upload succeeded but no image URL was returned.');

            this.applyFloorUnderlay(data.url);
            this.closeImportModalForced();
            this.setStatus('Floor image placed — add components, then Save & Share');
        } catch (err) {
            this.showImportError(err.message || 'Upload failed.');
            this.setStatus('Floor image upload failed');
        } finally {
            this.setImportBusy(false);
        }
    }

    applyFloorUnderlay(url) {
        const floor = this.getFloor();
        floor.underlay = {
            url,
            opacity: 0.92,
            visible: true,
            bounds: [0, 0, this.projectWidth, this.projectDepth],
        };

        this.selected = null;
        if (this.viewMode !== 'plan2d') this.setViewMode('plan2d');
        else this.renderPlan2d();
        this.renderProperties();
        this.plan2d?.fitToBounds(this.projectWidth, this.projectDepth);
    }

    closeImportModalForced() {
        this.importModal?.classList.add('hidden');
        this.clearImportError();
        this.setImportFile(null);
    }

    openQuotationModal() {
        if (!this.quotationModal) return;
        const meta = this.mapData.quotation || {};
        if (this.quotationClientInput) this.quotationClientInput.value = meta.client || '';
        if (this.quotationNotesInput) this.quotationNotesInput.value = meta.notes || '';
        if (this.quotationDiscountInput) {
            this.quotationDiscountInput.value = String(meta.discount_pct ?? 0);
        }
        if (this.quotationTvaInput) {
            this.quotationTvaInput.value = String(meta.tva_pct ?? 5);
        }
        this.renderQuotation();
        this.quotationModal.classList.remove('hidden');
    }

    closeQuotationModal() {
        this.persistQuotationMeta();
        this.quotationModal?.classList.add('hidden');
    }

    persistQuotationMeta() {
        this.mapData.quotation = {
            client: this.quotationClientInput?.value?.trim() || '',
            notes: this.quotationNotesInput?.value?.trim() || '',
            discount_pct: Number(this.quotationDiscountInput?.value) || 0,
            tva_pct: Number(this.quotationTvaInput?.value) || 0,
        };
    }

    collectQuotationLines() {
        const counts = new Map();

        for (const floor of this.mapData.floors || []) {
            for (const device of floor.smart_devices || []) {
                const type = device.type;
                // Prefer live catalog price so Smart Components admin edits apply to quotation.
                const catalogPrice = Number(SMART_CATALOG[type]?.price);
                const unit = Number.isFinite(catalogPrice)
                    ? catalogPrice
                    : deviceUnitPrice(type, device);
                const key = `${type}::${unit.toFixed(3)}`;
                const existing = counts.get(key);
                if (existing) {
                    existing.qty += 1;
                } else {
                    const spec = SMART_CATALOG[type] || {};
                    counts.set(key, {
                        type,
                        icon: spec.icon || '●',
                        name: spec.label || type,
                        unit,
                        qty: 1,
                    });
                }
            }
        }

        const orderIndex = new Map(SMART_CATALOG_ORDER.map((k, i) => [k, i]));
        return [...counts.values()]
            .map((line) => ({
                ...line,
                total: Math.round(line.unit * line.qty * 1000) / 1000,
            }))
            .sort((a, b) => (orderIndex.get(a.type) ?? 999) - (orderIndex.get(b.type) ?? 999)
                || a.unit - b.unit);
    }

    computeQuotationTotals(lines) {
        const subtotal = lines.reduce((sum, line) => sum + line.total, 0);
        const discountPct = Math.min(100, Math.max(0, Number(this.quotationDiscountInput?.value) || 0));
        const tvaPct = Math.min(100, Math.max(0, Number(this.quotationTvaInput?.value) || 0));
        const discountAmount = Math.round(subtotal * (discountPct / 100) * 1000) / 1000;
        const afterDiscount = Math.round((subtotal - discountAmount) * 1000) / 1000;
        const tvaAmount = Math.round(afterDiscount * (tvaPct / 100) * 1000) / 1000;
        const total = Math.round((afterDiscount + tvaAmount) * 1000) / 1000;

        return {
            subtotal,
            discountPct,
            discountAmount,
            afterDiscount,
            tvaPct,
            tvaAmount,
            total,
            itemCount: lines.reduce((sum, line) => sum + line.qty, 0),
        };
    }

    renderQuotation() {
        if (!this.quotationLinesEl || !this.quotationTotalsEl) return;

        this.persistQuotationMeta();
        const lines = this.collectQuotationLines();
        const totals = this.computeQuotationTotals(lines);
        const projectName = this.root.dataset.projectName
            || this.root.querySelector('.studio-topbar-title')?.textContent?.trim()
            || 'Project';

        if (!lines.length) {
            this.quotationLinesEl.innerHTML = `
                <div class="p-6 text-center text-sm text-surface-400">
                    No devices placed yet. Add cameras, sensors, network gear… then open Quotation again.
                </div>`;
            this.quotationTotalsEl.innerHTML = `
                <div class="flex justify-between text-sm text-surface-300">
                    <span>Total</span>
                    <span class="font-semibold text-white">${formatOmr(0)}</span>
                </div>`;
            return;
        }

        this.quotationLinesEl.innerHTML = `
            <table class="quotation-table w-full text-left">
                <thead>
                    <tr class="text-[10px] uppercase tracking-wide text-surface-500 border-b border-surface-700 bg-surface-800/60">
                        <th class="px-3 py-2 font-medium">Item</th>
                        <th class="px-3 py-2 font-medium text-center">Qty</th>
                        <th class="px-3 py-2 font-medium text-right">Unit</th>
                        <th class="px-3 py-2 font-medium text-right">Total</th>
                    </tr>
                </thead>
                <tbody>
                    ${lines.map((line) => `
                        <tr class="border-b border-surface-800/80 text-sm text-surface-200">
                            <td class="px-3 py-2.5">
                                <span class="inline-flex items-center gap-2">
                                    <span aria-hidden="true">${line.icon}</span>
                                    <span>${line.name}</span>
                                </span>
                            </td>
                            <td class="px-3 py-2.5 text-center">${line.qty}</td>
                            <td class="px-3 py-2.5 text-right font-mono text-xs">${formatOmr(line.unit)}</td>
                            <td class="px-3 py-2.5 text-right font-mono text-xs text-white">${formatOmr(line.total)}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>`;

        this.quotationTotalsEl.innerHTML = `
            <div class="flex justify-between text-xs text-surface-400">
                <span>${projectName}</span>
                <span>${totals.itemCount} item(s)</span>
            </div>
            <div class="flex justify-between text-sm text-surface-300">
                <span>Subtotal</span>
                <span class="font-mono">${formatOmr(totals.subtotal)}</span>
            </div>
            ${totals.discountPct > 0 ? `
                <div class="flex justify-between text-sm text-amber-300/90">
                    <span>Discount (${totals.discountPct}%)</span>
                    <span class="font-mono">− ${formatOmr(totals.discountAmount)}</span>
                </div>
            ` : ''}
            ${totals.tvaPct > 0 ? `
                <div class="flex justify-between text-sm text-surface-300">
                    <span>TVA / VAT (${totals.tvaPct}%)</span>
                    <span class="font-mono">${formatOmr(totals.tvaAmount)}</span>
                </div>
            ` : ''}
            <div class="pt-2 mt-1 border-t border-surface-700 flex justify-between text-base font-semibold text-white">
                <span>Total · الإجمالي</span>
                <span class="font-mono text-brand-300">${formatOmr(totals.total)}</span>
            </div>
            <p class="text-[10px] text-surface-500 pt-1">Amounts in Omani Rial (OMR / ر.ع.)</p>
        `;
    }

    printQuotation() {
        this.persistQuotationMeta();
        const lines = this.collectQuotationLines();
        const totals = this.computeQuotationTotals(lines);
        const client = this.escapeHtml(this.quotationClientInput?.value?.trim() || '—');
        const notes = this.escapeHtml(this.quotationNotesInput?.value?.trim() || '');
        const projectName = this.escapeHtml(
            this.root.dataset.projectName
            || this.root.querySelector('.studio-topbar-title')?.textContent?.trim()
            || 'Project'
        );
        const date = new Date().toLocaleDateString('en-GB');
        const invoiceNo = `QT-${Date.now().toString().slice(-8)}`;
        const logoUrl = `${window.location.origin}/images/afaq-smart-logo.png`;
        const companyAr = 'شركة الأفاق للبيوت الذكية';
        const companyEn = 'afaq.smart';
        const taglineAr = 'بيوت ذكية .. حياة أسهل';

        const rows = lines.length
            ? lines.map((line, index) => `
                <tr>
                    <td class="num">${index + 1}</td>
                    <td>
                        <div class="item-cell">
                            <span class="item-icon">${line.icon}</span>
                            <span>${this.escapeHtml(line.name)}</span>
                        </div>
                    </td>
                    <td class="center">${line.qty}</td>
                    <td class="right mono">${formatOmr(line.unit)}</td>
                    <td class="right mono strong">${formatOmr(line.total)}</td>
                </tr>`).join('')
            : '<tr><td colspan="5" class="empty">No devices on this map yet</td></tr>';

        const html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<title>عرض سعر — ${companyAr}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Manrope:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  :root {
    --navy: #0b2a4a;
    --cyan: #00b4d8;
    --ink: #0f172a;
    --muted: #64748b;
    --line: #e2e8f0;
    --soft: #f8fafc;
    --card: #ffffff;
  }
  @page { margin: 12mm; }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    color: var(--ink);
    background: #fff;
    font-family: "Manrope", "Cairo", system-ui, sans-serif;
  }
  .sheet {
    max-width: 820px;
    margin: 0 auto;
    padding: 28px 32px 36px;
  }
  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding-bottom: 22px;
    border-bottom: 3px solid transparent;
    border-image: linear-gradient(90deg, var(--navy), var(--cyan)) 1;
    margin-bottom: 22px;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .brand img {
    width: 88px;
    height: 88px;
    object-fit: contain;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 8px 24px rgba(11, 42, 74, 0.12);
  }
  .brand-text h1 {
    margin: 0;
    font-family: "Cairo", "Manrope", sans-serif;
    font-size: 22px;
    font-weight: 800;
    color: var(--navy);
    letter-spacing: 0;
    line-height: 1.35;
  }
  .brand-text .en {
    margin-top: 2px;
    font-size: 13px;
    font-weight: 700;
    color: var(--cyan);
  }
  .brand-text .tag {
    margin-top: 4px;
    font-family: "Cairo", sans-serif;
    font-size: 12px;
    color: var(--muted);
  }
  .doc-badge {
    text-align: left;
    min-width: 180px;
  }
  .doc-badge .label {
    display: inline-block;
    padding: 6px 12px;
    border-radius: 999px;
    background: linear-gradient(90deg, rgba(11,42,74,0.08), rgba(0,180,216,0.14));
    color: var(--navy);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .doc-badge h2 {
    margin: 10px 0 0;
    font-size: 28px;
    font-weight: 800;
    color: var(--navy);
  }
  .doc-badge p {
    margin: 4px 0 0;
    font-size: 12px;
    color: var(--muted);
  }
  .meta-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 14px;
    margin-bottom: 22px;
  }
  .meta-card {
    background: var(--soft);
    border: 1px solid var(--line);
    border-radius: 16px;
    padding: 14px 16px;
  }
  .meta-card .k {
    font-size: 11px;
    color: var(--muted);
    font-weight: 700;
    margin-bottom: 4px;
  }
  .meta-card .v {
    font-size: 14px;
    font-weight: 700;
    color: var(--ink);
  }
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 16px;
    margin: 8px 0 18px;
  }
  thead th {
    background: linear-gradient(90deg, var(--navy), #12507a 55%, var(--cyan));
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    padding: 12px 12px;
    text-align: right;
  }
  thead th.center, td.center { text-align: center; }
  thead th.right, td.right { text-align: left; }
  thead th.num, td.num { text-align: center; width: 44px; }
  tbody td {
    padding: 12px;
    border-top: 1px solid var(--line);
    font-size: 13px;
    vertical-align: middle;
  }
  tbody tr:nth-child(even) td { background: #fbfdff; }
  .item-cell { display: flex; align-items: center; gap: 10px; }
  .item-icon {
    width: 30px; height: 30px; border-radius: 9px;
    display: inline-flex; align-items: center; justify-content: center;
    background: rgba(0,180,216,0.1); font-size: 15px;
  }
  .mono { font-variant-numeric: tabular-nums; font-family: "Manrope", monospace; }
  .strong { font-weight: 700; }
  .empty { text-align: center; color: var(--muted); padding: 28px !important; }
  .bottom {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 18px;
    align-items: start;
  }
  .note-box {
    border: 1px dashed #cbd5e1;
    border-radius: 16px;
    padding: 14px 16px;
    background: #fff;
    min-height: 110px;
  }
  .note-box .k {
    font-size: 11px;
    font-weight: 800;
    color: var(--muted);
    margin-bottom: 6px;
  }
  .note-box .v {
    font-size: 13px;
    color: var(--ink);
    line-height: 1.6;
  }
  .totals {
    border-radius: 18px;
    overflow: hidden;
    border: 1px solid var(--line);
    background: var(--card);
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
  }
  .totals .row {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 11px 16px;
    font-size: 13px;
    border-bottom: 1px solid var(--line);
  }
  .totals .row span:last-child { font-weight: 700; font-variant-numeric: tabular-nums; }
  .totals .row.muted { color: var(--muted); }
  .totals .row.discount { color: #b45309; background: #fffbeb; }
  .totals .row.grand {
    border-bottom: 0;
    background: linear-gradient(90deg, var(--navy), #12507a 50%, var(--cyan));
    color: #fff;
    font-size: 16px;
    font-weight: 800;
    padding: 16px;
  }
  .footer {
    margin-top: 28px;
    padding-top: 14px;
    border-top: 1px solid var(--line);
    display: flex;
    justify-content: space-between;
    gap: 12px;
    color: var(--muted);
    font-size: 11px;
  }
  .footer strong { color: var(--navy); }
  @media print {
    .sheet { padding: 0; }
    .totals { box-shadow: none; }
  }
</style>
</head>
<body>
  <div class="sheet">
    <header class="hero">
      <div class="brand">
        <img src="${logoUrl}" alt="${companyEn}" />
        <div class="brand-text">
          <h1>${companyAr}</h1>
          <div class="en">${companyEn}</div>
          <div class="tag">${taglineAr}</div>
        </div>
      </div>
      <div class="doc-badge">
        <span class="label">Quotation / عرض سعر</span>
        <h2>Invoice</h2>
        <p>${invoiceNo}<br>${date}</p>
      </div>
    </header>

    <section class="meta-grid">
      <div class="meta-card">
        <div class="k">العميل / Client</div>
        <div class="v">${client}</div>
      </div>
      <div class="meta-card">
        <div class="k">المشروع / Project</div>
        <div class="v">${projectName}</div>
      </div>
    </section>

    <table>
      <thead>
        <tr>
          <th class="num">#</th>
          <th>الصنف / Item</th>
          <th class="center">الكمية / Qty</th>
          <th class="right">السعر / Unit</th>
          <th class="right">الإجمالي / Total</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>

    <section class="bottom">
      <div class="note-box">
        <div class="k">ملاحظات / Notes</div>
        <div class="v">${notes || '—'}</div>
      </div>
      <div class="totals">
        <div class="row muted"><span>المجموع الفرعي / Subtotal</span><span>${formatOmr(totals.subtotal)}</span></div>
        ${totals.discountPct > 0 ? `<div class="row discount"><span>الخصم / Discount (${totals.discountPct}%)</span><span>− ${formatOmr(totals.discountAmount)}</span></div>` : ''}
        ${totals.tvaPct > 0 ? `<div class="row"><span>الضريبة / TVA (${totals.tvaPct}%)</span><span>${formatOmr(totals.tvaAmount)}</span></div>` : ''}
        <div class="row grand"><span>الإجمالي / Total</span><span>${formatOmr(totals.total)}</span></div>
      </div>
    </section>

    <footer class="footer">
      <div><strong>${companyAr}</strong> · ${companyEn}</div>
      <div>العملة: ريال عماني (OMR / ر.ع.)</div>
    </footer>
  </div>
</body>
</html>`;

        this.printHtmlDocument(html);
        this.setStatus('Print dialog opened for quotation invoice');
    }

    escapeHtml(value) {
        return String(value ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    printHtmlDocument(html) {
        // Prefer a hidden iframe — popup windows with noopener return null and often fail.
        let frame = document.getElementById('quotation-print-frame');
        if (!frame) {
            frame = document.createElement('iframe');
            frame.id = 'quotation-print-frame';
            frame.setAttribute('aria-hidden', 'true');
            frame.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0;opacity:0;pointer-events:none;';
            document.body.appendChild(frame);
        }

        const doc = frame.contentDocument || frame.contentWindow?.document;
        if (!doc || !frame.contentWindow) {
            // Fallback: blob URL tab (no noopener so we keep a handle)
            const blob = new Blob([html], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            const win = window.open(url, '_blank');
            if (!win) {
                this.setStatus('Pop-up blocked — allow pop-ups to print the invoice');
                URL.revokeObjectURL(url);
                return;
            }
            const revoke = () => URL.revokeObjectURL(url);
            win.addEventListener('load', () => {
                win.focus();
                win.print();
                setTimeout(revoke, 1000);
            });
            // Some browsers don't fire load for blob windows
            setTimeout(() => {
                try { win.focus(); win.print(); } catch (_) { /* ignore */ }
                setTimeout(revoke, 1500);
            }, 400);
            return;
        }

        doc.open();
        doc.write(html);
        doc.close();

        const triggerPrint = () => {
            try {
                frame.contentWindow.focus();
                frame.contentWindow.print();
            } catch (err) {
                this.setStatus('Could not open print dialog');
            }
        };

        const images = Array.from(doc.images || []);
        const pending = images.filter((img) => !img.complete);
        if (!pending.length) {
            setTimeout(triggerPrint, 120);
            return;
        }

        let left = pending.length;
        const done = () => {
            left -= 1;
            if (left <= 0) setTimeout(triggerPrint, 80);
        };
        pending.forEach((img) => {
            img.addEventListener('load', done, { once: true });
            img.addEventListener('error', done, { once: true });
        });
        // Safety timeout if image never settles
        setTimeout(triggerPrint, 1500);
    }

    applyLiveMap(payload) {
        if (!payload?.map_data) return;

        const savedX = this.camera.position.x;
        const savedZ = this.camera.position.z;
        const savedYaw = this.look360.yaw;
        const savedPitch = this.look360.pitch;
        const savedFloor = this.activeFloorIndex;
        const was360 = this.viewMode === 'view360';

        this.mapData = payload.map_data;
        this.projectWidth = Number(payload.width) || this.projectWidth;
        this.projectDepth = Number(payload.depth) || this.projectDepth;
        this.root.dataset.width = String(this.projectWidth);
        this.root.dataset.depth = String(this.projectDepth);

        this.normalizeMapData();
        this.activeFloorIndex = clamp(savedFloor, 0, this.mapData.floors.length - 1);
        this.mapData.active_floor = this.activeFloorIndex;
        this.renderFloorSwitcher();
        if (this.viewMode === 'plan2d') {
            this.renderPlan2d();
        } else {
            this.rebuildScene();
        }

        if (was360) {
            const walkable = this.canWalkTo(savedX, savedZ);
            const [x, z] = walkable ? [savedX, savedZ] : this.findWalkableSpawn(savedX, savedZ);
            this.camera.position.set(x, this.eyeHeight, z);
            this.look360.yaw = savedYaw;
            this.look360.pitch = savedPitch;
            this.apply360Rotation();
            this.applySceneLighting(true);
            this.updateRoomAutomation();
        }
    }

    startLiveSync() {
        if (!this.liveUrl) return;

        const poll = async () => {
            try {
                const response = await fetch(this.liveUrl, {
                    headers: { Accept: 'application/json' },
                    credentials: 'same-origin',
                });
                if (!response.ok) return;

                const data = await response.json();
                const revision = String(data.updated_at || '');
                if (revision && revision !== this.liveRevision) {
                    this.liveRevision = revision;
                    this.applyLiveMap(data);
                    this.setStatus('Home updated — latest design loaded');
                }
            } catch {
                // Ignore transient network errors during polling.
            }
        };

        poll();
        this.liveSyncTimer = setInterval(poll, 15000);
    }

    onResize() {
        const w = Math.max(this.container.clientWidth, 1);
        const h = Math.max(this.container.clientHeight, 1);
        if (this.viewMode !== 'plan2d') {
            this.camera.aspect = w / h;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(w, h);
        }
        this.plan2d?.resize(w, h);
        if (this.viewMode === 'plan2d') {
            this.renderPlan2d();
        }
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        if (this.viewMode === 'plan2d') return;

        const delta = this.clock.getDelta();

        if (this.viewMode === 'studio') {
            this.controls.update();
        } else if (this.viewMode === 'view360') {
            if (document.pointerLockElement === this.renderer.domElement) {
                this.look360.yaw = this.camera.rotation.y;
                this.look360.pitch = this.camera.rotation.x;
            }
            this.updateFirstPerson(delta);
        }

        this.renderer.render(this.scene, this.camera);
    }
}

function bootMapEditor() {
    const root = document.getElementById('map-editor-root');
    if (root && !root.dataset.initialized) {
        root.dataset.initialized = 'true';
        new MapEditor(root);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootMapEditor);
} else {
    bootMapEditor();
}
