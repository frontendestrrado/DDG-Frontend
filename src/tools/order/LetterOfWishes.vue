<template>
  <div class="LetterOfWishes bodybox">
    <van-form validate-first @submit="submit" :submit-on-enter="false" :scroll-to-error="true">
      <!-- @click="onShowPicker('date')" -->
      <!-- <van-field readonly v-model="formData.date" name="date" autocomplete="off" center disabled label="Date"
        placeholder="[Leave Blank]" /> -->

        <van-field v-model="formData.date" name="date" autocomplete="off" center 
      :rules="[{ required: true,pattern, message: 'Please enter the DATE' }]"
      label="Date: DD-MM-YYYY"
      :required="true"
      placeholder="Please enter DD-MM-YYYY" />


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
        I/We refer to the Trust Deed entered into between you (as the Trustee) and myself/ourselves (as the
        Settlor) to establish a revocable trust (“Trust Deed”), known as “AI Generation Trust”. The
        definitions used in the Trust Deed are adopted herein.
      </div>
      <div class="minTitle">
        With reference to Clause 3.2 of the Trust Deed, I/We recommend you to invest the entirety of the Trust
        Capital into regulated or unregulated investment whether it being public or private funds.
      </div>
      <div class="minTitle">
        Further, I/We am/are fully aware of the arrangement and understand that the trust cannot be terminated
        within the first six (6) month from the date of the Trust Deed. I/We am/are also fully aware and
        understand that termination of the Trust Deed from between the seventh (7th) month onwards shall be
        subjected to a deduction of 25% of the Trust Capital.
      </div>
      <div class="minTitle">
        With reference to Clause 5 and Schedule 3 of the Trust Deed, the Trust Capital and/or projected
        dividend and/or accumulated income shall be distributed between 15th day to 20th day of the
        Anniversary Month, and in the following descending order of priority: -
      </div>
      <div class="minTitle">
        1) to me/us as the Settlor during my/our lifetime and thereafter;
      </div>
      <div class="minTitle">
        2) to my/our named Beneficiary and if none; and
      </div>
      <div class="minTitle">3) to my/our heir or successor/shareholders.</div>
      <div class="minTitle">
        Please note that this letter is merely my/our wishes and it does not bind or affect the powers vested in
        the Trustee.
      </div>
      <div class="minTitle">Yours faithfully</div>
      <vue-esign ref="signature" style="border: 1px solid #666" :width="800" :height="300" :isCrop="false"
        :lineWidth="6" lineColor="#000000" bgColor.sync="#fff"
        :style="{ display: (this.xyz === '' ? 'block' : formData.signature === null || formData.signature === '' ? 'block' : 'none') }" />
      <van-image
        :style="{ border: '1px solid #666', display: (this.xyz === '1' ? formData.signature == null || formData.signature === '' ? 'none' : 'block' : 'none') }"
        class="esignImgbox" :src="formData.signature" />
      <div class="tr">
        <div class="esignBtn" @click="handleReset('signature')" v-if="!isDone">
          Clear
        </div>
        <div v-if="!isDone" class="esignBtn" @click="
          handleGenerate('signature')
        ">
          Confirm
        </div>
      </div>
      <van-field v-model="formData.client_name" name="client_name" id="3reset" center autocomplete="off"
      @input="formData.client_name = formData.client_name.toUpperCase()"
        :required="true" type="text" label="Settlor Name" placeholder="Please enter the Settlor Name"
        :rules="[{ required: true }]" />
      <van-field v-model="formData.passport_no" name="passport_no" center autocomplete="off" :required="true"
      @input="formData.passport_no = formData.passport_no.toUpperCase()"
        type="text" label="NRIC/Passport No" placeholder="Please enter the NRIC/Passport No" :rules="[
          { required: true },
        ]" />
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
import {
  letter_wishes_form,
  getOrdersForms,
  putOrdersForms,
} from "@/api/order";
import { uploadAutograph } from "@/api/util";
export default {
  props: ['orderDataInfo'],
  data() {
    return {
      formData: {
        date:  moment(new Date()).format('DD-MM-YYYY'),
        client_name: this.$store.state.campanyIndividualName1,
        passport_no: this.$store.state.passport_no,
        signature: this.$store.state.signature,
      },
      pattern: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,// 正则验证时间
      sig1: true,
      xyz: "",
      isShowPicker: false,
      currentContent: new Date(), // 日期彈框顯示當前日期
      whichDate: "", // 區分是哪個日期觸發彈框
      from: "", // 記錄哪個頁面進入的
      isFilled: "", // 表單id(沒填0)
      minDate: new Date(1900, 0, 1),
      isDone: false, // 訂單是否已確認
    };
  },
  mounted() {
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
      this.isFilled = this.$route.query.letter_of_wishes_form
    }
    this.getFormData();
    console.log(this.$route.query.campanyIndividualName, 333)
    this.isDone = sessionStorage.getItem('orderStatus') === '2'
    if(this.$store.state.reorder == 1){
      
      if (this.$store.state.reorderletter_of_wishes_form > 0) {
        getOrdersForms(this.$store.state.reorderletter_of_wishes_form, { type: "Letter Of Wishes" }).then(res => {
          console.log(res, "獲取lett數據");
        res.signature = ""
          this.formData = res;

          this.sig1 = false
          this.xyz = "1"
        }
        );
      }

  }
  },
  methods: {
    // 清空画布
    handleReset(val) {
      this.formData.signature = ''
      console.log(this.$refs[val], 111)
      this.$refs[val].reset(); //清空画布
      this.sig1 = true
      this.xyz = ""
      document.getElementById("3reset").focus()
      // if (val == 'signature') {

      // }
    },
    handleGenerate(val) {
      // if(!this.$store.state.isOverseaSignature){
      console.log(this.$refs[val].generate().PromiseState)
      var that = this;
      this.$refs[val]
        .generate()
        .then((res) => {
          uploadAutograph({
            image: res,
            path: "",
          })
            .then((res) => {
              console.log(res)
              that.formData[val] = res.path;
              that.$toast({
                type: "success",
                message: "Signature \n success",
              });
            })
            .catch((err) => {
              that.$toast({
                type: "fail",
                message: "Uploading\n picture\n failed",
              });
            });
          // this.$refs['trustor_signature2'].resultImg=that.formData[val2][val]
          // console.log(this.$refs[val].resultImg)
        })
        .catch((err) => {
          //  没有签名，点击生成图片时调用
          that.$toast({
            type: "fail",
            message: err + " No signature！",
          });
          alert(err); // 画布没有签字时会执行这里 'Not Signned'
        });

      // }
      // else{
      //   alert("Settlor Signature should be added by the Settlor from the shared link.")
      //   this.$refs["signature"].reset(); 
      // }
    },
    // 獲取表單數據
    getFormData() {
      if (this.isFilled > 0) {
        getOrdersForms(this.isFilled, { type: "Letter Of Wishes" }).then(res => {
          console.log(res, "獲取lett數據");
          this.formData = res;

          this.sig1 = false
          this.xyz = "1"
        }
        );
      }
    },
    submit(form) {
      console.log(form);
      let data = JSON.parse(JSON.stringify(this.formData));
      // if (!this.formData.signature && !this.$store.state.isOverseaSignature) {
      //   this.$toast.fail("Please sign your name");
      //   return;
      // }
      if (!this.formData.signature && this.$route.query.isShare) {
        this.$toast.fail("Please sign your name");
        return;
      }
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
          if (!this.$route.query.isShare && !this.$store.state.isOverseaSignature) {
            this.$router.go(-1);
          }
        });
      } else {
        let id = null
        if (this.$store.state.isOverseaSignature) {
          id = this.$store.state.CustomerApplicationId
        } else {
          id = this.$route.query.orderId
        }
        if(id=== "" ){
    
    this.$toast({
            message: "Please submit upper forms on one by one.",
          });
   }
   else{
        letter_wishes_form(id, data)
          .then((res) => {
            console.log("-----33-3-3-3-3--3-3-3---",res);
            this.isFilled = res.letter_of_wishes_form
            this.$toast({
              type: "success",
              message: "Submitted successfully",
            });
            if (this.from == "create") {
              this.$store.commit("changePage", {
                tabbar: "/PDPAMemo",
                title: "4/5 PDPA Memo",
              });
              if (!this.$store.state.isOverseaSignature && !this.$route.query.isShare) {
                this.$router.push({
                  path:
                    "/PDPAMemo?from=create&orderId=" + this.$route.query.orderId, query: { campanyIndividualName: this.$route.query.campanyIndividualName }
                }
                );
              }

            } else {
              this.$router.go(-1);
            }
          })
          .catch((err) => { });
        }
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

/deep/ .van-field__label {
  width: 13.2rem;
}

/*手机*/
@media screen and (max-width: 768px) {
  /deep/ .van-field__label {
    width: 30rem;
  }
}
</style>
