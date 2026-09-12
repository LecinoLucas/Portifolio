import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@portfolio/contracts": path.resolve(__dirname, "../packages/contracts/src/index.ts"),
    },
  },
  test: {
    globals: true,
    environment: "node",
  },
});
