<template>
  <div class="publish-index">
    <d2-container>
      <router-view></router-view>
    </d2-container>
  </div>
</template>

<script>
export default {
  name: 'publishIndex'
}
</script>

<style lang="scss" scoped>
.publish-index {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>
