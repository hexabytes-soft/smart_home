import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                brand: {
                    50: '#ecfeff',
                    100: '#cffafe',
                    200: '#a5f3fc',
                    300: '#67e8f9',
                    400: '#22d3ee',
                    500: '#06b6d4',
                    600: '#0891b2',
                    700: '#0e7490',
                    800: '#155e75',
                    900: '#164e63',
                    950: '#083344',
                },
                surface: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                    950: '#020617',
                },
            },
            boxShadow: {
                glow: '0 0 40px -10px rgba(6, 182, 212, 0.45)',
                card: '0 4px 24px -4px rgba(15, 23, 42, 0.12)',
            },
            backgroundImage: {
                'mesh-gradient': 'radial-gradient(at 40% 20%, rgba(6,182,212,0.25) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(99,102,241,0.15) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(6,182,212,0.1) 0px, transparent 50%)',
            },
        },
    },

    plugins: [forms],
};
