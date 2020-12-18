import { mapState } from 'vuex'
import { createMenu } from '../libs/util.menu'
import BScroll from 'better-scroll'
import util from '@/libs/util.js'
export default {
  name: 'd2-layout-header-aside-menu-side',
  render(h) {
    return (
      <div class="d2-layout-header-aside-menu-side">
        <el-menu
          collapse={this.asideCollapse}
          collapseTransition={this.asideTransition}
          uniqueOpened={true}
          defaultActive={this.active}
          ref="menu"
          onSelect={this.handleMenuSelect}
        >
          {this.aside.map(menu => createMenu.call(this, h, menu))}
        </el-menu>
        {this.aside.length === 0 && !this.asideCollapse ? (
          <div
            class="d2-layout-header-aside-menu-empty"
            flex="dir:top main:center cross:center"
          >
            <d2-icon name="inbox"></d2-icon>
            <span>没有侧栏菜单</span>
          </div>
        ) : null}
      </div>
    )
  },
  data() {
    return {
      asideHeight: 300,
      BS: null,
      active: ''
    }
  },
  computed: {
    ...mapState('w-admin/menu', ['aside', 'asideCollapse', 'asideTransition'])
  },
  watch: {
    // 折叠和展开菜单的时候销毁 better scroll
    asideCollapse(val) {
      this.scrollDestroy()
      setTimeout(() => {
        this.scrollInit()
      }, 500)
    },
    '$route.matched': {
      handler(val) {
        if (this.active !== '') {
          const baseActive = this.active.match(/(^\/[^\/]*)/g)[0]
          if (~val[val.length - 1].path.search(baseActive)) {
            return
          }
        }

        this.active = val[val.length - 1].path
        this.$refs.headerMenu &&
          this.$nextTick(() => {
            this.setSliderLine()
            this.sliderAnima()
          })
      },
      immediate: true
    }
  },
  mounted() {
    this.scrollInit()
  },
  beforeDestroy() {
    this.scrollDestroy()
  },
  methods: {
    handleMenuSelect(index, indexPath) {
      if (/^w-menu-empty-\d+$/.test(index) || index === undefined) {
        this.$message.warning('功能暂未上线')
      } else if (/^https:\/\/|http:\/\//.test(index)) {
        util.open(index)
      } else {
        this.$router.push({
          path: index
        })
      }
    },
    scrollInit() {
      this.BS = new BScroll(this.$el, {
        mouseWheel: true,
        click: true,
        // 如果你愿意可以打开显示滚动条
        scrollbar: {
          fade: true,
          interactive: false
        }
      })
    },
    scrollDestroy() {
      try {
        this.BS.destroy()
      } catch (e) {
        delete this.BS
        this.BS = null
      }
    }
  }
}
