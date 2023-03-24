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
        autocomplete="off"
        :required="true"
        v-model="formData.name"
        :rules="[{ required: true ,message: 'Please enter the name'}]"
      />
      <van-field
        name="nric"
        label="NRIC/Passport No"
        center
        :required="true"
        autocomplete="off"
        v-model="formData.nric"
        :rules="[{ required: true,message: 'Please enter the NRIC/Passport No' }]"
      />
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
      <van-field name="Documents" label="Documents" >
        <template #input>
          <van-uploader v-model="settlor_photo_file" :disabled="isDone" :before-delete="beforeRead" :after-read="afterRead" accept="*" :max-count="1" @click-preview="goDetail1(settlor_photo_file)"/>
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
      <van-field name="Documents" label="Documents" >
        <template #input >
          <van-uploader v-model="proof_of_current_file" :after-read="afterRead2" :before-delete="beforeRead2" accept="*" :max-count="1" :disabled="isDone" @click-preview="goDetail1(proof_of_current_file)"/>
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
          <van-uploader v-model="source_of_wealth_file" :after-read="afterRead3" :before-delete="beforeRead3" accept="*" :max-count="1" :disabled="isDone" @click-preview="goDetail1(source_of_wealth_file)"/>
        </template>
      </van-field>
      <van-field
        name="source_of_fund"
        label="Source of Fund (to provide the relevant supporting document(s)) 
Verified by the Agent/ Representative – Bank Statement, Bank passbook"
        center
      >
        
        <template #input>
          <van-checkbox v-model="formData.source_of_fund"></van-checkbox>
        </template>
      </van-field>
      <van-field name="Documents" label="Documents">
        <template #input v-if="this.isFilled==0 ||this.isFilled ==undefined" >
          <!-- this.isFilled=0 -->
          <!-- <van-uploader v-model="source_of_fund_file"   @click-preview="goDetail1(source_of_fund_file)"  :after-read="afterRead4" accept="*" :max-count="1" :disabled="isDone" /> -->
          <!-- <van-uploader v-model="source_of_fund_file"   @click-preview="goDetail1(source_of_fund_file)"   :before-delete="beforeRead4" :after-read="afterRead4" accept="*" :max-count="1" :disabled="isDone" /> -->
          <!-- <van-uploader v-model="source_of_wealth_file" :after-read="afterRead3"  accept="*" :max-count="1" :disabled="isDone" @click-preview="goDetail1(source_of_wealth_file)"/> -->
          <van-uploader v-model="source_of_wealth_file1" :after-read="afterRead31" :before-delete="beforeRead31" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="source_of_wealth_file2" :after-read="afterRead32" :before-delete="beforeRead32" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="source_of_wealth_file3" :after-read="afterRead33" :before-delete="beforeRead33" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="source_of_wealth_file4" :after-read="afterRead34" :before-delete="beforeRead34" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="source_of_wealth_file5" :after-read="afterRead35" :before-delete="beforeRead35" accept="*" :max-count="1" :disabled="isDone"/>
          <!-- <van-uploader v-model="source_of_fund_addon11"      :after-read="afterRead811"    :before-delete="beforeRead811"    accept="*"  :max-count="1"  :disabled="isDone" />
          <van-uploader v-model="source_of_fund_addon21" @click-preview="goDetail1(source_of_fund_addon21)"  :after-read="afterRead911" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="source_of_fund_addon31" @click-preview="goDetail1(source_of_fund_addon31)"  :after-read="afterRead1011" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="source_of_fund_addon41" @click-preview="goDetail1(source_of_fund_addon41)"  :after-read="afterRead1111" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="source_of_fund_addon51" @click-preview="goDetail1(source_of_fund_addon51)"  :after-read="afterRead1121" accept="*" :max-count="1" :disabled="isDone"/> -->
        </template>
        <template #input v-else>
          <!-- this.isFilled=0 -->
          <!-- <van-uploader v-model="source_of_fund_file"   @click-preview="goDetail1(source_of_fund_file)"  :after-read="afterRead4" accept="*" :max-count="1" :disabled="isDone" /> -->
          <!-- <van-uploader v-model="source_of_fund_file"   @click-preview="goDetail1(source_of_fund_file)"   :before-delete="beforeRead4" :after-read="afterRead4" accept="*" :max-count="1" :disabled="isDone" /> -->
          <van-uploader v-model="source_of_fund_addon1" @click-preview="goDetail1(source_of_fund_addon1)" :before-delete="beforeRead81" :after-read="afterRead81" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="source_of_fund_addon2" @click-preview="goDetail1(source_of_fund_addon2)" :before-delete="beforeRead91" :after-read="afterRead91" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="source_of_fund_addon3" @click-preview="goDetail1(source_of_fund_addon3)" :before-delete="beforeRead101" :after-read="afterRead101" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="source_of_fund_addon4" @click-preview="goDetail1(source_of_fund_addon4)" :before-delete="beforeRead111" :after-read="afterRead111" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="source_of_fund_addon5" @click-preview="goDetail1(source_of_fund_addon5)" :before-delete="beforeRead112" :after-read="afterRead112" accept="*" :max-count="1" :disabled="isDone"/>
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
          <van-uploader v-model="evidence_of_bank_file" @click-preview="goDetail1(evidence_of_bank_file)" :after-read="afterRead5" accept="*" :max-count="1" :disabled="isDone"/>
        </template>
      </van-field>

      <van-field
        name="beneficiary_photocopy"
        label="Beneficiary's Photocopy of IC (Verified by the Agent/Representative)"
        center
      >
        <template #input>
          <van-checkbox v-model="formData.beneficiary_photocopy"></van-checkbox>
        </template>
      </van-field>
      <!-- <van-button class="esignBtn" native-type="button" @click="addBeneficiary"
        >Add</van-button
      > -->
      <!-- <template #input>
          <van-uploader v-model="evidence_of_bank_file" :after-read="afterRead5" accept="*" :max-count="1" :disabled="isDone" multiple/>
        </template> -->
      <!-- <div
        class="beneficiary_info"
        v-for="(item, inx) in beneficiary_photo_file"
        :key="inx"
      > -->
      <van-field name="Documents" label="Documents">
        <template #input v-if="this.isFilled==0 ||this.isFilled ==undefined" >
          <!-- this.isFilled=0 -->
          <!-- <van-uploader v-model="source_of_fund_file"   @click-preview="goDetail1(source_of_fund_file)"  :after-read="afterRead4" accept="*" :max-count="1" :disabled="isDone" /> -->
          <!-- <van-uploader v-model="source_of_fund_file"   @click-preview="goDetail1(source_of_fund_file)"   :before-delete="beforeRead4" :after-read="afterRead4" accept="*" :max-count="1" :disabled="isDone" /> -->
          <!-- <van-uploader v-model="source_of_wealth_file" :after-read="afterRead3"  accept="*" :max-count="1" :disabled="isDone" @click-preview="goDetail1(source_of_wealth_file)"/> -->
          <van-uploader v-model="source_of_wealth_file1x" :after-read="afterRead31x" :before-delete="beforeRead31x" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="source_of_wealth_file2x" :after-read="afterRead32x" :before-delete="beforeRead32x" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="source_of_wealth_file3x" :after-read="afterRead33x" :before-delete="beforeRead33x" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="source_of_wealth_file4x" :after-read="afterRead34x" :before-delete="beforeRead34x" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="source_of_wealth_file5x" :after-read="afterRead35x" :before-delete="beforeRead35x" accept="*" :max-count="1" :disabled="isDone"/>
          <!-- <van-uploader v-model="source_of_fund_addon11"      :after-read="afterRead811"    :before-delete="beforeRead811"    accept="*"  :max-count="1"  :disabled="isDone" />
          <van-uploader v-model="source_of_fund_addon21" @click-preview="goDetail1(source_of_fund_addon21)"  :after-read="afterRead911" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="source_of_fund_addon31" @click-preview="goDetail1(source_of_fund_addon31)"  :after-read="afterRead1011" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="source_of_fund_addon41" @click-preview="goDetail1(source_of_fund_addon41)"  :after-read="afterRead1111" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="source_of_fund_addon51" @click-preview="goDetail1(source_of_fund_addon51)"  :after-read="afterRead1121" accept="*" :max-count="1" :disabled="isDone"/> -->
        </template>
        <template #input v-else>
          
          <van-uploader v-model="beneficiary_photo_file1" @click-preview="goDetail1(beneficiary_photo_file1)"  :before-delete="beforeRead7"  :after-read="afterRead7" accept="*" :max-count="1" :disabled="isDone" />
          <van-uploader v-model="beneficiary_photo_file2" @click-preview="goDetail1(beneficiary_photo_file2)"  :before-delete="beforeRead8"  :after-read="afterRead8" accept="*" :max-count="1"/>
          <van-uploader v-model="beneficiary_photo_file3" @click-preview="goDetail1(beneficiary_photo_file3)"  :before-delete="beforeRead9"  :after-read="afterRead9" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="beneficiary_photo_file4" @click-preview="goDetail1(beneficiary_photo_file4)"  :before-delete="beforeRead10"  :after-read="afterRead10" accept="*" :max-count="1" :disabled="isDone"/>
          <van-uploader v-model="beneficiary_photo_file5" @click-preview="goDetail1(beneficiary_photo_file5)"  :before-delete="beforeRead11"  :after-read="afterRead11" accept="*" :max-count="1" :disabled="isDone"/>
        </template>
      </van-field>
        <!-- <van-button
          class="esignDelBtn"
          v-if="inx > 0"
          slot="button"
          native-type="button"

          @click="delBeneficiary(inx)"
          >delete</van-button

        > -->
      <!-- </div> -->






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
        v-if="!this.$route.query.isShare"
      
      >
      <!-- this.$route.query.isShare -->
        <template #input>
          
            <van-checkbox  @click="thirdParty" v-model="formData.third_party_declaration"></van-checkbox>
          
         
        </template>
      </van-field>
      <van-field
        name="third_party_declaration"
        label="Third Party Fund Declaration Form (if applicable)"
        center
        
        v-if="this.$route.query.isShare"
      >
      <!-- this.$route.query.isShare -->
        <template #input>
          
            <van-checkbox  @click="thirdParty" v-model="formData.third_party_declaration" :disabled="true"></van-checkbox>
          
         
        </template>
      </van-field>
      <div class="minTitle">
        Note: Verification means to sign, state name and date
      </div>
      <div class="tl">Signature</div>
      <vue-esign
      ref="signature"
        style="border: 1px solid #666"
        :width="800"
   
        :height="300"
        :isCrop="false"
        :lineWidth="6"
        lineColor="#000000"
        bgColor.sync="#fff"
        :style="{ display: (this.xyz === '' ? 'block':formData.signature === null ||formData.signature === ''? 'block' :'none') }"
      />
      <van-image
      :style="{ border: '1px solid #666', display: (this.xyz === '1' ?formData.signature == null ||formData.signature === ''? 'none':'block':'none') }"
        class="esignImgbox"
       
        :src="formData.signature"

      
      />
      <div class="tr">
        <div class="esignBtn" @click="handleReset('signature')" v-if="!isDone">Clear</div>
        <div class="esignBtn" @click="handleGenerate('signature')" v-if="!isDone">Confirm</div>
      </div>
      <div class="minTitle">
        Agent/Representative of DDG INTERNATIONAL BERHAD (Company No. 1423557-M)
      </div>
      <van-field
        v-model="formData.agent_name"
        id="5reset"
        name="agent_name"
        center
        :required="true"
        autocomplete="off"
        type="text"
        label="Name"
        placeholder="Please enter the Name"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.agent_nric"
        name="agent_nric"
        autocomplete="off"
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
        autocomplete="off"
        center
        :required="true"
        label="Date: DD-MM-YYYY"
        placeholder="Please enter DD-MM-YYYY"
        :rules="[{ required: true,pattern, message: 'Please enter the DATE' }]"
      />
      <van-button v-if="!isDone" round block type="info" native-type="submit" color="#7C655D">
        <div v-if="this.formData.third_party_declaration == true">
          <div v-if="this.formData.third_party_declaration == true && this.$route.query.isShare">
            <span v-if="!this.$route.query.isShare">Save/Next</span>
          </div>
          <!-- <div v-if="this.formData.third_party_declaration == true && this.$route.query.isShare">
            <span v-if="!this.$route.query.isShare">Save/Next</span>
          </div>
           -->
        <span v-if="!this.$route.query.isShare">Save/Next</span>
        <span v-else>submit</span>
      </div>
      <div v-else>
        <span v-if="!this.$route.query.isShare">save</span>
        <span v-else>submit</span>
      </div>
      </van-button>

    </van-form>
    <div v-if="formData.third_party_declaration == false">
    <van-button   round block type="info" color="#7C655D" style="margin-top:5rem;"  @click="$emit('onSelect')" v-if="$store.state.isOverseaSignature">
       Copy Link for Sharing with Settlor
    </van-button>
  </div>
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
import { getOrdersForms, putOrdersForms, document_check_list_form, third_party_declaration_form, getOrderDetailFor3rdParty} from "@/api/order";

export default {
  props:['orderDataInfo'],
  data() {
    return {
      formData3: {
        trustor_name: "",
        trustor_date: "",
        trustor_passport: "",
        trustor_address: "",
        trustor_phone: "",
        // trustor_reference_no: "",
        third_party_name: "",
        third_party_date: "",
        third_party_passport: "",
        third_party_address: "",
        third_party_phone: "",
        third_party_reference_no: "",
        declaration_third_party: 0,
        client_signature: "",
        client_name: "",
        client_passport: "",
        client_date: "",
        witness_signature: "",
        witness_name: "",
        witness_passport: "",
        witness_date: "",
        nationality: '',
        occupation: '',
        industry: '',
        name_of_employer: '',
        nature_of_business: '',
        relationship_with_settlor: '',
        annual_salary_income: '',
        source_of_wealth: '',
        source_of_fund: '',
        name_of_director: '',
        name_of_shareholder: '',
        nature_of_business2: '',
        profit_loss_statement: '',
        source_of_fund2: '',
        contributor_name: '',
        contributor_contact: '',
        contributor_email: '',
        others_please_specify: '',
        relationship_between: '',
      },
      formData: {
        name:this.$store.state.campanyIndividualName1,
        nric:this.$store.state.passport_no,
        application_form: false,
        compliance_qestionnaire: false,
        settlor_photocopy: false,
        letter_of_wishes: false,
        current_address: false,
        source_of_wealth: false,
        pdpa: false,
        bank: false,
        beneficiary_photocopy:false,
        trust_deed: false,
        third_party_declaration: false,
        signature:'',
        agent_name: sessionStorage.getItem("user_name"),
        agent_nric: sessionStorage.getItem("user_passportNo"),
        agent_date: moment(new Date()).format('DD-MM-YYYY'),
        // 12.30新
        source_of_fund: false,
        settlor_photo_file: '',
        proof_of_current_file: '',
        source_of_wealth_file: '',
        source_of_fund_file: '',
        evidence_of_bank_file: '',
        beneficiary_photo_file:[{}],
        source_of_fund_addon:[{}],
            },
            xyz:"",
      sig1:true,
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
      orderData: {},
      qaz1: [],
      isDone: false, // 訂單是否已確認
      pattern: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,// 正则验证时间
      isDelete :false,
      third_party_declaration_Id : ''
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
    this.isDone = sessionStorage.getItem('orderStatus') === '2'
    console.log("....888....88...88.8...8....",this.isFilled)

     if(this.$store.state.reorder == 1){
      
      if (this.$store.state.reorderdocument_check_list_form > 0) {
    
    getOrdersForms(this.$store.state.reorderdocument_check_list_form, { type: "Document Checklist" })
      .then((res) => {
        console.log(">>.666.>>",res);
  
        res.compliance_qestionnaire = false
        res.application_form = false
        res.letter_of_wishes = false
        res.source_of_wealth = false
        res.source_of_wealth_file= ''
        res.source_of_fund_file= ''
        res.source_of_fund_addon=[{}]
        res.source_of_fund = false
        res.pdpa =  false
        res.bank = false
        res.evidence_of_bank_file = ''
        res.beneficiary_photocopy =false
        res.beneficiary_photo_file =[{}]
        res.trust_deed =false
        res.third_party_declaration=false
        res.signature= ''
        res.agent_date= moment(new Date()).format('DD-MM-YYYY')
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
        this.formData.beneficiary_photocopy=Number(this.formData.beneficiary_photocopy)
        this.formData.bank=Number(this.formData.bank)
        this.settlor_photo_file.push({url: res.settlor_photo_file})

        this.proof_of_current_file.push({url: res.proof_of_current_file})
        
        this.source_of_wealth_file.push({url: res.source_of_wealth_file})
        this.source_of_fund_file.push({url: res.source_of_fund_file})
        this.evidence_of_bank_file.push({url: res.evidence_of_bank_file})
        this.sig1=false
        this.xyz = "1"
       // this.qaz.push(res.beneficiary_photo_file)
       console.log(".......99999999999............",res.source_of_fund_addon.length)
       console.log("........888888888...........",res.beneficiary_photo_file.length)
       for (let j = 0; j < res.source_of_fund_addon.length; j++) {

this.qaz1.push(res.source_of_fund_addon[j])
}
        for (let i = 0; i < res.beneficiary_photo_file.length; i++) {

          this.qaz.push(res.beneficiary_photo_file[i])
        }
if(res.beneficiary_photo_file.length ===1){
console.log("...1111....1111...",res.beneficiary_photo_file[0])
this.beneficiary_photo_file1.push({url: res.beneficiary_photo_file[0]})
}
if(res.beneficiary_photo_file.length ===2){
console.log("...2222....2222...",res.beneficiary_photo_file[1])
this.beneficiary_photo_file1.push({url: res.beneficiary_photo_file[0]})
this.beneficiary_photo_file2.push({url: res.beneficiary_photo_file[1]})
}
if(res.beneficiary_photo_file.length ===3){
console.log("...3333....3333...",res.beneficiary_photo_file[2])
this.beneficiary_photo_file1.push({url: res.beneficiary_photo_file[0]})
this.beneficiary_photo_file2.push({url: res.beneficiary_photo_file[1]})
this.beneficiary_photo_file3.push({url: res.beneficiary_photo_file[2]})
}
if(res.beneficiary_photo_file.length ===4){
console.log("...44444....44444...",res.beneficiary_photo_file[3])
this.beneficiary_photo_file1.push({url: res.beneficiary_photo_file[0]})
this.beneficiary_photo_file2.push({url: res.beneficiary_photo_file[1]})
this.beneficiary_photo_file3.push({url: res.beneficiary_photo_file[2]})
this.beneficiary_photo_file4.push({url: res.beneficiary_photo_file[3]})
}
if(res.beneficiary_photo_file.length >4){
console.log("...5555....5555...",res.beneficiary_photo_file[4])
this.beneficiary_photo_file1.push({url: res.beneficiary_photo_file[0]})
this.beneficiary_photo_file2.push({url: res.beneficiary_photo_file[1]})
this.beneficiary_photo_file3.push({url: res.beneficiary_photo_file[2]})
this.beneficiary_photo_file4.push({url: res.beneficiary_photo_file[3]})
this.beneficiary_photo_file5.push({url: res.beneficiary_photo_file[4]})
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

  }
    
  },
  methods: {
    getOrderDetailFor3rdParty() {

      if(this.$store.state.isOverseaSignature){
          idFor3=this.$store.state.CustomerApplicationId
        }else{
          idFor3=this.$route.query.orderId
        }

      console.log(">>>>>>>>>>3333>>>>",idFor3);
        getOrderDetailFor3rdParty({
          order_id: idFor3
})
      .then(res => {
        console.log("+++++++++++++++3333333333++++++++++++++++++++++", res.third_party_declaration_form)
        this.third_party_declaration_Id = res.third_party_declaration_form
        //this.faqData = res
      })


    },
    beforeRead31(file){
      this.source_of_wealth_file1 = []

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
return truesubmit
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
          
  //         let url = goDetail1.item.date.split('-')
  // pdfApi(url[0],url[1]).then(res => {
  // console.log(".......p...d...f...",res.data)
  // console.log("9999999999999999999",res.data)
  //     let url1 = res.data.split('storage')
  //     console.log("ccccccccccccccccccccc",url1)
  //     console.log("aaaaaaaaaaaaaaaaaa",url1[0])
  //     console.log("bbbbbbbbbbbbbbbb",url1[1])
  //     window.open(url1[0] + 'file/download?path=storage' + url1[1], '_self')
  //      });
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
    getFormData3(id3) {
      if (id3 > 0) {
        getOrdersForms(id3, { type: "Third Party Declaration" })
          .then((res) => {
            console.log(res);
            this.formData3 = res;
            let data = JSON.parse(JSON.stringify(this.formData3));
            putOrdersForms(id3, {
          type: "Third Party Declaration",
          data: JSON.stringify(data),
        }).then((res) => {
          console.log(res, "修改Third Party Declaration成功");
        
       
          
        });
          
          })
          .catch((err) => {});
      }
    },
    // 如果已填 獲取數據
    getFormData() {
      if (this.isFilled > 0) {
    
        getOrdersForms(this.isFilled, { type: "Document Checklist" })
          .then((res) => {
            console.log(">>.666.>>",res);
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
            this.formData.beneficiary_photocopy=Number(this.formData.beneficiary_photocopy)
            this.formData.bank=Number(this.formData.bank)
            this.settlor_photo_file.push({url: res.settlor_photo_file})

            this.proof_of_current_file.push({url: res.proof_of_current_file})
            
            this.source_of_wealth_file.push({url: res.source_of_wealth_file})
            this.source_of_fund_file.push({url: res.source_of_fund_file})
            this.evidence_of_bank_file.push({url: res.evidence_of_bank_file})
            this.sig1=false
            this.xyz = "1"
           // this.qaz.push(res.beneficiary_photo_file)
           console.log(".......99999999999............",res.source_of_fund_addon.length)
           console.log("........888888888...........",res.beneficiary_photo_file.length)
           for (let j = 0; j < res.source_of_fund_addon.length; j++) {

this.qaz1.push(res.source_of_fund_addon[j])
}
            for (let i = 0; i < res.beneficiary_photo_file.length; i++) {

              this.qaz.push(res.beneficiary_photo_file[i])
            }
if(res.beneficiary_photo_file.length ===1){
console.log("...1111....1111...",res.beneficiary_photo_file[0])
  this.beneficiary_photo_file1.push({url: res.beneficiary_photo_file[0]})
}
if(res.beneficiary_photo_file.length ===2){
  console.log("...2222....2222...",res.beneficiary_photo_file[1])
  this.beneficiary_photo_file1.push({url: res.beneficiary_photo_file[0]})
  this.beneficiary_photo_file2.push({url: res.beneficiary_photo_file[1]})
}
if(res.beneficiary_photo_file.length ===3){
  console.log("...3333....3333...",res.beneficiary_photo_file[2])
  this.beneficiary_photo_file1.push({url: res.beneficiary_photo_file[0]})
  this.beneficiary_photo_file2.push({url: res.beneficiary_photo_file[1]})
  this.beneficiary_photo_file3.push({url: res.beneficiary_photo_file[2]})
}
if(res.beneficiary_photo_file.length ===4){
  console.log("...44444....44444...",res.beneficiary_photo_file[3])
  this.beneficiary_photo_file1.push({url: res.beneficiary_photo_file[0]})
  this.beneficiary_photo_file2.push({url: res.beneficiary_photo_file[1]})
  this.beneficiary_photo_file3.push({url: res.beneficiary_photo_file[2]})
  this.beneficiary_photo_file4.push({url: res.beneficiary_photo_file[3]})
}
if(res.beneficiary_photo_file.length >4){
  console.log("...5555....5555...",res.beneficiary_photo_file[4])
  this.beneficiary_photo_file1.push({url: res.beneficiary_photo_file[0]})
  this.beneficiary_photo_file2.push({url: res.beneficiary_photo_file[1]})
  this.beneficiary_photo_file3.push({url: res.beneficiary_photo_file[2]})
  this.beneficiary_photo_file4.push({url: res.beneficiary_photo_file[3]})
  this.beneficiary_photo_file5.push({url: res.beneficiary_photo_file[4]})
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


      
      

           // beneficiary_photo_file1
//             console.log("......mom..1..",res.beneficiary_photo_file.length)
// var mom = []
//             for (let i = 0; i < res.beneficiary_photo_file.length; i++) {
//               alert("ss")
//           var pol ={ url : res.beneficiary_photo_file[i]}
// mom.push(pol)
//             }
//             console.log("......mom..2..",mom)
//             this.beneficiary_photo_file=(res.beneficiary_photo_file)
//             console.log("......final get...4444.",this.beneficiary_photo_file)
              // this.beneficiary_photo_file.push(res.beneficiary_photo_file)
          })
          .catch((err) => {});
      }

    },
    thirdParty(){
      if (this.formData.third_party_declaration == true) {
              this.$emit('onSelect3')
            }
            else{
              this.$emit('onSelect4')

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
      // ader v-model="source_of_fund_addon11" :after-read="afterRead811" accept="*" :max-count="1" :disabled="isDone" @click-preview="goDetail1(source_of_fund_addon11)"/>
      //     <van-uploader v-model="source_of_fund_addon21" @click-preview="goDetail1(source_of_fund_addon21)"  :after-read="afterRead911" accept="*" :max-count="1" :disabled="isDone"/>
      //     <van-uploader v-model="source_of_fund_addon31" @click-preview="goDetail1(source_of_fund_addon31)"  :after-read="afterRead1011" accept="*" :max-count="1" :disabled="isDone"/>
      //     <van-uploader v-model="source_of_fund_addon41" @click-preview="goDetail1(source_of_fund_addon41)"  :after-read="afterRead1111" accept="*" :max-count="1" :disabled="isDone"/>
      //     <van-uploader v-model="source_of_fund_addon51" @cli
      // v-if="this.isFilled==0 ||this.isFilled ==undefined" 
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
       console.log(".....xxxxxxxxxxxxxxxx.....",JSON.stringify(wsx))
      
       var wsx1 = {};
       this.qaz1.map((val , index1)=>{return wsx1[index1+1]=val})
       console.log(".....xxxxxxxxxxxxxxxx..1...",JSON.stringify(wsx1))
      

      if (!this.formData.signature&&!this.$store.state.isOverseaSignature) {
        this.$toast.fail("Please sign your name");
        return;
      }
      let data3 = JSON.parse(JSON.stringify(this.formData3));

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
      data.beneficiary_photocopy = Number(data.beneficiary_photocopy)
      data.bank = Number(data.bank)
      data.trust_deed = Number(data.trust_deed)
      data.third_party_declaration = Number(data.third_party_declaration)
      data.source_of_fund = Number(data.source_of_fund)
      data.source_of_fund_addon=JSON.stringify(wsx1)
      data.beneficiary_photo_file = JSON.stringify(wsx)

      // console.log(data,11111)
      // if (this.from == "create") {
      //   data.is_done = 1
      // }
      // console.log( data.is_done,11111)
      if (this.isFilled > 0) {
       //  修改
        putOrdersForms(this.isFilled, {
          type: "Document Checklist",
          data: JSON.stringify(data),
        }).then((res) => {
          console.log(res, "修改Document Checklist成功");
          if(this.isDelete === false){
          this.$toast({
            type: "success",
            message: "Modify the success",
         });
         this.getOrderDetailFor3rdParty();

         if (this.formData.third_party_declaration == true) {
         // alert("1")
        //  console.log("--------------oo---oo-o-o-o-o------",this.orderData)
          if(this.third_party_declaration_Id > 0){
         //   alert("1")
            this.getFormData3(this.third_party_declaration_Id)
          }
          else{
             third_party_declaration_form(this.$route.query.orderId, data3)
          .then((res) => {
    
          })
          .catch((err) => {});

          }


         }
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
        document_check_list_form(id, data)
          .then((res) => {
            console.log("----5-5-5-5-5--5-5",res);
            this.isFilled = res.document_check_list_form

            this.$toast({
              type: "success",
              message: "Submitted \n successfully",
            });


            console.log(".....third_party_declaration....third_party_declaration...",this.formData.third_party_declaration)
            // if (this.formData.third_party_declaration == true) {
            //   this.$emit('onSelect3')
            // }
            // else{
            //   this.$emit('onSelect4')

            // }

            if (this.formData.third_party_declaration == true) {
              third_party_declaration_form(id, data3)
          .then((res) => {
    
          })
          .catch((err) => {});
            }
          
            if (this.from == "create") {
              console.log("..1..")
              this.$store.commit("changePage", {
                tabbar: "/SelectProduct",
                title: "SelectProduct",
              });
              if(!this.$store.state.isOverseaSignature&&!this.$route.query.isShare){
                console.log("..2..")
                if (this.formData.third_party_declaration == true) {
                  console.log("..3..")
                  this.$store.commit("changePage", {
                tabbar: "/ThirdPartyDeclaration",
                title: "Third Party Declaration Form",
              });
                  this.$router.push({
                  path:
                    "/ThirdPartyDeclaration?from=create&orderId=" + this.$route.query.orderId, query: { campanyIndividualName: this.$route.query.campanyIndividualName }
                })

                
                }
                else{
                  console.log("..4..")
                  this.$router.push("/SelectProduct");
                }
                
              }

            } else {
              console.log("..5..")
              this.$router.go(-1);
            }
          })
          .catch((err) => {});
      }
      this.$emit('getOrderDetail')
    },
    // 清空画布
    handleReset(val) {
      this.formData.signature = ''
      // this.$refs[val].resultImg=this.formData.signature
      this.$refs[val].reset(); //清空画布
      this.sig1 = true
      this.xyz = ""
      document.getElementById("5reset").focus()
      
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
    beforeRead(file){
      this.settlor_photo_file = []
      return true
    },

    afterRead(file) {
      console.log(file.file.type.split('/').slice(-1)[0],'........iiiii..............');
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
     // var style = goDetail1[0].url.split('.').slice(-1)
    
      if(file.file.type.split('/').slice(-1) =="pdf" || file.file.type.split('/').slice(-1) =="pptx"){
       // alert("y")
        
     // this.settlor_photo_file.push({src: '@/assets/img/photo.png'})
   // window.open(goDetail1[0].url)
      }
          
      

      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
        this.$toast.success('Success')
        this.formData.settlor_photo_file = res.file
      })
}
else{
  alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.settlor_photo_file = []
      return true
}
    },
    beforeRead2(file){
      this.proof_of_current_file = []
      return true
    },

    afterRead2(file) {
      if(file.file.type.split('/').slice(-1)[0] === "jpeg" || file.file.type.split('/').slice(-1)[0] === "jpg" ||file.file.type.split('/').slice(-1)[0] === "png" ||file.file.type.split('/').slice(-1)[0] === "pptx" ||file.file.type.split('/').slice(-1)[0] === "pdf"){
     // alert("d")
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
        this.$toast.success('Success')
        this.formData.proof_of_current_file = res.file
      })
      }else{
        alert("Accept file type are pdf/pptx/jpeg/jpg/png !")
  this.proof_of_current_file = []
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
      console.log("...ggggggg.3..",file.file)
     
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
    beforeRead3(file){
      this.source_of_wealth_file = []
      return true
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
  this.source_of_fund_addon31 = []
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
