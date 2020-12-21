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
          '33daa52ac149cd65f2fc9589405d949c8d7737168df2a9d4865cda1a5138cee9f422647791e6f3ae9e66193ef99c901238914334631aa23f'
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
