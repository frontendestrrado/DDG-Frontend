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
      center
      v-for="(item,inx) in orderList"
      :key="inx"
      @click="
        $store.commit('changePage', {
          tabbar: '/OrderDetail',
          title: 'OrderDetail',
        });
        $router.push({path: '/OrderDetail', query: {id: item.id}});$sessionStorage.setItem('orderId',JSON.stringify(item.id))
      "
    >
      {{item.no}}
      <template #title>
        <span>{{item.no}}</span>
      </template>
      <template #default>
        <div>
          <span> Customer Application </span> 
          <span class="NotFilledCol" v-if="item.customer_app_form==0"> (Not Filled) </span>
          <span class="FilledCol" v-else> (Filled) </span>
        </div>
        <div>
          <span> Compliance Questionaire </span>
          <span class="NotFilledCol" v-if="item.kyc_form==0"> (Not Filled) </span>
          <span class="FilledCol" v-else> (Filled) </span>
        </div>
        <div>
          <span> Letter Of Wishes  </span>
          <span class="NotFilledCol" v-if="item.letter_of_wishes_form==0"> (Not Filled) </span>
          <span class="FilledCol" v-else> (Filled) </span>
        </div>
        <div>
          <span> PDPA Memo </span>
          <span class="NotFilledCol" v-if="item.pdpa_memo_form==0"> (Not Filled) </span>
          <span class="FilledCol" v-else> (Filled) </span>
        </div>
        <div>
          <span> Third Party Declaration </span>
          <span class="NotFilledCol" v-if="item.third_party_declaration_form==0"> (Not Filled) </span>
          <span class="FilledCol" v-else> (Filled) </span>
        </div>
      </template>
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
/deep/ .van-cell__title {
  text-align: left;
}
.OrderList {
  .NotFilledCol {
    color: red;
  }
  .FilledCol {
    color: #03BF03;
  }
}
</style>