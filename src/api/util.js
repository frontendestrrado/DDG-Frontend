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