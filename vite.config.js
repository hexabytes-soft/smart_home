import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/css/studio.css',
                'resources/css/storefront.css',
                'resources/js/app.js',
                'resources/js/map-editor.js',
            ],
            refresh: true,
        }),
    ],
});
