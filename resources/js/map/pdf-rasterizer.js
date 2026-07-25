/**
 * Render PDF pages to PNG images in the browser (for accurate AI vision import).
 */
import * as pdfjsLib from 'pdfjs-dist/build/pdf.mjs';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

/**
 * @param {File} file
 * @param {{ scale?: number, maxPages?: number }} options
 * @returns {Promise<File[]>}
 */
export async function rasterizePdfToImages(file, options = {}) {
    const scale = options.scale ?? 3;
    const maxPages = options.maxPages ?? 20;
    const baseName = (file.name || 'plan').replace(/\.pdf$/i, '');

    const data = new Uint8Array(await file.arrayBuffer());
    const pdf = await pdfjsLib.getDocument({ data, useSystemFonts: true }).promise;
    const pageCount = Math.min(pdf.numPages, maxPages);
    const images = [];

    for (let pageNum = 1; pageNum <= pageCount; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement('canvas');
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        const ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx) continue;

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        await page.render({ canvasContext: ctx, viewport }).promise;

        const blob = await new Promise((resolve) => {
            canvas.toBlob((b) => resolve(b), 'image/png', 0.92);
        });

        if (!blob) continue;

        images.push(new File(
            [blob],
            `${baseName}-page-${pageNum}.png`,
            { type: 'image/png', lastModified: Date.now() },
        ));
    }

    return images;
}

export function isPdfFile(file) {
    if (!file) return false;
    const type = (file.type || '').toLowerCase();
    const name = (file.name || '').toLowerCase();
    return type === 'application/pdf' || name.endsWith('.pdf');
}
