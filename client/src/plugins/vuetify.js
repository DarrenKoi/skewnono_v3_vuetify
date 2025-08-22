/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#6366F1', // Modern indigo
          secondary: '#64748B', // Slate gray
          accent: '#F59E0B', // Amber accent
          error: '#EF4444', // Modern red
          info: '#3B82F6', // Bright blue
          success: '#10B981', // Emerald green
          warning: '#F59E0B', // Amber warning
        },
      },
    },
  },
  defaults: {
    global: {
      font: {
        family: 'Noto Sans KR',
      },
    },
    VCard: {
      rounded: 'md',
    },
    VBtn: {
      rounded: 'md',
    },
  },
})
