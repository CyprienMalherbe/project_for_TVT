import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

// 1️⃣ d’abord installer Pinia
const pinia = createPinia()
app.use(pinia)

// 2️⃣ ensuite installer le router
app.use(router)

app.use(vuetify)

// 3️⃣ enfin monter l’app
app.mount('#app')
