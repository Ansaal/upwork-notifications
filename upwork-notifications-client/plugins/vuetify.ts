import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'dark', // Ensures that the dark theme is used by default
      themes: {
        dark: {
          colors: {
            background: '#121212', // Deep dark grey, almost black
            surface: '#1E1E1E', // Slightly lighter grey than the background
            primary: '#2dab83', // Deep purple used for primary buttons and icons
            secondary: '#6100e8', // Teal color for secondary elements and icons
            accent: '#BB86FC', // Light purple for accents and active elements
            error: '#CF6679', // Red for errors
            info: '#2196F3', // Blue for informational cues
            success: '#4CAF50', // Green for success states
            warning: '#FB8C00', // Orange for warnings
          }
        }
      }
    }
  })
  app.vueApp.use(vuetify)
})