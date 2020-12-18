<template>
  <div class="publish-add">
    <d2-container better-scroll>
      <template #header>
        <div class="publish-add-header">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home/publish' }">发布管理</el-breadcrumb-item>
            <el-breadcrumb-item>新增发布</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </template>
      <div class="publish-add-main">
        这是内容发布页面
      </div>
    </d2-container>
  </div>
</template>

<script>
export default {
  name: 'add',
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.publish-add {
  width: 100%;
  height: 100%;
  position: relative;
  .publish-add-header {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }
  .publish-add-main {
    width: 100%;
    height: 100px;
  }
  ::v-deep {
    .el-breadcrumb__inner {
      &.is-link {
        color: #409eff;
      }
    }
  }
}
</style>