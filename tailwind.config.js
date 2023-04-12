const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                morandi: {
                    50: '#f2f1eb',
                    100: '#e0e0d2',
                    200: '#c7c6b5',
                    300: '#aba990',
                    400: '#90806c',
                    500: '#736354',
                    600: '#5c4d46',
                    700: '#463a34',
                    800: '#302821',
                    900: '#1a1410',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
