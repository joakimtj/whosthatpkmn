/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.image-pixel': {
                    'image-rendering': 'pixelated',
                    '@supports not (image-rendering: pixelated)': {
                        'image-rendering': 'crisp-edges',
                    },
                },
            })
        },],
}