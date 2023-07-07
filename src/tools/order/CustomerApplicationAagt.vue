<template>
  <div class="CustomerApplication bodybox">
    <van-form validate-first @submit="submit" :submit-on-enter="false" :scroll-to-error="true">
      <!-- <van-button  round block type="info" color="#7C655D" @click="OverseaSignature">
        Overseas Signature
      </van-button> -->

      <!-- <div class="minTitle">Name of settlor (as per NRIC/ Passport):</div> -->

      <div class="minTitle">GENERAL INFORMATION</div>
      <!-- 文本框 -->
      <van-field  type="text" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);"
   v-model="formData.name" name="name" autocomplete="off" center :required="true"

   @change="onCampanyIndividualName"
        label="COMPANY / INDIVIDUAL NAME" placeholder="Please enter the COMPANY / INDIVIDUAL NAME" :rules="[
          {
            required: true,
          },
        ]" />
      <van-field v-model="formData.passport_no" @change="onNric" autocomplete="off"
      oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);"
   name="passport_no" center :required="true"
        type="text" label="ROC / NRIC / PASSPORT NO" placeholder="Please enter the ROC / NRIC / PASSPORT NO" :rules="[
          {
            required: true,
          },
        ]" />
      <van-field v-model="formData.born_date" autocomplete="off" name="born_date" center :required="true"
        label="DATE OF BIRTH: DD-MM-YYYY" placeholder="Please enter DD-MM-YYYY"
        :rules="[{ pattern, message: 'Please enter the DATE OF BIRTH' }]" />
      <van-field v-model="formData.occupation"  oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);"

        autocomplete="off" name="occupation" center :required="true" type="text" label="OCCUPATION"
        placeholder="Please enter the OCCUPATION" :rules="[{ required: true }]" />
      <van-field v-model="formData.address"  oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);"
   autocomplete="off"
        name="address" center :required="true" type="text" label="ROC REGISTERED / RESIDENTIAL ADDRESS"
        placeholder="Please enter the ROC REGISTERED / RESIDENTIAL ADDRESS" :rules="[
          {
            required: true,
          },
        ]" />
      <div class="minTitle">CONTACT DETAILS</div>
      <van-field v-model="formData.phone" autocomplete="off" name="phone" center :required="true"
        @keyup.delete="console.log(1)" @keypress="isLetter($event)" type="text" label="MOBILE NO"
        placeholder="Please enter the MOBILE NO" :rules="[{ required: true }]" />
      <van-field v-model="formData.office_no" autocomplete="off" name="office_no" center @keypress="isLetter($event)"
        type="text" label="OFFICE NO" placeholder="Please enter the OFFICE NO" />
      <van-field v-model="formData.house_no" autocomplete="off" name="house_no" center @keypress="isLetter($event)"
        type="text" label="HOUSE NO" placeholder="Please enter the HOUSE NO" />
      <van-field v-model="formData.email" autocomplete="off" name="email" center :required="true" type="email"
        label="EMAIL ADDRESS" placeholder="Please enter the EMAIL ADDRESS" :rules="[{ required: true }]" />



      <div class="minTitle">Requirement:-</div>
      <div class="contentText">
        1. We have a Regulatory Obligation to verify the source of your fund and wealth.
        Documentary evidence duly verified by the originator or sighted original by advisor
        must be provided to us.
      </div>
      <div class="contentText">
        2. Should more documents are needed to satisfy the regulatory requirement, we will
        advise you in due course.
      </div>
      <div class="contentText">
        3. Private Trust – AI Amanah Generation Trust Application, Section A, B, C and
        D of the KYC Questionnaire are required to be completely filled and signed off by
        the settlor in Section F and PDPA .
      </div>
      <div class="contentText">
        4. Settlor to expect a telephone call from the Trustee for the purpose of simple
        verification.
      </div>

      <span style="font-weight: bold">Private Trust – AI Amanah Generation Trust Application</span>

      <van-field v-model="formData.amount" name="amount" autocomplete="off" center :required="true"
      oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);"
   type="text" label="Amount of Trust Asset (RM) :"
        placeholder="Please enter the Amount of Trust Asset (RM) " :rules="[
          {
            required: true,
          },
        ]" />


      <div class="minTitle">Trustee : Asia International Trust Berhad (Company No. 199501032473) (361679-H)
      </div>

      <div class="contentText">
        As a registered trust corporation, Asia International Trust Berhad (“AITB”) has the required expertise in all
        aspects of estate or trust
        administration including Islamic trust. Our full-time team of qualified and experienced professionals are capable
        of carrying out the trust
        administration including for Islamic trust. AITB has appointed a panel of external Shariah advisor, amongst other
        ISRA Consulting Sdn Bhd,
        established by International Shariah Research Academy for Islamic Finance (ISRA) to advise AITB in relation to
        Islamic matters from time to
        time. AITB is able to act as Trustee to hold the asset distribution on behalf of the minor until the minor has
        attained 21 years old under the
        Guardianship of Infant Act 1961. AITB shall carry out the necessary trustee administrative works as mentioned in
        terms and conditions in the
        AI Trust Deed after deducting the remuneration and out-of-pocket expenses in the best interest of Settlor’s
        Islamic Trust, where applicable.
      </div>

      <div class="minTitle">Fees and Charges </div>
      <div class="contentText">
        Please enclose payment of the amount indicated below being service fee for appointing AITB to carry out the said
        services
        required. Such payment made shall NOT be refundable.
      </div>

      <table>
        <tr>
          <th>Type of Fees </th>
          <th>Fees / Charges</th>
          <th>Fees / Charges</th>
        </tr>
        <!-- <tr>
          <td>Trustee Fee and Setup Fee</td>
          <td>
            <b>Trustee Fee </b>

            <div class="contentText">a) 1% of the Islamic trust asset upon receiving such
              asset from the Settlor.</div>
            <div class="contentText">b) 1% of the Islamic trust asset upon disbursement of
              such asset to the Settlor.</div>
            <b>Setup Fee</b>

            <div class="contentText">a) 3% of the Islamic trust asset raised
              .</div>
          </td>
          <td>To be borne by the Settlor</td>
        </tr> -->
        <tr>
          <td>Extraordinary Services Fee</td>
          <td>Amounting up to 5% of the Islamic Trust Asset invested</td>
          <td>To be borne by the Trust Fund</td>
        </tr>
        <tr>
          <td>Out of Pocket Expenses</td>
          <td>Trustee will bear Out of Pocket Expenses up to a maximum of
            RM10. Anything above RM10 to be borne by DDG International Berhad (to be deducted from the proceeds).</td>
          <td>To be borne by the DDG International Berhad</td>
        </tr>
        <tr>
          <td>Early Termination Fee </td>
          <td>
            <div class="contentText">Year 1 – Not allowed</div>
            <div class="contentText">Year 2 – Fee of 30% of the Islamic trust asset</div>
            <!-- <div class="contentText">Year 3 and onwards – Fee of 25% of the Islamic
              trust asset </div> -->
          </td>
          <td>To be borne by the Settlor</td>
        </tr>
      </table>

      <br></br>


      <!-- <van-field @keyup="onInvestment_amount" v-model="formData.investment_amount" name="investment_amount"
        autocomplete="off" center :required="true"
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text"
        label="Investment Amount:" placeholder="Please enter the Investment Amount
" :rules="[
  {
    required: true,
  },
]" /> -->

      <!-- <van-field v-model="formData.setup_fee" name="setup_fee" autocomplete="off" center :required="true"
      oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);"
   type="text" label="Setup Fee (3%):"
        placeholder="Please enter the Setup Fee (3%) " :rules="[
          {
            required: true,
          },
        ]" /> -->


      <!-- <van-field v-model="formData.trustee_fee" name="trustee_fee" autocomplete="off" center :required="true"
      oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);"
   type="text" label="Trustee Fee (1%)
:" placeholder="Please enter the Trustee Fee (1%)
 " :rules="[
   {
     required: true,
   },
 ]" /> -->

      <!-- <van-field v-model="formData.services_fee" name="services_fee" autocomplete="off" center :required="true"
      oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="Extraordinary Services Fee (5%)

:" placeholder="Please enter the Extraordinary Services Fee
 " :rules="[
   {
     required: true,
   },
 ]" /> -->


      <!-- <van-field v-model="formData.total_payable" name="total_payable" autocomplete="off" center :required="true"
         oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);"
   type="text" label="Total Payable:"
        placeholder="Please enter the Total Payable" :rules="[
          {
            required: true,
          },
        ]" /> -->



      <div class="minTitle">Note: </div>
      <div class="contentText">
        1. KYC to be conducted on the beneficiary(ies) upon the death of the settlor, before distribution can be made.
      </div>

      <div class="minTitle">For cheques, bank drafts or direct transfer, please transfer the total amount to the following
        account:</div>



      <van-field v-model="account_name" name="account_name" center autocomplete="off" disabled type="text"
        label="Account Name" placeholder="Please enter the Account Name" />

      <van-field v-model="formData.bank" name="bank" center autocomplete="off" disabled
      oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);"
   type="text" label="Bank"
        placeholder="Please enter the Bank" />

      <van-field v-model="formData.account_no" disabled @keypress="isLetter($event)" name="account_no" center
      oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);"
   autocomplete="off" type="text" label="Account No"
        placeholder="Please enter the Account No" />

      <van-field v-model="formData.branch" disabled name="branch" center autocomplete="off"
      oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);"
   type="text" label="Bank Branch"
        placeholder="Please enter the Bank Branch" />

      <van-field v-model="currency" name="currency" center autocomplete="off" disabled type="text" label="Currency"
        placeholder="Please enter the Currency" />


      <div class="minTitle">*Important Note</div>

      <div class="minTitle">PLEASE READ:</div>
      <div class="contentText">
        This form is to be completed by a potential client (“Settlor”) who intends to create an Islamic Trust using the
        professional corporate trust
        services of AITB. Islamic Trust creation fee (excluding solicitor’s engagement fees and other legal charges, if
        any) shall be charged according
        to the Islamic Trust’s requirements. Information in this form is intended to facilitate AITB for AI Trust Deed
        preparation and shall NOT be
        treated as having any legal significance.
      </div>
      <div class="minTitle">Settlor’s Declaration and Authorization </div>
      <div class="contentText">Please note that by signing the below, the Settlor has agreed to the setting up of AITB
        Private Trust – AI Amanah Generation Trust,
        to bear the setup fee, extraordinary services fee and trustee fee, and to acknowledge the receipt of the AI Trust
        Deed.
        
      </div>
      
      <div class="contentText">The Settlor hereby agrees and acknowledges that the Islamic Trust Asset referred to in this Application Form shall be combined with the other Settlors’ Islamic Trust Asset to form a Trust Fund for Authorised Investment purposes on their behalf by the Trustee. Such investment shall be for the benefit of the Trust herein and shall be in the exercise of the duty and power of investment of the Trustees of the Islamic Trust Asset. </div>
    
      <div class="contentText">I hereby declare that the above information provided is true and correct.
        
      </div>
      <br>
      <!-- :style="{ border: '1px solid #666', background: '#7c655d' }" -->
      <div class="tl">SETTLOR SIGNATURE</div>


      <vue-esign ref="esign"
        :style="{ display: (this.xyz === '' ? 'block' : formData.settlor_signature === null || formData.settlor_signature === '' ? 'block' : 'none') }"
        :width="800" :height="300" :isCrop="false" :lineWidth="6" lineColor="#000000" bgColor.sync="#fff"
        style="border: 1px solid #666" />
      <van-image
        :style="{ border: '1px solid #666', display: (this.xyz === '1' ? formData.settlor_signature === null || formData.settlor_signature === '' ? 'none' : 'block' : 'none') }"
        class="esignImgbox" :src="formData.settlor_signature" />
      <div class="tr">
        <div class="esignBtn" @click="handleReset()">Clear</div>
        <div class="esignBtn" @click="handleGenerate()">Confirm</div>
      </div>

      <van-field v-model="formData.settlor_name" id="reset1" name="settlor_name" center :required="true" type="text"
      oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);"
   autocomplete="off" label="NAME"
        placeholder="Please enter the NAME" :rules="[{ required: true }]" />
      <van-field v-model="formData.settlor_nric_passport_no" id="reset1" name="settlor_nric_passport_no" center
        :required="true" type="text"
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);"
   autocomplete="off"
        label="NRIC/ Passport No. " placeholder="Please enter the NRIC/ Passport No. " :rules="[{ required: true }]" />
      <van-field v-model="formData.settlor_signature_date" name="settlor_signature_date" center autocomplete="off"
        :required="true" label="DATE: DD-MM-YYYY" placeholder="Please enter DD-MM-YYYY"
        :rules="[{ pattern, message: 'Please enter the DATE' }]" />



      <span style="font-weight: bold">Beneficiary’s Details </span>
      <van-button class="esignBtn" native-type="button" @click="addBeneficiary">Add</van-button>
      <div class="beneficiary_info" v-for="(item, inx) in formData.beneficiary_info" :key="inx">
        <van-field v-model="item.BENEFICIARY_NAME"  oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);"

          name="BENEFICIARY_NAME" autocomplete="off" :required="true" center type="text" label="Beneficiary’s Name
(as per NRIC/
Passport)" placeholder="Please enter the BENEFICIARY NAME / TRUSTEE" :rules="[{ required: true }]" />

        <van-field v-model="item.NRIC_PASSPORT_NO" autocomplete="off"
           oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);"
   name="NRIC_PASSPORT_NO" center
          :required="true" type="text" label="NRIC / Passport No" placeholder="Please enter the NRIC / Passport No"
          :rules="[{ required: true }]" />

        <van-field v-model="item.AGE"  oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);"
   name="AGE" center autocomplete="off"
          :required="true" type="text" label="Age" placeholder="Please enter the Age" :rules="[{ required: true }]" />

        <van-field v-model="item.OCCUPATION"  oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);"
   name="OCCUPATION"
          autocomplete="off" center :required="true" type="text" label="Occupation"
          placeholder="Please enter the Occupation" :rules="[{ required: true }]" />

        <van-field v-model="item.RELATIONSHIP"  oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);"

          name="RELATIONSHIP" center autocomplete="off" :required="true" type="text" label="Relationship"
          placeholder="Please enter the Relationship" :rules="[{ required: true }]" />

        <van-field v-model="item.PERCENTAGE"  oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);"
   name="PERCENTAGE"
          center autocomplete="off" :required="true" type="text" label="Distribution of Share (%)"
          placeholder="Please enter the Distribution of Share (%)" :rules="[{ required: true }]" />

        <van-field v-model="item.EMAIL" name="EMAIL" center autocomplete="off" :required="true" type="email" label="Email"
          placeholder="Please enter the Email" :rules="[{ required: true }]" />

        <van-field v-model="item.HP_NO" name="HP_NO"  oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);"
   center
          autocomplete="off" :required="true" type="text" label="H/P No" placeholder="Please enter the H/P No"
          :rules="[{ required: true }]" />

        <van-button class="esignDelBtn" v-if="inx > 0" slot="button" native-type="button"
          @click="delBeneficiary(inx)">delete</van-button>
      </div>



      <div class="minTitle">
        SUBSITUTED BENEFICIARY(IES)(Applicable for Individual Trustor Only)
      </div>
      <van-field v-model="formData.beneficiary_name_trustee" @input="formData.beneficiary_name_trustee = formData.beneficiary_name_trustee.toUpperCase()"  name="beneficiary_name_trustee" center autocomplete="off"
        type="text" label="BENEFICIARY NAME / TRUSTEE" placeholder="Please enter the BENEFICIARY NAME / TRUSTEE" />
      <van-field v-model="formData.nric_passport_no_company_no" @input="formData.nric_passport_no_company_no = formData.nric_passport_no_company_no.toUpperCase()" name="nric_passport_no_company_no" center
        autocomplete="off" type="text" label="NRIC / PASSPORT NO COMPANY NO"
        placeholder="Please enter the NRIC / PASSPORT NO COMPANY NO" />
      <van-field v-model="formData.relationship" @input="formData.relationship = formData.relationship.toUpperCase()" name="relationship" center autocomplete="off" type="text"
        label="RELATIONSHIP" placeholder="Please enter the RELATIONSHIP" />
      <van-field v-model="formData.contact_no" name="contact_no" center autocomplete="off" type="text"
        label="CONTACT NO" @keypress="isLetter($event)" placeholder="Please enter the CONTACT NO" />
      <van-field v-model="formData.percentage_of_distribution" name="percentage_of_distribution" center type="text"
        autocomplete="off" label="PERCENTAGE OF DISTRIBUTION"
        placeholder="Please enter the PERCENTAGE OF DISTRIBUTION" />







      <div class="minTitle">
        Note 1

      </div>
      <div class="contentText">
        1. The beneficiary(ies) will be the first in line to receive the Islamic trust fund upon death of the Settlor in
        accordance to their respective share percentage. In the event of death of any of the beneficiary (ies) the Islamic
        trust and the return or accumulated income if any shall be distributed to the remaining beneficiary(ies) in
        proportion to their share percentage.

      </div>
      <div class="contentText">
        2. In the event the beneficiary is below age of 18, the money will be retained with Trustee until reaching the age
        of majority
      </div>

      <div class="contentText">
        3. If insufficient space for additional beneficiary(ies) you may complete their details on a separate piece of
        paper.

      </div>

<!-- -------------------------------------------------------------------------- -->

      <div class="minTitle">
        BANK DETAILS – SOURCE OF FUND (CASH is Not Acceptable).
      </div>
      <div class="minTitle">Bank 1</div>

      <van-field v-model="formData.bank_one.Bank" 
      name="Bank" 
      center 
      :required="true" 
      autocomplete="off"
       type="text"
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" 
  label="Bank"
   placeholder="Please enter the Bank"
        :rules="[{ required: true }]" />


      <van-field v-model="formData.bank_one.Account" name="Account" center :required="true" autocomplete="off" type="text"
        label="Account No" placeholder="Please enter the Account No" :rules="[{ required: true }]" />

      <van-field v-model="formData.bank_one.Account2" name="Account2" center autocomplete="off" :required="true" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="Account Holder" placeholder="Please enter the Account Holder"
        :rules="[
          { required: true },
        ]" />

  

      <!-- -------bank_two----------------------bank_two----------------------bank_two-------------------------- -->

      <van-button class="esignBtn" v-if="!bank2" id="addBankId" native-type="button" @click="addBank">Add
        Bank</van-button>
      <van-button class="esignBtn" v-else id="removeBankId" native-type="button" @click="removeBank">Remove
        Bank</van-button>
      <div v-if="bank2" id="bank2Id">
        <div class="minTitle">Bank 2</div>
        <van-field v-model="formData.bank_two.Bank" :required="true" :rules="[
          { required: true },
        ]" name="Bank" center type="text" autocomplete="off" label="Bank" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" placeholder="Please enter the Bank" />

        <van-field :required="true" :rules="[
          { required: true },
        ]" v-model="formData.bank_two.Account" name="Account" center autocomplete="off" type="text" label="Account No"
          placeholder="Please enter the Account No" />

        <van-field :required="true" :rules="[
          { required: true },
        ]" v-model="formData.bank_two.Account2" name="Account2" center autocomplete="off" type="text" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" label="Account Holder" placeholder="Please enter the Account Holder" />
        
      </div>
<!-- ---------------------------------------------------------------------------- -->

<div class="minTitle">
        PAYMENTS TO SETTLOR / AUTHORIZED PERSON Details of the bank account to
        which payments to the Settlor / Authorized person are to be transferred:
      </div>
      <van-field v-model="formData.settlor_bank" name="settlor_bank" center :required="true" autocomplete="off"
      @input="formData.settlor_bank = formData.settlor_bank.toUpperCase()"
        type="text" label="NAME OF BANK" placeholder="Please enter the NAME OF BANK" :rules="[{ required: true }]" />


      <van-field v-model="formData.settlor_account_no" name="settlor_account_no" center :required="true" autocomplete="off" type="text"
        label="ACCOUNT NO" placeholder="Please enter the ACCOUNT NO" :rules="[{ required: true }]" />


      <van-field v-model="formData.settlor_bank_location" name="settlor_bank_location" center :required="true" autocomplete="off" type="text"
      @input="formData.settlor_bank_location = formData.settlor_bank_location.toUpperCase()"
        label="BANK LOCATION" placeholder="Please enter the BANK LOCATION" :rules="[{ required: true }]" />


      <van-field v-model="formData.settlor_acc_owner" name="settlor_acc_owner" autocomplete="off" center :required="true" type="text"
      @input="formData.settlor_acc_owner = formData.settlor_acc_owner.toUpperCase()"
        label="ACCOUNT OWNER" placeholder="Please enter the ACCOUNT OWNER" :rules="[{ required: true }]" />







      <br></br>
      <!-- :style="{ border: '1px solid #666', background: '#7c655d' }" -->
      <div class="tl">SETTLOR SIGNATURE</div>


      <vue-esign ref="settlor_signature_1"
        :style="{ display: (this.xyz1 === '' ? 'block' : formData.settlor_signature_1 === null || formData.settlor_signature_1 === '' ? 'block' : 'none') }"
        :width="800" :height="300" :isCrop="false" :lineWidth="6" lineColor="#000000" bgColor.sync="#fff"
        style="border: 1px solid #666" />
      <van-image
        :style="{ border: '1px solid #666', display: (this.xyz1 === '1' ? formData.settlor_signature_1 === null || formData.settlor_signature_1 === '' ? 'none' : 'block' : 'none') }"
        class="esignImgbox" :src="formData.settlor_signature_1" />
      <div class="tr">
        <div class="esignBtn" @click="handleReset1()">Clear</div>
        <div class="esignBtn" @click="handleGenerate1()">Confirm</div>
      </div>

      <van-field v-model="formData.settlor_name_1" id="reset1" name="settlor_name_1" center :required="true" type="text"
      oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);"
   autocomplete="off" label="NAME"
        placeholder="Please enter the NAME" :rules="[{ required: true }]" />

      <van-field v-model="formData.settlor_nric_passport_no_1" id="reset1" name="settlor_nric_passport_no_1" center
        :required="true" type="text"
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);"

        autocomplete="off" label="NRIC/ Passport No. " placeholder="Please enter the NRIC/ Passport No. "
        :rules="[{ required: true }]" />

      <van-field v-model="formData.settlor_signature_date_1" name="settlor_signature_date_1" center autocomplete="off"
        :required="true" label="DATE: DD-MM-YYYY" placeholder="Please enter DD-MM-YYYY"
        :rules="[{ pattern, message: 'Please enter the DATE' }]" />



      <!-- 提交 -->
    <van-button v-click-outside="outSide" :disabled="selectData"  v-if="!isDone" round block type="info" native-type="submit" color="#7C655D">
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
import { uploadAutograph } from "@/api/util";
import { createOrdersAagt, getOrdersForms, putOrdersForms } from "@/api/order";
import ClickOutside from 'vue-click-outside'
export default {
  props: ['orderDataInfo'],
  data() {
    return {
      selectData:false,
      account_name: "ASIA INTERNATIONAL TRUST BERHAD",
      currency: "Ringgit Malaysia (RM)",
      formData: {

        bank_one: {
          Bank: '',
          Account: '',
          Account2: '',
        
        },
        bank_two: {
          Bank: '',
          Account: '',
          Account2: '',
         
        },
    settlor_bank:'',
   settlor_account_no: "",
    settlor_bank_location:"",
    settlor_acc_owner:"",


        name: "",
        passport_no: "",
        born_date: "",
        occupation: "",
        address: "",
        phone: "",
        office_no: "",
        house_no: "",
        email: "",

        // amount: "",
        // investment_amount: "",
        // setup_fee: 0,
        // trustee_fee: 0,
        // services_fee: "",
        // total_payable: "",

        bank: "AFFIN ISLAMIC BANK BERHAD",
        account_no: "105020054326",
        branch: "MENARA AFFIN, JALAN RAJA CHULAN",

        settlor_signature: "",
        settlor_name: "",
        settlor_nric_passport_no: "",
        settlor_signature_date: moment(new Date()).format('DD-MM-YYYY'),


 beneficiary_name_trustee: "",
        nric_passport_no_company_no:  "",
        relationship: "",
        contact_no: "",
        percentage_of_distribution: "",

        beneficiary_info: [
          {
            BENEFICIARY_NAME: "",
            NRIC_PASSPORT_NO: "",
            AGE: "",
            OCCUPATION: "",
            RELATIONSHIP: "",
            PERCENTAGE: "",
            EMAIL: "",
            HP_NO: "",
          },
        ],

        settlor_signature_1: "",
        settlor_name_1: "",
        settlor_signature_date_1: moment(new Date()).format('DD-MM-YYYY'),
        settlor_nric_passport_no_1: "",

        reorder: this.$store.state.reorder,
        reorder_ref: this.$store.state.reorderId,
        remote:this.$store.state.isOverseaSignature.toString()

      },
      bank2: false,
      xyz: "",
      xyz1: "",
      sig1: true,
      sig2: true,
      qwe: '',
      // sig1: this.$store.state.reorder == 0 ? true: false,
      isShowPicker: false, // 控制日期彈框
      currentContent: new Date(), // 日期彈框顯示當前日期
      whichDate: "", // 區分是哪個日期觸發彈框
      from: "", // 記錄哪個頁面進入的
      isFilled: "", // 表單id(未填0)
      minDate: new Date(1900, 0, 1),
      //  xyz: this.$store.state.reorder == 0 ? '':'1',
      isDone: false, // 訂單是否已確認
      pattern: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,// 正则验证时间
    };
  },

  // this.sig1 = false
  //           this.xyz = "1"
  mounted() {
    console.log(this.$route.query, 222222);
    console.log("this.$store.state.editSig",    this.$store.state.editSig);
    console.log("this.$store.state.reorderId", this.$store.state.reorderId);
    console.log("this.$store.state.reorder", this.$store.state.reorder);

    // this.from = this.$route.query.from;
    // this.isFilled = this.$route.query.isFilled;
    // this.isDone = this.$route.query.status == 1 ? true : false;

    if (this.$store.state.isOverseaSignature) {
   //   alert("1")
      this.from = "create"
      this.isFilled = 0
    } else {
 //     alert("2")
      this.from = this.$route.query.from;
      this.isFilled = this.$route.query.isFilled;
      this.isDone = this.$route.query.status == 1 ? true : false;
    }
    if (this.$route.query.isShare) {
   //   alert("3")
      this.isFilled = this.$route.query.AagtApplicationForm
    }

console.log("______________isFilled_____________",this.isFilled)
    this.isDone = sessionStorage.getItem('orderStatus') === '2'
    this.getFormData();
    console.log("this.$store.state.reorder...........................", this.$store.state.reorder)
    console.log("QQQQQQ", this.$store.state.reordercustomer_app_formAagt)
    if (this.$store.state.reorder == 1) {

      if (this.$store.state.reordercustomer_app_formAagt > 0) {

        getOrdersForms(this.$store.state.reordercustomer_app_formAagt, { type: "AAGT Application Form" })
          .then((res) => {

            console.log(res, "---------5---5---5---5--");
            res.beneficiary_info = [
              {
                BENEFICIARY_NAME: "",
                NRIC_PASSPORT_NO: "",
                AGE: "",
                OCCUPATION: "",
                RELATIONSHIP: "",
                PERCENTAGE: "",
                EMAIL: "",
                HP_NO: "",
              },
            ];
            res.amount = ""


            if(res.bank_two != null){
              res.bank_two = JSON.parse(res.bank_two)
            }
            else{
              res.bank_two =  {
    "Bank": "",
    "Account": "",
    "Account2": ""
}
            }
            if(res.bank_one != null){
              res.bank_one = JSON.parse(res.bank_one)
            }
            else{
              res.bank_one =  {
    "Bank": "",
    "Account": "",
    "Account2": ""
}
            }
         
            // res.investment_amount= "",
            // res. setup_fee= 0,
            // res.trustee_fee= 0,
            // res.services_fee= "",
            // res.total_payable= "",



            res.beneficiary_name_trustee = ""
            res.nric_passport_no_company_no = ""
            res.relationship = ""
            res.contact_no = ""
            res.percentage_of_distribution = ""
            res.price = ""
            res.details_bank_name = ""
            res.details_account_no = ""
            res.details_account_owner = ""
            res.account_name = ""
            res.signature_date = moment(new Date()).format('DD-MM-YYYY')

            res.bank = ""
            res.account_no = ""
            res.swift_code = ""

            res.settlor_signature = ""
            res.settlor_signature_1 = ""

            console.log("*********3*3*3**1*", res)
            res.reorder = this.$store.state.reorder
            res.reorder_ref = this.$store.state.reorderId
            //     reorder: this.$store.state.reorder,
            // reorder_ref: this.$store.state.reorderId,
            this.formData = res;
            console.log("*********3*3*3**2*", this.formData)

            if (this.formData.bank_two.Bank === '') {
            
            this.bank2 = false
          }
          else {
        
            this.bank2 = true
          }
     

          this.sig1 = false
          this.xyz = "1"
          this.xyz1 = "1"

            this.sig1 = false
            this.xyz = "1"
            // document.getElementById('img1').style.display = 'block'
            // document.getElementById('can1').style.display = 'none'
          })
          .catch((err) => {
            console.log(err);
          });
      }

    }
  },
  directives: {
    ClickOutside
  },
  methods: {
    removeBank() {
      this.bank2 = false
      this.formData.bank_two = {
        Bank: '',
        Account: '',
        Account2: '',
        
      };

    },
    addBank() {
      this.bank2 = true

    },
    inSide(){
      this.selectData = true
    },
    outSide(){
    //  alert("vvh")
this.selectData = false
    },
    uppercase() {
      this.code = this.code.toUpperCase();
    },

    onInvestment_amount(val) {
      console.log("******** 3 ***********", val.target._value * 0.03)
      console.log("******** 1 ***********", val.target._value * 0.01)
      console.log("******** 5 ***********", val.target._value * 0.05)
      console.log("******** TOTAL ***********", Number(val.target._value * 0.03) + Number(val.target._value * 0.01) + Number(val.target._value * 0.05) + Number(val.target._value))


      // this.formData.setup_fee = Number(val.target._value * 0.03)
      // this.formData.trustee_fee = Number(val.target._value * 0.01)
      this.formData.services_fee = Number(val.target._value * 0.05)
      // this.formData.total_payable = Number(val.target._value * 0.03) + Number(val.target._value * 0.01) + Number(val.target._value * 0.05) + Number(val.target._value)
      this.formData.total_payable =  Number(val.target._value * 0.05) + Number(val.target._value)
    },
    onNric(val) {
      console.log("*******************", val.target._value)
      this.formData.settlor_nric_passport_no = val.target._value
      this.formData.settlor_nric_passport_no_1 = val.target._value
    },
    onCampanyIndividualName(val) {
      console.log("*******************", val.target._value)
      this.formData.settlor_name = val.target._value
      this.formData.settlor_name_1 = val.target._value
    },
    //  mobile validation (number only)
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[0-9]+$/.test(char)) return true;
      else e.preventDefault();
    },
    OverseaSignature() {
      this.$store.commit('changeIsOverseaSignature', true)
      //  this.$toast({
      //   type: "success",
      //   message: " Oversea Signature setting success",
      // });
      alert("Oversea Signature setting success")
    },
    // 如果已填 獲取數據
    getFormData() {

      console.log("QQQQQQ", this.isFilled)
      if (this.isFilled > 0) {

     
        getOrdersForms(this.isFilled, { type: "AAGT Application Form" })
          .then((res) => {
            console.log(res, "獲取Customer Application數據-----------");
        

      

//         res.bank_one = res.bank_one == null ?         {
//     "Bank": "11",
//     "Account": "22",
//     "Account2": "33"
// } : res.bank_one

//         res.bank_two = res.bank_two == null ?         {
//     "Bank": "11",
//     "Account": "22",
//     "Account2": "33"
// } : res.bank_two



        console.log(res, "________________res_________1________");
        console.log(typeof res.bank_two, "________typeof res.bank_two_____________________");
        console.log(typeof res.bank_one, "________typeof res.bank_one_____________________");
            res.beneficiary_info = JSON.parse(res.beneficiary_info)
            if(res.bank_two != null){
              res.bank_two = JSON.parse(res.bank_two)
            }
            else{
              res.bank_two =  {
    "Bank": "",
    "Account": "",
    "Account2": ""
}
            }
            if(res.bank_one != null){
              res.bank_one = JSON.parse(res.bank_one)
            }
            else{
              res.bank_one =  {
    "Bank": "",
    "Account": "",
    "Account2": ""
}
            }
           
         
            this.formData = res;
            console.log(res, "________________res________2_________");

            if (this.formData.bank_two.Bank === '') {
            
              this.bank2 = false
            }
            else {
          
              this.bank2 = true
            }
       

            this.sig1 = false
            this.xyz = "1"
            this.xyz1 = "1"
            // document.getElementById('img1').style.display = 'block'
            // document.getElementById('can1').style.display = 'none'
          })
          .catch((err) => {
            console.log(err);
          });
      }
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
    // 展示日期弹框
    /*    onShowPicker(val) {
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
    // 提交表單
    submit(form) {
      this.selectData = true
      // alert("d")
      console.log("555555555555555555555", form);
      console.log(form);
      console.log("-----4----4---4", this.formData);
      console.log("this.$store.state.reorderId------1", this.$store.state.reorderId);
      console.log("this.$store.state.reorder---------2", this.$store.state.reorder);

      if (!this.formData.settlor_signature && this.$route.query.isShare) {
        this.$toast.fail("Please sign your name");
        return;
      } else if (!this.formData.settlor_signature_1 && this.$route.query.isShare) {
        this.$toast.fail("Please sign your name");
        return;
      }

      // if (!this.formData.settlor_signature && this.$store.state.isOverseaSignature == false && this.$store.state.isOverseaSignatureRemote == false) {
      //   this.$toast.fail("Please sign your name");
      //   return;
      // } else if (!this.formData.settlor_signature_1 && this.$store.state.isOverseaSignature == false && this.$store.state.isOverseaSignatureRemote == false) {
      //   this.$toast.fail("Please sign your name");
      //   return;
      // }
      // else if (!this.formData.signature_date) {
      //   this.$toast.fail("Please enter the signature_date");
      //   return;
      // }
      let data = JSON.parse(JSON.stringify(this.formData));
      console.log("........00000....", data);
      console.log("........00000..1..", this.formData.beneficiary_info);
      console.log("........00000...2.", JSON.stringify(this.formData.beneficiary_info));

      console.log("........00000...3.", (this.formData.beneficiary_info).length);


      let sum = 0;



               for (let i = 0; i < this.formData.beneficiary_info.length; i++) {
                sum = sum +Number(this.formData.beneficiary_info[i].PERCENTAGE)

               }
               if(sum > 100){
                alert("Total percentage of Share have to be 100% .")
                return
               }
               if(sum < 100){
                alert("The total percentage of share in the beneficiary section needs to be 100% .")
                return
               }

               console.log("........00000..sum..", sum);
      //  alert("d")
      console.log("........00000....", this.isFilled);

      data.beneficiary_info = JSON.stringify(this.formData.beneficiary_info);
      data.bank_one = JSON.stringify(this.formData.bank_one);
      data.bank_two = JSON.stringify(this.formData.bank_two);
      console.log("-------------first form data parameter--------------------", data)
      if (this.isFilled > 0) {
        // 修改
        putOrdersForms(this.isFilled, {
          type: "AAGT Application Form",
          data: JSON.stringify(data),
        }).then((res) => {
          console.log(res, "修改cusApp成功");
          this.$toast({
            type: "success",
            message: "Modify the success",
          });

          if (!this.$route.query.isShare && !this.$store.state.isOverseaSignature) {
            this.$router.go(-1);
          }
        });
      } else {
        //   alert("d")
        console.log('---------rrrrrrrrrrrrrrr-------------', this.formData.beneficiary_info)
        console.log('---------rrrrrrrrrrrrrrr----length---------', this.formData.beneficiary_info.length)
                for (let i = 0; i < this.formData.beneficiary_info.length; i++) {
               //   alert("b")
          if(this.formData.beneficiary_info[i].RELATIONSHIP === "wife" || this.formData.beneficiary_info[i].RELATIONSHIP === "WIFE" || this.formData.beneficiary_info[i].RELATIONSHIP === "husband" || this.formData.beneficiary_info[i].RELATIONSHIP === "HUSBAND"  || this.formData.beneficiary_info[i].RELATIONSHIP === "SPOUSE" || this.formData.beneficiary_info[i].RELATIONSHIP === "spouse"){
          // alert("a")
           console.log('---------rrrrrrrrrrrrrrr-------------',this.formData.beneficiary_info[i].BENEFICIARY_NAME)
           console.log('---------rrrrrrrrrrrrrrr-------------',this.formData.beneficiary_info[i].NRIC_PASSPORT_NO)
            this.$store.commit('ChangeBENEFICIARY_NAMEAagt', this.formData.beneficiary_info[i].BENEFICIARY_NAME)
            this.$store.commit('ChangeCOMPANY_NOAagt', this.formData.beneficiary_info[i].NRIC_PASSPORT_NO)
break
          } 
        }
        createOrdersAagt(data)
          .then((res) => {
            console.log(res, ".....yyy.......");

//             formData: {

// bank_one: {
//   Bank: '',
//   Account: '',
//   Account2: '',

// },
// bank_two: {
//   Bank: '',
//   Account: '',
//   Account2: '',
 
// },
this.$store.commit('Changebank_oneBank', this.formData.bank_one.Bank)
this.$store.commit('Changebank_oneAccount', this.formData.bank_one.Account)
this.$store.commit('Changebank_oneAccount2', this.formData.bank_one.Account2)
this.$store.commit('Changebank_twoBank', this.formData.bank_two.Bank)
this.$store.commit('Changebank_twoAccount', this.formData.bank_two.Account)
this.$store.commit('Changebank_twoAccount2', this.formData.bank_two.Account2)
this.$store.commit('ChangeReorder', '')
            console.log(this.formData.bank_one.Bank, ".....yyy......."); 


            this.isFilled = res.AagtApplicationForm
            this.$toast.success("Creating a successful");
            this.$store.commit('ChangecampanyIndividualNameAagt', res.form_data.name)
            //  this.$store.commit('signature', data.signature)
            this.$store.commit("changePage", {
              tabbar: "/KYCAagt",
              title: "2/5 KYC Questionnaire"

            });
            if (!this.$store.state.isOverseaSignature && !this.$route.query.isShare) {
              console.log('98974645555555555443333333311111111123')
              sessionStorage.setItem('abcd', res.form_data.name)
              this.$store.commit('changeCustomerApplicationId', res.id)
              this.$store.commit('ChangecampanyIndividualNameAagt', res.form_data.name)
              this.$store.commit('Changepassport_noAagt', res.form_data.passport_no)
              this.$store.commit('Changeborn_dateAagt', res.form_data.born_date)
              this.$store.commit('ChangeemailAagt', res.form_data.email)
              this.$store.commit('ChangephoneAagt', res.form_data.phone)
              // this.$store.commit('Changehouse_no', data.house_no)
              this.$store.commit('Changeoffice_noAagt', res.form_data.office_no)
              this.$store.commit('ChangeaddressAagt', res.form_data.address)
              this.$store.commit('ChangeoccupationAagt', res.form_data.occupation)
              // this.$store.commit('Changesignature', data.signature)

              this.$store.commit('Changedetails_account_ownerAagt', res.form_data.bank)
              // this.$store.commit('Changedetails_bank_name', data.details_bank_name)
              this.$store.commit('Changedetails_account_noAagt', res.form_data.account_no)
              this.$router.push({ path: "/KYCAagt?from=create&orderId=" + res.id, query: { campanyIndividualName: res } });
            } else {
              console.log(res.id, "iiiiiiiiiiiiiiiiiiiiii")
              sessionStorage.setItem('abcd', res.name)
              this.$store.commit('changeCustomerApplicationId', res.id)
              this.$store.commit('ChangecampanyIndividualNameAagt', res.form_data.name)
              // this.$store.commit('Changepassport_no', data.passport_no)
              this.$store.commit('Changepassport_noAagt', res.form_data.passport_no)
              this.$store.commit('Changeborn_dateAagt', res.form_data.born_date)
              this.$store.commit('ChangeemailAagt', res.form_data.email)
              this.$store.commit('ChangephoneAagt', res.form_data.phone)
              // this.$store.commit('Changehouse_no', data.house_no)
              this.$store.commit('Changeoffice_noAagt', res.form_data.office_no)
              this.$store.commit('ChangeaddressAagt', res.form_data.address)
              this.$store.commit('ChangeoccupationAagt', res.form_data.occupation)
              // this.$store.commit('Changesignature', data.signature)
              this.$store.commit('Changedetails_account_ownerAagt', res.form_data.bank)
              // this.$store.commit('Changedetails_bank_name', data.details_bank_name)
              this.$store.commit('Changedetails_account_noAagt', res.form_data.account_no)

              //     this.$root.$emit('KYC') 
              //  @click="$emit('onSelect')"
              this.$emit('onSelect1')
              //   this.$store.commit('campanyIndividualName',data)

            }
            // this.$router.go(-1)
          })
          .catch((err) => {
            console.log(err.response);
          });
      }
    },
    // 清空画布
    handleReset(index) {
      this.$refs["esign"].reset(); //清空画布
      this.sig1 = true
      this.xyz = ""
      this.formData.settlor_signature = ''
      // document.getElementById("2reset1").focus()
    },
    handleReset1(index) {
      this.$refs["settlor_signature_1"].reset(); //清空画布
      this.sig2 = true
      this.xyz1 = ""
      this.formData.settlor_signature_1 = ''
      // document.getElementById("2reset2").focus()
    },
    handleGenerate1(index) {
      // if (this.$store.state.isOverseaSignature ==false && this.$store.state.isOverseaSignatureRemote == false) {
        var that = this;
        this.$refs["settlor_signature_1"]
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
                this.formData.settlor_signature_1 = res.path;
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
      // else {
      //   alert("Subscriber Signature should be added by the Subscriber from the shared link.")
      //   this.$refs["settlor_signature_1"].reset();
      // }
    },
    handleGenerate(index) {
      console.log("...........A............",this.$store.state.isOverseaSignature)
      console.log("...........A............",this.$store.state.isOverseaSignatureRemote)
      console.log("...........B............",this.$store.state.editSig)
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
                this.formData.settlor_signature = res.path;
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
      // else {
      //   alert("Subscriber Signature should be added by the Subscriber from the shared link.")
      //   this.$refs["esign"].reset();
      // }
    },
    // 添加beneficiary_info
    addBeneficiary() {
      if (this.formData.beneficiary_info.length < 6) {
        this.formData.beneficiary_info.push({
          BENEFICIARY_NAME: "",
          NRIC_PASSPORT_NO: "",
          AGE: "",
          OCCUPATION: "",
          RELATIONSHIP: "",
          PERCENTAGE: "",
          EMAIL: "",
          HP_NO: "",

        });
      }
    },
    delBeneficiary(inx) {
      this.formData.beneficiary_info.splice(inx, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.CustomerApplication {
  /* padding: 0 16px; */
  text-align: left;
}

.minTitle {
  font-weight: bold;
  line-height: 24px;
}

/deep/ .van-field__label {
  width: 13.2rem;
}

.beneficiary_info {
  position: relative;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
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

/*手机*/
@media screen and (max-width: 768px) {
  /deep/ .van-field__label {
    width: 30rem;
  }

}



/* @media screen and (max-width: 576px) {
      .esignImgbox {
    width: 200px !important;
    height: auto !important;

}
    } */

/* width="800px" height="300px" */

element.style {
  border: 1px solid rgb(102, 102, 102);
  display: block;
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

.contentText {
  line-height: 24px;
  padding-left: 1rem;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
.capitalize {
    text-transform: capitalize;
}</style>

