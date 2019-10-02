import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import ForgotPassword from '../components/ForgotPassword'
import SetPassword from '../components/SetPassword'
import Profile from '../components/Profile'
import EditProfile from '../components/EditProfile'
import SignUpStep1 from '../components/SignUpStep1'
import SignUpStep2 from '../components/SignUpStep2'
import SignUpStep3 from '../components/SignUpStep3'
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
      component: Login
    },
    {
      path: '/forgot-password',
      name: 'ForgotPassword',
      component: ForgotPassword
    },
    {
      path: '/set-password',
      name: 'SetPassword',
      component: SetPassword
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/edit-profile',
      name: 'EditProfile',
      component: EditProfile
    },
    {
      path: '/sign-up-step-1',
      name: 'SignUpStep1',
      component: SignUpStep1
    },
    {
      path: '/sign-up-step-2',
      name: 'SignUpStep2',
      component: SignUpStep2
    },
    {
      path: '/sign-up-step-3',
      name: 'SignUpStep3',
      component: SignUpStep3
    },
    {
      path: '/email-templates',
      name: 'EmailTemplates',
      component: EmailTemplates
    },
  ]
})
