<template>
  <div class="CustomerApplication bodybox mt-5">
    <van-form validate-first @submit="submit" :submit-on-enter="false" :scroll-to-error="true">
      <!-- <van-button  round block type="info" color="#7C655D" @click="OverseaSignature">
        Overseas Signature
      </van-button> -->
      <div class="minTitle">APPLICANT’S INFORMATION</div>
      <!-- 文本框 -->
      <van-field v-model="formData.name" autocomplete="off" name="name" center :required="true" type="text"
      @change="onCampanyIndividualName"
        label="Individual / Company Name" placeholder="Please enter the Individual / Company Name" :rules="[
          {
            required: true,
          },
        ]" />
      <van-field v-model="formData.nationality" name="nationality" center :required="true" type="text"
      @change="onNationality" autocomplete="off"
        label="Nationality / Place of Incorporation" placeholder="Please enter the Nationality / Place of Incorporation" :rules="[
          {
            required: true,
          },
        ]" />
      <van-field v-model="formData.passport_no" name="passport_no" center :required="true" type="text"
      @change="nricPassRocNo"
        label="NRIC / Passport / Registration No" placeholder="Please enter the NRIC / Passport / Registration No" :rules="[
          {
            required: true,
          },
        ]" />

         <van-field v-model="formData.gender" autocomplete="off" name="gender" center :required="true" type="text"
        label="Gender (Male / Female)" placeholder="Please enter the Gender" :rules="[
          {
            required: true,
          },
        ]" />

      <van-field v-model="formData.born_date" autocomplete="off" name="born_date" center :required="true" type="text"
        label="Date of Birth / Date of Incorporation: DD-MM-YYYY"
        placeholder="Please enter the Date of Birth / Date of Incorporation : DD-MM-YYYY"
        :rules="[{ pattern, message: 'Please enter the Date of Birth / Date of Incorporation : DD-MM-YYYY' }]" />

      <van-field v-model="formData.occupation" autocomplete="off" name="occupation" center :required="true" type="text"
        label="Occupation / Industry" placeholder="Please enter the Occupation / Industry" :rules="[
          {
            required: true,
          },
        ]" />

      <van-field v-model="formData.address" autocomplete="off" name="address" center :required="true" type="text"
      @change="onAddress"
        label="Residential / Business Address" placeholder="Please enter the Residential / Business Address" :rules="[
          {
            required: true,
          },
        ]" />
      <van-field v-model="formData.postcode" autocomplete="off" name="postcode" center :required="true" type="text" label="Post Code"
      @change="onPostcode"
        placeholder="Please enter the Post Code" :rules="[
          {
            required: true,
          },
        ]" />
        
      <van-field v-model="formData.country" autocomplete="off" name="country" center :required="true" type="text" label="Country"
        placeholder="Please enter the Country" :rules="[
          {
            required: true,
          },
        ]" />
      <!-- <van-field v-model="formData.phone" name="phone" center :required="true" @keyup.delete="console.log(1)"
        @keypress="isLetter($event)" type="text" label="MOBILE NO" placeholder="Please enter the MOBILE NO"
        :rules="[{ required: true }]" />
      <van-field v-model="formData.email" name="email" center  type="text" label="EMAIL ADDRESS"
        placeholder="Please enter the EMAIL ADDRESS" :required="true" :rules="[{ required: true }]" /> -->


        <div class="minTitle">CONTACT INFORMATION</div>

        <van-field v-model="formData.contact_name" autocomplete="off" name="contact_name" center :required="true" type="text"
     
        label="Individual / Director’s Name" placeholder="Please enter the Individual / Director’s Name" :rules="[
          {
            required: true,
          },
        ]" />
      <van-field v-model="formData.contact_nationality" autocomplete="off" name="contact_nationality" center :required="true" type="text"
        label="Nationality" placeholder="Please enter the Nationality" :rules="[
          {
            required: true,
          },
        ]" />
    
      <van-field v-model="formData.contact_address" autocomplete="off" name="contact_address" center :required="true" type="text"
        label="Residential / Business Address" placeholder="Please enter the Residential / Business Address" :rules="[
          {
            required: true,
          },
        ]" />
      <van-field v-model="formData.contact_postcode" autocomplete="off" name="contact_postcode" center :required="true" type="text" label="Post Code"
        placeholder="Please enter the Post Code" :rules="[
          {
            required: true,
          },
        ]" />
    


      <van-field
        v-model="formData.contact_mobile"
        name="contact_mobile"
        center
        autocomplete="off"
        :required="true"
      @keyup.delete="console.log(1)"
      @keypress="isLetter($event)"
        type="text"
        label="MOBILE NO"
      
        placeholder="Please enter the MOBILE NO"
        :rules="[{ required: true }]"
      />

 
      <van-field
        v-model="formData.contact_email"
        name="contact_email"
        center
        :required="true"
        autocomplete="off"
        type="email"
        label="EMAIL"
        placeholder="Please enter the EMAIL ADDRESS"
        :rules="[{ required: true }]"
      />


      <div class="minTitle">NOMINEE/ EMERGENCY CONTACT INFORMATION</div>

<van-field v-model="formData.emergency_contact_name" autocomplete="off" name="emergency_contact_name" center :required="true" type="text"

label="Name" placeholder="Please enter the Name" :rules="[
  {
    required: true,
  },
]" />
<van-field v-model="formData.emergency_contact_nationality" autocomplete="off" name="emergency_contact_nationality" center :required="true" type="text"
label="Nationality" placeholder="Please enter the Nationality" :rules="[
  {
    required: true,
  },
]" />

<van-field v-model="formData.emergency_contact_address" autocomplete="off" name="emergency_contact_address" center :required="true" type="text"
label="Address" placeholder="Please enter the Address" :rules="[
  {
    required: true,
  },
]" />
<van-field v-model="formData.emergency_contact_nric" autocomplete="off" name="emergency_contact_nric" center :required="true" type="text"
label="NRIC / Passport No." placeholder="Please enter the NRIC / Passport No." :rules="[
  {
    required: true,
  },
]" />
 <van-field v-model="formData.emergency_contact_dob" autocomplete="off" name="emergency_contact_dob" center :required="true" type="text"
        label="Date of Birth: DD-MM-YYYY"
        placeholder="Please enter the Date of Birth / Date of Registration : DD-MM-YYYY"
        :rules="[{ pattern, message: 'Please enter the DATE OF BIRTH : DD-MM-YYYY' }]"
         />


<van-field v-model="formData.emergency_contact_email"
 name="emergency_contact_email" autocomplete="off"
  center :required="true" type="email" label="Email"
placeholder="Please enter the Email" :rules="[
  {
    required: true,
  },
]" />






<van-field
v-model="formData.emergency_contact_residential"
name="emergency_contact_residential"
center
autocomplete="off"
type="text"
label="Residential Phone No."
placeholder="Please enter the Residential Phone No."

/>

<van-field
v-model="formData.emergency_contact_mobile"
name="emergency_contact_mobile"
center
:required="true"
autocomplete="off"
type="text"
label="Mobile No."
placeholder="Please enter the Mobile No."
:rules="[{ required: true }]"
/>


<van-field
v-model="formData.emergency_contact_relationship"
name="emergency_contact_relationship"
center
:required="true"
autocomplete="off"
type="text"
label="Relationship with the Subscriber"
placeholder="Please enter the Relationship with the Subscriber"
:rules="[{ required: true }]"
/>




<div class="minTitle">BANK DETAILS OF EMERGENCY CONTACT</div>

<van-field v-model="formData.emergency_bank_name" autocomplete="off" name="emergency_bank_name" center type="text" :rules="[{ required: true }]" :required="true"
label="Name of Bank:" placeholder="Please enter the Name of Bank" />

<van-field v-model="formData.emergency_bank_branch" autocomplete="off" name="emergency_bank_branch" center type="text" :rules="[{ required: true }]" :required="true"
label="Branch:" placeholder="Please enter the Branch" />

<van-field v-model="formData.emergency_bank_acc_no" autocomplete="off" name="emergency_bank_acc_no" center type="text" :rules="[{ required: true }]" :required="true"
label="Bank Account No.:" placeholder="Please enter the Bank Account No." />

<van-field v-model="formData.emergency_bank_owner_name" autocomplete="off" name="emergency_bank_owner_name" center type="text" :rules="[{ required: true }]" :required="true"
label="Bank Account Owner's Name:" placeholder="Please enter the Bank Account Owner's Name" />




      <div class="minTitle">INVESTMENT INFORMATION</div>
 
    

      <van-field   v-model="formData.investment_amount" name="investment_amount" center type="text"
        label="Investment Amount (MYR)" autocomplete="off" placeholder="Please enter the Investment Amount (MYR)" readonly/>

      <van-field v-model="formData.advisor_name"  autocomplete="off" name="advisor_name" center type="text" label="Authorized DDG Advisor’s Name"
        placeholder="Please enter the Authorized DDG Advisor’s Name" :required="true" :rules="[{ required: true }]" />

      <van-field v-model="formData.advisor_id" autocomplete="off" name="advisor_id" center type="text"
        label="DDG Advisor’s ID No." :required="true" :rules="[{ required: true }]" placeholder="Please enter the DDG Advisor’s ID No." />

  
    



      <div class="minTitle">
        BANK DETAILS (for purposes of payment to be made to applicant, if any)


      </div>
      <van-field v-model="formData.details_bank_name" autocomplete="off" :required="true" :rules="[{ required: true }]" name="details_bank_name" center type="text"
        label="Name of Bank"
        placeholder="Please enter the Name of Bank "  />
        <van-field v-model="formData.details_bank_branch" autocomplete="off" :required="true" :rules="[{ required: true }]" name="details_bank_branch" center type="text"
        label="Branch"
        placeholder="Please enter the Branch "  />
        <!-- <van-field v-model="formData.details_bank_address" :required="true" :rules="[{ required: true }]" name="details_bank_address" center type="text"
        label="Address"
        placeholder="Please enter the Address "  /> -->
        
        <van-field v-model="formData.details_bank_acc_no" autocomplete="off" :required="true" :rules="[{ required: true }]" name="details_bank_acc_no" center type="text"
        label="Bank Account No."
        placeholder="Please enter the Bank Account No. "  />
        <van-field v-model="formData.details_bank_owner_name" autocomplete="off" :required="true" :rules="[{ required: true }]" name="details_bank_owner_name" center type="text"
        label="Name of Bank Account Owner’s Name"
        placeholder="Please enter the Bank Account Owner’s Name "  />


        NOTE: Cash transaction is prohibited. Source of fund MUST BE provided.
      

  

      <div class="minTitle">
        PAYMENT FOR INVESTMENT
      </div>
      <div class="minTitle">
        Investment amounts are to be remitted in Malaysian Ringgit (MYR) only. Details of the account to which investment payments are to be transferred (the transfer description should include the name and reference of the transferring entity or person, the name of the applicant and the reference "DDG Global Expansion Plan II".):

      </div>
      
    
      <van-field v-model="formData.invsetment_acc_name" autocomplete="off" name="invsetment_acc_name" center type="text" disabled
        label="Account Name" placeholder="Please enter the Account Name" />
      <van-field v-model="formData.invsetment_bank" autocomplete="off" name="invsetment_bank" center type="text" disabled
        label="Bank" placeholder="Please enter the Bank" />
          <van-field v-model="formData.invsetment_acc_no" autocomplete="off" name="invsetment_acc_no" center type="text" disabled
        label="Account Number" placeholder="Please enter the Account Number" />
        <div class="minTitle">
          APPLICANT’ DECLARATION
      </div>
      <div class="minTitle">
       1.	I/We certify that the information supplied by me/us in this application form is true and accurate.
      </div>
      <div class="minTitle">
        2. I/We confirm and warrant that the money transferred does not contain any proceeds from criminal activity.
      </div>
      <div class="minTitle">
        3. I/We confirm that I/we have read and fully understand the Terms and Conditions of DDG Global Expansion Plan II and note that these may be updated from time to time.
      </div>
      <div class="minTitle">
        4. I/We hereby intend and desire to invest in GEP II Capital SDN BHD.
      </div>
      <div class="minTitle">
        5. I/We have read, understood and hereby accept all terms and conditions as specified in the term sheet. I/We further confirm that I/we have made all reasonable inquiries and my/our decision to invest is wholly based on my/our own evaluation on the merits and risks of the investment. I/We also aware that we have been given the right to seek independent professional advice before making decision to invest.
      </div>
      <div class="minTitle">
        6. I/We hereby irrevocably authorized the Board of Directors of the Company to place my/our name on the Registrar of Members of the Company, if applicable. 
      </div>
      <div class="minTitle">
        7. I/We hereby understand, acknowledge and agree to bound by the Investment Agreement and/or any other similar and relevant agreements of the company.
      </div>
      <!-- <div class="minTitle">
        PAYMENT FOR INVESTMENT
      </div> -->
      <div class="tl">APPLICANT’S SIGNATURE</div>
      <vue-esign ref="esign" v-show="sig1"  :width="800"  :height="300" :isCrop="false"
        :lineWidth="6" lineColor="#000000" bgColor.sync="#fff" style="border: 1px solid #666" />
      <van-image v-show="!sig1" class="esignImgbox"
        :src="formData.applicant_signature" />
      <div class="tr">
        <div class="esignBtn" @click="handleReset()" v-if="!isDone">Clear</div>
        <div class="esignBtn" @click="handleGenerate()" v-if="!isDone">Confirm</div>
      </div>
      
      <van-field v-model="formData.applicant_name" autocomplete="off" name="applicant_name" center :required="true" type="text"
        label="Name" placeholder="Please enter the Name" :rules="[
          { required: true },
        ]" />
            <van-field v-model="formData.applicant_passport_no" autocomplete="off" name="applicant_passport_no" center :required="true" type="text"
        label="NRIC / Passport No." placeholder="Please enter the NRIC / PASSPORT NO." :rules="[
          { required: true },
        ]" />
            <van-field v-model="formData.applicant_date" autocomplete="off" name="applicant_date" center :required="true" type="text"
        label="Date: DD-MM-YYYY" placeholder="Please enter the Date" 
        :rules="[{ pattern, message: 'Please enter the DATE ' }]"
        />

<div class="tl">WITNESS’S (ADVISOR) SIGNATURE</div>
      <vue-esign ref="esign1" v-show="sig2"  :width="800" :height="300" :isCrop="false"
        :lineWidth="6" lineColor="#000000" bgColor.sync="#fff" style="border: 1px solid #666" />
      <van-image v-show="!sig2" class="esignImgbox"
        :src="formData.witness_signature" />
      <div class="tr">
        <div class="esignBtn" @click="handleReset1()" v-if="!isDone">Clear</div>
        <div class="esignBtn" @click="handleGenerate1()" v-if="!isDone">Confirm</div>
      </div>

      <van-field v-model="formData.witness_name" autocomplete="off" name="witness_name" center :required="true" type="text"
        label="Name" placeholder="Please enter the Name" :rules="[
          { required: true },
        ]" />
            <van-field v-model="formData.witness_passport_no" autocomplete="off" name="witness_passport_no" center :required="true" type="text"
        label="NRIC / Passport No." placeholder="Please enter the NRIC / PASSPORT NO." :rules="[
          { required: true },
        ]" />
            <van-field v-model="formData.witness_date" autocomplete="off" name="witness_date" center :required="true" type="text"
        label="Date: DD-MM-YYYY" placeholder="Please enter the Date"
        :rules="[{ pattern, message: 'Please enter the DATE ' }]"
         />



      <div class="minTitle">NOTE</div>
      <div class="tl">i.	All payments are strictly to be made in favour of “GEP II Capital Sdn Bhd”.</div>
      <div class="tl">ii.	NO CASH PAYMENT is accepted for any payment. All cash transactions will be rejected.</div>
      <div class="tl">iii.	The Management reserves the rights not to Accept & Approved the Subscription. </div>
      <div class="tl">iv.	No individual or company is authorized to collect payment of any nature on our behalf. </div>
      <div class="tl">v.	Should you be requested to make payment of any nature to any third party purportedly representing us, we shall not be responsible or in any way be held liable for such payment  made to unauthorized party or parties.</div>


   


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
import { uploadAutograph } from "@/api/util";
import { createOrders, getOrdersForms, putOrdersForms2, createOrdersGep2 } from "@/api/order";
import { VueSelect as vSelect } from 'vue-select';
import 'vue-select/dist/vue-select.css';
export default {
  props: ['orderDataInfo'],
  components: {
    vSelect,
  },

  data() {
    return {
      formData:{
name:'',
nationality:'',
passport_no:'',
gender:'',
born_date:'',
occupation:'',
address:'',
postcode:'',
country:'',
contact_name:'',
contact_nationality:'',
contact_address: '',
contact_postcode:'',
contact_mobile:'',
contact_email:'',
emergency_contact_name: '',
emergency_contact_nationality: '',
emergency_contact_address: '',
emergency_contact_nric: '',
emergency_contact_dob:'',
emergency_contact_email: '',
emergency_contact_residential: '',
emergency_contact_mobile: '',
emergency_contact_relationship: '',
investment_amount:sessionStorage.getItem("changeGep2Val"),
advisor_name: sessionStorage.getItem("user_name"),
advisor_id:sessionStorage.getItem("user_id"),
details_bank_name:'',
details_bank_branch:'',
//details_bank_address:'',
invsetment_acc_name: 'GEP II Capital Sdn Bhd',
invsetment_bank: 'Ambank',
invsetment_acc_no:'8881052336972',
details_bank_acc_no:'',
details_bank_owner_name:'',
applicant_name:'',
applicant_passport_no:'',
applicant_signature:'',
applicant_date:moment(new Date()).format('DD-MM-YYYY'),
witness_name:'',
witness_passport_no:'',
witness_signature:'',
witness_date:moment(new Date()).format('DD-MM-YYYY'),
emergency_bank_name:'',
emergency_bank_branch:'',
emergency_bank_acc_no:'',
emergency_bank_owner_name:''
      },
      sig1:true,
      sig2:true,
      // formData: {
      //   name: "",
      //   nationality: "",
      //   dob: "",
      //   nric_pass_roc_no: "",
      //   address: "",
      //   phone: "",
      //   email: "",
      //   place_incorporation: "",
      //   occupation: "",
      //   postcode: "",
      //   country: "",
      //   source_of_funds: "",
      //   last_employment: "",
      //   employer: "",
      //   position_held: "",
      //   duration_employment: "",
      //   year_income: "",
      //   other_income: "",
      //   other_income_details: "",
      //   purpose_of_invest: "",
      //   other_invest: "",
      //   other_invest_details: "",
      //   politically_exposed: "",
      //   political_person_name: "",
      //   income_legitimate: "",
      //   income_legitimate_details: "",
      //   have_high_risk: "",
      //   have_high_risk_details: "",
      //   subcriber_name: "",
      //   nric_no: "",
      //   subscriber_signature: "",
      //   witness_name: sessionStorage.getItem("user_name"),
      //   witness_nric:"",
      //   witness_signature:"",
      //   date:moment(new Date()).format('DD-MM-YYYY')
      
      // },
      isShowPicker: false, // 控制日期彈框
      currentContent: new Date(), // 日期彈框顯示當前日期
      whichDate: "", // 區分是哪個日期觸發彈框
      from: "", // 記錄哪個頁面進入的
      isFilled: "", // 表單id(未填0)
      minDate: new Date(1900, 0, 1),
      isDone: false, // 訂單是否已確認
      pattern: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,// 正则验证时间
    };
  },
  mounted() {
    console.log(this.$route.query, 222222);
    // this.from = this.$route.query.from;
    // this.isFilled = this.$route.query.isFilled;
    // this.isDone = this.$route.query.status == 1 ? true : false;

    if (this.$store.state.isOverseaSignature) {
   
      this.from = "create"
      this.isFilled = 0
    } else {
  
      this.from = this.$route.query.from;
      this.isFilled = this.$route.query.isFilled;
      this.isDone = this.$route.query.status == 1 ? true : false;
    }
    if (this.$route.query.isShare) {
     
      this.isFilled = this.$route.query.gepTwoSubscriptionForm
    }
console.log("....7777....",this.isFilled)
    this.getFormData();
    this.isDone = sessionStorage.getItem('orderStatus') === '2'
  },
  methods: {
    onAddress(val){
      console.log("*******************",val.target._value)
 this.formData.contact_address = val.target._value
    },
    onPostcode(val){
      console.log("*******************",val.target._value)
 this.formData.contact_postcode = val.target._value
    },
    onCampanyIndividualName(val){
      console.log("*******************",val.target._value)
 this.formData.contact_name = val.target._value
 this.formData.applicant_name = val.target._value
    },
    onNationality(val){
      console.log("*******************",val.target._value)
 this.formData.contact_nationality = val.target._value
    },
    nricPassRocNo(val){
      console.log("*******************",val.target._value)
 //this.formData.witness_nric = val.target._value
 this.formData.applicant_passport_no = val.target._value
    },
    
    //  mobile validation (number only)
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[0-9]+$/.test(char)) return true;
      else e.preventDefault();
    },
    onSelected(opt) {
      this.region = opt.region;
    },
    onDeselected(opt) {
      this.region = '';
    },
    OverseaSignature() {
      this.$store.commit('changeIsOverseaSignature', true)
      //  this.$toast({
      //   type: "success",
      //   message: " Oversea Signature setting success",
      // });
      alert("Oversea Signature setting success")
    },
    // 如果已填 獲取數據
    getFormData() {
      console.log("..........edit data...111.....", this.isFilled);
      if (this.isFilled > 0) {
        console.log("..........edit data...222.....", this.isFilled);
        getOrdersForms(this.isFilled, { type: "GEP II Subscription Form" })
          .then((res) => {
            console.log(res, "..........edit data.. GEP II Subscription Form......");
            // res.beneficiary_info = JSON.parse(res.beneficiary_info)
            this.formData = res;
            this.sig1=false
            this.sig2=false

            
          })
          .catch((err) => {
            console.log(err);
          });
      }
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
    // 展示日期弹框
    /*    onShowPicker(val) {
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
        },*/
    // 出來日期格式ymd
    /*   formatDateYMD(value) {
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
    // 提交表單
    submit(form) {
      console.log("555555555555555555555", form);
      console.log(form);
      console.log(this.formData);
      if (!this.formData.applicant_signature) {
        this.$toast.fail("Please sign your name");
        return;
      } 
      // else if (!this.formData.date) {
      //   this.$toast.fail("Please enter the signature_date");
      //   return;
      // }
      else if (!this.formData.witness_signature) {
        this.$toast.fail("Please sign your name");
        return;
      }
      // else if (!this.formData.source_of_funds) {
      //   this.$toast.fail("Please enter the ource of funds");
      //   return;
      // }
      let data = JSON.parse(JSON.stringify(this.formData));
     // data.beneficiary_info = JSON.stringify(this.formData.beneficiary_info);
      if (this.isFilled > 0) {
        // 修改
        putOrdersForms2(this.isFilled, {
          type: "GEP II Subscription Form",
          data: JSON.stringify(data),
        }).then((res) => {
          console.log(res, "修改cusApp成功");
          this.$toast({
            type: "success",
            message: "Modify the success",
          });
          if (!this.$route.query.isShare && !this.$store.state.isOverseaSignature) {
            this.$router.go(-1);
          }
        });
      } else {
        console.log("+++++++++++....222.....+++++++++++++", data)
        createOrdersGep2(data)
          .then((res) => {
            this.isFilled = res.gepTwoSubscriptionForm
            console.log(data, "......xxx....createOrdersGep2...");
            console.log(res, "......xxx.......");
            this.$toast.success("You can Just moved to Next form");
            this.$store.commit("changePage", {
              tabbar: "/KYCGep2",
              title: "2/3 PDPA",
            });
            if (!this.$store.state.isOverseaSignature && !this.$route.query.isShare) {
              console.log('98974645555555555443333333311111111123')
              this.$store.commit('ChangecampanyIndividualNameGep2',res.form_data.name)
             
               this.$store.commit('nric_pass_roc_noGep2',res.form_data.passport_no)
              this.$router.push("/KYCGep2?from=create&orderId=" + res.id);
            } else {

              console.log(res,"...........final.....result......")
              this.$store.commit('changeCustomerApplicationId', res.id)
              this.$store.commit('ChangecampanyIndividualNameGep2',res.form_data.name)
             
             this.$store.commit('nric_pass_roc_noGep2',res.form_data.passport_no)
                 this.$emit('onSelect11')
            }
            // this.$router.go(-1)
          })
          .catch((err) => {
            console.log(err.response);
          });
      }
    },
    // 清空画布
    handleReset(index) {
      this.$refs["esign"].reset(); //清空画布
      this.sig1 = true
      this.formData.applicant_signature = ''
    },
    handleReset1(index) {
      this.$refs["esign1"].reset(); //清空画布
      this.sig2 = true
      this.formData.witness_signature = ''
    },
    handleGenerate1(index) {
      var that = this;
      this.$refs["esign1"]
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
    handleGenerate(index) {
      var that = this;
      this.$refs["esign"]
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
              this.formData.applicant_signature = res.path;
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
    // 添加beneficiary_info
    addBeneficiary() {
      if (this.formData.beneficiary_info.length < 4) {
        this.formData.beneficiary_info.push({
          BENEFICIARY_NAME: "",
          COMPANY_NO: "",
          RELATIONSHIP: "",
          CONTACT_NO: "",
          PERCENTAGE: "",
        });
      }
    },
    delBeneficiary(inx) {
      this.formData.beneficiary_info.splice(inx, 1);
    },
  },
};
</script>

<style scoped>
.CustomerApplication {
  padding: 0 16px;
  text-align: left;
}

.minTitle {
  font-weight: bold;
  line-height: 24px;
}

/deep/ .van-field__label {
  width: 13.2rem;
}
/deep/ .v-select.selectBox.vs--single.vs--searchable{
  width: 100%;
}
.beneficiary_info {
  position: relative;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
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

.van-radio__label {
  line-height: 35px !important;
}

.qaz {
  margin-left: 0.1rem !important;
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

#vs__dropdown-toggle {
  border: 0 !important;
}

.selectBox {
  border: 0 !important;
  border-bottom: 1px solid #ebedf0 !important;
  border-radius: 0 !important;
}

/deep/ .vs__dropdown-toggle {
  border: 0 !important;
}

/deep/ .van-radio__icon,
/deep/ .van-radio__icon .van-icon,
/deep/ .van-checkbox__icon,
/deep/ .van-checkbox__icon .van-icon {
  font-size: 18px;
  height: 20px;
  line-height: 20px;
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
