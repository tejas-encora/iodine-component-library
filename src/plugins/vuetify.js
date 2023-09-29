// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { VDatePicker } from 'vuetify/labs/VDatePicker'
// import '/dist/style.css'

// Vuetify
import { createVuetify } from 'vuetify'
export default createVuetify({
  components: {
    VDatePicker,
  },
    theme: {
      themes: {
        light: {
          colors: {
            primary: '#1976D2',
            secondary: '#424242',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107',
            iodinePurple: '#59336D'
          }
        },
      },
    },
  })
