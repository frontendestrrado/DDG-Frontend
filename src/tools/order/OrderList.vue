<template>
<!--  my order頁面-->
  <div class="OrderList bodybox">
    <van-search
      v-model="searchVal"
      placeholder="请输入订单号搜索"
      @search="onSearch"
      @clear="clearSearch"
    />
    <van-loading v-if="loadingShow" />



    <!--前端john的-->
<!--    <van-cell
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
        <div>
          <van-tag type="success">{{item.settlor_name}}</van-tag>
        </div>
        <span>{{item.no}}</span>
        <div>
          <van-tag type="danger" v-if="item.status===0">not submitted</van-tag>
          <van-tag type="success" plain v-if="item.status===1">submitted</van-tag>
          <van-tag type="success" v-if="item.status===2">ratify</van-tag>
        </div>
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

    </van-cell>-->

    <van-row  v-for="(item,inx) in orderList.data" :key="inx"  type="flex" justify="space-between" align="center">
      <van-col span="8" align="start">
        <div>
          <van-tag type="success" size="large">{{item.settlor_name}}</van-tag>
        </div>
        <span>{{item.no}}</span>
        <div>
          <van-tag type="danger" v-if="item.status===0" size="large">Not Yet Submit</van-tag>
          <van-tag type="success" plain v-if="item.status===1" size="large">Waiting For Approval</van-tag>
          <van-tag type="success" v-if="item.status===2" size="large">Approved</van-tag>
        </div>
      </van-col>
      <van-col span="8" align="end" class="order-status">
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
      </van-col>
      <van-col span="8" align="end">
        <van-button type="danger" :disabled="item.status!==0" size="small" @click="del(item.id)">Delete</van-button>
        <van-button type="primary" :disabled="item.status===3" @click="toFill(item)" size="small">To fill</van-button>
      </van-col>
    </van-row>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page = "per_page"
      align="center"
      @input="changePage"
    ></b-pagination>
  </div>
</template>

<script>
import { getOrders } from "@/api/tools";
import {deleteOrder} from '@/api/order'
export default {
  data() {
    return {
      orderList: [],
      searchVal: '',
      loadingShow: true,
      rows: 3,//頁數
      currentPage: 1,//當前頁
      per_page: 15//每頁條數
    };
  },
  mounted() {
    this.getOrders();
  },
  computed: {
  },
  methods: {
    changePage() {
      this.getOrders()
    },
    getOrders() {
      getOrders({
        search: this.searchVal,
        order: "date_desc",
        page: this.currentPage
      })
        .then((res) => {
          this.orderList = res;
          this.per_page = res.meta.per_page
          this.rows = res.meta.total
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
    },
    //繼續填寫訂單
    toFill(item) {
      this.$store.commit('changePage', {
        tabbar: '/OrderDetail',
        title: 'OrderDetail',
      });
      sessionStorage.setItem('orderId',JSON.stringify(item.id))
      this.$router.push({path: '/OrderDetail', query: {id: item.id}});
    },
    //刪除未提交訂單
    del(id) {
      deleteOrder(id).then(res => {
        this.getOrders()
        this.$toast({
          type: "success",
          message: res.message,
        });
      })
    }
  },
};
</script>

<style scoped lang="scss">
.van-row {
  margin: 50px 0;
}
.order-status {
  >div {
    >span:first-of-type {
      color: #969799;
    }
  }
}
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
