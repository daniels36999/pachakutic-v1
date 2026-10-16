import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Para GitHub Pages: cambia 'guamote-web' por el nombre exacto de tu repositorio.
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? '/pachakutic-v1/' : '/',
})
