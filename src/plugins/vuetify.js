// Styles
// import '@mdi/font/css/materialdesignicons.css'
// import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-pro'
import '@/styles/main.scss'
import { VDatePicker } from 'vuetify/labs/VDatePicker'
import fa from '@fortawesome/fontawesome-pro/css/all.css'
// import { aliases, mdi } from 'vuetify/lib/iconsets/mdi'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const lightTheme = {
  icons: {
    defaultSet: 'fa',
    sets: {
      fa
    },
  },
  dark: false,
  colors: {
    primary: "#2848EE",
    secondary: "#006876",
    tertiary: "#006783",
    error: "#B4271F",
    info: "#2980b9",
    success: "#41A447",
    warning: "#FFCA28",
    blank: "#ffffff"
  }
};

const darkTheme = {
  dark: true,
  colors: {
    primary: "#d35400",
    secondary: "#8e44ad",
    background: "#2f3640",
    error: "#c0392b",
    info: "#2980b9",
    success: "#27ae60",
    warning: "#f1c40f",
  },
};

export default createVuetify({
  components: {
    VDatePicker,
  },
  directives,
  theme: {
    defaultTheme: "light",
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
  },
});

