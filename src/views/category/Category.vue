<!--  -->
<template>
  <div class="home-page">
    <van-sticky :offset-top="0">
      <van-nav-bar :title="$t('title.category')" />
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </van-sticky>

    <van-tree-select height="74vh" :items="titleList" :main-active-index.sync="active">
      <template #content>
        <van-row ref="content">
          <van-row v-for="(vy, ky) in subTitleList" :key="ky">
            <van-row class="text-center">
              {{ vy.cat_name }}
            </van-row>
            <van-row>
              <van-grid :border="false" :column-num="3">
                <van-grid-item v-for="(vz, kz) in vy.children" :key="kz" @click="itemClick(vz)">
                  <van-image class="img" :src="vz.cat_icon" />
                  <van-row class="text">{{ vz.cat_name }}</van-row>
                </van-grid-item>
              </van-grid>
            </van-row>
          </van-row>
        </van-row>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import { getCategories } from '@/network/category.js';
export default {
  name: 'category',
  components: {},
  data() {
    return {
      value: '',
      active: 0,
      categories: [],
    };
  },
  computed: {
    titleList() {
      let temp = [];
      if (this.categories.length) {
        this.categories.forEach((e, i) => {
          temp[i] = {
            text: e.cat_name,
            id: e.cat_id,
            children: [],
          };
        });
      }
      return temp;
    },
    subTitleList() {
      if (this.categories.length) {
        return this.categories[this.active].children.filter(e => e.children);
      }
      return [];
    },
  },
  methods: {
    async getData() {
      this.categories = [];
      this.categories = await getCategories({ cid: this.$route.query.cid });
    },
    itemClick(item) {
      this.$router.push({ path: '/categorl', query: { cid: item.cat_id } });
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style lang="scss" scoped>
.place {
  height: 50px;
}
.text {
  width: 92%;
  font-size: 1vw;
  text-align: center;
  padding-top: 2vh;
}
.text-center {
  text-align: center;
}
.img {
  width: 90%;
}
</style>
