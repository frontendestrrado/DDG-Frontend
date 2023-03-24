<template>
  <div class="OrderDetail bodybox">
    <div style="text-align: left; font-weight: bold; padding-left: 16px">
      Forms
    </div>
    <div style="margin-bottom: 40px">
      <van-cell
        is-link
        :value="orderData.gep_kyc_form == 0 ? 'Not Filled' : 'Filled'"
        title-style="text-align:left;"
        title="KYC"
        @click="
          $store.commit('changePage', { tabbar: '/CustomerApplicationGep', title: '1/5 KYC' });
          $router.push({
            path: '/CustomerApplicationGep',
            query: { orderId: orderData.id, isFilled: orderData.gep_kyc_form, status: orderData.status },
          });
        "
      ></van-cell>
      <van-cell
        is-link
        :value="orderData.subcriptionform == 0 ? 'Not Filled' : 'Filled'"
        title-style="text-align:left;"
        title="SUBSCRIPTION FORM"
        @click="
          $store.commit('changePage', { tabbar: '/KYCGep', title: '2/5 SUBSCRIPTION FORM' });
          $router.push({
            path: '/KYCGep',
            query: { orderId: orderData.id, isFilled: orderData.subcriptionform, status: orderData.status },
          });
        "
      ></van-cell>
      <van-cell
        is-link
        :value="orderData.gepthirdPartyDeclarationForm == 0 ? 'Not Filled' : 'Filled'"
        title-style="text-align:left;"
        title="THIRD PARTY FUND DECLARATION"
        @click="
          $store.commit('changePage', {
            tabbar: '/LetterOfWishesGep',
            title: '3/5 THIRD PARTY FUND DECLARATION',
          });
          $router.push({
            path: '/LetterOfWishesGep',
            query: { orderId: orderData.id, isFilled: orderData.gepthirdPartyDeclarationForm, status: orderData.status },
          });
        "
      ></van-cell>
      <van-cell
        is-link
        :value="orderData.gepNonDisclosureAgreement == 0 ? 'Not Filled' : 'Filled'"
        title-style="text-align:left;"
        title="NON-DISCLOSURE AGREEMENT"
        @click="
          $store.commit('changePage', {
            tabbar: '/PDPAMemoGep',
            title: '4/5 NON-DISCLOSURE AGREEMENT',
          });
          $router.push({ path: '/PDPAMemoGep', query: { orderId: orderData.id,isFilled: orderData.gepNonDisclosureAgreement, status: orderData.status } });
        "
      ></van-cell>
      <van-cell
        is-link
        :value="orderData.gepDocumentCheckListForm == 0 ? 'Not Filled' : 'Filled'"
        title-style="text-align:left;"
        title="Document Checklist"
        @click="
          $store.commit('changePage', {
            tabbar: '/DocumentChecklistGep',
            title: '5/5 Document Checklist',
          });
          $router.push({ path: '/DocumentChecklistGep', query: { orderId: orderData.id,isFilled: orderData.gepDocumentCheckListForm, status: orderData.status } });
        "
      ></van-cell>
      <!-- <van-cell
        is-link
        :value="
          orderData.third_party_declaration_form == 0 ? 'Not Filled' : 'Filled'
        "
        title-style="text-align:left;"
        title="Third Party Declaration (If Applicable)"
        @click="
          $store.commit('changePage', {
            tabbar: '/ThirdPartyDeclaration',
            title: 'Third Party Declaration',
          });
          $router.push({
            path: '/ThirdPartyDeclaration',
            query: { orderId: orderData.id,isFilled: orderData.third_party_declaration_form, status: orderData.status },
          });
        "
      ></van-cell> -->
      <div>
      <van-button  round block type="info" :disabled="orderData.status != 0 && orderData.status != 3 " style="margin-bottom:10px;" color="#7C655D" @click="shareLink">
       Copy Link for Sharing with Settlor
      </van-button>
    </div>
      <van-button  round block type="info" :disabled="orderData.status != 0 && orderData.status != 3 " color="#7C655D" @click="submitAll">
        Submit all forms
      </van-button>
      <div v-if="orderData.status == 0" style="margin-top:10px;">* Please confirm that all forms are completed before submitting</div>
    </div>
    <van-cell
      title-style="text-align:left;"
      title="Settlor Name"
      :value="orderData.settlor_name"
    ></van-cell>
    <van-cell
      title-style="text-align:left;"
      title="amount"
      :value="orderData.amount"
    ></van-cell>
    <van-cell
      title-style="text-align:left;"
      title="created_at"
      :value="orderData.created_at"
    ></van-cell>
    <van-cell
      title-style="text-align:left;"
      title="Order Number"
      :value="orderData.no"
    ></van-cell>

    <van-cell
      title-style="text-align:left;"
      title="Submitted_at"
      :value="orderData.date"
    ></van-cell>

    <!-- <van-cell
    v-if="orderData.fund_received_status === 'Fund Received'"
      title-style="text-align:left;"
      title=" Fund received acknowledgement"
      :value="orderData.fund_received"
    >
    <van-col span="12" style="text-align:left">
        <van-button @click="download(orderData.fund_received_file)" v-if="orderData.fund_received_status === 'Fund Received'" class="btn" type="primary" size="small" color="#A79278" style="margin-left:10px">Download</van-button>
      </van-col>{{ orderData.fund_received }}</van-cell>

    <van-cell
    v-if="orderData.trust_setup_status === 'Trust Setup'"
      title-style="text-align:left;"
      title=" Trust setup acknowledgement"
      :value="orderData.trust_setup"
    > <van-col span="12" style="text-align:left">
        <van-button @click="download(orderData.trust_setup_file)" v-if="orderData.trust_setup_status === 'Trust Setup'" class="btn" type="primary" size="small" color="#A79278" style="margin-left:10px">Download</van-button>
      </van-col>{{ orderData.trust_setup }}</van-cell> -->


    <div class="orderTitle">The Order Feedback</div>
    <van-field
      v-model="patchOrder"
      class="patchInput"
      type="textarea"
      rows="2"
      autosize
      placeholder="The order feedback"
    />
    <van-button class="loginBtn" type="info" @click="submit" color="#7C655D">Submit Feedback</van-button
    >

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
import { patchOrders } from "@/api/tools";
import { getOrderDetail, confirmOrder } from "@/api/order";
export default {
  data() {
    return {
      orderData: {},
      patchOrder: "",
      orderStatus: 0,
      link:'',
        showPicker:false,
        
        shareURL:'',
        options:[
          // { name: '微信', icon: 'wechat' },
          // { name: '微博', icon: 'weibo' },
          { name: 'Copy Link', icon: 'link', description: '' },
        ]
    };
  },
  mounted() {
    // this.orderData = this.$route.query.data
    this.orderStatus = sessionStorage.getItem('orderStatus')
    this.patchOrders();
    this.getOrderDetail();

    let url=window.location.href
      this.link=url.split("#")
      this.link[1]='/OrderSignatureCustomersGep'  
  },
  methods: { 
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
     async  shareLink() {
          if(this.$route.query.id !== ''){


          
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

    download(file) {

window.open(file, '_self')
},
    getOrderDetail() {
      getOrderDetail(this.$route.query.id)
        .then((res) => {
          console.log("3333333",res);
          this.orderData = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    patchOrders() {
      patchOrders(JSON.parse(sessionStorage.orderId))
        .then((res) => {
          console.log(res, "订单反馈");
          this.patchOrder = res.note;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    // 提交反馈
    submit() {
      patchOrders(JSON.parse(sessionStorage.orderId), { note: this.patchOrder })
        .then((res) => {
          console.log(res, "订单反馈");
          this.patchOrder = res.note;
          this.$toast("Feedback submitted successfully");
          this.patchOrder=''
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    // 確認訂單
    submitAll() {
      confirmOrder(this.$route.query.id).then(res => {
        console.log(res, '確認訂單');
        this.$toast("All submitted successfully");
        this.getOrderDetail()
      })
    }
  },
};
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
