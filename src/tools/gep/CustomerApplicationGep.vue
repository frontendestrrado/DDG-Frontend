<template>
  <div class="CustomerApplication bodybox mt-5">
    <van-form validate-first @submit="submit" :submit-on-enter="false" :scroll-to-error="true">
      <!-- <van-button  round block type="info" color="#7C655D" @click="OverseaSignature">
        Overseas Signature
      </van-button> -->
      <div class="minTitle">SUBSCRIBER’S INFORMATION</div>
      <!-- 文本框 -->
      <van-field v-model="formData.name" name="name" center :required="true" type="text"
      @input="formData.name = formData.name.toUpperCase()"
      autocomplete="off"
      @change="onCampanyIndividualName"
        label="COMPANY / INDIVIDUAL NAME" placeholder="Please enter the COMPANY / INDIVIDUAL NAME" :rules="[
          {
            required: true,
          },
        ]" />
      <van-field v-model="formData.nationality" name="nationality" center :required="true" type="text"
      @input="formData.nationality = formData.nationality.toUpperCase()"
      autocomplete="off"
        label="Nationality" placeholder="Please enter the Nationality" :rules="[
          {
            required: true,
          },
        ]" />
      <van-field v-model="formData.nric_pass_roc_no" name="nric_pass_roc_no" center :required="true" type="text"
      @input="formData.nric_pass_roc_no = formData.nric_pass_roc_no.toUpperCase()"
      autocomplete="off"
      @change="nricPassRocNo"
        label="ROC / NRIC / PASSPORT NO" placeholder="Please enter the ROC / NRIC / PASSPORT NO" :rules="[
          {
            required: true,
          },
        ]" />
      <van-field v-model="formData.dob" name="dob" center :required="true" type="text"
      autocomplete="off"
        label="Date of Birth / Date of Registration : DD-MM-YYYY"
        placeholder="Please enter the Date of Birth / Date of Registration"
        :rules="[{ pattern, message: 'Please enter the DATE OF BIRTH' }]" />

      <van-field v-model="formData.place_incorporation" name="place_incorporation" center :required="true" type="text"
      @input="formData.place_incorporation = formData.place_incorporation.toUpperCase()"
      autocomplete="off"
        label="Place of Incorporation" placeholder="Please enter the Place of Incorporation" :rules="[
          {
            required: true,
          },
        ]" />

      <van-field v-model="formData.occupation" name="occupation" center :required="true" type="text"
      @input="formData.occupation = formData.occupation.toUpperCase()"
      autocomplete="off"
        label="Occupation / Industry" placeholder="Please enter the Occupation / Industry"
        :rules="[{ required: true }]" />
      <van-field v-model="formData.address" name="address" center :required="true" type="text"
      @input="formData.address = formData.address.toUpperCase()"
      autocomplete="off"
        label="Residential / Office Address" placeholder="Please enter the Residential / Office Address" :rules="[
          {
            required: true,
          },
        ]" />
      <van-field v-model="formData.postcode" name="postcode" center :required="true" type="text" label="Post Code"
      @input="formData.postcode = formData.postcode.toUpperCase()"
      autocomplete="off"
        placeholder="Please enter the Post Code" :rules="[
          {
            required: true,
          },
        ]" />
      <van-field v-model="formData.country" name="country" center :required="true" type="text" label="Country"
      @input="formData.country = formData.country.toUpperCase()"
      autocomplete="off"
        placeholder="Please enter the Country" :rules="[
          {
            required: true,
          },
        ]" />
      <van-field v-model="formData.phone" name="phone" center :required="true" @keyup.delete="console.log(1)"
      autocomplete="off"
        @keypress="isLetter($event)" type="text" label="MOBILE NO" placeholder="Please enter the MOBILE NO"
        :rules="[{ required: true }]" />
      <van-field v-model="formData.email" name="email" center  type="email" label="EMAIL ADDRESS"
      autocomplete="off"
        placeholder="Please enter the EMAIL ADDRESS" :required="true" :rules="[{ required: true }]" />

      <div class="minTitle">SOURCE OF FUNDS</div>

      <!-- <van-field
        v-model="formData.office_no"
        name="office_no"
        center
 @keypress="isLetter($event)"
        type="text"
        label="OFFICE NO"
        placeholder="Please enter the OFFICE NO"

      /> -->


      <div class="row mr-1 mt-3 qaz">
        <div class="col-md-2 mt-3">
          <span>*</span> <label for="">Source of Funds</label>
        </div>
        <div class="col-md-10">
          <v-select class="selectBox" v-model="formData.source_of_funds" :reduce="(option) => option.id" :options="[
            { label: 'Employed', id: '1', name: 'Employed' },
            { label: 'Self-employed / Own Business', id: '2', name: 'Self-employed / Own Business' },
            { label: 'Retired', id: '3', name: 'Retired'}
          ]" />

        </div>
      </div>
     
      <!-- <van-field name="source_of_funds" :required="true" :rules="[{ required: true }]"   v-model="formData.source_of_funds"    label="Source of Funds"> -->
        <!-- <template #input>
          <v-select  :required="true"   class="selectBox" v-model="formData.source_of_funds" :reduce="(option) => option.id" :options="[
            { label: 'Employed', id: 1 },
            { label: 'Self-employed / Own Business', id: 2},
            { label: 'Retired', id: 3 }
          ]" />
 </template> -->

<!-- </van-field> -->

      <van-field v-if="formData.source_of_funds === '3'"  v-model="formData.last_employment" name="last_employment" center type="text"
      @input="formData.last_employment = formData.last_employment.toUpperCase()"
      autocomplete="off"
        label="Last Employment Held" placeholder="Please enter the Last Employment Held" />
      <van-field v-model="formData.employer"  name="employer" center type="text" label="Name of Employer / Company"
      @input="formData.employer = formData.employer.toUpperCase()"
      autocomplete="off"
        placeholder="Please enter the Name of Employer / Company" :required="true" :rules="[{ required: true }]" />

      <van-field v-model="formData.position_held" name="position_held" center type="text"
      @input="formData.position_held = formData.position_held.toUpperCase()"
      autocomplete="off"
        label="Occupation / Position Held" :required="true" :rules="[{ required: true }]" placeholder="Please enter the Occupation / Position Held" />
      <van-field v-model="formData.duration_employment" autocomplete="off" name="duration_employment" center type="text"
      @input="formData.duration_employment = formData.duration_employment.toUpperCase()"
        label="Duration of Employment / Business" :required="true" :rules="[{ required: true }]" placeholder="Please enter the Duration of Employment / Business" />
      <van-field v-model="formData.year_income" autocomplete="off" :required="true" :rules="[{ required: true }]" name="year_income" center type="text" label="Annual Income (MYR)"
        placeholder="Please enter the Annual Income (MYR)" />

      <van-field name="other_income" :required="true" :rules="[{ required: true }]" label="Other Source of Income">
        <template #input>
          <van-radio-group v-model="formData.other_income" direction="horizontal">
            <van-radio :name="1">Yes</van-radio>
            <van-radio :name="2">No</van-radio>
          </van-radio-group>
        </template>

      </van-field>

      <v-select v-if="formData.other_income == 1" class="selectBox mr-2 ml-2" v-model="formData.other_income_details"
        :reduce="(option) => option.id" :options="[
          { label: 'Inheritance', id: 1 },
          { label: 'Gift', id: 2 },
          { label: 'Investment Gain', id: 3 },
          { label: 'Others', id: 4 }
        ]" />



      <div class="minTitle">
        DUE DILIGENCE


      </div>
      <van-field v-model="formData.purpose_of_invest" :required="true" :rules="[{ required: true }]" name="purpose_of_invest" center type="text"
      @input="formData.purpose_of_invest = formData.purpose_of_invest.toUpperCase()"
        label="What is your intended purpose of investing in DDG Global Expansion Plan 2022? " autocomplete="off"
        placeholder="Please enter the What is your intended purpose of investing in DDG Global Expansion Plan 2022? "  />
      <van-field name="other_invest" label="Are you investing in other businesses / startups?" :required="true" :rules="[{ required: true }]" >
        <template #input>
          <van-radio-group v-model="formData.other_invest" direction="horizontal">
            <van-radio :name="1">Yes</van-radio>
            <van-radio :name="2">No</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field v-if="formData.other_invest == 1" v-model="formData.other_invest_details" name="other_invest_details"
      @input="formData.other_invest_details = formData.other_invest_details.toUpperCase()"
        center type="text" label=""
        placeholder="Please enter " autocomplete="off"/>
      <van-field name="politically_exposed"
        label="Are you, your spouse, your partner and/or immediate family is in the politically exposed person list?" :required="true" :rules="[{ required: true }]">
        <template #input>
          <van-radio-group v-model="formData.politically_exposed" direction="horizontal">
            <van-radio :name="1">Yes</van-radio>
            <van-radio :name="2">No</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field v-if="formData.politically_exposed == 1" v-model="formData.political_person_name"
      @input="formData.political_person_name = formData.political_person_name.toUpperCase()"
        name="political_person_name" center type="text" label="" autocomplete="off"
        placeholder="Please enter " />

      <van-field name="income_legitimate" label="Are you sure that your source of income is legitimate?" :required="true" :rules="[{ required: true }]">
        <template #input>
          <van-radio-group v-model="formData.income_legitimate" direction="horizontal">
            <van-radio :name="1">Yes</van-radio>
            <van-radio :name="2">No</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <van-field name="have_high_risk" label="Are you in the high-risk business?" :required="true" :rules="[{ required: true }]">
        <template #input>
          <van-radio-group v-model="formData.have_high_risk" direction="horizontal">
            <van-radio :name="1">Yes</van-radio>
            <van-radio :name="2">No</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <v-select v-if="formData.have_high_risk == 1" class="selectBox mr-2 ml-2" v-model="formData.have_high_risk_details"
        :reduce="(option) => option.id" :options="[
          { label: 'Online Gaming', id: 1 },
          { label: 'FOREX / Cryptocurrency', id: 2 },
          { label: 'Debt Collection Agency', id: 3 },
          { label: 'Others', id: 4 }
        ]" />

      <div class="minTitle">
        1. I/We (Name and NRIC number stated above) have appointed “DDG International Berhad” to manage my
        subscription(s) according to my will and instruction.
      </div>
      <div class="minTitle">
        2. I/We (Name and NRIC number stated above), hereby declare that I am / we are fully understand the benefits and
        risks of subscription(s) to DDG Global Expansion Plan.

      </div>
      <div class="minTitle">
        3. I/We (Name and NRIC number stated above), hereby declare that all the subscriptions are derived from legal
        sources.

      </div>
      <div class="minTitle">
        3. . I/We (Name and NRIC number stated above), hereby declare that all the information that provided is true,
        otherwise I should bear all the legal liabilities and relevant consequences.


      </div>
      <div class="minTitle">APPLICANT’S DECLARATION</div>
      <div class="minTitle">
        3. I/We certify that the information supplied by me/us in this application form is true and accurate.


      </div>
      <div class="minTitle">
        3. I /We confirm that the money transferred does not represent the proceed of criminal activity.


      </div>
      <div class="minTitle">
        3. I/We confirm that I/we have read and fully understand the Terms and Conditions of DDG Global Expansion Plan
        and note that these may be updated from time to time.

      </div>

    
      <van-field v-model="formData.subcriber_name" autocomplete="off" name="subcriber_name" center :required="true" type="text"
      @input="formData.subcriber_name = formData.subcriber_name.toUpperCase()"
        label="Subscriber’s Name" placeholder="Please enter the NAME" :rules="[{ required: true }]" />
      <van-field v-model="formData.nric_no" autocomplete="off" name="nric_no" center :required="true" type="text"
      @input="formData.nric_no = formData.nric_no.toUpperCase()"
        label="NRIC / Passport No." placeholder="Please enter the NRIC / PASSPORT NO." :rules="[
          { required: true },
        ]" />
      <div class="tl">Subscriber’s Signature</div>
      <vue-esign ref="esign"  :style="{ display: (this.xyz === '' ? 'block' : formData.subscriber_signature === null || formData.subscriber_signature === '' ? 'block' : 'none') }"  :width="800" :height="300" :isCrop="false"
        :lineWidth="6" lineColor="#000000" bgColor.sync="#fff" style="border: 1px solid #666" />
      <van-image :style="{ border: '1px solid #666', display: (this.xyz === '1' ? formData.subscriber_signature === null || formData.subscriber_signature === '' ? 'none' : 'block' : 'none') }" class="esignImgbox"
        :src="formData.subscriber_signature" />
      <div class="tr">
        <div class="esignBtn" @click="handleReset()" >Clear</div>
        <div class="esignBtn" @click="handleGenerate()" >Confirm</div>
      </div>

      <div class="minTitle">WITNESS DETAIL</div>
     

      <van-field v-model="formData.witness_name" autocomplete="off" id="2reset1" name="witness_name" center :required="true" type="text" label="NAME"
      @input="formData.witness_name = formData.witness_name.toUpperCase()"
        placeholder="Witness/Advisor’s Name"  :rules="[{ required: true }]" />
        <van-field v-model="formData.witness_nric" name="witness_nric" center :required="true" type="text" label="NRIC/ Passport Number"
        @input="formData.witness_nric = formData.witness_nric.toUpperCase()"
        placeholder="NRIC/ Passport Number" autocomplete="off" :rules="[{ required: true }]" />

        <div class="tl">Witness Signature</div>
      <vue-esign ref="witness_signature"  :style="{ display: (this.xyz1 === '' ? 'block' : formData.witness_signature === null || formData.witness_signature === '' ? 'block' : 'none') }" :width="800" :height="300" :isCrop="false"
        :lineWidth="6" lineColor="#000000" bgColor.sync="#fff" style="border: 1px solid #666" />
      <van-image :style="{ border: '1px solid #666', display: (this.xyz1 === '1' ? formData.witness_signature === null || formData.witness_signature === '' ? 'none' : 'block' : 'none') }" class="esignImgbox"
        :src="formData.witness_signature" />
      <div class="tr">
        <div class="esignBtn" @click="handleReset1()" >Clear</div>
        <div class="esignBtn" @click="handleGenerate1()" >Confirm</div>
      </div>
      <van-field v-model="formData.date" id="2reset2" autocomplete="off" name="date" center :required="true" type="text" label="DATE: DD-MM-YYYY"
        placeholder="Please enter the DATE" :rules="[{ pattern, message: 'Please enter the DATE' }]" />


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
import { createOrders, getOrdersForms, putOrdersForms, createOrdersGep } from "@/api/order";
import { VueSelect as vSelect } from 'vue-select';
import 'vue-select/dist/vue-select.css';
export default {
  props: ['orderDataInfo'],
  components: {
    vSelect,
  },

  data() {
    return {
      formData: {
        name: "",
        nationality: "",
        dob: "",
        nric_pass_roc_no: "",
        address: "",
        phone: "",
        email: "",
        place_incorporation: "",
        occupation: "",
        postcode: "",
        country: "",
        source_of_funds: "",
        last_employment: "",
        employer: "",
        position_held: "",
        duration_employment: "",
        year_income: "",
        other_income: "",
        other_income_details: "",
        purpose_of_invest: "",
        other_invest: "",
        other_invest_details: "",
        politically_exposed: "",
        political_person_name: "",
        income_legitimate: "",
        income_legitimate_details: "",
        have_high_risk: "",
        have_high_risk_details: null,
        subcriber_name: "",
        nric_no: "",
        subscriber_signature: "",
        witness_name: sessionStorage.getItem("user_name"),
        witness_nric:"",
        witness_signature:"",
        date:moment(new Date()).format('DD-MM-YYYY'),
        remote:this.$store.state.isOverseaSignature.toString()
      
      },
      xyz: "",
      xyz1:"",
      sig1:true,
      sig2:true,
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
      this.isDone = this.$route.query.status == 2 ? true : false;
    }
    if (this.$route.query.isShare) {
     
      this.isFilled = this.$route.query.gep_kyc_form
    }
console.log("....7777....",this.isFilled)
    this.getFormData();
    this.isDone = sessionStorage.getItem('orderStatus') === '2'
  },
  methods: {
    onCampanyIndividualName(val){
      console.log("*******************",val.target._value)
 this.formData.subcriber_name = val.target._value
    },
    nricPassRocNo(val){
      console.log("*******************",val.target._value)
 //this.formData.witness_nric = val.target._value
 this.formData.nric_no = val.target._value
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
        getOrdersForms(this.isFilled, { type: "GEP KYC" })
          .then((res) => {
            console.log(res, "..........edit data........");
            // res.beneficiary_info = JSON.parse(res.beneficiary_info)
            this.formData = res;
            this.sig1=false
            this.xyz = "1"
            this.xyz1 = "1"
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
      if (!this.formData.subscriber_signature && !this.$store.state.isOverseaSignature) {
        this.$toast.fail("Please sign your name");
        return;
      } else if (!this.formData.date) {
        this.$toast.fail("Please enter the signature_date");
        return;
      }
      else if (!this.formData.witness_signature) {
        this.$toast.fail("Please sign your name");
        return;
      }
      else if (!this.formData.source_of_funds) {
        this.$toast.fail("Please enter the ource of funds");
        return;
      }
      let data = JSON.parse(JSON.stringify(this.formData));
      data.beneficiary_info = JSON.stringify(this.formData.beneficiary_info);
      if (this.isFilled > 0) {
        // 修改
        putOrdersForms(this.isFilled, {
          type: "GEP KYC",
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
        console.log("+++++++++++.........+++++++++++++", data)
        createOrdersGep(data)
          .then((res) => {
            console.log(data, "......xxx.......");
            console.log(res, "......xxx.......");
            this.isFilled = res.gep_kyc_form
            this.$toast.success("You can Just moved to Next form");
            this.$store.commit("changePage", {
              tabbar: "/KYCGep",
              title: "2/5 SUBSCRIPTION FORM",
            });
            if (!this.$store.state.isOverseaSignature && !this.$route.query.isShare) {
              console.log('98974645555555555443333333311111111123')
              this.$store.commit('ChangecampanyIndividualNameGep',res.form_data.name)
             this.$store.commit('nationalityGep',res.form_data.nationality)
               this.$store.commit('nric_pass_roc_noGep',res.form_data.nric_pass_roc_no)
                 this.$store.commit('dobGep',res.form_data.dob)
                 this.$store.commit('place_incorporationGep',res.form_data.place_incorporation)
                 this.$store.commit('occupationGep',res.form_data.occupation)
                 this.$store.commit('addressGep',res.form_data.address)
                 this.$store.commit('postcodeGep',res.form_data.postcode)
                 this.$store.commit('countryGep',res.form_data.country)
                 this.$store.commit('phoneGep',res.form_data.phone)
                 this.$store.commit('emailGep',res.form_data.email)
                 this.$store.commit('subscriber_signatureGep',res.form_data.subscriber_signature)
              this.$router.push("/KYCGep?from=create&orderId=" + res.id);
            } else {

              console.log(res,"...........final.....result......")
              this.$store.commit('changeCustomerApplicationId', res.id)
             this.$store.commit('ChangecampanyIndividualNameGep',res.form_data.name)
             this.$store.commit('nationalityGep',res.form_data.nationality)
               this.$store.commit('nric_pass_roc_noGep',res.form_data.nric_pass_roc_no)
                 this.$store.commit('dobGep',res.form_data.dob)
                 this.$store.commit('place_incorporationGep',res.form_data.place_incorporation)
                 this.$store.commit('occupationGep',res.form_data.occupation)
                 this.$store.commit('addressGep',res.form_data.address)
                 this.$store.commit('postcodeGep',res.form_data.postcode)
                 this.$store.commit('countryGep',res.form_data.country)
                 this.$store.commit('phoneGep',res.form_data.phone)
                 this.$store.commit('emailGep',res.form_data.email)
                 this.$store.commit('subscriber_signatureGep',res.form_data.subscriber_signature)
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
      this.xyz = ""
      this.formData.subscriber_signature = ''
      document.getElementById("2reset1").focus()
    },
    handleReset1(index) {
      this.$refs["witness_signature"].reset(); //清空画布
      this.sig2 = true
      this.xyz1 = ""
      this.formData.witness_signature = ''
      document.getElementById("2reset2").focus()
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
    handleGenerate(index) {
      if(!this.$store.state.isOverseaSignature){
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
      }
      else{
        alert("Subscriber Signature should be added by the Subscriber from the shared link.")
        this.$refs["esign"].reset(); 
      }
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
