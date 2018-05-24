export default {
  items: [
    {
      name: 'dashboard',
      url: '/dashboard',
      icon: 'el-icon-menu',
    },
    {
      name: 'navigator',
      url: '/navigator',
      icon: 'el-icon-bell',
    },
    {
      name: 'group',
      url: '/pages/a',
      icon: 'el-icon-goods',
      children: [
        {
          name: 'itemA',
          url: '/pages/a',
        },
        {
          name: 'itemB',
          url: '/pages/b',
        },
        {
          name: 'itemC',
          url: '/pages/c',
          children:[
            {
              name: 'itemC1',
              url: '/pages/c',
            },
            {
              name: 'itemC2',
              url: '/pages/d',
            }
          ]
        }
      ]
    },
  ]
}
