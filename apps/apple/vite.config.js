import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'apple',
      filename: 'remoteEntry.js',
      exposes: {
        './AppleApp': './src/App.vue',
        './Home': './src/views/Home.vue',
        './About': './src/views/About.vue',
        './Profile': './src/views/Profile.vue',
        './store': './src/store/userStore.js'
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
    port: parseInt(process.env.VITE_PORT || '18001'),
    cors: true,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  preview: {
    port: parseInt(process.env.VITE_PORT || '18001'),
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
})
