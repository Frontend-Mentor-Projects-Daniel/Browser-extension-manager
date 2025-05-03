// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Set to current directory (default)
  build: {
    outDir: 'dist', // Output directory for production build
    emptyOutDir: true, // Clear outDir before build
    assetsDir: 'assets', // Folder inside dist/ for CSS/fonts/images
  },
  server: {
    open: true, // Auto-open in browser
    port: 3000, // Change if needed
  },
});
