import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    brands: [
      {
        name: 'Luceo Sports',
        slug: 'luceo-sports',
        logo: 'http://dev.itirra.com/luceo/liuceo_logo.png',
        primaryColor: '#ef6c00',
        secondaryColor: '#2196f3',
        emailFrom: 'community@luceosports.com'
      },
      {
        name: 'Rising Coaches',
        slug: 'rising-coaches',
        logo: 'http://dev.itirra.com/luceo/rising_coaches_logo.png',
        primaryColor: '#F16636',
        secondaryColor: '#00123C',
        emailFrom: 'community@risingcoaches.com'
      },
      {
        name: 'NHSBCA',
        slug: 'nhsbca',
        logo: 'http://dev.itirra.com/luceo/nhsbca_logo.png',
        primaryColor: '#BE1D2D',
        secondaryColor: '#013157',
        emailFrom: 'community@nhsbca.org'
      }
    ]
  },
  getters: {
    getBrandBySlug: state => slug => {
      return state.brands.find(brand => brand.slug === slug);
    },
  }
})
