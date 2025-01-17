/// <reference types="vite-ssg" />

import { fileURLToPath, URL } from 'node:url'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import generateSitemap from 'vite-ssg-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        (componentName) => {
          if (componentName.startsWith('U')) {
            return `/src/components/UI/${componentName}.vue`
          }
        }
      ],
      dts: 'src/components.d.ts'
    })
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  ssgOptions: {
    onFinished() {
      generateSitemap({
        hostname: 'https://shopify-vue-template.vercel.app/'
      })
    }
  }
})
