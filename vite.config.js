import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite 설정
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
})
