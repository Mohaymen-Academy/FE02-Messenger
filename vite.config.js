import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
const manifestForPlugIn = {
  registerType: 'prompt',
  includeAssests: ['favicon.ico', 'apple-touc-icon.png', 'masked-icon.svg'],
  manifest: {
    name: 'rasa-app',
    short_name: 'rasa',
    description: 'a messenger and social media that is fun to use',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'favicon'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'favicon'
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'apple touch icon'
      },
      {
        src: '/maskable_icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ],
    theme_color: '#171717',
    background_color: '#f0e7db',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    orientation: 'portrait'
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), 
    // VitePWA(manifestForPlugIn)
  ],
  build: {
    outDir: './build'
  },
  server: {
    port: 5173
  }
});
