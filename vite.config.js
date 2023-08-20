import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

const manifestForPlugIn = {};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'rasa-app',
        short_name: 'rasa',
        description: 'a messenger and social media that is fun to use',
        icons: [
          {
            src: '/public/images/pwa/android/android-launchericon-512-512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/public/images/pwa/android/android-launchericon-192-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/public/images/pwa/android/android-launchericon-144-144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: '/public/images/pwa/ios/180.png',
            sizes: '180x180',
            type: 'image/png'
          },
          {
            src: '/public/images/pwa/ios/192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ],
        theme_color: '#171717',
        background_color: '#f0e7db',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        orientation: 'portrait'
      },
      strategies: 'injectManifest',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      injectRegister: 'auto',
      devOptions: {
        enabled: true
      }
    })
  ],
  build: {
    outDir: './build'
  },
  server: {
    port: 5173
  }
});
