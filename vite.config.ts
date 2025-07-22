import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/NAMA-REPO-LO/', // GANTI SAMA NAMA REPO GITHUB LO
})
