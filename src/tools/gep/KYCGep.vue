<template>
  <div class="KYC bodybox mt-5">
    <van-form
      validate-first
      @submit="submit"
      :submit-on-enter="false"
      :scroll-to-error="true"
    >
      
      <div class="minTitle">SUBSCRIBER’S INFORMATION</div>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Individual / Company Name"
        placeholder="Please enter the Individual / Company Name"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.nationality"
        name="nationality"
        center
        type="text"
        label="Nationality"
        placeholder="Please enter the Nationality"
        :required="true"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.nric_pass_roc_no"
        name="nric_pass_roc_no"
        center
        :required="true"
        type="text"
        label="NRIC / Passport / ROC No."
        placeholder="Please enter the NRIC / Passport / ROC No."
        :rules="[
          {
            required: true,
          },
        ]"
      />
      <van-field
        v-model="formData.dob"
        name="dob"
        center
        type="text"
        label="Date of Birth / Date of Registration"
        placeholder="Please enter the Date of Birth / Date of Registration"
        :required="true"
        :rules="[{ pattern, message: 'Please enter the Date of Birth / Date of Registration' }]" 
      />
      <van-field
        v-model="formData.place_incorporation"
        name="place_incorporation"
        center
        :required="true"
        type="text"
        label="Place of Incorporation"
        placeholder="Please enter the Place of Incorporation"
        :rules="[
          {
            required: true,
          },
        ]"
      />
        <van-field
        v-model="formData.occupation"
        name="occupation"
        center
        :required="true"
        type="text"
        label="Occupation / Industry"
        placeholder="Please enter the Occupation / Industry"
        :rules="[
          {
            required: true,
          },
        ]"
      />
        <van-field
        v-model="formData.address"
        name="address"
        center
        :required="true"
        type="text"
        label="Residential / Office Address"
        placeholder="Please enter the Residential / Office Address"
        :rules="[
          {
            required: true,
          },
        ]"
      />

        <van-field
        v-model="formData.postcode"
        name="postcode"
        center
        :required="true"
        type="text"
        label="Post Code"
        placeholder="Please enter the Post Code"
        :rules="[
          {
            required: true,
          },
        ]"
      />
        <van-field
        v-model="formData.country"
        name="country"
        center
        :required="true"
        type="text"
        label="Country"
        placeholder="Please enter the Country"
        :rules="[
          {
            required: true,
          },
        ]"
      />
      
      <div class="minTitle">
        CONTACT INFORMATION
      </div>
      <van-field
        v-model="formData.contact_name"
        name="contact_name"
        center
        type="text"
        label="Individual / Director’s Name"
        placeholder="Please enter the Individual / Director’s Name"
        :required="true"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.contact_nationality"
        name="contact_nationality"
        center
        type="text"
        label="Nationality"
        placeholder="Please enter the Nationality"
        :required="true"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.contact_address"
        name="contact_address"
        center
        type="text"
        label="Residential / Office Address"
        placeholder="Please enter the Residential / Office Address"
        :required="true"
        :rules="[{ required: true }]"
      />
        <van-field
        v-model="formData.contact_postcode"
        name="contact_postcode"
        center
        type="text"
        label="Post Code"
        placeholder="Please enter the Post Code"
        :required="true"
        :rules="[{ required: true }]"
      />
        <van-field
        v-model="formData.phone"
        name="phone"
        center
        type="text"
        label="Mobile No."
        placeholder="Please enter the Mobile No"
        :required="true"
        :rules="[{ required: true }]"
      />
        <van-field
        v-model="formData.email"
        name="email"
        center
        type="text"
        label="Email"
        placeholder="Please enter the Email"
        :required="true"
        :rules="[{ required: true }]"
      />
      <div class="minTitle">EMERGENCY CONTACT INFORMATION</div>
      <van-field
        v-model="formData.emergency_name"
        name="emergency_name"
        center
        :required="true"
        type="text"
        label="Name"
        placeholder="Please enter the Name"
        :rules="[{ required: true }]"
      />
       <van-field
        v-model="formData.emergency_nationality"
        name="emergency_nationality"
        center
        :required="true"
        type="text"
        label="Nationality"
        placeholder="Please enter the Nationality"
        :rules="[{ required: true }]"
      />
       <van-field
        v-model="formData.emergency_nric_no"
        name="emergency_nric_no"
        center
        :required="true"
        type="text"
        label="NRIC / Passport No."
        placeholder="Please enter the NRIC / Passport No."
        :rules="[{ required: true }]"
      />
       <van-field
        v-model="formData.emergency_dob"
        name="emergency_dob"
        center
        :required="true"
        type="text"
        label="Date of Birth"
        placeholder="Please enter the Date of Birth"
        :rules="[{ pattern, message: 'Please enter the DATE OF BIRTH' }]" />
  
       <van-field
        v-model="formData.emergency_email"
        name="emergency_email"
        center
        :required="true"
        type="text"
        label="Email"
        placeholder="Please enter the Email"
        :rules="[{ required: true }]"
      />
       <van-field
        v-model="formData.emergency_phone"
        name="emergency_phone"
        center
        :required="true"
        type="text"
        label="Residential Phone No."
        placeholder="Please enter the Residential Phone No."
        :rules="[{ required: true }]"
      />
       <van-field
        v-model="formData.emergency_mobile"
        name="emergency_mobile"
        center
        :required="true"
        type="text"
        label="Mobile No."
        placeholder="Please enter the Mobile No."
        :rules="[{ required: true }]"
      />
       <van-field
        v-model="formData.relationship"
        name="relationship"
        center
        :required="true"
        type="text"
        label="Relationship with the Subscriber"
        placeholder="Please enter the Relationship with the Subscriber"
        :rules="[{ required: true }]"
      />
      <div class="minTitle">SUBSCRIPTION INFORMATION</div>
      <van-field
        v-model="formData.amount"
        name="amount"
        center
        type="number"
        label="Subscription Amount (MYR)"
        placeholder="Please enter the Subscription Amount (MYR)"
        :required="true"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.advisor_name"
        name="advisor_name"
        center
        type="text"
        label="Authorized Advisor’s Name"
        placeholder="Please enter the Authorized Advisor’s Name"
        :required="true"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.advisor_id"
        name="advisor_id"
        center
        type="text"
        label="DDG Advisor’s ID No."
        placeholder="Please enter the DDG Advisor’s ID No."
        :required="true"
        :rules="[{ required: true }]"
      />
    
      <div class="minTitle">
       NOMINEE DETAILS (if any)
      </div>
      <van-field
        v-model="formData.nominee_name"
        name="nominee_name"
        center
        type="text"
        label="Nominee’s Name"
        placeholder="Please enter the Nominee’s Name"
        :required="true"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.nominee_nric_no"
        name="nominee_nric_no"
        center
        type="text"
        label="NRIC No."
        placeholder="Please enter the NRIC No."
        :required="true"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.nominee_relation"
        name="nominee_relation"
        center
        type="text"
        label="Relationship"
        placeholder="Please enter the Relationship"
        :required="true"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.nominee_phone"
        name="nominee_phone"
        center
        type="text"
        label="Phone Number"
        placeholder="Please enter Phone Number"
        :required="true"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.nominee_email"
        name="nominee_email"
        center
        type="text"
        label="Email"
        placeholder="Please enter the Email"
        :required="true"
        :rules="[{ required: true }]"
      />
     
      <div class="minTitle">BANK DETAILS</div>
      <van-field
        v-model="formData.bank_name"
        name="bank_name"
        center
        type="text"
        label="Name of Bank"
        placeholder="Please enter the Name of Bank"
        :required="true"
        :rules="[{ required: true }]"
      />
       <van-field
        v-model="formData.branch"
        name="branch"
        center
        type="text"
        label="Branch"
        placeholder="Please enter the Branch"
        :required="true"
        :rules="[{ required: true }]"
      />
       <van-field
        v-model="formData.account_no"
        name="account_no"
        center
        type="text"
        label="Bank Account No."
        placeholder="Please enter the Bank Account No."
        :required="true"
        :rules="[{ required: true }]"
      />
       <van-field
        v-model="formData.account_name"
        name="account_name"
        center
        type="text"
        label="Bank Account Owner’s Name"
        placeholder="Please enter the Bank Account Owner’s Name"
        :required="true"
        :rules="[{ required: true }]"
      />
      
<div class="contentText">
        Display the Note: Cash transaction is prohibited. Source of fund MUST BE provided. 
      </div>


      <div class="minTitle">
      PAYMENT FOR SUBSCRIPTION
      </div>
      
   
      <div class="contentText">
      Subscription amounts are to be remitted in Malaysian Ringgit (MYR) only. Details of the account to which subscription payments are to be transferred (the transfer description should include the name and reference of the transferring entity or person, the name of the Subscriber and the reference "DDG Global Expansion Plan Subscription".):

      </div>
        <div class="contentText">
     Display the following Text:
Account Name: CHIONG & PARTNERS (BC/C/1057)
Bank: PUBLIC BANK
Account Number: 3220852216 

      </div>

      <div class="minTitle">
     APPLICANT’S DECLARATION


      </div>
        <div class="contentText">
1. I/We certify that the information supplied by me/us in this application form is true and accurate.

      </div>
       <div class="contentText">
  2. I /We confirm that the money transferred does not represent the proceed of criminal activity.

      </div>
       <div class="contentText">
3. I/We confirm that I/we have read and fully understand the Terms and Conditions of DDG Global Expansion Plan and note that these may be updated from time to time. 
      </div>
           <van-field
        v-model="formData.subcriber_name"
        name="subcriber_name"
        center
        type="text"
        label="Subscriber’s Name"
        placeholder="Please enter the Subscriber’s Name"
        :required="true"
        :rules="[{ required: true }]"
      />
            <van-field
        v-model="formData.advisor_nric_no"
        name="advisor_nric_no"
        center
        type="text"
        label="NRIC / Passport No."
        placeholder="Please enter the NRIC / Passport No."
        :required="true"
        :rules="[{ required: true }]"
      />
           <div class="tl">Subscriber’s Signature</div>

       <vue-esign
        ref="esign"
        v-show="!formData.subscriber_signature"
        :width="1200"
        :height="300"
        :isCrop="false"
        :lineWidth="6"
        lineColor="#000000"
        bgColor.sync="#fff"
        style="border: 1px solid #666"
      />
      <van-image
        v-show="formData.subscriber_signature"
        width="100%"
        height="20%"
        class="esignImgbox"
        :src="formData.subscriber_signature"
      />
      <div class="tr">
        <div class="esignBtn" @click="handleReset()" v-if="!isDone">Clear</div>
        <div class="esignBtn" @click="handleGenerate()" v-if="!isDone">Confirm</div>
      </div>
       <!-- <vue-esign
        ref="signature"
        :width="1200"
        :height="300"
        :isCrop="false"
        :lineWidth="6"
        v-show="!formData.subscriber_signature"
        lineColor="#000000"
        bgColor.sync="#fff"
        style="border: 1px solid #666"
      />
      <van-image
        v-show="formData.subscriber_signature"
        width="100%"
        height="20%"
        class="esignImgbox"
        :src="formData.subscriber_signature"
      />
      
      <div class="tr">
        <div class="esignBtn" @click="handleReset('signature')" v-if="!isDone">
          Clear
        </div>
        <div
          v-if="!isDone"
          class="esignBtn"
          @click="
            handleGenerate('signature', 'declaration')
          "
        >
          Confirm
        </div>
      </div> -->
       <van-field
        v-model="formData.witness_advisor_name"
        name="witness_advisor_name"
        center
        type="text"
        label="Witness/Advisor’s Name"
        placeholder="Please enter the Witness/Advisor’s Name"
        :required="true"
        :rules="[{ required: true }]"
      />
       <van-field
        v-model="formData.witness_nric_no"
        name="witness_nric_no"
        center
        type="text"
        label="NRIC / Passport No."
        placeholder="Please enter the NRIC / Passport No."
        :required="true"
        :rules="[{ required: true }]"
      />
      <vue-esign
        ref="witness_signature"
        v-show="!formData.witness_signature"
        :width="1200"
        :height="300"
        :isCrop="false"
        :lineWidth="6"
        lineColor="#000000"
        bgColor.sync="#fff"
        style="border: 1px solid #666"
      />
      <van-image
        v-show="formData.witness_signature"
        width="100%"
        height="20%"
        class="esignImgbox"
        :src="formData.witness_signature"
      />
      <div class="tr">
        <div class="esignBtn" @click="handleReset1()" v-if="!isDone">Clear</div>
        <div class="esignBtn" @click="handleGenerate1()" v-if="!isDone">Confirm</div>
      </div>
       <van-field
        v-model="formData.date"
        name="date"
        center
        type="text"
        label="Date"
        placeholder="Please enter the Date"
        :required="true"
        :rules="[{ pattern, message: 'Please enter the DATE ' }]" />
   
     
     <div class="minTitle">
      i. All payments are strictly to be made in favour of “CHIONG & PARTNERS”.


      </div>
      <div class="minTitle">
       ii. NO CASH PAYMENT is accepted for any payment. All cash transactions will be rejected.


      </div>
      <div class="minTitle">
        iii. The Management reserves the rights not to Accept & Approved the Subscription. iii. No individual or company is authorized to collect payment of any nature on our behalf. iv. Should you be requested to make payment of any nature to any third party purportedly representing us, we shall not be responsible or in any way be held liable for such payment made to unauthorized party or parties. 



      </div>
    

    
    
      
     
      <van-button v-if="!isDone" round block type="info" native-type="submit" color="#7C655D">
        {{ from == "create" ? "Next / Save" : "Next / Save" }}
      </van-button>
    </van-form>
   
  </div>
</template>

<script>
import moment from 'moment'
import { uploadAutograph, smsVerify_code, verdict_code,uploadFile } from "@/api/util";
import { kyc_formGep, getOrdersForms, putOrdersForms } from "@/api/order";
export default {
  props:['orderDataInfo'],
  data() {
    return {
      pattern: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,// 正则验证时间
      formData: {
   name: this.$store.state.campanyIndividualName1Gep,
    nationality:this.$store.state.nationalityGep,
     dob:this.$store.state.dobGep,
      nric_pass_roc_no:this.$store.state.nric_pass_roc_noGep,
       address:this.$store.state.addressGep,
        phone:this.$store.state.phoneGep,

         email:this.$store.state.emailGep,
          place_incorporation:this.$store.state.place_incorporationGep,
           occupation:this.$store.state.occupationGep,
            postcode:this.$store.state.postcodeGep,

             country:this.$store.state.countryGep,
              nric_no:"2121",
               subscriber_signature:"",

                date:moment(new Date()).format('DD-MM-YYYY'),

                 contact_name: this.$store.state.campanyIndividualName1Gep,
                  contact_nationality:this.$store.state.nationalityGep,

                   contact_address:this.$store.state.addressGep,
                   contact_postcode:this.$store.state.postcodeGep,
                   emergency_name:"",
                   emergency_nationality:"",
                   emergency_nric_no:"",
                   emergency_dob:"",

                   emergency_phone:"",
                   emergency_email:"",
                   emergency_mobile:"",
                   amount:"",
                    relationship:"",
                     advisor_name: sessionStorage.getItem("user_name"),
                      advisor_id:sessionStorage.getItem("user_id"),
                       nominee_name:"",
                        nominee_nric_no:"",
                         nominee_relation:"",
                          nominee_phone:"",
                           nominee_email:"",
                             account_name:"",
                               bank_name:"",

                                 account_no:"",
                                   branch:"",
                                     advisor_nric_no:this.$store.state.nric_pass_roc_noGep,
                                       subcriber_name:this.$store.state.campanyIndividualName1Gep,
                                         witness_advisor_name:sessionStorage.getItem("user_name"),
                                           witness_nric_no:sessionStorage.getItem("user_passportNo"),
                                           witness_signature:""
      },
      isShowPicker: false, // 日期彈框
      currentContent: new Date(), // 日期彈框顯示當前日期
      whichDate: "", // 區分是哪個日期觸發彈框
      whichDate2: "", // 區分是哪個日期觸發彈框
      whichDateInx: "", // 區分是哪個日期觸發彈框
      showCodePicker: false, // 區號彈框
      columns: ["60 Malaysia", "86 China", "852 Hong Kong", "886 Taiwan"],
      areaCode: "", // 區號
      phone: "",
      verify_code: "",
      isSms: false,
      from: "", // 記錄哪個頁面進入的
      isFilled: "", // 表單id(未填0)
      minDate: new Date(1900, 0, 1),
      // Documents: [], // 上传的文件
      isDone: false, // 訂單是否已確認
    };
  },
  mounted() {
  
    console.log(  this.$store.state.campanyIndividualName1Gep,"......bbbbbbb.........bbbbbb.......");
    console.log(this.$route.query, 222222);
    if(this.$store.state.isOverseaSignature){
     // alert("a")
      this.from = "create"
      this.isFilled=0
    }else{
     // alert("b")
      this.from = this.$route.query.from;
      this.isFilled = this.$route.query.isFilled;
      this.isDone = this.$route.query.status == 1 ? true : false;
    }
    if(this.$route.query.isShare){
    //  alert("c")
       this.isFilled=this.$route.query.subcriptionform
    }
   // console.log(".....33....",this.isFilled)
    this.getFormData();
    this.isDone = sessionStorage.getItem('orderStatus') === '2'
  },
  methods: {
    // moblie validation
     isLetter(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[0-9]+$/.test(char)) return true;
      else e.preventDefault();
    },
    // 如果已填 獲取數據
    getFormData() {
     // alert("11")
      if (this.isFilled > 0) {
      //  alert("22")
        getOrdersForms(this.isFilled, { type: "GEP Subcription" })
          .then((res) => {
            delete res.id
            delete res.order_id
            delete res.created_at
            delete res.updated_at
            console.log(res,'GEP Subcription');
            // for (let key in res) {
            //   res[key] = JSON.parse(res[key])
            // }
            // console.log(res,999999999);
            // if (res.document_checklist.Documents) {
            //   this.Documents.push({url: res.document_checklist.Documents})
            // }
            this.formData = res;
            // this.phone = res.witness_phone.slice(-11);
            // this.areaCode = res.witness_phone.split(this.phone)[0];
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    submit(form) {
       console.log("555555555555555555555",form);
      console.log(form,"6666666666");
      console.log(this.formData,"777777777");
      console.log(this.formData.subscriber_signature, "form");
      if (!this.formData.subscriber_signature) {
        this.$toast.fail("Please sign your name");
        return;
      }
     else if (!this.formData.witness_signature) {
        this.$toast.fail("Please sign your name");
        return;
      }
  
     console.log(this.formData, "form-----");

      let data = JSON.parse(JSON.stringify(this.formData));
      console.log(">>>>>>>...",data)
      // data.document_checklist.Documents = this.Documents[0].url
      // data.settlor = JSON.stringify(data.settlor)
      // for (let key in data) {
      //   data[key] = JSON.stringify(data[key])
      // }
      // data.witness_phone = this.areaCode.split(" ")[0] + this.phone;
      if (this.isFilled > 0) {
        // 修改
        putOrdersForms(this.isFilled, {
          type: "GEP Subcription",
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
        console.log(this.$store.state.CustomerApplicationId,"2222222222222")
        let id=null
        if(this.$store.state.isOverseaSignature){
          id=this.$store.state.CustomerApplicationId
        }else{
          id=this.$route.query.orderId
        }
         console.log(id,".........id..........");
          console.log(data,".......data....................");
        kyc_formGep(id, this.formData)
          .then((res) => {
            console.log(res,"111111111111");
            this.$toast({
              type: "success",
              message: "You can Just moved to Next form",
            });
            if (this.from == "create") {
              this.$store.commit("changePage", {
                tabbar: "/LetterOfWishesGep",
                title: "3/5 THIRD PARTY FUND DECLARATION",
              });
              if(!this.$store.state.isOverseaSignature&&!this.$route.query.isShare){
                  this.$router.push(
                  "/LetterOfWishesGep?from=create&orderId=" +
                  this.$route.query.orderId
                );
              }
            } else {
              this.$router.go(-1);
            }
          })
          .catch((err) => {
            console.log(err.response,"333333333");
          });
      }
      // // 验证验证码
      // let data = [];
      // data.push({
      //   phone: this.areaCode.split(" ")[0] + this.phone,
      //   verify_code: this.verify_code,
      // });
      // verdict_code(JSON.stringify(data))
      //   .then((res) => {
      //     console.log(res, "验证回调");
      //     if (res.state_code == 200) {
      //       // 验证成功 提交表单

      //       }
      //     } else {
      //       this.$toast({
      //         type: "fail",
      //         message: res.message,
      //       });
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err.response);
      //     this.$toast({
      //       type: "fail",
      //       message: "Verification code error",
      //     });
      //   });
    },
    onFailed(values, errorInfo) {
      console.log("failed", errorInfo);
      console.log("values", values);
      values.errors.forEach((item, index) => {
        this.$toast({
          type: "fail",
          message: item.message,
        });
      });
    },
    //获取验证码
    sendCode(index) {
      if (this.phone) {
        var data = [
          {
            phone: this.areaCode.split(" ")[0] + this.phone,
          },
        ];
        smsVerify_code({ phone: JSON.stringify(data) })
          .then((res) => {
            console.log(res);
            if (res.state_code == 200) {
              this.$toast({
                type: "success",
                message: res.message,
              });
              this.isSms = true;
              const vm = this;
              setTimeout(function () {
                vm.isSms = false;
              }, 60000);
            } else {
              this.$toast({
                type: "fail",
                message: res.message,
              });
            }
          })
          .catch((err) => {
            this.$toast({
              type: "fail",
              message: "Failed to obtain the verification code. Procedure",
            });
          });
      } else {
        this.$toast("Please enter your mobile phone number");
      }
    },
    // 验证验证码
    verifyCode(values) {
      let data = [];
      let num = 0;
      this.phoneList.forEach((item, i) => {
        if (item.phone) {
          num++;
          var phoneInfo = {
            phone: this.areaCode[i].split(" ")[0] + item.phone,
            verify_code: item.verify_code,
          };
          data.push(phoneInfo);
        }
      });
      if (num == 0) {
        const vm = this;
        setTimeout(function () {
          vm.onSubmit(values);
        }, 600);
      } else {
        if (num == data.length) {
          this.$axios({
            method: "GET",
            url: "/api/v1/sin_up/sms/verify_code?data=" + JSON.stringify(data),
          })
            .then((res) => {
              console.log(res);
              if (res.state_code == 200) {
                // this.$toast({
                //     type:'success',
                //     message:res.message,
                // });
                const vm = this;
                setTimeout(function () {
                  vm.onSubmit(values);
                }, 600);
              } else {
                this.$toast({
                  type: "fail",
                  message: res.message,
                });
              }
            })
            .catch((err) => {
              this.$toast({
                type: "fail",
                message: "Verification code error",
              });
            });
        }
      }
    },
    onConfirm(value) {
      this.areaCode = value;
      this.showCodePicker = false;
    },
    // 清空画布
    handleReset1(val) {
          this.$refs["witness_signature"].reset(); //清空画布
      this.formData.witness_signature = ''
  
    },
    handleReset(val) {

      this.$refs["esign"].reset(); //清空画布
      this.formData.subscriber_signature = ''
  
    },
    handleGenerate1(index) {
      var that = this;
      this.$refs["witness_signature"]
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
    // 展示日期弹框
/*    onShowPicker(val,val2,inx) {
      this.isShowPicker = true;
      this.whichDate = val;
      this.whichDate2 = val2;
      this.whichDateInx = inx;
    },*/
    // 日期彈框
  /*  onHiddenPicker() {
      this.currentContent = new Data();
      this.isShowPicker = false;
    },*/
   /* onConfirmPicker() {
      if (this.whichDateInx || this.whichDateInx == 0) {
        this.formData[this.whichDate][this.whichDateInx][this.whichDate2] = this.formatDateYMD(this.currentContent);
      } else {
        this.formData[this.whichDate][this.whichDate2] = this.formatDateYMD(this.currentContent);
      }
      this.isShowPicker = false;
    },*/
    // 出來日期格式ymd
  /*  formatDateYMD(value) {
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
    // 添加beneficiary_info
    addBeneficiary() {
      if (this.formData.interaction.length < 4) {
        this.formData.interaction.push({
          Date: "",
          Time: "",
          Place: "",
          Comment: "",
        });
      }
    },
    delBeneficiary(inx) {
      this.formData.interaction.splice(inx, 1);
    },
    // 文件上傳
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file,'上傳的文件');
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
        this.$toast.success('Success')
        // this.Documents[0].url = res.file
      })
    },
  },
};
</script>

<style scoped>
.KYC {
  padding: 0 16px;
  text-align: left;
}
.minTitle {
  font-weight: bold;
  line-height: 24px;
}
.contentText {
  line-height: 24px;
  padding-left: 1rem;
}
/deep/ .van-radio__icon,
/deep/ .van-radio__icon .van-icon,
/deep/ .van-checkbox__icon,
/deep/ .van-checkbox__icon .van-icon {
  font-size: 18px;
  height: 20px;
  line-height: 20px;
}
/deep/ .van-field__label {
  width: 13.2rem;
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
.SMSconfirm {
  color: #fff;
  border: none;
  outline: none;
  background-color: #7C655D;
  font-size: 16px;
  border-radius: 10px;
  height: 35px;
}
/*手机*/
@media screen and (max-width: 768px) {
  /deep/ .van-field__label {
    width: 30rem;
  }
}
.beneficiary_info {
  position: relative;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}
.esignDelBtn {
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  border: none;
  outline: none;
  background-color: #dd4b39;
  font-size: 16px;
  border-radius: 13px;
  height: 35px;
  line-height: 35px;
  margin: 10px 0 10px 10px;
}
.esignImgbox {
  border: 1px solid #666666;
}
</style>
