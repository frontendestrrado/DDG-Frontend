<template>
  <div class="KYC bodybox">
    <van-form
      validate-first
      @submit="submit"
      :submit-on-enter="false"
      :scroll-to-error="true"
    >
      <div class="minTitle">KNOW YOUR CLIENT’S FORM (KYC)</div>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="TRUSTOR NAME"
        placeholder="Please enter the TRUSTOR NAME"
        :rules="[{ required: true, message: 'Please enter the TRUSTOR NAME' }]"
      />
      <van-field
        v-model="formData.nric_no"
        name="nric_no"
        center
        :required="true"
        type="text"
        label="NRIC NO"
        placeholder="Please enter the NRIC NO"
        :rules="[{ required: true, message: 'Please enter the NRIC NO' }]"
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
      <van-field
        name="source_of_funds"
        label="SOURCE OF FUNDS"
        :required="true"
      >
        <template #input>
          <van-radio-group
            v-model="formData.source_of_funds"
            direction="horizontal"
          >
            <van-radio :name="0">EMPLOYMENT / SELF-EMPLOYMENT</van-radio>
            <van-radio :name="1"
              >RETIRED – KINDLY FILL IN PREVIOUS EMPLOYMENT</van-radio
            >
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        v-model="formData.company"
        name="company"
        center
        :required="true"
        type="text"
        label="NAME OF EMPLOYER / COMPANY"
        placeholder="Please enter the NAME OF EMPLOYER / COMPANY"
        :rules="[
          {
            required: true,
            message: 'Please enter the NAME OF EMPLOYER / COMPANY',
          },
        ]"
      />
      <van-field
        v-model="formData.occupation"
        name="occupation"
        center
        :required="true"
        type="text"
        label="OCCUPATION / POSITION TITLE"
        placeholder="Please enter the OCCUPATION / POSITION TITLE"
        :rules="[
          {
            required: true,
            message: 'Please enter the OCCUPATION / POSITION TITLE',
          },
        ]"
      />
      <van-field
        v-model="formData.business_running"
        name="business_running"
        center
        :required="true"
        type="text"
        label="PERIOD OF EMPLOYMENT/ BUSINESS RUNNING"
        placeholder="Please enter the PERIOD OF EMPLOYMENT/ BUSINESS RUNNING"
        :rules="[
          {
            required: true,
            message: 'Please enter the PERIOD OF EMPLOYMENT/ BUSINESS RUNNING',
          },
        ]"
      />
      <van-field
        v-model="formData.year_income"
        name="year_income"
        center
        :required="true"
        type="text"
        label="ANNUAL INCOME (MYR)"
        placeholder="Please enter the ANNUAL INCOME (MYR)"
        :rules="[
          { required: true, message: 'Please enter the ANNUAL INCOME (MYR)' },
        ]"
      />
      <van-field
        name="other_income"
        label="OTHER SOURCE OF INCOME"
        :required="true"
      >
        <template #input>
          <van-radio-group
            v-model="formData.other_income"
            direction="horizontal"
          >
            <van-radio :name="0">YES</van-radio>
            <van-radio :name="1">NO</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        name="other_income_details"
        label="IF YES, KINDLY PROVIDE DETAILS"
        :required="true"
      >
        <template #input>
          <van-radio-group
            v-model="formData.other_income_details"
            direction="horizontal"
          >
            <van-radio :name="0">INHERITANCE</van-radio>
            <van-radio :name="1">GIFT</van-radio>
            <van-radio :name="2">OTHERS </van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <div class="minTitle">DUE DILIGENCE INFORMATION</div>
      <van-field
        v-model="formData.why_set_trust"
        name="why_set_trust"
        center
        :required="true"
        type="text"
        label="WHAT IS YOUR INTENDED PURPOSE OF SETTING UP THE TRUST ACCOUNT WITH US?"
        placeholder="Please enter the WHAT IS YOUR INTENDED PURPOSE OF SETTING UP THE TRUST ACCOUNT WITH US?"
        :rules="[
          {
            required: true,
            message:
              'Please enter the WHAT IS YOUR INTENDED PURPOSE OF SETTING UP THE TRUST ACCOUNT WITH US?',
          },
        ]"
      />
      <van-field
        name="have_trust"
        label="ARE YOU HOLDING OTHER TRUST ACCOUNT?"
        :required="true"
      >
        <template #input>
          <van-radio-group v-model="formData.have_trust" direction="horizontal">
            <van-radio :name="0">YES</van-radio>
            <van-radio :name="1">NO</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        name="have_pep"
        label="ARE YOU, YOUR PARTNER OR IMMEDIATE FAMILY MEMBER IS IN THE POLITICALLY EXPOSED PERSON (PEP) LIST?"
        :required="true"
      >
        <template #input>
          <van-radio-group v-model="formData.have_pep" direction="horizontal">
            <van-radio :name="0">YES</van-radio>
            <van-radio :name="1">NO</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        name="income_legitimate"
        label="ARE YOU SURE YOUR SOURCE OF INCOME IS LEGITIMATE?"
        :required="true"
      >
        <template #input>
          <van-radio-group
            v-model="formData.income_legitimate"
            direction="horizontal"
          >
            <van-radio :name="0">YES</van-radio>
            <van-radio :name="1">NO</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        v-model="formData.income_legitimate_details"
        name="income_legitimate_details"
        center
        :required="true"
        type="text"
        label="IF NO, KINDLY EXPLAIN:"
        placeholder="Please enter the IF NO, KINDLY EXPLAIN:"
        :rules="[
          {
            required: true,
            message: 'Please enter the IF NO, KINDLY EXPLAIN:',
          },
        ]"
      />
      <van-field
        name="have_high_risk"
        label="ARE YOU HAVING ANY “HIGH RISK BUSINESS”?"
        :required="true"
      >
        <template #input>
          <van-radio-group
            v-model="formData.have_high_risk"
            direction="horizontal"
          >
            <van-radio :name="0">YES</van-radio>
            <van-radio :name="1">NO</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        name="have_high_risk_details"
        label="IF YES, KINDLY PROVIDE DETAILS:"
        :required="true"
      >
        <template #input>
          <van-checkbox-group
            v-model="formData.have_high_risk_details"
            direction="horizontal"
          >
            <van-checkbox :name="0" shape="square"
              >BUSINESS RELATED TO ONLINE GAMING</van-checkbox
            >
            <van-checkbox :name="1" shape="square"
              >FOREX / CRYPTOCURRENCY</van-checkbox
            >
            <van-checkbox :name="2" shape="square"
              >BUSINESS RELATED TO COLLECTION AGENCIES</van-checkbox
            >
            <van-checkbox :name="3" shape="square">OTHERS</van-checkbox>
          </van-checkbox-group>
        </template>
      </van-field>
      <div class="minTitle">
        1. I, have appointed “DDG” to manage my designated asset according to my
        will and my instruction.
      </div>
      <div class="minTitle">
        2. I, hereby declare that I’m fully understand the benefit of trust
        setup for estate planning purpose.
      </div>
      <div class="minTitle">
        3. I, hereby declare that all the capital or asset is derived from legal
        sources.
      </div>
      <div class="minTitle">
        4. I, hereby declare that all the information that provided is true,
        otherwise I should bear all the legal liabilities and relevant
        consequences.
      </div>
      <div class="tl">TRUSTOR SIGNATURE</div>
      <vue-esign
        ref="trustor_signature"
        :width="1200"
        :height="300"
        :isCrop="false"
        :lineWidth="6"
        lineColor="#000000"
        bgColor.sync="#fff"
        style="border: 1px solid #666"
      />
      <div class="tr">
        <div class="esignBtn" @click="handleReset('trustor_signature')">
          clear
        </div>
        <div class="esignBtn" @click="handleGenerate('trustor_signature')">
          confirm
        </div>
      </div>
      <van-field
        v-model="formData.trustor_name"
        name="trustor_name"
        center
        :required="true"
        type="text"
        label="NAME"
        placeholder="Please enter the NAME"
        :rules="[{ required: true, message: 'Please enter the NAME' }]"
      />
      <van-field
        readonly
        v-model="formData.trustor_signature_date"
        name="trustor_signature_date"
        center
        :required="true"
        right-icon="arrow"
        label="DATE"
        placeholder="Please enter the DATE"
        @click="onShowPicker('trustor_signature_date')"
      />
      <div class="tl">WITNESS SIGNATURE</div>
      <vue-esign
        ref="witness_signature"
        :width="1200"
        :height="300"
        :isCrop="false"
        :lineWidth="6"
        lineColor="#000000"
        bgColor.sync="#fff"
        style="border: 1px solid #666"
      />
      <div class="tr">
        <div class="esignBtn" @click="handleReset('witness_signature')">
          clear
        </div>
        <div class="esignBtn" @click="handleGenerate('witness_signature')">
          confirm
        </div>
      </div>
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
        readonly
        v-model="formData.witness_date"
        name="witness_date"
        center
        :required="true"
        right-icon="arrow"
        label="DATE"
        placeholder="Please enter the DATE"
        @click="onShowPicker('witness_date')"
      />
      <van-field
        readonly
        clickable
        label="Area code"
        center
        :required="true"
        :rules="[{ required: true, message: 'Please select the area code' }]"
        :value="areaCode"
        placeholder="Please select the area code"
        @click="showCodePicker = true"
      />
      <van-field
        v-model="phone"
        name="phone"
        center
        :required="true"
        type="digit"
        label="CONTACT NO"
        placeholder="Please enter the CONTACT NO"
        :rules="[
          {
            required: true,
            message: 'Please enter the CONTACT NO',
          },
        ]"
      >
      </van-field>
      <van-popup v-model="showCodePicker" round position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @cancel="showCodePicker = false"
          @confirm="(value) => onConfirm(value)"
        />
      </van-popup>
      <!-- <van-field
        v-model="phoneList[index].verify_code"
        center
        :required="true"
        label="Verification code"
        placeholder="Please enter the verification code"
        :rules="[
          {
            required: true,
            message: 'Please enter the verification code',
          },
        ]"
      >
        <van-button
          :class="'SMSconfirm codeBtn_' + phoneList[index].isSms"
          slot="button"
          native-type="button"
          :disabled="phoneList[index].isSms"
          @click="sendCode(index)"
          >Send code</van-button
        >
      </van-field> -->
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
import { uploadAutograph } from "@/api/util";
export default {
  data() {
    return {
      formData: {
        name: "",
        nric_no: "",
        email: "",
        source_of_funds: "",
        company: "",
        occupation: "",
        business_running: "",
        year_income: "",
        other_income: "",
        other_income_details: "",
        why_set_trust: "",
        have_trust: "",
        have_pep: "",
        income_legitimate: "",
        income_legitimate_details: "",
        have_high_risk: "",
        have_high_risk_details: [],
        trustor_signature: "",
        trustor_name: "",
        trustor_signature_date: "",
        witness_signature: "",
        witness_name: "",
        witness_date: "",
        witness_phone: "",
      },
      isShowPicker: false, // 日期彈框
      currentContent: new Date(), // 日期彈框顯示當前日期
      showCodePicker: false, // 區號彈框
      columns: ["60 Malaysia", "86 China", "852 Hong Kong", "886 Taiwan"],
      areaCode: '', // 區號
      phone: '',
    };
  },
  methods: {
    submit(form) {},
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
    onConfirm(value) {
      this.areaCode = value;
      this.showCodePicker = false;
    },
    // 清空画布
    handleReset(val) {
      this.$refs[val].reset(); //清空画布
    },
    handleGenerate(val) {
      var that = this;
      this.$refs[val]
        .generate()
        .then((res) => {
          console.log(res); // 得到了签字生成的base64图片
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
    // 展示日期弹框
    onShowPicker(val) {
      this.isShowPicker = true;
      this.whichDate = val;
    },
    // 日期彈框
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
.KYC {
  /* padding: 0 16px; */
  text-align: left;
}
/deep/ .van-radio__icon,
/deep/ .van-radio__icon .van-icon,
/deep/ .van-checkbox__icon,
/deep/ .van-checkbox__icon .van-icon {
  font-size: 18px;
  height: 20px;
  line-height: 20px;
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
</style>