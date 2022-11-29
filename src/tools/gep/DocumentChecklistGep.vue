<template>
  <div class="DocumentChecklist bodybox  mt-5">
    <van-form validate-first @submit="submit" :submit-on-enter="false" :scroll-to-error="true">

      <div class="minTitle">Subscriber’s Information</div>
      <van-field v-model="formData.name" name="Name" center type="text" label="Name"
        placeholder="Please enter the Name" 
        :required="true"
        :rules="[{ required: true }]"/>

      <van-field v-model="formData.nric" name="nric" center type="text" label="NRIC / Passport No."
        placeholder="Please enter the Relationship"
        :required="true"
        :rules="[{ required: true }]"/>
      <div class="minTitle">Document’s Completion Status</div>
      <van-field name="subscription_form" label="Subscription Form "  :required="true"
        :rules="[{ required: true }]" center>
        <template #input>
          <van-checkbox v-model="formData.subscription_form"></van-checkbox>
        </template>
      </van-field>

      <van-field name="kyc_form" label="KYC Form"  :required="true"
        :rules="[{ required: true }]" center>
        <template #input>
          <van-checkbox v-model="formData.kyc_form"></van-checkbox>
        </template>
      </van-field>

      <van-field name="non_disclosure_agreement"  :required="true"
        :rules="[{ required: true }]" label="Non-Disclosure Agreement" center>
        <template #input>
          <van-checkbox v-model="formData.non_disclosure_agreement"></van-checkbox>
        </template>
      </van-field>
      <van-field name="subscribers_photocopy"  :required="true"
        :rules="[{ required: true }]" label="Subscriber’s Photocopy of IC (Verified by the Agent/
Representative)
" center>
        <template #input>
          <van-checkbox v-model="formData.subscribers_photocopy"></van-checkbox>
        </template>
      </van-field>
      <van-field name="Documents" label="Documents"  >
        <template #input>
          <van-uploader v-model="subscribers_photo_file" :disabled="isDone" :after-read="afterRead" accept="*"
            :max-count="1" />
        </template>
      </van-field>
      <van-field name="proof_of_current_address"  :required="true"
        :rules="[{ required: true }]" label="Proof of Current Address (preferably through the
supply of utility bill) (Verified by the Agent /
Representative)
" center>
        <template #input>
          <van-checkbox v-model="formData.proof_of_current_address"></van-checkbox>
        </template>
      </van-field>
      <van-field name="Documents"   label="Documents">
        <template #input>
          <van-uploader v-model="proof_of_current_file" :disabled="isDone" :after-read="afterRead2" accept="*"
            :max-count="1" />
        </template>
      </van-field>
      <van-field name="source_of_wealth"  :required="true"
        :rules="[{ required: true }]" label="Source of Wealth (to provide the relevant supporting
document(s)) Verified by the Agent/ Representative –
Pay slip, EPF statement, Bank statement, Income tax
return
" center>
        <template #input>
          <van-checkbox v-model="formData.source_of_wealth"></van-checkbox>
        </template>
      </van-field>
      <van-field name="Documents"   label="Documents">
        <template #input>
          <van-uploader v-model="source_of_wealth_file" :disabled="isDone" :after-read="afterRead3" accept="*"
            :max-count="1" />
        </template>
      </van-field>
      <van-field name="source_of_fund"  :required="true"
        :rules="[{ required: true }]" label="Source of Fund (to provide the relevant supporting
document(s)) Verified by the Agent/ Representative –
Bank statement, Bank Passboo
" center>
        <template #input>
          <van-checkbox v-model="formData.source_of_fund"></van-checkbox>
        </template>
      </van-field>
      <van-field name="Documents"  label="Documents">
        <template #input>
          <van-uploader v-model="source_of_fund_file" :disabled="isDone" :after-read="afterRead4" accept="*"
            :max-count="1" />
        </template>
      </van-field>
      <van-field name="evidence_of_bank_tranfer"  :required="true"
        :rules="[{ required: true }]" label="Evidence of Bank Transfer by Cheque/ TT
[Note: No Cash (i.e. no cash, no ATM deposit, no
deposit at bank counter)]
" center>
        <template #input>
          <van-checkbox v-model="formData.evidence_of_bank_tranfer"></van-checkbox>
        </template>
      </van-field>
      <van-field name="Documents"   label="Documents">
        <template #input>
          <van-uploader v-model="evidence_of_bank_file" :disabled="isDone" :after-read="afterRead5" accept="*"
            :max-count="1" />
        </template>
      </van-field>



      <van-field name="preference_shares_suscription" label="Preference Shares Subscription Agreement:
a) Signed on execution page;
b) 1 original copy; and Un-dated
" center>
        <template #input>
          <van-checkbox v-model="formData.preference_shares_suscription"></van-checkbox>
        </template>
      </van-field>

      <van-field name="thirdparty_fund_declartion" label="Third Party Fund Declaration Form (if applicable)
" center>
        <template #input>
          <van-checkbox v-model="formData.thirdparty_fund_declartion"></van-checkbox>
        </template>
      </van-field>


      <div class="minTitle">
        Note: Verification means to sign, state name and date

      </div>
      <div class="tl">Signature</div>
      <vue-esign ref="signature" v-show="!formData.signature" :width="1200" :height="300" :isCrop="false" :lineWidth="6"
        lineColor="#000000" bgColor.sync="#fff" style="border: 1px solid #666" />
      <van-image v-show="formData.signature" class="esignImgbox" width="100%" height="20%" :src="formData.signature" />
      <div class="tr">
        <div class="esignBtn" @click="handleReset('signature')" v-if="!isDone">Clear</div>
        <div class="esignBtn" @click="handleGenerate('signature')" v-if="!isDone">Confirm</div>
      </div>


      <div class="minTitle">
        Agent/Representative of DDG INTERNATIONAL BERHAD (Company No. 1423557-M)
      </div>





      <van-field v-model="formData.agent_name" name="agent_name" center type="text" label="Name"
        placeholder="Please enter the Name"   :required="true"
        :rules="[{ required: true }]"/>

      <van-field v-model="formData.agent_nric" name="agent_nric" center type="text" label="NRIC / Passport No."
        placeholder="Please enter the NRIC / Passport No."  :required="true"
        :rules="[{ required: true }]" />

      <van-field v-model="formData.agent_date" name="agent_date" center type="text" label="Date"
        placeholder="Please enter the Date"  :required="true"
        :rules="[{ required: true }]"/>





      <van-button v-if="!isDone" round block type="info" native-type="submit" color="#7C655D">
        <span v-if="!this.$route.query.isShare">save</span>
        <span v-else>submit</span>
      </van-button>

    </van-form>
    <van-button round block type="info" color="#7C655D" style="margin-top:5rem;" @click="$emit('onSelect')"
      v-if="$store.state.isOverseaSignature">
      Copy Link for Sharing with Subscriber
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
import moment from 'moment'
import { uploadAutograph, uploadFile } from "@/api/util";
import { getOrdersForms, putOrdersForms, document_check_list_formGep } from "@/api/order";
export default {
  props: ['orderDataInfo'],
  data() {
    return {
      formData: {
        name:this.$store.state.campanyIndividualName1Gep,
        nric: this.$store.state.nric_pass_roc_noGep,
        subscription_form: false,
        kyc_form: false,
        non_disclosure_agreement: false,
        subscribers_photocopy: false,
        source_of_wealth: false,
        source_of_fund: false,
        evidence_of_bank_tranfer: false,
        preference_shares_suscription: false,
        proof_of_current_address: false,
        thirdparty_fund_declartion: false,
        subscribers_photo_file: '',
        proof_of_current_file: '',
        source_of_wealth_file: '',
        source_of_fund_file: '',
        evidence_of_bank_file: '',
        signature: '',
        agent_name:this.$store.state.campanyIndividualName1Gep,
        agent_nric: this.$store.state.nric_pass_roc_noGep,
        agent_date: moment(new Date()).format('DD-MM-YYYY'),
      },
      // isShowPicker: false, // 控制日期彈框
      currentContent: new Date(), // 日期彈框顯示當前日期
      whichDate: "", // 區分是哪個日期觸發彈框
      from: "", // 記錄哪個頁面進入的
      isFilled: "", // 表單id
      minDate: new Date(1900, 0, 1),
      subscribers_photo_file: [],
      proof_of_current_file: [],
      source_of_wealth_file: [],
      source_of_fund_file: [],
      evidence_of_bank_file:[],
      isDone: false, // 訂單是否已確認
      pattern: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,// 正则验证时间
    };
  },
  mounted() {
    console.log(Number(false), 222222222);
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
      this.isFilled = this.$route.query.gepDocumentCheckListForm
    }
    this.getFormData();
    this.isDone = sessionStorage.getItem('orderStatus') === '2'
  },
  methods: {
    // 如果已填 獲取數據
    getFormData() {
      if (this.isFilled > 0) {
        getOrdersForms(this.isFilled, { type: "GEP Document Check List Form" })
          .then((res) => {
            console.log(">>..>>", res);
            console.log("........res.evidence_of_bank_file....",res.evidence_of_bank_file)
       
            this.formData = res
            this.formData.application_form = Number(this.formData.application_form)
            this.formData.compliance_qestionnaire = Number(this.formData.compliance_qestionnaire)
            this.formData.settlor_photocopy = Number(this.formData.settlor_photocopy)
            this.formData.letter_of_wishes = Number(this.formData.letter_of_wishes)
            this.formData.current_address = Number(this.formData.current_address)
            this.formData.source_of_fund = Number(this.formData.source_of_fund)
            this.formData.source_of_wealth = Number(this.formData.source_of_wealth)
            this.formData.pdpa = Number(this.formData.pdpa)
            this.formData.third_party_declaration = Number(this.formData.third_party_declaration)
            this.formData.trust_deed = Number(this.formData.trust_deed)
            this.formData.bank = Number(this.formData.bank)
            this.evidence_of_bank_file.push({ url: res.evidence_of_bank_file })
            this.source_of_fund_file.push({ url: res.source_of_fund_file })
            this.source_of_wealth_file.push({ url: res.source_of_wealth_file })
            this.proof_of_current_file.push({ url: res.proof_of_current_file })
            // this.formData.evidence_of_bank_file = res.evidence_of_bank_file
            

            this.subscribers_photo_file.push({ url: res.subscribers_photo_file })
     

            
          

            
            console.log("........6666666666666666666....")
     
     
          })
          .catch((err) => { });

        
      }

    },
    submit(form) {
      console.log(form,".....1111111.......");

      if (!this.formData.signature) {
        this.$toast.fail("Please sign your name");
        return;
      }
      let data = JSON.parse(JSON.stringify(this.formData));
 console.log(data,".......22222............")
      data.subscription_form = Number(data.subscription_form)
      data.kyc_form = Number(data.kyc_form)
      data.non_disclosure_agreement = Number(data.non_disclosure_agreement)
      data.subscribers_photocopy = Number(data.subscribers_photocopy)
      data.proof_of_current_address = Number(data.proof_of_current_address)
      data.source_of_wealth = Number(data.source_of_wealth)
      data.source_of_fund = Number(data.source_of_fund)
      data.evidence_of_bank_tranfer = Number(data.evidence_of_bank_tranfer)
      data.preference_shares_suscription = Number(data.preference_shares_suscription)
      data.thirdparty_fund_declartion = Number(data.thirdparty_fund_declartion)
   

      console.log(data,".......3333333............")
      // if (this.from == "create") {
      //   data.is_done = 1
      // }
      // console.log( data.is_done,11111)
      if (this.isFilled > 0) {
        // 修改
        putOrdersForms(this.isFilled, {
          type: "GEP Document Check List Form",
          data: JSON.stringify(data),
        }).then((res) => {
          console.log(res, "修改Document Checklist成功");
          this.$toast({
            type: "success",
            message: "Modify the success",
          });
          if (!this.$route.query.isShare) {
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
        document_check_list_formGep(id, data)
          .then((res) => {
            console.log(res);
            this.$toast({
              type: "success",
              message: "Submitted \n successfully",
            });
            if (this.from == "create") {
              this.$store.commit("changePage", {
                tabbar: "/SelectProduct",
                title: "Select Product",
              });
              if (!this.$store.state.isOverseaSignature && !this.$route.query.isShare) {
                this.$router.push("/SelectProduct");
              }

            } else {
              this.$router.go(-1);
            }
          })
          .catch((err) => { });
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
              console.log(res, 111111);
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
      console.log(file, '上傳的文件');
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
        this.$toast.success('Success')
        this.formData.subscribers_photo_file = res.file
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
