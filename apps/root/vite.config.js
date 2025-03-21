import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig(({ command, mode }) => {
  const getRemoteUrl = (envUrl, serviceName, defaultPort) => {
    // Use environment variable or fallback to default local development URL
    const baseUrl = envUrl || `http://localhost:${defaultPort}`;
    console.log(`${serviceName} URL:`, baseUrl);
    return `${baseUrl}/assets/remoteEntry.js`;
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
      })
    ],
    build: {
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,
      modulePreload: false
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
