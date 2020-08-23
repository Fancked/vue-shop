<!--  -->
<template>
  <div class="">
    <van-sticky :offset-top="0">
      <van-nav-bar title="用户详情" />
    </van-sticky>

    <van-cell-group>
      <van-cell @click="loginClick">
        <van-row>
          <van-col :span="8">
            <van-image :src="defaultPic" class="user-pic-img" fit="cover" round width="80%" />
          </van-col>
          <van-col>
            <div class="login">
              登录
            </div>
          </van-col>
        </van-row>
      </van-cell>

      <van-cell title="切换城市" clickable />
      <van-cell title="我的收藏" clickable />
      <van-cell title="我的足迹" clickable />
      <van-cell title="购买记录" clickable />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return { defaultPic: '@/assets/img/profile/user.png' };
  },
  computed: {},
  watch: {},
  methods: {
    loginClick() {
      this.$router.push('/login');
    },
  },
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
<style lang="scss" scoped>
.login {
  font-size: 1.4rem;
  padding: 0.6rem;
}
</style>
