import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig(({ command, mode }) => {
  const getRemoteUrl = (port) => {
    return command === 'serve' 
      ? `http://localhost:${port}/assets/remoteEntry.js`
      : `http://localhost:${port}/assets/remoteEntry.js`
  }

  return {
    plugins: [
      vue(),
      federation({
        name: 'root',
        remotes: {
          apple: getRemoteUrl(18001),
          banana: getRemoteUrl(18002),
          camel: getRemoteUrl(18003)
        },
        shared: ['vue']
      })
    ],
    build: {
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,
      modulePreload: false
    },
    server: { 
      port: 18000,
      strictPort: true,
      cors: true,
      host: '0.0.0.0'
    },
    preview: {
      port: 18000,
      strictPort: true,
      cors: true,
      host: '0.0.0.0'
    }
  }
})
