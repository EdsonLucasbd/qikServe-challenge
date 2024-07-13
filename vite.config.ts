import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({mode}) => {
  const config = {
    plugins: [react()],
    server: {}
  };

  if(mode === 'development') {
    config.server = {
      proxy: {
        '/api': {
          target: 'https://cdn-dev.preoday.com',
          changeOrigin: true,
          secure: false,
          rewrite: (path: string) => path.replace(/^\/api/, '')
        }
      }
    }
  } else {
    config.server = {
      proxy: {
        '/*': {
          target: 'https://cdn-dev.preoday.com',
          changeOrigin: true,
          secure: false,
          rewrite: (path: string) => path.replace(/^\/api/, '')
        }
      }
    }
  }

  return config
})
