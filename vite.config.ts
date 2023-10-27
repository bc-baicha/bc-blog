import { defineConfig } from "vite";
// import { fileURLToPath, URL } from 'url'
import vue from "@vitejs/plugin-vue";
export default defineConfig({
  base: "./",
  plugins: [vue()],
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    alias: {
      "@": "/src",
    },
  },
  server: {
    port: 3003,
  },
});
