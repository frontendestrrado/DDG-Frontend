<template>
  <div class="OrderDetail bodybox">
    <div style="text-align: left; font-weight: bold; padding-left: 16px">
      Forms
    </div>
    <div style="margin-bottom: 40px">
      <van-cell
        is-link
        :value="orderData.customer_app_form == 0 ? 'Not Filled' : 'Filled'"
        title-style="text-align:left;"
        title="Customer Application"
        @click="
          $store.commit('changePage', { tabbar: '/CustomerApplication', title: '1/5 Customer Application' });
          $router.push({
            path: '/CustomerApplication',
            query: { orderId: orderData.id, isFilled: orderData.customer_app_form, status: orderData.status },
          });
        "
      ></van-cell>
      <van-cell
        is-link
        :value="orderData.kyc_form == 0 ? 'Not Filled' : 'Filled'"
        title-style="text-align:left;"
        title="Compliance Questionnaire"
        @click="
          $store.commit('changePage', { tabbar: '/KYC', title: '2/5 Compliance Questionnaire' });
          $router.push({
            path: '/KYC',
            query: { orderId: orderData.id, isFilled: orderData.kyc_form, status: orderData.status },
          });
        "
      ></van-cell>
      <van-cell
        is-link
        :value="orderData.letter_of_wishes_form == 0 ? 'Not Filled' : 'Filled'"
        title-style="text-align:left;"
        title="Letter of Wishes"
        @click="
          $store.commit('changePage', {
            tabbar: '/LetterOfWishes',
            title: '3/5 Letter Of Wishes',
          });
          $router.push({
            path: '/LetterOfWishes',
            query: { orderId: orderData.id, isFilled: orderData.letter_of_wishes_form, status: orderData.status },
          });
        "
      ></van-cell>
      <van-cell
        is-link
        :value="orderData.pdpa_memo_form == 0 ? 'Not Filled' : 'Filled'"
        title-style="text-align:left;"
        title="PDPA Memo"
        @click="
          $store.commit('changePage', {
            tabbar: '/PDPAMemo',
            title: '4/5 PDPA Memo',
          });
          $router.push({ path: '/PDPAMemo', query: { orderId: orderData.id,isFilled: orderData.pdpa_memo_form, status: orderData.status } });
        "
      ></van-cell>
      <van-cell
        is-link
        :value="orderData.document_check_list_form == 0 ? 'Not Filled' : 'Filled'"
        title-style="text-align:left;"
        title="Document Checklist"
        @click="
          $store.commit('changePage', {
            tabbar: '/DocumentChecklist',
            title: '5/5 Document Checklist',
          });
          $router.push({ path: '/DocumentChecklist', query: { orderId: orderData.id,isFilled: orderData.document_check_list_form, status: orderData.status } });
        "
      ></van-cell>
      <van-cell
        is-link
        :value="
          orderData.third_party_declaration_form == 0 ? 'Not Filled' : 'Filled'
        "
        title-style="text-align:left;"
        title="Third Party Declaration (If Applicable)"
        @click="
          $store.commit('changePage', {
            tabbar: '/ThirdPartyDeclaration',
            title: 'Third Party Declaration',
          });
          $router.push({
            path: '/ThirdPartyDeclaration',
            query: { orderId: orderData.id,isFilled: orderData.third_party_declaration_form, status: orderData.status },
          });
        "
      ></van-cell>
      <van-button  round block type="info" :disabled="orderData.status != 0 && orderData.status != 3 " color="#7C655D" @click="submitAll">
        Submit all forms
      </van-button>
      <div v-if="orderData.status == 0" style="margin-top:10px;">* Please confirm that all forms are completed before submitting</div>
    </div>
    <van-cell
      title-style="text-align:left;"
      title="Settlor Name"
      :value="orderData.settlor_name"
    ></van-cell>
    <van-cell
      title-style="text-align:left;"
      title="amount"
      :value="orderData.amount"
    ></van-cell>
    <van-cell
      title-style="text-align:left;"
      title="created_at"
      :value="orderData.created_at"
    ></van-cell>
    <van-cell
      title-style="text-align:left;"
      title="Order Number"
      :value="orderData.no"
    ></van-cell>
    <van-cell
      title-style="text-align:left;"
      title="Submitted_at"
      :value="orderData.date"
    ></van-cell>

    <van-cell
    v-if="orderData.fund_received_status === 'Fund Received'"
      title-style="text-align:left;"
      title=" Fund received acknowledgement"
      :value="orderData.fund_received"
    >
    <van-col span="12" style="text-align:left">
        <van-button @click="download(orderData.fund_received_file)" v-if="orderData.fund_received_status === 'Fund Received'" class="btn" type="primary" size="small" color="#A79278" style="margin-left:10px">Download</van-button>
      </van-col>{{ orderData.fund_received }}</van-cell>

    <!-- <van-cell
    v-if="orderData.trust_setup_status === 'Trust Setup'"
      title-style="text-align:left;"
      title=" Trust setup acknowledgement"
      :value="orderData.trust_setup"
    > <van-col span="12" style="text-align:left">
        <van-button @click="download(orderData.trust_setup_file)" v-if="orderData.trust_setup_status === 'Trust Setup'" class="btn" type="primary" size="small" color="#A79278" style="margin-left:10px">Download</van-button>
      </van-col>{{ orderData.trust_setup }}</van-cell> -->

    <div class="orderTitle">The Order Feedback</div>
    <van-field
      v-model="patchOrder"
      class="patchInput"
      type="textarea"
      rows="2"
      autosize
      placeholder="The order feedback"
    />
    <van-button class="loginBtn" type="info" @click="submit" color="#7C655D">Submit Feedback</van-button
    >
  </div>
</template>

<script>
import { patchOrders } from "@/api/tools";
import { getOrderDetail, confirmOrder } from "@/api/order";
export default {
  data() {
    return {
      orderData: {},
      patchOrder: "",
      orderStatus: 0
    };
  },
  mounted() {
    // this.orderData = this.$route.query.data
    this.orderStatus = sessionStorage.getItem('orderStatus')
    this.patchOrders();
    this.getOrderDetail();
  },
  methods: {
    download(file) {
      console.log("9999999999999999999",file)
      let url = file.split('public')
      console.log("ccccccccccccccccccccc",url)
      console.log("aaaaaaaaaaaaaaaaaa",url[0])
      console.log("bbbbbbbbbbbbbbbb",url[1])
      window.open(url[0] + 'file/download?path=public' + url[1], '_self')
// window.open(file, '_self')
},
    getOrderDetail() {
      getOrderDetail(this.$route.query.id)
        .then((res) => {
          console.log(">>>>>>>>>>>>>>",res);
          this.orderData = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    patchOrders() {
      patchOrders(JSON.parse(sessionStorage.orderId))
        .then((res) => {
          console.log(res, "????????????");
          this.patchOrder = res.note;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    // ????????????
    submit() {
      patchOrders(JSON.parse(sessionStorage.orderId), { note: this.patchOrder })
        .then((res) => {
          console.log(res, "????????????");
          this.patchOrder = res.note;
          this.$toast("Feedback submitted successfully");
          this.patchOrder=''
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    // ????????????
    submitAll() {
      confirmOrder(this.$route.query.id).then(res => {
        console.log(res, '????????????');
        this.$toast("All submitted successfully");
        this.getOrderDetail()
      })
    }
  },
};
</script>

<style scoped lang="scss">
.OrderDetail {
  .orderTitle {
    text-align: left;
    margin-top: 40px;
    padding: 0 16px;
    font-weight: bold;
  }
  .patchInput {
    width: calc(100% - 32px);
    margin: auto;
    text-align: left;
    padding: 10px 16px;
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    line-height: 24px;
  }
  .loginBtn {
    width: calc(100% - 32px);
    height: 46px;
    line-height: 46px;
    margin-top: 30px;
    color: #fff;
    border-radius: 10px;
  }
}
</style>
