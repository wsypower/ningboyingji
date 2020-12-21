export default [
  // 首页
  {
    path: 'publish',
    name: 'publish',
    redirect: {
      name: 'list'
    },
    meta: {
      auth: true,
      title: '发布页面'
    },
    component: () =>
      import(/* webpackChunkName: "index" */ '@/views/pages/publish/index'),
    children: [
      // 演示页面
      {
        path: 'add',
        name: 'add',
        meta: {
          title: '新增页面',
          auth: true
        },
        component: () =>
          import(/* webpackChunkName: "add" */ '@/views/pages/publish/add')
      },
      {
        path: 'list',
        name: 'list',
        meta: {
          title: '发布列表',
          auth: true
        },
        component: () =>
          import(/* webpackChunkName: "list" */ '@/views/pages/publish/list')
      },
      {
        path: 'editor',
        name: 'editor',
        meta: {
          title: '发布列表',
          auth: true
        },
        component: () =>
          import(
            /* webpackChunkName: "editor" */ '@/views/pages/publish/editor'
          )
      }
    ]
  }
]
