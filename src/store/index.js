import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    brands: [
      {
        name: 'Luceo Sports',
        slug: 'luceo-sports',
        logo: 'http://dev.itirra.com/luceo/liuceo_logo.png'
      },
      {
        name: 'Rising Coaches',
        slug: 'rising-coaches',
        logo: 'http://dev.itirra.com/luceo/rising_coaches_logo.png'
      },
      {
        name: 'NHSBCA',
        slug: 'nhsbca',
        logo: 'http://dev.itirra.com/luceo/nhsbca_logo.png'
      }
    ]
  },
  getters: {
    getBrandBySlug: state => slug => {
      return state.brands.find(brand => brand.slug === slug);
    },
  }
})
