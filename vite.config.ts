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
        '/api': {
          target: 'http://localhost:5173',
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, '')
        }
      }
    };
  } else {
    config.server = {
      proxy: {
        '/api': {
          target: 'https://seu-proxy-em-producao.com',
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, ''),
        },
      },
    };
  }

  return config
})
