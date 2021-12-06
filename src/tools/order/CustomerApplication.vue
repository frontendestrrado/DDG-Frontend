<template>
  <div class="CustomerApplication bodybox">
    <van-form validate-first @submit="submit" :submit-on-enter="false">
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
        @click="onShowPicker()"
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

      <span style="font-weight: bold">BENEFICIARY(IES) IN THE EVENT OF SETTLOR’S DEATH (Applicable for Individual Trustor Only)</span>
      <van-button class="esignBtn" native-type="button"
        >Add</van-button
      >

      <div class="minTitle">TRUST INFORMATION</div>
      <van-field
        v-model="formData.price"
        name="price"
        center
        :required="true"
        type="text"
        label="TRUST CAPITAL AMOUNT (MYR)"
        placeholder="Please enter the TRUST CAPITAL AMOUNT (MYR)"
        :rules="[{ required: true, message: 'Please enter the TRUST CAPITAL AMOUNT (MYR)' }]"
      />
      <van-field
        v-model="formData.adviser_name"
        name="adviser_name"
        center
        :required="true"
        type="text"
        label="AUTHORIZED TRUST ADVISOR NAME"
        placeholder="Please enter the AUTHORIZED TRUST ADVISOR NAME"
        :rules="[{ required: true, message: 'Please enter the AUTHORIZED TRUST ADVISOR NAME' }]"
      />
      <van-field
        v-model="formData.user_id"
        name="user_id"
        center
        :required="true"
        type="text"
        label="TRUST ADVISOR’S ID"
        placeholder="Please enter the TRUST ADVISOR’S ID"
        :rules="[{ required: true, message: 'Please enter the TRUST ADVISOR’S ID' }]"
      />
      <div class="minTitle">TRUST CAPITAL PAYMENT</div>
      <div class="minTitle">Payment amounts are to be remitted in MYR only. Details of the account to which payments are to be transferred (the transfer description should include the name and reference of the transferring or person, the name of the Settlor and the reference "AI GENERATION Trust".):</div>
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
        v-model="formData.Bank"
        name="Bank"
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
        // beneficiary_info: "",
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
    // 展示日期弹框
    onShowPicker(index, type) {
      this.isShowPicker = true;
    },
    onHiddenPicker() {
      this.currentContent = "";
      this.isShowPicker = false;
    },
    onConfirmPicker() {
      this.formData.born_date = this.formatDateYMD(this.currentContent);
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
    },
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
/*手机*/
@media screen and (max-width: 768px) {
  /deep/ .van-field__label {
    width: 6.5rem;
  }
}
</style>