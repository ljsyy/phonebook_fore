import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login'
import phoneBook from '../pages/phoneBook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/phoneBook',
      name: 'phoneBook',
      component: phoneBook
    }
  ]
})
