import { request } from './request';

export function getSwiper() {
  return request({ url: '/home/swiperdata' });
}

export function getCatitems() {
  return request({ url: '/home/catitems' });
}

export function getFloor() {
  return request({ url: '/home/floordata' });
}
