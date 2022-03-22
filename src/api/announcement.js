import request from '@/http/index'

// 公告列表
export function getAnnouncementList() {
  return request({
    url: '/api/v1/announcements',
    method: 'get',
  })
}
//獲取公告詳情
export function getAnnouncementDetail(id) {
  return request({
    url: '/api/v1/announcements/'+id,
    method: 'get',
  })
}
