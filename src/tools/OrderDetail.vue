<template>
  <div class="OrderDetail bodybox">
    <van-cell title-style="text-align:left;" title="agency" :value="orderData.agency"></van-cell>
    <van-cell title-style="text-align:left;" title="agent" :value="orderData.agent"></van-cell>
    <van-cell title-style="text-align:left;" title="amount" :value="orderData.amount"></van-cell>
    <van-cell title-style="text-align:left;" title="applicant" :value="orderData.applicant"></van-cell>
    <van-cell title-style="text-align:left;" title="approval_date" :value="orderData.approval_date"></van-cell>
    <van-cell title-style="text-align:left;" title="created_at" :value="orderData.created_at"></van-cell>
    <van-cell title-style="text-align:left;" title="date" :value="orderData.date"></van-cell>
    <van-cell title-style="text-align:left;" title="id" :value="orderData.id"></van-cell>
    <van-cell title-style="text-align:left;" title="no" :value="orderData.no"></van-cell>
    <van-cell title-style="text-align:left;" title="note" :value="orderData.note"></van-cell>
    <van-cell title-style="text-align:left;" title="updated_at" :value="orderData.updated_at"></van-cell>
    <van-cell title-style="text-align:left;" title="user_id" :value="orderData.user_id"></van-cell>
    <div class="orderTitle">订单反馈</div>
    <van-field
      v-model="patchOrder"
      class="patchInput"
       type="textarea"
      rows="2"
      autosize
      placeholder="订单反馈"
    />
    <van-button class="loginBtn" type="info" @click="submit">提交反馈</van-button>
  </div>
</template>

<script>
import { patchOrders } from '@/api/tools'
export default {
  data() {
    return {
      orderData: {},
      patchOrder: ''
    }
  },
  mounted() {
    this.orderData = this.$route.query.data
    this.patchOrders()
  },
  methods: {
    patchOrders() {
      patchOrders(this.$route.query.data.id).then(res => {
        console.log(res,'订单反馈');
        this.patchOrder = res.note
      }).catch(err => {
        console.log(err.response);
      })
    },
    // 提交反馈
    submit() {
      patchOrders(this.$route.query.data.id,{note: this.patchOrder}).then(res => {
        console.log(res,'订单反馈');
        this.patchOrder = res.note
        this.$toast('提交反馈成功')
      }).catch(err => {
        console.log(err.response);
      })
    }
  }
}
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