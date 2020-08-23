<!--  -->
<template>
  <div>
    <van-sticky :offset-top="0">
      <van-nav-bar title="购物车" />
    </van-sticky>

    <van-cell v-show="this.cartList.length == 0" title="您的购物车空空如也" />

    <van-checkbox-group
      v-model="result"
      ref="checkboxGroup"
      class="checkboxGroup"
      @change="checkChange"
    >
      <van-cell-group>
        <van-cell
          class="van-cell"
          v-for="(item, index) in cartList"
          :key="index"
          @click.native="toggle(index)"
        >
          <van-swipe-cell>
            <van-card
              :price="item.goods_price"
              :title="item.goods_name"
              class="goods-card"
              :thumb="item.goods_small_logo"
            >
              <template #bottom>
                <div class="card-num-bar">
                  <van-button size="small" @click.stop="numminus(index)">-</van-button>
                  <span class="card-num">{{ item.cart_num }}</span>
                  <van-button size="small" @click.stop="numadd(index)">+</van-button>
                </div>
              </template>
            </van-card>
            <template #right>
              <van-button
                square
                text="删除"
                type="danger"
                class="delete-button"
                @click="delCartList(item)"
              />
            </template>
          </van-swipe-cell>
          <template #icon>
            <van-checkbox :name="item" ref="checkboxes" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-checkbox-group>

    <div class="cart-page">
      <van-submit-bar
        custom-class="van-submit-bar"
        :price="totalPrice"
        button-text="提交订单"
        @submit="onSubmit"
      >
        <van-checkbox v-model="checked" @click="toggleAll">全选</van-checkbox>
        <!-- <template #tip>
        你的收货地址不支持同城送,
        <span @click="onClickEditAddress">修改地址</span>
      </template>-->
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return { checked: false, result: [] };
  },
  computed: {
    cartList() {
      return this.$store.state.cartList;
    },
    totalPrice() {
      return 100 * this.result.reduce((total, e) => total + e.cart_num * e.goods_price, 0);
    },
  },
  watch: {},
  methods: {
    // onClickEditAddress() {},
    onSubmit() {
      let reslen = this.result.length;
      if (reslen === 0) {
        this.$toast({
          type: 'fail',
          message: `您还没有选中商品哦`,
          forbidClick: true,
          duration: 1500,
        });
      } else {
        this.$dialog
          .confirm({
            title: '温馨提示',
            message: '您确定要提交订单吗?',
          })
          .then(() => {
            this.$toast({
              type: 'success',
              message: `购买成功`,
              forbidClick: true,
              duration: 1500,
            });
            // 提交数据清空对应购物车数据
            this.result.forEach(e => {
              this.$store.commit('cartListRm', e);
            });
            this.result = [];
          })
          .catch(err => err);
      }
    },
    checkChange() {
      if (this.result.length && this.result.length === this.$store.state.cartList.length)
        this.checked = true;
      else this.checked = false;
    },
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
    toggleAll() {
      if (this.checked) this.$refs.checkboxGroup.toggleAll(true);
      else this.$refs.checkboxGroup.toggleAll(false);
    },
    numadd(i) {
      this.$store.commit('cartItemNumAdd', i);
    },
    numminus(i) {
      this.$store.commit('cartItemNumMinus', i);
    },
    delCartList(item) {
      this.$store.commit('cartListRm', item);
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
.van-submit-bar {
  position: fixed;
  bottom: 50px;
}
.goods-card {
  margin: 0;
  background-color: transparent;
}

.delete-button {
  height: 100%;
}
.checkboxGroup {
  height: 75vh;
  overflow: scroll;
}
.card-num-bar {
  position: absolute;
  right: 0vw;
  bottom: 0vh;
}
.card-num {
  margin: 0 0.2rem;
  padding: 0.5rem 0.7rem;
  background-color: #eeeeee;
}
.van-cell {
  padding-right: 0;
}
</style>
