export default [
  // 演示页面

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
