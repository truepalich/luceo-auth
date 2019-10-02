// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from './plugins/vuetify'

// import { ValidationProvider, extend } from 'vee-validate';
// import { required } from 'vee-validate/dist/rules';
//
// extend('required', {
//   ...required,
//   message: 'The {_field_} field is required'
// });

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  template: '<App/>',
  components: { App }
})
