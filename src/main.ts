import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import 'vuetify/styles'
import App from './App.vue'
import Index from './pages/Index.vue'

// Define routes correctly
const routes = [
  {
    path: '/:param',
    component: Index, // Use direct reference instead of a function
  },
]

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
})

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  components,
  directives,
})

const app = createApp(App)

app.use(vuetify)
app.use(router)
app.mount('#app')
