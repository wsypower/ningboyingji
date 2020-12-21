// 项目名称
const PROJECT_NAME = process.env.VUE_APP_PROJECT_NAME || 'wsy'
// 项目版本号
const VERSION = process.env.VUE_APP_VERSION
class SESSIONS_STORAGE {
  // 命名空间前缀
  NAMESPACE_PREFIX = `${PROJECT_NAME}-${VERSION}`

  /**
   * @description 存储 sessionsStorage 值
   * @param {String} name sessionsStorage name
   * @param {String} value sessionsStorage value
   */
  set(name = 'default', value = '') {
    sessionStorage.setItem(`${this.NAMESPACE_PREFIX}-${name}`, value)
  }

  /**
   * @description 拿到 sessionsStorage 值
   * @param {String} name sessionsStorage name
   */
  get(name = 'default') {
    return sessionStorage.getItem(`${this.NAMESPACE_PREFIX}-${name}`)
  }

  /**
   * @description 删除 sessionsStorage
   * @param {String} name sessionsStorage name
   */
  remove(name = 'default') {
    return sessionStorage.removeItem(`${this.NAMESPACE_PREFIX}-${name}`)
  }

  /**
   * @description 删除全部 sessionsStorage
   * @param {String} name sessionsStorage name
   */
  removeAll() {
    return sessionStorage.clear()
  }
}
export default new SESSIONS_STORAGE()
