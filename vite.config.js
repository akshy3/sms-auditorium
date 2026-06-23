import { defineConfig } from 'vite';
import { resolve } from 'path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  base: '/sms-auditorium/',
  server: {
    allowedHosts: true
  },
  plugins: [
    imagetools(),
    ViteImageOptimizer({
      png: { quality: 82 },
      jpg: { quality: 82 },
      jpeg: { quality: 82 },
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        join: resolve(__dirname, 'join.html'),
      }
    }
  }
});
