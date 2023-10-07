/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                thinc: {
                    blue: '#0F162B',
                    accent: '#FEC92B',
                },
            },
        },
    },
    plugins: [],
};
