import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from '@/router/router.js'

const barBrainApp = createApp(App)
barBrainApp.use(router)
barBrainApp.mount('#app')