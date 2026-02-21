import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import { patchCssModules } from 'vite-css-modules';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    patchCssModules(),],
  // Proxy all requests to local backend for development
  server: {
    proxy: {
      '**': {
      target: 'http://localhost:8080',
      changeOrigin: true,
      }
    }
  }
})
