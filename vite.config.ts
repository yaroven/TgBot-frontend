import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ["132400e9a7e2.ngrok-free.app"],
  },
  base: "/TgBot/",
});
