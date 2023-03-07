import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
  },
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src/") },
      { find: "@assets", replacement: path.resolve(__dirname, "./src/assets/") },
      { find: "@compnents", replacement: path.resolve(__dirname, "./src/compnents/") },
      { find: "@constants", replacement: path.resolve(__dirname, "./src/constants/") },
      { find: "@servers", replacement: path.resolve(__dirname, "./src/servers/") },
      { find: "@views", replacement: path.resolve(__dirname, "./src/views/") },
      { find: "@redux", replacement: path.resolve(__dirname, "./src/redux/") },
    ],
  },
});
