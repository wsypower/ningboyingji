export default [
  // 发布管理页面
  {
    path: 'home',
    name: 'home',
    meta: {
      title: '发布管理',
      auth: true
    },
    component: () =>
      import(/* webpackChunkName: "page5" */ '@/views/pages/publish/index.vue')
  },
  {
    path: 'add',
    name: 'add',
    hidden: true,
    meta: {
      title: '新增发布',
      auth: true
    },
    component: () =>
      import(/* webpackChunkName: "page5" */ '@/views/pages/publish/add.vue')
  }
]
