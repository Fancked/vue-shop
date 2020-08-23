import { request } from './request';

export function getCategories() {
  return request({ url: '/categories' });
}
