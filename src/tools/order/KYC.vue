<template>
  <div class="KYC bodybox">
    <van-form
      validate-first
      @submit="submit"
      :submit-on-enter="false"
      :scroll-to-error="true"
    >
      <div class="minTitle">Compliance Questionnaire (Individual)</div>
      <div class="minTitle">Name of settlor (as per IC):</div>
      <div class="minTitle">Requirement:-</div>
      <div class="contentText">1.We have a Regulatory Obligation to verify the source of your fund and wealth. Documentary evidence duly verified by Commission of Oath or other agreeable authority must be provided to us. </div>
      <div class="contentText">2.The document checklist (Section E) is to assist you to get ready these documents and information in advance for on boarding. </div>
      <div class="contentText">3.Should more documents are needed to satisfy the regulatory requirement, we will advise you in due course. </div>
      <div class="contentText">Section A, B, C, D and E are required to be completely filled and signed off by the settlor in Section F.</div>
      <div class="contentText">5.Marketing Team of DDG INTERNATIONAL BERHAD to fill in Section G and signed off.</div>
      <div class="minTitle">Compliance Questionnaire</div>
      <div class="minTitle">SECTION A	  INDIVIDUAL (SETTLOR, DIRECTOR, SHAREHOLDER, ULTIMATE BENEFICIARY OWNER)</div>
      <div class="minTitle">Settlor</div>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Full Name"
        placeholder="Please enter the Full Name"
        :rules="[{ required: true, message: 'Please enter the Full Name' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        type="text"
        label="Other/Previous Name (if any)"
        placeholder="Please enter the Other/Previous Name (if any"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="NEW - Malaysia NRIC No"
        placeholder="Please enter the NEW - Malaysia NRIC No"
        :rules="[{ required: true, message: 'Please enter the NEW - Malaysia NRIC No' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        type="text"
        label="OLD - Malaysia NRIC No.(if applicable)"
        placeholder="Please enter the OLD - Malaysia NRIC No.(if applicable)"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Nationality(state all if multiple nationality)"
        placeholder="Please enter the Nationality(state all if multiple nationality)"
        :rules="[{ required: true, message: 'Please enter the Nationality(state all if multiple nationality)' }]"
      />










      <div class="minTitle">KNOW YOUR CLIENT’S FORM (KYC)</div>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="TRUSTOR"
        placeholder="Please enter the TRUSTOR"
        :rules="[{ required: true, message: 'Please enter the TRUSTOR' }]"
      />
      <van-field
        name="source_of_funds"
        label="SOURCE OF FUNDS"
        :required="true"
        :rules="[{required: true,message:'Please enter the SOURCE OF FUNDS'}]"
      >
        <template #input>
          <van-radio-group
            v-model="formData.source_of_funds"
            direction="horizontal"
          >
            <van-radio :name="1">EMPLOYMENT / SELF-EMPLOYMENT</van-radio>
            <van-radio :name="2"
              >RETIRED – KINDLY FILL IN PREVIOUS EMPLOYMENT</van-radio
            >
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        name="other_income"
        label="OTHER SOURCE OF INCOME"
        :required="true"
        :rules="[{required: true,message:'Please enter the OTHER SOURCE OF INCOME'}]"
      >
        <template #input>
          <van-radio-group
            v-model="formData.other_income"
            direction="horizontal"
          >
            <van-radio :name="1">YES</van-radio>
            <van-radio :name="0">NO</van-radio>
          </van-radio-group>
        </template>
      </van-field>
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
        readonly
        v-model="formData.trustor_signature_date"
        name="trustor_signature_date"
        center
        :required="true"
        right-icon="arrow"
        label="DATE"
        placeholder="Please enter the DATE"
        @click="onShowPicker('trustor_signature_date')"
        :rules="[
          { required: true, message: 'Please enter the DATE' },
        ]"
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
      <van-field
        v-model="verify_code"
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
          class="SMSconfirm"
          slot="button"
          native-type="button"
          :disabled="isSms"
          @click="sendCode()"
          >Send code</van-button
        >
      </van-field>




     
      
      <!-- 提交 -->
      <van-button round block type="info" native-type="submit">
        {{ from == 'create'? 'next' : 'submit' }}
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
import { uploadAutograph, smsVerify_code, verdict_code } from "@/api/util";
import { kyc_form, getOrdersForms, putOrdersForms } from "@/api/order";
export default {
  data() {
    return {
      formData: {
        name: "",
        nric_no: "",
        contact_no: '',
        email: "",
        source_of_funds: 0,
        company: "",
        occupation: "",
        business_running: "",
        year_income: "",
        other_income: 0,
        other_income_details: 0,
        why_set_trust: "",
        have_trust: 0,
        have_pep: 0,
        income_legitimate: 0,
        income_legitimate_details: "",
        have_high_risk: 0,
        have_high_risk_details: 0,
        trustor_signature: "",
        trustor_name: "",
        trustor_signature_date: "",
        witness_signature: "",
        witness_name: "",
        witness_date: "",
        witness_phone: "",
        other_income_details_content: '',
        have_trust_details: '',
        have_pep_details: '',
        have_high_risk_details_content: '',
      },
      isShowPicker: false, // 日期彈框
      currentContent: new Date(), // 日期彈框顯示當前日期
      whichDate: '', // 區分是哪個日期觸發彈框
      showCodePicker: false, // 區號彈框
      columns: ["60 Malaysia", "86 China", "852 Hong Kong", "886 Taiwan"],
      areaCode: "", // 區號
      phone: "",
      verify_code: "",
      isSms: false,
      from: '', // 記錄哪個頁面進入的
      isFilled: '', // 表單id(未填0)
    };
  },
  mounted() {
    console.log(this.$route.query,222222);
    this.from = this.$route.query.from
    this.isFilled = this.$route.query.isFilled
    this.getFormData()
  },
  methods: {
    // 如果已填 獲取數據
    getFormData() {
      if (this.isFilled > 0) {
        getOrdersForms(this.isFilled,{type: 'KYC'}).then(res => {
          console.log(res);
          this.formData = res
          this.phone = res.witness_phone.slice(-11)
          this.areaCode = res.witness_phone.split(this.phone)[0]
        }).catch(err => {})
      }
    },
    submit(form) {
      console.log(form, "form");
      if (!this.formData.trustor_signature) {
        this.$toast.fail('Please sign your name')
        return
      } else if (!this.formData.witness_signature) {
        this.$toast.fail('Please sign your name')
        return
      }
      // 验证验证码
      let data = [];
      data.push({
        phone: this.areaCode.split(" ")[0] + this.phone,
        verify_code: this.verify_code,
      });
      verdict_code(JSON.stringify(data))
        .then((res) => {
          console.log(res, "验证回调");
          if (res.state_code == 200) {
            // 验证成功 提交表单
            let data = JSON.parse(JSON.stringify(this.formData))
            data.witness_phone = this.areaCode.split(' ')[0] + this.phone
            if (this.isFilled > 0) {
              // 修改
              putOrdersForms(this.isFilled,{type: 'KYC',data: JSON.stringify(data)}).then(res => {
                console.log(res,'修改kyc成功');
                this.$toast({
                  type: "success",
                  message: 'Modify the success',
                });
                this.$router.go(-1)
              })
            } else {
              kyc_form(this.$route.query.orderId, data).then(res => {
                console.log(res);
                this.$toast({
                  type: "success",
                  message: 'Submitted successfully',
                });
                if (this.from == 'create') {
                  this.$store.commit('changePage',{tabbar: '/LetterOfWishes', title: 'Letter Of Wishes'});
                  this.$router.push('/LetterOfWishes?from=create&orderId=' + this.$route.query.orderId)
                } else {
                  this.$router.go(-1)
                }
              }).catch(err => {
                console.log(err.response);
              })
            }
          } else {
            this.$toast({
              type: "fail",
              message: res.message,
            });
          }
        })
        .catch((err) => {
          console.log(err.response);
          this.$toast({
            type: "fail",
            message: "Verification code error",
          });
        });
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
    handleReset(val) {
      this.$refs[val].reset(); //清空画布
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
              that.formData[val] = res.path;
              that.$toast({
                type: 'success',
                message: 'Signature success'
              })
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
.SMSconfirm {
  color: #fff;
  border: none;
  outline: none;
  background-color: #2f75f4;
  font-size: 16px;
  border-radius: 10px;
  height: 35px;
}
/*手机*/
@media screen and (max-width: 768px) {
  /deep/ .van-field__label {
    width: 6.5rem;
  }
}
</style>