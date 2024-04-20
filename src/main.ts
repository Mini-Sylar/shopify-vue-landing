import './assets/main.css'

import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.vue'

import { MotionPlugin } from '@vueuse/motion'
//@ts-ignore
import { GesturePlugin } from '@vueuse/gesture'

export const createApp = ViteSSG(App, ({ app }) => {
  app.use(MotionPlugin)
  app.use(GesturePlugin)
})
