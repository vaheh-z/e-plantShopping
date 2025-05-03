import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/e-plantShopping/', // Required for GitHub Pages
  define: {
    'process.env': {},
    global: 'window',
  },
  build: {
    rollupOptions: {
      external: ['crypto'],
    },
  },
  plugins: [react()],
});
