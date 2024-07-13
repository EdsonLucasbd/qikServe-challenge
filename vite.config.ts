import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://cdn-dev.preoday.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => {
          if (path.startsWith('/api/challenge/venue')) {
            return path.replace('/api/challenge/venue', '/challenge/venue');
          } else if (path.startsWith('/api/challenge/menu')) {
            return path.replace('/api/challenge/menu', '/challenge/menu');
          } else {
            return path;
          }
        }
      }
    }
  }
})
