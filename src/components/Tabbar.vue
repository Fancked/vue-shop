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
    };
  },
  computed: {
    itemList() {
      return [
        {
          title: this.$t('tabbar.home'),
          icon: 'home-o',
          url: '/home',
        },
        {
          title: this.$t('tabbar.category'),
          icon: 'search',
          url: '/category',
        },
        {
          title: this.$t('tabbar.cart'),
          icon: 'friends-o',
          url: '/cart',
        },
        {
          title: this.$t('tabbar.profile'),
          icon: 'setting-o',
          url: '/profile',
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped></style>
