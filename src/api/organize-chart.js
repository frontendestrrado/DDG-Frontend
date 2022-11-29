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
// export function organizeChartApi1(data) {
  export const organizeChartApi1 = query => {
  return request({
    url: '/api/v1/organization',
    method: 'post',
    params: query
  })
}
/**
 * 組織結構圖下線日期
 * @param params
 * @returns {*}
 */
export function organizeChartDateApi(params) {
  return request({
    url: '/api/v1/organization/children/life_achievement/date',
    method: 'get',
    params
  })
}

/**
 * 阻止結構圖下線具體日期訂單
 * @param params
 * @returns {*}
 */
export function organizeChartDetailApi(params) {
  return request({
    url: '/api/v1/organization/children/life_achievement',
    method: 'get',
    params
  })
}

/**
 * 組織結構圖導出excel
 * @param params
 * @returns {*}
 */
export function organizeChartExportApi(params) {
  return request({
    url: '/api/v1/organization/children/life_achievement/export',
    method: 'get',
    responseType: 'blob',
    params
  })
}

/**
 * personal_sales獲取詳情日期
 * @param params
 * @returns {*}
 */
export function organizeChartPersonalSalesApi(params) {
  return request({
    url: '/api/v1/organization/children/personal_sales/date',
    method: 'get',
    params
  })
}

export function PersonalSalesDetailApi(params) {
  return request({
    url: '/api/v1/organization/children/personal_sales',
    method: 'get',
    params
  })
}

