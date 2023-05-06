import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~domain": path.resolve(__dirname, "src/domain/"),
      "~infrastructure": path.resolve(__dirname, "src/infrastructure/"),
    },
  },
});
