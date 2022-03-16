<template>
  <div class="DocumentChecklist bodybox">
    <van-form
      validate-first
      @submit="submit"
      :submit-on-enter="false"
      :scroll-to-error="true"
    >
      <div class="minTitle">
        DOCUMENT CHECKLIST AND CONFIRMATION FOR HANDOVER TO THE TRUSTEE
      </div>
      <div class="minTitle">Settlor’s Information</div>
      <van-field
        name="name"
        label="Name"
        center
        v-model="formData.name"
        :rules="[{ required: true }]"
      >
        <!-- <template #input>
          <van-checkbox v-model="formData.name"></van-checkbox>
        </template> -->
      </van-field>
      <van-field
        name="nric"
        label="NRIC/Passport No"
        center
        v-model="formData.nric"
        :rules="[{ required: true }]"
      >
        <!-- <template #input>
          <van-checkbox v-model="formData.nric"></van-checkbox>
        </template> -->
      </van-field>
      <div class="minTitle">Documents Completion Status</div>
      <van-field
        name="application_form"
        label="Completed Cash Trust application form"
        center
      >
        <template #input>
          <van-checkbox v-model="formData.application_form"></van-checkbox>
        </template>
      </van-field>
      <van-field
        name="compliance_qestionnaire"
        label="Completed and signed Compliance Questionnaire as provided by AITB: a) AITB-AMLA 2(A)"
        center
      >
        <template #input>
          <van-checkbox v-model="formData.compliance_qestionnaire"></van-checkbox>
        </template>
      </van-field>
      <van-field
        name="settlor_photocopy"
        label="Settlor’s Photocopy of IC (Verified by the Agent/Representative)"
        center
      >
        <template #input>
          <van-checkbox v-model="formData.settlor_photocopy"></van-checkbox>
        </template>
      </van-field>
      <van-field name="Documents" label="Documents">
        <template #input>
          <van-uploader v-model="settlor_photo_file" :after-read="afterRead" accept="*" :max-count="1" />
        </template>
      </van-field>
      <van-field
        name="letter_of_wishes"
        label="Signed Letter of Wishes (Un-dated)"
        center
      >
        <template #input>
          <van-checkbox v-model="formData.letter_of_wishes"></van-checkbox>
        </template>
      </van-field>
      <van-field
        name="current_address"
        label="Proof of current address (preferably through the supply of utility bill) (Verified by the Agent / Representative)"
        center
      >
        <template #input>
          <van-checkbox v-model="formData.current_address"></van-checkbox>
        </template>
      </van-field>
      <van-field name="Documents" label="Documents">
        <template #input>
          <van-uploader v-model="proof_of_current_file" :after-read="afterRead2" accept="*" :max-count="1" />
        </template>
      </van-field>
      <van-field
        name="source_of_wealth"
        label="Source of Wealth (to provide the relevant supporting document(s)) Verified by the Agent/ Representative – Pay slip, EPF statement, Bank statement, Income tax return"
        center
      >
        <template #input>
          <van-checkbox v-model="formData.source_of_wealth"></van-checkbox>
        </template>
      </van-field>
      <van-field name="Documents" label="Documents">
        <template #input>
          <van-uploader v-model="source_of_wealth_file" :after-read="afterRead3" accept="*" :max-count="1" />
        </template>
      </van-field>
      <van-field
        name="source_of_fund"
        label="Source of Fund (to provide the relevant supporting document(s)) Verified by the Agent/ Representative – Pay slip, EPF statement, Bank statement, Income tax return"
        center
      >
        <template #input>
          <van-checkbox v-model="formData.source_of_fund"></van-checkbox>
        </template>
      </van-field>
      <van-field name="Documents" label="Documents">
        <template #input>
          <van-uploader v-model="source_of_fund_file" :after-read="afterRead4" accept="*" :max-count="1" />
        </template>
      </van-field>
      <van-field
        name="pdpa"
        label="Signed dual language personal data protection act (PDPA) document"
        center
      >
        <template #input>
          <van-checkbox v-model="formData.pdpa"></van-checkbox>
        </template>
      </van-field>
      <van-field
        name="bank"
        label="Evidence of Bank Transfer by Cheque/ TT [Note: No Cash (i.e. no cash, no ATM deposit, no deposit at bank counter)]"
        center
      >
        <template #input>
          <van-checkbox v-model="formData.bank"></van-checkbox>
        </template>
      </van-field>
      <van-field name="Documents" label="Documents">
        <template #input>
          <van-uploader v-model="evidence_of_bank_file" :after-read="afterRead5" accept="*" :max-count="1" />
        </template>
      </van-field>
      <van-field
        name="trust_deed"
        label="Trust deed: a) Signed on execution page; b) Complete schedule 1 & 2; c) 1 original copy; and d) Un-dated"
        center
      >
        <template #input>
          <van-checkbox v-model="formData.trust_deed"></van-checkbox>
        </template>
      </van-field>
      <van-field
        name="third_party_declaration"
        label="Third Party Fund Declaration Form (if applicable)"
        center
      >
        <template #input>
          <van-checkbox v-model="formData.third_party_declaration"></van-checkbox>
        </template>
      </van-field>
      <div class="minTitle">
        Note: Verification means to sign, state name and date
      </div>
      <div class="tl">Signature</div>
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
      <div class="minTitle">
        Agent/Representative of DDG INTERNATIONAL BERHAD (Company No. 1423557-M)
      </div>
      <van-field
        v-model="formData.agent_name"
        name="agent_name"
        center
        :required="true"
        type="text"
        label="Name"
        placeholder="Please enter the Name"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.agent_nric"
        name="agent_nric"
        center
        :required="true"
        type="text"
        label="NRIC/Passport No"
        placeholder="Please enter the NRIC/Passport No"
        :rules="[
          { required: true },
        ]"
      />
      <van-field
        v-model="formData.agent_date"
        name="agent_date"
        center
        :required="true"
        label="Date"
        placeholder="Please enter DD-MM-YYYY"
        :rules="[{ required: true,pattern, message: 'Please enter the DATE' }]"
      />
      <van-button v-if="!isDone" round block type="info" native-type="submit" color="#7C655D">
        <span v-if="!this.$route.query.isShare">save</span>
        <span v-else>submit</span>
      </van-button>

    </van-form>
    <van-button  round block type="info" color="#7C655D" style="margin-top:5rem;" @click="$emit('onSelect')" v-if="$store.state.isOverseaSignature">
       Copy Link for Sharing with Settlor
    </van-button>
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
import { uploadAutograph, uploadFile } from "@/api/util";
import { getOrdersForms, putOrdersForms, document_check_list_form } from "@/api/order";
export default {
  props:['orderDataInfo'],
  data() {
    return {
      formData: {
        name: '',
        nric: '',
        application_form: false,
        compliance_qestionnaire: false,
        settlor_photocopy: false,
        letter_of_wishes: false,
        current_address: false,
        source_of_wealth: false,
        pdpa: false,
        bank: false,
        trust_deed: false,
        third_party_declaration: false,
        signature: '',
        agent_name: '',
        agent_nric: '',
        agent_date: '',
        // 12.30新
        source_of_fund: false,
        settlor_photo_file: '',
        proof_of_current_file: '',
        source_of_wealth_file: '',
        source_of_fund_file: '',
        evidence_of_bank_file: '',
      },
      // isShowPicker: false, // 控制日期彈框
      currentContent: new Date(), // 日期彈框顯示當前日期
      whichDate: "", // 區分是哪個日期觸發彈框
      from: "", // 記錄哪個頁面進入的
      isFilled: "", // 表單id
      minDate: new Date(1900, 0, 1),
      settlor_photo_file: [],
      proof_of_current_file: [],
      source_of_wealth_file: [],
      source_of_fund_file: [],
      evidence_of_bank_file: [],
      isDone: false, // 訂單是否已確認
      pattern: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,// 正则验证时间
    };
  },
  mounted() {
    console.log(Number(false) ,222222222);
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
      this.isFilled=this.$route.query.documentCheckListForm
    }
    this.getFormData();
  },
  methods: {
    // 如果已填 獲取數據
    getFormData() {
      if (this.isFilled > 0) {
        getOrdersForms(this.isFilled, { type: "Document Checklist" })
          .then((res) => {
            console.log(">>..>>",res);
            this.formData=res
            this.formData.application_form=Number(this.formData.application_form)
            this.formData.compliance_qestionnaire=Number(this.formData.compliance_qestionnaire)
            this.formData.settlor_photocopy=Number(this.formData.settlor_photocopy)
            this.formData.letter_of_wishes=Number(this.formData.letter_of_wishes)
            this.formData.current_address=Number(this.formData.current_address)
            this.formData.source_of_fund=Number(this.formData.source_of_fund)
            this.formData.source_of_wealth=Number(this.formData.source_of_wealth)
            this.formData.pdpa=Number(this.formData.pdpa)
            this.formData.third_party_declaration=Number(this.formData.third_party_declaration)
            this.formData.trust_deed=Number(this.formData.trust_deed)
            this.formData.bank=Number(this.formData.bank)
            this.settlor_photo_file.push({url: res.settlor_photo_file})
            this.proof_of_current_file.push({url: res.proof_of_current_file})
            this.source_of_wealth_file.push({url: res.source_of_wealth_file})
            this.source_of_fund_file.push({url: res.source_of_fund_file})
            this.evidence_of_bank_file.push({url: res.evidence_of_bank_file})
          })
          .catch((err) => {});
      }

    },
    submit(form) {
      console.log(form,11111);

      if (!this.formData.signature&&!this.$store.state.isOverseaSignature) {
        this.$toast.fail("Please sign your name");
        return;
      }
      let data = JSON.parse(JSON.stringify(this.formData));
      data.name = (data.name)+''
      data.nric = (data.nric)+''
      data.application_form = Number(data.application_form)
      data.compliance_qestionnaire = Number(data.compliance_qestionnaire)
      data.settlor_photocopy = Number(data.settlor_photocopy)
      data.letter_of_wishes = Number(data.letter_of_wishes)
      data.current_address = Number(data.current_address)
      data.source_of_wealth = Number(data.source_of_wealth)
      data.pdpa = Number(data.pdpa)
      data.bank = Number(data.bank)
      data.trust_deed = Number(data.trust_deed)
      data.third_party_declaration = Number(data.third_party_declaration)
      data.source_of_fund = Number(data.source_of_fund)

      // console.log(data,11111)
      // if (this.from == "create") {
      //   data.is_done = 1
      // }
      // console.log( data.is_done,11111)
      if (this.isFilled > 0) {
        // 修改
        putOrdersForms(this.isFilled, {
          type: "Document Checklist",
          data: JSON.stringify(data),
        }).then((res) => {
          console.log(res, "修改Document Checklist成功");
          this.$toast({
            type: "success",
            message: "Modify the success",
          });
          if(!this.$route.query.isShare){
            this.$router.go(-1);
          }
        });
      } else {
        let id=null
        if(this.$store.state.isOverseaSignature){
          id=this.$store.state.CustomerApplicationId
        }else{
          id=this.$route.query.orderId
        }
        document_check_list_form(id, data)
          .then((res) => {
            console.log(res);
            this.$toast({
              type: "success",
              message: "Submitted \n successfully",
            });
            if (this.from == "create") {
              this.$store.commit("changePage", {
                tabbar: "/CreateOrder",
                title: "Choose",
              });
              if(!this.$store.state.isOverseaSignature&&!this.$route.query.isShare){
                this.$router.push("/Choose");
              }

            } else {
              this.$router.go(-1);
            }
          })
          .catch((err) => {});
      }
      this.$emit('getOrderDetail')
    },
    // 清空画布
    handleReset(val) {

      // this.$refs[val].resultImg=this.formData.signature
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
              console.log(res,111111);
              this.formData[val] = res.path;
              // console.log(res.path)
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
/*    onShowPicker(val) {
      this.isShowPicker = true;
      this.whichDate = val;
    },*/
 /*   onHiddenPicker() {
      this.currentContent = new Data();
      this.isShowPicker = false;
    },*/
/*    onConfirmPicker() {
      this.formData[this.whichDate] = this.formatDateYMD(this.currentContent);
      this.isShowPicker = false;
    },*/
    // 出來日期格式ymd
 /*   formatDateYMD(value) {
      if (!value) {
        return "";
      } else {
        var date = new Date(value);
        var Y = date.getFullYear() + "-";
        var M = date.getMonth() + 1 + "-";
        var D = date.getDate();
        return Y + M + D;
      }
    },*/
    // 文件上傳
    afterRead(file) {
      console.log(file,'上傳的文件');
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
        this.$toast.success('Success')
        this.formData.settlor_photo_file = res.file
      })
    },
    afterRead2(file) {
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
        this.$toast.success('Success')
        this.formData.proof_of_current_file = res.file
      })
    },
    afterRead3(file) {
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
        this.$toast.success('Success')
        this.formData.source_of_wealth_file = res.file
      })
    },
    afterRead4(file) {
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
        this.$toast.success('Success')
        this.formData.source_of_fund_file = res.file
      })
    },
    afterRead5(file) {
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
        this.$toast.success('Success')
        this.formData.evidence_of_bank_file = res.file
      })
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
    width: 30rem;
  }
}
/deep/ .van-radio__icon,
/deep/ .van-radio__icon .van-icon,
/deep/ .van-checkbox__icon,
/deep/ .van-checkbox__icon .van-icon {
  font-size: 18px;
  height: 20px;
  line-height: 20px;
}
</style>
