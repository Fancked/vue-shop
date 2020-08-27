<!--  -->
<template>
<div class="">
  <van-nav-bar :title="$t('title.register')" :left-text="$t('back')" left-arrow @click-left="onClickLeft" />
  <van-field v-model="tel" type="tel" label="手机号" required placeholder="请输入手机号" />
  <van-field v-model="password" type="password" label="密码" required placeholder="密码" />
  <van-field v-model="password1" type="password" label="密码" required placeholder="确认密码" />
  <van-button type="primary" size="large" class="button" @click="register">注册</van-button>
</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tel: '',
      password: '',
      password1: '',
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    register() {
      if (this.$store.getters.getUserInfo(this.tel)) {
        this.$toast.fail('该手机号已注册');
        return;
      }
      if (this.password !== this.password1) {
        this.$toast.fail('两次密码不一致');
        return;
      }
      if (this.password === this.password1) {
        this.$store.commit('userListAdd', {
          tel: this.tel,
          password: this.password,
        });
        this.$toast.success('注册成功');
        this.$router.replace('/login');
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  margin-top: 10vh;
}
</style>
