<template>
  <div class="add">
    add
    <el-button
      type="primary"
      @click="routerToAdd"
    >跳转到list</el-button>
  </div>
</template>

<script>
export default {
  name: 'add',
  methods: {
    routerToAdd() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.add {
  width: 100%;
  height: 1500px;
}
</style>
