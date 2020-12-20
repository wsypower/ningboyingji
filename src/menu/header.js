const header = [
  {
    title: '首页',
    icon: 'home'
  },
  {
    path: '/publish',
    title: '发布平台',
    icon: 'folder-o',
    children: [
      {
        path: '/publish',
        title: '发布平台',
        icon: 'home'
      },
      {
        title: '综合驾驶仓',
        icon: 'folder-o'
      },
      {
        title: '防范防治',
        icon: 'folder-o'
      },
      {
        title: '应急救援',
        icon: 'folder-o'
      },
      {
        title: '危化运输',
        icon: 'folder-o'
      }
    ]
  }
]
export default header
