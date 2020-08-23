import { request } from './request';

export function getTabGoods(cfg) {
  return request({ url: '/goods/search', params: cfg });
}
