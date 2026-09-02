import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(import.meta.dirname, 'src')}/`
    }
  },
  build: {
    target: 'esnext',
    lib: {
      entry: path.resolve(import.meta.dirname, 'src/index.ts'),
      name: 'Vue3-simple-icons'
    },
    rollupOptions: {
      checks: {
        pluginTimings: false
      },
      external: [
        'vue'
      ],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
