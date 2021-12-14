<template>
  <div class="LetterOfWishes bodybox">
    <van-form
      validate-first
      @submit="submit"
      :submit-on-enter="false"
      :scroll-to-error="true"
    >
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
      <div class="minTitle">ASIA INTERNATIONAL TRUST BERHAD</div>
      <div class="minTitle">Suite 8.01, Level 8, Menara Binjai,</div>
      <div class="minTitle">No. 2 Jalan Binjai,</div>
      <div class="minTitle">50450, Kuala Lumpur</div>
      <div class="minTitle">Malaysia</div>
      <div class="minTitle">BY HAND / EMAIL : aigt@aitrust.com.my</div>
      <div class="minTitle">
        Attn: Mr. Matthew Ngoh – Chief Executive Officer
      </div>
      <div class="minTitle">Dear Sir,</div>
      <div class="minTitle">LETTER OF WISHES – “AI GENERATION TRUST”</div>
      <div class="minTitle">
        I/We refer to the Trust Deed entered into between you (as the Trustee)
        and myself/ourselves (as the Settlor) to establish a revocable trust
        (“Trust Deed”), known as “AI Generation Trust”. The definitions used in
        the Trust Deed are adopted herein.
      </div>
      <div class="minTitle">
        With reference to Clause 3.2 of the Trust Deed, I/We recommend you to
        invest the Trust Capital in reputable assets management companies
        including but not limited to Philip Capital Management or Affin Hwang
        Capital and/or in listed companies in Malaysia.
      </div>
      <div class="minTitle">
        Further, I/We am/are fully aware of the arrangement and understand that
        the trust cannot be terminated within the first six (6) month from the
        date of the Trust Deed. I/We am/are also fully aware and understand that
        termination of the Trust Deed from the seventh (7th ) month onwards
        shall be subjected to a deduction of 25% of the Trust Capital.
      </div>
      <div class="minTitle">
        With reference to Clause 5 and Schedule 3 of the Trust Deed, the Trust
        Capital and/or projected dividend and/or accumulated income shall be
        distributed between 15th day to 20th day of the Anniversary Month, and
        in the following descending order of priority: -
      </div>
      <div class="minTitle">
        1) to me/us as the Settlor during my/our lifetime and thereafter;
      </div>
      <div class="minTitle">
        2) to my/our named Beneficiary and if none; and
      </div>
      <div class="minTitle">3) to my/our heir or successor.</div>
      <div class="minTitle">
        Please note that this letter is merely my/our wishes and it does not
        bind or affect the powers vested in the Trustee.
      </div>
      <div class="minTitle">Yours faithfully</div>
      <van-field
        v-model="formData.client_name"
        name="client_name"
        center
        :required="true"
        type="text"
        label="Settlor Name"
        placeholder="Please enter the Settlor Name"
        :rules="[{ required: true, message: 'Please enter the Settlor Name' }]"
      />
      <van-field
        v-model="formData.passport_no"
        name="passport_no"
        center
        :required="true"
        type="text"
        label="NRIC/Passport No"
        placeholder="Please enter the NRIC/Passport No"
        :rules="[
          { required: true, message: 'Please enter the NRIC/Passport No' },
        ]"
      />
      <!-- 提交 -->
      <van-button round block type="info" native-type="submit">
        {{ from == "create" ? "next" : "submit" }}
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
import {
  letter_wishes_form,
  getOrdersForms,
  putOrdersForms,
} from "@/api/order";
export default {
  data() {
    return {
      formData: {
        date: "",
        client_name: "",
        passport_no: "",
      },
      isShowPicker: false,
      currentContent: new Date(), // 日期彈框顯示當前日期
      whichDate: "", // 區分是哪個日期觸發彈框
      from: "", // 記錄哪個頁面進入的
      isFilled: "", // 表單id(沒填0)
    };
  },
  mounted() {
    this.from = this.$route.query.from;
    this.isFilled = this.$route.query.isFilled;
    this.getFormData();
  },
  methods: {
    // 獲取表單數據
    getFormData() {
      if (this.isFilled > 0) {
        getOrdersForms(this.isFilled, { type: "Letter Of Wishes" }).then(res => {
            console.log(res, "獲取lett數據");
            this.formData = res;
          }
        );
      }
    },
    submit(form) {
      console.log(form);
      let data = JSON.parse(JSON.stringify(this.formData));
      if (this.isFilled > 0) {
        // 修改
        putOrdersForms(this.isFilled, {
          type: "Letter Of Wishes",
          data: JSON.stringify(data),
        }).then((res) => {
          console.log(res, "修改kyc成功");
          this.$toast({
            type: "success",
            message: "Modify the success",
          });
          this.$router.go(-1);
        });
      } else {
        letter_wishes_form(this.$route.query.orderId, data)
          .then((res) => {
            console.log(res);
            this.$toast({
              type: "success",
              message: "Submitted successfully",
            });
            if (this.from == "create") {
              this.$store.commit("changePage", {
                tabbar: "/PDPAMemo",
                title: "PDPA Memo",
              });
              this.$router.push(
                "/PDPAMemo?from=create&orderId=" + this.$route.query.orderId
              );
            } else {
              this.$router.go(-1);
            }
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
  },
};
</script>

<style scoped>
.LetterOfWishes {
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