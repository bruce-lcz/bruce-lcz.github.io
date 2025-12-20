import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/', // Change to './' or repository name if deploying to subpath, but bruce-lcz.github.io is root
})
