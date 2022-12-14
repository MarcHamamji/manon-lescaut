import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'

import './assets/main.scss'
import 'leaflet/dist/leaflet.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')

if (import.meta.env.PROD) {
  (async () => {
    const { inject } = await import('@vercel/analytics')
    inject();
  })();
}

