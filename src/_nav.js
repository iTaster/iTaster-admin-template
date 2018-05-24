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
      group:true,
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
        }
      ]
    },
  ]
}
