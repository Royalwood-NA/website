import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { file, glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default("RNA Board"),
    category: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/events" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eventDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string(),
    address: z.string().optional(),
    category: z
      .enum(["community", "meeting", "social", "cleanup", "sport", "other"])
      .default("community"),
    image: z.string().optional(),
    registration: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/resources" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.string(),
    order: z.number().default(99),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

const boardMembers = defineCollection({
  loader: file("src/data/boardMembers.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    image: z.string(),
  }),
});

const statsDatas = defineCollection({
  loader: file("src/data/stats.json"),
  schema: z.object({
    id: z.string(),
    yearFounded: z.number(),
    members: z.number(),
    yearsOfService: z.number(),
    eventsHeldAnnually: z.number(),
  }),
});

const boardValues = defineCollection({
  loader: file("src/data/boardValues.json"),
  schema: z.object({
    id: z.string(),
    icon: z.string(),
    title: z.string(),
    description: z.string(),
  }),
});

const navLinks = defineCollection({
  loader: file("src/data/navLinks.json"),
  schema: z.object({
    href: z.string(),
    label: z.string(),
  }),
});

const volunteerOpportunities = defineCollection({
  loader: file("src/data/volunteerOpportunities.json"),
  schema: z.object({
    id: z.string(),
    role: z.string(),
    commitment: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  blog,
  events,
  resources,
  boardMembers,
  statsDatas,
  boardValues,
  navLinks,
  volunteerOpportunities,
};
