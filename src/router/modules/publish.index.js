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
      import(
        /* webpackChunkName: "publish" */ '@/views/pages/publish/index.vue'
      )
    // children: (pre => [])('home')
  },
  {
    path: 'home/add',
    name: 'add',
    meta: {
      title: '新增发布',
      auth: true
    },
    component: () =>
      import(
        /* webpackChunkName: "publish-add" */ '@/views/pages/publish/add.vue'
      )
  }
]
