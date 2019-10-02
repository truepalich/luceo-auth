import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'
// import Vuelidate from 'vuelidate'

Vue.use(Vuetify)
// Vue.use(Vuelidate)

Vue.config.productionTip = false

export default new Vuetify({
  theme: {
    themes: {
      dark: {
        formBut1: colors.orange.darken3,
        selectedColors: colors.amber.darken4,
        appsBut: colors.grey.darken1,
      },
    },
  },
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
})
