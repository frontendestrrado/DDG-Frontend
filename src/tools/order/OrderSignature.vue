<template>
    <div>
      <div class="title">1/5 Customer Application</div>
      <CustomerApplication></CustomerApplication>
      <div class="title">2/5 Compliance Questionnaire</div>
      <KYC></KYC>
      <div class="title">3/5 Letter Of Wishes</div>
      <LetterOfWishes></LetterOfWishes>
      <div class="title">4/5 PDPA Memo</div>
      <PDPAMemo></PDPAMemo>
      <div class="title">5/5 Document Checklist</div>
      <DocumentChecklist @getOrderDetail="getOrderDetail"></DocumentChecklist>
      <van-button  round block type="info" color="#7C655D" style="margin-top:5rem;" @click="onSelect()">
        share
      </van-button>
    </div>
</template>
<script>
import NativeShare from 'nativeshare'
import CustomerApplication from "@/tools/order/CustomerApplication";
import KYC from "@/tools/order/KYC";
import LetterOfWishes from "@/tools/order/LetterOfWishes";
import PDPAMemo from "@/tools/order/PDPAMemo";
import DocumentChecklist from "@/tools/order/DocumentChecklist";
import { getOrderDetail} from "@/api/order"
export default {
    data(){
      return{
        link:'',
        orderData:{}
      }
    },
    components:{
        CustomerApplication,KYC,LetterOfWishes,PDPAMemo,DocumentChecklist
    },
    mounted(){
      
      let url=window.location.href
      this.link=url.split("#")
      this.link[1]='/OrderSignatureCustomers'  
      
    },
    methods:{
      async  getOrderDetail() {
         await  getOrderDetail(this.$store.state.CustomerApplicationId)
            .then((res) => {
              console.log(res);
              this.orderData = res;
            })
            .catch((err) => {
              console.log(err);
            });
            this.$store.commit("changeShareOrderData",this.orderData)
        },
        onSelect() {
          // this.$store.commit('changeisShare',true)
          // this.$nextTick(()=>{
          //   this.getOrderDetail()
          // })
          
          console.log(this.link.join('#')+'?orderId='+this.orderData.id+'&status='+this.orderData.status+'&customer_app_form='+this.orderData.customer_app_form+'&documentCheckListForm='+this.orderData.document_check_list_form+'&kyc_form='+this.orderData.kyc_form+'&letter_of_wishes_form='+this.orderData.letter_of_wishes_form+'&pdpa_memo_form='+this.orderData.pdpa_memo_form+'&isShare=true',22222)
          const self = this
            // this.$store.commit('changeIsmenutop',false)
            var nativeShare = new NativeShare({
            //   wechatConfig: {
            //     appId: self.shlist.appId,
            //     timestamp: self.shlist.timestamp,
            //     nonceStr: self.shlist.nonceStr,
            //     signature: self.shlist.signature,
            //   },
              // 让你修改的分享的文案同步到标签里，比如title文案会同步到<title>标签中
              // 这样可以让一些不支持分享的浏览器也能修改部分文案，默认都不会同步
              syncDescToTag: false,
              syncIconToTag: false,
              syncTitleToTag: false,
            })


             // 设置分享文案
            nativeShare.setShareData({
              icon: '../../../src/assets/img/logo.png',
              link: this.link.join('#')+'?orderId='+this.orderData.id+'&status='+this.orderData.status+'&customer_app_form='+this.orderData.customer_app_form+'&documentCheckListForm='+this.orderData.document_check_list_form+'&kyc_form='+this.orderData.kyc_form+'&letter_of_wishes_form='+this.orderData.letter_of_wishes_form+'&pdpa_memo_form='+this.orderData.pdpa_memo_form+'&isShare=true',
              title: 'DDG',
              // desc:self.title,
              from: '@fa-ge',
            })

            // 唤起浏览器原生分享组件(如果在微信中不会唤起，此时call方法只会设置文案。类似setShareData)
            try {
                 nativeShare.call()
              //  nativeShare.call('wechatFriend')
              // 如果是分享到微信则需要 nativeShare.call('wechatFriend')
              // 类似的命令下面有介绍
              console.log('支持')
            } catch(err) {
              // 如果不支持，你可以在这里做降级处理
              self.$toast('The browser does not support automatic sharing. Please share manually')
            }
          // this.showShare = false;

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