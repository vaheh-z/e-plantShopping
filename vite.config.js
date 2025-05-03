import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Changed for DigitalOcean deployment
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
