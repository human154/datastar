import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    minify: 'esbuild',
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      name: 'DataStar',
      fileName: 'data-star',
      formats: ['es', 'umd', 'iife'],
    },
  },
})