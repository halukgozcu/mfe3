import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'camel',
      filename: 'remoteEntry.js',
      exposes: {
        './CamelApp': './src/App.vue',
        './userAgeStore': './src/store/userAgeStore.js'
      },
      shared: ['vue', 'pinia', 'vue-router']
    }),
    compression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    })
  ],
  build: {
    target: 'esnext',
    minify: 'terser',
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false
    },
    outDir: 'dist',
    rollupOptions: {
      output: {
        format: 'esm',
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },
  server: {
    port: parseInt(process.env.VITE_PORT || '18003'),
    cors: true,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  preview: {
    port: parseInt(process.env.VITE_PORT || '18003'),
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
})
