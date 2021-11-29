<template>
  <div class="OrderList bodybox">
    <van-search v-model="searchVal" placeholder="请输入搜索关键词" />
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
      searchVal: ''
    };
  },
  mounted() {
    this.getOrders();
  },
  methods: {
    getOrders() {
      getOrders({
        search: "",
        order: "date_desc",
      })
        .then((res) => {
          console.log(res, "訂單列表");
          this.orderList = res.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
</script>

<style scoped>
.OrderList {
}
</style>