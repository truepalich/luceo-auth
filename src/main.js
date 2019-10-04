// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

// import { ValidationProvider, extend } from 'vee-validate';
// import { required } from 'vee-validate/dist/rules';
//
// extend('required', {
//   ...required,
//   message: 'The {_field_} field is required'
// });

Vue.config.productionTip = false


// router.beforeEach((to, from, next) => {
//   if (from.params.brandSlug != undefined) {
//     // next({ name: to.name + 'Brand' })
//     next({ path: '/' })
//   } else {
//     next()
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  template: '<App/>',
  components: { App }
})
