import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Port for development server
  },
  build: {
    sourcemap: false, // Disable source maps in production
    minify: 'esbuild', // Use esbuild for minification
  },
});

