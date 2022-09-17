import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path";


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@services": path.resolve(__dirname, "./src/services")
    },
  },
  server:{
    proxy:{
      "/api": "https://api.deezer.com"
    }
  },
  plugins: [react()]
})
