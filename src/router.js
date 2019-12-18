import Vue from 'vue'
import Router from 'vue-router'
import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'

Vue.use(SuiVue)
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'progress',
      component: () => import('./views/Progress.vue')
    },
    {
      path: '/vendors',
      name: 'vendors',
      component: () => import('./views/Vendors.vue')
    },
    {
      path: '*',
      component: () => import('./views/Progress.vue')
    }
  ]
})
