<template>
    <div>
        <div class="title">1/3 Subscription form</div>
      <CustomerApplicationGep2 :orderDataInfo="orderDataInfo"></CustomerApplicationGep2>
      <div class="title">2/3 PDPA </div>
      <KYCGep2 :orderDataInfo='orderDataInfo'></KYCGep2>
      <div class="title">3/3 Document Checklist</div>
      <LetterOfWishesGep2 :orderDataInfo='orderDataInfo'></LetterOfWishesGep2>
      <!-- <div class="title">4/5 NON-DISCLOSURE AGREEMENT</div>
      <PDPAMemoGep :orderDataInfo='orderDataInfo'></PDPAMemoGep>
      <div class="title">5/5 Document Checklist</div>
      <DocumentChecklistGep :orderDataInfo='orderDataInfo'></DocumentChecklistGep> -->
    </div>
</template>
<script>
import CustomerApplicationGep2 from "@/tools/gep/CustomerApplicationGep2";
import KYCGep2 from "@/tools/gep/KYCGep2";
import LetterOfWishesGep2 from "@/tools/gep/LetterOfWishesGep2";
// import PDPAMemoGep from "@/tools/gep/PDPAMemoGep";
// import DocumentChecklistGep from "@/tools/gep/DocumentChecklistGep";
import { getOrderDetail} from "@/api/order"
export default {
    components:{
        CustomerApplicationGep2,KYCGep2,LetterOfWishesGep2
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