import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({
  mode
}) => {
  const config = {
    plugins: [react()],
    server: {}
  };

  if (mode === 'development') {
    config.server = {
      proxy: {
        '/proxy': {
          target: 'http://localhost:5173',
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, '')
        }
      }
    };
  } else {
    config.server = {
      proxy: {
        '/proxy': {
          target: 'https://cdn-dev.preoday.com',
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, ''),
        },
      },
    };
  }

  return config
})
