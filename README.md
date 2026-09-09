# Personal Website

A fast, accessible personal portfolio and blog, built as a fully static
site and deployed automatically to GitHub Pages.

**Live site:** https://daniellandry-create.github.io/personal-website/

> This repo ships with realistic placeholder content so it looks complete
> out of the box. Anything you should replace is marked with
> `[LIKE THIS]`. See [Next steps](#next-steps) for the full checklist.

## Tech stack

- **[Astro](https://astro.build)** — renders to plain static HTML/CSS at
  build time, ships zero JavaScript by default, and only the handful of
  small interactive bits on this site (theme toggle, mobile nav) send any
  JS to the browser at all. Content is authored as Markdown with
  frontmatter via Astro's content collections, so adding a project or
  blog post never touches layout code.
- **Plain CSS** (custom properties, no framework) — a small, hand-rolled
  design system (`src/styles/global.css`) keeps the output lean and the
  look distinct rather than "generic component-library."
- **TypeScript** for content schemas and component props.
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)**
  for automatic `sitemap.xml` generation.
- **Prettier** + **ESLint** (`eslint-plugin-astro`, `typescript-eslint`)
  for consistent formatting and linting.

Why not a bigger framework (Next.js, etc.)? There's no interactivity here
that needs a client-side router or server rendering — a portfolio and
blog is exactly the case static-site generation is for. Astro produces
the smallest, fastest output for that job while still giving component
reuse, TypeScript, and a Markdown-based content model.

## Project structure

```
.
├── .github/workflows/     # CI + GitHub Pages deploy
├── public/                # Copied as-is: favicon, OG image, robots.txt, resume.pdf
├── src/
│   ├── components/        # Header, Footer, ProjectCard, ThemeToggle, Icon, ...
│   ├── content/
│   │   ├── projects/      # One Markdown file per project (data-driven grid)
│   │   └── blog/          # One Markdown file per post
│   ├── content.config.ts  # Content collection schemas (Zod)
│   ├── layouts/
│   │   └── BaseLayout.astro  # <head>, meta/OG/JSON-LD, header/footer shell
│   ├── pages/              # File-based routing (index, about, projects, blog, contact, 404)
│   ├── site.config.ts      # Name, nav links, social links, contact info -- edit this first
│   └── styles/global.css   # Design tokens (light/dark) + all component styles
├── astro.config.mjs
└── package.json
```

## Local development

Requires Node.js 22.12+ (Astro 7's minimum).

```bash
npm install
npm run dev       # http://localhost:4321/personal-website/
```

Other scripts:

```bash
npm run build         # astro check (typecheck) + production build -> dist/
npm run preview       # serve the production build locally
npm run format         # apply Prettier
npm run format:check   # check formatting in CI
npm run lint            # ESLint
```

The dev server serves the site under the `/personal-website/` base path,
matching how it's served in production (see [Deployment](#deployment)) —
use the printed `localhost:4321/personal-website/` URL, not the bare
root.

## Adding a project

Add a new Markdown file to `src/content/projects/`:

```markdown
---
title: "Project Name"
description: "One or two sentences describing the project."
tags: ["TypeScript", "React"]
liveUrl: "https://example.com" # optional
repoUrl: "https://github.com/you/project" # optional
featured: true # shows on the home page
order: 1 # lower sorts first
---

Optional longer write-up in Markdown. Not currently rendered on the
project detail — this schema is intentionally lightweight (a card grid),
but you can extend `src/content.config.ts` and `ProjectCard.astro` if you
want a full project detail page per entry, the same way blog posts work.
```

The schema lives in `src/content.config.ts`. It's validated at build
time — a missing required field fails the build with a clear error
instead of shipping a broken card.

## Adding a blog post

Add a new Markdown file to `src/content/blog/`:

```markdown
---
title: "Post Title"
description: "Shows in the blog index and in social share previews."
date: 2026-03-01
tags: ["notes"]
draft: false # true hides it from production builds, still visible in `npm run dev`
---

Your post content in Markdown.
```

It appears automatically on `/blog/`, newest first, at
`/blog/<filename-without-extension>/`.

## Design

- **Theme**: light/dark toggle in the header, persisted to
  `localStorage`, defaulting to the OS `prefers-color-scheme`. A
  synchronous inline script in `<head>` applies the stored/preferred
  theme before first paint, so there's no flash of the wrong theme.
- **Typography**: a system-font stack (no webfont network request — this
  is a deliberate performance choice, see [Performance](#performance-and-seo)).
- **Colors, spacing, radii, shadows**: all defined as CSS custom
  properties in `src/styles/global.css`, separately for light and dark.
  Change the palette there.
- **Contact form**: `/contact/` renders a [Formspree](https://formspree.io)
  form once you set `formspreeEndpoint` in `src/site.config.ts`; until
  then it shows the direct contact methods only (no backend required
  either way).

## Performance and SEO

- Fully static output — no server, no client-side router, minimal JS
  (the theme toggle and mobile-nav scripts only).
- System-font stack avoids a webfont network request entirely.
- Images go through Astro's built-in `<Image />` component
  (`astro:assets`, Sharp-powered) for automatic optimization and
  `loading="lazy"` when you add real project screenshots.
- Per-page `<title>`/`<meta description>`, canonical URLs, Open Graph +
  Twitter Card tags, and JSON-LD (`Person` + `WebSite`, plus
  `BlogPosting` on post pages) are all generated in
  `src/layouts/BaseLayout.astro`.
- `sitemap.xml` is generated automatically by `@astrojs/sitemap` at
  build time; `public/robots.txt` points to it.
- Semantic HTML (`header`/`nav`/`main`/`article`/`footer`), a
  skip-to-content link, visible focus states, and `alt` text throughout
  for accessibility (WCAG 2.1 AA–minded).

Run a Lighthouse audit against the deployed URL (or `npm run preview`
locally) to verify; nothing in this build should score below ~90 on any
category, but you should re-check after replacing the avatar/OG-image
placeholders with real photos.

## Deployment

Deployment is automatic via **GitHub Actions → GitHub Pages**
(`.github/workflows/deploy.yml`): every push to `main` builds the site
and publishes `dist/` using `actions/deploy-pages`. A separate
`ci.yml` runs format/lint/build checks on pull requests and other
branches.

This repo is configured as a GitHub Pages **project site**
(`https://daniellandry-create.github.io/personal-website/`), which means
two settings in `astro.config.mjs` matter:

```js
site: "https://daniellandry-create.github.io",
base: "/personal-website",
```

**One-time setup after first push:** in the repo's Settings → Pages, set
**Source** to **GitHub Actions** (not "Deploy from a branch"). After
that, every push to `main` deploys automatically — no manual step.

### Connecting a custom domain later

1. Add a `CNAME` file to `public/` containing your domain.
2. Change `site` to `https://yourdomain.com` and `base` to `"/"` in
   `astro.config.mjs`.
3. Update the hardcoded `/personal-website/` paths in
   `public/site.webmanifest` and the sitemap URL in `public/robots.txt`
   to match.
4. Configure the domain in Settings → Pages → Custom domain.

## Next steps

Everything below is marked with a placeholder in the code
(`[YOUR NAME]`, `[YOUR BIO HERE]`, etc.) so it's easy to grep for:

- [ ] `src/site.config.ts` — your name, tagline, email, location, and
      social links (this drives the header, footer, and JSON-LD).
- [ ] `src/pages/index.astro` and `src/pages/about.astro` — replace the
      placeholder bio copy.
- [ ] Replace the avatar placeholder (currently your initials on a
      gradient tile) with a real photo — swap the markup in
      `src/pages/index.astro`'s `.avatar` block for an `<Image />`.
- [ ] `src/content/projects/` — replace the 3 sample projects with your
      own; add real screenshots via `image:` in the frontmatter (drop
      files in `src/assets/` and reference them) for automatic
      optimization, or delete `image` to keep the placeholder tile.
- [ ] `src/content/blog/` — replace or delete the sample post.
- [ ] `public/resume.pdf` — replace the generated placeholder with your
      real resume (same filename, or update `resumePath` in
      `site.config.ts`).
- [ ] `public/og-image.png`, `public/favicon.svg`, `public/icon-*.png`,
      `public/apple-touch-icon.png` — regenerate with your own branding
      (all currently a placeholder teal monogram).
- [ ] Set `formspreeEndpoint` in `site.config.ts` to enable the contact
      form (free account at [formspree.io](https://formspree.io)).
- [ ] Connect a custom domain (see above) once you have one.

## License

MIT — see [LICENSE](LICENSE).
