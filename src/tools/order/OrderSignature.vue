<template>
  <div>
    <div class="title">1/5 Customer Application</div>
    <CustomerApplication @onSelect1='onSelect1'></CustomerApplication>
    <div class="title">2/5 Compliance Questionnaire</div>
    <KYC v-if="renderComponent"></KYC>
    <div class="title">3/5 Letter Of Wishes</div>
    <LetterOfWishes v-if="renderComponent"></LetterOfWishes>
    <div class="title">4/5 PDPA Memo</div>
    <PDPAMemo v-if="renderComponent"></PDPAMemo>
    <div class="title">5/5 Document Checklist</div>
    <DocumentChecklist v-if="renderComponent" @getOrderDetail="getOrderDetail" @onSelect='onSelect'></DocumentChecklist>
    <!-- <van-button  round block type="info" color="#7C655D" style="margin-top:5rem;" @click="onSelect()">
     Copy Link for Sharing with Settlor
    </van-button> -->
    <van-share-sheet
      v-model='showPicker'
      :options="options"
      title="Share with Settlor"
      description=""
      @select="share"
      cancel-text="Cancel"
      />
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
import { nextTick, ref } from 'vue';

export default {
  data(){
    return{
      renderComponent: true,
      link:'',
      setData :false,
      showPicker:false,
      orderData:{},
      shareURL:'',
      options:[
        // { name: '微信', icon: 'wechat' },
        // { name: '微博', icon: 'weibo' },
        { name: 'Copy Link', icon: 'link', description: '' },
      ]
    }
  },
  components:{
      CustomerApplication,KYC,LetterOfWishes,PDPAMemo,DocumentChecklist
  },
  mounted(){
   // alert("dd")
   this.$store.commit('changeCustomerApplicationId', '')
    let url=window.location.href
    console.log(url,"...u...r...l...")
    this.link=url.split("#")
    this.link[1]='/OrderSignatureCustomers'  
    
  
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
    share(option,index){
      console.log(option,index)
      this.shareURL=this.link.join('#')+'?orderId='+this.orderData.id+'&status='+this.orderData.status+'&customer_app_form='+this.orderData.customer_app_form+'&documentCheckListForm='+this.orderData.document_check_list_form+'&kyc_form='+this.orderData.kyc_form+'&letter_of_wishes_form='+this.orderData.letter_of_wishes_form+'&pdpa_memo_form='+this.orderData.pdpa_memo_form+'&isShare=true'
      if(index==0){
        console.log(this.shareURL)
        if(this.copyToClipboard(this.shareURL)){
          this.$toast("Copy Successful")
        }else{
          this.$toast("Copy failed")
        }
        
      }
    },
    async  getOrderDetail() {
       await  getOrderDetail(this.$store.state.CustomerApplicationId)
          .then((res) => {
            console.log(res,111111);
            this.orderData = res;
          })
          .catch((err) => {
            console.log(err);
          });
          this.$store.commit("changeShareOrderData",this.orderData)
      },
      onSelect1(){
this.forceRerender()
 //   alert("dddd")
        this.renderComponent = false;
        
     //   alert("dfdhbfhdvhbdjhb")
      },

      async onSelect() {
        if(this.$store.state.CustomerApplicationId !== ''){


        
        // this.$store.commit('changeisShare',true)
        // this.$nextTick(()=>{
        

          
          await this.getOrderDetail()
     
          
        // })
        // if(this.orderData.id==undefined){
        //   this.$toast('請提交之前的表單')
        //   return
        // }
       // alert("xxxxxx")
        console.log("nnnnnnnnnn..........", this.$store.state.CustomerApplicationId)
       this.getOrderDetail()
       if(this.orderData.customer_app_form === 0 || this.orderData.document_check_list_form === 0 || this.orderData.kyc_form === 0  || this.orderData.letter_of_wishes_form === 0  || this.orderData.pdpa_memo_form === 0 ){
            alert("Please Submit All Forms....")
          
         
        }else{

        console.log(this.link.join('#')+'?orderId='+this.orderData.id+'&status='+this.orderData.status+'&customer_app_form='+this.orderData.customer_app_form+'&documentCheckListForm='+this.orderData.document_check_list_form+'&kyc_form='+this.orderData.kyc_form+'&letter_of_wishes_form='+this.orderData.letter_of_wishes_form+'&pdpa_memo_form='+this.orderData.pdpa_memo_form+'&isShare=true',22222)
        const self = this
          // this.$store.commit('changeIsmenutop',false)
          var nativeShare = new NativeShare({
            wechatConfig: {
              appId: '',
              timestamp: '',
              nonceStr: '',
              signature: '',
            },
            // 让你修改的分享的文案同步到标签里，比如title文案会同步到<title>标签中
            // 这样可以让一些不支持分享的浏览器也能修改部分文案，默认都不会同步
            syncDescToTag: false,
            syncIconToTag: false,
            syncTitleToTag: false,
          })


           // 设置分享文案
          nativeShare.setShareData({
            icon: '@/assets/img/logo.png',
            link: this.link.join('#')+'?orderId='+this.orderData.id+'&status='+this.orderData.status+'&customer_app_form='+this.orderData.customer_app_form+'&documentCheckListForm='+this.orderData.document_check_list_form+'&kyc_form='+this.orderData.kyc_form+'&letter_of_wishes_form='+this.orderData.letter_of_wishes_form+'&pdpa_memo_form='+this.orderData.pdpa_memo_form+'&isShare=true',
            title: 'DDG',
            desc:'Order Signature',
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
            // self.$toast('The browser does not support automatic sharing. Please share manually')
            this.showPicker=true
          }
        // this.howShare = false;
      }
    }else{
      alert("Please Submit All Forms....")

    }
        },
        //複製
        copyToClipboard (text) {
        if (!document.createRange || !window.getSelection || !document.execCommand) {
          return false;
        }
        const node = document.createElement('span');
        node.innerText = text;
        document.body.appendChild(node);
        const range = document.createRange();
        range.selectNode(node);
        const selection = window.getSelection();
        selection.empty();
        selection.addRange(range);
        document.execCommand('copy');

        selection.empty();
        range.detach();
        document.body.removeChild(node);

        return true;
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
