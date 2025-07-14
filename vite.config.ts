import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ["yaroven.github.io/TgBot-frontend/"],
  },
  base: "/TgBot-frontend/",
});
