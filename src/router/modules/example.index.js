export default [
  // // 首页
  // {
  //   path: 'index',
  //   name: 'index',
  //   meta: {
  //     auth: true
  //   },
  //   component: () =>
  //     import(/* webpackChunkName: "index" */ '@/views/system/index')
  // },
  // 演示页面
  {
    path: 'page1',
    name: 'page1',
    meta: {
      title: '页面 1',
      auth: true
    },
    component: () =>
      import(/* webpackChunkName: "page1" */ '@/views/demo/page1')
  },
  {
    path: 'page2',
    name: 'page2',
    meta: {
      title: '页面 2',
      auth: true
    },
    component: () =>
      import(/* webpackChunkName: "page2" */ '@/views/demo/page2')
  },
  {
    path: 'page3',
    name: 'page3',
    meta: {
      title: '页面 3',
      auth: true
    },
    component: () =>
      import(/* webpackChunkName: "page3" */ '@/views/demo/page3')
  }
]