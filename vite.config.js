 // vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Ensure the base path matches your GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio--Shivansh/', // Adjust to match your repo
  resolve: {
    extensions: ['.js', '.jsx'], // Include .jsx file extensions
  },
})
