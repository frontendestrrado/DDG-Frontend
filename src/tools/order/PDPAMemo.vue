<template>
  <div class="PDPAMemo bodybox">
    <van-form
      validate-first
      @submit="submit"
      :submit-on-enter="false"
      :scroll-to-error="true"
    >
      <div class="minTitle">ASIA INTERNATIONAL TRUST BERHAD</div>
      <div class="minTitle">(Company No: 199501032473 (361679-H))</div>
      <div class="minTitle">
        Suite 8.01 Level 8 Menara Binjai No 2 Jalan Binjai 50450 Kuala Lumpur
        Malaysia
      </div>
      <div class="minTitle">
        Tel No : 03-2386 7759 / 2161 7070 Fax No : 03 -2386 7711
      </div>
      <div class="minTitle">Dear Sir/Madam</div>
      <div class="minTitle">Notice of Personal Data Protection Act 2010</div>
      <div class="minTitle">
        ASIA INTERNATIONAL TRUST BERHAD (“AITB”) places great importance on
        keeping up with the legal and regulatory changes.
      </div>
      <div class="minTitle">
        1. In line with the Personal Data Protection Act 2010, we would like to
        inform and update you in regards to your personal information that we
        may process, and in the manner in which we do so. Kindly note that AITB
        processes your personal information, such as details on your contact
        numbers, background and other information relevant to your arrangements
        / participation / contract / agreements / deeds / appointments, which
        you may have previously provided directly to AITB or through contact
        with our corporate communications and/or departments (including business
        development and finance & administration teams). We may also have
        obtained your personal information from your participation at our events
        (including seminars and corporate meetings/functions) and through the
        provision of services by AITB.
      </div>
      <div class="minTitle">
        2. Please be informed that your personal information, e.g. name, title,
        designation, employer, address, email address, telephone and facsimile
        numbers, are being processed by AITB for the following purposes
        (“Purpose”):- a. providing AITB’s products and/or services which you
        have appointed and/or arranged for AITB to so do and notification on
        important changes or developments in such products and/or services
        (including features thereof); b. updating and managing the accuracy of
        AITB’s records and databases (including Customer Relation Management);
        c. conducting assessment and analysis, including market and product /
        service evaluation and market research (if any); d. cross-selling,
        marketing and promotions of AITB’s products and/or services; e.
        providing information as may be required by the relevant authorities/
        regulatory bodies which regulate and/or issue licenses for AITB’s
        existing and/or future products and/or services; f. maintaining
        communications and ensuring customer satisfaction, responding to
        enquiries and complaints, and generally resolving disputes; and g.
        maintaining your information history for present and future reference
        (if any).
      </div>
      <div class="minTitle">
        3. Your personal information may be disclosed to other companies,
        service providers including legal firms, government agencies, other
        financial institutions and any of their respective agents, servants
        and/or such persons, whether located within or outside of Malaysia for
        the stipulated Purpose.
      </div>
      <div class="minTitle">
        4. Subject to any prohibition by any regulatory requirements binding on
        AITB in relation to your personal information, you may request for
        access to, correction or deletion) of your personal information, or
        limit the processing thereof (including personal data of others provided
        by you) at any time. Any enquiry or complaint with respect to your
        personal information should be directed to AITB via post, email or
        facsimile transmission, at the following address:
      </div>
      <div class="minTitle">
        Address: ASIA INTERNATIONAL TRUST BERHAD (Attention: Customer Care Unit)
        Suite 8.01,Level 8, Menara Binjai, No.2, Jalan Binjai, 50450 Kuala
        Lumpur.
      </div>
      <div class="minTitle">Telephone Number: +603-2386 7759/2161 7070</div>
      <div class="minTitle">Facsimile Number: +603-2386 7711</div>
      <div class="minTitle">Email: customer.service@aitrust.com.my</div>
      <div class="minTitle">
        5. We trust that you consent and agree to the preceding terms with
        respect to our processing of your personal information. If you do not
        consent to the above, kindly contact and inform us through the
        abovementioned contact details.
      </div>
      <div class="minTitle">
        By signing the space below, it is deemed that you have acknowledge the
        acceptance of the notice of Personal Data Protection Act 2010 in both
        English Language and Bahasa Malaysia.
      </div>
      <div class="tl">SIGNATURE</div>
      <vue-esign
        ref="signature"
        v-show="!formData.signature"
        :width="1200"
        :height="300"
        :isCrop="false"
        :lineWidth="6"
        lineColor="#000000"
        bgColor.sync="#fff"
        style="border: 1px solid #666"
      />
      <van-image
        v-show="formData.signature"
        class="esignImgbox"
        width="100%"
        height="20%"
        :src="formData.signature"
      />
      <div class="tr">
        <div class="esignBtn" @click="handleReset('signature')">Clear</div>
        <div class="esignBtn" @click="handleGenerate('signature')">Confirm</div>
      </div>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Name"
        placeholder="Please enter the Name"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.nric"
        name="nric"
        center
        :required="true"
        type="text"
        label="NRIC"
        placeholder="Please enter the NRIC"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.designation"
        name="designation"
        center
        :required="true"
        type="text"
        label="Designation"
        placeholder="Please enter the Designation"
        :rules="[{ required: true }]"
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
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.company_rubber_stamp"
        name="company_rubber_stamp"
        center
        :required="true"
        type="text"
        label="Company Rubber Stamp"
        placeholder="Please enter the Company Rubber Stamp"
        :rules="[
          { required: true },
        ]"
      />
      <van-button v-if="!isDone" round block type="info" native-type="submit" color="#7C655D">
        {{ from == "create" ? "Next / Save" : "Next / Save" }}
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
import { pdpa_memo, getOrdersForms, putOrdersForms } from "@/api/order";
export default {
  props:['orderDataInfo'],
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
      isDone: false, // 訂單是否已確認
    };
  },
  mounted() {
    // this.from = this.$route.query.from;
    // this.isFilled = this.$route.query.isFilled;
    // this.isDone = this.$route.query.status == 1 ? true : false;
    if(this.$store.state.isOverseaSignature){
      this.from = "create"
      this.isFilled=0
    }else{
      this.from = this.$route.query.from;
      this.isFilled = this.$route.query.isFilled;
      this.isDone = this.$route.query.status == 1 ? true : false;
    }
    if(this.$route.query.isShare){
     this.isFilled=this.$route.query.pdpa_memo_form
    }
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
      if (!this.formData.signature&&!this.$store.state.isOverseaSignature) {
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
          if(!this.$route.query.isShare){
            this.$router.go(-1);
          }
        });
      } else {
        pdpa_memo(this.$store.state.CustomerApplicationId, data)
          .then((res) => {
            console.log(res);
            this.$toast({
              type: "success",
              message: "Submitted successfully",
            });
            if (this.from == "create") {
              this.$store.commit("changePage", {
                tabbar: "/DocumentChecklist",
                title: "5/5 Document Checklist",
              });
              if(!this.$store.state.isOverseaSignature&&!this.$route.query.isShare){
                  this.$router.push(
                 "/DocumentChecklist?from=create&orderId=" + this.$route.query.orderId
                );
              }
              
            } else {
              this.$router.go(-1);
            }
          })
          .catch((err) => {});
      }
    },
    // 清空画布
    handleReset(val) {
      this.$refs[val].reset(); //清空画布
      this.formData.signature = ''
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
.PDPAMemo {
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
    width: 30rem;
  }
}
.esignImgbox {
  border: 1px solid #666666;
}
</style>