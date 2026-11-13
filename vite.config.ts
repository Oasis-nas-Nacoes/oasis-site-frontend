import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { copyFile, mkdir } from "node:fs/promises";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [
      react(),
      {
        name: "publish-who-we-are-entry",
        apply: "build",
        async writeBundle({ dir = "dist" }) {
          const pageDirectory = path.join(dir, "who-we-are");
          await mkdir(pageDirectory, { recursive: true });
          await copyFile(
            path.join(dir, "index.html"),
            path.join(pageDirectory, "index.html"),
          );
        },
      },
    ],
    base: env.VITE_BASE_PATH || "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
    define: {
      "process.env": {},
    },
  };
});
