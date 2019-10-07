import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import ForgotPassword from '../components/ForgotPassword'
import SetPassword from '../components/SetPassword'
import Profile from '../components/Profile'
import EditProfile from '../components/EditProfile'
import SignUp from '../components/SignUp'
import EmailTemplates from '../components/EmailTemplates'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (from.params.brandSlug != undefined) {
          next({name: 'LoginBrand'})
        } else {
          next()
        }
      }
    },
    {
      path: '/login/:brandSlug',
      name: 'LoginBrand',
      component: Login
    },
    {
      path: '/forgot-password',
      name: 'ForgotPassword',
      component: ForgotPassword,
      beforeEnter: (to, from, next) => {
        if (from.params.brandSlug != undefined) {
          next({name: 'ForgotPasswordBrand'})
        } else {
          next()
        }
      }
    },
    {
      path: '/forgot-password/:brandSlug',
      name: 'ForgotPasswordBrand',
      component: ForgotPassword
    },
    {
      path: '/set-password',
      name: 'SetPassword',
      component: SetPassword,
      beforeEnter: (to, from, next) => {
        if (from.params.brandSlug != undefined) {
          next({name: 'SetPasswordBrand'})
        } else {
          next()
        }
      }
    },
    {
      path: '/set-password/:brandSlug',
      name: 'SetPasswordBrand',
      component: SetPassword
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: (to, from, next) => {
        if (from.params.brandSlug != undefined) {
          next({name: 'ProfileBrand'})
        } else {
          next()
        }
      }
    },
    {
      path: '/profile/:brandSlug',
      name: 'ProfileBrand',
      component: Profile
    },
    {
      path: '/edit-profile',
      name: 'EditProfile',
      component: EditProfile,
      beforeEnter: (to, from, next) => {
        if (from.params.brandSlug != undefined) {
          next({name: 'EditProfileBrand'})
        } else {
          next()
        }
      }
    },
    {
      path: '/edit-profile/:brandSlug',
      name: 'EditProfileBrand',
      component: EditProfile
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp,
      beforeEnter: (to, from, next) => {
        if (from.params.brandSlug != undefined) {
          next({name: 'SignUpBrand'})
        } else {
          next()
        }
      }
    },
    {
      path: '/sign-up/:brandSlug',
      name: 'SignUpBrand',
      component: SignUp
    },
    {
      path: '/email-templates',
      name: 'EmailTemplates',
      component: EmailTemplates
    },
  ]
})
