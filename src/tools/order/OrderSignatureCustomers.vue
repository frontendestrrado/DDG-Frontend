<template>
    <div>
        <div class="title">1/5 Customer Application</div>
      <CustomerApplication :orderDataInfo="orderDataInfo"></CustomerApplication>
      <div class="title">2/5 Compliance Questionnaire</div>
      <KYC :orderDataInfo='orderDataInfo'></KYC>
      <div class="title">3/5 Letter Of Wishes</div>
      <LetterOfWishes :orderDataInfo='orderDataInfo'></LetterOfWishes>
      <div class="title">4/5 PDPA Memo</div>
      <PDPAMemo :orderDataInfo='orderDataInfo'></PDPAMemo>
      <div class="title">5/5 Document Checklist</div>
      <DocumentChecklist :orderDataInfo='orderDataInfo'></DocumentChecklist>
    </div>
</template>
<script>
import CustomerApplication from "@/tools/order/CustomerApplication";
import KYC from "@/tools/order/KYC";
import LetterOfWishes from "@/tools/order/LetterOfWishes";
import PDPAMemo from "@/tools/order/PDPAMemo";
import DocumentChecklist from "@/tools/order/DocumentChecklist";
import { getOrderDetail} from "@/api/order"
export default {
    components:{
        CustomerApplication,KYC,LetterOfWishes,PDPAMemo,DocumentChecklist
    },
    data(){
        return{
            orderDataInfo:{
               orderId:null,
               isFilled:null,
               status:null
            }
        }
    },
    mounted(){
        this.orderDataInfo.orderId=this.$route.query.orderId
        this.orderDataInfo.isFilled=this.$route.query.isFilled
        this.orderDataInfo.status=this.$$route.query.status
    },
    methods:{
    getOrderDetail() {
      getOrderDetail(this.$route.query.id)
        .then((res) => {
          console.log(res);
          this.orderData = res;
        })
        .catch((err) => {
          console.log(err);
        });
     },
    }
}
</script>
<style scoped>
.title{
  margin: 5rem 0;
  font-size: 2rem;
}
</style>