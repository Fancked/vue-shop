<!--  -->
<template>
  <div class="">
    <van-sticky :offset-top="0">
      <van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="onClickLeft" />
    </van-sticky>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in goodData.pics" :key="index">
        <van-image width="100vw" :src="item.pics_big" alt="" />
      </van-swipe-item>
    </van-swipe>

    <van-divider></van-divider>

    <van-row class="g-price">
      <i>￥</i>
      {{ goodData.goods_price | priceformat }}
    </van-row>
    <van-row class="g-name">{{ goodData.goods_name }}</van-row>

    <van-divider>商品展示</van-divider>

    <van-col v-html="goodData.goods_introduce"></van-col>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon
        :color="isCollect ? '#ff5000' : '#000000'"
        :icon="isCollect ? 'star' : 'star-o'"
        :text="isCollect ? '已收藏' : '收藏'"
        @click="starClick"
      />
      <van-goods-action-button type="warning" text="加入购物车" @click="addToCart" />
      <van-goods-action-button type="danger" text="立即购买" @click="toBuy" />
    </van-goods-action>
  </div>
</template>

<script>
import { getGoodDetail } from '@/network/detail.js';
export default {
  components: {},
  data() {
    return {
      goodData: {},
    };
  },
  filters: {
    priceformat(price) {
      return Number(price).toLocaleString();
    },
  },
  computed: {
    // tabGoods() {
    //   if (this.tabData && this.tabData.goods) {
    //     return this.tabData.goods.filter(good => good.goods_small_logo);
    //   }
    //   return [];
    // },
    isCollect() {
      let idx = 0;
      let collectList = this.$store.state.collectList;
      for (let i in collectList) {
        if (collectList[i].goods_id === this.goodData.goods_id) {
          idx = i + 1;
          break;
        }
      }
      return Boolean(idx);
    },
  },
  watch: {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async getDate() {
      this.goodData = [];
      this.goodData = await getGoodDetail({ goods_id: this.$route.query.id });
    },
    starClick() {
      if (this.isCollect) this.$store.commit('collectListRm', this.goodData);
      else this.$store.commit('collectListAdd', this.goodData);
    },
    addToCart() {
      this.$store.commit('cartListAdd', this.goodData);
    },
    toBuy() {
      this.addToCart();
      this.$router.push('/cart');
    },
  },
  created() {
    this.getDate();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
};
</script>
<style lang="scss" scoped>
.g-price {
  color: #ee0000;
  font-size: 2rem;
  padding: 1rem 1rem;
  i {
    font-size: 1rem;
  }
}
.g-name {
  font-size: 0.9rem;
  padding: 1rem 1rem;
}
</style>
