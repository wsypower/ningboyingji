export default {
  // 快捷键
  // 支持快捷键 例如 ctrl+shift+s
  hotkey: {
    search: {
      open: 's',
      close: 'esc'
    }
  },
  // 侧边栏默认配置
  menu: {
    asideCollapse: false,
    asideTransition: true
  },
  // 在读取持久化数据失败时默认页面
  page: {
    opened: [
      {
        name: 'publish',
        fullPath: '/publish',
        meta: {
          title: '发布列表',
          auth: false
        }
      }
    ]
  },
  // 多页面系统
  tabs: {
    // 是否开启多页面
    show: false
  },
  // 菜单搜索
  search: {
    enable: false
  },
  // 头部显示的工具按钮
  tool: {
    search: false,
    notification: false,
    fullScreen: false,
    theme: false,
    size: false,
    i18n: false,
    color: false
  },
  // 注册的主题
  theme: {
    list: [
      {
        title: '经典蔚蓝',
        name: 'element',
        preview: 'image/theme/element/preview@2x.png'
      },
      {
        title: '经典淡雅',
        name: 'lightblue',
        preview: 'image/theme/lightblue/preview@2x.png'
      },
      {
        title: '暗色模式',
        name: 'chester',
        preview: 'image/theme/chester/preview@2x.png'
      }
    ]
  },
  // 是否默认开启页面切换动画
  transition: {
    active: true
  }
}
