<template>
  <div class="DocumentChecklist bodybox">
    <van-form
      validate-first
      @submit="submit"
      :submit-on-enter="false"
      :scroll-to-error="true"
    >
      <div class="minTitle">DOCUMENT CHECKLIST AND CONFIRMATION FOR HANDOVER TO THE TRUSTEE</div>
      <div class="minTitle">Settlor’s Information</div>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Name"
        placeholder="Please enter the Name"
        :rules="[{ required: true, message: 'Please enter the Name' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="NRIC/Passport No"
        placeholder="Please enter the NRIC/Passport No"
        :rules="[{ required: true, message: 'Please enter the NRIC/Passport No' }]"
      />
      <div class="minTitle">Documents Completion Status </div>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Completed Cash Trust application form"
        placeholder="Please enter the Completed Cash Trust application form"
        :rules="[{ required: true, message: 'Please enter the Completed Cash Trust application form' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Completed and signed Compliance Questionnaire as provided by AITB: a) AITB-AMLA 2(A)"
        placeholder="Please enter the Completed and signed Compliance Questionnaire as provided by AITB: a) AITB-AMLA 2(A)"
        :rules="[{ required: true, message: 'Please enter the Completed and signed Compliance Questionnaire as provided by AITB: a) AITB-AMLA 2(A)' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Settlor’s Photocopy of IC (Verified by the Agent/Representative)"
        placeholder="Please enter the Settlor’s Photocopy of IC (Verified by the Agent/Representative)"
        :rules="[{ required: true, message: 'Please enter the Settlor’s Photocopy of IC (Verified by the Agent/Representative)' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Signed Letter of Wishes (Un-dated)"
        placeholder="Please enter the Signed Letter of Wishes (Un-dated)"
        :rules="[{ required: true, message: 'Please enter the Signed Letter of Wishes (Un-dated)' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Proof of current address (preferably through the supply of utility bill) (Verified by the Agent / Representative)"
        placeholder="Please enter the Proof of current address (preferably through the supply of utility bill) (Verified by the Agent / Representative)"
        :rules="[{ required: true, message: 'Please enter the Proof of current address (preferably through the supply of utility bill) (Verified by the Agent / Representative)' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Source of Wealth & Source of Fund (to provide the relevant supporting document(s)) Verified by the Agent/ Representative – Pay slip, EPF statement, Bank statement, Income tax return"
        placeholder="Please enter the Source of Wealth & Source of Fund (to provide the relevant supporting document(s)) Verified by the Agent/ Representative – Pay slip, EPF statement, Bank statement, Income tax return"
        :rules="[{ required: true, message: 'Please enter the Source of Wealth & Source of Fund (to provide the relevant supporting document(s)) Verified by the Agent/ Representative – Pay slip, EPF statement, Bank statement, Income tax return' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Signed dual language personal data protection act (PDPA) document "
        placeholder="Please enter the Signed dual language personal data protection act (PDPA) document"
        :rules="[{ required: true, message: 'Please enter the Signed dual language personal data protection act (PDPA) document' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Evidence of Bank Transfer by Cheque/ TT [Note: No Cash (i.e. no cash, no ATM deposit, no deposit at bank counter)]"
        placeholder="Please enter the Evidence of Bank Transfer by Cheque/ TT [Note: No Cash (i.e. no cash, no ATM deposit, no deposit at bank counter)]"
        :rules="[{ required: true, message: 'Please enter the Evidence of Bank Transfer by Cheque/ TT [Note: No Cash (i.e. no cash, no ATM deposit, no deposit at bank counter)]' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Trust deed: a) Signed on execution page; b) Complete schedule 1 & 2; c) 1 original copy; and d) Un-dated "
        placeholder="Please enter the Trust deed: a) Signed on execution page; b) Complete schedule 1 & 2; c) 1 original copy; and d) Un-dated"
        :rules="[{ required: true, message: 'Please enter the Trust deed: a) Signed on execution page; b) Complete schedule 1 & 2; c) 1 original copy; and d) Un-dated' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Third Party Fund Declaration Form (if applicable)"
        placeholder="Please enter the Third Party Fund Declaration Form (if applicable)"
        :rules="[{ required: true, message: 'Please enter the Third Party Fund Declaration Form (if applicable)' }]"
      />
      <div class="minTitle">Note: Verification means to sign, state name and date </div>
      <div class="tl">Signature</div>
      <vue-esign
        ref="signature"
        :width="1200"
        :height="300"
        :isCrop="false"
        :lineWidth="6"
        lineColor="#000000"
        bgColor.sync="#fff"
        style="border: 1px solid #666"
      />
      <div class="tr">
        <div class="esignBtn" @click="handleReset('signature')">clear</div>
        <div class="esignBtn" @click="handleGenerate('signature')">confirm</div>
      </div>
      <van-image
        v-if="formData.signature"
        width="100%"
        height="20%"
        :src="formData.signature"
      />
      <div class="minTitle">Agent/Representative of DDG INTERNATIONAL BERHAD (Company No. 1423557-M)</div>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Name"
        placeholder="Please enter the Name"
        :rules="[{ required: true, message: 'Please enter the Name' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="NRIC/Passport No"
        placeholder="Please enter the NRIC/Passport No"
        :rules="[{ required: true, message: 'Please enter the NRIC/Passport No' }]"
      />
      <van-field
        readonly
        v-model="formData.date"
        name="date"
        center
        :required="true"
        right-icon="arrow"
        label="Date"
        placeholder="Please enter the Date"
        @click="onShowPicker('date')"
        :rules="[{ required: true, message: 'Please enter the Date' }]"
      />
      <van-button round block type="info" native-type="submit">
        submit
      </van-button>
    </van-form>
    <!-- 日期彈框 -->
    <van-popup v-model="isShowPicker" position="bottom">
      <van-datetime-picker
        v-model="currentContent"
        type="date"
        :min-hour="0"
        :min-date="minDate"
        @cancel="onHiddenPicker"
        @confirm="onConfirmPicker"
      />
    </van-popup>
  </div>
</template>

<script>
import { uploadAutograph } from "@/api/util";
import { pdpa_memo, getOrdersForms, putOrdersForms } from "@/api/order";
export default {
  data() {
    return {
      formData: {
        signature: "",
        name: "",
        nric: "",
        designation: "",
        date: "",
        company_rubber_stamp: "",
      },
      isShowPicker: false, // 控制日期彈框
      currentContent: new Date(), // 日期彈框顯示當前日期
      whichDate: "", // 區分是哪個日期觸發彈框
      from: "", // 記錄哪個頁面進入的
      isFilled: "", // 表單id
      minDate: new Date(1900, 0, 1),
    };
  },
  mounted() {
    this.from = this.$route.query.from;
    this.isFilled = this.$route.query.isFilled;
    this.getFormData();
  },
  methods: {
    // 如果已填 獲取數據
    getFormData() {
      if (this.isFilled > 0) {
        getOrdersForms(this.isFilled, { type: "PDPA Memo" })
          .then((res) => {
            console.log(res);
            this.formData = res;
          })
          .catch((err) => {});
      }
    },
    submit(form) {
      console.log(form);
      if (!this.formData.signature) {
        this.$toast.fail("Please sign your name");
        return;
      }
      let data = JSON.parse(JSON.stringify(this.formData));
      if (this.isFilled > 0) {
        // 修改
        putOrdersForms(this.isFilled, {
          type: "PDPA Memo",
          data: JSON.stringify(data),
        }).then((res) => {
          console.log(res, "修改PDPA Memo成功");
          this.$toast({
            type: "success",
            message: "Modify the success",
          });
          this.$router.go(-1);
        });
      } else {
        pdpa_memo(this.$route.query.orderId, data)
          .then((res) => {
            console.log(res);
            this.$toast({
              type: "success",
              message: "Submitted successfully",
            });
            this.$router.push("/CreateOrder");
          })
          .catch((err) => {});
      }
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
.DocumentChecklist {
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