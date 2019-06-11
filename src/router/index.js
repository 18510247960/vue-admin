import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/layout/main')
    },
    {
      path: '/login',
      component: () => import('@/pages/login/index')
    }
  ]
})
