import request from '@/http/index'

export const createOrdersGep = obj => {
  return request({
    url: '/api/v1/orders/gep',
    method: 'POST',
    data: obj
  })
}

export const kyc_formGep = (orderId, obj) => {
  return request({
    url: '/api/v1/orders/gep/' + orderId + '/subscribe_form',
    method: 'POST',
    data: obj
  })
}
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
    url: '/api/v1/orders/' + orderId + '/compliance_questionnaire_form',
    method: 'POST',
    data: obj
  })
}
export const document_check_list_formGep = (orderId, obj) => {
  return request({
    url: '/api/v1/orders/' + orderId + '/gep_document_checklist_form',
    method: 'POST',
    data: obj
  })
}
export const pdpa_memoGep = (orderId, obj) => {
  return request({
    url: '/api/v1/orders/' + orderId + '/gep_nda_form',
    method: 'POST',
    data: obj
  })
}
export const letter_wishes_formGep = (orderId, obj) => {
  return request({
    url: '/api/v1/orders/' + orderId + '/gep_third_party_declaration_form',
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
export const create_notifications = (notice_id, obj) => {
  return request({
    url: '/api/v1/customer/notices/' + notice_id + '/create_notifications',
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
// 提交Document Checklist
export const document_check_list_form = (orderId, obj) => {
  return request({
    url: '/api/v1/orders/' + orderId + '/document_check_list_form',
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
export const getCustomerListData = () => {
  return request({
    url: '/api/v1/user/customer-list',
    method: 'get',
  })
}
export const getNotificationData = (orderId) => {
  return request({
    url: '/api/v1/customer/admin-card-detail/' + orderId,
    method: 'get',
  })
}
export const getOrderDetail = (orderId) => {
  return request({
    url: '/api/v1/orders/' + orderId,
    method: 'get',
  })
}
// 获取订单表單數據
export const getOrdersForms = (id,query) => {
  console.log("-------------",id)
  return request({
    url: '/api/v1/orders/forms/'+id,
    method: 'get',
    params: query
  })
}
// 修改订单表單數據
export const putOrdersForms = (id,obj) => {
  return request({
    url: '/api/v1/orders/forms/'+id,
    method: 'put',
    data: obj
  })
}
// 確認訂單
export const confirmOrder = (order) => {
  return request({
    url: '/api/v1/orders/' + order + '/done',
    method: 'post',
  })
}
// 刪除未提交訂單
export function deleteOrder (orderId) {
  return request({
    url: '/api/v1/orders/' + orderId,
    method: 'delete',
  })
}
