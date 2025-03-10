import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://learn.thinc.in.th',
    integrations: [mdx(), sitemap(), react(), tailwind()],
    vite: {
        ssr: {
            noExternal: ['react-icons'],
        },
    },
});
