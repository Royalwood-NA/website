import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    pubDate:     z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author:      z.string().default('RNA Board'),
    category:    z.string().optional(),
    image:       z.string().optional(),
    draft:       z.boolean().default(false),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/events' }),
  schema: z.object({
    title:        z.string(),
    description:  z.string(),
    eventDate:    z.coerce.date(),
    endDate:      z.coerce.date().optional(),
    location:     z.string(),
    address:      z.string().optional(),
    category:     z.enum(['community', 'meeting', 'social', 'cleanup', 'sport', 'other']).default('community'),
    image:        z.string().optional(),
    registration: z.string().optional(),
    draft:        z.boolean().default(false),
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/resources' }),
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    section:     z.string(),
    order:       z.number().default(99),
    updatedDate: z.coerce.date().optional(),
    draft:       z.boolean().default(false),
  }),
});

export const collections = { blog, events, resources };
