import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'camel',
      filename: 'remoteEntry.js',
      exposes: {
        './CamelApp': './src/App.vue'
      },
      shared: ['vue']
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    modulePreload: false,
    outDir: 'dist',
    rollupOptions: {
      output: {
        format: 'esm',
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  server: {
    port: 18003,
    cors: true,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  preview: {
    port: 18003,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
})
