<!--  -->
<template>
  <div class="">
    <van-sticky :offset-top="0">
      <van-nav-bar title="商品列表" left-text="返回" left-arrow @click-left="onClickLeft" />
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </van-sticky>

    <van-tabs v-model="active" swipeable @change="tabChange">
      <van-tab v-for="(tab, index) in tabsList" :key="index" :title="tab">
        <van-card
          v-for="(good, indey) in tabGoods"
          :key="indey"
          :price="good.goods_price"
          :title="good.goods_name"
          :thumb="good.goods_small_logo"
          @click="cardClick(good.goods_id)"
        ></van-card>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getTabGoods } from '@/network/categorl.js';
export default {
  components: {},
  data() {
    return {
      value: '',
      active: 0,
      tabsList: ['综合', '销量', '价格'],
      tabData: [],
    };
  },
  computed: {
    tabGoods() {
      if (this.tabData && this.tabData.goods) {
        return this.tabData.goods.filter(good => good.goods_small_logo);
      }
      return [];
    },
  },
  watch: {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async getDate() {
      this.tabData = [];
      this.tabData = await getTabGoods({ cid: this.$route.query.cid });

      this.tabChange(0);
    },
    tabChange(name) {
      switch (name) {
        case 0:
          this.tabGoods.sort((a, b) => (a.goods_price % 10) - (b.goods_price % 10));
          break;
        case 1:
          this.tabGoods.sort((a, b) => (a.goods_price % 100) - (b.goods_price % 100));
          break;
        case 2:
          this.tabGoods.sort((a, b) => a.goods_price - b.goods_price);
          break;
        default:
      }
    },
    cardClick(id) {
      this.$router.push({ path: '/detail', query: { id: id } });
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
<style lang="scss" scoped></style>
