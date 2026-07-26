import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        // Use 127.0.0.1 to avoid Windows IPv6 localhost connection resets
        target: 'http://127.0.0.1:5000',
        changeOrigin: true,
        timeout: 60000,
      },
    },
  },
});
