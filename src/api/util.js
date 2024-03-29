import request from '@/http/index'

// 上傳簽名圖片
export const uploadAutograph = obj => {
  return request({
    url: '/api/v1/upload/autograph',
    method: 'POST',
    data: obj
  })
}
// 獲取手機驗證碼
export const smsVerify_code = obj => {
  return request({
    url: '/api/v1/sin_up/sms/verify_code',
    method: 'POST',
    data: obj
  })
}
// 驗證手機驗證碼
export const verdict_code = query => {
  return request({
    url: "/api/v1/sin_up/sms/verify_code?data=" + query,
    method: 'get',
  })
}
// 上傳btt code(任意文件)
export const uploadFile = obj => {
  return request({
    url: '/api/v1/file',
    method: 'POST',
    data: obj
  })
}
export const uploadFileRequest = obj => {
  console.log("_______Request param____",obj)
  return request({
    url: '/api/v1/user/helpdesk/tickets/upload/attachment',
    method: 'POST',
    data: obj
  })
}
