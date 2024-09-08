// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/3d-portfolioo/", // YOUR REPO NAME HERE
  plugins: [react()],
});
