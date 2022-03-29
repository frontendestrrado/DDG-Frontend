import request from '@/http/index'
import {id} from "html-webpack-plugin/lib/chunksorter";

// 視頻中心列表
export function getTrainingCenterList(status) {
  return request({
    url: '/api/v1/training_center_classify/1/training_center?order='+status,
    method: 'get',
  })
}
// 視頻詳情
export function getVideoDetail(id) {
  return request({
    url: '/api/v1/training_center/'+id,
    method: 'get',
  })
}
// 收藏視頻
export function collect(id) {
  return request({
    url: '/api/v1/training_center/'+id+'/like',
    method: 'post',
  })
}
