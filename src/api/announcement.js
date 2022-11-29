import request from '@/http/index'

// 公告列表
export function getAnnouncementList() {
  return request({
    url: '/api/v1/announcements',
    method: 'get',
  })
}
export function getNotificationsList() {
  return request({
    url: '/api/v1/user/notices',
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
export function getNotificationDetail(id) {
  return request({
    url: '/api/v1/user/notices/detail/'+id,
    method: 'get',
  })
}
export function getCrmNotifications() {
  return request({
    url: '/api/v1/customer/admin-cards',
    method: 'get',
  })
}
export function getCrmNotificationsSent() {
  return request({
    url: '/api/v1/customer/notices',
    method: 'get',
  })
}