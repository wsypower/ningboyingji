<template>
  <div class="editor">
    <el-button
      type="primary"
      @click="checkData"
    >主要按钮</el-button>
    <Tinymce
      v-model="content"
      :height="300"
    ></Tinymce>
    <div
      class="editor-content"
      v-html="content"
    />

  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
export default {
  name: 'editor',
  components: {
    Tinymce
  },
  data() {
    return {
      content: `<h1>123</h1><h2>123</h2><h3>123</h3>`
    }
  },
  methods: {
    checkData() {
      console.log(this.content)
    }
  }
}
</script>

<style lang="scss" scoped>
.editor {
  width: 100%;
  height: 1000px;
  .editor-content {
    margin-top: 20px;
  }
}
</style>