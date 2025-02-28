import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  preview: {
    allowedHosts: [
      'cassywebsite.up.railway.app',
      '.railway.app',
      'cgsdlogistics.com', // Ajout de l'hôte mentionné dans l'erreur
    ]
  },
  server: {
    port: process.env.PORT || 3000,
    host: true, // Needed for docker
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  define: {
    // Nécessaire pour certaines libs qui utilisent process.env
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  }
});