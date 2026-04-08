import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),        // React support
    tailwindcss()   // Tailwind support
  ],
  build: {
    outDir: 'dist'  // Netlify expects the publish folder, Vite uses 'dist' by default
  },
  server: {
    open: true,     // dev server auto-open browser
    port: 5173      // default Vite port
  }
  build: {
  outDir: 'dist'
}
});