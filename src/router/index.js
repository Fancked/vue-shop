import Vue from 'vue';
import VueRouter from 'vue-router';

// 重写路由push方法,阻止重复点击报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

// 重写路由replace方法,阻止重复点击报错
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

// 正常路由加载,会将所有路由的js跟css合并到一个文件
import Home from '../views/home/Home';
import Category from '../views/category/Category';
import Cart from '../views/cart/Cart';
import Profile from '../views/profile/Profile';
import Detail from '../views/detail/Detail';
import Categorl from '../views/categorl/Categorl';
import Login from '../views/login/Login';
// 路由配置
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: Home },
  { path: '/category', name: 'category', component: Category },
  { path: '/cart', name: 'cart', component: Cart },
  { path: '/profile', name: 'profile', component: Profile },
  { path: '/detail', name: 'detail', component: Detail },
  { path: '/categorl', name: 'categorl', component: Categorl },
  { path: '/login', name: 'login', component: Login },
];

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.NODE_ENV === 'production' ? '/shop' : '/',
  routes,
});

export default router;
