export default ({
  service,
  request,
  serviceForMock,
  requestForMock,
  mock,
  faker,
  tools
}) => ({
  /**
   * @name GET_ORGANIZATION
   * @method GET
   * @description
   * 获取发布单位
   * 后端描述是一级一级的递归调取
   * 每一层传递一次orgCode,初始orgCode为空传
   * 查询组织树子节点
   * @param {Object} params 请求携带的信息
   */
  GET_ORGANIZATION(params = {}) {
    return request({
      url: '/portal/base/org/list',
      method: 'get',
      params
    })
  },

  /**
   * @name POST_ADD_PUBLISH
   * @method POST
   * @description
   * @param {Object} data 请求携带的信息
   */
  POST_ADD_PUBLISH(data = {}) {
    return request({
      url: '/portal/portlet/add',
      method: 'post',
      data
    })
  },

  /**
   * @name POST_DEL_PUBLISH
   * @method POST
   * @description
   * @param {Object} data 请求携带的信息
   */
  POST_DEL_PUBLISH(data = {}) {
    return request({
      url: '/portal/portlet/del',
      method: 'post',
      data
    })
  },

  /**
   * @name GET_CHECK_PUBLISH
   * @method GET
   * @description
   * 根据id查询发布内容
   * @param {Object} params 请求携带的信息
   */
  GET_CHECK_PUBLISH(params = {}) {
    return request({
      url: '/portal/portlet/get',
      method: 'get',
      params
    })
  },

  /**
   * @name POST_CHECK_PUBLISH_PAGE
   * @method POST
   * @description
   * @param {Object} data 请求携带的信息
   */
  POST_CHECK_PUBLISH_PAGE(data = {}) {
    return request({
      url: '/portal/portlet/page',
      method: 'post',
      data
    })
  },

  /**
   * @name POST_PUBLISH_UPDATE
   * @method POST
   * @description
   * @param {Object} data 请求携带的信息
   */
  POST_PUBLISH_UPDATE(data = {}) {
    return request({
      url: '/portal/portlet/upd',
      method: 'post',
      data
    })
  }
})
