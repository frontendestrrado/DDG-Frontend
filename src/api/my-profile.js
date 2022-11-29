import request from '@/http/index'

// 修改個人資料
export function updateMyProfile(data) {
  return request({
    url: '/api/v1/user',
    method: 'PATCH',
    data
  })
}

/**
 * 獲取用戶信息
 */
export function userApi() {
  return request({
    url: '/api/v1/user',
    method: 'get',
  })
}
