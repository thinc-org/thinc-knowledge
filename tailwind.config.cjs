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
                cream: 'var(--cream)',
                
                // Color poles
                gold: 'var(--gold)',
                pillar: 'var(--pillar)',
                orange: 'var(--orange)',
                'red-orange': 'var(--red-orange)',
                blue: 'var(--blue)',
                sky: 'var(--sky)',
                cyan: 'var(--cyan)',

                // Semantics
                'bg-primary': 'var(--color-bg-primary)',
                'bg-secondary': 'var(--color-bg-secondary)',
                'bg-tertiary': 'var(--color-bg-tertiary)',
                'bg-inverse': 'var(--color-bg-inverse)',

                'text-primary': 'var(--color-text-primary)',
                'text-secondary': 'var(--color-text-secondary)',
                'text-tertiary': 'var(--color-text-tertiary)',
                'text-inverse': 'var(--color-text-inverse)',
                'text-link': 'var(--color-text-link)',

                'border-primary': 'var(--color-border-primary)',
                'border-secondary': 'var(--color-border-secondary)',
                'border-focus': 'var(--color-border-focus)',

                'accent-primary': 'var(--color-accent-primary)',
                'accent-secondary': 'var(--color-accent-secondary)',

                'status-success': 'var(--color-status-success)',
                'status-warning': 'var(--color-status-warning)',
                'status-error': 'var(--color-status-error)',
                'status-info': 'var(--color-status-info)',

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
            spacing: {
                'space-0': 'var(--space-0)',
                'space-1': 'var(--space-1)',
                'space-2': 'var(--space-2)',
                'space-3': 'var(--space-3)',
                'space-4': 'var(--space-4)',
                'space-5': 'var(--space-5)',
                'space-6': 'var(--space-6)',
                'space-7': 'var(--space-7)',
                'space-8': 'var(--space-8)',
                'space-9': 'var(--space-9)',
                'space-10': 'var(--space-10)',
                'space-11': 'var(--space-11)',
                'space-12': 'var(--space-12)',
            },
            borderRadius: {
                sm: 'var(--border-radius-sm)',
                md: 'var(--border-radius-md)',
                lg: 'var(--border-radius-lg)',
                xl: 'var(--border-radius-xl)',
            },
            transitionDuration: {
                instant: 'var(--duration-instant)',
                fast: 'var(--duration-fast)',
                normal: 'var(--duration-normal)',
                slow: 'var(--duration-slow)',
                slower: 'var(--duration-slower)',
            },
            transitionTimingFunction: {
                default: 'var(--easing-default)',
                in: 'var(--easing-in)',
                out: 'var(--easing-out)',
                bounce: 'var(--easing-bounce)',
                'out-expo': 'var(--ease-out-expo)',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
