import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // ✅ Set base to '/' for Vercel (or './' if you ever host in a subdirectory)
})
