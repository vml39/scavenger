import Vue from 'vue'
import Router from 'vue-router'
import Map from './views/Map.vue'
import Profile from './views/Profile.vue'
import Vendors from './views/Vendors.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'map',
      component: Map
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/vendors',
      name: 'vendors',
      component: Vendors
    }
  ]
})
