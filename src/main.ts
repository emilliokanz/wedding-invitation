import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles' // Import Vuetify's base styles
import { createVuetify } from 'vuetify' // Import createVuetify from Vuetify
import * as components from 'vuetify/components' // Import Vuetify components
import * as directives from 'vuetify/directives' // Import Vuetify directives

const vuetify = createVuetify({
  components, // Register Vuetify components
  directives, // Register Vuetify directives
})

const app = createApp(App)

app.use(vuetify) // Use Vuetify
app.mount('#app')
