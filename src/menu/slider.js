const slider = [
  //   { path: '/home', title: '发布管理', icon: 'podcast' },
  //   { path: '/home/add', title: '测试', icon: 'podcast' }
  { path: '/home/publish', title: '首页展示数据', icon: 'home' },
  {
    title: '功能试验',
    icon: 'folder-o',
    children: [
      { path: '/page2', title: '请求demo' },
      { path: '/page3', title: '测试组件大小调整' }
    ]
  },
  {
    title: '三级页面系列',
    icon: 'folder-o',
    children: [
      {
        title: '页面 3-1 展示数据',
        children: [
          { title: '页面 3-1-1 展示数据' },
          { title: '页面 3-2-2 展示数据' },
          { title: '页面 3-3-3 展示数据' }
        ]
      },
      { title: '页面 3-2 展示数据' },
      { title: '页面 3-3 展示数据' }
    ]
  },
  {
    title: '四级页面系列',
    icon: 'folder-o',
    children: [
      {
        title: '页面 3-1 展示数据',
        children: [
          { title: '页面 3-1-1' },
          { title: '页面 3-2-2' },
          {
            title: '页面 3-3-3',
            children: [
              { title: '页面 4 展示数据' },
              { title: '页面 4 展示数据' },
              { title: '页面 4 展示数据' }
            ]
          }
        ]
      }
    ]
  }
]
export default slider
