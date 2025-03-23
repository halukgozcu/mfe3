import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
import compression from 'vite-plugin-compression'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      vue(),
      federation({
        name: 'banana',
        filename: 'remoteEntry.js',
        exposes: {
          './BananaApp': './src/App.vue',
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
    css: {
      postcss: {},
      modules: {
        scopeBehaviour: 'local'
      }
    },
    build: {
      target: 'esnext',
      minify: mode === 'production',
      cssCodeSplit: mode === 'production',
      modulePreload: {
        polyfill: false
      },
      outDir: 'dist',
      rollupOptions: {
        output: {
          minifyInternalExports: false,
          format: 'esm',
          entryFileNames: mode === 'production' 
            ? 'assets/[name].[hash].js'
            : 'assets/[name].js',
          chunkFileNames: mode === 'production'
            ? 'assets/[name].[hash].js'
            : 'assets/[name].js',
          assetFileNames: mode === 'production'
            ? 'assets/[name].[hash].[ext]'
            : 'assets/[name].[ext]'
        }
      }
    },
    server: {
      port: parseInt(env.VITE_BANANA_PORT || '18002'),
      cors: true,
      strictPort: true,
      host: env.VITE_HOST || '0.0.0.0',
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    },
    preview: {
      port: parseInt(env.VITE_BANANA_PORT || '18002'),
      strictPort: true,
      host: env.VITE_HOST || '0.0.0.0',
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }
  }
})
