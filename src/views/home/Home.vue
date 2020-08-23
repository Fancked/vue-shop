<!--  -->
<template>
  <div class="home-page">
    <van-sticky :offset-top="0">
      <van-nav-bar title="商城首页" />
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </van-sticky>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in swiperDate" :key="index">
        <van-image width="100vw" :src="item.image_src" alt="" />
      </van-swipe-item>
    </van-swipe>

    <van-grid :border="false" :column-num="4">
      <van-grid-item v-for="(item, index) in catitemsDate" :key="index">
        <van-image :src="item.image_src" />
      </van-grid-item>
    </van-grid>

    <van-col span="24" v-for="(item, index) in floorDate" :key="index">
      <van-row>
        <van-image width="100vw" :src="item.floor_title.image_src" alt="" />
      </van-row>
      <van-row gutter="4" type="flex" align="top">
        <van-col span="8">
          <van-image width="100%" fit="contain" :src="item.product_list[0].image_src"></van-image>
        </van-col>
        <van-col span="8">
          <van-image width="100%" fit="contain" :src="item.product_list[1].image_src"></van-image>
          <van-image width="100%" fit="contain" :src="item.product_list[2].image_src"></van-image>
        </van-col>
        <van-col span="8">
          <van-image width="100%" fit="contain" :src="item.product_list[3].image_src"></van-image>
          <van-image width="100%" fit="contain" :src="item.product_list[4].image_src"></van-image>
        </van-col>
      </van-row>
      <van-row v-if="index === 2" class="place"></van-row>
    </van-col>
  </div>
</template>

<script>
import { getSwiper, getCatitems, getFloor } from '@/network/home.js';
export default {
  name: 'home',
  components: {},
  data() {
    return {
      value: '',
      swiperDate: [],
      catitemsDate: [],
      floorDate: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    async getData() {
      this.swiperDate = await getSwiper();
      this.catitemsDate = await getCatitems();
      this.floorDate = await getFloor();
    },
  },
  created() {
    this.getData();
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
.place {
  height: 50px;
}
</style>
