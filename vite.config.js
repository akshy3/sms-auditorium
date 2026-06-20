import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  base: '/sms-auditorium/',
  server: {
    allowedHosts: true
  },
  plugins: [
    ViteImageOptimizer({
      png: { quality: 82 },
      jpg: { quality: 82 },
      jpeg: { quality: 82 },
    })
  ]
});
