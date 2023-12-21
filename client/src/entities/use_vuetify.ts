import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { light_theme } from '@consts'

export const use_vuetify = () =>
  createVuetify({
    theme: {
      defaultTheme: 'dark',
      themes: {
        light_theme,
      },
    },

    components,
    directives,
  })
