<template>
   
  <div class="KYC bodybox mt-5">
    <div class="row mb-5">
        <div class="col-md-3"></div>
        <div class="col-md-3">
          <van-button @click="english"  :id="'engButId'"
            :style="{ border: '1px solid #a4aeb9', background: '#7c655d' }" squre block type="info"
            class="announcements">
            English
          </van-button>
        </div>
        <div class="col-md-3">
          <van-button @click="malay" :id="'malButId'" squre block type="info"
            :style="{ border: '1px solid #7c655d', background: '#fff' , color :'#7c655d'}" class="notifications">
            Malay
          </van-button>
        </div>
        <div class="col-md-3"></div>
      </div>

      <!-- -------------------------------------------------------------------------------------------------- -->
    <van-form validate-first @submit="submit" :submit-on-enter="false" :scroll-to-error="true" >
    <div :id="'engId'" :style="{ display: 'block' }">
      Dear Sir/Madam     
      <div class="contentText">
        <b>Notice of Personal Data Protection Act 2010</b>

      </div>
      <div class="contentText">
        ASIA INTERNATIONAL TRUST BERHAD (“AITB”) places great importance on keeping up with the legal and
regulatory changes.

      </div>
      <br></br>
      



      <div class="minTitle1">
        1. In line with the Personal Data Protection Act 2010, we would like to inform and update you in regards to your
personal information that we may process, and in the manner in which we do so. Kindly note that AITB processes
your personal information, such as details on your contact numbers, background and other information relevant
to your arrangements / participation / contract / agreements / deeds / appointments, which you may have
previously provided directly to AITB or through contact with our corporate communications and/or departments
(including business development and finance & administration teams). We may also have obtained your
personal information from your participation at our events (including seminars and corporate meetings/functions)
and through the provision of services by AITB.
      </div>

<br></br>
      
      <div class="minTitle1">
        2. Please be informed that your personal information, e.g. name, title, designation, employer, address, e- mail
address, telephone and facsimile numbers, are being processed by AITB for the following purposes
(“Purpose”):-

      </div>
      <div class="contentText">
        a. providing AITB’s products and/or services which you have appointed and/or arranged for AITB to so do and
notification on important changes or developments in such products and/or services (including features
thereof);

      </div>
      <div class="contentText">
        b. updating and managing the accuracy of AITB’s records and databases (including Customer Relation
Management);


      </div>
      <div class="contentText">
        c. conducting assessment and analysis, including market and product / service evaluation and market research
(if any);
      </div>
      <div class="contentText">
        d. cross-selling, marketing and promotions of AITB’s products and/or services;
      </div>

      <div class="contentText">
        e. providing information as may be required by the relevant authorities/ regulatory bodies which regulate and/or
issue licenses for AITB’s existing and/or future products and/or services;

      </div>
      <div class="contentText">
        f. maintaining communications and ensuring customer satisfaction, responding to enquiries and complaints,
and generally resolving disputes; and
      </div>
      <div class="contentText">
        g. maintaining your information history for present and future reference (if any).
      </div>
<br></br>
      <div class="minTitle1">
        3. Your personal information may be disclosed to other companies, service providers including legal firms,
government agencies, other financial institutions and any of their respective agents, servants and/or such persons,
whether located within or outside of Malaysia for the stipulated Purpose.


      </div>
      <br></br>
      <div class="minTitle1">
        4. Subject to any prohibition by any regulatory requirements binding on AITB in relation to your personal
information, you may request for access to, correction or deletion) of your personal information, or limit the
processing thereof (including personal data of others provided by you) at any time. Any enquiry or complaint
with respect to your personal information should be directed to AITB via post, email or facsimile transmission, at
the following address:

      </div>

      <table>
  <!-- <tr>
    <th>Type of Fees </th>
    <th>Fees / Charges</th>
    <th>Fees / Charges</th>
  </tr> -->
  <tr>
    <td>Address: </td>
    <td>
   
     
      <div class="contentText">ASIA INTERNATIONAL TRUST BERHAD (Attention: Customer Care Unit) Unit A-4-
8,4th Floor Megan Avenue 1, NO 189 Jalan Tun Razak 50400 Kuala Lumpur.</div>
    </td>
  </tr>
  <tr>
    <td>Telephone Number:</td>
    <td>+603- 2164 0000</td>
  </tr>
  <tr>
    <td>Facsimile Number:</td>
    <td>+603- 21613300</td>
  </tr>
  <tr>
    <td>Email:</td>
    <td>
      <div class="contentText">customer.service@aitrust.com.my</div>
</td>
  
  </tr>
</table>

<br></br>
     
      <div class="minTitle1">
        5. We trust that you consent and agree to the preceding terms with respect to our processing of your personal
information. If you do not consent to the above, kindly contact and inform us through the abovementioned contact
details.

      </div>

      

      <!-- <div class="contentText">
         Or
      </div>  -->

      <!-- <van-radio-group v-model="formData.have_high_risk" direction="horizontal">
        <van-radio :name="1">I agree to receive communication on marketing and promotion via email, phone calls, text
          messages and/or newsletters.</van-radio>

      </van-radio-group> -->

      <van-field name="eng_agreement"  :required="true"
    
      center>
        <template #input>
          <van-checkbox   id="engAgId" v-model="formData.eng_agreement">By signing the space below, it is deemed that you have acknowledge the acceptance of the notice of Personal
Data Protection Act 2010 in both English Language and Bahasa Malaysia.
</van-checkbox>
        </template>
      </van-field>



      <div class="tl">Signature</div>

      <vue-esign ref="esign"  :style="{ display: (this.xyz === '' ? 'block' : formData.eng_signature === null || formData.eng_signature === '' ? 'block' : 'none') }" :width="800" :height="300" :isCrop="false"
        :lineWidth="6" lineColor="#000000" bgColor.sync="#fff" style="border: 1px solid #666" />
      <van-image  class="esignImgbox"  :style="{ border: '1px solid #666', display: (this.xyz === '1' ? formData.eng_signature === null || formData.eng_signature === '' ? 'none' : 'block' : 'none') }"
        :src="formData.eng_signature" />
      <div class="tr">
        <div class="esignBtn" @click="handleReset()" v-if="!isDone">Clear</div>
        <div class="esignBtn" @click="handleGenerate()" v-if="!isDone">Confirm</div>
      </div>

      <van-field v-model="formData.eng_name" autocomplete="off" name="eng_name" center type="text" label="Name"
      oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);"

        placeholder="Please enter the Name" :required="true" :rules="[{ required: true }]" />
      <van-field v-model="formData.eng_nric_passport_no"  autocomplete="off" name="eng_nric_passport_no" center type="text" label="NRIC/Passport No."
       oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);"

        placeholder="Please enter the NRIC/Passport No." :required="true" :rules="[{ required: true }]" />

      <van-field v-model="formData.eng_date" autocomplete="off" name="eng_date" center type="text" label="Date: DD-MM-YYYY" placeholder="Please enter the Date"
        :required="true" :rules="[{ pattern, message: 'Please enter the DATE ' }]" />


    </div>

<div :id="'malId'" :style="{ display: 'none' }">
  Tuan/Puan, 

      <div class="contentText">
        <b>Notis Akta Perlidungan Data Peribadi 2010</b>

      </div>
      <div class="contentText">
        ASIA INTERNATIONAL TRUST BERHAD (“AITB”) memberikan kepentingan untuk mematuhi setiap perubahan
perundangan dan peraturan.

      </div>
      <br></br>
      



      <div class="minTitle1">
        1. Selaras dengan Akta Perlindungan Data Peribadi 2010, kami ingin memaklumkan kepada anda berkenaan
dengan maklumat peribadi anda yang mungkin kami proses dan cara-cara kami berbuat demikian. Sila ambil
perhatian bahawa AITB memproses maklumat peribadi anda, seperti butir-butir di nombor telefon anda, latar
belakang dan maklumat lain yang berkaitan dengan pengurusan / penyertaan
/ kontrak / perjanjian / perbuatan / temujanji anda, yang mana telah diberikan oleh anda sebelum ini secara
langsung kepada AITB atau melalui komunikasi korporat dan / atau jabatan-jabatan kami (termasuk bahagian
pembangunan perniagaan dan bahagian kewangan & pentadbiran). Kami juga boleh memperolehi maklumat
peribadi anda menerusi penyertaan anda di acara-acara kami (termasuk seminar dan mesyuarat korporat /
majlis-majlis) dan melalui perkhidmatan yang diuruskan oleh AITB.
      </div>

<br></br>
      
      <div class="minTitle1">
        2. Adalah dimaklumkan bahawa maklumat peribadi anda, seperti nama, gelaran, jawatan, majikan, alamat, alamat
e-mel, nombor telefon dan faksimili, akan diproses oleh AITB untuk tujuan-tujuan yang berikut ("Tujuan" ):-

      </div>
      <div class="contentText">
        a. menyediakan produk dan / atau perkhidmatan AITB yang mana anda telah melantik dan / atau mengatur
untuk AITB berbuat demikian dan pemberitahuan tentang perubahan atau perkembangan penting dalam
produk dan / atau perkhidmatan (termasuk ciri daripadanya);

      </div>
      <div class="contentText">
        b. mengemaskini dan menguruskan ketepatan rekod dan pangkalan data AITB (termasuk Pengurusan
Perhubungan Pelanggan);



      </div>
      <div class="contentText">
        c. menjalankan penilaian dan analisis, termasuk pasaran dan produk / perkhidmatan penilaian dan
penyelidikan pasaran ( jika ada);

      </div>
      <div class="contentText">
        d. penjualan silang, pemasaran dan promosi produk dan/atau perkhidmatan AITB;
      </div>

      <div class="contentText">
        e. memberikan maklumat sebagaimana yang dikehendaki oleh pihak berkuasa yang berkaitan / badan- badan
kawal selia yang mengawal selia dan / atau mengeluarkan lesen dan / atau produk-produk yang sedia ada
dan/atau masa hadapan dan / atau perkhidmatan AITB;

      </div>
      <div class="contentText">
        f. mengekalkan komunikasi dan memastikan kepuasan pelanggan, membalas kepada pertanyaan dan aduan,
dan menyelesaikan pertikaian secara umumnya; dan
      </div>
      <div class="contentText">
        g. mengekalkan sejarah maklumat anda untuk rujukan semasa dan masa hadapan (jika ada).
      </div>
<br></br>
      <div class="minTitle1">
        3. Maklumat peribadi anda mungkin didedahkan kepada syarikat-syarikat lain, penyedia perkhidmatan termasuk
firma-firma guaman, agensi-agensi kerajaan, institusi-institusi kewangan yang lain dan masing-masing juga
kepada ejen-ejen serta pekerja mereka dan / atau mana-mana orang yang berkaitan, sama ada bertempat di
dalam atau di luar Malaysia untuk Tujuan yang ditetapkan.


      </div>
      <br></br>
      <div class="minTitle1">
        4. Tertakluk kepada mana-mana larangan oleh mana-mana peraturan yang perlu dipatuhi oleh AITB berhubung
dengan maklumat peribadi anda, anda boleh meminta akses untuk membuat pembetulan kepada atau
menghapuskan maklumat peribadi anda, atau menghadkan pemprosesan daripadanya (termasuk data peribadi
orang lain yang diberikan oleh anda) pada bila-bila masa. Sebarang pertanyaan atau aduan berkenaan dengan
maklumat peribadi anda boleh disalurkan kepada AITB melalui pos, e- mel atau faksimili kepada alamat berikut:

      </div>

      <table>
  <!-- <tr>
    <th>Type of Fees </th>
    <th>Fees / Charges</th>
    <th>Fees / Charges</th>
  </tr> -->
  <tr>
    <td>Alamat: </td>
    <td>
   
     
      <div class="contentText">ASIA INTERNATIONAL TRUST BERHAD (Attention: Customer Care Unit) Unit
A-4-8,4th Floor Megan Avenue 1, NO 189 Jalan Tun Razak 50400 Kuala
Lumpur.</div>
    </td>
  </tr>
  <tr>
    <td>Nombor Telefon:</td>
    <td>+603- 2164 0000</td>
  </tr>
  <tr>
    <td>Nombor Faksimili:</td>
    <td>+603- 21613300</td>
  </tr>
  <tr>
    <td>E-mel:</td>
    <td>
      <div class="contentText">customer.service@aitrust.com.my</div>
</td>
  
  </tr>
</table>

<br></br>
     
      <div class="minTitle1">
        5. Kami percaya bahawa anda mengizin dan bersetuju dengan syarat-syarat kami berkenaan dengan
pemprosesan maklumat peribadi anda. Jika anda tidak mengizin dengan perkara di atas, sila hubungi dan
beritahu kami melalui maklumat perhubungan yang disediakan di atas.

      </div>

      <!-- <div class="contentText">
         Or
      </div>  -->

      <!-- <van-radio-group v-model="formData.have_high_risk" direction="horizontal">
        <van-radio :name="1">	Saya bersetuju untuk menerima komunikasi mengenai pemasaran dan promosi melalui e-mel, panggilan telefon, mesej teks dan/atau surat berita.</van-radio>

      </van-radio-group> -->

      <van-field name="malay_agreement" 
      :required="true"
     

        center>
        <template #input>
          <van-checkbox  id="malayAgId" v-model="formData.malay_agreement">Dengan menandatangani ruangan di bawah, dianggap bahawa anda telah mengakui penerimaan notis Akta
Perlindungan Data Peribadi 2010 dalam Bahasa Inggeris dan Bahasa Malaysia.
</van-checkbox>
        </template>
      </van-field>



      <div class="tl">Tandatangan</div>

      <vue-esign ref="esign1" :style="{ display: (this.xyz1 === '' ? 'block' : formData.malay_signature === null || formData.malay_signature === '' ? 'block' : 'none') }" :width="800" :height="300" :isCrop="false"
        :lineWidth="6" lineColor="#000000" bgColor.sync="#fff" style="border: 1px solid #666" />
      <van-image  :style="{ border: '1px solid #666', display: (this.xyz1 === '1' ? formData.malay_signature === null || formData.malay_signature === '' ? 'none' : 'block' : 'none') }" class="esignImgbox"
        :src="formData.malay_signature" />
      <div class="tr">
        <div class="esignBtn" @click="handleReset1()" v-if="!isDone">Clear</div>
        <div class="esignBtn" @click="handleGenerate1()" v-if="!isDone">Confirm</div>
      </div>

      <van-field v-model="formData.malay_name" autocomplete="off" name="malay_name" center type="text" label="Nama"
       oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);"

        placeholder="Please enter the Nama" :required="true" :rules="[{ required: true }]" />
      <van-field v-model="formData.malay_nric_passport_no" autocomplete="off" name="malay_nric_passport_no" center type="text" label="No. Kad Pengenalan/Pasport"
       oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);"
  
        placeholder="Please enter the No. Kad Pengenalan/Pasport" :required="true" :rules="[{ required: true }]" />

      <van-field v-model="formData.malay_date" autocomplete="off" name="malay_date" center type="text" label="Tarikh: DD-MM-YYYY" placeholder="Please enter the Tarikh"
        :required="true" :rules="[{ pattern, message: 'Please enter the Tarikh ' }]" />
</div>



      <van-button v-click-outside="outSide" :disabled="selectData" v-if="!isDone" round block type="info" native-type="submit" color="#7C655D">
        {{ from == "create" ? "Next / Save" : "Next / Save" }}
      </van-button>
    </van-form>
<!-- -------------------------------------------------------------------------------------------------- -->

  </div>
</template>

<script>
import moment from 'moment'
import { uploadAutograph, smsVerify_code, verdict_code, uploadFile } from "@/api/util";
import { kyc_formGep2Aagt, getOrdersForms, putOrdersForms2, getOrderDetail } from "@/api/order";
import ClickOutside from 'vue-click-outside'
export default {
  props: ['orderDataInfo'],
  data() {
    return {
      selectData:false,
      pattern: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,// 正则验证时间
      formData: {

        eng_agreement: '',
        eng_signature: '',
        eng_name:  this.$store.state.campanyIndividualName1Aagt,
        eng_nric_passport_no:  this.$store.state.passport_noAagt,
        eng_date:  moment(new Date()).format('DD-MM-YYYY'),

        malay_agreement: '',
        malay_signature: '',

        malay_name:  this.$store.state.campanyIndividualName1Aagt,
        malay_nric_passport_no:  this.$store.state.passport_noAagt,
        malay_date:  moment(new Date()).format('DD-MM-YYYY'),
        // nationality: this.$store.state.nationalityGep,
        // dob: this.$store.state.dobGep,
        // nric_pass_roc_no: this.$store.state.nric_pass_roc_noGep,
        // address: this.$store.state.addressGep,
        // phone: this.$store.state.phoneGep,

        // email: this.$store.state.emailGep,
        // place_incorporation: this.$store.state.place_incorporationGep,
        // occupation: this.$store.state.occupationGep,
        // postcode: this.$store.state.postcodeGep,

        // country: this.$store.state.countryGep,
        // nric_no: "2121",
        // subscriber_signature: "",

        // date: moment(new Date()).format('DD-MM-YYYY'),

        // contact_name: this.$store.state.campanyIndividualName1Gep,
        // contact_nationality: this.$store.state.nationalityGep,

        // contact_address: this.$store.state.addressGep,
        // contact_postcode: this.$store.state.postcodeGep,
        // emergency_name: "",
        // emergency_nationality: "",
        // emergency_nric_no: "",
        // emergency_dob: "",

        // emergency_phone: "",
        // emergency_email: "",
        // emergency_mobile: "",
        // amount: "",
        // relationship: "",
        // advisor_name: sessionStorage.getItem("user_name"),
        // advisor_id: sessionStorage.getItem("user_id"),
        // nominee_name: "",
        // nominee_nric_no: "",
        // nominee_relation: "",
        // nominee_phone: "",
        // nominee_email: "",
        // account_name: "",
        // bank_name: "",

        // account_no: "",
        // branch: "",
        // advisor_nric_no: this.$store.state.nric_pass_roc_noGep,
        // subcriber_name: this.$store.state.campanyIndividualName1Gep,
        // witness_advisor_name: sessionStorage.getItem("user_name"),
        // witness_nric_no: sessionStorage.getItem("user_passportNo"),
        // witness_signature: ""
      },
      sig1:true,
      sig2:true,
      xyz: "",
      xyz1: "",
      isShowPicker: false, // 日期彈框
      currentContent: new Date(), // 日期彈框顯示當前日期
      whichDate: "", // 區分是哪個日期觸發彈框
      whichDate2: "", // 區分是哪個日期觸發彈框
      whichDateInx: "", // 區分是哪個日期觸發彈框
      showCodePicker: false, // 區號彈框
      columns: ["60 Malaysia", "86 China", "852 Hong Kong", "886 Taiwan"],
      areaCode: "", // 區號
      phone: "",
      verify_code: "",
      isSms: false,
      from: "", // 記錄哪個頁面進入的
      isFilled: "", // 表單id(未填0)
      minDate: new Date(1900, 0, 1),
      // Documents: [], // 上传的文件
      isDone: false, // 訂單是否已確認
      isEng:true,
      isMal:false
    };
  },
  mounted() {

    console.log(this.$store.state.campanyIndividualName1Gep, "......bbbbbbb.........bbbbbb.......");
    console.log(this.$route.query, 222222);
    if (this.$store.state.isOverseaSignature) {
      // alert("a")
      this.from = "create"
      this.isFilled = 0
    } else {
      // alert("b")
      this.from = this.$route.query.from;
      this.isFilled = this.$route.query.isFilled;
      this.isDone = this.$route.query.status == 1 ? true : false;
    }
    if (this.$route.query.isShare) {
      //  alert("c")
      this.isFilled = this.$route.query.AagtPdpaForm
    }
    // console.log(".....33....",this.isFilled)
    this.getFormData();
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



        
              this.formData.eng_name = res.name
              this.formData.eng_nric_passport_no = res.passport_no
              this.formData.malay_nric_passport_no = res.passport_no
              this.formData.malay_name = res.name

              this.formData.malay_date = moment(new Date()).format('DD-MM-YYYY')
              this.formData.eng_date = moment(new Date()).format('DD-MM-YYYY')

  

            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }




    if(this.$store.state.reorder == 1){
      
      if (this.$store.state.reorderpdpa_memo_formAagt > 0) {
        getOrdersForms(this.$store.state.reorderpdpa_memo_formAagt, { type: "AAGT PDPA Form" }).then(res => {
          console.log(res, "獲取lett數據");
        res.eng_agreement = ""
        res.eng_signature = ""
        res.malay_agreement = ""
        res.malay_signature = ""
   
          this.formData = res;

          this.sig1=false
            this.sig2=false
            this.xyz = "1"
            this.xyz1 = "1"

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
    english() {
      document.getElementById('engId').style.display = 'block'
      document.getElementById('malId').style.display = 'none'
      document.getElementById('malButId').style.background = '#fff'
      document.getElementById('malButId').style.color = '#7c655d'
      document.getElementById('malButId').style.border = '1px solid #7c655d'
      document.getElementById('engButId').style.background = '#7c655d'
      document.getElementById('engButId').style.color = '#fff'
      document.getElementById('engButId').style.border = '1px solid #7c655d'
   
      this.isEng=true
      this.isMal=false

      
     
    },
    malay() {
      document.getElementById('malId').style.display = 'block'
      document.getElementById('engId').style.display = 'none'
      document.getElementById('engButId').style.background = '#fff'
      document.getElementById('engButId').style.color = '#7c655d'
      document.getElementById('engButId').style.border = '1px solid #7c655d'
      document.getElementById('malButId').style.background = '#7c655d'
      document.getElementById('malButId').style.color = '#fff'
      document.getElementById('malButId').style.border = '1px solid #7c655d'

      this.isEng=false
      this.isMal=true
    },
    // moblie validation
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[0-9]+$/.test(char)) return true;
      else e.preventDefault();
    },
    // 如果已填 獲取數據
    getFormData() {
      // alert("11")
      if (this.isFilled > 0) {
        //  alert("22")
        getOrdersForms(this.isFilled, { type: "AAGT PDPA Form" })
          .then((res) => {
            delete res.id
            delete res.order_id
            delete res.created_at
            delete res.updated_at
            this.sig1=false
            this.sig2=false
            this.xyz = "1"
            this.xyz1 = "1"
            console.log(res, 'GEP II PDPA Form');
            // for (let key in res) {
            //   res[key] = JSON.parse(res[key])
            // }
            // console.log(res,999999999);
            // if (res.document_checklist.Documents) {
            //   this.Documents.push({url: res.document_checklist.Documents})
            // }
            this.formData = res;
            // this.phone = res.witness_phone.slice(-11);
            // this.areaCode = res.witness_phone.split(this.phone)[0];
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    submit(form) {
      this.selectData = true
      console.log("555555555555555555555", form);
      console.log(form, "6666666666");
      console.log(this.formData, "777777777");
      console.log("...66...",this.formData.eng_signature)
      console.log("...66...",this.formData.malay_signature)
      console.log("...malay_agreement...",this.formData.malay_agreement)
      console.log("...eng_agreement...",this.formData.eng_agreement)
      console.log("...*******1111***********...",this.isEng)
      console.log("...*******1111***********...",typeof this.isEng)
      console.log("...*******2222***********...",this.isMal)
      console.log("...*******2222***********...",typeof this.isMal)
    //  console.log(this.formData.subscriber_signature, "form");
    if (this.isEng == true) {
      if (!this.formData.eng_signature && this.$route.query.isShare) {
     
     this.$toast.fail("Please sign your english signature");
     this.english()
     return;
   }
    //  alert("1")
      // if (!this.formData.eng_signature && this.$store.state.isOverseaSignature == false && this.$store.state.isOverseaSignatureRemote == false) {
     
      //   this.$toast.fail("Please sign your english signature");
      //   this.english()
      //   return;
      // }
      else if (!this.formData.eng_agreement) {
      //  alert("3")
        this.$toast.fail("Please agree to receive promotions");
               this.english()
            document.getElementById('engAgId').focus()
           return;
     }
    
    }

    if (this.isMal == true) {
      //alert("4")
      //   if (!this.formData.malay_signature &&!this.$store.state.isOverseaSignature) {
      //   this.$toast.fail("Please sign your malay signature");
      //   this.malay()
      //   return;
      // }
      if (!this.formData.malay_signature && this.$route.query.isShare) {
        this.$toast.fail("Please sign your malay signature");
        this.malay()
        return;
      }
      else if (!this.formData.malay_agreement) {
        this.$toast.fail("Please agree to receive promotions");
        this.malay()
            document.getElementById('malayAgId').focus()
            return;
      }
    

    
    }



      // if (!this.formData.eng_signature && this.$store.state.isOverseaSignature == false && this.$store.state.isOverseaSignatureRemote == false) {
      
      //   this.$toast.fail("Please sign your english signature");
      //   this.english()
      //   return;
      // }
      if (!this.formData.eng_signature && this.$route.query.isShare) {
      
      this.$toast.fail("Please sign your english signature");
      this.english()
      return;
    }
      else if (!this.formData.eng_agreement) {
        this.$toast.fail("Please agree to receive promotions");
               this.english()
            document.getElementById('engAgId').focus()
           return;
     }


      // else if (!this.formData.malay_signature && this.$store.state.isOverseaSignature == false && this.$store.state.isOverseaSignatureRemote == false) {
      //   this.$toast.fail("Please sign your malay signature");
      //   this.malay()
      //   return;
      // }
      else if (!this.formData.malay_signature && this.$route.query.isShare) {
        this.$toast.fail("Please sign your malay signature");
        this.malay()
        return;
      }
      else if (!this.formData.malay_agreement) {
        this.$toast.fail("Please agree to receive promotions");
        this.malay()
            document.getElementById('malayAgId').focus()
            return;
      }
    



      console.log(this.formData, "form-----");

      let data = JSON.parse(JSON.stringify(this.formData));
      data.eng_agreement = Number(data.eng_agreement)
      data.malay_agreement = Number(data.malay_agreement)
      console.log(">>>>>>>...", data)
      // data.document_checklist.Documents = this.Documents[0].url
      // data.settlor = JSON.stringify(data.settlor)
      // for (let key in data) {
      //   data[key] = JSON.stringify(data[key])
      // }
      // data.witness_phone = this.areaCode.split(" ")[0] + this.phone;
      if (this.isFilled > 0) {
        // 修改
        putOrdersForms2(this.isFilled, {
          type: "AAGT PDPA Form",
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
        console.log(this.$store.state.CustomerApplicationId, "2222222222222")
        let id = null
        if (this.$store.state.isOverseaSignature) {
          id = this.$store.state.CustomerApplicationId
        } else {
          id = this.$route.query.orderId
        }
        console.log(id, ".........id..........");
        console.log(data, ".......data....................");
        if(id=== "" ){
    
    this.$toast({
            message: "Please submit upper forms on one by one.",
          });
   }
   else{
        kyc_formGep2Aagt(id, this.formData)
          .then((res) => {
            console.log(res, "111111111111");
            this.isFilled = res.AagtPdpaForm
            this.$toast({
              type: "success",
              message: "You can Just moved to Next form",
            });
            if (this.from == "create") {
              this.$store.commit("changePage", {
                tabbar: "/DocumentChecklistAagt",
                title: "5/5 Document Checklist",
              });
              if (!this.$store.state.isOverseaSignature && !this.$route.query.isShare) {
                this.$router.push(
                  "/DocumentChecklistAagt?from=create&orderId=" +
                  this.$route.query.orderId
                );
              }
            } else {
              this.$router.go(-1);
            }
          })
          .catch((err) => {
            console.log(err.response, "333333333");
          });
        }
      }
      // // 验证验证码
      // let data = [];
      // data.push({
      //   phone: this.areaCode.split(" ")[0] + this.phone,
      //   verify_code: this.verify_code,
      // });
      // verdict_code(JSON.stringify(data))
      //   .then((res) => {
      //     console.log(res, "验证回调");
      //     if (res.state_code == 200) {
      //       // 验证成功 提交表单

      //       }
      //     } else {
      //       this.$toast({
      //         type: "fail",
      //         message: res.message,
      //       });
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err.response);
      //     this.$toast({
      //       type: "fail",
      //       message: "Verification code error",
      //     });
      //   });
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
    handleReset1(index) {
      this.$refs["esign1"].reset(); //清空画布
      this.sig2 = true
      this.xyz1 = ""
      this.formData.malay_signature = ''
    },
    handleGenerate1(index) {
      // if (this.$store.state.isOverseaSignature ==false && this.$store.state.isOverseaSignatureRemote == false) {
      var that = this;
      this.$refs["esign1"]
        .generate()
        .then((res) => {
          console.log(".......img..1....", res);
          uploadAutograph({
            image: res,
            path: "",
          })
            .then((res) => {
              console.log(".......img...2...", res);
              this.$toast.success("Signature success");
              this.formData.malay_signature = res.path;
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
      // }
      // else{
      //   alert("Subscriber Signature should be added by the Subscriber from the shared link.")
      // }
    },
    handleReset(index) {
      this.$refs["esign"].reset(); //清空画布
      this.sig1 = true
      this.xyz = ""
      this.formData.eng_signature = ''
    },
  
    handleGenerate(index) {
      // if (this.$store.state.isOverseaSignature ==false && this.$store.state.isOverseaSignatureRemote == false) {
      var that = this;
      this.$refs["esign"]
        .generate()
        .then((res) => {
          console.log(".......img..1....", res);
          uploadAutograph({
            image: res,
            path: "",
          })
            .then((res) => {
              console.log(".......img...2...", res);
              this.$toast.success("Signature success");
              this.formData.eng_signature = res.path;
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
      // }
      // else{
      //   alert("Subscriber Signature should be added by the Subscriber from the shared link.")
      // }
    },
    // 展示日期弹框
    /*    onShowPicker(val,val2,inx) {
          this.isShowPicker = true;
          this.whichDate = val;
          this.whichDate2 = val2;
          this.whichDateInx = inx;
        },*/
    // 日期彈框
    /*  onHiddenPicker() {
        this.currentContent = new Data();
        this.isShowPicker = false;
      },*/
    /* onConfirmPicker() {
       if (this.whichDateInx || this.whichDateInx == 0) {
         this.formData[this.whichDate][this.whichDateInx][this.whichDate2] = this.formatDateYMD(this.currentContent);
       } else {
         this.formData[this.whichDate][this.whichDate2] = this.formatDateYMD(this.currentContent);
       }
       this.isShowPicker = false;
     },*/
    // 出來日期格式ymd
    /*  formatDateYMD(value) {
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
    // 添加beneficiary_info
    addBeneficiary() {
      if (this.formData.interaction.length < 4) {
        this.formData.interaction.push({
          Date: "",
          Time: "",
          Place: "",
          Comment: "",
        });
      }
    },
    delBeneficiary(inx) {
      this.formData.interaction.splice(inx, 1);
    },
    // 文件上傳
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file, '上傳的文件');
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
        this.$toast.success('Success')
        // this.Documents[0].url = res.file
      })
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

.minTitle1 {
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

.SMSconfirm {
  color: #fff;
  border: none;
  outline: none;
  background-color: #7C655D;
  font-size: 16px;
  border-radius: 10px;
  height: 35px;
}

/*手机*/
@media screen and (max-width: 768px) {
  /deep/ .van-field__label {
    width: 30rem;
  }
}

.beneficiary_info {
  position: relative;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}

.esignDelBtn {
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  border: none;
  outline: none;
  background-color: #dd4b39;
  font-size: 16px;
  border-radius: 13px;
  height: 35px;
  line-height: 35px;
  margin: 10px 0 10px 10px;
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
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
