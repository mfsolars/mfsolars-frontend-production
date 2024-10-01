import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: '0.0.0.0', // Makes Vite listen on all network interfaces for deployment
    proxy: {
      '/api': {
        target: 'https://mfsolars-backend-production.up.railway.app', // Replace with your backend URL in production
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Correct the rewrite for /api proxying
      },
    },
  },
  plugins: [react()],
})
