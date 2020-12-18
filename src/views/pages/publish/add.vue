<template>
  <div class="publish-add">
    <d2-container better-scroll>
      <template #header>
        <div class="publish-add-header">
          <el-button
            size="small"
            type="primary"
            icon="el-icon-circle-plus"
            @click="routerSkip"
          >
            返回
          </el-button>
        </div>
      </template>
      <div class="publish-add-main">
        123
      </div>
    </d2-container>
  </div>
</template>

<script>
export default {
  name: 'add',
  methods: {
    routerSkip() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.publish-add {
  width: 100%;
  height: 100%;
  .publish-add-header {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }
  .publish-add-main {
    width: 100%;
    height: 1000px;
  }
}
</style>