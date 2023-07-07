<template>
  <div class="LetterOfWishes bodybox">
    <van-form validate-first @submit="submit" :submit-on-enter="false" :scroll-to-error="true">
      <!-- @click="onShowPicker('date')" -->
      <!-- <van-field v-model="toDay" name="date" autocomplete="off" center label="Date :" disabled placeholder="Date" /> -->
      <van-field v-model="formData.date" name="date" autocomplete="off" center 
      :rules="[{ required: true,pattern, message: 'Please enter the DATE' }]"
      label="Date: DD-MM-YYYY"
      :required="true"
      placeholder="Please enter DD-MM-YYYY" />
      <br>
      <div class="minTitle">ASIA INTERNATIONAL TRUST BERHAD</div>
      <div class="minTitle1">Suite 8.01, Level 8, Menara Binjai </div>
      <div class="minTitle1">Jalan Binjai</div>
      <div class="minTitle1">50450, Kuala Lumpur </div>
      <div class="minTitle1">Malaysia</div>
      <div class="minTitle">BY HAND / EMAIL :</div>
      <div class="minTitle1">aigt@aitrust.com.my</div>
      <div class="minTitle underLine">
        Attn: Mr. Matthew Ngoh – Chief Executive Officer
      </div>
      <br>
      <div class="minTitle1">Dear Sir / Madam,</div>
      <br>
      <div class="minTitle underLine">LETTER OF WISHES – “AI AMANAH GENERATION TRUST”</div>
      <br>
      <div class="minTitle1">
        I/We refer to the AI Trust Deed entered into between you (as the Trustee) and myself/ourselves (as the Settlor) to establish a trust (“AI Trust Deed”), known as “AI Amanah Generation Trust”. The          definitions used in the AI Trust Deed are adopted herein
      </div>
      
      <div class="minTitle1">
        With reference to Clause 5.2 of the AI Trust Deed, I/We recommend you to invest the entirety of the Islamic Trust Asset into regulated or unregulated Shariah compliant investment whether it being public or private markets.The Authorised Investment is projected to have an annual return up to seven percent per annum (7% p.a.) of the Islamic Trust Asset.
      </div>
      
      <div class="minTitle1">
        Further, I/We am/are fully aware of the arrangement and understand that the trust cannot be terminated within the first one (1) year from the date of the AI Trust Deed. I/We am/are also fully aware and understand that the trust is automatically continue after the second(2nd) year unless there is any request for termination of the AI Trust Deed subject to approval from the Trustee.
      </div>

      <div class="minTitle1">
        I/We hereby agree and acknowledge that the Islamic Trust Asset referred to in Schedule 2 of the AI Trust Deed shall be combined with the other Settlors’ Islamic Trust Asset to form a Trust Fund for Authorised Investment purposes on behalf of the Settlors by the Trustee. Such investments shall be for the benefit of the Trust and shall be in the exercise of the duty and power of investment of the Trustee of the Islamic Trust Asset.
      </div>
      
      <div class="minTitle1">
        With reference to Clause 7 and Schedule 3 of the AI Trust Deed, the Islamic Trust Asset and/or projected dividend and/or accumulated income shall be distributed when it is due and payable, and in the following descending order of priority: -
      </div>
     
      <div class="minTitle1">
         1)	to me/us as the Settlor during my/our lifetime and thereafter;
      </div>
      <div class="minTitle1">
        2) to my/our named Beneficiary and if none, to the Settlor as the beneficiary.
      </div>
      <br>
      <div class="minTitle1">
        Lastly, in the event that the Islamic Trust Asset is invested in Shariah compliant investment whether it being Shariah Public Market such as listed companies in Bursa Malaysia and/ or other recognized stock exchange or listed or non-listed regulated business and/ or Shariah Private Market such as Small Medium Enterprise (SME) or listed or non- listed regulated business, I/We hereby agree and acknowledge that at the expiry of the Tenure of Islamic Trust or the termination of the Islamic Trust, the Trustee shall have the right to convert and/or substitute for part or all of the Islamic Trust Asset contained within the AI Trust Deed, with any other different type of assets in the said Shariah Public Market or Shariah Private Market wherein such assets shall have the same or equivalent value or equal fair market value at the time of such conversion and/or substitution. Upon the said conversion and/ or substitution, the Trustee is hereby fully discharge of its obligation to the Settlor. 
      </div>
      <br>
      <div class="minTitle">
        Please note that this letter is merely my/our wishes and it does not bind or affect the powers vested in the Trustee.
      </div>
      <br>
      <div class="minTitle1">Yours faithfully</div>
      <vue-esign ref="signature" style="border: 1px solid #666" :width="800" :height="300" :isCrop="false" :lineWidth="6"
        lineColor="#000000" bgColor.sync="#fff"
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
      <van-field v-model="formData.client_name" name="client_name" id="3reset" center autocomplete="off" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" :required="true" type="text" label="Settlor Name"
        placeholder="Please enter the Settlor Name" :rules="[{ required: true }]" />
      <van-field v-model="formData.passport_no" name="passport_no" center autocomplete="off" :required="true" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="NRIC/Passport No"
        placeholder="Please enter the NRIC/Passport No" :rules="[
          { required: true },
        ]" />
      <!-- 提交 -->
      <van-button v-click-outside="outSide" :disabled="selectData" v-if="!isDone" round block type="info" native-type="submit" color="#7C655D">
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
  letter_wishes_formAagt,
  getOrdersForms,
  putOrdersForms,
  getOrderDetail
} from "@/api/order";
import { uploadAutograph } from "@/api/util";
import ClickOutside from 'vue-click-outside'
export default {
  props: ['orderDataInfo'],
  data() {
    return {
      selectData:false,
      formData: {
        date:  moment(new Date()).format('DD-MM-YYYY'),
        client_name: this.$store.state.campanyIndividualName1Aagt,
        passport_no: this.$store.state.passport_noAagt,
        signature: '',
      },
      pattern: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,// 正则验证时间
      toDay: moment(new Date()).format('DD-MM-YYYY'),
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
    console.log("..3rd....................... this.$store.state.campanyIndividualName1Aagt..", this.$store.state.campanyIndividualName1Aagt)
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
      this.isFilled = this.$route.query.AagtLetterOfWishesForm
    }
    this.getFormData();
    //console.log(this.$route.query.campanyIndividualName, 333)
    this.isDone = sessionStorage.getItem('orderStatus') === '2'


    let id = null
    if (this.$store.state.isOverseaSignature) {
      id = this.$store.state.CustomerApplicationId
    } else {
      id = this.$route.query.orderId
    }
    console.log("--------www-----3333-id--", id)
    console.log("--------www-----3333-this.isFilled--", this.isFilled)

    if ((this.isFilled == 0 || this.isFilled == undefined) && id > 0 && this.$store.state.editStatus == true) {

      getOrderDetail(id)
        .then((res) => {
          console.log(">>>>>>>666>>>>>>>", res);

          getOrdersForms(res.AagtApplicationForm, { type: "AAGT Application Form" })
            .then((res) => {
              console.log(res, 'shabin');
              console.log(res, "--------33333333333---*****---3333333333333333333333333---");




              this.formData.passport_no = res.passport_no
              this.formData.client_name = res.name


            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }





    if (this.$store.state.reorder == 1) {

      if (this.$store.state.reorderletter_of_wishes_formAagt > 0) {
        getOrdersForms(this.$store.state.reorderletter_of_wishes_formAagt, { type: "AAGT Letter of Wishes Form" }).then(res => {
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
  directives: {
    ClickOutside
  },
  methods: {

  inSide(){
      this.selectData = true
    },
    outSide(){
    //  alert("vvh")
this.selectData = false
    },
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
      // if (this.$store.state.isOverseaSignature ==false && this.$store.state.isOverseaSignatureRemote == false) {
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
                that.formData.signature = res.path;
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
      // else {
      //   alert("Settlor Signature should be added by the Settlor from the shared link.")
      //   this.$refs["signature"].reset();
      // }
    },
    // 獲取表單數據
    getFormData() {
      if (this.isFilled > 0) {
        getOrdersForms(this.isFilled, { type: "AAGT Letter of Wishes Form" }).then(res => {
          console.log(res, "獲取lett數據");
          this.formData = res;

          this.sig1 = false
          this.xyz = "1"
        }
        );
      }
    },
    submit(form) {
      this.selectData = true
      console.log(form);
      let data = JSON.parse(JSON.stringify(this.formData));
      // if (!this.formData.signature && this.$store.state.isOverseaSignature == false && this.$store.state.isOverseaSignatureRemote == false) {
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
          type: "AAGT Letter of Wishes Form",
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
        letter_wishes_formAagt(id, data)
          .then((res) => {
            console.log("-----33-3-3-3-3--3-3-3---", res);
            this.isFilled = res.AagtLetterOfWishesForm
            this.$toast({
              type: "success",
              message: "Submitted successfully",
            });
            if (this.from == "create") {
              this.$store.commit("changePage", {
                tabbar: "/PdpaAagt",
                title: "4/5 PDPA Memo",
              });
              if (!this.$store.state.isOverseaSignature && !this.$route.query.isShare) {
                this.$router.push({
                  path:
                    "/PdpaAagt?from=create&orderId=" + this.$route.query.orderId, query: { campanyIndividualName: this.$route.query.campanyIndividualName }
                }
                );
              }

            } else {
              this.$router.go(-1);
            }
          })
          .catch((err) => { 

          });
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

.minTitle1 {

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
.underLine {
  text-decoration: underline;
}
</style>
