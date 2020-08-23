<!--  -->
<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item
      v-for="(item, index) in itemList"
      :key="index"
      replace
      :to="item.url"
      :icon="item.icon"
    >
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      active: 0,
      itemList: [
        {
          title: '首页',
          icon: 'home-o',
          url: '/home',
        },
        {
          title: '商品',
          icon: 'search',
          url: '/category',
        },
        {
          title: '购物车',
          icon: 'friends-o',
          url: '/cart',
        },
        {
          title: '我的',
          icon: 'setting-o',
          url: '/profile',
        },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
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
