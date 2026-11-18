import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

// StayWildGo production domain. Local builds use this for canonical
// URLs, sitemap, and RSS. Never point this at a staging host.
const site = process.env.SITE_URL || "https://staywildgo.com";

// https://astro.build/config
export default defineConfig({
  site,
  server: {
    host: true,
    port: 4321,
  },
  integrations: [
    sitemap(),
    mdx(),
    pagefind(),
    // Only bundle the icons listed here. To add an icon, add its name.
    // Brand icons need @iconify-json/simple-icons installed first.
    icon({
      include: {
        tabler: [
          "alert-circle",
          "alert-triangle",
          "arrow-left",
          "arrow-right",
          "arrow-up",
          "arrow-up-right",
          "bulb",
          "check",
          "device-desktop",
          "info-circle",
          "menu-2",
          "moon",
          "search",
          "rss",
          "sun",
          "x",
        ],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
