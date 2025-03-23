import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
import viteCompression from 'vite-plugin-compression'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const getRemoteUrl = (envUrl, serviceName, defaultPort) => {
    const baseUrl = envUrl || `http://localhost:${defaultPort}`
    console.log(`[${mode}] ${serviceName} URL:`, baseUrl)
    return `${baseUrl}/assets/remoteEntry.js`
  }

  return {
    plugins: [
      vue(),
      federation({
        name: 'root',
        remotes: {
          apple: getRemoteUrl(process.env.VITE_APP_APPLE_URL, 'apple', 18001),
          banana: getRemoteUrl(process.env.VITE_APP_BANANA_URL, 'banana', 18002),
          camel: getRemoteUrl(process.env.VITE_APP_CAMEL_URL, 'camel', 18003)
        },
        shared: {
          vue: {
            singleton: true,
            requiredVersion: false
          },
          'vue-router': {
            singleton: true,
            requiredVersion: false
          },
          pinia: {
            singleton: true,
            requiredVersion: false
          }
        }
      }),
      viteCompression({ algorithm: 'brotliCompress' }) // Add Brotli compression
    ],
    build: {
      target: 'esnext',
      minify: mode === 'production',
      cssCodeSplit: mode === 'production',
      modulePreload: true,
      rollupOptions: {
        output: {
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
      port: parseInt(env.VITE_ROOT_PORT || '18000'),
      strictPort: true,
      cors: true,
      host: env.VITE_HOST
    },
    preview: {
      port: parseInt(env.VITE_ROOT_PORT || '18000'),
      strictPort: true,
      cors: true,
      host: env.VITE_HOST
    }
  }
})
