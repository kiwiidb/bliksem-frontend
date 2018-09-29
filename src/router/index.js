import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Donation from '@/components/Donation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/donate',
      name: 'Donation',
      component: Donation
    }
  ]
})
