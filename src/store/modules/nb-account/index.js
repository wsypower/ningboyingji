import api from '@/api'
import util from '@/libs/util'

export default {
  namespaced: true,
  actions: {
    async getAccount({ dispatch }) {
      try {
        await dispatch('getUrlToken')
      } catch (error) {
        // TODO 宁波暂时先回退到门户的登录去
        // 开发我先接入一个假数据(值是swagger走了一个登录页)
        const token =
          '40122adc261b56ba9d5a9445d07523bdad48cc7f2c9e2566d19f07ff95d1d61aec7c4f9d12f9dcc415d1e41d826d58bcd825153033f8dd2e297d4d74bcbf6a8dd53cca2b293e1cab1e7106c2d1313c5c0725c3fb5367e55046ae68f963de7b38'
        util.sessionStorage.set('token', token)
        // window.location.href = 'http://www.baidu.com'
      }
    },
    // 获取url中全部参数的对象
    async getUrlToken({ dispatch }) {
      const url = location.search // 获取url中"?"符后的字串
      if (url.indexOf('?') != -1) {
        const query = url
          .substr(1)
          .split('&')
          .reduce((acc, item) => {
            const value = item.split('=')[1]
            if (value) {
              acc[item.split('=')[0]] = decodeURI(value)
            }
            return acc
          }, Object.create({}))
        await dispatch('setTokenToSessionStory', query)
      }
      // 没有token直接报错
      throw new Error('没有token信息')
    },
    // 赋值sessions
    setTokenToSessionStory(_, { token }) {
      /**
       * 目前这里采用的是sessionStorage,在浏览器关闭时失效
       * 在接入用户之后,换成cookies
       */
      return new Promise((resolve, reject) => {
        if (token) {
          util.sessionStorage.set('token', token)
          resolve()
        } else {
          reject('err')
        }
      })
    }
  }
}
