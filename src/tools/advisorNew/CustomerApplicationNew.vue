<template>
  <div class="CustomerApplication bodybox">
    <van-form validate-first @submit="submit" :submit-on-enter="false" :scroll-to-error="true">
      <!-- <van-button  round block type="info" color="#7C655D" @click="OverseaSignature">
        Overseas Signature
      </van-button> -->
      <div class="minTitle">GENERAL INFORMATION</div>
      <!-- 文本框 -->
      <div class="row">
        <div class="col-md-6">
          <van-field v-model="formData.name" name="name" autocomplete="off" center :required="true" type="text"
            @change="onCampanyIndividualName" label="COMPANY / INDIVIDUAL NAME"
            placeholder="Please enter the COMPANY / INDIVIDUAL NAME" :rules="[
              {
                required: true,
              },
            ]" />
        </div>
        <div class="col-md-6">
          <van-field v-model="formData.passport_no" autocomplete="off" name="passport_no" center :required="true"
            type="text" label="ROC / NRIC / PASSPORT NO" placeholder="Please enter the ROC / NRIC / PASSPORT NO" :rules="[
              {
                required: true,
              },
            ]" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">

      <van-field v-model="formData.born_date" autocomplete="off" name="born_date" center :required="true"
        label="DATE OF BIRTH: DD-MM-YYYY" placeholder="Please enter DD-MM-YYYY"
        :rules="[{ pattern, message: 'Please enter the DATE OF BIRTH' }]" />
      </div>
        <div class="col-md-6">
      <van-field v-model="formData.occupation" autocomplete="off" name="occupation" center :required="true" type="text"
        label="OCCUPATION" placeholder="Please enter the OCCUPATION" :rules="[{ required: true }]" />
      </div>
        
        </div>
        

        
      <van-field v-model="formData.address" autocomplete="off" name="address" center :required="true" type="text"
        label="ROC REGISTERED / RESIDENTIAL ADDRESS" placeholder="Please enter the ROC REGISTERED / RESIDENTIAL ADDRESS"
        :rules="[
          {
            required: true,
          },
        ]" />

      <div class="minTitle">CONTACT DETAILS</div>
      <van-field v-model="formData.phone" autocomplete="off" name="phone" center :required="true"
        @keyup.delete="console.log(1)" @keypress="isLetter($event)" type="text" label="MOBILE NO"
        placeholder="Please enter the MOBILE NO" :rules="[{ required: true }]" />
      <van-field v-model="formData.office_no" autocomplete="off" name="office_no" center @keypress="isLetter($event)"
        type="text" label="OFFICE NO" placeholder="Please enter the OFFICE NO" />
      <van-field v-model="formData.house_no" autocomplete="off" name="house_no" center @keypress="isLetter($event)"
        type="text" label="HOUSE NO" placeholder="Please enter the HOUSE NO" />
      <van-field v-model="formData.email" autocomplete="off" name="email" center :required="true" type="email"
        label="EMAIL ADDRESS" placeholder="Please enter the EMAIL ADDRESS" :rules="[{ required: true }]" />

      <span style="font-weight: bold">BENEFICIARY(IES) IN THE EVENT OF SETTLOR’S DEATH (Applicable for
        Individual Trustor Only)</span>
      <van-button class="esignBtn" native-type="button" @click="addBeneficiary">Add</van-button>
      <div class="beneficiary_info" v-for="(item, inx) in formData.beneficiary_info" :key="inx">
        <van-field v-model="item.BENEFICIARY_NAME" name="BENEFICIARY_NAME" autocomplete="off" :required="true" center
          type="text" label="BENEFICIARY NAME / TRUSTEE" placeholder="Please enter the BENEFICIARY NAME / TRUSTEE"
          :rules="[{ required: true }]" />
        <van-field v-model="item.COMPANY_NO" autocomplete="off" name="COMPANY_NO" center :required="true" type="text"
          label="NRIC / PASSPORT NO COMPANY NO." placeholder="Please enter the NRIC / PASSPORT NO COMPANY NO."
          :rules="[{ required: true }]" />
        <van-field v-model="item.RELATIONSHIP" name="RELATIONSHIP" center autocomplete="off" :required="true" type="text"
          label="RELATIONSHIP" placeholder="Please enter the RELATIONSHIP" :rules="[{ required: true }]" />
        <van-field v-model="item.CONTACT_NO" name="CONTACT_NO" autocomplete="off" center :required="true" type="text"
          label="CONTACT NO" @keypress="isLetter($event)" placeholder="Please enter the CONTACT NO"
          :rules="[{ required: true }]" />
        <van-field v-model="item.PERCENTAGE" name="PERCENTAGE" center autocomplete="off" :required="true" type="text"
          label="PERCENTAGE OF DISTRIBUTION" placeholder="Please enter the PERCENTAGE OF DISTRIBUTION"
          :rules="[{ required: true }]" />
        <van-button class="esignDelBtn" v-if="inx > 0" slot="button" native-type="button"
          @click="delBeneficiary(inx)">delete</van-button>
      </div>

      <div class="minTitle">
        SUBSITUTED BENEFICIARY(IES)(Applicable for Individual Trustor Only)
      </div>
      <van-field v-model="formData.beneficiary_name_trustee" name="beneficiary_name_trustee" center autocomplete="off"
        type="text" label="BENEFICIARY NAME / TRUSTEE" placeholder="Please enter the BENEFICIARY NAME / TRUSTEE" />
      <van-field v-model="formData.nric_passport_no_company_no" name="nric_passport_no_company_no" center
        autocomplete="off" type="text" label="NRIC / PASSPORT NO COMPANY NO"
        placeholder="Please enter the NRIC / PASSPORT NO COMPANY NO" />
      <van-field v-model="formData.relationship" name="relationship" center autocomplete="off" type="text"
        label="RELATIONSHIP" placeholder="Please enter the RELATIONSHIP" />
      <van-field v-model="formData.contact_no" name="contact_no" center autocomplete="off" type="text" label="CONTACT NO"
        @keypress="isLetter($event)" placeholder="Please enter the CONTACT NO" />
      <van-field v-model="formData.percentage_of_distribution" name="percentage_of_distribution" center type="text"
        autocomplete="off" label="PERCENTAGE OF DISTRIBUTION" placeholder="Please enter the PERCENTAGE OF DISTRIBUTION" />
      <div class="minTitle">
        EMERGENCY CONTACT PARTICULARS (INDIVIDUAL OVER 18 YEARS OLD)
      </div>
      <van-field v-model="formData.emergency_contact_name" name="emergency_contact_name" center :required="true"
        type="text" autocomplete="off" label="NAME" placeholder="Please enter the NAME" :rules="[
          {
            required: true,
          },
        ]" />
      <van-field v-model="formData.emergency_contact_nric" name="emergency_contact_nric" center autocomplete="off"
        :required="true" type="text" label="NRIC / PASSPORT NO." placeholder="Please enter the NRIC / PASSPORT NO."
        :rules="[
          {
            required: true,
          },
        ]" />
      <van-field v-model="formData.emergency_contact_date" name="emergency_contact_date" center autocomplete="off"
        :required="true" label="DATE OF BIRTH: DD-MM-YYYY" placeholder="Please enter DD-MM-YYYY"
        :rules="[{ pattern, message: 'Please enter the DATE OF BIRTH' }]" />
      <van-field v-model="formData.emergency_contact_relationshiop" name="emergency_contact_relationshiop" center
        :required="true" autocomplete="off" type="text" label="RELATIONSHIOP WITH SETTLOR"
        placeholder="Please enter the RELATIONSHIOP WITH SETTLOR" :rules="[
          {
            required: true,
          },
        ]" />
      <van-field v-model="formData.emergency_contact_contact" name="emergency_contact_contact" center :required="true"
        autocomplete="off" type="text" label="CONTACT NUMBER" @keypress="isLetter($event)"
        placeholder="Please enter the CONTACT NUMBER" :rules="[
          {
            required: true,
          },
        ]" />
      <van-field v-model="formData.emergency_contact_email" name="emergency_contact_email" center :required="true"
        autocomplete="off" type="email" label="EMAIL ADDRESS" placeholder="Please enter the EMAIL ADDRESS" :rules="[
          {
            required: true,
          },
        ]" />
      <div class="minTitle">TRUST INFORMATION</div>
      <van-field v-model="formData.price" name="price" center autocomplete="off" :required="true" type="number"
        label="TRUST CAPITAL AMOUNT (MYR)" placeholder="Please enter the TRUST CAPITAL AMOUNT (MYR)" :rules="[
          {
            required: true,
          },
        ]" />
      <van-field v-model="formData.adviser_name" name="adviser_name" center :required="true" autocomplete="off"
        type="text" label="AUTHORIZED TRUST ADVISOR NAME" placeholder="Please enter the AUTHORIZED TRUST ADVISOR NAME"
        :rules="[
          {
            required: true,
          },
        ]" />
      <van-field v-model="formData.code" name="code" autocomplete="off" center :required="true" type="text"
        label="TRUST ADVISOR’S ID" placeholder="Please enter the TRUST ADVISOR’S ID" :rules="[
          { required: true },
        ]" />
      <div class="minTitle">
        BANK DETAILS – SOURCE OF FUND (CASH is Not Acceptable) To insert ‘Not
        Applicable’ if Cheque is received
      </div>
      <van-field v-model="formData.details_bank_name" name="details_bank_name" center autocomplete="off" :required="true"
        type="text" label="NAME OF BANK" placeholder="Please enter the NAME OF BANK" :rules="[{ required: true }]" />
      <van-field v-model="formData.details_account_no" name="details_account_no" center autocomplete="off"
        :required="true" type="text" label="ACCOUNT NO" placeholder="Please enter the ACCOUNT NO"
        :rules="[{ required: true }]" />
      <van-field v-model="formData.details_account_owner" name="details_account_owner" center autocomplete="off"
        :required="true" type="text" label="ACCOUNT OWNER" placeholder="Please enter the ACCOUNT OWNER" :rules="[
          { required: true },
        ]" />
      <div class="minTitle">
        PAYMENTS TO SETTLOR / AUTHORIZED PERSON Details of the bank account to
        which payments to the Settlor / Authorized person are to be transferred:
      </div>
      <van-field v-model="formData.account_name" name="account_name" center :required="true" autocomplete="off"
        type="text" label="NAME OF BANK" placeholder="Please enter the NAME OF BANK" :rules="[{ required: true }]" />
      <van-field v-model="formData.bank" name="bank" center :required="true" autocomplete="off" type="text"
        label="ACCOUNT NO" placeholder="Please enter the ACCOUNT NO" :rules="[{ required: true }]" />
      <van-field v-model="formData.account_no" name="account_no" center :required="true" autocomplete="off" type="text"
        label="BANK LOCATION" placeholder="Please enter the BANK LOCATION" :rules="[{ required: true }]" />
      <van-field v-model="formData.swift_code" name="swift_code" autocomplete="off" center :required="true" type="text"
        label="ACCOUNT OWNER" placeholder="Please enter the ACCOUNT OWNER" :rules="[{ required: true }]" />
      <!-- <van-field
        v-model="formData.ref"
        name="ref"
        center
        :required="true"
        type="text"
        label="Ref"
        placeholder="Please enter the Ref"
        :rules="[{ required: true, message: 'Please enter the Ref' }]"
      /> -->

      <div class="minTitle">SUBSCRIPTION PAYMENT</div>
      <div class="minTitle">
        Subscription amounts are to be remitted in MYR only. Details of the
        account to which subscription payments are to be transferred (the
        transfer description should include the name and reference of the
        transferring entity or person, the name of the Issuer and the reference
        "AI GENERATION Trust Subscription".):
      </div>
      <van-field v-model="formData.dividend_bank_name" name="dividend_bank_name" center autocomplete="off" disabled
        type="text" label="Account Name" placeholder="Please enter the Account Name" />
      <van-field v-model="formData.dividend_account_no" name="dividend_account_no" center autocomplete="off" disabled
        type="text" label="Bank" placeholder="Please enter the Bank" />
      <van-field v-model="formData.dividend_bank_location" name="dividend_bank_location" center disabled
        autocomplete="off" type="text" label="Account No" placeholder="Please enter the Account No" />
      <van-field v-model="formData.dividend_account_owner" name="dividend_account_owner" center autocomplete="off"
        disabled type="text" label="Swift Code" placeholder="Please enter the Swift Code" />
      <div class="minTitle">APPLICATION DECLARATION</div>
      <div class="minTitle">
        1. I certify that the information supplied by me in this application
        form is true and accurate.
      </div>
      <div class="minTitle">
        2. I confirm that the asset/money transferred is not represent the
        proceed of criminal activity.
      </div>
      <div class="minTitle">
        3. I confirm that I have read and fully understand the Terms and
        Conditions of AI GENERATION Trust and note that these may be updated from
        time to time.
      </div>
      <br></br>
      <!-- :style="{ border: '1px solid #666', background: '#7c655d' }" -->
      <div class="tl">SETTLOR SIGNATURE</div>


      <vue-esign ref="esign" style="border: 1px solid #666" :width="800" :height="300" :isCrop="false" :lineWidth="6"
        lineColor="#000000" :bgColor.sync='qwe' :id="'can1'"
        :style="{ display: (this.xyz === '' ? 'block' : formData.signature === null || formData.signature === '' ? 'block' : 'none') }" />

      <van-image
        :style="{ border: '1px solid #666', display: (this.xyz === '1' ? formData.signature === null || formData.signature === '' ? 'none' : 'block' : 'none') }"
        :id="'img1'" class="esignImgbox" :src="formData.signature" />

      <!-- <vue-esign
        ref="esign"
        v-show="sig1"
        :width="1200"
   
        :height="300"
        :isCrop="false"
        :lineWidth="6"
        lineColor="#000000"
        bgColor.sync="#fff"
        style="border: 1px solid #666"
      />
      <van-image v-show="(formData.signature && sig1 ===false)" class="esignImgbox" width="100%" height="20%" :src="formData.signature" /> -->
      <!-- <van-image
        v-show="(formData.signature && sig1 ===false)"
        width="100%"
        height="20%"
      
        class="esignImgbox"
        :src="formData.signature"
       style="border: 1px solid #666"
      /> -->
      <div class="tr">
        <div class="esignBtn" @click="handleReset()" v-if="!isDone">Clear</div>
        <div class="esignBtn" @click="handleGenerate()" v-if="!isDone">Confirm</div>
      </div>
      <van-field v-model="formData.client_name" id="reset1" name="client_name" center :required="true" type="text"
        autocomplete="off" label="NAME" placeholder="Please enter the NAME" :rules="[{ required: true }]" />
      <van-field v-model="formData.signature_date" name="signature_date" center autocomplete="off" :required="true"
        label="DATE: DD-MM-YYYY" placeholder="Please enter DD-MM-YYYY"
        :rules="[{ pattern, message: 'Please enter the DATE' }]" />

      <div class="minTitle">WITNESS DETAIL</div>
      <van-field v-model="formData.witness_name" name="witness_name" center :required="true" autocomplete="off"
        type="text" label="NAME" placeholder="Please enter the NAME" :rules="[{ required: true }]" />
      <van-field v-model="formData.witness_passport_no" name="witness_passport_no" center autocomplete="off"
        :required="true" type="text" label="NRIC / PASSPORT NO." placeholder="Please enter the NRIC / PASSPORT NO."
        :rules="[
          { required: true },
        ]" />
      <div class="minTitle">IMPORTANT NOTICE</div>
      <div class="minTitle">
        i. All payments are strictly to be made in favor of “AITB CLIENT
        ACCOUNT”
      </div>
      <div class="minTitle">
        ii. NO CASH PAYMENT is accepted for any payment. Anyone who attempts to
        bank in cash for transaction will be rejected, and the Management
        reserve the rights not to Accept & Approved the application
      </div>
      <div class="minTitle">
        iii. No individual or company is authorized to collect payment of any
        nature on our behalf
      </div>
      <div class="minTitle">
        v. Should you be requested to make payment of any nature to any third
        party purportedly representing us, We shall not be responsible or in
        anyway be held liable for such payment made to unauthorized party or
        parties
      </div>
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
import { createOrders, getOrdersForms, putOrdersForms } from "@/api/order";
export default {
  props: ['orderDataInfo'],
  data() {
    return {
      formData: {
        name: "",
        passport_no: "",
        born_date: "",
        occupation: "",
        address: "",
        phone: "",
        office_no: "",
        house_no: "",
        email: "",
        beneficiary_info: [
          {
            BENEFICIARY_NAME: "",
            COMPANY_NO: "",
            RELATIONSHIP: "",
            CONTACT_NO: "",
            PERCENTAGE: "",
          },
        ],
        price: "",
        adviser_name: sessionStorage.getItem("user_name"),
        code: sessionStorage.getItem("user_id"),
        account_name: "",
        bank: "",
        account_no: "",
        swift_code: "",



        // ref: "",
        details_bank_name: "",
        details_account_no: "",
        details_account_owner: "",
        dividend_bank_name: "AITB CLIENT ACCOUNT",
        dividend_account_no: "MAYBANK BERHAD",
        dividend_bank_location: "5140 5775 4281",
        dividend_account_owner: "MBBEMYKL",
        witness_name: "",
        witness_passport_no: "",
        signature: "",
        client_name: "",
        signature_date: moment(new Date()).format('DD-MM-YYYY'),
        beneficiary_name_trustee: "",
        nric_passport_no_company_no: "",
        relationship: "",
        contact_no: "",
        percentage_of_distribution: "",
        emergency_contact_name: "",
        emergency_contact_nric: "",
        emergency_contact_date: "",
        emergency_contact_relationshiop: "",
        emergency_contact_contact: "",
        emergency_contact_email: "",
        reorder: this.$store.state.reorder,
        reorder_ref: this.$store.state.reorderId,
      },
      qwe: '',
      sig1: this.$store.state.reorder == 0 ? true : false,
      isShowPicker: false, // 控制日期彈框
      currentContent: new Date(), // 日期彈框顯示當前日期
      whichDate: "", // 區分是哪個日期觸發彈框
      from: "", // 記錄哪個頁面進入的
      isFilled: "", // 表單id(未填0)
      minDate: new Date(1900, 0, 1),
      xyz: this.$store.state.reorder == 0 ? '' : '1',
      isDone: false, // 訂單是否已確認
      pattern: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,// 正则验证时间
    };
  },

  // this.sig1 = false
  //           this.xyz = "1"
  mounted() {
    console.log(this.$route.query, 222222);

    console.log("this.$store.state.reorderId", this.$store.state.reorderId);
    console.log("this.$store.state.reorder", this.$store.state.reorder);

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
      this.isFilled = this.$route.query.customer_app_form
    }


    this.isDone = sessionStorage.getItem('orderStatus') === '2'
    this.getFormData();
    console.log("this.$store.state.reorder...........................", this.$store.state.reorder)
    console.log("QQQQQQ", this.$store.state.reordercustomer_app_form)
    if (this.$store.state.reorder == 1) {

      if (this.$store.state.reordercustomer_app_form > 0) {

        getOrdersForms(this.$store.state.reordercustomer_app_form, { type: "Customer Application" })
          .then((res) => {

            console.log(res, "---------5---5---5---5--");
            res.beneficiary_info = [
              {
                BENEFICIARY_NAME: "",
                COMPANY_NO: "",
                RELATIONSHIP: "",
                CONTACT_NO: "",
                PERCENTAGE: "",
              },
            ];

            res.beneficiary_name_trustee = ""
            res.nric_passport_no_company_no = ""
            res.relationship = ""
            res.contact_no = ""
            res.percentage_of_distribution = ""
            res.price = ""
            res.details_bank_name = ""
            res.details_account_no = ""
            res.details_account_owner = ""
            res.account_name = ""

            res.bank = ""
            res.account_no = ""
            res.swift_code = ""
            res.signature = ""

            console.log("*********3*3*3**1*", res)
            res.reorder = this.$store.state.reorder
            res.reorder_ref = this.$store.state.reorderId
            //     reorder: this.$store.state.reorder,
            // reorder_ref: this.$store.state.reorderId,
            this.formData = res;
            console.log("*********3*3*3**2*", this.formData)
            this.sig1 = false
            this.xyz = "1"
            // document.getElementById('img1').style.display = 'block'
            // document.getElementById('can1').style.display = 'none'
          })
          .catch((err) => {
            console.log(err);
          });
      }

    }
  },
  methods: {
    onCampanyIndividualName(val) {
      console.log("*******************", val.target._value)
      this.formData.client_name = val.target._value
    },
    //  mobile validation (number only)
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[0-9]+$/.test(char)) return true;
      else e.preventDefault();
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
      if (this.isFilled > 0) {
        console.log("QQQQQQ", this.isFilled)
        getOrdersForms(this.isFilled, { type: "Customer Application" })
          .then((res) => {
            console.log(res, "獲取Customer Application數據-----------");
            res.beneficiary_info = JSON.parse(res.beneficiary_info)
            this.formData = res;
            this.sig1 = false
            this.xyz = "1"
            // document.getElementById('img1').style.display = 'block'
            // document.getElementById('can1').style.display = 'none'
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
      console.log("-----4----4---4", this.formData);
      console.log("this.$store.state.reorderId------1", this.$store.state.reorderId);
      console.log("this.$store.state.reorder---------2", this.$store.state.reorder);
      if (!this.formData.signature && !this.$store.state.isOverseaSignature) {
        this.$toast.fail("Please sign your name");
        return;
      } else if (!this.formData.born_date) {
        this.$toast.fail("Please enter the born_date");
        return;
      } else if (!this.formData.signature_date) {
        this.$toast.fail("Please enter the signature_date");
        return;
      }
      let data = JSON.parse(JSON.stringify(this.formData));
      console.log("........00000....", data);
      data.beneficiary_info = JSON.stringify(this.formData.beneficiary_info);
      if (this.isFilled > 0) {
        // 修改
        putOrdersForms(this.isFilled, {
          type: "Customer Application",
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
        createOrders(data)
          .then((res) => {
            console.log(res, ".....yyy.......");
            this.isFilled = res.customer_app_form
            this.$toast.success("Creating a successful");
            this.$store.commit('ChangecampanyIndividualName', data.name)
            this.$store.commit('signature', data.signature)
            this.$store.commit("changePage", {
              tabbar: "/KYC",
              title: "2/5 Compliance Questionnaire"

            });
            if (!this.$store.state.isOverseaSignature && !this.$route.query.isShare) {
              console.log('98974645555555555443333333311111111123')
              sessionStorage.setItem('abcd', data.name)
              this.$store.commit('changeCustomerApplicationId', res.id)
              this.$store.commit('ChangecampanyIndividualName', data.name)
              this.$store.commit('Changepassport_no', data.passport_no)
              this.$store.commit('Changeemail', data.email)
              this.$store.commit('Changephone', data.phone)
              this.$store.commit('Changehouse_no', data.house_no)
              this.$store.commit('Changeoffice_no', data.office_no)
              this.$store.commit('Changeaddress', data.address)
              this.$store.commit('Changeoccupation', data.occupation)
              this.$store.commit('Changesignature', data.signature)

              this.$store.commit('Changedetails_account_owner', data.details_account_owner)
              this.$store.commit('Changedetails_bank_name', data.details_bank_name)
              this.$store.commit('Changedetails_account_no', data.details_account_no)
              this.$router.push({ path: "/KYC?from=create&orderId=" + res.id, query: { campanyIndividualName: data } });
            } else {
              console.log(res.id, "iiiiiiiiiiiiiiiiiiiiii")
              sessionStorage.setItem('abcd', data.name)
              this.$store.commit('changeCustomerApplicationId', res.id)
              this.$store.commit('ChangecampanyIndividualName', data.name)
              this.$store.commit('Changepassport_no', data.passport_no)
              this.$store.commit('Changeemail', data.email)
              this.$store.commit('Changephone', data.phone)
              this.$store.commit('Changehouse_no', data.house_no)
              this.$store.commit('Changeoffice_no', data.office_no)
              this.$store.commit('Changeaddress', data.address)
              this.$store.commit('Changeoccupation', data.occupation)
              this.$store.commit('Changesignature', data.signature)
              this.$store.commit('Changedetails_account_owner', data.details_account_owner)
              this.$store.commit('Changedetails_bank_name', data.details_bank_name)
              this.$store.commit('Changedetails_account_no', data.details_account_no)

              //     this.$root.$emit('KYC') 
              //  @click="$emit('onSelect')"
              this.$emit('onSelect1')
              //   this.$store.commit('campanyIndividualName',data)

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
      this.formData.signature = ''
      this.$refs["esign"].reset(); //清空画布
      // this.$refs.esign.reset()
      this.sig1 = true
      this.xyz = ""
      document.getElementById("reset1").focus()
      // document.getElementById('img1').style.display = 'none'
      //       document.getElementById('can1').style.display = 'block'

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
              this.formData.signature = res.path;
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

<style lang="scss" scoped>
.CustomerApplication {
  /* padding: 0 16px; */
  text-align: left;
}

.minTitle {
  font-weight: bold;
  line-height: 24px;
}

/deep/ .van-field__label {
  width: 13.2rem;
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

/*手机*/
@media screen and (max-width: 768px) {
  /deep/ .van-field__label {
    width: 30rem;
  }

}



/* @media screen and (max-width: 576px) {
      .esignImgbox {
    width: 200px !important;
    height: auto !important;

}
    } */

/* width="800px" height="300px" */

element.style {
  border: 1px solid rgb(102, 102, 102);
  display: block;
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
