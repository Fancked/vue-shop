import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css';
import './plugins/vant';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  const activeArr = ['home', 'category', 'cart', 'profile'];
  if (activeArr.includes(to.name)) {
    store.commit('setTabBarShow', true);
  } else {
    store.commit('setTabBarShow', false);
  }
  next();
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
