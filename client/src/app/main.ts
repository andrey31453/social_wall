// imports
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import app from './app.vue'

const vue_app = createApp(app)

// styles

import '@styles/reset.scss'
import '@styles/default.scss'
import '@styles/fonts.scss'

// vuetify

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
  },

  components,
  directives,
})
vue_app.use(vuetify)

// pinia

const pinia = createPinia()
vue_app.use(pinia)

// mount

vue_app.mount('#app')
