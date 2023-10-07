import { defineCollection, z } from 'astro:content';

const roadmap = defineCollection({
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        level: z.string(),
    }),
});

export const collections = { roadmap };
