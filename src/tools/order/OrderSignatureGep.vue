<template>
    <div>
      <div class="title">1/5 KYC</div>
      <CustomerApplicationGep  @onSelect11='onSelect11'></CustomerApplicationGep>
      <div class="title">2/5 SUBSCRIPTION FORM</div>
      <KYCGep v-if="renderComponent"></KYCGep>
      <div class="title">3/5 THIRD PARTY FUND DECLARATION</div>
      <LetterOfWishesGep v-if="renderComponent"></LetterOfWishesGep>
      <div class="title">4/5 NON-DISCLOSURE AGREEMENT</div>
      <PDPAMemoGep v-if="renderComponent"></PDPAMemoGep>
      <div class="title">5/5 Document Checklist</div>
      <DocumentChecklistGep v-if="renderComponent" @getOrderDetail="getOrderDetail" @onSelect='onSelect'></DocumentChecklistGep>
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
import CustomerApplicationGep from "@/tools/gep/CustomerApplicationGep";
import KYCGep from "@/tools/gep/KYCGep";
import LetterOfWishesGep from "@/tools/gep/LetterOfWishesGep";
import PDPAMemoGep from "@/tools/gep/PDPAMemoGep";
import DocumentChecklistGep from "@/tools/gep/DocumentChecklistGep";
import { getOrderDetail} from "@/api/order"

export default {
    data(){
      return{
        renderComponent: true,
        link:'',
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
        CustomerApplicationGep,KYCGep,LetterOfWishesGep,PDPAMemoGep,DocumentChecklistGep
    },
    mounted(){
      this.$store.commit('changeCustomerApplicationId', '')
      let url=window.location.href
      this.link=url.split("#")
      this.link[1]='/OrderSignatureCustomersGep'  
      
    
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
      onSelect11(){
this.forceRerender()
 //   alert("dddd")
        this.renderComponent = false;
        
     //   alert("dfdhbfhdvhbdjhb")
      },
      share(option,index){
        console.log(option,index,"share..................")
        this.shareURL=this.link.join('#')+'?orderId='+this.orderData.id+'&status='+this.orderData.status+'&gep_kyc_form='+this.orderData.gep_kyc_form+'&subcriptionform='+this.orderData.subcriptionform+'&gepthirdPartyDeclarationForm='+this.orderData.gepthirdPartyDeclarationForm+'&gepNonDisclosureAgreement='+this.orderData.gepNonDisclosureAgreement+'&gepDocumentCheckListForm='+this.orderData.gepDocumentCheckListForm+'&isShare=true'
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
              console.log(res,"......l..i..n..k......share.....");
              this.orderData = res;
            })
            .catch((err) => {
              console.log(err);
            });
            this.$store.commit("changeShareOrderData",this.orderData)
        },
        async  onSelect() {
          if(this.$store.state.CustomerApplicationId !== ''){


          
          // this.$store.commit('changeisShare',true)
          // this.$nextTick(()=>{
          //   this.getOrderDetail()
          // })
          // if(this.orderData.id==undefined){
          //   this.$toast('請提交之前的表單')
          //   return
          await this.getOrderDetail()
          // }
          this.getOrderDetail()
      
          if(this.orderData.gep_kyc_form === 0 || this.orderData.subcriptionform === 0 || this.orderData.gepthirdPartyDeclarationForm === 0  || this.orderData.gepNonDisclosureAgreement === 0  || this.orderData.gepDocumentCheckListForm === 0 ){
            alert("Please Submit All Forms....")
          
         
        }else{
         // console.log(this.link.join('#')+'?orderId='+this.orderData.id+'&status='+this.orderData.status+'&gep_kyc_form='+this.orderData.gep_kyc_form+'&subcriptionform='+this.orderData.subcriptionform+'&gepNonDisclosureAgreement='+this.orderData.gepNonDisclosureAgreement+'&gepDocumentCheckListForm='+this.orderData.gepthirdPartyDeclarationForm+'&gepthirdPartyDeclarationForm='+this.orderData.gepthirdPartyDeclarationForm+'&isShare=true',22222)
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
              link: this.link.join('#')+'?orderId='+this.orderData.id+'&status='+this.orderData.status+'&gep_kyc_form='+this.orderData.gep_kyc_form+'&subcriptionform='+this.orderData.subcriptionform+'&gepthirdPartyDeclarationForm='+this.orderData.gepthirdPartyDeclarationForm+'&gepNonDisclosureAgreement='+this.orderData.gepNonDisclosureAgreement+'&gepDocumentCheckListForm='+this.orderData.gepDocumentCheckListForm+'&isShare=true',
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
          // this.showShare = false;
        }
      }
      else{
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
