import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/colour_generator/',
  build: {
    outDir: 'docs'
  }
})