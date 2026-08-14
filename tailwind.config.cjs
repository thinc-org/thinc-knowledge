/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                black: 'var(--black)',
                paper: 'var(--paper)',
                ink: 'var(--ink)',
                'logo-gray': 'var(--logo-gray)',

                // Color poles
                pillar: 'var(--pillar)',
                orange: 'var(--orange)',
                'red-orange': 'var(--red-orange)',
                blue: 'var(--blue)',
                sky: 'var(--sky)',

                // Semantics
                'bg-primary': 'var(--color-bg-primary)',
                'bg-secondary': 'var(--color-bg-secondary)',

                'text-primary': 'var(--color-text-primary)',
                'text-secondary': 'var(--color-text-secondary)',
                'text-tertiary': 'var(--color-text-tertiary)',

                'border-primary': 'var(--color-border-primary)',
                'border-secondary': 'var(--color-border-secondary)',
                'border-focus': 'var(--color-border-focus)',

                'accent-primary': 'var(--color-accent-primary)',

                'status-success': 'var(--color-status-success)',
                'status-warning': 'var(--color-status-warning)',
                'status-error': 'var(--color-status-error)',

                thinc: {
                    blue: '#0F162B',
                    accent: '#FEC92B',
                },
            },
            fontFamily: {
                display: 'var(--font-family-display)',
                body: 'var(--font-family-body)',
                mono: 'var(--font-family-mono)',
            },
            borderRadius: {
                sm: 'var(--border-radius-sm)',
                md: 'var(--border-radius-md)',
                lg: 'var(--border-radius-lg)',
                xl: 'var(--border-radius-xl)',
            },
            transitionDuration: {
                fast: 'var(--duration-fast)',
                normal: 'var(--duration-normal)',
                slow: 'var(--duration-slow)',
            },
            transitionTimingFunction: {
                default: 'var(--easing-default)',
                in: 'var(--easing-in)',
                out: 'var(--easing-out)',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
