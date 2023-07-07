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
  console.log(".....kkkkkkkkk........",query)
  return request({
    url: '/api/v1/orders',
    method: 'get',
    params: query
  })
}
export const getHelpDesk = query => {
  console.log(".....kkkkkkkkk.....getHelpDesk...",query)
  return request({
    url: '/api/v1/user/helpdesk/tickets',
    method: 'get',
    params: query
  })
}

export const getBirthday = query => {
  console.log(".....kkkkkkkkk.....getBirthday...",query)
  return request({
    url: '/api/v1/user/settlor/birthday',
    method: 'get',
    params: query
  })
}


export const getOrdersExport = query => {
  console.log(".....kkkkkkkkk........",query)
  return request({
    url: '/api/v1/user/orders/export',
    method: 'get',
    params: query
  })
}


export const videoCompleteApi = id => {
  console.log(".....videoComplete...api id.....",id)
  return request({
    url: '/api/v1/training_center/'+id+'/view',
    method: 'post'
  })
}
export const readNot = id => {
  console.log(".....kkkkkkkkk...4444.....",id)
  return request({
    url: '/api/v1/settlor/notices/'+id,
    method: 'put'
  })
}
export const getBttCode = query => {
  console.log(".....kkkkkkkkk...4444...getBttCode..",query)
  return request({
    url: '/api/v1/check-introducer',
    method: 'post',
    params: query
  })
}
export const getOrdersCustomerNot = query => {
  console.log(".....kkkkkkkkk...4444.....",query)
  return request({
    url: '/api/v1/settlor/notices',
    method: 'post',
    params: query
  })
}
export const getOrdersCustomer = query => {
  console.log(".....kkkkkkkkk...4444.....",query)
  return request({
    url: '/api/v1/settlor/orders',
    method: 'post',
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

export function productListCustomer() {
  return request({
    url: '/api/v1/settlor/product/list',
    method: 'post',
  })
}
export function productList() {
  return request({
    url: '/api/v1/product/list',
    method: 'post',
  })
}
export function customerDetails() {
  return request({
    url: '/api/v1/settlor/dashboard',
    method: 'get',
  })
}
export function productListVal() {
  return request({
    url: '/api/v1/gep-two-validation',
    method: 'get',
  })
}




