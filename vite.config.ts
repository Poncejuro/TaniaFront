import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Rutas relativas: funciona en GitHub Pages con cualquier nombre de repo (la app no usa router)
export default defineConfig({
  base: './',
  plugins: [react()],
})
