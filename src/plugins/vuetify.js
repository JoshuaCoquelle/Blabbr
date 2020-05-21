import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: '#229DFA',
        success: '#00d05e'
      },
      light: {
        primary: '#229DFA',
        success: '#00d05e'
      }
    }
  }
})
