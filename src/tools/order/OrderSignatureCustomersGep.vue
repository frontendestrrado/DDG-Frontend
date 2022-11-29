<template>
    <div>
        <div class="title">1/5 KYC</div>
      <CustomerApplicationGep :orderDataInfo="orderDataInfo"></CustomerApplicationGep>
      <div class="title">2/5 SUBSCRIPTION FORM</div>
      <KYCGep :orderDataInfo='orderDataInfo'></KYCGep>
      <div class="title">3/5 THIRD PARTY FUND DECLARATION</div>
      <LetterOfWishesGep :orderDataInfo='orderDataInfo'></LetterOfWishesGep>
      <div class="title">4/5 NON-DISCLOSURE AGREEMENT</div>
      <PDPAMemoGep :orderDataInfo='orderDataInfo'></PDPAMemoGep>
      <div class="title">5/5 Document Checklist</div>
      <DocumentChecklistGep :orderDataInfo='orderDataInfo'></DocumentChecklistGep>
    </div>
</template>
<script>
import CustomerApplicationGep from "@/tools/gep/CustomerApplicationGep";
import KYCGep from "@/tools/gep/KYCGep";
import LetterOfWishesGep from "@/tools/gep/LetterOfWishesGep";
import PDPAMemoGep from "@/tools/gep/PDPAMemoGep";
import DocumentChecklistGep from "@/tools/gep/DocumentChecklistGep";
import { getOrderDetail} from "@/api/order"
export default {
    components:{
        CustomerApplicationGep,KYCGep,LetterOfWishesGep,PDPAMemoGep,DocumentChecklistGep
    },
    data(){
        return{
            orderDataInfo:{
               orderId:null,
              //  isFilled:null,
              //  status:null
            }
        }
    },
    mounted(){
        this.orderDataInfo.orderId=this.$route.query.orderId
        console.log(".....888,.....",this.$route.query.orderId)
        // this.orderDataInfo.isFilled=this.$route.query.isFilled
        // this.orderDataInfo.status=this.$$route.query.status
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