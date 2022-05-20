import request from '@/http/index'


/**
 * 我的表現獲取訂單時間
 * @param
 * @returns {*}
 */
export function dateApi() {
  return request({
    url: '/api/v1/user/performance/date',
    method: 'get',
  })
}

/**
 * 獲取訂單數據根據年月
 * @param
 * @returns {*}
 */
export function performanceApi(params) {
  return request({
    url: '/api/v1/user/performance',
    method: 'get',
    params
  })
}
