<!--  -->
<template>
  <div class="">
    <van-sticky :offset-top="0">
      <van-nav-bar :title="$t('title.profile')" />
    </van-sticky>

    <van-cell-group>
      <van-cell @click="loginClick">
        <van-row>
          <van-col :span="8">
            <van-image
              :src="defaultPic"
              class="user-pic-img"
              fit="cover"
              round
              width="10vh"
              height="10vh"
            />
          </van-col>
          <van-col>
            <div class="login">
              {{ loginInfo }}
            </div>
          </van-col>
        </van-row>
      </van-cell>

      <van-cell :title="$t('profile.togglelang')" clickable @click="togglelang" />
      <van-cell :title="$t('profile.mycart')" clickable />
      <van-cell :title="$t('profile.mycollect')" clickable />
    </van-cell-group>

    <van-button type="danger" size="large" class="button" v-if="ifLogined" @click="quit">
      {{ $t('profile.quit') }}
    </van-button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      defaultPic:
        'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1598251862&di=ff519fb002e9c57e709e77b61d657f84&src=http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg',
    };
  },
  computed: {
    loginInfo() {
      return this.$store.state.ifLogined
        ? this.$store.state.currentUser.tel
        : this.$t('profile.login');
    },
    ifLogined() {
      return this.$store.state.ifLogined;
    },
  },
  methods: {
    loginClick() {
      if (!this.$store.state.ifLogined) {
        this.$router.push('/login');
      }
    },
    quit() {
      if (this.$store.state.ifLogined) {
        this.$store.commit('toggleLogined');
      }
    },
    togglelang() {
      if (this.$i18n.locale === 'en') {
        this.$i18n.locale = 'zh';
      } else {
        this.$i18n.locale = 'en';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  font-size: 1.4rem;
  padding: 0.6rem;
}
</style>
