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
      minify: mode === 'production',
      cssCodeSplit: mode === 'production',
      modulePreload: {
        polyfill: false
      },
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
      port: parseInt(env.VITE_APPLE_PORT || '18001'),
      cors: true,
      strictPort: true,
      host: env.VITE_HOST || '0.0.0.0'
    },
    preview: {
      port: parseInt(env.VITE_APPLE_PORT || '18001'),
      strictPort: true,
      host: env.VITE_HOST || '0.0.0.0'
    }
  }
})
