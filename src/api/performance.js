import request from '@/http/index'

export function dateApiDate() {
  return request({
    url: '/api/v1/user/performance/years',
    method: 'get',
  })
}
//export const pdfApi = id => {
  //export function pdfApi() {
    export const pdfApi = (id1,id2) => {
  //console.log("88888888----------",id)
let a = "2022"
let b = "01"
  return request({
    url: "/api/v1/user/performance/pdf?year="+id1+"&month="+id2,
    method: 'get',

  })

}
/**
 * 我的表現獲取訂單時間
 * @param
 * @returns {*}
 */
// export function dateApi(id) {
  export const dateApi = id => {
  console.log("7777777777",id)
  return request({
    url: "/api/v1/user/performance/date?year="+id,
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

export function exportApi(params) {
  return request({
    url: '/api/v1/user/performance/export',
    method: 'get',
    responseType: 'blob',
    params
  })
}
