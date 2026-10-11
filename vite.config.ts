import { resolve } from "node:path";
import vitePluginTailwindcss from "@tailwindcss/vite";
import vitePluginReact from "@vitejs/plugin-react";
import { defineConfig, type UserConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import packageJson from "./package.json" with { type: "json" };

const appVersion =
  process.env.NODE_ENV !== "production"
    ? "development"
    : process.env.CANVAS_APP_VERSION
      ? process.env.CANVAS_APP_VERSION
      : (process.env.npm_package_version ?? "unknown");

const appId = packageJson.config?.app?.id ?? "canvas-app";
const appName = packageJson.config?.app?.name ?? "Canvas App";
const appShortName = packageJson.config?.app?.short_name ?? "Canvas App";
const appDescription =
  packageJson.config?.app?.description ?? "Infinite canvas with advanced 3D capabilities";

const BASE_URL = process.env.CANVAS_APP_BASE_URL ?? "/";

const config: UserConfig = defineConfig({
  appType: "spa",
  base: BASE_URL,
  build: {
    emitAssets: true,
    emptyOutDir: true,
    manifest: true,
    minify: true,
    modulePreload: {
      polyfill: true,
    },
    outDir: resolve(import.meta.dirname, "dist"),
    rolldownOptions: {
      output: {
        chunkFileNames: "assets/js/[name]-[hash].js",
        codeSplitting: {
          maxSize: 512000,
          minSize: 127000,
        },
        hashCharacters: "base36",
      },
      platform: "browser",
    },
    sourcemap: true,
    ssr: false,
    target: "esnext",
  },
  define: {
    __APP_DESCRIPTION__: JSON.stringify(appDescription),
    __APP_ID__: JSON.stringify(appId),
    __APP_NAME__: JSON.stringify(appName),
    __APP_SHORT_NAME__: JSON.stringify(appShortName),
    __APP_VERSION__: JSON.stringify(appVersion),
  },
  plugins: [
    VitePWA({
      devOptions: {
        enabled: true,
      },
      injectRegister: "auto",
      manifest: {
        description: "Infinite canvas with advanced 3D capabilities",
        display: "standalone",
        display_override: ["window-controls-overlay"],
        icons: [
          {
            purpose: "any",
            sizes: "192x192",
            src: "/pwa-192x192.png",
            type: "image/png",
          },
          {
            purpose: "any",
            sizes: "512x512",
            src: "/pwa-512x512.png",
            type: "image/png",
          },
          {
            purpose: "maskable",
            sizes: "192x192",
            src: "/pwa-maskable-192x192.png",
            type: "image/png",
          },
          {
            purpose: "maskable",
            sizes: "512x512",
            src: "/pwa-maskable-512x512.png",
            type: "image/png",
          },
        ],
        id: BASE_URL,
        name: appName,
        short_name: appShortName,
        start_url: BASE_URL,
        theme_color: "#22AAFF",
      },
      registerType: "autoUpdate",
      strategies: "generateSW",
      workbox: {
        clientsClaim: true,
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        maximumFileSizeToCacheInBytes: 2097152 * 12,
        skipWaiting: true,
        sourcemap: true,
      },
    }),
    vitePluginReact(),
    vitePluginTailwindcss(),
  ],
  resolve: {
    dedupe: ["react", "react-dom"],
  },
});

export default config;
