import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // budget do DECISIONS §5: casca inicial leve; 3D/assets futuros entram lazy
    chunkSizeWarningLimit: 200,
  },
})
