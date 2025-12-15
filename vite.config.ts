import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 4305,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        changelog: resolve(__dirname, "changelog/index.html"),
        rules: resolve(__dirname, "rules/index.html"),
        imprint: resolve(__dirname, "imprint/index.html"),
        pioneers: resolve(__dirname, "pioneers/index.html"),
        team: resolve(__dirname, "team/index.html"),
        admin: resolve(__dirname, "admin/index.html"),
        "admin/login": resolve(__dirname, "admin/login/index.html"),
        "admin/changelog-editor": resolve(
          __dirname,
          "admin/changelog-editor/index.html"
        ),
        "admin/changelog/editor": resolve(
          __dirname,
          "admin/changelog/editor/index.html"
        ),
        "admin/changelogs": resolve(__dirname, "admin/changelogs/index.html"),
        "admin/changelog-creator": resolve(
          __dirname,
          "admin/changelog-creator/index.html"
        ),
      },
    },
  },
});
