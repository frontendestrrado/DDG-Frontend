<template>
  <div>
    <div class="title">1/5 Customer Application</div>
    <CustomerApplicationAagt @onSelect1='onSelect1'></CustomerApplicationAagt>
    <div class="title">2/5 Compliance Questionnaire</div>
    <!-- <KYCAagt v-if="renderComponent" @onSelect6='onSelect6'></KYCAagt> -->
    <KYCAagt v-if="renderComponent" ></KYCAagt>
    <div class="title">3/5 Letter Of Wishes</div>
    <LetterOfWishesAagt v-if="renderComponent"></LetterOfWishesAagt>
    <div class="title">4/5 PDPA Memo</div>
    <PDPAMemoAagt v-if="renderComponent"></PDPAMemoAagt>


    <div class="title">5/5 Document Checklist</div>
    <DocumentChecklistAagt v-if="renderComponent" @getOrderDetail="getOrderDetail" @onSelect='onSelect' @onSelect3='onSelect3' @onSelect4='onSelect4'></DocumentChecklistAagt>

    <div v-if="renderComponent3 && renderComponent6" class="title">THIRD-PARTY FUNDS DECLARATION FORM</div>
<ThirdPartyDeclarationAagt v-if="renderComponent3 && renderComponent6" @getOrderDetail="getOrderDetail" @onSelect='onSelect'></ThirdPartyDeclarationAagt>

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
import CustomerApplicationAagt from "@/tools/order/CustomerApplicationAagt";
import KYCAagt from "@/tools/order/KYCAagt";
import LetterOfWishesAagt from "@/tools/order/LetterOfWishesAagt";
import PDPAMemoAagt from "@/tools/order/PdpaAagt";
import DocumentChecklistAagt from "@/tools/order/DocumentChecklistAagt";
import ThirdPartyDeclarationAagt from "@/tools/order/ThirdPartyDeclarationAagt";
import { getOrderDetail} from "@/api/order"
import { nextTick, ref } from 'vue';

export default {
  data(){
    return{
      renderComponent6: true,
      renderComponent: true,
      renderComponent3: false,
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
      CustomerApplicationAagt,KYCAagt,LetterOfWishesAagt,PDPAMemoAagt,DocumentChecklistAagt,ThirdPartyDeclarationAagt
  },
  mounted(){
   // alert("dd")
   this.$store.commit('changeCustomerApplicationId', '')
    let url=window.location.href
    console.log(url,"...u...r...l...")
    this.link=url.split("#")
    this.link[1]='/OrderSignatureCustomersAagt'  
    
  
  },
  methods:{
    async forceRerender6() {
      // Remove MyComponent from the DOM
      this.renderComponent6 = false;

			// Wait for the change to get flushed to the DOM
      await this.$nextTick();

      // Add the component back in
      this.renderComponent6 = true;
    },
    onSelect6(){
     // alert("h")
this.forceRerender6()
 //   alert("dddd")
        this.renderComponent6 = false;
        
     //   alert("dfdhbfhdvhbdjhb")
      },
    async forceRerender() {
      // Remove MyComponent from the DOM
      this.renderComponent = false;

			// Wait for the change to get flushed to the DOM
      await this.$nextTick();

      // Add the component back in
      this.renderComponent = true;
    },
    async forceRerender3() {
      // Remove MyComponent from the DOM
      this.renderComponent3 = false;

			// Wait for the change to get flushed to the DOM
      await this.$nextTick();

      // Add the component back in
      this.renderComponent3 = true;
    },
    async forceRerender4() {
      // Remove MyComponent from the DOM
      this.renderComponent3 = true;

			// Wait for the change to get flushed to the DOM
      await this.$nextTick();

      // Add the component back in
      this.renderComponent3 = false;
    },
    share(option,index){
      console.log(option,index)
      if(this.orderData.AagtThirdPartyDeclarationForm > 0){
        this.shareURL=this.link.join('#')+'?orderId='+this.orderData.id+'&status='+this.orderData.status+'&AagtApplicationForm='+this.orderData.AagtApplicationForm+'&AagtDocumentCheckListForm='+this.orderData.AagtDocumentCheckListForm+'&AagtKycQuestionnaireForm='+this.orderData.AagtKycQuestionnaireForm+'&AagtLetterOfWishesForm='+this.orderData.AagtLetterOfWishesForm+'&AagtPdpaForm='+this.orderData.AagtPdpaForm+'&AagtThirdPartyDeclarationForm='+this.orderData.AagtThirdPartyDeclarationForm+'&isShare=true'
      }
      else{
        this.shareURL=this.link.join('#')+'?orderId='+this.orderData.id+'&status='+this.orderData.status+'&AagtApplicationForm='+this.orderData.AagtApplicationForm+'&AagtDocumentCheckListForm='+this.orderData.AagtDocumentCheckListForm+'&AagtKycQuestionnaireForm='+this.orderData.AagtKycQuestionnaireForm+'&AagtLetterOfWishesForm='+this.orderData.AagtLetterOfWishesForm+'&AagtPdpaForm='+this.orderData.AagtPdpaForm+'&isShare=true'
      }
     
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
      onSelect4(){
     //   alert("selct 4")
//this.forceRerender4()
 //   alert("dddd")
        this.renderComponent3 = false;
        
     //   alert("dfdhbfhdvhbdjhb")
      },
      onSelect3(){
this.forceRerender3()
 //   alert("dddd")
        this.renderComponent3 = false;
        
     //   alert("dfdhbfhdvhbdjhb")
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
        console.log("nnnnnnnnnn..........", this.renderComponent3)
       this.getOrderDetail()
       if(this.orderData.AagtApplicationForm === 0 || this.orderData.AagtDocumentCheckListForm === 0 || this.orderData.AagtKycQuestionnaireForm === 0  || this.orderData.AagtLetterOfWishesForm === 0  || this.orderData.AagtPdpaForm === 0 || ( this.renderComponent3 == true && this.orderData.AagtThirdPartyDeclarationForm === 0)  ){
            alert("Please Submit All Forms....")
          
         
        }else{
          if(this.orderData.AagtThirdPartyDeclarationForm > 0){
            console.log(this.link.join('#')+'?orderId='+this.orderData.id+'&status='+this.orderData.status+'&AagtApplicationForm='+this.orderData.AagtApplicationForm+'&AagtDocumentCheckListForm='+this.orderData.AagtDocumentCheckListForm+'&AagtKycQuestionnaireForm='+this.orderData.AagtKycQuestionnaireForm+'&AagtLetterOfWishesForm='+this.orderData.AagtLetterOfWishesForm+'&AagtPdpaForm='+this.orderData.AagtPdpaForm+'&AagtThirdPartyDeclarationForm='+this.orderData.AagtThirdPartyDeclarationForm+'&isShare=true',22222)
      }
      else{
        console.log(this.link.join('#')+'?orderId='+this.orderData.id+'&status='+this.orderData.status+'&AagtApplicationForm='+this.orderData.AagtApplicationForm+'&AagtDocumentCheckListForm='+this.orderData.AagtDocumentCheckListForm+'&AagtKycQuestionnaireForm='+this.orderData.AagtKycQuestionnaireForm+'&AagtLetterOfWishesForm='+this.orderData.AagtLetterOfWishesForm+'&AagtPdpaForm='+this.orderData.AagtPdpaForm+'&isShare=true',22222)
      }
       
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
           if(this.orderData.AagtThirdPartyDeclarationForm > 0){
            nativeShare.setShareData({
            icon: '@/assets/img/logo.png',
            link: this.link.join('#')+'?orderId='+this.orderData.id+'&status='+this.orderData.status+'&AagtApplicationForm='+this.orderData.AagtApplicationForm+'&AagtDocumentCheckListForm='+this.orderData.AagtDocumentCheckListForm+'&AagtKycQuestionnaireForm='+this.orderData.AagtKycQuestionnaireForm+'&AagtLetterOfWishesForm='+this.orderData.AagtLetterOfWishesForm+'&AagtPdpaForm='+this.orderData.AagtPdpaForm+'&AagtThirdPartyDeclarationForm='+this.orderData.AagtThirdPartyDeclarationForm+'&isShare=true',
            title: 'DDG',
            desc:'Order Signature',
            from: '@fa-ge',
          })
      }
      else{
        nativeShare.setShareData({
            icon: '@/assets/img/logo.png',
            link: this.link.join('#')+'?orderId='+this.orderData.id+'&status='+this.orderData.status+'&AagtApplicationForm='+this.orderData.AagtApplicationForm+'&AagtDocumentCheckListForm='+this.orderData.AagtDocumentCheckListForm+'&AagtKycQuestionnaireForm='+this.orderData.AagtKycQuestionnaireForm+'&AagtLetterOfWishesForm='+this.orderData.AagtLetterOfWishesForm+'&AagtPdpaForm='+this.orderData.AagtPdpaForm+'&isShare=true',
            title: 'DDG',
            desc:'Order Signature',
            from: '@fa-ge',
          })
      }

      

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
