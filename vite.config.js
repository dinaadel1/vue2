import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// vite.config.js
export default defineConfig({
  define: { 'process.env': {} },
  plugins: [vue()],
  resolve: { alias: { 'vue': 'vue/dist/vue.esm-bundler.js' } }
})