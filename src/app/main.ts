import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'works-ui/styles.css'
import "./styles/fonts.css"
import './styles/theme.css'
import App from './app.vue'
import router from './router'
import { i18n } from "@/shared/i18n"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
