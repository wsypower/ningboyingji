<template>
  <div class="editor">
    <el-button
      type="primary"
      @click="subContent"
    >测试发布</el-button>
    <el-button
      type="primary"
      @click="testCheck"
    >测试单id查看</el-button>
    <Tinymce
      v-model="content"
      :height="300"
    ></Tinymce>
    <!-- 和富文本同步 -->
    <span>和富文本同步</span>
    <div
      class="editor-content"
      v-html="content"
    />
    <!-- 反显示查看内容 -->
    <span>反显示查看内容</span>
    <div
      class="editor-content"
      v-html="textContent"
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
      content: `<h1>123</h1><h2>123</h2><h3>123</h3>`,
      id: null,
      textContent: ''
    }
  },
  mounted() {
    // 获取发布单位
    this.$api.GET_ORGANIZATION().then(res => {
      console.log(res)
    })
  },
  methods: {
    // 测试提交
    subContent() {
      return this.$api
        .POST_ADD_PUBLISH({
          title: '测试填写title',
          type: 0,
          content: this.content
        })
        .then(res => {
          console.log(res)
          const { id } = res
          this.id = id
          console.log(this.id)
        })
    },
    // 测试传递一个id查看
    testCheck() {
      return this.$api.GET_CHECK_PUBLISH({ id: this.id }).then(res => {
        console.log(res)
        const { content } = res
        this.textContent = content
      })
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