<template>
  <div class="LetterOfWishes bodybox mt-5">
    <van-form
      validate-first
      @submit="submit"
      :submit-on-enter="false"
      :scroll-to-error="true"
    >
        <!-- @click="onShowPicker('date')" -->
      <!-- <van-field
        readonly
        v-model="formData.date"
        name="date"
        center
        disabled
        label="Date"
        placeholder="[Leave Blank]"
      />
      -->
      <div class="minTitle">
        With reference to Clause 3.2 of the Trust Deed, I/We recommend you to
        invest the Trust Capital in reputable assets management companies
        including but not limited to Philip Capital Management or Affin Hwang
        Capital and/or in listed companies in Malaysia.
      </div>
   
     
      <div class="minTitle">SUBSCRIBER DETAILS</div>
       <van-field
        v-model="formData.subscriber_name"
        name="subscriber_name"
        autocomplete="off"
        center
        type="text"
        label="Name of the Individual, Company or Organisation"
        placeholder="Please enter the Name of the Individual, Company or Organisation"
       
      />
       <van-field
        v-model="formData.subscriber_dob"
        name="subscriber_dob"
        center
        autocomplete="off"
        type="text"
        label="Date of Birth / Date of Registration"
        placeholder="Please enter the Date of Birth / Date of Registration"
      
      />
       <van-field
        v-model="formData.subscriber_nric_no"
        name="subscriber_nric_no"
        center
        type="text"
        autocomplete="off"
        label="NRIC/Passport/Company/ Organization Registration No"
        placeholder="Please enter the NRIC/Passport/Company/ Organization Registration No"
       
      />
       <van-field
        v-model="formData.subscriber_address"
        name="subscriber_address"
        center
        type="text"
        autocomplete="off"
        label="Address of the Individual, Company or Organisation"
        placeholder="Please enter the Address of the Individual, Company or Organisation"
      
      />
       <van-field
        v-model="formData.subscriber_contact_no"
        name="subscriber_contact_no"
        center
        type="text"
        label="Contact No"
        autocomplete="off"
        placeholder="Please enter the Contact No"
        
      /> <van-field
        v-model="formData.subscriber_reference_no"
        name="subscriber_reference_no"
        center
        type="text"
        autocomplete="off"
        label="Reference No"
        placeholder="Please enter the Reference No"
        
      />


 <div class="minTitle">Third-Party Details</div>
       <van-field
        v-model="formData.third_party_name"
        autocomplete="off"
        name="third_party_name"
        center
        type="text"
        label="Name of the Individual, Company or Organisation"
        placeholder="Please enter the Name of the Individual, Company or Organisation"
       
      />
       <van-field
        v-model="formData.third_party_dob"
        name="third_party_dob"
        autocomplete="off"
        center
        type="text"
        label="Date of Birth / Date of Registration"
        placeholder="Please enter the Date of Birth / Date of Registration"
      
      />
       <van-field
        v-model="formData.third_party_nric_no"
        name="third_party_nric_no"
        center
        autocomplete="off"
        type="text"
        label="NRIC/Passport/Company/ Organization Registration No"
        placeholder="Please enter the NRIC/Passport/Company/ Organization Registration No"
      
      />
       <van-field
        v-model="formData.third_party_address"
        name="third_party_address"
        center
        type="text"
        autocomplete="off"
        label="Address of the Individual, Company or Organisation"
        placeholder="Please enter the Address of the Individual, Company or Organisation"
     
      />
       <van-field
        v-model="formData.third_party_phone"
        name="third_party_phone"
        center
        type="text"
        label="Contact No"
        autocomplete="off"
        placeholder="Please enter the Contact No"
      
      /> <van-field
        v-model="formData.third_party_relationship"
        name="third_party_relationship"
        center
        type="text"
        autocomplete="off"
        label="Relationship"
        placeholder="Please enter the Relationship"
   
      />


<div class="minTitle">Declaration of Third-Party Funds</div>
 <van-field
        name="declaration_third_party"
        label="Declaration of Third-Party Funds"
      
      >
        <template #input>
          <van-radio-group
            v-model="formData.declaration_third_party"

          >
            <van-radio :name="'natural_love'">Natural love and affection or as gift to me</van-radio>

            <van-radio :name="'money_owed'"
              >Money owed to me</van-radio
            >
            <van-radio :name="'other'">Other</van-radio>
           
          </van-radio-group>
          
             </template>
      </van-field>
      <van-field v-if="formData.declaration_third_party === 'other'" v-model="formData.other_details"
        name="other_details" center type="text" label=""
        placeholder="Please enter " autocomplete="off"/> 

<van-field
        v-model="formData.subscriber_name_by_thirdparty"
        name="subscriber_name_by_thirdparty"
        center
        type="text"
        autocomplete="off"
        label="Subscriber’s Name"
        placeholder="Please enter the Subscriber’s Name"
        
        
      />
      <van-field
        v-model="formData.subscriber_nric_no_by_thirdparty"
        name="subscriber_nric_no_by_thirdparty"
        center
        autocomplete="off"
        type="text"
        label="NRIC No."
        placeholder="Please enter the NRIC No."
     
      />

       <div class="tl">Subscriber’s Signature</div>

       <vue-esign
        ref="esign"
        v-show="sig1"
        :width="800"
        :height="300"
        :isCrop="false"
        :lineWidth="6"
        lineColor="#000000"
        bgColor.sync="#fff"
        style="border: 1px solid #666"
      />
      <van-image
        v-show="!sig1"
        
        class="esignImgbox"
        :src="formData.subscriber_signature"
      />
      <div class="tr">
        <div class="esignBtn" @click="handleReset()" >Clear</div>
        <div class="esignBtn" @click="handleGenerate()" >Confirm</div>
      </div>

      <van-field
        v-model="formData.witness_name"
        name="witness_name"
        center
        autocomplete="off"
        type="text"
        label="Witness/Advisor’s Name"
        placeholder="Please enter the Witness/Advisor’s Name"
       
      />
      <van-field
        v-model="formData.witness_nric_no"
        name="witness_nric_no"
        center
        type="text"
        autocomplete="off"
        label="NRIC / Passport No."
        placeholder="Please enter the NRIC / Passport No."
       
      />
      <div class="tl">Witness Signature</div>
      <vue-esign ref="witness_signature" v-show="sig2" :width="800" :height="300" :isCrop="false"
        :lineWidth="6" lineColor="#000000" bgColor.sync="#fff" style="border: 1px solid #666" />
      <van-image v-show="!sig2" class="esignImgbox"
        :src="formData.witness_signature" />
      <div class="tr">
        <div class="esignBtn" @click="handleReset1()" >Clear</div>
        <div class="esignBtn" @click="handleGenerate1()" >Confirm</div>
      </div>
      <van-field
        v-model="formData.witness_date"
        name="witness_date"
        center
        type="text"
        autocomplete="off"
        label="Date"
        placeholder="Please enter the Date"
        />
      

      
      <!-- <vue-esign
        ref="signature"
        :width="1200"
        :height="300"
        :isCrop="false"
        :lineWidth="6"
        v-show="!formData.signature"
        lineColor="#000000"
        bgColor.sync="#fff"
        style="border: 1px solid #666"
      />
      <van-image
        v-show="formData.signature"
        width="100%"
        height="20%"
        class="esignImgbox"
        :src="formData.signature"
      />
      <div class="tr">
        <div class="esignBtn" @click="handleReset('signature')" v-if="!isDone">
          Clear
        </div>
        <div
          v-if="!isDone"
          class="esignBtn"
          @click="
            handleGenerate('signature')
          "
        >
          Confirm
        </div>
      </div> -->
    
      <!-- 提交 -->
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
import {
  letter_wishes_formGep,
  getOrdersForms,
  putOrdersForms,
} from "@/api/order";
import { uploadAutograph} from "@/api/util";
export default {
  props:['orderDataInfo'],
  data() {
    return {
      pattern: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,// 正则验证时间
      formData: {
        subscriber_name:this.$store.state.campanyIndividualName1Gep,
        subscriber_nric_no: this.$store.state.nric_pass_roc_noGep,
        subscriber_dob:this.$store.state.dobGep,
        subscriber_address:this.$store.state.addressGep,

         subscriber_contact_no: this.$store.state.phoneGep,
          subscriber_reference_no: "",
           third_party_name: this.$store.state.campanyIndividualName1Gep,
            third_party_dob: "",

             third_party_nric_no:this.$store.state.nric_pass_roc_noGep,
              third_party_address: "",

               third_party_phone: "",
                third_party_relationship: "",

                 declaration_third_party: "",


                  other_details: "",
                   subscriber_name_by_thirdparty: "",

                    subscriber_nric_no_by_thirdparty: "",
                     subscriber_signature: "", 
                      witness_name: sessionStorage.getItem("user_name"),
                       witness_nric_no: "",
                        witness_date:moment(new Date()).format('DD-MM-YYYY'),
                        witness_signature:""
                             
      },
      sig1:true,
      sig2:true,
      isShowPicker: false,
      currentContent: new Date(), // 日期彈框顯示當前日期
      whichDate: "", // 區分是哪個日期觸發彈框
      from: "", // 記錄哪個頁面進入的
      isFilled: "", // 表單id(沒填0)
      minDate: new Date(1900, 0, 1),
      isDone: false, // 訂單是否已確認
    };
  },
  mounted() {
    // this.from = this.$route.query.from;
    // this.isFilled = this.$route.query.isFilled;
    // this.isDone = this.$route.query.status == 1 ? true : false;
    if(this.$store.state.isOverseaSignature){
      this.from = "create"
      this.isFilled=0
    }else{
      this.from = this.$route.query.from;
      this.isFilled = this.$route.query.isFilled;
      this.isDone = this.$route.query.status == 1 ? true : false;
    }
    if(this.$route.query.isShare){
       this.isFilled=this.$route.query.gepthirdPartyDeclarationForm
    }
    this.getFormData();
    console.log(sessionStorage.getItem('orderStatus'),333)
    this.isDone = sessionStorage.getItem('orderStatus') === '2'
  },
  methods: {
    // 清空画布
    handleReset(val) {
      this.$refs["esign"].reset(); //清空画布
      this.sig1 = true
      this.formData.subscriber_signature = ''

    },
    handleReset1(index) {
      this.$refs["witness_signature"].reset(); //清空画布
      this.sig2 = true
      this.formData.witness_signature = ''
    },
    handleGenerate1(index) {
      var that = this;
      this.$refs["witness_signature"]
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
              this.formData.witness_signature = res.path;
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
    handleGenerate(val) {
     console.log(this.$refs[val].generate().PromiseState)
      var that = this;
      this.$refs[val]
        .generate()
        .then((res) => {
          uploadAutograph({
            image: res,
            path: "",
          })
            .then((res) => {
               console.log(res)
              that.formData[val] = res.path;
              that.$toast({
                type: "success",
                message: "Signature \n success",
              });
            })
            .catch((err) => {
              that.$toast({
                type: "fail",
                message: "Uploading\n picture\n failed",
              });
            });
            // this.$refs['trustor_signature2'].resultImg=that.formData[val2][val]
            // console.log(this.$refs[val].resultImg)
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
      this.$refs["esign"]
        .generate()
        .then((res) => {
           console.log(".......img..1....",res);
          uploadAutograph({
            image: res,
            path: "",
          })
            .then((res) => {
             console.log(".......img...2...",res.path);
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
    // 獲取表單數據
    getFormData() {
      if (this.isFilled > 0) {
        console.log("4444444444",this.isFilled)
        getOrdersForms(this.isFilled, { type: "GEP ThirdParty Declaration" }).then(res => {
          console.log("66666666666",res)
            console.log(res, "獲取lett數據");
            this.formData = res;
            this.sig1=false
            this.sig2=false
          }
        );
      }
    },
    submit(form) {
          console.log("1111111111",sessionStorage.getItem('signAlert') )
      console.log(form);
       console.log("22222222222222222222222",this.formData)
      let data = JSON.parse(JSON.stringify(this.formData));
       console.log("333333333333333",data)
      // if (!this.formData.subscriber_signature && this.$store.state.changeIsOverseaSignature === true) {
      //   this.$toast.fail("Please sign your name");
      //   return;
      // }
      // else if (!this.formData.witness_signature) {
      //   this.$toast.fail("Please sign your name");
      //   return;
      // }
      if (this.isFilled > 0) {
        // 修改
        putOrdersForms(this.isFilled, {
          type: "GEP ThirdParty Declaration",
          data: JSON.stringify(data),
        }).then((res) => {
          console.log(res, "修改kyc成功");
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
     console.log("44444444444",id)
      console.log("555555555",data)
        letter_wishes_formGep(id, data)
          .then((res) => {
            console.log(res);
            this.$toast({
              type: "success",
              message: "You can Just moved to Next form",
            });
            if (this.from == "create") {
              this.$store.commit("changePage", {
                tabbar: "/PDPAMemoGep",
                title: "4/5 NON-DISCLOSURE AGREEMENT",
              });
              if(!this.$store.state.isOverseaSignature&&!this.$route.query.isShare){
                this.$router.push(
                  "/PDPAMemoGep?from=create&orderId=" + this.$route.query.orderId
                );
              }

            } else {
              this.$router.go(-1);
            }
          })
          .catch((err) => {});
      }
    },
    // 展示日期弹框
    onShowPicker(val) {
      this.isShowPicker = true;
      this.whichDate = val;
    },
    onHiddenPicker() {
      this.currentContent = new Data();
      this.isShowPicker = false;
    },
    onConfirmPicker() {
      this.formData[this.whichDate] = this.formatDateYMD(this.currentContent);
      this.isShowPicker = false;
    },
    // 出來日期格式ymd
    formatDateYMD(value) {
      if (!value) {
        return "";
      } else {
        var date = new Date(value);
        var Y = date.getFullYear() + "-";
        var M = date.getMonth() + 1 + "-";
        var D = date.getDate();
        return Y + M + D;
      }
    },
  },
};
</script>

<style scoped>
  /deep/ .van-checkbox__icon,
/deep/ .van-checkbox__icon .van-icon {
  font-size: 18px;
  height: 20px;
  line-height: 20px;
}
.LetterOfWishes {
  text-align: left;
}
.minTitle {
  font-weight: bold;
  line-height: 24px;
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
.esignBtn {
  color: #fff;
  border: none;
  outline: none;
  background-color: #7C655D;
  font-size: 16px;
  border-radius: 13px;
  height: 35px;
  line-height: 35px;
  margin: 10px 0 10px 10px;
  display: inline-block;
  width: auto;
  padding: 0 10px;
}
/deep/ .van-field__label {
  width: 13.2rem;
}
/deep/ .van-radio__icon,
/deep/ .van-radio__icon .van-icon,

/*手机*/
@media screen and (max-width: 768px) {
  /deep/ .van-field__label {
    width: 30rem;
  }
}
</style>
