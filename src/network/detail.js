import { request } from './request';

export function getGoodDetail(cfg) {
  return request({ url: '/goods/detail', params: cfg });
}
