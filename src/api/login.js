import request from '@/http/index'
// 公告列表
export function changePassword(data) {
  return request({
    url: '/api/v1/reset_password',
    method: 'PATCH',
    data
  })
}
