import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig(({ command }) => ({
  plugins: [
    vue(),
    federation({
      name: 'root',
      remotes: {
        apple: command === 'serve' 
          ? 'http://localhost:7001/assets/remoteEntry.js'
          : {
              external: 'http://localhost:7001/assets/remoteEntry.js',
              format: 'esm'
            },
        banana: command === 'serve'
          ? 'http://localhost:7002/assets/remoteEntry.js'
          : {
              external: 'http://localhost:7002/assets/remoteEntry.js',
              format: 'esm'
            },
        camel: command === 'serve'
          ? 'http://localhost:7003/assets/remoteEntry.js'
          : {
              external: 'http://localhost:7003/assets/remoteEntry.js',
              format: 'esm'
            }
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
    port: 7000,
    strictPort: true
  }
}))
