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
        './About': './src/pages/About.vue', // Fixed path to match actual file location
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
  css: {
    postcss: {},
    modules: {
      scopeBehaviour: 'local'
    }
  },
  build: {
    target: 'esnext',
    minify: false, // Disable minification for debugging
    cssCodeSplit: false, // Disable CSS code splitting temporarily
    modulePreload: {
      polyfill: false
    },
    rollupOptions: {
      output: {
        minifyInternalExports: false,
        format: 'esm',
        entryFileNames: 'assets/[name].js', // Remove hash for debugging
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
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
