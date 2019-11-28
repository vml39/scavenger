import Vue from 'vue'
import Router from 'vue-router'
import Progress from './views/Progress.vue'
import Vendors from './views/Vendors.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'progress',
      component: Progress
    },
    {
      path: '/vendors',
      name: 'vendors',
      component: Vendors
    },
    {
      path: '*',
      component: Map
    }
  ]
})
