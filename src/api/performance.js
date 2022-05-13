import request from '@/http/index'


/**
 * 組織結構圖
 * @param
 * @returns {*}
 */
export function dateApi() {
  return request({
    url: '/api/v1/user/performance/date',
    method: 'get',
  })
}
