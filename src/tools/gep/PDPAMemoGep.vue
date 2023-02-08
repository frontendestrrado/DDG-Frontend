<template>
  <div class="PDPAMemo bodybox mt-5">
    <van-form
      validate-first
      @submit="submit"
      :submit-on-enter="false"
      :scroll-to-error="true"
    >
      <div class="minTitle">This Agreement is made and entered into as of _______/_______/________ (herein referred to as the “Effective date”) by and between DDG INTERNATIONAL BERHAD (Co. Reg. 202101023257 (1423557-M)) and having its office at No. 11-1, 2 & 3, Jalan Kampung Jawa, Off Bagan Luar, 12000 Butterworth, Pulau Pinang, Malaysia (hereinafter referred to as the “Disclosing Party”) and ____________________________________________ (NRIC No. / Business Registration Number _________________________), having his/her/its address at _____________________________________________ _______________________________________ (hereinafter referred to as the “Receiving Party”).</div>
      
      <div class="minTitle">
         <van-field
        v-model="formData.display_nda_date"
        name="display_nda_date"
        center
        autocomplete="off"
        type="text"
        label="Date"
        placeholder="Please enter the Date"
       
      />
      <van-field
        v-model="formData.display_nda_name"
        name="display_nda_name"
        center
        type="text"
        autocomplete="off"
        label="Name"
        placeholder="Please enter the Name"
        :required="true"
        :rules="[{ required: true }]"
      />
      
      
      <van-field
        v-model="formData.display_nda_nric_no"
        name="display_nda_nric_no"
        center
        autocomplete="off"
        type="text"
        label="NRIC No./ Business Registration Number:"
        placeholder="Please enter the NRIC No./ Business Registration Number:"
        :required="true"
        :rules="[{ required: true }]"
      />

      <van-field
        v-model="formData.display_address"
        name="witness_name"
        center
        autocomplete="off"
        type="text"
        label="Residential / Office Address"
        placeholder="Please enter the Residential / Office Address"
        :required="true"
        :rules="[{ required: true }]"
      />
      
      </div>
      
      <div class="minTitle">
        NOW THEREFORE, the Parties hereto agree as follows: - 

      </div>
      <div class="minTitle">
       1. “Proprietary Information” is understood to mean business and technical information and data made available by the Disclosing Party to the Receiving Party whether orally or in written form. The Disclosing Party must identify in writing. Within ten (10) business days after such oral or visual disclosure, that such information is proprietary. 
      </div>
      <div class="minTitle">
       Upon failure of the Receiving Party to obtain such written confirmation that such oral or visual information is proprietary within five (5) business days, it shall be deemed by the Receiving Party that all such information is NOT proprietary information. The following criteria must be satisfied before the Disclosing Party is able to claim “proprietariness” of such oral or visual information disclosed:- 

      </div>
      <div class="minTitle">
       (a) The information disclosed must not already be in the possession of the Receiving Party prior to the receipt from the Disclosing Party; or 2 Updated 091022
      </div>
      <div class="minTitle">(b) The information disclosed must not already been developed by the Receiving Party independent of information received from the Disclosing Party; or</div>
      <div class="minTitle">(c) The information disclosed must not already been public knowledge; or </div>
      <div class="minTitle">(d) The information disclosed must not be acquired by the Receiving Party from a third party entitled to disclose it.</div>
      <div class="minTitle">
       2. The Receiving Party shall hold any Proprietary Information disclosed by the Disclosing Party in confidence from the Effective Date until its termination in writing by the Disclosing Party, using the same degree of care it uses in respect of its own confidential information of like nature. Moreover, the Receiving Party shall:-
      </div>
      <div class="minTitle">
       (A) LIMIT ITS USE OF SUCH DISCLOSED Proprietary Information for the purpose of providing the said services ; and
      </div>
      <div class="minTitle">
       (B) Not to make any disclosure thereof except on a need-to-know basis to its employees, directors, advisers or authorised representative who shall include appropriate employees, directors, advisers and authorised representatives of the Receiving Party who shall adhere to the terms contained herein as if the said employee, director, adviser or authorised representative were the Receiving Party and the Receiving Party accepts full responsibility for their compliance with the terms hereof.
      </div>
           <div class="minTitle">
       3. Notwithstanding the above stated obligations of confidentiality (including limited use and disclosure) with respect to Proprietary Information, the Receiving Party will not be liable for disclosure or use of information which the receiving party can prove: 
      </div>
           <div class="minTitle">
       (a) was in its possession prior to receipt from the Disclosing Party; or 
      </div>
           <div class="minTitle">
       (b) is developed by the Receiving Party independent of information received from the Disclosing Party; or 
      </div>
           <div class="minTitle">
       (c) is or becomes known to the public without a breach of this Agreement; or 
      </div>
       <div class="minTitle">
      (d) is or was acquired by the Receiving Party from a third party entitled to disclose it; or 3 Updated 091022
      </div>
          <div class="minTitle">
      (e) the Receiving Party is required by law or the requirement of any regulatory body (including any relevant stock exchange) the disclose any Proprietary Information so disclosed will be treated confidentially; and
      </div>
          <div class="minTitle">
      (f) with the written consent of the Disclosing Party. 
      </div>
          <div class="minTitle">
      4. All Proprietary Information shall remain the property of the Disclosing Party. Upon request of the Disclosing Party, all such information and copies thereof including any document of such form of record into such information is merged, shall be immediately returned to the Disclosing Party, if available, or, if not available, certified in writing by an authorised officer of the Receiving Party as being destroyed. 
      </div>
          <div class="minTitle">
       5. No rights or obligations other than those expressly recited herein are to be implied. No license from the Disclosing Party is hereby granted or implied or conveyed, expressly, by estoppel or otherwise, under copyright, patents (existing or future) or any other intellectual property rights or for use of Proprietary Information except such use which is expressly contemplated by this Agreement. 
      </div>
          <div class="minTitle">
      6. The Disclosing Party warrants that it has the right to disclose the Proprietary Information and the right to authorize the Receiving Party to use the Proprietary Information as contemplated by this Agreement and to its knowledge there is no competing claim of title or intellectual property infringement relating to the Proprietary Information. 

      </div>
          <div class="minTitle">
      7. The Agreement is the completed and exclusive statement of the agreement between the Parties superseding all proposals and prior agreement, oral or written, and all other communication between the parties relating to the subject matter hereof. No change, modification, alteration or addition to any provision herein shall be binding on either Party unless mutually agreed to in writing and signed by an authorized representative of both parties. 

      </div>
          <div class="minTitle">
      8. The agreement shall be governed in all respects by the laws of Malaysia. The Parties hereby submit to the non-exclusive jurisdiction of the courts of Malaysia.
      </div>    <div class="minTitle">
      IN WITNESS THEREOF, the Parties hereto have executed this Agreement as of the date first written above
      </div>
        <div class="minTitle">
      Signed by For and on behalf of DDG INTERNATIONAL BERHAD 202101023257 (1423557-M)
      </div>
        <div class="minTitle">
      Name: Herman Tan 
      </div>
        <div class="minTitle">
      Designation: Managing Director
      </div>

      <div class="tl">Managing Director Signature</div>
      <vue-esign ref="director_signature" v-show="sig1" :width="800" :height="300" :isCrop="false"
        :lineWidth="6" lineColor="#000000" bgColor.sync="#fff" style="border: 1px solid #666" />
      <van-image v-show="!sig1" class="esignImgbox"
        :src="formData.director_signature" />
      <div class="tr">
        <div class="esignBtn" @click="handleReset1()" >Clear</div>
        <div class="esignBtn" @click="handleGenerate1()" >Confirm</div>
      </div>

      
 <van-field
        v-model="formData.nda_name"
        name="nda_name"
        center
        type="text"
        autocomplete="off"
        label="Subscriber Name"
        placeholder="Please enter the Name"
        :required="true"
        :rules="[{ required: true }]"
      />

      <div class="tl">Subscriber’s Signature</div>
      <vue-esign ref="subscriber_signature" v-show="sig2" :width="800" :height="300" :isCrop="false"
        :lineWidth="6" lineColor="#000000" bgColor.sync="#fff" style="border: 1px solid #666" />
      <van-image v-show="!sig2" class="esignImgbox"
        :src="formData.subscriber_signature" />
      <div class="tr">
        <div class="esignBtn" @click="handleReset()" >Clear</div>
        <div class="esignBtn" @click="handleGenerate()" >Confirm</div>
      </div>
       <van-field
        v-model="formData.nda_nric_no"
        name="nda_nric_no"
        center
        autocomplete="off"
        type="text"
        label="NRIC No."
        placeholder="Please enter the NRIC No."
        :required="true"
        :rules="[{ required: true }]"
      />
     
      
      
     
     
      <van-button v-if="!isDone" round block type="info" native-type="submit" color="#7C655D">
        {{ from == "create" ? "Next / Save" : "Next / Save" }}
      </van-button>
    </van-form>
    <!-- 日期彈框 -->
<!--    <van-popup v-model="isShowPicker" position="bottom">
      <van-datetime-picker
        v-model="currentContent"
        type="date"
        :min-hour="0"
        confirm-button-text="Confirm"
        cancel-button-text="Cancel"
        :min-date="minDate"
        @cancel="onHiddenPicker"
        @confirm="onConfirmPicker"
      />
    </van-popup>-->
  </div>
</template>

<script>
import moment from 'moment'
import { uploadAutograph } from "@/api/util";
import { pdpa_memoGep, getOrdersForms, putOrdersForms } from "@/api/order";
export default {
  props:['orderDataInfo'],
  data() {
    return {
      formData: {
        display_nda_date: moment(new Date()).format('DD-MM-YYYY'),
        display_nda_name: this.$store.state.campanyIndividualName1Gep,
        display_nda_nric_no: this.$store.state.nric_pass_roc_noGep,
        nda_name: this.$store.state.campanyIndividualName1Gep,
        nda_nric_no:this.$store.state.nric_pass_roc_noGep,
        display_address:this.$store.state.addressGep,
        director_signature:"",
        subscriber_signature:this.$store.state.subscriber_signatureGep
      },
      sig1:true,
      sig2:true,
      isShowPicker: false, // 控制日期彈框
      currentContent: new Date(), // 日期彈框顯示當前日期
      whichDate: "", // 區分是哪個日期觸發彈框
      from: "", // 記錄哪個頁面進入的
      isFilled: "", // 表單id
      minDate: new Date(1900, 0, 1),
      isDone: false, // 訂單是否已確認
      pattern: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,// 正则验证时间
    };
  },
  mounted() {
    // this.from = this.$route.query.from;
    // this.isFilled = this.$route.query.isFilled;
    // this.isDone = this.$route.query.status == 1 ? true : false;
    if(this.$store.state.isOverseaSignature){
    //  console.log("....10..1...",this.isFilled)
    //  alert("1")
      this.from = "create"
      this.isFilled=0
    }else{
      //alert("2")
      this.from = this.$route.query.from;
      this.isFilled = this.$route.query.isFilled;
      this.isDone = this.$route.query.status == 1 ? true : false;
    }
    if(this.$route.query.isShare){
      //alert("3")
     this.isFilled=this.$route.query.gepNonDisclosureAgreement
    }
    console.log("....10.....",this.isFilled)
    this.getFormData();
    this.isDone = sessionStorage.getItem('orderStatus') === '2'
  },
  methods: {
    // 如果已填 獲取數據
    handleReset(index) {
      this.$refs["subscriber_signature"].reset(); //清空画布
      this.sig2 = true
      this.formData.subscriber_signature = ''
    },
    handleReset1(index) {
      this.$refs["director_signature"].reset(); //清空画布
      this.sig1 = true
      this.formData.director_signature = ''
    },
    handleGenerate1(index) {
      var that = this;
      this.$refs["director_signature"]
        .generate()
        .then((res) => {
          console.log(".......img..1....", res);
          uploadAutograph({
            image: res,
            path: "",
          })
            .then((res) => {
              console.log(".......img...2...", res);
              this.$toast.success("Signature success");
              this.formData.director_signature = res.path;
            })
            .catch((err) => {
              that.$toast({
                type: "fail",
                message: "Uploading picture failed",
              });
            });
        })
        .catch((err) => {
          //  没有签名，点击生成图片时调用
          that.$toast({
            type: "fail",
            message: err + " No signature！",
          });
          alert(err); // 画布没有签字时会执行这里 'Not Signned'
        });
    },
    handleGenerate(index) {
      var that = this;
      this.$refs["subscriber_signature"]
        .generate()
        .then((res) => {
          console.log(".......img..1....", res);
          uploadAutograph({
            image: res,
            path: "",
          })
            .then((res) => {
              console.log(".......img...2...", res);
              this.$toast.success("Signature success");
              this.formData.subscriber_signature = res.path;
            })
            .catch((err) => {
              that.$toast({
                type: "fail",
                message: "Uploading picture failed",
              });
            });
        })
        .catch((err) => {
          //  没有签名，点击生成图片时调用
          that.$toast({
            type: "fail",
            message: err + " No signature！",
          });
          alert(err); // 画布没有签字时会执行这里 'Not Signned'
        });
    },
    getFormData() {
      if (this.isFilled > 0) {

   
        console.log(this.isFilled,"....1234567890...");
        getOrdersForms(this.isFilled, { type: "GEP NDA" })
          .then((res) => {
            console.log("....1234567890...",res);
            this.formData = res;
            this.sig1=false
            this.sig2=false
          })
          .catch((err) => {});
      }
    },
    submit(form) {
      console.log(form);
   
      let data = JSON.parse(JSON.stringify(this.formData));
      console.log(".......33333.........",data)
      if (!this.formData.subscriber_signature) {
        this.$toast.fail("Please sign your name");
        return;
      }
      else if (!this.formData.director_signature) {
        this.$toast.fail("Please sign your name");
        return;
      }
      if (this.isFilled > 0) {
        // 修改
        putOrdersForms(this.isFilled, {
          type: "GEP NDA",
          data: JSON.stringify(data),
        }).then((res) => {
          console.log(res, ".........7777777777...............");
          this.$toast({
            type: "success",
            message: "Modify the success",
          });
          if(!this.$route.query.isShare){
            this.$router.go(-1);
          }
        });
      } else {
        let id=null
        if(this.$store.state.isOverseaSignature){
          id=this.$store.state.CustomerApplicationId
        }else{
          id=this.$route.query.orderId
        }
        pdpa_memoGep(id, data)
          .then((res) => {
            console.log(res);
            this.$toast({
              type: "success",
              message: "You can Just moved to Next form",
            });
            if (this.from == "create") {
              this.$store.commit("changePage", {
                tabbar: "/DocumentChecklistGep",
                title: "5/5 Document Checklist",
              });
              if(!this.$store.state.isOverseaSignature&&!this.$route.query.isShare){
                  this.$router.push(
                 "/DocumentChecklistGep?from=create&orderId=" + this.$route.query.orderId
                );
              }

            } else {
              this.$router.go(-1);
            }
          })
          .catch((err) => {});
      }
    },
    // 清空画布
    // handleReset(val) {
    //   this.$refs[val].reset(); //清空画布
    //   this.formData.signature = ''
    // },
    // handleGenerate(val) {
    //   var that = this;
    //   this.$refs[val]
    //     .generate()
    //     .then((res) => {
    //       uploadAutograph({
    //         image: res,
    //         path: "",
    //       })
    //         .then((res) => {
    //           console.log(res);
    //           this.formData[val] = res.path;
    //           this.$toast.success("Signature success");
    //         })
    //         .catch((err) => {
    //           that.$toast({
    //             type: "fail",
    //             message: "Uploading picture failed",
    //           });
    //         });
    //     })
    //     .catch((err) => {
    //       //  没有签名，点击生成图片时调用
    //       that.$toast({
    //         type: "fail",
    //         message: err + " No signature！",
    //       });
    //       alert(err); // 画布没有签字时会执行这里 'Not Signned'
    //     });
    // },
    // 展示日期弹框
/*    onShowPicker(val) {
      this.isShowPicker = true;
      this.whichDate = val;
    },*/
  /*  onHiddenPicker() {
      this.currentContent = new Data();
      this.isShowPicker = false;
    },
    onConfirmPicker() {
      this.formData[this.whichDate] = this.formatDateYMD(this.currentContent);
      this.isShowPicker = false;
    },*/
    // 出來日期格式ymd
/*    formatDateYMD(value) {
      if (!value) {
        return "";
      } else {
        var date = new Date(value);
        var Y = date.getFullYear() + "-";
        var M = date.getMonth() + 1 + "-";
        var D = date.getDate();
        return Y + M + D;
      }
    },*/
  },
};
</script>

<style scoped>
.PDPAMemo {
  text-align: left;
}
.minTitle {
  font-weight: bold;
  line-height: 24px;
}
/deep/ .van-field__label {
  width: 13.2rem;
}
/*手机*/
@media screen and (max-width: 768px) {
  /deep/ .van-field__label {
    width: 30rem;
  }
}
@media screen and (max-width: 576px) {
  .esignImgbox {
    width: 100% !important;
    height: 112.5px !important;
  }
  }
.esignImgbox {
  border: 1px solid #666666;
  width: 800px;
    height: 300px;
    @media screen and (max-width: 576px) {
      width: 100% !important;
      height: 112.5px !important;
  }

}
</style>
