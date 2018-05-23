import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'

// Views - Pages
import A from '@/views/pages/A'
import B from '@/views/pages/B'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass:'',
  linkExactActiveClass:'',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'a',
          name: 'A',
          component: A
        },
        {
          path: 'b',
          name: 'B',
          component: B
        },
      ]
    },
  ]
})
