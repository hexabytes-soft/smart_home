/**
 * Top-down 2D floor plan canvas renderer (pan, zoom, rooms, walls, openings, furniture).
 */

import { SMART_CATALOG } from './catalog.js';

function hexToCss(color) {
    if (typeof color === 'number') {
        return `#${(color >>> 0).toString(16).padStart(6, '0')}`;
    }
    if (typeof color === 'string' && color.startsWith('#')) return color;
    return '#e5e7eb';
}

function distToSegment(px, py, x1, z1, x2, z2) {
    const dx = x2 - x1;
    const dz = z2 - z1;
    const len2 = dx * dx + dz * dz;
    if (len2 < 0.0001) return Math.hypot(px - x1, py - z1);
    let t = ((px - x1) * dx + (py - z1) * dz) / len2;
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(px - (x1 + t * dx), py - (z1 + t * dz));
}

export class Plan2DRenderer {
    constructor(container) {
        this.container = container;
        this.canvas = document.createElement('canvas');
        this.canvas.className = 'plan2d-canvas';
        this.canvas.setAttribute('aria-label', '2D floor plan');
        container.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.zoom = 1;
        this.panX = 0;
        this.panY = 0;
        this.padding = 48;
        this.isPanning = false;
        this.lastPan = { x: 0, y: 0 };
        this.bounds = { w: 20, d: 15 };
        this.visible = false;
        this._underlayCache = {};
        this._underlayLoading = {};
        this.hide();
    }

    resolveUnderlayUrl(url) {
        if (!url) return '';
        if (
            url.startsWith('http://')
            || url.startsWith('https://')
            || url.startsWith('data:')
            || url.startsWith('blob:')
        ) {
            return url;
        }
        if (url.startsWith('//')) {
            return `${window.location.protocol}${url}`;
        }
        if (url.startsWith('/')) {
            return `${window.location.origin}${url}`;
        }
        return url;
    }

    isUnderlayReady(img) {
        return Boolean(img && img.naturalWidth > 0 && img.complete);
    }

    loadUnderlay(url, onReady) {
        if (!url) return;
        const resolved = this.resolveUnderlayUrl(url);
        const cacheKey = resolved || url;
        const cached = this._underlayCache[cacheKey] || this._underlayCache[url];
        if (this.isUnderlayReady(cached)) {
            this._underlayCache[cacheKey] = cached;
            this._underlayCache[url] = cached;
            return;
        }
        if (this._underlayLoading[cacheKey]) return;

        this._underlayLoading[cacheKey] = true;
        const img = cached && cached.tagName === 'IMG' ? cached : new Image();
        // Same-origin /storage images often lack CORS headers; avoid crossOrigin so drawImage works.
        img.onload = () => {
            this._underlayCache[cacheKey] = img;
            this._underlayCache[url] = img;
            delete this._underlayLoading[cacheKey];
            onReady?.();
        };
        img.onerror = () => {
            delete this._underlayLoading[cacheKey];
            // Retry once with origin-absolute URL if a relative path failed.
            if (!img.dataset.retried) {
                img.dataset.retried = '1';
                const retryUrl = this.resolveUnderlayUrl(url);
                if (retryUrl && retryUrl !== img.src) {
                    this._underlayLoading[cacheKey] = true;
                    img.src = retryUrl;
                }
            }
        };

        this._underlayCache[cacheKey] = img;
        this._underlayCache[url] = img;
        // Force reload if a previous attempt failed mid-flight.
        if (img.src !== resolved) {
            img.src = resolved;
        } else if (this.isUnderlayReady(img)) {
            delete this._underlayLoading[cacheKey];
            onReady?.();
        }
    }

    drawUnderlay(ctx, underlay, projectWidth, projectDepth) {
        if (!underlay?.url) return;
        const resolved = this.resolveUnderlayUrl(underlay.url);
        const img = this._underlayCache[resolved] || this._underlayCache[underlay.url];
        if (!this.isUnderlayReady(img)) return;

        const bounds = underlay.bounds || [0, 0, projectWidth, projectDepth];
        const [x0, z0, x1, z1] = bounds;
        const [sx0, sy0] = this.worldToScreen(x0, z0);
        const [sx1, sy1] = this.worldToScreen(x1, z1);
        const w = sx1 - sx0;
        const h = sy1 - sy0;
        if (Math.abs(w) < 1 || Math.abs(h) < 1) return;

        ctx.save();
        ctx.globalAlpha = underlay.opacity ?? 0.55;
        // Use abs sizes in case world Y orientation flips screen height.
        ctx.drawImage(img, Math.min(sx0, sx1), Math.min(sy0, sy1), Math.abs(w), Math.abs(h));
        ctx.restore();
    }

    show() {
        this.visible = true;
        this.canvas.classList.remove('hidden');
    }

    hide() {
        this.visible = false;
        this.canvas.classList.add('hidden');
    }

    resize(width, height) {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        this.canvas.width = Math.max(1, Math.floor(width * dpr));
        this.canvas.height = Math.max(1, Math.floor(height * dpr));
        this.canvas.style.width = `${width}px`;
        this.canvas.style.height = `${height}px`;
        this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        this.viewW = width;
        this.viewH = height;
    }

    fitToBounds(projectWidth, projectDepth) {
        this.bounds = { w: projectWidth || 20, d: projectDepth || 15 };
        const viewW = this.viewW || 1;
        const viewH = this.viewH || 1;
        const availW = Math.max(viewW - this.padding * 2, 1);
        const availH = Math.max(viewH - this.padding * 2, 1);
        this.zoom = Math.min(availW / this.bounds.w, availH / this.bounds.d);
        if (!Number.isFinite(this.zoom) || this.zoom <= 0) {
            this.zoom = 1;
        }
        this.panX = this.padding + (availW - this.bounds.w * this.zoom) / 2;
        this.panY = this.padding + (availH - this.bounds.d * this.zoom) / 2;
    }

    minZoom() {
        const viewW = this.viewW || 1;
        const viewH = this.viewH || 1;
        const availW = Math.max(viewW - this.padding * 2, 1);
        const availH = Math.max(viewH - this.padding * 2, 1);
        const fit = Math.min(availW / this.bounds.w, availH / this.bounds.d);
        return Math.max(0.25, fit * 0.15);
    }

    worldToScreen(x, z) {
        return [this.panX + x * this.zoom, this.panY + z * this.zoom];
    }

    screenToWorld(sx, sy) {
        return [(sx - this.panX) / this.zoom, (sy - this.panY) / this.zoom];
    }

  onWheel(event) {
        event.preventDefault();
        const rect = this.canvas.getBoundingClientRect();
        const sx = event.clientX - rect.left;
        const sy = event.clientY - rect.top;
        const [wx, wz] = this.screenToWorld(sx, sy);
        const factor = event.deltaY < 0 ? 1.08 : 0.92;
        this.zoom = Math.max(this.minZoom(), Math.min(120, this.zoom * factor));
        const [nx, nz] = this.worldToScreen(wx, wz);
        this.panX += sx - nx;
        this.panY += sy - nz;
    }

    onPointerDown(event) {
        if (event.button === 1 || event.button === 2 || event.altKey || event.button === 0 && event.shiftKey) {
            this.isPanning = true;
            this.lastPan = { x: event.clientX, y: event.clientY };
            try { this.canvas.setPointerCapture(event.pointerId); } catch { /* ignore */ }
            return true;
        }
        return false;
    }

    onPointerMove(event) {
        if (!this.isPanning) return;
        this.panX += event.clientX - this.lastPan.x;
        this.panY += event.clientY - this.lastPan.y;
        this.lastPan = { x: event.clientX, y: event.clientY };
    }

    onPointerUp() {
        this.isPanning = false;
    }

    hitTest(floor, sx, sy) {
        const ctx = this.ctx;

        for (const label of [...(floor.labels || [])].reverse()) {
            if (this.hitTestLabel(ctx, label, sx, sy)) {
                return { type: 'label', id: label.id };
            }
        }

        const [wx, wz] = this.screenToWorld(sx, sy);
        const threshold = 0.35 / this.zoom;

        for (const comp of [...(floor.components || [])].reverse()) {
            const hw = (comp.width || 1) / 2;
            const hd = (comp.depth || 1) / 2;
            const [cx, cz] = comp.position;
            if (wx >= cx - hw && wx <= cx + hw && wz >= cz - hd && wz <= cz + hd) {
                return { type: 'component', id: comp.id };
            }
        }

        for (const device of [...(floor.smart_devices || [])].reverse()) {
            const [dx, dz] = device.position;
            if (Math.hypot(wx - dx, wz - dz) < 0.7) {
                return { type: 'smart', id: device.id };
            }
        }

        for (const door of floor.doors || []) {
            const wall = floor.walls?.find((w) => w.id === door.wall_id);
            if (!wall) continue;
            const { x, z } = this.pointOnWall(wall, door.position ?? 0.5);
            if (Math.hypot(wx - x, wz - z) < 0.5) return { type: 'door', id: door.id };
        }

        for (const win of floor.windows || []) {
            const wall = floor.walls?.find((w) => w.id === win.wall_id);
            if (!wall) continue;
            const { x, z } = this.pointOnWall(wall, win.position ?? 0.5);
            if (Math.hypot(wx - x, wz - z) < 0.5) return { type: 'window', id: win.id };
        }

        let nearestWall = null;
        let nearestDist = threshold;
        for (const wall of floor.walls || []) {
            const d = distToSegment(wx, wz, wall.from[0], wall.from[1], wall.to[0], wall.to[1]);
            if (d < nearestDist) {
                nearestDist = d;
                nearestWall = wall;
            }
        }
        if (nearestWall) return { type: 'wall', id: nearestWall.id };

        for (const room of floor.rooms || []) {
            if (room.polygon?.length && this.pointInPolygon(wx, wz, room.polygon)) {
                return { type: 'room', id: room.id };
            }
        }

        return null;
    }

    hitTestWallHandle(floor, selected, sx, sy) {
        if (selected?.type !== 'wall') return null;
        const wall = floor.walls?.find((w) => w.id === selected.id);
        if (!wall) return null;
        const threshold = 10;
        const [fx, fy] = this.worldToScreen(wall.from[0], wall.from[1]);
        const [tx, ty] = this.worldToScreen(wall.to[0], wall.to[1]);
        if (Math.hypot(sx - fx, sy - fy) <= threshold) {
            return { userData: { dragType: 'wall-from', refId: wall.id, endpoint: 'from' } };
        }
        if (Math.hypot(sx - tx, sy - ty) <= threshold) {
            return { userData: { dragType: 'wall-to', refId: wall.id, endpoint: 'to' } };
        }
        return null;
    }

    pointOnWall(wall, t) {
        const [x1, z1] = wall.from;
        const [x2, z2] = wall.to;
        return { x: x1 + (x2 - x1) * t, z: z1 + (z2 - z1) * t };
    }

    pointInPolygon(x, z, polygon) {
        let inside = false;
        for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
            const [xi, zi] = polygon[i];
            const [xj, zj] = polygon[j];
            if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi + 0.0001) + xi) {
                inside = !inside;
            }
        }
        return inside;
    }

    drawWallSegment(ctx, wall, openings, wallSelectedId, highlightId) {
        const [x1, z1] = wall.from;
        const [x2, z2] = wall.to;
        const len = Math.hypot(x2 - x1, z2 - z1) || 0.001;
        const thick = ((wall.thickness || 0.15) * this.zoom) / 2;
        const isSelected = wallSelectedId === wall.id;

        const wallOpenings = (openings || []).filter((o) => o.wall_id === wall.id);
        const segments = [[0, 1]];

        wallOpenings.forEach((op) => {
            const half = (op.width || 1) / (2 * len);
            const center = op.position ?? 0.5;
            const a = Math.max(0, center - half);
            const b = Math.min(1, center + half);
            const next = [];
            segments.forEach(([s, e]) => {
                if (b <= s || a >= e) next.push([s, e]);
                else {
                    if (a > s) next.push([s, a]);
                    if (b < e) next.push([b, e]);
                }
            });
            segments.length = 0;
            segments.push(...next);
        });

        ctx.strokeStyle = isSelected ? '#22d3ee' : '#cbd5e1';
        ctx.lineWidth = Math.max(3, thick * 2);
        ctx.lineCap = 'square';

        segments.forEach(([s, e]) => {
            const [sx, sz] = this.worldToScreen(x1 + (x2 - x1) * s, z1 + (z2 - z1) * s);
            const [ex, ez] = this.worldToScreen(x1 + (x2 - x1) * e, z1 + (z2 - z1) * e);
            ctx.beginPath();
            ctx.moveTo(sx, sz);
            ctx.lineTo(ex, ez);
            ctx.stroke();
        });

        wallOpenings.forEach((op) => {
            const { x, z } = this.pointOnWall(wall, op.position ?? 0.5);
            const [px, py] = this.worldToScreen(x, z);
            const sel = highlightId === op.id;
            const isWindow = op.sill !== undefined && op.sill !== null;
            ctx.fillStyle = sel ? '#22d3ee' : isWindow ? '#38bdf8' : '#f59e0b';
            ctx.beginPath();
            ctx.arc(px, py, 4, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    measureLabel(ctx, label) {
        const size = label.size || 14;
        const lines = String(label.text || 'Text').split('\n');
        ctx.font = `${label.bold ? '700' : '600'} ${size}px Inter, system-ui, sans-serif`;
        const lineHeight = size * 1.25;
        const widths = lines.map((line) => ctx.measureText(line).width);
        return {
            w: Math.max(...widths, 1),
            h: Math.max(lines.length * lineHeight, lineHeight),
            lineHeight,
            lines,
            size,
        };
    }

    hitTestLabel(ctx, label, sx, sy) {
        const [px, py] = this.worldToScreen(label.position[0], label.position[1]);
        const m = this.measureLabel(ctx, label);
        const pad = 6;
        return sx >= px - pad && sx <= px + m.w + pad && sy >= py - pad && sy <= py + m.h + pad;
    }

    drawLabel(ctx, label, selected) {
        const [x, y] = this.worldToScreen(label.position[0], label.position[1]);
        const m = this.measureLabel(ctx, label);
        ctx.save();
        ctx.font = `${label.bold ? '700' : '600'} ${m.size}px Inter, system-ui, sans-serif`;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        ctx.fillStyle = label.color || '#e2e8f0';
        if (selected) {
            ctx.strokeStyle = '#22d3ee';
            ctx.lineWidth = 1.5;
            ctx.strokeRect(x - 4, y - 4, m.w + 8, m.h + 8);
        }
        m.lines.forEach((line, i) => {
            ctx.fillText(line, x, y + i * m.lineHeight);
        });
        ctx.restore();
    }

    drawWallPreview(ctx, from, to) {
        const [sx, sy] = this.worldToScreen(from[0], from[1]);
        const [ex, ey] = this.worldToScreen(to[0], to[1]);
        ctx.strokeStyle = '#22d3ee';
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 4]);
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(ex, ey);
        ctx.stroke();
        ctx.setLineDash([]);
        [[from, '#22d3ee'], [to, '#67e8f9']].forEach(([pt, color]) => {
            const [px, py] = this.worldToScreen(pt[0], pt[1]);
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(px, py, 5, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    drawWallHandles(ctx, wall) {
        [[wall.from, '#22d3ee'], [wall.to, '#67e8f9']].forEach(([pt, color]) => {
            const [px, py] = this.worldToScreen(pt[0], pt[1]);
            ctx.fillStyle = color;
            ctx.strokeStyle = '#0f172a';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(px, py, 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        });
    }

    drawPlacementGhost(ctx, spec) {
        if (!spec?.position) return;
        const [cx, cz] = spec.position;

        if (spec.kind === 'smart') {
            this.drawSmartMarker(ctx, {
                position: spec.position,
                type: spec.type,
                selected: true,
                ghost: true,
            });
            return;
        }

        const hw = (spec.width || 1) / 2;
        const hd = (spec.depth || 1) / 2;
        const [x0, y0] = this.worldToScreen(cx - hw, cz - hd);
        const [x1, y1] = this.worldToScreen(cx + hw, cz + hd);
        ctx.fillStyle = 'rgba(34,211,238,0.2)';
        ctx.strokeStyle = '#22d3ee';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 3]);
        ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
        ctx.strokeRect(x0, y0, x1 - x0, y1 - y0);
        ctx.setLineDash([]);
    }

    drawSmartMarker(ctx, { position, type, selected = false, ghost = false, on = true }) {
        const [dx, dz] = position;
        const [px, py] = this.worldToScreen(dx, dz);
        const catalog = SMART_CATALOG[type] || {};
        const icon = catalog.icon || '●';
        const label = catalog.label || type || 'Device';
        const radius = 11;

        ctx.save();
        ctx.globalAlpha = ghost ? 0.75 : 1;

        ctx.beginPath();
        ctx.arc(px, py - 3, radius, 0, Math.PI * 2);
        ctx.fillStyle = selected || ghost ? 'rgba(14, 165, 233, 0.92)' : (on !== false ? 'rgba(15, 23, 42, 0.88)' : 'rgba(51, 65, 85, 0.9)');
        ctx.fill();
        ctx.lineWidth = selected ? 2 : 1.25;
        ctx.strokeStyle = selected || ghost ? '#67e8f9' : '#e2e8f0';
        ctx.stroke();

        ctx.font = '13px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(icon, px, py - 3);

        const padX = 4;
        const padY = 2;
        ctx.font = '600 10px Inter, system-ui, sans-serif';
        ctx.textBaseline = 'top';
        const textW = ctx.measureText(label).width;
        const boxW = textW + padX * 2;
        const boxH = 14;
        const boxX = px - boxW / 2;
        const boxY = py + radius + 1;

        ctx.fillStyle = selected || ghost ? 'rgba(8, 145, 178, 0.92)' : 'rgba(15, 23, 42, 0.86)';
        ctx.beginPath();
        const r = 4;
        ctx.moveTo(boxX + r, boxY);
        ctx.arcTo(boxX + boxW, boxY, boxX + boxW, boxY + boxH, r);
        ctx.arcTo(boxX + boxW, boxY + boxH, boxX, boxY + boxH, r);
        ctx.arcTo(boxX, boxY + boxH, boxX, boxY, r);
        ctx.arcTo(boxX, boxY, boxX + boxW, boxY, r);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#f8fafc';
        ctx.fillText(label, px, boxY + padY);
        ctx.restore();
    }

    render({ floor, projectWidth, projectDepth, selected, floorLabel, previewWall, placementGhost, onUnderlayReady }) {
        if (!this.visible) return;
        const ctx = this.ctx;
        const w = this.viewW || 1;
        const h = this.viewH || 1;

        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = '#0a1018';
        ctx.fillRect(0, 0, w, h);

        const hasUnderlay = Boolean(
            floor.underlay?.url
            && floor.underlay.visible !== false
            && (floor.underlay.opacity ?? 0) > 0.01
        );

        if (hasUnderlay) {
            this.loadUnderlay(floor.underlay.url, onUnderlayReady);
            this.drawUnderlay(ctx, floor.underlay, projectWidth, projectDepth);
        }

        this.drawGrid(ctx, projectWidth, projectDepth);

        // When a floor image exists and no rooms are defined, skip the solid fill so the image stays visible.
        const rooms = floor.rooms?.length
            ? floor.rooms
            : (hasUnderlay ? [] : [{
                polygon: [[0, 0], [projectWidth, 0], [projectWidth, projectDepth], [0, projectDepth]],
                color: 0x1e293b,
                name: 'Floor',
            }]);

        rooms.forEach((room) => {
            const poly = room.polygon || [];
            if (poly.length < 3) return;
            ctx.beginPath();
            poly.forEach(([x, z], i) => {
                const [sx, sy] = this.worldToScreen(x, z);
                if (i === 0) ctx.moveTo(sx, sy);
                else ctx.lineTo(sx, sy);
            });
            ctx.closePath();
            ctx.fillStyle = hexToCss(room.color ?? 0x1e293b);
            ctx.globalAlpha = hasUnderlay
                ? (selected?.type === 'room' && selected.id === room.id ? 0.28 : 0.12)
                : (selected?.type === 'room' && selected.id === room.id ? 0.95 : 0.75);
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.strokeStyle = 'rgba(255,255,255,0.08)';
            ctx.lineWidth = 1;
            ctx.stroke();

            if (room.name) {
                const cx = poly.reduce((s, p) => s + p[0], 0) / poly.length;
                const cz = poly.reduce((s, p) => s + p[1], 0) / poly.length;
                const [lx, ly] = this.worldToScreen(cx, cz);
                ctx.fillStyle = 'rgba(255,255,255,0.85)';
                ctx.font = '600 11px Inter, system-ui, sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(room.name, lx, ly);
            }
        });

        (floor.walls || []).forEach((wall) => {
            const openings = [...(floor.doors || []), ...(floor.windows || [])];
            const wallSel = selected?.type === 'wall' ? selected.id : null;
            this.drawWallSegment(ctx, wall, openings, wallSel, selected?.id);
        });

        (floor.components || []).forEach((comp) => {
            const [cx, cz] = comp.position;
            const hw = (comp.width || 1) / 2;
            const hd = (comp.depth || 1) / 2;
            const [x0, y0] = this.worldToScreen(cx - hw, cz - hd);
            const [x1, y1] = this.worldToScreen(cx + hw, cz + hd);
            const sel = selected?.type === 'component' && selected.id === comp.id;
            ctx.fillStyle = sel ? 'rgba(34,211,238,0.35)' : 'rgba(148,163,184,0.45)';
            ctx.strokeStyle = sel ? '#22d3ee' : '#94a3b8';
            ctx.lineWidth = sel ? 2 : 1;
            ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
            ctx.strokeRect(x0, y0, x1 - x0, y1 - y0);
        });

        (floor.smart_devices || []).forEach((device) => {
            const sel = selected?.type === 'smart' && selected.id === device.id;
            this.drawSmartMarker(ctx, {
                position: device.position,
                type: device.type,
                selected: sel,
                on: device.on !== false,
            });
        });

        if (selected?.type === 'wall') {
            const wall = floor.walls?.find((w) => w.id === selected.id);
            if (wall) this.drawWallHandles(ctx, wall);
        }

        if (previewWall?.from && previewWall?.to) {
            this.drawWallPreview(ctx, previewWall.from, previewWall.to);
        }

        if (placementGhost) {
            this.drawPlacementGhost(ctx, placementGhost);
        }

        (floor.labels || []).forEach((label) => {
            const sel = selected?.type === 'label' && selected.id === label.id;
            this.drawLabel(ctx, label, sel);
        });

        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.font = '500 10px Inter, system-ui, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(floorLabel || 'Floor plan', 12, h - 12);
        ctx.textAlign = 'right';
        ctx.fillText(`${projectWidth}×${projectDepth} m · scroll zoom · shift+drag pan`, w - 12, h - 12);
    }

    drawGrid(ctx, pw, pd) {
        const step = 1;
        ctx.strokeStyle = 'rgba(255,255,255,0.04)';
        ctx.lineWidth = 1;
        for (let x = 0; x <= pw; x += step) {
            const [sx, sy] = this.worldToScreen(x, 0);
            const [, ey] = this.worldToScreen(x, pd);
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.lineTo(sx, ey);
            ctx.stroke();
        }
        for (let z = 0; z <= pd; z += step) {
            const [sx, sy] = this.worldToScreen(0, z);
            const [ex] = this.worldToScreen(pw, z);
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.lineTo(ex, sy);
            ctx.stroke();
        }
        ctx.strokeStyle = 'rgba(34,211,238,0.25)';
        ctx.lineWidth = 2;
        const [bx, by] = this.worldToScreen(0, 0);
        const [ex, ey] = this.worldToScreen(pw, pd);
        ctx.strokeRect(bx, by, ex - bx, ey - by);
    }
}
