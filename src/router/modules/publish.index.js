export default [
  // 首页
  {
    path: 'home',
    name: 'home',
    redirect: { name: 'publish' },
    meta: {
      auth: true,
      title: '首页'
    },
    component: () =>
      import(/* webpackChunkName: "home" */ '@/views/pages/publish/index.vue'),
    children: [
      {
        path: 'publish',
        name: 'publish',
        meta: {
          title: '测试缓存页面',
          auth: true,
          cache: true
        },
        component: () =>
          import(
            /* webpackChunkName: "publish" */ '@/views/pages/publish/publish.vue'
          )
      },
      {
        path: 'add',
        name: 'add',
        meta: {
          title: '测试缓存页面',
          auth: true,
          cache: true
        },
        component: () =>
          import(
            /* webpackChunkName: "publish-add" */ '@/views/pages/publish/add.vue'
          )
      }
    ]
  }
]
