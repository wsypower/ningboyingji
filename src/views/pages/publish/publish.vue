<template>
  <div class="page-publish">
    <d2-container better-scroll>
      <template #header>
        <div class="publish-header">
          <el-button
            size="small"
            type="primary"
            icon="el-icon-circle-plus"
            @click="routerSkip"
          >
            新增发布
          </el-button>
        </div>
      </template>
      <div class="publish">
        这里是新增发布
      </div>
    </d2-container>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    routerSkip() {
      this.$router.push({
        path: '/home/add'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page-publish {
  width: 100%;
  height: 100%;
  position: relative;
  .publish-header {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    padding: 0 20px;
  }
  .publish {
    width: 100%;
    height: 100px;
  }
}
</style>