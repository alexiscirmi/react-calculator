import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-calculator/',
  plugins: [
    react(),
    VitePWA({ registerType: 'autoUpdate' })
  ],
})