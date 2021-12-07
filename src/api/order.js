import request from '@/http/index'

// 上傳簽名圖片
export const createOrders = obj => {
  return request({
    url: '/api/v1/orders',
    method: 'POST',
    data: obj
  })
}