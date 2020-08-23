import axios from 'axios';

const url = 'https://api-hmugo-web.itheima.net/api/public/v1';

let config = {
  baseURL: url,
  timeout: 7000,
};

const instance = axios.create(config);

// 请求拦截
instance.interceptors.request.use(
  req => {
    // 当getters里面的isLoading为true再显示请求加载
    // if (Loading.getters.isLoading) {
    //   Toast.loading({
    //     forbidClick: true,
    //     message: '加载中...',
    //   });
    // }
    return req;
  },
  err => {
    return Promise.reject(err);
  }
);

// 响应拦截
instance.interceptors.response.use(
  res => {
    // Toast.clear();
    return res.data.message;
  },
  err => {
    // Toast.clear();
    return Promise.reject(err);
  }
);

export function request(cfg) {
  return instance(cfg);
}
