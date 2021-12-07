import request from '@/http/index'

// 上傳簽名圖片
export const uploadAutograph = obj => {
  return request({
    url: '/api/v1/upload/autograph',
    method: 'POST',
    data: obj
  })
}