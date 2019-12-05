import Vue from 'vue'
import Router from 'vue-router'
import Progress from './views/Progress.vue'
import Vendors from './views/Vendors.vue'
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
