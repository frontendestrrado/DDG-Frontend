import request from '@/http/index'

// 上傳簽名圖片
export const createOrders = obj => {
  return request({
    url: '/api/v1/orders',
    method: 'POST',
    data: obj
  })
}
// 提交KYC
export const kyc_form = (orderId, obj) => {
  return request({
    url: '/api/v1/orders/' + orderId + '/kyc_form',
    method: 'POST',
    data: obj
  })
}
// 提交Letter Of Wishes
export const letter_wishes_form = (orderId, obj) => {
  return request({
    url: '/api/v1/orders/' + orderId + '/letter_wishes_form',
    method: 'POST',
    data: obj
  })
}
// 提交pdpa_memo
export const pdpa_memo = (orderId, obj) => {
  return request({
    url: '/api/v1/orders/' + orderId + '/pdpa_memo',
    method: 'POST',
    data: obj
  })
}
// 提交third_party_declaration_form
export const third_party_declaration_form = (orderId, obj) => {
  return request({
    url: '/api/v1/orders/' + orderId + '/third_party_declaration_form',
    method: 'POST',
    data: obj
  })
}
// 获取订单详情
export const getOrderDetail = (orderId) => {
  return request({
    url: '/api/v1/orders/' + orderId,
    method: 'get',
  })
}