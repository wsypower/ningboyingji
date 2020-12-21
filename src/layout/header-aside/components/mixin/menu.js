import util from '@/libs/util.js'

export default {
  methods: {
    handleMenuSelect(index, indexPath) {
      if (/^w-menu-empty-\d+$/.test(index) || index === undefined) {
        this.$message.warning('临时菜单')
        console.log(this)
        const activeIndexPath = this.active
        this.$children[0].activeIndex = activeIndexPath
      } else if (/^https:\/\/|http:\/\//.test(index)) {
        util.open(index)
      } else {
        this.$router.push({
          path: index
        })
      }
    }
  }
}
