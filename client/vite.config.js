import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  
  plugins: [react()],
  resolve: {
    alias: {
      'jwt-decode': 'jwt-decode',
    },
    server : {
      proxy: {
        '/admin': 'http://localhost:5000'
      }
    }
    
  },
});

