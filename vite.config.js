import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as crypto from 'crypto';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {},
    global: {}
  },
  optimizeDeps: {
    include: ['crypto'],
  },
})
