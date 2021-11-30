<template>
  <div class="OrderList bodybox">
    <van-search 
      v-model="searchVal" 
      placeholder="请输入订单号搜索" 
      @search="onSearch" 
      @clear="clearSearch"
    />
    <van-loading v-if="loadingShow" />
    <van-cell
      is-link
      v-for="(item,inx) in orderList"
      :key="inx"
      @click="
        $store.commit('changePage', {
          tabbar: '/OrderDetail',
          title: 'OrderDetail',
        });
        $router.push({path: '/OrderDetail', query: {data: item}});
      "
    >
      {{item.agency}}
    </van-cell>
  </div>
</template>

<script>
import { getOrders } from "@/api/tools";
export default {
  data() {
    return {
      orderList: [],
      searchVal: '',
      loadingShow: true
    };
  },
  mounted() {
    this.getOrders();
  },
  methods: {
    getOrders() {
      getOrders({
        search: this.searchVal,
        order: "date_desc",
      })
        .then((res) => {
          console.log(res, "訂單列表");
          this.orderList = res.data;
          this.loadingShow = false
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    onSearch() {
      this.getOrders()
    },
    clearSearch() {
      this.getOrders()
    }
  },
};
</script>

<style scoped lang="scss">
/deep/ .van-field__left-icon {
  line-height: 40px;
}
.OrderList {
  
}
</style>