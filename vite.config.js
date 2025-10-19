import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/aot-wordle/",
  build: {
    outDir: "dist",
  },
  plugins: [react()],
});
