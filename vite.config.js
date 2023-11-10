import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    sourcemap:false,
    lib: {
      format: 'umd',
      entry: './lib/index.js',
      name: 'youloge.qrcode',
      fileName: (format) => `youloge.qrcode.${format}.js`,
    }
  }
})
