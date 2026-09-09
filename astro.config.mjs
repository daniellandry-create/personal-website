import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// `site` is the deployment origin; `base` is the GitHub Pages project-site
// subpath (the repo name). If you later connect a custom domain, set `site`
// to that domain and change `base` back to "/".
const site = "https://daniellandry-create.github.io";
const base = "/personal-website";

export default defineConfig({
  site,
  base,
  trailingSlash: "always",
  integrations: [sitemap()],
  image: {
    // Built-in Sharp-powered image service, used by <Image /> at build time.
    // Output is fully static -- no server/runtime required.
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
});
