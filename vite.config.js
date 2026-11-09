import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Repo name is CodeWithRoni.github.io (user site), so base must be '/'
// If you ever rename the repo to e.g. "portfolio", change base to '/portfolio/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
