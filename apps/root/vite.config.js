import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
import viteCompression from 'vite-plugin-compression'

export default defineConfig(({ command, mode }) => {
  const getRemoteUrl = (envUrl, serviceName, defaultPort) => {
    const baseUrl = envUrl || `http://localhost:${defaultPort}`
    console.log(`${serviceName} URL:`, baseUrl)
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
        shared: ['vue', 'pinia', 'vue-router']
      }),
      viteCompression({ algorithm: 'brotliCompress' }) // Add Brotli compression
    ],
    build: {
      target: 'esnext',
      minify: 'terser', // Enable minification
      cssCodeSplit: true,
      modulePreload: true,
      rollupOptions: {
        output: {
          format: 'esm',
          entryFileNames: 'assets/[name].[hash].js', // Add hash for cache busting
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]'
        }
      }
    },
    server: {
      port: parseInt(process.env.VITE_PORT || '18000'),
      strictPort: true,
      cors: true,
      host: '0.0.0.0'
    },
    preview: {
      port: parseInt(process.env.VITE_PORT || '18000'),
      strictPort: true,
      cors: true,
      host: '0.0.0.0'
    }
  }
})
