import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'
import App from '@/App'
// Views
import Dashboard from '@/views/Dashboard'
import Navigator from '@/views/Navigator'

// Views - Pages
import A from '@/views/pages/A'
import B from '@/views/pages/B'
import C from '@/views/pages/C'

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
          path: 'navigator',
          name: 'navigator',
          component:Navigator
        },
        {
          path: 'pages',
          redirect: '/pages/a',
          name: 'A',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'a',
              name: 'A-A',
              component: A
            },
            {
              path: 'b',
              name: 'A-B',
              component: B
            },
            {
              path: 'c',
              name: 'A-C',
              component: C
            }
          ]
        }
      ]
    },
  ]
})
