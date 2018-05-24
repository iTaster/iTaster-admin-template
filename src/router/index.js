import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'
import App from '@/App'

// Views
import Dashboard from '@/views/Dashboard'
import Navigator from '@/views/Navigator'

// Views - Pages
import A from '@/views/demo/A'
import B from '@/views/demo/B'
import C from '@/views/demo/C'
import D from '@/views/demo/D'

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
              name: 'itemA',
              component: A
            },
            {
              path: 'b',
              name: 'itemB',
              component: B
            },
            {
              path: 'c',
              name: 'itemC',
              component: C
            },
            {
              path: 'd',
              name: 'itemD',
              component: D
            }
          ]
        }
      ]
    },
  ]
})
