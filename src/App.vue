<template>
  <div id="app">
    <keep-alive :include="['home', 'category']">
      <router-view />
    </keep-alive>
    <tab-bar v-if="tabBarShow" />
  </div>
</template>
<script>
let res =
  navigator.userAgent.indexOf('Android') !== -1 || navigator.userAgent.indexOf('iPhone') !== -1;
if (!res) {
  confirm('请将设备设为手机以获得更好体验');
}
import TabBar from '@/components/Tabbar';
import mixin from '@/plugins/mixin/mixin.js';
export default {
  components: { TabBar },
  mixins: [mixin],
};
</script>
<style lang="scss"></style>
