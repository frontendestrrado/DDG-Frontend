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
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderData: {}
    }
  },
  mounted() {
    this.orderData = this.$route.query.data
  }
}
</script>

<style scoped>
.OrderDetail {

}
</style>