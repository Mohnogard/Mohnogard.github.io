import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Unique per build; used to cache-bust files in public/ (see src/data/site.ts).
    __BUILD_ID__: JSON.stringify(Date.now().toString(36)),
  },
})
