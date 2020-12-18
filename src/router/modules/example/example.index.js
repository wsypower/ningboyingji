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
      import(/* webpackChunkName: "index" */ '@/views/pages/publish/index.vue'),
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
            /* webpackChunkName: "page1" */ '@/views/pages/publish/publish.vue'
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
            /* webpackChunkName: "page1" */ '@/views/pages/publish/add.vue'
          )
      }
    ]
  },
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
