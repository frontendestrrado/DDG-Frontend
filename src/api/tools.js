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