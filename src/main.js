import { createApp } from 'vue'
import './style.css'
import './index.css'
import { createPinia } from 'pinia'

import router from './router/routes'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)


import App from './App.vue'
const app = createApp(App)
app.use(router)

app.use(pinia)
app.mount('#app')
