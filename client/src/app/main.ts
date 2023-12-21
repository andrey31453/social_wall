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
import { use_vuetify } from '@entities'

const vuetify = use_vuetify()
vue_app.use(vuetify)

// pinia

const pinia = createPinia()
vue_app.use(pinia)

// mount

vue_app.mount('#app')
