import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,         // binds to 0.0.0.0 (required in Docker)
    watch: {
      usePolling: true, // enables polling (needed in some Docker setups)
    },
    port: 5173,         // optional, default is 5173
  }
})
