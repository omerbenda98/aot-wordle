import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/aot-wordle/",
  build: {
    outDir: "docs", // Change output from 'dist' to 'docs'
  },
  plugins: [react()],
});
