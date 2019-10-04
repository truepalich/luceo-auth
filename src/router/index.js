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
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/email-templates',
      name: 'EmailTemplates',
      component: EmailTemplates
    },
  ]
})
