import request from '@/http/index'

// 視頻中心列表
export function getTrainingCenterList(status) {
  return request({
    url: '/api/v1/training_center_classify/1/training_center?order='+status,
    method: 'get',
  })
}
