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
        login: resolve(__dirname, "admin/login/index.html"),
        changelogCreator: resolve(
          __dirname,
          "admin/changelog-creator/index.html"
        ),
      },
    },
  },
});
