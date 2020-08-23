import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tabBarShow: true,
    collectList: [],
    cartList: [],
  },
  mutations: {
    setTabBarShow(state, ifShow) {
      state.tabBarShow = ifShow;
    },
    collectListAdd(state, value) {
      state.collectList.push(value);
    },
    collectListRm(state, value) {
      let idx = 0;
      for (let i in state.collectList) {
        if (state.collectList[i].goods_id === value.goods_id) {
          idx = i;
          break;
        }
      }
      state.collectList.splice(idx, 1);
    },
    cartListAdd(state, value) {
      Vue.set(value, 'cart_num', 1);
      for (let i in state.cartList) {
        if (state.cartList[i].goods_id === value.goods_id) {
          return;
        }
      }
      state.cartList.push(value);
    },
    cartListRm(state, value) {
      let idx = 0;
      for (let i in state.cartList) {
        if (state.cartList[i].goods_id === value.goods_id) {
          idx = i;
          break;
        }
      }
      state.cartList.splice(idx, 1);
    },
    cartItemNumAdd(state, idx) {
      state.cartList[idx].cart_num += 1;
    },
    cartItemNumMinus(state, idx) {
      if (state.cartList[idx].cart_num === 1) return;
      state.cartList[idx].cart_num -= 1;
    },
  },
  actions: {},
  modules: {},
});
