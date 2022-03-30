import request from '@/http/index'

// 公告列表
export function getUnread() {
  return request({
    url: '/api/v1/announcements/user/unread_count',
    method: 'get',
  })
}
