import request from '@/http/index'

// 獲取我的units teams groups
export const getMyUTG = query => {
  return request({
    url: '/api/v1/organization/children',
    method: 'get',
    params: query
  })
}
// 獲取我的订单列表
export const getMyOrders = query => {
  return request({
    url: '/api/v1/orders',
    method: 'get',
    params: query
  })
}
// 根据id获取订单列表
export const getOrdersById = (query,id) => {
  return request({
    url: '/api/v1/users/'+ id +'/orders',
    method: 'get',
    params: query
  })
}
// 获取订单反馈
export const patchOrders = (query,data) => {
  return request({
    url: '/api/v1/orders/' + query,
    method: 'patch',
    data: data
  })
}
// 获取会员收集的资料
export const getUserData = (query,id) => {
  return request({
    url: '/api/v1/user/data',
    method: 'get',
    params: query
  })
}
// 获取会员收集的资料
export const getOrders = query => {
  return request({
    url: '/api/v1/orders',
    method: 'get',
    params: query
  })
}
//獲取Organizational Chart數據
export function getOrganizeChart() {
  return request({
    url: '/api/v1/organization',
    method: 'get',
  })
}
