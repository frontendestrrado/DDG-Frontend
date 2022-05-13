import request from '@/http/index'

/**
 * 組織結構圖
 * @param data
 * @returns {*}
 */
export function organizeChartApi(data) {
  return request({
    url: '/api/v1/organization',
    method: 'get',
  })
}
