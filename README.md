# Royalwood Neighbourhood Association — Website

The official website for the Royalwood Neighbourhood Association (RNA), built with [Astro](https://astro.build), Tailwind CSS v4, and MDX. Deployed to GitHub Pages.

---

## Local Development

**Requirements:** Node.js 22+

```sh
npm install        # Install dependencies
npm run dev        # Start dev server at http://localhost:4321
npm run build      # Build for production (runs Astro + Pagefind)
npm run preview    # Preview the production build locally
```

> Note: The search page requires a production build (`npm run build`) to function, as Pagefind generates its index from the built HTML files.

---

## Project Structure

```
src/
  content/
    blog/          ← Blog posts (MDX)
    events/        ← Events (MDX)
    resources/     ← Resource/docs pages (MDX)
  content.config.ts  ← Content collection schemas
  data/
    board.json     ← Board member data for the About page
  layouts/
    BaseLayout.astro
    BlogPostLayout.astro
    ResourceLayout.astro
  components/
    Header.astro
    Footer.astro
    Hero.astro
    BlogCard.astro
    EventCard.astro
    ResourceSidebar.astro
    Breadcrumb.astro
    Pagination.astro
  pages/
    index.astro          → /
    about.astro          → /about
    events.astro         → /events
    get-involved.astro   → /get-involved
    contact.astro        → /contact
    search.astro         → /search
    blog/
      index.astro        → /blog
      [slug].astro       → /blog/[post-id]
    resources/
      index.astro        → /resources (redirects to first entry)
      [slug].astro       → /resources/[resource-id]
  styles/
    global.css           ← Tailwind import + design tokens + prose styles
public/
  logo.svg               ← Placeholder wordmark (replace with real logo)
.github/
  workflows/
    deploy.yml           ← GitHub Actions: build + deploy to GitHub Pages
```

---

## Adding a Blog Post

1. Create a new `.mdx` file in `src/content/blog/`:

```mdx
---
title: "Your Post Title"
pubDate: 2025-06-01
author: "RNA Board"
description: "A short description shown in cards and meta tags."
tags: ["announcements", "community"]
draft: false
---

Your post content here...
```

2. The post will appear automatically in the blog index and on the home page (if it's one of the 3 most recent).

**Slug:** The filename (without `.mdx`) becomes the URL. `my-new-post.mdx` → `/blog/my-new-post`

---

## Adding a Resource Page

1. Create a new `.mdx` file in `src/content/resources/`:

```mdx
---
title: "Page Title"
category: "Category Name"
order: 5
description: "Optional short description shown under the page title."
---

Page content here...
```

2. The page will appear automatically in the Resources sidebar, grouped under the specified `category` and sorted by `order`.

**Available categories:** Bylaws & Governance, Neighbourhood Guides, City & Municipal Info, Safety & Emergency, Environment & Green Spaces — or add any new category name.

**Slug:** The filename (without `.mdx`) becomes the URL. `my-resource.mdx` → `/resources/my-resource`

---

## Adding an Event

1. Create a new `.mdx` file in `src/content/events/`:

```mdx
---
title: "Event Name"
date: 2025-10-15
location: "Location description"
description: "Short description shown in event cards."
---

Optional full event description here...
```

2. Events are automatically sorted by date. Past events appear in a dimmed "Past Events" section.

---

## Updating the Board

Edit `src/data/board.json`. Each member needs a `name` and `role`:

```json
[
  { "name": "Jane Smith", "role": "President" },
  { "name": "John Doe",   "role": "Treasurer" }
]
```

---

## Replacing the Logo

Replace `public/logo.svg` with your real logo SVG. The logo is referenced in:
- `src/components/Header.astro` (nav bar, 40px tall)
- `src/components/Footer.astro` (footer, 36px tall, inverted white)
- `src/layouts/BaseLayout.astro` (favicon)

---

## Design Tokens

Core design values are defined as CSS custom properties in `src/styles/global.css`:

| Token | Value | Usage |
|---|---|---|
| `--color-teal` | `#0D9488` | Primary accent, buttons, links |
| `--color-teal-dark` | `#134E4A` | Headings, dark backgrounds |
| `--color-bg` | `#F8F7F4` | Page background |
| `--color-text` | `#1C1917` | Body text |
| `--color-muted` | `#78716C` | Secondary text |
| `--color-border` | `#E7E5E4` | Borders, dividers |

---

## Deployment (GitHub Pages)

The workflow at `.github/workflows/deploy.yml` automatically:
1. Installs dependencies
2. Runs `npm run build` (Astro build + Pagefind indexing)
3. Deploys `dist/` to GitHub Pages

**Setup:**
1. Push this repo to GitHub
2. Go to Settings → Pages → Source: **GitHub Actions**
3. Update `site` in `astro.config.mjs` to your actual GitHub Pages URL (e.g. `https://yourusername.github.io/rna-website`)
4. Push to `main` — the workflow will deploy automatically

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Astro | 6.x | Site framework |
| Tailwind CSS | 4.x | Styling |
| MDX | via @astrojs/mdx | Rich content authoring |
| Pagefind | 1.x | Static full-text search |
| GitHub Actions | — | CI/CD |
| GitHub Pages | — | Hosting |
