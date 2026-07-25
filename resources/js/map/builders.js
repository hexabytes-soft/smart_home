import * as THREE from 'three';
import { hexColor } from './catalog.js';

export function wallLen(wall) {
    return Math.hypot(wall.to[0] - wall.from[0], wall.to[1] - wall.from[1]);
}

function box(w, h, d, mat) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.castShadow = true;
    m.receiveShadow = true;
    return m;
}

function cyl(rt, rb, h, seg, mat) {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat);
    m.castShadow = true;
    return m;
}

function mat(color, opts = {}) {
    return new THREE.MeshStandardMaterial({
        color,
        roughness: opts.roughness ?? 0.6,
        metalness: opts.metalness ?? 0,
        emissive: opts.emissive ?? 0,
        emissiveIntensity: opts.emissiveIntensity ?? (opts.emissive ? 0.4 : 0),
        transparent: opts.transparent ?? false,
        opacity: opts.opacity ?? 1,
    });
}

/** Wall with real cutouts for doors & windows (works on interior walls too). */
export function buildWallGroup(wall, floorY, doors, windows, matWall) {
    const group = new THREE.Group();
    const L = wallLen(wall) || 0.1;
    const H = wall.height || 2.8;
    const T = wall.thickness || 0.15;

    const openings = [
        ...doors.filter((d) => d.wall_id === wall.id).map((d) => ({
            l: clamp(d.position * L - (d.width || 1) / 2, 0, L),
            r: clamp(d.position * L + (d.width || 1) / 2, 0, L),
            b: 0,
            t: Math.min(d.height || 2.1, H),
        })),
        ...windows.filter((w) => w.wall_id === wall.id).map((w) => ({
            l: clamp(w.position * L - (w.width || 1.2) / 2, 0, L),
            r: clamp(w.position * L + (w.width || 1.2) / 2, 0, L),
            b: w.sill || 0.9,
            t: Math.min((w.sill || 0.9) + (w.height || 1.2), H),
        })),
    ].sort((a, b) => a.l - b.l);

    const merged = [];
    for (const op of openings) {
        if (!merged.length || op.l > merged[merged.length - 1].r + 0.01) {
            merged.push({ ...op });
        } else {
            const last = merged[merged.length - 1];
            last.r = Math.max(last.r, op.r);
            last.b = Math.min(last.b, op.b);
            last.t = Math.max(last.t, op.t);
        }
    }

    const addSeg = (x0, x1, y0, y1) => {
        const w = x1 - x0;
        const hh = y1 - y0;
        if (w < 0.03 || hh < 0.03) return;
        const m = box(w, hh, T, matWall);
        m.position.set(-L / 2 + x0 + w / 2, y0 + hh / 2, 0);
        group.add(m);
    };

    if (!merged.length) {
        const m = box(L, H, T, matWall);
        m.position.y = H / 2;
        group.add(m);
    } else {
        let x = 0;
        for (const op of merged) {
            if (op.l > x) addSeg(x, op.l, 0, H);
            if (op.t < H - 0.03) addSeg(op.l, op.r, op.t, H);
            if (op.b > 0.03) addSeg(op.l, op.r, 0, op.b);
            x = Math.max(x, op.r);
        }
        if (x < L - 0.03) addSeg(x, L, 0, H);
    }

    const [x1, z1] = wall.from;
    const [x2, z2] = wall.to;
    group.position.set((x1 + x2) / 2, floorY, (z1 + z2) / 2);
    group.rotation.y = -Math.atan2(z2 - z1, x2 - x1);
    group.userData = { type: 'wall', id: wall.id };
    return group;
}

function clamp(v, a, b) {
    return Math.max(a, Math.min(b, v));
}

function wallTransform(wall, t, floorY) {
    const [x1, z1] = wall.from;
    const [x2, z2] = wall.to;
    const angle = Math.atan2(z2 - z1, x2 - x1);
    const x = x1 + (x2 - x1) * t;
    const z = z1 + (z2 - z1) * t;
    return { x, z, angle, floorY };
}

/** World position of a door center on the floor plan */
export function getDoorCenter(door, wall) {
    const t = door.position ?? 0.5;
    const x = wall.from[0] + (wall.to[0] - wall.from[0]) * t;
    const z = wall.from[1] + (wall.to[1] - wall.from[1]) * t;
    return { x, z };
}

/** Hinged door panel for open/close animation */
function addHingedPanel(group, w, panelH, ft, panelMat, handleMat, openDir = 1) {
    const pivot = new THREE.Group();
    pivot.position.set(-w / 2 + ft, 0, 0);
    pivot.userData.doorPanel = true;
    pivot.userData.panelKind = 'swing';
    pivot.userData.openDir = openDir;
    const pw = w - ft * 2;
    const panel = box(pw, panelH, 0.05, panelMat);
    panel.position.set(pw / 2, panelH / 2 + 0.02, 0.03);
    pivot.add(panel);
    if (handleMat) {
        const mk = cyl(0.035, 0.035, 0.12, 10, handleMat);
        mk.rotation.z = Math.PI / 2;
        mk.position.set(pw - 0.08, panelH * 0.45, 0.07);
        pivot.add(mk);
    }
    group.add(pivot);
    return pivot;
}

/** Sliding door panel */
function addSlidingPanel(group, w, panelH, ft, glassMat, offset = 0) {
    const pivot = new THREE.Group();
    pivot.position.set(offset, 0, 0);
    pivot.userData.doorPanel = true;
    pivot.userData.panelKind = 'slide';
    pivot.userData.slideDist = (w - ft * 2) * 0.55;
    pivot.userData.baseX = offset;
    const panel = box((w - ft * 2) * 0.48, panelH, 0.02, glassMat);
    panel.position.set(0, panelH / 2 + 0.02, 0.02);
    pivot.add(panel);
    group.add(pivot);
    return pivot;
}

/** Multiple door designs — placed IN the wall opening (offset forward). */
export function buildDoorGroup(door, wall, floorY, selected = false) {
    const group = new THREE.Group();
    const w = door.width || 1;
    const h = door.height || 2.1;
    const style = door.style || door.type || 'swing_modern';
    const ft = 0.06;
    const frameColor = door.frame_color ? hexColor(door.frame_color) : 0xffffff;
    const panelColor = door.color ? hexColor(door.color) : (selected ? 0xfbbf24 : 0x8B6914);

    const frameMat = mat(frameColor, { roughness: 0.45 });
    const panelMat = mat(panelColor, { roughness: 0.55, emissive: selected ? 0xd97706 : 0, emissiveIntensity: selected ? 0.25 : 0 });
    const glassMat = mat(0x93c5fd, { transparent: true, opacity: 0.4, metalness: 0.5, roughness: 0.05 });
    const handleMat = mat(0xd4d4d8, { metalness: 0.9, roughness: 0.15 });
    const darkMat = mat(0x1f2937);

    const addFrame = () => {
        const lj = box(ft, h, 0.1, frameMat);
        lj.position.set(-w / 2 + ft / 2, h / 2, 0);
        const rj = box(ft, h, 0.1, frameMat);
        rj.position.set(w / 2 - ft / 2, h / 2, 0);
        const head = box(w, ft, 0.1, frameMat);
        head.position.set(0, h - ft / 2, 0);
        group.add(lj, rj, head);
    };

    const panelH = h - ft - 0.05;

    switch (style) {
        case 'sliding_glass':
        case 'garage':
            addFrame();
            if (style === 'garage') {
                const panel = box(w - ft * 2, panelH, 0.04, mat(0xe5e7eb, { metalness: 0.4 }));
                panel.position.set(0, panelH / 2 + 0.02, 0.02);
                group.add(panel);
                const lines = box(w - ft * 2, 0.02, 0.05, darkMat);
                for (let i = 1; i < 5; i++) {
                    const l = lines.clone();
                    l.position.set(0, panelH * (i / 5), 0.04);
                    group.add(l);
                }
            } else {
                addSlidingPanel(group, w, panelH, ft, glassMat, w * 0.08);
                addSlidingPanel(group, w, panelH, ft, glassMat, -w * 0.15);
            }
            group.add(box(w, 0.04, 0.12, darkMat));
            group.children[group.children.length - 1].position.set(0, 0.02, 0);
            break;

        case 'double_french':
            addFrame();
            [-1, 1].forEach((side) => {
                const pw = w / 2 - ft * 1.1;
                const p = box(pw, panelH, 0.04, panelMat);
                p.position.set(side * (pw / 2 + ft * 0.5), panelH / 2 + 0.02, 0.03);
                p.rotation.y = side * 0.45;
                group.add(p);
                group.add(box(pw * 0.7, panelH * 0.55, 0.02, glassMat));
                group.children[group.children.length - 1].position.set(side * (pw / 2 + ft * 0.5), panelH * 0.55, 0.05);
            });
            break;

        case 'pivot_modern':
            addFrame();
            const pivot = box(w - ft * 2, panelH, 0.05, mat(0x374151, { metalness: 0.3 }));
            pivot.position.set(0, panelH / 2 + 0.02, 0.03);
            pivot.rotation.y = 0.6;
            group.add(pivot);
            group.add(cyl(0.04, 0.04, panelH * 0.8, 8, handleMat));
            group.children[group.children.length - 1].position.set(-w / 2 + ft + 0.05, panelH / 2, 0.06);
            break;

        case 'arched':
            addFrame();
            const ap = box(w - ft * 2, panelH * 0.85, 0.05, panelMat);
            ap.position.set(0, panelH * 0.42, 0.03);
            group.add(ap);
            const arch = new THREE.Mesh(new THREE.SphereGeometry((w - ft * 2) / 2, 16, 8, 0, Math.PI), panelMat);
            arch.position.set(0, panelH * 0.85, 0.03);
            arch.scale.set(1, 0.5, 0.08);
            group.add(arch);
            break;

        case 'interior': {
            const thinFrame = box(w, h, 0.06, mat(0xffffff));
            thinFrame.position.set(0, h / 2, 0);
            group.add(thinFrame);
            addHingedPanel(group, w, panelH, 0.04, mat(0xf5f5f4), null, 1);
            break;
        }

        case 'swing_classic':
            addFrame();
            addHingedPanel(group, w, panelH, ft, panelMat, handleMat, 1);
            for (let i = 0; i < 3; i++) {
                const groove = box(w - ft * 2 - 0.1, 0.02, 0.06, mat(0x5c4033));
                groove.position.set(0, panelH * (0.3 + i * 0.22), 0.06);
                group.add(groove);
            }
            break;

        default: // swing_modern
            addFrame();
            addHingedPanel(group, w, panelH, ft, panelMat, handleMat, 1);
    }

    const { x, z, angle } = wallTransform(wall, door.position ?? 0.5, floorY);
    group.position.set(x, floorY, z);
    group.rotation.y = -angle;
    group.translateZ(0.02);
    group.userData = { type: 'door', id: door.id };
    return group;
}

/** Multiple window designs */
export function buildWindowGroup(win, wall, floorY, selected = false) {
    const group = new THREE.Group();
    const w = win.width || 1.2;
    const h = win.height || 1.2;
    const sill = win.sill ?? 0.9;
    const style = win.style || win.type || 'standard';
    const ft = 0.05;
    const frameColor = win.frame_color ? hexColor(win.frame_color) : 0xffffff;
    const frameMat = mat(frameColor, { roughness: 0.35 });
    const glassMat = mat(selected ? 0x7dd3fc : 0xa5d8fa, {
        transparent: true, opacity: 0.42, metalness: 0.55, roughness: 0.04,
        emissive: selected ? 0x0ea5e9 : 0x1e3a5f, emissiveIntensity: selected ? 0.2 : 0.06,
    });

    const addStandardFrame = () => {
        [[-w / 2 + ft / 2, h / 2, ft, h], [w / 2 - ft / 2, h / 2, ft, h], [0, h - ft / 2, w, ft], [0, ft / 2, w, ft]].forEach(([x, y, bw, bh]) => {
            const m = box(bw, bh, 0.08, frameMat);
            m.position.set(x, y + sill, 0);
            group.add(m);
        });
    };

    switch (style) {
        case 'bay':
            addStandardFrame();
            [-1, 0, 1].forEach((i) => {
                const g = box(w / 3 - 0.02, h - ft, 0.02, glassMat);
                g.position.set(i * (w / 3), sill + h / 2, i * 0.08);
                g.rotation.y = i * 0.25;
                group.add(g);
            });
            break;
        case 'sliding':
            addStandardFrame();
            group.add(box(w * 0.45, h - ft * 2, 0.02, glassMat));
            group.children[group.children.length - 1].position.set(-w * 0.12, sill + h / 2, 0.02);
            group.add(box(w * 0.45, h - ft * 2, 0.02, glassMat));
            group.children[group.children.length - 1].position.set(w * 0.12, sill + h / 2, 0.04);
            break;
        case 'floor_ceiling':
            group.add(box(ft, h, 0.08, frameMat));
            group.children[0].position.set(-w / 2 + ft / 2, sill + h / 2, 0);
            group.add(box(ft, h, 0.08, frameMat));
            group.children[1].position.set(w / 2 - ft / 2, sill + h / 2, 0);
            group.add(box(w, h, 0.02, glassMat));
            group.children[2].position.set(0, sill + h / 2, 0);
            break;
        case 'arched':
            addStandardFrame();
            group.add(box(w - ft * 2, h * 0.7, 0.02, glassMat));
            group.children[group.children.length - 1].position.set(0, sill + h * 0.35, 0);
            const warch = new THREE.Mesh(new THREE.SphereGeometry((w - ft * 2) / 2, 16, 8, 0, Math.PI), glassMat);
            warch.position.set(0, sill + h * 0.7, 0);
            warch.scale.set(1, 0.45, 0.05);
            group.add(warch);
            break;
        case 'wide':
            addStandardFrame();
            const wg = box(w - ft * 2, h - ft * 2, 0.02, glassMat);
            wg.position.set(0, sill + h / 2, 0);
            group.add(wg);
            break;
        default:
            addStandardFrame();
            group.add(box(w - ft * 2, h - ft * 2, 0.02, glassMat));
            group.children[group.children.length - 1].position.set(0, sill + h / 2, 0);
            group.add(box(0.03, h - ft * 2, 0.03, frameMat));
            group.children[group.children.length - 1].position.set(0, sill + h / 2, 0.02);
            group.add(box(w - ft * 2, 0.03, 0.03, frameMat));
            group.children[group.children.length - 1].position.set(0, sill + h / 2, 0.02);
    }

    const sillLed = box(w + 0.04, 0.04, 0.1, mat(0xe7e5e4));
    sillLed.position.set(0, sill - 0.02, 0.02);
    group.add(sillLed);

    const { x, z, angle } = wallTransform(wall, win.position ?? 0.5, floorY);
    group.position.set(x, floorY, z);
    group.rotation.y = -angle;
    group.userData = { type: 'window', id: win.id };
    return group;
}

/** Realistic smart-home device meshes for Walk / 360° simulation */
export function buildSmartDeviceGroup(device, floorY, catalog, selected = false, immersive = true) {
    const spec = catalog[device.type];
    if (!spec) return null;

    const group = new THREE.Group();
    const mount = device.mount || spec.mount || 'floor';
    const on = device.on !== false;

    const white = mat(0xf8fafc, { roughness: 0.35, metalness: 0.05 });
    const whiteMatte = mat(0xe2e8f0, { roughness: 0.55 });
    const dark = mat(0x1e293b, { roughness: 0.4, metalness: 0.15 });
    const metal = mat(0xc0c0c0, { roughness: 0.25, metalness: 0.85 });
    const glass = mat(0x111827, { roughness: 0.05, metalness: 0.6, transparent: true, opacity: 0.85 });
    const plastic = mat(0xf1f5f9, { roughness: 0.45 });
    const ledGreen = mat(0x22c55e, { emissive: 0x16a34a, emissiveIntensity: on ? 1.2 : 0 });
    const ledRed = mat(0xef4444, { emissive: 0xdc2626, emissiveIntensity: on ? 0.9 : 0 });
    const ledBlue = mat(0x3b82f6, { emissive: 0x2563eb, emissiveIntensity: on ? 0.8 : 0 });
    const selGlow = selected ? 0.15 : 0;

    const screenTex = (() => {
        const c = document.createElement('canvas');
        c.width = 256;
        c.height = 384;
        const ctx = c.getContext('2d');
        const g = ctx.createLinearGradient(0, 0, 0, 384);
        g.addColorStop(0, '#0f172a');
        g.addColorStop(1, '#1e3a5f');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, 256, 384);
        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        ctx.font = 'bold 28px system-ui,sans-serif';
        ctx.fillText('Smart Home', 24, 50);
        ctx.fillStyle = 'rgba(96,165,250,0.6)';
        ctx.fillRect(24, 80, 208, 60);
        ctx.fillRect(24, 160, 98, 60);
        ctx.fillRect(134, 160, 98, 60);
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.font = '18px system-ui,sans-serif';
        ctx.fillText('Living · 22°C', 36, 118);
        return new THREE.CanvasTexture(c);
    })();

    switch (device.type) {
        case 'smart_light': {
            // Recessed ceiling downlight (modern LED spot)
            const trim = cyl(0.11, 0.11, 0.015, 24, white);
            trim.position.y = -0.008;
            group.add(trim);
            const housing = cyl(0.085, 0.07, 0.08, 16, mat(0xcbd5e1, { metalness: 0.4, roughness: 0.35 }));
            housing.position.y = -0.05;
            group.add(housing);
            const reflector = cyl(0.07, 0.05, 0.02, 16, mat(0xe2e8f0, { metalness: 0.9, roughness: 0.15 }));
            reflector.position.y = -0.09;
            group.add(reflector);
            const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.035, 16, 16), mat(0xfffbeb, {
                emissive: on ? 0xfff7ed : 0x44403c,
                emissiveIntensity: on ? 1.5 + selGlow : 0.1,
                roughness: 0.2,
            }));
            bulb.position.y = -0.1;
            group.add(bulb);
            if (on) {
                const light = new THREE.PointLight(0xfff1e0, immersive ? 1.2 : 0.6, 8, 2);
                light.position.y = -0.12;
                light.castShadow = immersive;
                group.add(light);
            }
            group.rotation.x = Math.PI;
            break;
        }

        case 'camera': {
            // Dome security camera on ceiling
            const base = cyl(0.05, 0.05, 0.02, 16, whiteMatte);
            base.position.y = -0.01;
            group.add(base);
            const body = new THREE.Mesh(new THREE.SphereGeometry(0.065, 20, 16, 0, Math.PI * 2, 0, Math.PI * 0.55), white);
            body.position.y = -0.05;
            group.add(body);
            const dome = new THREE.Mesh(new THREE.SphereGeometry(0.045, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.5), glass);
            dome.position.set(0, -0.06, 0.02);
            dome.rotation.x = -0.3;
            group.add(dome);
            const lens = cyl(0.018, 0.018, 0.01, 12, mat(0x0f172a, { metalness: 0.8 }));
            lens.rotation.x = Math.PI / 2;
            lens.position.set(0, -0.055, 0.055);
            group.add(lens);
            for (let i = 0; i < 6; i++) {
                const a = (i / 6) * Math.PI * 2;
                const ir = cyl(0.004, 0.004, 0.005, 6, mat(0x1e1b4b, { emissive: on ? 0x312e81 : 0, emissiveIntensity: 0.5 }));
                ir.position.set(Math.cos(a) * 0.04, -0.04, Math.sin(a) * 0.04 + 0.02);
                group.add(ir);
            }
            const statusLed = cyl(0.004, 0.004, 0.003, 8, ledGreen);
            statusLed.position.set(0.04, -0.02, 0);
            group.add(statusLed);
            group.rotation.x = Math.PI;
            break;
        }

        case 'wifi_ap':
        case 'access_point': {
            // Ceiling-mounted disc access point
            const plate = cyl(0.14, 0.14, 0.008, 32, white);
            plate.position.y = -0.004;
            group.add(plate);
            const disc = cyl(0.12, 0.12, 0.025, 32, plastic);
            disc.position.y = -0.02;
            group.add(disc);
            const ring = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.004, 8, 32), whiteMatte);
            ring.rotation.x = Math.PI / 2;
            ring.position.y = -0.035;
            group.add(ring);
            const led = cyl(0.006, 0.006, 0.004, 8, ledBlue);
            led.position.set(0.05, -0.034, 0);
            group.add(led);
            group.rotation.x = Math.PI;
            break;
        }

        case 'router':
        case 'wifi_router': {
            // Modern Wi-Fi router on floor/shelf
            const body = box(0.22, 0.04, 0.16, mat(0xffffff, { roughness: 0.3 }));
            body.position.y = 0.02;
            group.add(body);
            const stripe = box(0.2, 0.005, 0.14, mat(0x0f172a, { roughness: 0.5 }));
            stripe.position.set(0, 0.042, 0);
            group.add(stripe);
            for (let i = 0; i < 4; i++) {
                const ant = cyl(0.004, 0.003, 0.14, 6, mat(0x1e293b));
                ant.position.set(-0.07 + i * 0.045, 0.11, -0.02);
                group.add(ant);
                const tip = cyl(0.006, 0.004, 0.015, 6, mat(0x1e293b));
                tip.position.set(-0.07 + i * 0.045, 0.19, -0.02);
                group.add(tip);
            }
            const pwr = cyl(0.003, 0.003, 0.004, 6, ledGreen);
            pwr.position.set(0.09, 0.038, 0.06);
            group.add(pwr);
            break;
        }

        case 'ceiling_speaker': {
            // In-ceiling speaker with grille
            const flange = cyl(0.145, 0.145, 0.012, 32, white);
            flange.position.y = -0.006;
            group.add(flange);
            const grille = cyl(0.125, 0.125, 0.008, 32, mat(0xd4d4d8, { roughness: 0.7 }));
            grille.position.y = -0.018;
            group.add(grille);
            for (let r = 0.03; r <= 0.1; r += 0.025) {
                const ring = new THREE.Mesh(new THREE.TorusGeometry(r, 0.0015, 4, 32), mat(0xa1a1aa));
                ring.rotation.x = Math.PI / 2;
                ring.position.y = -0.022;
                group.add(ring);
            }
            const cone = cyl(0.035, 0.02, 0.025, 12, mat(0x52525b));
            cone.position.y = -0.03;
            group.add(cone);
            group.rotation.x = Math.PI;
            break;
        }

        case 'speakers': {
            const cabinet = box(0.18, 0.32, 0.14, mat(0x1e293b, { roughness: 0.55 }));
            group.add(cabinet);
            const woofer = cyl(0.055, 0.055, 0.02, 16, mat(0x0f172a));
            woofer.position.set(0, -0.04, 0.075);
            group.add(woofer);
            const tweeter = cyl(0.02, 0.02, 0.015, 12, mat(0x334155));
            tweeter.position.set(0, 0.1, 0.075);
            group.add(tweeter);
            const grill = box(0.16, 0.3, 0.005, mat(0x374151, { roughness: 0.8 }));
            grill.position.set(0, 0, 0.072);
            group.add(grill);
            break;
        }

        case 'switch':
        case 'smart_switch':
        case 'dimmer_switch':
        case 'relay': {
            // Glass touch wall switch panel
            const backPlate = box(0.08, 0.12, 0.012, mat(0xf1f5f9, { metalness: 0.1 }));
            backPlate.position.set(0, 0, -0.006);
            group.add(backPlate);
            const panel = box(0.076, 0.116, 0.008, mat(0x0f172a, { roughness: 0.15, metalness: 0.2 }));
            group.add(panel);
            const glassFace = box(0.074, 0.114, 0.003, mat(0xffffff, { transparent: true, opacity: 0.12, roughness: 0.05, metalness: 0.1 }));
            glassFace.position.z = 0.005;
            group.add(glassFace);
            for (let i = 0; i < 3; i++) {
                const btn = box(0.055, 0.028, 0.002, mat(0x334155, { emissive: on && i === 0 ? 0x475569 : 0, emissiveIntensity: 0.3 }));
                btn.position.set(0, 0.038 - i * 0.038, 0.006);
                group.add(btn);
            }
            break;
        }

        case 'control_screen':
        case 'main_screen': {
            const scale = device.type === 'main_screen' ? 2.2 : 1;
            const bw = 0.28 * scale;
            const bh = 0.42 * scale;
            const sw = 0.24 * scale;
            const sh = 0.36 * scale;
            const back = box(bw, bh, 0.018, dark);
            back.position.set(0, 0, -0.009);
            group.add(back);
            const bezel = box(bw - 0.01, bh - 0.01, 0.012, mat(0x27272a, { metalness: 0.3, roughness: 0.35 }));
            group.add(bezel);
            const screen = box(sw, sh, 0.004, new THREE.MeshStandardMaterial({
                map: screenTex,
                emissive: on ? 0x1e40af : 0x0a0a0a,
                emissiveMap: screenTex,
                emissiveIntensity: on ? 0.6 + selGlow : 0.05,
                roughness: 0.1,
                metalness: 0,
            }));
            screen.position.z = 0.008;
            group.add(screen);
            const cam = cyl(0.004, 0.004, 0.003, 8, mat(0x18181b));
            cam.position.set(0, bh / 2 - 0.04, 0.012);
            group.add(cam);
            if (on && immersive) {
                const glow = new THREE.PointLight(0x93c5fd, 0.15, 2);
                glow.position.z = 0.05;
                group.add(glow);
            }
            break;
        }

        case 'temp_sensor':
        case 'thermostat': {
            // Minimalist wall thermostat
            const plate = box(0.09, 0.13, 0.015, white);
            group.add(plate);
            const display = box(0.07, 0.05, 0.004, mat(0x0f172a, { emissive: on ? 0x1e3a5f : 0, emissiveIntensity: 0.5 }));
            display.position.set(0, 0.02, 0.009);
            group.add(display);
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = 128;
            tempCanvas.height = 64;
            const tctx = tempCanvas.getContext('2d');
            tctx.fillStyle = '#38bdf8';
            tctx.font = 'bold 36px system-ui';
            tctx.fillText('22°', 20, 48);
            const tempTex = new THREE.CanvasTexture(tempCanvas);
            const tempScreen = box(0.068, 0.048, 0.002, new THREE.MeshStandardMaterial({
                map: tempTex, emissiveMap: tempTex, emissive: 0xffffff, emissiveIntensity: on ? 0.4 : 0,
            }));
            tempScreen.position.set(0, 0.02, 0.011);
            group.add(tempScreen);
            const dial = cyl(0.025, 0.025, 0.008, 16, metal);
            dial.rotation.x = Math.PI / 2;
            dial.position.set(0, -0.035, 0.01);
            group.add(dial);
            break;
        }

        case 'motion_sensor': {
            // PIR motion sensor
            const base = box(0.07, 0.1, 0.025, white);
            group.add(base);
            const lensHousing = cyl(0.028, 0.028, 0.015, 16, whiteMatte);
            lensHousing.rotation.x = Math.PI / 2;
            lensHousing.position.set(0, 0, 0.018);
            group.add(lensHousing);
            const pirLens = new THREE.Mesh(new THREE.SphereGeometry(0.022, 12, 8), mat(0xfef3c7, {
                transparent: true, opacity: 0.85, roughness: 0.1,
            }));
            pirLens.position.set(0, 0, 0.028);
            group.add(pirLens);
            const led = cyl(0.004, 0.004, 0.003, 6, ledRed);
            led.position.set(0.025, 0.03, 0.013);
            group.add(led);
            break;
        }

        case 'door_sensor': {
            // Contact sensor: sensor + magnet on frame
            const sensor = box(0.025, 0.07, 0.018, white);
            sensor.position.set(-0.02, 0, 0);
            group.add(sensor);
            const magnet = box(0.015, 0.06, 0.012, mat(0x64748b, { metalness: 0.5 }));
            magnet.position.set(0.025, 0, 0);
            group.add(magnet);
            const led = cyl(0.003, 0.003, 0.002, 6, ledGreen);
            led.position.set(-0.02, 0.025, 0.01);
            group.add(led);
            break;
        }

        case 'alarm_siren': {
            // Wall siren/strobe
            const housing = box(0.12, 0.12, 0.04, white);
            group.add(housing);
            const grill = box(0.1, 0.1, 0.005, mat(0xd4d4d8, { roughness: 0.8 }));
            for (let i = -0.04; i <= 0.04; i += 0.02) {
                const slot = box(0.08, 0.003, 0.006, mat(0xa1a1aa));
                slot.position.set(0, i, 0.022);
                group.add(slot);
            }
            const strobe = cyl(0.025, 0.025, 0.01, 12, mat(0xffffff, {
                emissive: on ? 0xef4444 : 0, emissiveIntensity: on ? 1.0 : 0, transparent: true, opacity: 0.9,
            }));
            strobe.rotation.x = Math.PI / 2;
            strobe.position.set(0, 0, 0.025);
            group.add(strobe);
            break;
        }

        case 'ac_split': {
            const unit = box(0.85, 0.28, 0.22, white);
            group.add(unit);
            const vent = box(0.75, 0.04, 0.18, mat(0xe2e8f0, { metalness: 0.3 }));
            vent.position.set(0, -0.05, 0.02);
            group.add(vent);
            for (let i = 0; i < 5; i++) {
                const fin = box(0.7, 0.008, 0.015, mat(0xcbd5e1));
                fin.position.set(0, -0.02, -0.06 + i * 0.03);
                group.add(fin);
            }
            const display = box(0.12, 0.04, 0.01, mat(0x0f172a, { emissive: on ? 0x38bdf8 : 0, emissiveIntensity: 0.6 }));
            display.position.set(0.3, 0.05, 0.12);
            group.add(display);
            const led = cyl(0.005, 0.005, 0.004, 6, on ? ledGreen : mat(0x64748b));
            led.position.set(-0.35, 0.1, 0.12);
            group.add(led);
            break;
        }

        case 'ac_cassette': {
            group.rotation.x = Math.PI;
            const cassette = box(0.6, 0.08, 0.6, white);
            cassette.position.y = -0.04;
            group.add(cassette);
            const grille = box(0.5, 0.01, 0.5, mat(0xd4d4d8));
            grille.position.y = -0.085;
            group.add(grille);
            for (let i = -0.2; i <= 0.2; i += 0.1) {
                const sl = box(0.45, 0.005, 0.008, mat(0xa1a1aa));
                sl.position.set(0, -0.088, i);
                group.add(sl);
            }
            if (on) {
                const cool = new THREE.PointLight(0xbae6fd, 0.3, 4);
                cool.position.y = -0.15;
                group.add(cool);
            }
            break;
        }

        case 'smart_tv_50':
        case 'soundbar': {
            const tw = device.type === 'soundbar' ? 1.1 : 1.11;
            const th = device.type === 'soundbar' ? 0.07 : 0.62;
            const bezel = box(tw + 0.03, th + 0.03, 0.03, mat(0x18181b, { metalness: 0.3 }));
            group.add(bezel);
            const sc = document.createElement('canvas');
            sc.width = 512;
            sc.height = device.type === 'soundbar' ? 64 : 288;
            const sx = sc.getContext('2d');
            sx.fillStyle = device.type === 'soundbar' ? '#1e293b' : '#0f172a';
            sx.fillRect(0, 0, sc.width, sc.height);
            if (device.type !== 'soundbar') {
                sx.fillStyle = '#1e40af';
                sx.fillRect(10, 10, 492, 268);
                sx.fillStyle = '#fff';
                sx.font = 'bold 28px system-ui';
                sx.fillText('Smart TV 50" · Home Assistant', 20, 40);
            }
            const st = new THREE.CanvasTexture(sc);
            const screen = box(tw, th, 0.012, new THREE.MeshStandardMaterial({
                map: st, emissiveMap: st, emissive: 0xffffff,
                emissiveIntensity: on ? 0.5 : 0.05, roughness: 0.05,
            }));
            screen.position.z = 0.018;
            group.add(screen);
            break;
        }

        case 'smart_bulb': {
            const cord = cyl(0.003, 0.003, 0.15, 6, mat(0x374151));
            cord.position.y = 0.075;
            group.add(cord);
            const bulbMesh = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 16), mat(0xfffbeb, {
                emissive: on ? 0xfbbf24 : 0x44403c, emissiveIntensity: on ? 1.4 : 0.08,
            }));
            bulbMesh.position.y = -0.02;
            group.add(bulbMesh);
            if (on) {
                const pl = new THREE.PointLight(0xfff1e0, immersive ? 1.0 : 0.5, 7, 2);
                pl.position.y = -0.04;
                group.add(pl);
            }
            group.rotation.x = Math.PI;
            break;
        }

        case 'light_strip': {
            const strip = box(1.2, 0.025, 0.03, mat(0x1e293b));
            strip.position.y = 0;
            group.add(strip);
            const glow = box(1.15, 0.012, 0.02, mat(0xffffff, {
                emissive: on ? 0xa855f7 : 0x333333, emissiveIntensity: on ? 1.2 : 0,
            }));
            glow.position.set(0, 0.01, 0.01);
            group.add(glow);
            if (on) {
                const pl = new THREE.PointLight(0xc084fc, 0.4, 5);
                pl.position.set(0, -0.1, 0.2);
                group.add(pl);
            }
            break;
        }

        case 'ceiling_panel': {
            group.rotation.x = Math.PI;
            const panel = box(0.55, 0.04, 0.55, white);
            panel.position.y = -0.02;
            group.add(panel);
            const lightFace = box(0.48, 0.01, 0.48, mat(0xffffff, {
                emissive: on ? 0xfff7ed : 0x333333, emissiveIntensity: on ? 1.0 : 0,
            }));
            lightFace.position.y = -0.045;
            group.add(lightFace);
            if (on) {
                const pl = new THREE.PointLight(0xfff1e0, 1.4, 10, 2);
                pl.position.y = -0.2;
                group.add(pl);
            }
            break;
        }

        case 'humidifier': {
            const body = cyl(0.12, 0.14, 0.32, 16, white);
            body.position.y = 0.16;
            group.add(body);
            const mist = cyl(0.005, 0.02, 0.06, 8, mat(0xbae6fd, { transparent: true, opacity: on ? 0.5 : 0.1 }));
            mist.position.y = 0.35;
            group.add(mist);
            const led = cyl(0.006, 0.006, 0.004, 8, on ? ledBlue : mat(0x64748b));
            led.position.set(0.08, 0.25, 0.08);
            group.add(led);
            break;
        }

        case 'fan': {
            const base = cyl(0.12, 0.14, 0.03, 16, dark);
            base.position.y = 0.015;
            group.add(base);
            const pole = cyl(0.03, 0.03, 0.85, 10, metal);
            pole.position.y = 0.45;
            group.add(pole);
            const ring = cyl(0.18, 0.18, 0.03, 20, white);
            ring.position.y = 0.9;
            group.add(ring);
            break;
        }

        case 'heater': {
            const hbody = box(0.28, 0.48, 0.12, white);
            hbody.position.y = 0.24;
            group.add(hbody);
            for (let i = 0; i < 6; i++) {
                const rib = box(0.22, 0.008, 0.08, mat(0xcbd5e1, { emissive: on ? 0xf97316 : 0, emissiveIntensity: on ? 0.5 : 0 }));
                rib.position.set(0, 0.1 + i * 0.06, 0.02);
                group.add(rib);
            }
            break;
        }

        case 'smart_plug': {
            const plug = box(0.08, 0.12, 0.05, white);
            plug.position.y = 0.06;
            group.add(plug);
            const prongs = box(0.04, 0.015, 0.02, metal);
            prongs.position.set(0, 0.125, 0.02);
            group.add(prongs);
            const led = cyl(0.004, 0.004, 0.003, 6, on ? ledGreen : mat(0x64748b));
            led.position.set(0.025, 0.08, 0.026);
            group.add(led);
            break;
        }

        case 'socket': {
            const plate = box(0.08, 0.12, 0.012, whiteMatte);
            group.add(plate);
            const outlet = box(0.06, 0.08, 0.008, mat(0xf8fafc, { roughness: 0.4 }));
            outlet.position.z = 0.008;
            group.add(outlet);
            const left = box(0.012, 0.035, 0.012, metal);
            left.position.set(-0.015, 0, 0.014);
            group.add(left);
            const right = left.clone();
            right.position.x = 0.015;
            group.add(right);
            const led = cyl(0.003, 0.003, 0.003, 6, on ? ledBlue : mat(0x64748b));
            led.position.set(0, -0.04, 0.012);
            group.add(led);
            break;
        }

        case 'ir_remote': {
            const hub = box(0.07, 0.07, 0.03, mat(0x18181b, { roughness: 0.35 }));
            group.add(hub);
            const irLens = cyl(0.025, 0.025, 0.008, 12, glass);
            irLens.position.set(0, 0, 0.018);
            group.add(irLens);
            const led = cyl(0.004, 0.004, 0.003, 6, on ? ledRed : mat(0x64748b));
            led.position.set(0.025, 0.025, 0.016);
            group.add(led);
            break;
        }

        case 'micro_sensor': {
            const body = box(0.09, 0.09, 0.025, white);
            group.add(body);
            const mic = cyl(0.025, 0.025, 0.012, 12, mat(0x334155, { metalness: 0.3 }));
            mic.position.set(0, 0, 0.018);
            group.add(mic);
            const led = cyl(0.004, 0.004, 0.003, 6, on ? ledBlue : mat(0x64748b));
            led.position.set(0.03, 0.03, 0.014);
            group.add(led);
            break;
        }

        case 'vibration_sensor': {
            const body = box(0.07, 0.07, 0.02, whiteMatte);
            group.add(body);
            const sensor = cyl(0.02, 0.02, 0.008, 10, mat(0x475569));
            sensor.position.set(0, 0, 0.012);
            group.add(sensor);
            const led = cyl(0.003, 0.003, 0.003, 6, on ? ledGreen : mat(0x64748b));
            led.position.set(0.025, 0.025, 0.012);
            group.add(led);
            break;
        }

        case 'intercom': {
            const back = box(0.13, 0.2, 0.025, dark);
            group.add(back);
            const screen = box(0.1, 0.1, 0.006, mat(0x0f172a, { emissive: on ? 0x1e3a5f : 0, emissiveIntensity: 0.45 }));
            screen.position.set(0, 0.03, 0.014);
            group.add(screen);
            const cam = cyl(0.012, 0.012, 0.008, 10, mat(0x18181b));
            cam.position.set(0, 0.08, 0.016);
            group.add(cam);
            for (let i = 0; i < 3; i++) {
                const btn = cyl(0.015, 0.015, 0.004, 10, mat(0x334155, { emissive: on && i === 1 ? 0x475569 : 0, emissiveIntensity: 0.3 }));
                btn.position.set(-0.03 + i * 0.03, -0.06, 0.016);
                group.add(btn);
            }
            break;
        }

        case 'robot_vacuum': {
            const body = cyl(0.17, 0.17, 0.09, 24, mat(0xffffff, { metalness: 0.2 }));
            body.position.y = 0.045;
            group.add(body);
            const bump = cyl(0.04, 0.04, 0.02, 12, dark);
            bump.position.set(0.1, 0.08, 0);
            group.add(bump);
            const led = cyl(0.005, 0.005, 0.003, 6, on ? ledBlue : mat(0x64748b));
            led.position.set(-0.08, 0.085, 0.06);
            group.add(led);
            break;
        }

        case 'smart_lock': {
            const lockBody = box(0.12, 0.22, 0.04, mat(0x18181b, { metalness: 0.5 }));
            group.add(lockBody);
            const knob = cyl(0.04, 0.04, 0.06, 12, metal);
            knob.rotation.z = Math.PI / 2;
            knob.position.set(0.06, 0, 0.03);
            group.add(knob);
            break;
        }

        case 'smoke_detector':
        case 'gas_detector': {
            group.rotation.x = Math.PI;
            const disc = cyl(0.12, 0.12, 0.04, 20, white);
            disc.position.y = -0.02;
            group.add(disc);
            const vent = cyl(0.04, 0.04, 0.015, 12, mat(0xe2e8f0, { roughness: 0.6 }));
            vent.position.y = -0.035;
            group.add(vent);
            const led = cyl(0.006, 0.006, 0.004, 8, on ? (device.type === 'gas_detector' ? ledRed : ledGreen) : mat(0x64748b));
            led.position.set(0.05, -0.03, 0);
            group.add(led);
            break;
        }

        case 'smart_curtain':
        case 'smart_blinds': {
            const motor = box(0.12, 0.08, 0.08, white);
            motor.position.y = 0.04;
            group.add(motor);
            const rod = cyl(0.008, 0.008, 0.8, 6, metal);
            rod.rotation.z = Math.PI / 2;
            rod.position.set(0.4, 0.04, 0);
            group.add(rod);
            break;
        }

        case 'zigbee_hub': {
            const hub = box(0.12, 0.035, 0.12, plastic);
            hub.position.y = 0.018;
            group.add(hub);
            const led = cyl(0.004, 0.004, 0.003, 6, on ? ledGreen : mat(0x64748b));
            led.position.set(0.04, 0.035, 0);
            group.add(led);
            break;
        }

        case 'water_leak': {
            const sensor = box(0.08, 0.025, 0.08, white);
            sensor.position.y = 0.012;
            group.add(sensor);
            const probes = box(0.02, 0.01, 0.04, metal);
            probes.position.set(0, 0.025, 0.02);
            group.add(probes);
            break;
        }

        case 'electrical_panel': {
            // Breaker box on wall
            const boxBody = box(0.38, 0.52, 0.08, mat(0xe5e7eb, { metalness: 0.35, roughness: 0.45 }));
            boxBody.position.y = 0.26;
            group.add(boxBody);
            const door = box(0.36, 0.5, 0.01, mat(0xf8fafc, { metalness: 0.25, roughness: 0.4 }));
            door.position.set(0, 0.26, 0.042);
            group.add(door);
            const handle = box(0.04, 0.12, 0.015, metal);
            handle.position.set(0.14, 0.26, 0.05);
            group.add(handle);
            const label = box(0.15, 0.04, 0.005, mat(0xfbbf24, { emissive: 0xf59e0b, emissiveIntensity: 0.3 }));
            label.position.set(-0.05, 0.48, 0.045);
            group.add(label);
            for (let i = 0; i < 6; i++) {
                const breaker = box(0.04, 0.07, 0.008, mat(0x1e293b));
                breaker.position.set(-0.12 + (i % 3) * 0.12, 0.38 - Math.floor(i / 3) * 0.12, 0.046);
                group.add(breaker);
            }
            break;
        }

        default:
            group.add(box(spec.w, spec.h || 0.15, spec.w, plastic));
            group.children[0].position.y = (spec.h || 0.15) / 2;
    }

    if (selected && !immersive) {
        const ring = new THREE.Mesh(
            new THREE.RingGeometry(0.12, 0.14, 24),
            mat(0x22d3ee, { emissive: 0x0891b2, emissiveIntensity: 0.6, transparent: true, opacity: 0.7, side: THREE.DoubleSide })
        );
        ring.rotation.x = -Math.PI / 2;
        ring.position.y = 0.01;
        group.add(ring);
    }

    const [px, pz] = device.position || [0, 0];
    let y = floorY;
    const ceilingH = device.ceiling_height ?? 2.75;
    if (mount === 'ceiling') y = floorY + ceilingH;
    else if (mount === 'wall') y = floorY + (device.height_offset ?? spec.defaultHeight ?? 1.35);
    else if (mount === 'door') y = floorY + 1.0;

    group.position.set(px, y, pz);
    group.rotation.y = device.rotation || 0;

    group.userData = { type: 'smart', id: device.id, smartType: device.type };
    return group;
}

export function buildFurnitureGroup(comp, floorY, catalog, isPreview = false) {
    const spec = catalog[comp.type];
    if (!spec) return null;

    const group = new THREE.Group();
    const w = comp.width || spec.w;
    const d = comp.depth || spec.d;
    const h = comp.height || spec.h;
    const color = comp.color ? hexColor(comp.color) : spec.color;

    const m = (c, opts = {}) => mat(c, { ...opts, transparent: isPreview, opacity: isPreview ? 0.35 : 1 });
    const wood = m(color);
    const dark = m(0x374151);

    switch (comp.type) {
        case 'sofa': {
            group.add(box(w, 0.35, d, wood));
            group.children[0].position.set(0, 0.175, 0);
            const back = box(w, 0.5, 0.15, wood);
            back.position.set(0, 0.45, -d / 2 + 0.075);
            group.add(back, box(0.12, 0.45, d, wood));
            group.children[2].position.set(-w / 2 + 0.06, 0.35, 0);
            group.add(box(w - 0.3, 0.12, d - 0.2, m(0x6b7280)));
            group.children[3].position.set(0, 0.4, 0.05);
            break;
        }
        case 'bed': {
            group.add(box(w, 0.25, d, wood));
            group.children[0].position.set(0, 0.125, 0);
            group.add(box(w - 0.08, 0.2, d - 0.08, m(0xf8fafc)));
            group.children[1].position.set(0, 0.35, 0);
            group.add(box(w, 0.9, 0.08, wood));
            group.children[2].position.set(0, 0.55, -d / 2 + 0.04);
            break;
        }
        case 'lamp': {
            const lampOn = comp.on !== false;
            const base = cyl(0.16, 0.18, 0.025, 20, m(0x1c1917, { metalness: 0.6, roughness: 0.35 }));
            base.position.y = 0.012;
            group.add(base);
            const pole = cyl(0.018, 0.022, h - 0.3, 10, m(0xc0c0c0, { metalness: 0.85, roughness: 0.2 }));
            pole.position.y = (h - 0.3) / 2 + 0.02;
            group.add(pole);
            const shade = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.24, 0.22, 20, 1, true), m(0xfafaf9, {
                emissive: lampOn ? 0xfff7ed : 0x000000, emissiveIntensity: lampOn ? 0.4 : 0, side: THREE.DoubleSide,
            }));
            shade.position.y = h - 0.18;
            group.add(shade);
            const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.05, 12, 12), m(0xfffbeb, {
                emissive: lampOn ? 0xfbbf24 : 0x44403c, emissiveIntensity: lampOn ? 0.8 : 0.05,
            }));
            bulb.position.y = h - 0.2;
            group.add(bulb);
            if (lampOn) {
                const light = new THREE.PointLight(0xffedd5, 0.9, 7, 2);
                light.position.y = h - 0.22;
                light.castShadow = !isPreview;
                group.add(light);
            }
            break;
        }
        case 'tv': {
            // 50" smart TV wall-mounted (~111×62 cm)
            const mountH = 0.9;
            const stand = box(0.12, mountH, 0.08, m(0x27272a, { metalness: 0.4 }));
            stand.position.set(0, mountH / 2, 0.05);
            group.add(stand);
            const arm = box(0.06, 0.05, 0.18, m(0x52525b, { metalness: 0.5 }));
            arm.position.set(0, mountH - 0.03, 0.12);
            group.add(arm);
            const bezel = box(w + 0.03, h + 0.03, 0.03, m(0x18181b, { metalness: 0.3, roughness: 0.4 }));
            bezel.position.set(0, mountH + h / 2 + 0.08, 0);
            group.add(bezel);
            const screenCanvas = document.createElement('canvas');
            screenCanvas.width = 512;
            screenCanvas.height = 288;
            const sctx = screenCanvas.getContext('2d');
            sctx.fillStyle = '#0a0a0a';
            sctx.fillRect(0, 0, 512, 288);
            const sg = sctx.createLinearGradient(0, 0, 512, 288);
            sg.addColorStop(0, '#1e3a5f');
            sg.addColorStop(1, '#0f172a');
            sctx.fillStyle = sg;
            sctx.fillRect(8, 8, 496, 272);
            sctx.fillStyle = 'rgba(255,255,255,0.85)';
            sctx.font = 'bold 32px system-ui,sans-serif';
            sctx.fillText('Smart TV 50"', 24, 48);
            sctx.fillStyle = 'rgba(96,165,250,0.5)';
            sctx.fillRect(24, 70, 464, 190);
            const screenTex = new THREE.CanvasTexture(screenCanvas);
            const screen = box(w, h, 0.015, new THREE.MeshStandardMaterial({
                map: screenTex, emissiveMap: screenTex, emissive: 0xffffff, emissiveIntensity: 0.45,
                roughness: 0.05, metalness: 0,
            }));
            screen.position.set(0, mountH + h / 2 + 0.08, 0.018);
            group.add(screen);
            const tvLight = new THREE.PointLight(0x93c5fd, 0.12, 3);
            tvLight.position.set(0, mountH + h / 2 + 0.08, 0.4);
            group.add(tvLight);
            break;
        }
        case 'toilet': {
            const porcelain = m(0xf8fafc, { roughness: 0.25, metalness: 0.05 });
            const tank = box(0.38, 0.38, 0.18, porcelain);
            tank.position.set(0, 0.55, -d / 2 + 0.12);
            group.add(tank);
            const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.17, 0.32, 20), porcelain);
            bowl.position.set(0, 0.2, 0.05);
            group.add(bowl);
            const seat = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.025, 8, 24), m(0xe5e7eb, { roughness: 0.5 }));
            seat.rotation.x = Math.PI / 2;
            seat.position.set(0, 0.38, 0.05);
            group.add(seat);
            break;
        }
        case 'bathtub': {
            const tub = m(0xf1f5f9, { roughness: 0.2, metalness: 0.08 });
            const outer = box(w, h * 0.85, d, tub);
            outer.position.set(0, h * 0.42, 0);
            group.add(outer);
            const inner = box(w - 0.12, h * 0.55, d - 0.12, m(0xe2e8f0, { roughness: 0.15 }));
            inner.position.set(0, h * 0.5, 0);
            group.add(inner);
            const faucet = box(0.04, 0.25, 0.04, m(0xc0c0c0, { metalness: 0.85, roughness: 0.2 }));
            faucet.position.set(-w / 2 + 0.15, h * 0.75, 0);
            group.add(faucet);
            break;
        }
        case 'sink': {
            const cabinet = box(w, h * 0.65, d, m(0x78716c, { roughness: 0.7 }));
            cabinet.position.set(0, h * 0.32, 0);
            group.add(cabinet);
            const top = box(w + 0.02, 0.04, d + 0.02, m(0xe5e7eb, { roughness: 0.3 }));
            top.position.set(0, h * 0.66, 0);
            group.add(top);
            const basin = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.18, 0.08, 20), m(0xf8fafc, { roughness: 0.2 }));
            basin.position.set(0, h * 0.72, 0);
            group.add(basin);
            const tap = box(0.03, 0.18, 0.03, m(0xb0b0b0, { metalness: 0.9, roughness: 0.15 }));
            tap.position.set(0, h * 0.82, -d / 2 + 0.08);
            group.add(tap);
            break;
        }
        case 'fridge': {
            const body = box(w, h, d, m(0xe5e7eb, { roughness: 0.35, metalness: 0.15 }));
            body.position.set(0, h / 2, 0);
            group.add(body);
            const split = box(w + 0.01, 0.015, d + 0.01, m(0x9ca3af, { metalness: 0.4 }));
            split.position.set(0, h * 0.62, 0);
            group.add(split);
            const handle = box(0.03, 0.35, 0.03, m(0x6b7280, { metalness: 0.7 }));
            handle.position.set(w / 2 - 0.06, h * 0.78, 0);
            group.add(handle);
            const handle2 = handle.clone();
            handle2.position.y = h * 0.35;
            group.add(handle2);
            break;
        }
        case 'oven': {
            const body = box(w, h, d, m(0x374151, { roughness: 0.45, metalness: 0.2 }));
            body.position.set(0, h / 2, 0);
            group.add(body);
            const glass = box(w - 0.08, h * 0.45, 0.02, m(0x1f2937, { roughness: 0.1, metalness: 0.3 }));
            glass.position.set(0, h * 0.38, d / 2 + 0.01);
            group.add(glass);
            const knobs = box(w * 0.5, 0.04, 0.04, m(0x111827, { metalness: 0.5 }));
            knobs.position.set(0, h * 0.82, d / 2 + 0.02);
            group.add(knobs);
            break;
        }
        case 'wardrobe': {
            const body = box(w, h, d, m(color, { roughness: 0.75 }));
            body.position.set(0, h / 2, 0);
            group.add(body);
            const doorGap = 0.02;
            const doorL = box(w / 2 - doorGap, h - 0.08, 0.03, m(0x92400e, { roughness: 0.65 }));
            doorL.position.set(-w / 4, h / 2, d / 2 + 0.015);
            group.add(doorL);
            const doorR = doorL.clone();
            doorR.position.x = w / 4;
            group.add(doorR);
            const handleL = cyl(0.015, 0.015, 0.08, 8, m(0xc0c0c0, { metalness: 0.8 }));
            handleL.rotation.z = Math.PI / 2;
            handleL.position.set(-0.05, h * 0.45, d / 2 + 0.05);
            group.add(handleL);
            break;
        }
        default:
            group.add(box(w, h, d, wood));
            group.children[0].position.y = h / 2;
    }

    const [px, pz] = comp.position || [0, 0];
    group.position.set(px, floorY, pz);
    group.rotation.y = comp.rotation || 0;
    group.userData = { type: 'component', id: comp.id };
    return group;
}

export function buildFloorMesh(polygon, floorY, colorOrMat) {
    if (!polygon?.length || polygon.length < 3) return null;
    const shape = new THREE.Shape();
    shape.moveTo(polygon[0][0], polygon[0][1]);
    for (let i = 1; i < polygon.length; i++) shape.lineTo(polygon[i][0], polygon[i][1]);
    shape.closePath();
    const material = colorOrMat.isMaterial
        ? colorOrMat
        : mat(typeof colorOrMat === 'number' ? colorOrMat : hexColor(colorOrMat), { roughness: 0.88 });
    const mesh = new THREE.Mesh(new THREE.ShapeGeometry(shape), material);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.y = floorY + 0.02;
    mesh.receiveShadow = true;
    mesh.userData.isFloor = true;
    return mesh;
}

export function buildCeiling(polygon, floorY, height, matCeil) {
    if (!polygon?.length || polygon.length < 3) return null;
    const shape = new THREE.Shape();
    shape.moveTo(polygon[0][0], polygon[0][1]);
    for (let i = 1; i < polygon.length; i++) shape.lineTo(polygon[i][0], polygon[i][1]);
    shape.closePath();
    const mesh = new THREE.Mesh(new THREE.ShapeGeometry(shape), matCeil);
    mesh.rotation.x = Math.PI / 2;
    mesh.position.y = floorY + height - 0.02;
    mesh.userData.isCeiling = true;
    return mesh;
}

/** Room name label (SmartThings style) */
export function buildRoomLabel(room, floorY) {
    if (!room.polygon?.length) return null;
    const cx = room.polygon.reduce((s, p) => s + p[0], 0) / room.polygon.length;
    const cz = room.polygon.reduce((s, p) => s + p[1], 0) / room.polygon.length;

    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(15,23,42,0.75)';
    ctx.roundRect(8, 8, 240, 48, 12);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 22px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(room.name || 'Room', 128, 40);

    const tex = new THREE.CanvasTexture(canvas);
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true }));
    sprite.scale.set(2.5, 0.65, 1);
    sprite.position.set(cx, floorY + 0.15, cz);
    sprite.userData.isLabel = true;
    return sprite;
}

/** Check if point can pass through a wall via a door opening */
export function isInDoorway(px, pz, wall, doors) {
    const L = wallLen(wall);
    if (L < 0.1) return false;
    const dx = wall.to[0] - wall.from[0];
    const dz = wall.to[1] - wall.from[1];
    const len2 = dx * dx + dz * dz;
    const t = clamp(((px - wall.from[0]) * dx + (pz - wall.from[1]) * dz) / len2, 0, 1);
    const along = t * L;
    const wx = wall.from[0] + dx * t;
    const wz = wall.from[1] + dz * t;
    const perpDist = Math.hypot(px - wx, pz - wz);

    for (const door of doors.filter((d) => d.wall_id === wall.id)) {
        const half = (door.width || 1) / 2 + 0.35;
        const center = (door.position ?? 0.5) * L;
        if (along >= center - half && along <= center + half && perpDist < (door.width || 1) / 2 + 0.55) {
            return true;
        }
    }
    return false;
}

/** Apply door open amount 0=closed 1=fully open to a door mesh group */
export function applyDoorOpenAmount(doorGroup, amount) {
    doorGroup.traverse((child) => {
        if (!child.userData?.doorPanel) return;
        if (child.userData.panelKind === 'swing') {
            child.rotation.y = -amount * (Math.PI / 2.2) * (child.userData.openDir || 1);
        } else if (child.userData.panelKind === 'slide') {
            child.position.x = (child.userData.baseX || 0) + amount * (child.userData.slideDist || 0.5);
        }
    });
}
