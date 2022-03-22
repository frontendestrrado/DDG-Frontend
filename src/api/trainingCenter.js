import request from '@/http/index'

// 視頻中心列表
export function getTrainingCenterList() {
  return request({
    url: '/api/v1/training_center_classify',
    method: 'get',
  })
}
