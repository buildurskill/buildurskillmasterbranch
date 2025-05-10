import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy all requests starting with /api to your Spring Boot backend
      '/api': 'http://localhost:8080',
    }
  }
})
