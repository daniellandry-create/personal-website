import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Local image in src/assets or an absolute URL. Optional -- falls
      // back to a placeholder tile when omitted.
      image: image().optional(),
      imageAlt: z.string().optional(),
      // e.g. "Team Member", "Project Manager"
      role: z.string().optional(),
      // e.g. "Mar. 2026 - Present"
      dateRange: z.string().optional(),
      tags: z.array(z.string()).default([]),
      liveUrl: z.string().url().optional(),
      repoUrl: z.string().url().optional(),
      featured: z.boolean().default(false),
      // Lower numbers sort first; ties fall back to featured, then title.
      order: z.number().default(100),
      // Extra photos for the project detail page's media gallery.
      // Paths are relative to /public, e.g. "/projects/my-project/shot.jpg".
      gallery: z
        .array(z.object({ src: z.string(), alt: z.string() }))
        .default([]),
      // Optional video walkthrough for the media gallery, also relative to /public.
      video: z
        .object({ src: z.string(), poster: z.string().optional() })
        .optional(),
    }),
});

export const collections = { projects };
