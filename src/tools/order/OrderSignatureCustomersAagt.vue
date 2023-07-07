<template>
    <div>
        <div class="title">1/5 Customer Application</div>
      <CustomerApplicationAagt :orderDataInfo="orderDataInfo"></CustomerApplicationAagt>
      <div class="title">2/5 Compliance Questionnaire</div>
      <KYCAagt :orderDataInfo='orderDataInfo' @onSelect4='onSelect4'></KYCAagt>
      <div class="title">3/5 Letter Of Wishes</div>
      <LetterOfWishesAagt :orderDataInfo='orderDataInfo'></LetterOfWishesAagt>
      <div class="title">4/5 PDPA Memo</div>
      <PDPAMemoAagt :orderDataInfo='orderDataInfo'></PDPAMemoAagt>
      <div class="title">5/5 Document Checklist</div>
      <DocumentChecklistAagt :orderDataInfo='orderDataInfo'></DocumentChecklistAagt>
      
      <div v-if="this.$route.query.AagtThirdPartyDeclarationForm > 0 && renderComponent"  class="title">THIRD-PARTY FUNDS DECLARATION FORM</div>
      <ThirdPartyDeclarationAagt v-if="this.$route.query.AagtThirdPartyDeclarationForm > 0 && renderComponent" :user="'....XXX.....'" :orderDataInfo='orderDataInfo'></ThirdPartyDeclarationAagt>
    </div>
</template>
<script>





import CustomerApplicationAagt from "@/tools/order/CustomerApplicationAagt";

import KYCAagt from "@/tools/order/KYCAagt";

import LetterOfWishesAagt from "@/tools/order/LetterOfWishesAagt";
import PDPAMemoAagt from "@/tools/order/PdpaAagt";
import DocumentChecklistAagt from "@/tools/order/DocumentChecklistAagt";
import ThirdPartyDeclarationAagt from "@/tools/order/ThirdPartyDeclarationAagt";
import { getOrderDetail} from "@/api/order";
import { nextTick, ref } from 'vue';


export default {
    components:{
        CustomerApplicationAagt,KYCAagt,LetterOfWishesAagt,PDPAMemoAagt,DocumentChecklistAagt,ThirdPartyDeclarationAagt
    },
    data(){
        return{
          renderComponent: true,
            orderDataInfo:{
               orderId:null,
              //  isFilled:null,
              //  status:null
            }
        }
    },
    mounted(){
        this.orderDataInfo.orderId=this.$route.query.orderId
        console.log("----999---9-9-9-99999999999999------",this.orderDataInfo.orderId)
        // this.orderDataInfo.isFilled=this.$route.query.isFilled
        // this.orderDataInfo.status=this.$$route.query.status
    },
    methods:{


      async forceRerender() {
      // Remove MyComponent from the DOM
      this.renderComponent = false;

			// Wait for the change to get flushed to the DOM
      await this.$nextTick();

      // Add the component back in
      this.renderComponent = true;
    },
    onSelect4(){
     // alert("h")
this.forceRerender()
 //   alert("dddd")
        this.renderComponent = false;
        
     //   alert("dfdhbfhdvhbdjhb")
      },
  //     onSelect4(){
  //       this.forceRerender()
  //     alert("5")
  // this.renderComponent3 = true;
        
  //    alert("hgg")
  //     },

     getOrderDetail() {
      console.log("jdedu")
      getOrderDetail(this.$route.query.id)
        .then((res) => {
          console.log("--d-d--d-d--d-d",res);
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