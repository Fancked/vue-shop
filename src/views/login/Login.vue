<!--  -->
<template>
  <div class="">
    <van-nav-bar title="用户登录" />
    <van-field v-model="tel" type="tel" label="手机号" required placeholder="请输入手机号" />
    <van-field v-model="password" type="password" label="密码" required placeholder="密码" />
    <van-row class="register">没有帐号? 欢迎注册</van-row>
    <van-button type="primary" size="large" class="button">登录</van-button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tel: '',
      password: '',
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
<style lang="scss" scoped>
.button {
  margin-top: 10vh;
}
.register {
  text-align: right;
  padding: 2vh;
  color: #3885dd;
  font-size: 0.8rem;
}
</style>
