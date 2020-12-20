<template>
  <div class="list">
    list
    <el-button
      type="primary"
      @click="routerToAdd"
    >跳转到add</el-button>
  </div>
</template>

<script>
export default {
  name: 'list',
  methods: {
    routerToAdd() {
      this.$router.push('/publish/add')
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  width: 1490px;
  height: 1000px;
  background-color: red;
}
</style>
