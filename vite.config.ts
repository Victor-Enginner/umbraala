import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(import.meta.dirname, './src') },
  },
  build: {
    // budget do DECISIONS §5: <120 kB gzip inicial (medido: ~110 kB gzip);
    // raw pode passar de 200 por React+Base UI — 3D/assets futuros entram lazy
    chunkSizeWarningLimit: 350,
  },
})
