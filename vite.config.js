import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import { patchCssModules } from 'vite-css-modules';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    tsconfigPaths(),
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
