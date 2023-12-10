/* eslint-disable */
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@config": "/src/config",
      "@components": "/src/components",
      "@hooks": "/src/hooks",
      "@pages": "/src/pages",
      "@services": "/src/services",
      "@ui": "/src/ui",
      // Add more aliases as needed
    },
  },
})
