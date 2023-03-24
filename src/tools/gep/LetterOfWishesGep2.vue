<template>
  <div class="DocumentChecklist bodybox">
    
    <van-form
      validate-first
      @submit="submit"
      :submit-on-enter="false"
      :scroll-to-error="true"
    >
    <div class="minTitle">Applicant’s Informationn</div>
      <van-field v-model="formData.name" autocomplete="off" name="name" center type="text" label="Name"
        placeholder="Please enter the Name" 
        :required="true"
        :rules="[{ required: true }]"/>

      <van-field v-model="formData.nric" autocomplete="off" name="nric" center type="text" label="NRIC / Passport No."
        placeholder="Please enter the NRIC / Passport No."
        :required="true"
        :rules="[{ required: true }]"/>


      <div class="minTitle">Document’s Completion Status</div>
      <van-field name="application_form" label="Application Form "  :required="true"
        :rules="[{ required: true }]" center>
        <template #input>
          <van-checkbox v-model="formData.application_form"></van-checkbox>
        </template>
      </van-field>

      <van-field name="pdpa_form" label="Privacy Notice and Consent "  :required="true"
        :rules="[{ required: true }]" center>
        <template #input>
          <van-checkbox v-model="formData.pdpa_form"></van-checkbox>
        </template>
      </van-field>

      
      <van-field name="applicants_photocopy"  :required="true"
        :rules="[{ required: true }]" label="Applicant’s Photocopy of IC (Verified by the Agent/ Representative)
" center>
        <template #input>
          <van-checkbox v-model="formData.applicants_photocopy"></van-checkbox>
        </template>
      </van-field>
      <van-field name="Documents" label="Documents"  >
        <template #input>
          <van-uploader v-model="applicants_photocopy_file" @click-preview="goDetail1(applicants_photocopy_file)" :disabled="isDone" :before-delete="beforeRead" :after-read="afterRead" accept="*"
            :max-count="1" />
        </template>
      </van-field>
      <van-field name="proof_of_current_address"  :required="true"
        :rules="[{ required: true }]" label="Proof of Current Address (preferably through the supply of utility bill) (Verified by the Agent / Representative)
" center>
        <template #input>
          <van-checkbox v-model="formData.proof_of_current_address"></van-checkbox>
        </template>
      </van-field>
      <van-field name="Documents"   label="Documents">
        <template #input>
          <van-uploader v-model="proof_of_address_file" @click-preview="goDetail1(proof_of_address_file)" :disabled="isDone" :after-read="afterRead2" :before-delete="beforeRead2" accept="*"
            :max-count="1" />
        </template>
      </van-field>
      <van-field name="source_of_wealth"  :required="true"
        :rules="[{ required: true }]" label="Source of Wealth (to provide the relevant supporting document(s)) Verified by the Agent/ Representative – Pay slip, EPF statement, Bank statement, Income tax return 
" center>
        <template #input>
          <van-checkbox v-model="formData.source_of_wealth"></van-checkbox>
        </template>
      </van-field>
      <van-field name="Documents"   label="Documents">
        <template #input>
          <van-uploader v-model="source_of_wealth_file" @click-preview="goDetail1(source_of_wealth_file)" :disabled="isDone" :after-read="afterRead3" :before-delete="beforeRead3" accept="*"
            :max-count="1" />
        </template>
      </van-field>


      <van-field
        name="source_of_fund"
        label="Source of Fund (to provide the relevant supporting document(s)) Verified by the Agent/ Representative – Bank statement, Bank Passbook"
        center
      >
        <template #input>
          <van-checkbox v-model="formData.source_of_fund"></van-checkbox>
        </template>
      </van-field>
     
      <van-field name="Documents" label="Documents">
        <template #input v-if="this.isFilled==0 ||this.isFilled ==undefined" >
        
          <van-uploader v-model="source_of_wealth_file1x" :after-read="afterRead31x" :before-delete="beforeRead31x" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="source_of_wealth_file2x" :after-read="afterRead32x" :before-delete="beforeRead32x" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="source_of_wealth_file3x" :after-read="afterRead33x" :before-delete="beforeRead33x" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="source_of_wealth_file4x" :after-read="afterRead34x" :before-delete="beforeRead34x" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="source_of_wealth_file5x" :after-read="afterRead35x" :before-delete="beforeRead35x" accept="*" :max-count="1" :disabled="isDone"/>
         
        </template>
        <template #input v-else>
          
          <van-uploader v-model="beneficiary_photo_file1" @click-preview="goDetail1(beneficiary_photo_file1)"  :before-delete="beforeRead7"  :after-read="afterRead7" accept="*" :max-count="1" :disabled="isDone" />
          <van-uploader v-model="beneficiary_photo_file2" @click-preview="goDetail1(beneficiary_photo_file2)"  :before-delete="beforeRead8"  :after-read="afterRead8" accept="*" :max-count="1"/>
          <van-uploader v-model="beneficiary_photo_file3" @click-preview="goDetail1(beneficiary_photo_file3)"  :before-delete="beforeRead9"  :after-read="afterRead9" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="beneficiary_photo_file4" @click-preview="goDetail1(beneficiary_photo_file4)"  :before-delete="beforeRead10"  :after-read="afterRead10" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="beneficiary_photo_file5" @click-preview="goDetail1(beneficiary_photo_file5)"  :before-delete="beforeRead11"  :after-read="afterRead11" accept="*" :max-count="1" :disabled="isDone"/>
        </template>
      </van-field>




      <van-field name="evidence_of_bank_tranfer"  :required="true"
        :rules="[{ required: true }]" label="Evidence of Bank Transfer by Cheque/ TT
[Note: No Cash (i.e. no cash, no ATM deposit, no deposit at bank counter)]

" center>
        <template #input>
          <van-checkbox v-model="formData.evidence_of_bank_tranfer"></van-checkbox>
        </template>
      </van-field>
      <van-field name="Documents"   label="Documents">
        <template #input>
          <van-uploader v-model="evidence_of_bank_file" @click-preview="goDetail1(evidence_of_bank_file)" :disabled="isDone" :after-read="afterRead5"  :before-delete="beforeRead5" accept="*"
            :max-count="1" />
        </template>
      </van-field>



      <van-field name="non_disclosure_agreement" label=" Non-disclosure Agreement" center>
        <template #input>
          <van-checkbox v-model="formData.non_disclosure_agreement"></van-checkbox>
        </template>
      </van-field>

      <van-field name="Documents"   label="Documents">
        <template #input>
          <van-uploader v-model="non_disclosure_agreement_file" @click-preview="goDetail1(non_disclosure_agreement_file)" :disabled="isDone" :after-read="afterRead0"  :before-delete="beforeRead6" accept="*"
            :max-count="1" />
        </template>
      </van-field>



   


      <div class="minTitle">
        Note: Verification means to sign, state name and date 

      </div>
      <div class="tl">Signature</div>
      <vue-esign ref="signature" v-show="sig1" :width="800" :height="300" :isCrop="false" :lineWidth="6"
        lineColor="#000000" bgColor.sync="#fff" style="border: 1px solid #666" />
      <van-image v-show="!sig1" class="esignImgbox" :src="formData.signature" />
      <div class="tr">
        <div class="esignBtn" @click="handleReset('signature')" v-if="!isDone">Clear</div>
        <div class="esignBtn" @click="handleGenerate('signature')" v-if="!isDone">Confirm</div>
      </div>


      <div class="minTitle">
        Agent/Representative of DDG INTERNATIONAL BERHAD (Company No. 1423557-M)
      </div>





      <van-field v-model="formData.agent_name" autocomplete="off" name="agent_name" center type="text" label="Name"
        placeholder="Please enter the Name"   :required="true"
        :rules="[{ required: true }]"/>

      <van-field v-model="formData.agent_nric" autocomplete="off" name="agent_nric" center type="text" label="NRIC / Passport No."
        placeholder="Please enter the NRIC / Passport No."  :required="true"
        :rules="[{ required: true }]" />

      <van-field v-model="formData.agent_date" autocomplete="off" name="agent_date" center type="text" label="Date: DD-MM-YYYY"
        placeholder="Please enter the Date"  :required="true"
        :rules="[{ pattern, message: 'Please enter the DATE ' }]"
        />

      <van-button v-if="!isDone" round block type="info" native-type="submit" color="#7C655D">
        <span v-if="!this.$route.query.isShare">save</span>
        <span v-else>submit</span>
      </van-button>

    </van-form>
    <van-button  round block type="info" color="#7C655D" style="margin-top:5rem;"  @click="$emit('onSelect')" v-if="$store.state.isOverseaSignature">
       Copy Link for Sharing with Settlor
    </van-button>

  </div>
</template>

<script>
import moment from 'moment'
import { uploadAutograph, uploadFile } from "@/api/util";
import { getOrdersForms, putOrdersForms2, document_check_list_formGep2 } from "@/api/order";
export default {
  props:['orderDataInfo'],
  data() {
    return {
      formData: {

        name:this.$store.state.campanyIndividualName1Gep2,
        nric:this.$store.state.nric_pass_roc_noGep2,
        application_form:false,
        pdpa_form:false,
        applicants_photocopy:false,

        proof_of_current_address:false,
        source_of_wealth:false,
        source_of_fund:false,
        evidence_of_bank_tranfer:false,
        non_disclosure_agreement:false,
        

        applicants_photocopy_file:'',
        proof_of_address_file:'',

        source_of_wealth_file:'',
        evidence_of_bank_file:'',
        non_disclosure_agreement_file:'',
        signature:'',
        agent_name:sessionStorage.getItem("user_name"),
        agent_nric:sessionStorage.getItem("user_passportNo"),
        agent_date:moment(new Date()).format('DD-MM-YYYY'),

        source_of_fund_file:[{}]

        // name:this.$store.state.campanyIndividualName1,
        // nric:this.$store.state.passport_no,
        // application_form: false,
        // compliance_qestionnaire: false,
        // settlor_photocopy: false,
        // letter_of_wishes: false,
        // current_address: false,
        // source_of_wealth: false,
        // pdpa: false,
        // bank: false,
        // beneficiary_photocopy:false,
        // trust_deed: false,
        // third_party_declaration: false,
        // signature:'',
        // agent_name: '',
        // agent_nric: '',
        // agent_date: moment(new Date()).format('DD-MM-YYYY'),
        // // 12.30新
        // source_of_fund: false,
        // settlor_photo_file: '',
        // proof_of_current_file: '',
        // source_of_wealth_file: '',
        // source_of_fund_file: '',
        // evidence_of_bank_file: '',
        // non_disclosure_agreement_file:'',
        // beneficiary_photo_file:[{}],
        // source_of_fund_addon:[{}],
       // source_of_fund_addon1:''
        // beneficiary_photo_file1:'',
        // beneficiary_photo_file2:'',
        // beneficiary_photo_file3:'',
        // beneficiary_photo_file4:'',
        // beneficiary_photo_file5:''
      },
      sig1:true,
      applicants_photocopy_file:[],
      proof_of_address_file:[],
      beneficiary_photo_file:[{}],
      source_of_fund_addon:[{}],
      // isShowPicker: false, // 控制日期彈框
      currentContent: new Date(), // 日期彈框顯示當前日期
      whichDate: "", // 區分是哪個日期觸發彈框
      from: "", // 記錄哪個頁面進入的
      isFilled: "", // 表單id
      minDate: new Date(1900, 0, 1),
      settlor_photo_file: [],
      proof_of_current_file: [],
      source_of_wealth_file: [],
      source_of_wealth_file1: [],
      source_of_wealth_file2: [],
      source_of_wealth_file2x: [],
      source_of_wealth_file3: [],
      source_of_wealth_file3x: [],
      source_of_wealth_file4: [],
      source_of_wealth_file4x:[],
      source_of_wealth_file5: [],
      source_of_wealth_file5x: [],
      source_of_wealth_file1x: [],
      source_of_fund_file: [],
      evidence_of_bank_file: [],
      non_disclosure_agreement_file:[],
      source_of_fund_addon1: [],
      source_of_fund_addon2:[],
      source_of_fund_addon3:[],
      source_of_fund_addon4:[],
      source_of_fund_addon5:[],
      source_of_fund_addon11: [],
      source_of_fund_addon21:[],
      source_of_fund_addon31:[],
      source_of_fund_addon41:[],
      source_of_fund_addon51:[],
      beneficiary_photo_file1:[],
      beneficiary_photo_file2:[],
      beneficiary_photo_file3:[],
      beneficiary_photo_file4:[],
      beneficiary_photo_file5:[],
      qaz: [],
      qaz1: [],
      isDone: false, // 訂單是否已確認
      pattern: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,// 正则验证时间
      isDelete :false
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
      this.isFilled=this.$route.query.GepTwoDocumentCheckListForm
    }
    this.getFormData();
    this.isDone = sessionStorage.getItem('orderStatus') === '2'
    console.log("....888....88...88.8...8....",this.isFilled)
  },
  methods: {
    beforeRead31(file){
      this.source_of_wealth_file1 = []

// }
return true
// }
    },
    beforeRead(file){
      this.applicants_photocopy_file = []
      this.formData.applicants_photocopy_file = ''

// }
return true
// }
    },
    beforeRead2(file){
      this.proof_of_address_file = []
      this.formData.proof_of_address_file = ''

// }
return true
// }
    },
    beforeRead3(file){
      this.source_of_wealth_file = []
      this.formData.source_of_wealth_file = ''

// }
return true
// }
    },
    beforeRead5(file){
      this.evidence_of_bank_file = []
      this.formData.evidence_of_bank_file = ''

// }
return true
// }
    },
    beforeRead6(file){
      this.non_disclosure_agreement_file = []
      this.formData.non_disclosure_agreement_file = ''

// }
return true
// }
    },
    beforeRead31x(file){
      this.source_of_wealth_file1x = []

// }
return true
// }
    },
    beforeRead32(file){
      this.source_of_wealth_file2 = []

// }
return true
// }
    },
    beforeRead32x(file){
      this.source_of_wealth_file2x = []

// }
return true
// }
    },
    beforeRead33(file){
      this.source_of_wealth_file3 = []

// }
return true
// }
    },
    beforeRead33x(file){
      this.source_of_wealth_file3x = []

// }
return true
// }
    },
    beforeRead34(file){
      this.source_of_wealth_file4 = []

// }
return true
// }
    },
    beforeRead34x(file){
      this.source_of_wealth_file4x = []

// }
return true
// }
    },
    beforeRead35x(file){
      this.source_of_wealth_file5x = []

// }
return true
// }
    },
    beforeRead35(file){
      this.source_of_wealth_file5 = []

// }
return true
// }
    },
    beforeRead4(){
      this.isDelete = true
this.formData.source_of_fund_file= ''
this.submit()
    },
    beforeRead811(file){
    //  alert("x")
//       this.isDelete = true
// //alert("1111111111111111111")
// this.qaz1.splice(0, 1);
//delete this.qaz[0];
// console.log(".....444444........",this.qaz1)
// console.log(".....555555........",this.qaz1.length)
// this.submit()
return true
    },
    beforeRead81(){
    //  alert("x")
      this.isDelete = true
//alert("1111111111111111111")
this.qaz1.splice(0, 1);
//delete this.qaz[0];
console.log(".....444444........",this.qaz1)
console.log(".....555555........",this.qaz1.length)
this.submit()
    },
    beforeRead112(){
      this.isDelete = true
//alert("1111111111111111111")
this.qaz1.splice(4, 1);
//delete this.qaz[0];
console.log(".....444444........",this.qaz1)
console.log(".....555555........",this.qaz1.length)
this.submit()
    },
    beforeRead111(){
      this.isDelete = true
//alert("1111111111111111111")
this.qaz1.splice(3, 1);
//delete this.qaz[0];
console.log(".....444444........",this.qaz1)
console.log(".....555555........",this.qaz1.length)
this.submit()
    },
    beforeRead91(){
      this.isDelete = true
//alert("1111111111111111111")
this.qaz1.splice(1, 1);
//delete this.qaz[0];
console.log(".....444444........",this.qaz1)
console.log(".....555555........",this.qaz1.length)
this.submit()
    },
    beforeRead101(){
      this.isDelete = true
//alert("1111111111111111111")
this.qaz1.splice(2, 1);
//delete this.qaz[0];
console.log(".....444444........",this.qaz1)
console.log(".....555555........",this.qaz1.length)
this.submit()
    },
    beforeRead7(){
      this.isDelete = true
//alert("1111111111111111111")
this.qaz.splice(0, 1);
//delete this.qaz[0];
console.log(".....444444........",this.qaz)
console.log(".....555555........",this.qaz.length)
this.submit()
    },
    beforeRead8(){
      this.isDelete = true
//alert("1111111111111111111")
this.qaz.splice(1, 1);
//delete this.qaz[0];
console.log(".....444444........",this.qaz)
console.log(".....555555........",this.qaz.length)
this.submit()
    },
    beforeRead9(){
      this.isDelete = true
//alert("1111111111111111111")
this.qaz.splice(2, 1);
//delete this.qaz[0];
console.log(".....444444........",this.qaz)
console.log(".....555555........",this.qaz.length)
this.submit()
    },
    beforeRead10(){
      this.isDelete = true
//alert("1111111111111111111")
this.qaz.splice(3, 1);
//delete this.qaz[0];
console.log(".....444444........",this.qaz)
console.log(".....555555........",this.qaz.length)
this.submit()
    },
    beforeRead11(){
      this.isDelete = true
//alert("1111111111111111111")
this.qaz.splice(4, 1);
//delete this.qaz[0];
console.log(".....444444........",this.qaz)
console.log(".....555555........",this.qaz.length)
this.submit()
    },
    goDetail1(goDetail1) {
  //    alert("s")
      //    console.log("----////////--------",goDetail1[0].url.split('-'))
      var style = goDetail1[0].url.split('.').slice(-1)
      console.log("----////////--------",style)
      if(style =="pdf" || style =="pptx"){
        //alert("y")
    window.open(goDetail1[0].url)
      }
          

    },
    addBeneficiary() {
      if (this.beneficiary_photo_file.length < 5) {
        this.beneficiary_photo_file.push({});
      }
      console.log("......beneficiary_photo_file...array....",this.beneficiary_photo_file)
    },
    delBeneficiary(inx) {
      this.beneficiary_photo_file.splice(inx, 1);
    },
    // 如果已填 獲取數據
    getFormData() {
      if (this.isFilled > 0) {
        getOrdersForms(this.isFilled, { type: "GEP II Document Checklist Form" })
          .then((res) => {
            console.log(">>.666.>>",res);
            this.formData=res
            this.sig1=false
      //       data.name = (data.name)+''
      // data.nric = (data.nric)+''
      // data.application_form = Number(data.application_form)
      // data.pdpa_form = Number(data.pdpa_form)
      // data.applicants_photocopy = Number(data.applicants_photocopy)
      // data.proof_of_current_address = Number(data.proof_of_current_address)

      // data.source_of_wealth = Number(data.source_of_wealth)
      // data.source_of_fund = Number(data.source_of_fund)
      // data.evidence_of_bank_tranfer = Number(data.evidence_of_bank_tranfer)
      // data.non_disclosure_agreement = Number(data.non_disclosure_agreement)

      // data.source_of_fund_file = JSON.stringify(wsx)


            this.formData.application_form=Number(this.formData.application_form)
            this.formData.pdpa_form=Number(this.formData.pdpa_form)
            this.formData.applicants_photocopy=Number(this.formData.applicants_photocopy)
            this.formData.proof_of_current_address=Number(this.formData.proof_of_current_address)
            this.formData.source_of_wealth=Number(this.formData.source_of_wealth)
            this.formData.source_of_fund=Number(this.formData.source_of_fund)
            this.formData.evidence_of_bank_tranfer=Number(this.formData.evidence_of_bank_tranfer)
            this.formData.non_disclosure_agreement=Number(this.formData.non_disclosure_agreement)

            this.source_of_wealth_file.push({url: res.source_of_wealth_file})
            this.proof_of_address_file.push({url: res.proof_of_address_file})
            this.evidence_of_bank_file.push({url: res.evidence_of_bank_file})
            this.non_disclosure_agreement_file.push({url: res.non_disclosure_agreement_file})
            this.applicants_photocopy_file.push({url: res.applicants_photocopy_file})

            // this.settlor_photo_file.push({url: res.settlor_photo_file})

            // this.proof_of_current_file.push({url: res.proof_of_current_file})
            
            // this.source_of_wealth_file.push({url: res.source_of_wealth_file})
            // this.source_of_fund_file.push({url: res.source_of_fund_file})
            // this.evidence_of_bank_file.push({url: res.evidence_of_bank_file})
            // this.non_disclosure_agreement_file.push({url: res.non_disclosure_agreement_file})


           // this.qaz.push(res.beneficiary_photo_file)
          //  console.log(".......99999999999............",res.source_of_fund_addon.length)
          //  console.log("........888888888...........",res.beneficiary_photo_file.length)
//            for (let j = 0; j < res.source_of_fund_addon.length; j++) {

// this.qaz1.push(res.source_of_fund_addon[j])
// }
            for (let i = 0; i < res.source_of_fund_file.length; i++) {

              this.qaz.push(res.source_of_fund_file[i])
            }
if(res.source_of_fund_file.length ===1){
console.log("...1111....1111...",res.source_of_fund_file[0])
  this.beneficiary_photo_file1.push({url: res.source_of_fund_file[0]})
}
if(res.source_of_fund_file.length ===2){
  console.log("...2222....2222...",res.source_of_fund_file[1])
  this.beneficiary_photo_file1.push({url: res.source_of_fund_file[0]})
  this.beneficiary_photo_file2.push({url: res.source_of_fund_file[1]})
}
if(res.source_of_fund_file.length ===3){
  console.log("...3333....3333...",res.source_of_fund_file[2])
  this.beneficiary_photo_file1.push({url: res.source_of_fund_file[0]})
  this.beneficiary_photo_file2.push({url: res.source_of_fund_file[1]})
  this.beneficiary_photo_file3.push({url: res.source_of_fund_file[2]})
}
if(res.source_of_fund_file.length ===4){
  console.log("...44444....44444...",res.source_of_fund_file[3])
  this.beneficiary_photo_file1.push({url: res.source_of_fund_file[0]})
  this.beneficiary_photo_file2.push({url: res.source_of_fund_file[1]})
  this.beneficiary_photo_file3.push({url: res.source_of_fund_file[2]})
  this.beneficiary_photo_file4.push({url: res.source_of_fund_file[3]})
}
if(res.source_of_fund_file.length >4){
  console.log("...5555....5555...",res.source_of_fund_file[4])
  this.beneficiary_photo_file1.push({url: res.source_of_fund_file[0]})
  this.beneficiary_photo_file2.push({url: res.source_of_fund_file[1]})
  this.beneficiary_photo_file3.push({url: res.source_of_fund_file[2]})
  this.beneficiary_photo_file4.push({url: res.source_of_fund_file[3]})
  this.beneficiary_photo_file5.push({url: res.source_of_fund_file[4]})
}

        
       
// this.qaz1.push(res.source_of_fund_addon)
            // for (let j = 0; j < res.source_of_fund_addon.length; j++) {

            //   this.qaz1.push(res.source_of_fund_addon[j])
            // }
if(res.source_of_fund_addon.length ===1){
console.log("...1111....1111...",res.source_of_fund_addon[0])
  this.source_of_fund_addon1.push({url: res.source_of_fund_addon[0]})
}
if(res.source_of_fund_addon.length ===2){
  console.log("...2222....2222...",res.source_of_fund_addon[1])
  this.source_of_fund_addon1.push({url: res.source_of_fund_addon[0]})
  this.source_of_fund_addon2.push({url: res.source_of_fund_addon[1]})
}
if(res.source_of_fund_addon.length ===3){
  console.log("...3333....3333...",res.source_of_fund_addon[2])
  this.source_of_fund_addon1.push({url: res.source_of_fund_addon[0]})
  this.source_of_fund_addon2.push({url: res.source_of_fund_addon[1]})
  this.source_of_fund_addon3.push({url: res.source_of_fund_addon[2]})
}
if(res.source_of_fund_addon.length ===4){
  console.log("...44444....44444...",res.source_of_fund_addon[3])
  this.source_of_fund_addon1.push({url: res.source_of_fund_addon[0]})
  this.source_of_fund_addon2.push({url: res.source_of_fund_addon[1]})
  this.source_of_fund_addon3.push({url: res.source_of_fund_addon[2]})
  this.source_of_fund_addon4.push({url: res.source_of_fund_addon[3]})
}
if(res.source_of_fund_addon.length > 4){
  console.log("...44444....44444...",res.source_of_fund_addon[3])
  this.source_of_fund_addon1.push({url: res.source_of_fund_addon[0]})
  this.source_of_fund_addon2.push({url: res.source_of_fund_addon[1]})
  this.source_of_fund_addon3.push({url: res.source_of_fund_addon[2]})
  this.source_of_fund_addon4.push({url: res.source_of_fund_addon[3]})
  this.source_of_fund_addon5.push({url: res.source_of_fund_addon[4]})
}


      
      

          })
          .catch((err) => {});
      }

    },
    submit(form) {
      //this.afterRead31()
      console.log("AAAAAAAAAAAAAAAAAAA",typeof this.source_of_wealth_file1)
      console.log("AAAAAAAAAAAAAAAAAAA",typeof this.source_of_wealth_file2)
      console.log("AAAAAAAAAAAAAAAAAAA",typeof this.source_of_wealth_file3)
      console.log("AAAAAAAAAAAAAAAAAAA",typeof this.source_of_wealth_file4)
      console.log("AAAAAAAAAAAAAAAAAAA",typeof this.source_of_wealth_file5)
      
      console.log("...z1..",this.source_of_wealth_file1)
      console.log("...z2..",this.source_of_fund_addon21)
         console.log("...z3..",this.source_of_fund_addon31)
    
      if(this.isFilled==0 ||this.isFilled ==undefined){
//this.qaz1.push()
if(typeof this.source_of_wealth_file1 === "string"){
 // alert("1")
 this.qaz1.push(this.source_of_wealth_file1)
}
if(typeof this.source_of_wealth_file2 === "string"){
 // alert("2")
 this.qaz1.push(this.source_of_wealth_file2)
}
if(typeof this.source_of_wealth_file3 === "string"){
 // alert("1")
 this.qaz1.push(this.source_of_wealth_file3)
}
if(typeof this.source_of_wealth_file4 === "string"){
 // alert("1")
 this.qaz1.push(this.source_of_wealth_file4)
}
if(typeof this.source_of_wealth_file5 === "string"){
  this.qaz1.push(this.source_of_wealth_file5)
 // alert("1")
}

      }
      if(this.isFilled==0 ||this.isFilled ==undefined){
//this.qaz1.push()
if(typeof this.source_of_wealth_file1x === "string"){
 // alert("1")
 this.qaz.push(this.source_of_wealth_file1x)
}
if(typeof this.source_of_wealth_file2x === "string"){
 // alert("2")
 this.qaz.push(this.source_of_wealth_file2x)
}
if(typeof this.source_of_wealth_file3x === "string"){
 // alert("1")
 this.qaz.push(this.source_of_wealth_file3x)
}
if(typeof this.source_of_wealth_file4x === "string"){
 // alert("1")
 this.qaz.push(this.source_of_wealth_file4x)
}
if(typeof this.source_of_wealth_file5x === "string"){
  this.qaz.push(this.source_of_wealth_file5x)
 // alert("1")
}

      }
      console.log(form,11111);
      console.log("...aaaaaaa..",(this.qaz))
      console.log("...aaaaaaa..1",(this.qaz1))
      var wsx = {};
       this.qaz.map((val , index)=>{return wsx[index+1]=val})
       console.log(".....xxxxxxxxxxxxxxxx..gep 2...",JSON.stringify(wsx))
      
       var wsx1 = {};
       this.qaz1.map((val , index1)=>{return wsx1[index1+1]=val})
       console.log(".....xxxxxxxxxxxxxxxx..1...",JSON.stringify(wsx1))
      

      if (!this.formData.signature&&!this.$store.state.isOverseaSignature) {
        this.$toast.fail("Please sign your name");
        return;
      }
      let data = JSON.parse(JSON.stringify(this.formData));

    

    


      data.name = (data.name)+''
      data.nric = (data.nric)+''
      data.application_form = Number(data.application_form)
      data.pdpa_form = Number(data.pdpa_form)
      data.applicants_photocopy = Number(data.applicants_photocopy)
      data.proof_of_current_address = Number(data.proof_of_current_address)

      data.source_of_wealth = Number(data.source_of_wealth)
      data.source_of_fund = Number(data.source_of_fund)
      data.evidence_of_bank_tranfer = Number(data.evidence_of_bank_tranfer)
      data.non_disclosure_agreement = Number(data.non_disclosure_agreement)

      data.source_of_fund_file = this.qaz.length == 0 ?null: JSON.stringify(wsx)

    console.log(data,".................333.............")
    console.log(JSON.stringify(data),".................444.............")
    
      // if (this.from == "create") {
      //   data.is_done = 1
      // }
      // console.log( data.is_done,11111)
      if (this.isFilled > 0) {
       //  修改
        putOrdersForms2(this.isFilled, {
          type: "GEP II Document Checklist Form",
          data: JSON.stringify(data),
        }).then((res) => {
          console.log(res, "修改Document Checklist成功");
          if(this.isDelete === false){
          this.$toast({
            type: "success",
            message: "Modify the success",
         });
        }
          if(!this.$route.query.isShare && !this.$store.state.isOverseaSignature){
            if(this.isDelete === false){
              this.$router.go(-1);
            }
            else{
              this.isDelete =false
              this.beneficiary_photo_file1= []
              this.beneficiary_photo_file2= []
              this.beneficiary_photo_file3= []
              this.beneficiary_photo_file4= []
              this.beneficiary_photo_file5= []
              this.qaz=[],

              this.settlor_photo_file= [],
              this.proof_of_current_file= [],
              this.source_of_wealth_file= [],
              this.source_of_fund_file= [],
              this.evidence_of_bank_file= [],
              this.non_disclosure_agreement_file=[],
              this.source_of_fund_addon1=[],
              this.source_of_fund_addon2=[],
              this.source_of_fund_addon3=[],
              this.source_of_fund_addon4=[],
              this.source_of_fund_addon5=[],
              this.beneficiary_photo_file1=[],
              this.beneficiary_photo_file2=[],
              this.beneficiary_photo_file3=[],
              this.beneficiary_photo_file4=[],
              this.beneficiary_photo_file5=[],
              this.qaz= [],
              this.qaz1= [],
              this.beneficiary_photo_file=[{}],
              this.source_of_fund_addon=[{}],

              this.applicants_photocopy_file=[],
              this.proof_of_address_file=[],
              this.beneficiary_photo_file=[{}],
      this.source_of_fund_addon=[{}],
   
      this.settlor_photo_file=[],
      this.proof_of_current_file= [],
      this.source_of_wealth_file=[],
      this.source_of_wealth_file1= [],
      this.source_of_wealth_file2=[],
      this.source_of_wealth_file2x= [],
      this.source_of_wealth_file3=[],
      this.source_of_wealth_file3x= [],
      this.source_of_wealth_file4=[],
      this.source_of_wealth_file4x=[],
      this.source_of_wealth_file5=[],
      this.source_of_wealth_file5x= [],
      this.source_of_wealth_file1x=[],
      this.source_of_fund_file= [],
      this.evidence_of_bank_file= [],
      this.non_disclosure_agreement_file=[],
      this.source_of_fund_addon1= [],
      this.source_of_fund_addon2=[],
      this.source_of_fund_addon3=[],
      this.source_of_fund_addon4=[],
      this.source_of_fund_addon5=[],
      this.source_of_fund_addon11= [],
      this.source_of_fund_addon21=[],
      this.source_of_fund_addon31=[],
      this.source_of_fund_addon41=[],
      this.source_of_fund_addon51=[],
      this.beneficiary_photo_file1=[],
      this.beneficiary_photo_file2=[],
      this.beneficiary_photo_file3=[],
      this.beneficiary_photo_file4=[],
      this.beneficiary_photo_file5=[],
      this.qaz= [],
      this.qaz1= []

              this.getFormData()
            }
            
          }
        });
      } else {
        let id=null
        if(this.$store.state.isOverseaSignature){
          id=this.$store.state.CustomerApplicationId
        }else{
          id=this.$route.query.orderId
        }
        document_check_list_formGep2(id, data)
          .then((res) => {
            console.log("86876878697867",res);
            this.isFilled = res.GepTwoDocumentCheckListForm
            this.$toast({
              type: "success",
              message: "Submitted \n successfully",
            });
            if (this.from == "create") {
              this.$store.commit("changePage", {
                tabbar: "/SelectProduct",
                title: "SelectProduct",
              });
              if(!this.$store.state.isOverseaSignature&&!this.$route.query.isShare){
                this.$router.push("/SelectProduct");
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
      this.sig1 = true
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
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      console.log(file.file.type.split('/').slice(-1),'上傳的文件');
      
     // var style = goDetail1[0].url.split('.').slice(-1)
    //  console.log("----////////--------",style)
      if(file.file.type.split('/').slice(-1) =="pdf" || file.file.type.split('/').slice(-1) =="pptx"){
      //  alert("y")
        
     // this.settlor_photo_file.push({src: '@/assets/img/photo.png'})
   // window.open(goDetail1[0].url)
      }
          
      

      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
        this.$toast.success('Success')
        this.formData.applicants_photocopy_file = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.applicants_photocopy_file = []
      return true
      }
    },
    afterRead2(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
     // alert("d")
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
        this.$toast.success('Success')
        this.formData.proof_of_address_file = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.proof_of_address_file = []
      return true
      }
    },
    afterRead31(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      console.log("...ggggggg..1.",file)
      let data = new FormData()
      data.append('file', file.file)
      console.log("...ggggggg.2..",this.source_of_wealth_file1)
      console.log("...ggggggg.3..",file.file)
     
      uploadFile(data).then(res => {

        this.$toast.success('Success')
        this.source_of_wealth_file1 = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.source_of_wealth_file1 = []
      return true
      }
    },
    afterRead31x(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      console.log("...ggggggg..1.",file)
      let data = new FormData()
      data.append('file', file.file)
      console.log("...ggggggg.2..",this.source_of_wealth_file1)
      console.log("...ggggggg.3..",data)
     
      uploadFile(data).then(res => {

        this.$toast.success('Success')
        this.source_of_wealth_file1x = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.source_of_wealth_file1x = []
      return true
      }
    },
    afterRead32x(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      console.log("...ggggggg..1.",file)
      let data = new FormData()
      data.append('file', file.file)
      console.log("...ggggggg.2..",this.source_of_wealth_file1)
      console.log("...ggggggg.3..",file.file)
     
      uploadFile(data).then(res => {

        this.$toast.success('Success')
        this.source_of_wealth_file2x = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.source_of_wealth_file2x = []
      return true
      }
    },
    afterRead32(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      console.log("...ggggggg..1.",file)
      let data = new FormData()
      data.append('file', file.file)
      console.log("...ggggggg.2..",this.source_of_wealth_file1)
      console.log("...ggggggg.3..",file.file)
     
      uploadFile(data).then(res => {

        this.$toast.success('Success')
        this.source_of_wealth_file2 = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.source_of_wealth_file2 = []
      return true
      }
    },
    afterRead33(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      console.log("...ggggggg..1.",file)
      let data = new FormData()
      data.append('file', file.file)
      console.log("...ggggggg.2..",this.source_of_wealth_file1)
      console.log("...ggggggg.3..",file.file)
     
      uploadFile(data).then(res => {

        this.$toast.success('Success')
        this.source_of_wealth_file3 = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.source_of_wealth_file3 = []
      return true
      }
    },
    afterRead33x(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      console.log("...ggggggg..1.",file)
      let data = new FormData()
      data.append('file', file.file)
      console.log("...ggggggg.2..",this.source_of_wealth_file1)
      console.log("...ggggggg.3..",file.file)
     
      uploadFile(data).then(res => {

        this.$toast.success('Success')
        this.source_of_wealth_file3x = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.source_of_wealth_file3x = []
      return true
      }
    },
    afterRead34x(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      console.log("...ggggggg..1.",file)
      let data = new FormData()
      data.append('file', file.file)
      console.log("...ggggggg.2..",this.source_of_wealth_file1)
      console.log("...ggggggg.3..",file.file)
     
      uploadFile(data).then(res => {

        this.$toast.success('Success')
        this.source_of_wealth_file4x = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.source_of_wealth_file4x = []
      return true
      }
    },
    afterRead34(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      console.log("...ggggggg..1.",file)
      let data = new FormData()
      data.append('file', file.file)
      console.log("...ggggggg.2..",this.source_of_wealth_file1)
      console.log("...ggggggg.3..",file.file)
     
      uploadFile(data).then(res => {

        this.$toast.success('Success')
        this.source_of_wealth_file4 = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.source_of_wealth_file4 = []
      return true
      }
    },
    afterRead35(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      console.log("...ggggggg..1.",file)
      let data = new FormData()
      data.append('file', file.file)
      console.log("...ggggggg.2..",this.source_of_wealth_file1)
      console.log("...ggggggg.3..",file.file)
     
      uploadFile(data).then(res => {

        this.$toast.success('Success')
        this.source_of_wealth_file5 = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.source_of_wealth_file5 = []
      return true
      }
    },
    afterRead35x(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      console.log("...ggggggg..1.",file)
      let data = new FormData()
      data.append('file', file.file)
      console.log("...ggggggg.2..",this.source_of_wealth_file1)
      console.log("...ggggggg.3..",file.file)
     
      uploadFile(data).then(res => {

        this.$toast.success('Success')
        this.source_of_wealth_file5x = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.source_of_wealth_file5x = []
      return true
      }
    },
    afterRead3(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
        this.$toast.success('Success')
        this.formData.source_of_wealth_file = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.source_of_wealth_file = []
      return true
      }
    },
    afterRead4(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
        this.$toast.success('Success')
        this.formData.source_of_fund_file = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.source_of_fund_file = []
      return true
      }
    },
    afterRead5(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
        this.$toast.success('Success')
        this.formData.evidence_of_bank_file = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.evidence_of_bank_file = []
      return true
      }
    },
    afterRead0(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
        this.$toast.success('Success')
        this.formData.non_disclosure_agreement_file = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.non_disclosure_agreement_file = []
      return true
      }
    },
    afterRead6(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
        this.$toast.success('Success')
      console.log("....343434....",res.file)
      this.qaz.push(res.file)
      })
      console.log("...676767.....",this.qaz)
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
 // this.evidence_of_bank_file = []
 // this.non_disclosure_agreement_file = []
      return true
      }
    },
    afterRead7(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
        this.$toast.success('Success')
        console.log("....bbbbbbbbbb....",res.file)
         this.qaz.push(res.file)
        this.beneficiary_photo_file1 = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.beneficiary_photo_file1 = []
      return true
      }
    },
    afterRead8(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
        console.log("....nnnnnnnn....",res.file)
        this.qaz.push(res.file)
        this.$toast.success('Success')
        this.beneficiary_photo_file2 = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.beneficiary_photo_file2 = []
      return true
      }
    },
    afterRead9(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
        this.qaz.push(res.file)
        this.$toast.success('Success')
        this.beneficiary_photo_file3 = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.beneficiary_photo_file3 = []
      return true
      }
    },
    afterRead10(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
        this.qaz.push(res.file)
        this.$toast.success('Success')
        this.beneficiary_photo_file4 = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.beneficiary_photo_file4 = []
      return true
      }
    },
    afterRead11(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
        this.qaz.push(res.file)
        this.$toast.success('Success')
        this.beneficiary_photo_file5 = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.beneficiary_photo_file5 = []
      return true
      }
    },

    // :after-read="afterRead911" accept="*" :max-count="1" :disabled="isDone"/>
    //       <van-uploader v-model="source_of_fund_addon31" @click-preview="goDetail1(source_of_fund_addon31)"  :after-read="afterRead1011" accept="*" :max-count="1" :disabled="isDone"/>
    //       <van-uploader v-model="source_of_fund_addon41" @click-preview="goDetail1(source_of_fund_addon41)"  :after-read="afterRead1111" accept="*" :max-count="1" :disabled="isDone"/>
    //       <van-uploader v-model="source_of_fund_addon51" @click-preview="goDetail1(source_of_fund_addon51)"  :after-read="afterRead1121" a
    afterRead811(file) { 
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
       // this.qaz1.push(res.file)
        this.$toast.success('Success')
        this.source_of_fund_addon11 = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.source_of_fund_addon11 = []
      return true
      }
    },
    afterRead81(file) { 
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
        this.qaz1.push(res.file)
        this.$toast.success('Success')
        this.source_of_fund_addon1 = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.source_of_fund_addon1 = []
      return true
      }
    },
    afterRead911(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
      //  this.qaz1.push(res.file)
        this.$toast.success('Success')
        this.source_of_fund_addon21 = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.source_of_fund_addon21 = []
      return true
      }
    },
    afterRead91(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
        this.qaz1.push(res.file)
        this.$toast.success('Success')
        this.source_of_fund_addon2 = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.source_of_fund_addon2 = []
      return true
      }
    },
    afterRead1011(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
       // this.qaz1.push(res.file)
        this.$toast.success('Success')
        this.source_of_fund_addon31 = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.source_of_fund_addon31 = []
      return true
      }
    },
    afterRead101(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
        this.qaz1.push(res.file)
        this.$toast.success('Success')
        this.source_of_fund_addon3 = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.source_of_fund_addon3 = []
      return true
      }
    },
    afterRead1111(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
      //  this.qaz1.push(res.file)
        this.$toast.success('Success')
        this.source_of_fund_addon41 = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.source_of_fund_addon41 = []
      return true
      }
    },
    afterRead111(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
        this.qaz1.push(res.file)
        this.$toast.success('Success')
        this.source_of_fund_addon4 = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.source_of_fund_addon4 = []
      return true
      }
    },
    afterRead1121(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
       // this.qaz1.push(res.file)
        this.$toast.success('Success')
        this.source_of_fund_addon51 = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.source_of_fund_addon51 = []
      return true
      }
    },
    afterRead112(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
        this.qaz1.push(res.file)
        this.$toast.success('Success')
        this.source_of_fund_addon5 = res.file
      })
    }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.source_of_fund_addon5 = []
      return true
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
</style>
