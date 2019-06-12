import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import layout from '@/layout/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import('@/pages/dashboard/index'),
          name: 'Dashboard'
        }
      ]
    },
    {
      path: '/table',
      component: layout,
      redirect: '/table/index',
      children: [
        {
          path: 'index',
          component: () => import('@/pages/table/index'),
          name: 'Table'
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/pages/login/index')
    }
  ]
})
