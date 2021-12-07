<template>
  <div class="CustomerApplication bodybox">
    <van-form validate-first @submit="submit" :submit-on-enter="false" :scroll-to-error="true">
      <div class="minTitle">GENERAL INFORMATION</div>
      <!-- 文本框 -->
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="INDIVIDUAL NAME"
        placeholder="Please enter the INDIVIDUAL NAME"
        :rules="[
          { required: true, message: 'Please enter the INDIVIDUAL NAME' },
        ]"
      />
      <van-field
        v-model="formData.passport_no"
        name="passport_no"
        center
        :required="true"
        type="text"
        label="NRIC / PASSPORT NO"
        placeholder="Please enter the NRIC / PASSPORT NO"
        :rules="[
          { required: true, message: 'Please enter the NRIC / PASSPORT NO' },
        ]"
      />
      <van-field
        readonly
        v-model="formData.born_date"
        name="born_date"
        center
        :required="true"
        right-icon="arrow"
        label="DATE OF BIRTH"
        placeholder="Please enter the DATE OF BIRTH"
        @click="onShowPicker('born_date')"
      />
      <van-field
        v-model="formData.occupation"
        name="occupation"
        center
        :required="true"
        type="text"
        label="OCCUPATION"
        placeholder="Please enter the OCCUPATION"
        :rules="[{ required: true, message: 'Please enter the OCCUPATION' }]"
      />
      <van-field
        v-model="formData.address"
        name="address"
        center
        :required="true"
        type="text"
        label="RESIDENTIAL ADDRESS"
        placeholder="Please enter the RESIDENTIAL ADDRESS"
        :rules="[
          { required: true, message: 'Please enter the RESIDENTIAL ADDRESS' },
        ]"
      />
      <div class="minTitle">CONTACT DETAILS</div>
      <van-field
        v-model="formData.phone"
        name="phone"
        center
        :required="true"
        type="text"
        label="MOBILE NO"
        placeholder="Please enter the MOBILE NO"
        :rules="[{ required: true, message: 'Please enter the MOBILE NO' }]"
      />
      <van-field
        v-model="formData.office_no"
        name="office_no"
        center
        :required="true"
        type="text"
        label="OFFICE NO"
        placeholder="Please enter the OFFICE NO"
        :rules="[{ required: true, message: 'Please enter the OFFICE NO' }]"
      />
      <van-field
        v-model="formData.house_no"
        name="house_no"
        center
        :required="true"
        type="text"
        label="HOUSE NO"
        placeholder="Please enter the HOUSE NO"
        :rules="[{ required: true, message: 'Please enter the HOUSE NO' }]"
      />
      <van-field
        v-model="formData.email"
        name="email"
        center
        :required="true"
        type="text"
        label="EMAIL ADDRESS"
        placeholder="Please enter the EMAIL ADDRESS"
        :rules="[{ required: true, message: 'Please enter the EMAIL ADDRESS' }]"
      />

      <span style="font-weight: bold"
        >BENEFICIARY(IES) IN THE EVENT OF SETTLOR’S DEATH (Applicable for
        Individual Trustor Only)</span
      >
      <van-button class="esignBtn" native-type="button" @click="addBeneficiary">Add</van-button>
      <div class="beneficiary_info" v-for="(item,inx) in formData.beneficiary_info" :key="inx">
        <van-field
          v-model="item.BENEFICIARY_NAME"
          name="BENEFICIARY_NAME"
          center
          type="text"
          label="BENEFICIARY NAME / TRUSTEE"
          placeholder="Please enter the BENEFICIARY NAME / TRUSTEE"
        />
        <van-field
          v-model="item.COMPANY_NO"
          name="COMPANY_NO"
          center
          type="text"
          label="NRIC / PASSPORT NO COMPANY NO."
          placeholder="Please enter the NRIC / PASSPORT NO COMPANY NO."
        />
        <van-field
          v-model="item.RELATIONSHIP"
          name="RELATIONSHIP"
          center
          type="text"
          label="RELATIONSHIP"
          placeholder="Please enter the RELATIONSHIP"
        />
        <van-field
          v-model="item.CONTACT_NO"
          name="CONTACT_NO"
          center
          type="text"
          label="CONTACT NO"
          placeholder="Please enter the CONTACT NO"
        />
        <van-field
          v-model="item.PERCENTAGE"
          name="PERCENTAGE"
          center
          type="text"
          label="PERCENTAGE OF DISTRIBUTION"
          placeholder="Please enter the PERCENTAGE OF DISTRIBUTION"
        />
        <van-button
          class="esignDelBtn"
          v-if="inx > 0"
          slot="button"
          native-type="button"
          @click="delBeneficiary(inx)"
          >delete</van-button
        >
      </div>

      <div class="minTitle">TRUST INFORMATION</div>
      <van-field
        v-model="formData.price"
        name="price"
        center
        :required="true"
        type="text"
        label="TRUST CAPITAL AMOUNT (MYR)"
        placeholder="Please enter the TRUST CAPITAL AMOUNT (MYR)"
        :rules="[
          {
            required: true,
            message: 'Please enter the TRUST CAPITAL AMOUNT (MYR)',
          },
        ]"
      />
      <van-field
        v-model="formData.adviser_name"
        name="adviser_name"
        center
        :required="true"
        type="text"
        label="AUTHORIZED TRUST ADVISOR NAME"
        placeholder="Please enter the AUTHORIZED TRUST ADVISOR NAME"
        :rules="[
          {
            required: true,
            message: 'Please enter the AUTHORIZED TRUST ADVISOR NAME',
          },
        ]"
      />
      <van-field
        v-model="formData.user_id"
        name="user_id"
        center
        :required="true"
        type="text"
        label="TRUST ADVISOR’S ID"
        placeholder="Please enter the TRUST ADVISOR’S ID"
        :rules="[
          { required: true, message: 'Please enter the TRUST ADVISOR’S ID' },
        ]"
      />
      <div class="minTitle">TRUST CAPITAL PAYMENT</div>
      <div class="minTitle">
        Payment amounts are to be remitted in MYR only. Details of the account
        to which payments are to be transferred (the transfer description should
        include the name and reference of the transferring or person, the name
        of the Settlor and the reference "AI GENERATION Trust".):
      </div>
      <van-field
        v-model="formData.account_name"
        name="account_name"
        center
        :required="true"
        type="text"
        label="Account Name"
        placeholder="Please enter the Account Name"
        :rules="[{ required: true, message: 'Please enter the Account Name' }]"
      />
      <van-field
        v-model="formData.bank"
        name="bank"
        center
        :required="true"
        type="text"
        label="Bank"
        placeholder="Please enter the Bank"
        :rules="[{ required: true, message: 'Please enter the Bank' }]"
      />
      <van-field
        v-model="formData.account_no"
        name="account_no"
        center
        :required="true"
        type="text"
        label="Account No"
        placeholder="Please enter the Account No"
        :rules="[{ required: true, message: 'Please enter the Account No' }]"
      />
      <van-field
        v-model="formData.swift_code"
        name="swift_code"
        center
        :required="true"
        type="text"
        label="Swift Code"
        placeholder="Please enter the Swift Code"
        :rules="[{ required: true, message: 'Please enter the Swift Code' }]"
      />
      <van-field
        v-model="formData.ref"
        name="ref"
        center
        :required="true"
        type="text"
        label="Ref"
        placeholder="Please enter the Ref"
        :rules="[{ required: true, message: 'Please enter the Ref' }]"
      />
      <div class="minTitle">
        DETAILS OF THE BANK THAT WILL EFFECT THE TRANSFER (To insert ‘Not
        Applicable’ if Cheque is received)
      </div>
      <van-field
        v-model="formData.details_bank_name"
        name="details_bank_name"
        center
        :required="false"
        type="text"
        label="NAME OF BANK"
        placeholder="Please enter the NAME OF BANK"
        :rules="[{ required: false, message: 'Please enter the NAME OF BANK' }]"
      />
      <van-field
        v-model="formData.details_account_no"
        name="details_account_no"
        center
        :required="false"
        type="text"
        label="ACCOUNT NO"
        placeholder="Please enter the ACCOUNT NO"
        :rules="[{ required: false, message: 'Please enter the ACCOUNT NO' }]"
      />
      <van-field
        v-model="formData.details_account_owner"
        name="details_account_owner"
        center
        :required="false"
        type="text"
        label="ACCOUNT OWNER"
        placeholder="Please enter the ACCOUNT OWNER"
        :rules="[
          { required: false, message: 'Please enter the ACCOUNT OWNER' },
        ]"
      />
      <div class="minTitle">
        PAYMENTS TO SETTLOR/ AUTHORIZED PERSON Details of the bank account to
        which payments to the Trustor /Authorized person are to be transferred:
      </div>
      <van-field
        v-model="formData.dividend_bank_name"
        name="dividend_bank_name"
        center
        :required="true"
        type="text"
        label="NAME OF BANK"
        placeholder="Please enter the NAME OF BANK"
        :rules="[{ required: true, message: 'Please enter the NAME OF BANK' }]"
      />
      <van-field
        v-model="formData.dividend_account_no"
        name="dividend_account_no"
        center
        :required="true"
        type="text"
        label="ACCOUNT NO"
        placeholder="Please enter the ACCOUNT NO"
        :rules="[{ required: true, message: 'Please enter the ACCOUNT NO' }]"
      />
      <van-field
        v-model="formData.dividend_bank_location"
        name="dividend_bank_location"
        center
        :required="true"
        type="text"
        label="BANK LOCATION"
        placeholder="Please enter the BANK LOCATION"
        :rules="[{ required: true, message: 'Please enter the BANK LOCATION' }]"
      />
      <van-field
        v-model="formData.dividend_account_owner"
        name="dividend_account_owner"
        center
        :required="true"
        type="text"
        label="ACCOUNT OWNER"
        placeholder="Please enter the ACCOUNT OWNER"
        :rules="[{ required: true, message: 'Please enter the ACCOUNT OWNER' }]"
      />
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
        Conditions of AI GENERATION Trust and note that these may beupdated from
        time to time.
      </div>
      <div class="minTitle">WITNESS DETAIL</div>
      <van-field
        v-model="formData.witness_name"
        name="witness_name"
        center
        :required="true"
        type="text"
        label="NAME"
        placeholder="Please enter the NAME"
        :rules="[{ required: true, message: 'Please enter the NAME' }]"
      />
      <van-field
        v-model="formData.witness_passport_no"
        name="witness_passport_no"
        center
        :required="true"
        type="text"
        label="NRIC / PASSPORT NO."
        placeholder="Please enter the NRIC / PASSPORT NO."
        :rules="[
          { required: true, message: 'Please enter the NRIC / PASSPORT NO.' },
        ]"
      />
      <div class="tl">TRUSTOR SIGNATUR</div>
      <vue-esign
        ref="esign"
        :width="1200"
        :height="300"
        :isCrop="false"
        :lineWidth="6"
        lineColor="#000000"
        bgColor.sync="#fff"
        style="border: 1px solid #666"
      />
      <div class="tr">
        <div class="esignBtn" @click="handleReset()">clear</div>
        <div class="esignBtn" @click="handleGenerate()">confirm</div>
      </div>
      <van-field
        v-model="formData.client_name"
        name="client_name"
        center
        :required="true"
        type="text"
        label="NAME"
        placeholder="Please enter the NAME"
        :rules="[{ required: true, message: 'Please enter the NAME' }]"
      />
      <van-field
        readonly
        v-model="formData.signature_date"
        name="signature_date"
        center
        :required="true"
        right-icon="arrow"
        label="DATE"
        placeholder="Please enter the DATE"
        @click="onShowPicker('signature_date')"
      />

      <!-- 提交 -->
      <van-button round block type="info" native-type="submit">
        提交
      </van-button>
    </van-form>
    <!-- 日期彈框 -->
    <van-popup v-model="isShowPicker" position="bottom">
      <van-datetime-picker
        v-model="currentContent"
        type="date"
        :min-hour="0"
        @cancel="onHiddenPicker"
        @confirm="onConfirmPicker"
      />
    </van-popup>
  </div>
</template>

<script>
import { uploadAutograph } from '@/api/util'
import { createOrders } from '@/api/order'
export default {
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
            BENEFICIARY_NAME: '',
            COMPANY_NO: '',
            RELATIONSHIP: '',
            CONTACT_NO: '',
            PERCENTAGE: '',
          }
        ],
        price: "",
        adviser_name: "",
        user_id: "",
        account_name: "",
        bank: "",
        account_no: "",
        swift_code: "",
        ref: "",
        details_bank_name: "",
        details_account_no: "",
        details_account_owner: "",
        dividend_bank_name: "",
        dividend_account_no: "",
        dividend_bank_location: "",
        dividend_account_owner: "",
        witness_name: "",
        witness_passport_no: "",
        signature: "",
        client_name: "",
        signature_date: "",
      },
      isShowPicker: false, // 控制日期彈框
      currentContent: new Date(), // 日期彈框顯示當前日期
      whichDate: '', // 區分是哪個日期觸發彈框
    };
  },
  methods: {
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
    onShowPicker(val) {
      this.isShowPicker = true;
      this.whichDate = val
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
    // 提交表單
    submit(form) {
      console.log(form);
      console.log(this.formData);
      if (!this.formData.signature) {
        this.$toast.fail('Please sign your name')
        return
      } else if (!this.formData.born_date) {
        this.$toast.fail('Please enter the born_date')
        return
      } else if(!this.formData.signature_date) {
        this.$toast.fail('Please enter the signature_date')
        return
      }
      let data = JSON.parse(JSON.stringify(this.formData))
      data.beneficiary_info = JSON.stringify(this.formData.beneficiary_info)
      createOrders(data).then(res => {
        console.log(res,'訂單創建成功');
        this.$toast.success('Creating a successful')
        this.$router.go(-1)
      }).catch(err => {
        console.log(err.response);
      })
    },
    // 清空画布
    handleReset(index) {
      this.$refs["esign"].reset(); //清空画布
    },
    handleGenerate(index) {
      var that = this;
      this.$refs["esign"].generate().then((res) => {
        console.log(res); // 得到了签字生成的base64图片
        uploadAutograph({
          image: res,
          path: "",
        }).then((res) => {
            console.log(res);
            this.formData.signature = res.path;
          })
          .catch((err) => {
            that.$toast({
              type: "fail",
              message: "Uploading picture failed",
            });
          });
      }).catch((err) => {
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
      this.formData.beneficiary_info.push({
        BENEFICIARY_NAME: '',
        COMPANY_NO: '',
        RELATIONSHIP: '',
        CONTACT_NO: '',
        PERCENTAGE: '',
      })
    },
    delBeneficiary(inx) {
      this.formData.beneficiary_info.splice(inx,1)
    }
  },
};
</script>

<style scoped >
.CustomerApplication {
  padding: 0 16px;
  text-align: left;
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
  background-color: #2f75f4;
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
    width: 6.5rem;
  }
}
</style>