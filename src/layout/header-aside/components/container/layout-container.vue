<template>
  <div
    class="layout-container"
    flex
  >
    <!-- 主体 侧边栏 -->
    <div
      flex-box="0"
      ref="aside"
      :class="{
        'w-theme-container-aside': true,
        'w-theme-container-transition': asideTransition
      }"
      :style="{
        width: asideCollapse ? asideWidthCollapse : asideWidth,
        opacity: this.searchActive ? 0.5 : 1
      }"
    >
      <d2-menu-side />
    </div>
    <!-- 主体 -->
    <div
      class="w-theme-container-main"
      flex-box="1"
      flex
    >
      <!-- 搜索 -->
      <transition name="fade-scale">
        <div
          v-if="searchActive"
          class="w-theme-container-main-layer"
          flex
        >
          <d2-panel-search
            ref="panelSearch"
            @close="searchPanelClose"
          />
        </div>
      </transition>
      <!-- 内容 -->
      <transition name="fade-scale">
        <div
          v-if="!searchActive"
          class="w-theme-container-main-layer"
          flex="dir:top"
        >
          <!-- tab -->
          <div
            class="w-theme-container-main-header"
            flex-box="0"
            v-if='setting.tabs.show'
          >
            <d2-tabs />
          </div>
          <!-- 页面 -->
          <div
            class="w-theme-container-main-body"
            flex-box="1"
          >
            <transition :name="transitionActive ? 'fade-transverse' : ''">
              <keep-alive :include="keepAlive">
                <router-view
                  :key="routerViewKey"
                  class="layout-content-main-posions"
                />
              </keep-alive>
            </transition>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import d2MenuSide from '../menu-side'
import d2Tabs from '../tabs'
import { mapState } from 'vuex'
import mixinSearch from '../../mixins/search'
import setting from '@/setting'
export default {
  name: 'w-layout-container',
  mixins: [mixinSearch],
  components: {
    d2MenuSide,
    d2Tabs
  },
  data() {
    return {
      // [侧边栏宽度] 正常状态
      asideWidth: '256px',
      // [侧边栏宽度] 折叠状态
      asideWidthCollapse: '65px',
      setting: setting
    }
  },
  computed: {
    ...mapState('w-admin', {
      keepAlive: state => state.page.keepAlive,
      transitionActive: state => state.transition.active,
      asideCollapse: state => state.menu.asideCollapse,
      asideTransition: state => state.menu.asideTransition
    }),
    /**
     * @description 用来实现带参路由的缓存
     */
    routerViewKey() {
      // 默认情况下 key 类似 __transition-n-/foo
      // 这里的字符串操作是为了最终 key 的格式和原来相同 类似 __transition-n-__stamp-time-/foo
      const stamp = this.$route.meta[`__stamp-${this.$route.path}`] || ''
      return `${stamp ? `__stamp-${stamp}-` : ''}${this.$route.path}`
    }
  }
}
</script>
<style lang="scss">
// 注册主题
@import "~@/assets/style/theme/register.scss";
.layout-container {
  width: 100%;
  height: 100%;
}
</style>
