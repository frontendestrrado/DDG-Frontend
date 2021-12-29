<template>
  <div class="ThirdPartyDeclaration bodybox">
    <van-form
      validate-first
      @submit="submit"
      :submit-on-enter="false"
      :scroll-to-error="true"
    >
      <div class="minTitle">
        ASIA INTERNATIONAL TRUST BERHAD (Company No.: 199501032473 (361679-H))
      </div>
      <div class="minTitle">THIRD-PARTY FUNDS DECLARATION FORM</div>
      <div class="minTitle">
        To be completed by the Settlor if the Trust Capital Funds for this application is to be funded by
        anyone other than the Settlor
      </div>
      <div class="minTitle">Name of Settlor:</div>
      <div class="minTitle">Third-Party Details (Individual)</div>
      <van-field
        v-model="formData.trustor_name"
        name="trustor_name"
        center
        :required="true"
        type="text"
        label="Name of the Contributor(Individual)"
        placeholder="Please enter the Name of the Contributor(Individual)"
        :rules="[
          {
            required: true,
          },
        ]"
      />
      <van-field
        readonly
        v-model="formData.trustor_date"
        name="trustor_date"
        center
        :required="true"
        right-icon="arrow"
        label="Date of Birth"
        placeholder="Please enter the Date of Birth"
        @click="onShowPicker('trustor_date')"
        :rules="[
          {
            required: true,
          },
        ]"
      />
      <van-field
        v-model="formData.nationality"
        name="nationality"
        center
        :required="true"
        type="text"
        label="Nationality "
        placeholder="Please enter the Nationality "
        :rules="[
          {
            required: true,
          },
        ]"
      />
      <van-field
        v-model="formData.trustor_passport"
        name="trustor_passport"
        center
        :required="true"
        type="text"
        label="NRIC/Passport No"
        placeholder="Please enter the NRIC/Passport No"
        :rules="[
          {
            required: true,
          },
        ]"
      />
      <van-field
        v-model="formData.trustor_address"
        name="trustor_address"
        center
        :required="true"
        type="text"
        label="Proof of current Address of the Individual"
        placeholder="Please enter the Proof of current Address of the Individual"
        :rules="[
          {
            required: true,
          },
        ]"
      />
      <van-field
        v-model="formData.trustor_phone"
        name="trustor_phone"
        center
        :required="true"
        type="text"
        label="Contact No"
        placeholder="Please enter the Contact No"
        :rules="[{ required: true }]"
      />
      <!-- <van-field
        v-model="formData.trustor_reference_no"
        name="trustor_reference_no"
        center
        :required="true"
        type="text"
        label="Reference No"
        placeholder="Please enter the Reference No"
        :rules="[{ required: true, message: 'Please enter the Reference No' }]"
      /> -->
      <van-field
        v-model="formData.occupation"
        name="occupation"
        center
        :required="true"
        type="text"
        label="Occupation"
        placeholder="Please enter the Occupation"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.industry"
        name="industry"
        center
        :required="true"
        type="text"
        label="Industry"
        placeholder="Please enter the Industry"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.name_of_employer"
        name="name_of_employer"
        center
        :required="true"
        type="text"
        label="Name of Employer"
        placeholder="Please enter the Name of Employer"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.nature_of_business"
        name="nature_of_business"
        center
        type="text"
        label="Nature of Business(if Self-Employed)"
        placeholder="Please enter the Nature of Business(if Self-Employed)"
      />
      <van-field
        v-model="formData.relationship_with_settlor"
        name="relationship_with_settlor"
        center
        :required="true"
        type="text"
        label="Relationship with Settlor"
        placeholder="Please enter the Relationship with Settlor"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.annual_salary_income"
        name="annual_salary_income"
        center
        :required="true"
        type="text"
        label="Annual Salary/ Income"
        placeholder="Please enter the Annual Salary/ Income"
        :rules="[{ required: true }]"
      />
      <div class="minTitle">If Payslip (Item 12) is not available, then please provide:EPF statement/ Unit trust statement/ S&P agreement/ etc </div>
      <van-field
        v-model="formData.source_of_wealth"
        name="source_of_wealth"
        center
        :required="true"
        type="text"
        label="Source of Wealth"
        placeholder="Please enter the Source of Wealth"
        :rules="[{ required: true }]"
      />
      <div class="minTitle">Please provide: Bank statement with Name of Bank, Name of Account Holder, Account Number.</div>
      <van-field
        v-model="formData.source_of_fund"
        name="source_of_fund"
        center
        :required="true"
        type="text"
        label="Source of Fund(Origin of fund)"
        placeholder="Please enter the Source of Fund(Origin of fund)"
        :rules="[{ required: true }]"
      />
      <div class="minTitle">Third-Party Details (Legal Entity)</div>
      <van-field
        v-model="formData.third_party_name"
        name="third_party_name"
        center
        :required="true"
        type="text"
        label="Name of Contributor(Company/Organisation)"
        placeholder="Please enter the Name of Contributor(Company/Organisation)"
        :rules="[
          {
            required: true,
          },
        ]"
      />
      <van-field
        readonly
        v-model="formData.third_party_date"
        name="third_party_date"
        center
        :required="true"
        right-icon="arrow"
        label="Date of Registration"
        placeholder="Please enter the Date of Registration"
        @click="onShowPicker('third_party_date')"
        :rules="[
          {
            required: true,
          },
        ]"
      />
      <van-field
        v-model="formData.third_party_passport"
        name="third_party_passport"
        center
        :required="true"
        type="text"
        label="Company/ Organisation Registration No."
        placeholder="Please enter the Company/ Organisation Registration No."
        :rules="[
          {
            required: true,
          },
        ]"
      />
      <van-field
        v-model="formData.third_party_phone"
        name="third_party_phone"
        center
        :required="true"
        type="text"
        label="Company Contact No"
        placeholder="Please enter the Company Contact No"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.third_party_address"
        name="third_party_address"
        center
        :required="true"
        type="text"
        label="Proof of current Address of the Company/ Organisation"
        placeholder="Please enter the Proof of current Address of the Company/ Organisation"
        :rules="[
          {
            required: true,
          },
        ]"
      />
      <van-field
        v-model="formData.name_of_director"
        name="name_of_director"
        center
        :required="true"
        type="text"
        label="Name of Director(s)"
        placeholder="Please enter the Name of Director(s)"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.name_of_shareholder"
        name="name_of_shareholder"
        center
        :required="true"
        type="text"
        label="Name of Shareholder(s)"
        placeholder="Please enter the Name of Shareholder(s)"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.nature_of_business2"
        name="nature_of_business2"
        center
        :required="true"
        type="text"
        label="Nature of Business"
        placeholder="Please enter the Nature of Business"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.profit_loss_statement"
        name="profit_loss_statement"
        center
        :required="true"
        type="text"
        label="Profit & Loss Statement"
        placeholder="Please enter the Profit & Loss Statement"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.source_of_fund2"
        name="source_of_fund2"
        center
        :required="true"
        type="text"
        label="Source of Fund"
        placeholder="Please enter the Source of Fund"
        :rules="[{ required: true }]"
      />
      
      <van-field
        v-model="formData.third_party_reference_no"
        name="third_party_reference_no"
        center
        :required="true"
        type="text"
        label="Relationship with Settlor"
        placeholder="Please enter the Relationship with Settlor"
        :rules="[{ required: true }]"
      />
      <div class="minTitle">Contributor’s Contact Person </div>
      <van-field
        v-model="formData.contributor_name"
        name="contributor_name"
        center
        :required="true"
        type="text"
        label="Name"
        placeholder="Please enter the Name"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.contributor_contact"
        name="contributor_contact"
        center
        :required="true"
        type="text"
        label="Contact No"
        placeholder="Please enter the Contact No"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.contributor_email"
        name="contributor_email"
        center
        :required="true"
        type="text"
        label="Email"
        placeholder="Please enter the Email"
        :rules="[{ required: true }]"
      />
      <div class="minTitle">Note: [1] Bank statement with Name of Bank, Name of Account Holder, Account Number</div>
      <van-field
        name="declaration_third_party"
        label="Declaration of Third-Party Funds (Please tick √)"
        :required="true"
        :rules="[
          {
            required: true,
          },
        ]"
      >
        <template #input>
          <van-radio-group
            v-model="formData.declaration_third_party"
            direction="horizontal"
          >
            <van-radio :name="1"
              >Natural love and affection or as gift to me (Settlor)</van-radio
            >
            <van-radio :name="2">Money owed to me (Settlor)</van-radio>
            <van-radio :name="3">Other, please specify</van-radio>
            <van-radio :name="4"
              >Relationship between the Settlor and Third-Party</van-radio
            >
            <van-radio :name="5">All photocopied documents must be verified (i.e. signed, dated, name stated) by the Marketing/ Distributing agent</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        v-model="formData.others_please_specify"
        name="others_please_specify"
        center
        type="text"
        label="Others, please specify"
        placeholder="Please enter the Others, please specify"
      />
      <van-field
        v-model="formData.relationship_between"
        name="relationship_between"
        center
        type="text"
        label="Relationship between the Settlor and Third-Party"
        placeholder="Please enter the Relationship between the Settlor and Third-Party"
      />
      <div class="tl">Signature of Settlor</div>
      <vue-esign
        ref="client_signature"
        v-show="!formData.client_signature"
        :width="1200"
        :height="300"
        :isCrop="false"
        :lineWidth="6"
        lineColor="#000000"
        bgColor.sync="#fff"
        style="border: 1px solid #666"
      />
      <van-image
        v-show="formData.client_signature"
        width="100%"
        height="20%"
        class="esignImgbox"
        :src="formData.client_signature"
      />
      <div class="tr">
        <div class="esignBtn" @click="handleReset('client_signature')">
          Clear
        </div>
        <div class="esignBtn" @click="handleGenerate('client_signature')">
          Confirm
        </div>
      </div>
      <van-field
        v-model="formData.client_name"
        name="client_name"
        center
        :required="true"
        type="text"
        label="Name"
        placeholder="Please enter the Name"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.client_passport"
        name="client_passport"
        center
        :required="true"
        type="text"
        label="NRIC No"
        placeholder="Please enter the NRIC No"
        :rules="[{ required: true }]"
      />
      <van-field
        readonly
        v-model="formData.client_date"
        name="client_date"
        center
        :required="true"
        right-icon="arrow"
        label="Date"
        placeholder="Please enter the Date"
        @click="onShowPicker('client_date')"
        :rules="[{ required: true }]"
      />
      <div class="tl">Signature of Trust Advisor as Witness</div>
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
        class="esignImgbox"
        width="100%"
        height="20%"
        :src="formData.witness_signature"
      />
      <div class="tr">
        <div class="esignBtn" @click="handleReset('witness_signature')">
          Clear
        </div>
        <div class="esignBtn" @click="handleGenerate('witness_signature')">
          Confirm
        </div>
      </div>
      <van-field
        v-model="formData.witness_name"
        name="witness_name"
        center
        :required="true"
        type="text"
        label="Name"
        placeholder="Please enter the Name"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.witness_passport"
        name="witness_passport"
        center
        :required="true"
        type="text"
        label="NRIC No"
        placeholder="Please enter the NRIC No"
        :rules="[{ required: true }]"
      />
      <van-field
        readonly
        v-model="formData.witness_date"
        name="witness_date"
        center
        :required="true"
        right-icon="arrow"
        label="Date"
        placeholder="Please enter the Date"
        @click="onShowPicker('witness_date')"
        :rules="[{ required: true }]"
      />
      <van-button round block type="info" native-type="submit" color="#7C655D">
        Submit
      </van-button>
    </van-form>
    <!-- 日期彈框 -->
    <van-popup v-model="isShowPicker" position="bottom">
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
    </van-popup>
  </div>
</template>

<script>
import { uploadAutograph } from "@/api/util";
import {
  third_party_declaration_form,
  getOrdersForms,
  putOrdersForms,
} from "@/api/order";
export default {
  data() {
    return {
      formData: {
        trustor_name: "",
        trustor_date: "",
        trustor_passport: "",
        trustor_address: "",
        trustor_phone: "",
        // trustor_reference_no: "",
        third_party_name: "",
        third_party_date: "",
        third_party_passport: "",
        third_party_address: "",
        third_party_phone: "",
        third_party_reference_no: "",
        declaration_third_party: 0,
        client_signature: "",
        client_name: "",
        client_passport: "",
        client_date: "",
        witness_signature: "",
        witness_name: "",
        witness_passport: "",
        witness_date: "",
        nationality: '',
        occupation: '',
        industry: '',
        name_of_employer: '',
        nature_of_business: '',
        relationship_with_settlor: '',
        annual_salary_income: '',
        source_of_wealth: '',
        source_of_fund: '',
        name_of_director: '',
        name_of_shareholder: '',
        nature_of_business2: '',
        profit_loss_statement: '',
        source_of_fund2: '',
        contributor_name: '',
        contributor_contact: '',
        contributor_email: '',
        others_please_specify: '',
        relationship_between: '',
      },
      isShowPicker: false, // 控制日期彈框
      currentContent: new Date(), // 日期彈框顯示當前日期
      whichDate: "", // 區分是哪個日期觸發彈框
      isFilled: "", // 表單id
      minDate: new Date(1900, 0, 1),
    };
  },
  mounted() {
    this.isFilled = this.$route.query.isFilled;
    this.getFormData();
  },
  methods: {
    // 如果已填 獲取數據
    getFormData() {
      if (this.isFilled > 0) {
        getOrdersForms(this.isFilled, { type: "Third Party Declaration" })
          .then((res) => {
            console.log(res);
            this.formData = res;
          })
          .catch((err) => {});
      }
    },
    submit(form) {
      console.log(form);
      if (!this.formData.client_signature) {
        this.$toast.fail("Please sign your name");
        return;
      } else if (!this.formData.witness_signature) {
        this.$toast.fail("Please sign your name");
        return;
      }
      let data = JSON.parse(JSON.stringify(this.formData));
      if (this.isFilled > 0) {
        // 修改
        putOrdersForms(this.isFilled, {
          type: "Third Party Declaration",
          data: JSON.stringify(data),
        }).then((res) => {
          console.log(res, "修改Third Party Declaration成功");
          this.$toast({
            type: "success",
            message: "Modify the success",
          });
          this.$router.go(-1);
        });
      } else {
        third_party_declaration_form(this.$route.query.orderId, data)
          .then((res) => {
            this.$toast({
              type: "success",
              message: "Submitted successfully",
            });
            this.$router.go(-1);
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
    // 清空画布
    handleReset(val) {
      this.$refs[val].reset(); //清空画布
      if (val == 'client_signature') {
        this.formData.client_signature = ''
      }
      if (val == 'witness_signature') {
        this.formData.witness_signature = ''
      }
    },
    handleGenerate(val) {
      var that = this;
      this.$refs[val]
        .generate()
        .then((res) => {
          uploadAutograph({
            image: res,
            path: "",
          })
            .then((res) => {
              console.log(res);
              this.formData[val] = res.path;
              this.$toast.success("Signature success");
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
  },
};
</script>

<style scoped>
.ThirdPartyDeclaration {
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
    width: 6.5rem;
  }
}
</style>