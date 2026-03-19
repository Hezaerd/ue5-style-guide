import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import mdx from "fumadocs-mdx/vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    cloudflare({
      viteEnvironment: { name: "ssr" },
    }),
    mdx(await import("./source.config")),
    tailwindcss(),
    tanstackStart({
      spa: {
        enabled: true,
        prerender: {
          enabled: true,
          crawlLinks: true,
        },
      },
      pages: [
        { path: "/docs" },
        { path: "/docs/principles" },
        { path: "/docs/asset-naming" },
        { path: "/docs/asset-naming/modifiers-common" },
        { path: "/docs/asset-naming/modifiers-animations" },
        { path: "/docs/asset-naming/modifiers-ai" },
        { path: "/docs/asset-naming/modifiers-blueprints" },
        { path: "/docs/asset-naming/modifiers-materials" },
        { path: "/docs/asset-naming/modifiers-textures" },
        { path: "/docs/asset-naming/modifiers-misc" },
        { path: "/docs/content-directory" },
        { path: "/docs/blueprints" },
        { path: "/docs/blueprints/variables" },
        { path: "/docs/blueprints/functions" },
        { path: "/docs/blueprints/graphs" },
        { path: "/docs/static-meshes" },
        { path: "/docs/niagara" },
        { path: "/docs/levels" },
        { path: "/docs/textures" },
        { path: "/api/search" },
        { path: "/llms-full.txt" },
        { path: "/llms.txt" },
      ],
    }),
    react(),
  ],
  resolve: {
    tsconfigPaths: true,
    alias: {
      tslib: "tslib/tslib.es6.js",
    },
  },
});
