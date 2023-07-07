<template>
  <div class="ThirdPartyDeclaration bodybox">
    <van-form validate-first @submit="submit" :submit-on-enter="false" :scroll-to-error="true"
      v-if="this.$store.state.isOverseaSignature == true">
      <div class="minTitle">
        ASIA INTERNATIONAL TRUST BERHAD Islamic(Company No.: 199501032473 (361679-H))
      </div>
      <div class="minTitle">THIRD-PARTY FUNDS DECLARATION FORM</div>
      <div class="minTitle">
        To be completed by the Settlor if the Trust Capital Funds for this application is to be funded by
        anyone other than the Settlor
      </div>

      <van-field name="settlor_type" label="Third Party Contributor (if applicable)">
        <template #input>
          <van-checkbox-group v-model="formData.settlor_type" direction="horizontal">
            <van-checkbox @click="radio3(1)" :name="1">Individual</van-checkbox>
            <van-checkbox @click="radio3(2)" :name="2">Organization</van-checkbox>
          </van-checkbox-group>

        </template>
      </van-field>
<!--       
      <van-field name="settlor_type" label="Third Party Contributor (if applicable)">
        <template #input>
          <van-radio-group v-model="formData.settlor_type" direction="horizontal">
            <van-radio :name="1">Individual</van-radio>
            <van-radio :name="2">Organization</van-radio>
          </van-radio-group>
        </template>
      </van-field> -->

      <div class="minTitle">Name of Settlor:</div>
      <!-- -------------------------individual---------------------------------------------- -->
      <div v-if="formData.settlor_type == 1">
      <div class="minTitle">Third-Party Details (Individual)</div>
      <van-field class="trustorName" v-model="formData.trustor_name" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" autocomplete="off" name="trustor_name" center type="text"
        label="Name of the Contributor(Individual)" placeholder="Please enter the Name of the Contributor(Individual)" />

      <van-field v-model="formData.trustor_date" autocomplete="off" name="trustor_date" center
        label="DATE OF BIRTH: DD-MM-YYYY" placeholder="Please enter Date of Birth" @keypress="isLetterDate($event)" />

      <!-- <van-field
        readonly
        v-model="formData.trustor_date"
        name="trustor_date"
        center
        :required="true"
        right-icon="arrow"
        label="Date of Birth"
        placeholder="Please enter the Date of Birth"
        @click="onShowPicker('trustor_date')"
        :rules="[
          {
            required: true,
          },
        ]"
      /> -->
      <van-field v-model="formData.nationality" name="nationality" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" autocomplete="off" label="Nationality (Please provide Photocopy of IC/ Passport) "
        placeholder="Please enter the Nationality " />
      <van-field v-model="formData.trustor_passport" name="trustor_passport" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" autocomplete="off" type="text" label="NRIC/Passport No"
        placeholder="Please enter the NRIC/Passport No" />
      <van-field v-model="formData.trustor_address" name="trustor_address" center autocomplete="off" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="Proof of Current Address of the Individual (Please provide Utility Bill)"
        placeholder="Please enter the Proof of current Address of the Individual" />
      <van-field v-model="formData.trustor_phone" name="trustor_phone" center autocomplete="off"
        @keypress="isLetter($event)" type="text" label="Contact No" placeholder="Please enter the Contact No" />
      <!-- <van-field
        v-model="formData.trustor_reference_no"
        name="trustor_reference_no"
        center
        :required="true"
        type="text"
        label="Reference No"
        placeholder="Please enter the Reference No"
        :rules="[{ required: true, message: 'Please enter the Reference No' }]"
      /> -->
      <van-field v-model="formData.occupation" name="occupation" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" autocomplete="off" type="text" label="Occupation"
        placeholder="Please enter the Occupation" />
      <van-field v-model="formData.industry" name="industry" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" autocomplete="off" type="text" label="Industry"
        placeholder="Please enter the Industry" />
      <van-field v-model="formData.name_of_employer" name="name_of_employer" center autocomplete="off" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="Name of Employer"
        placeholder="Please enter the Name of Employer" />
      <van-field v-model="formData.nature_of_business" name="nature_of_business" autocomplete="off" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="Nature of Business(if Self-Employed)"
        placeholder="Please enter the Nature of Business(if Self-Employed)" />
      <van-field v-model="formData.relationship_with_settlor" name="relationship_with_settlor" center autocomplete="off"
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="Relationship with Settlor"
        placeholder="Please enter the Relationship with Settlor" />
      <van-field v-model="formData.annual_salary_income" name="annual_salary_income" center type="text" autocomplete="off"
        label="Annual Salary/Income 
(Please provide Payslip/ Income Tax Return)" placeholder="Please enter the Annual Salary/ Income" />
</div>
     

<!-- -----------------------------organisation---------------------------------------------- -->
<div v-if="formData.settlor_type == 2">
      <div class="minTitle">Third-Party Details (Legal Entity)</div>
      <van-field v-model="formData.third_party_name" name="third_party_name" center autocomplete="off" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="Name of Contributor(Company/Organisation)"
        placeholder="Please enter the Name of Contributor(Company/Organisation)" />

      <van-field v-model="formData.third_party_date" autocomplete="off" name="third_party_date" center
        label="Date of Registration: DD-MM-YYYY" placeholder="Please enter Date of Registration"
        @keypress="isLetterDate($event)" />

      <!-- <van-field
        readonly
        v-model="formData.third_party_date"
        name="third_party_date"
        center
        :required="true"
        right-icon="arrow"
        label="Date of Registration"
        placeholder="Please enter the Date of Registration"
        @click="onShowPicker('third_party_date')"
        :rules="[
          {
            required: true,
          },
        ]"
      /> -->
      <van-field v-model="formData.third_party_passport" name="third_party_passport" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" autocomplete="off" label="Company/ Organisation Registration No."
        placeholder="Please enter the Company/ Organisation Registration No." />
      <van-field v-model="formData.third_party_phone" name="third_party_phone" center @keypress="isLetter($event)"
        type="text" autocomplete="off" label="Company Contact No" placeholder="Please enter the Company Contact No" />
      <van-field v-model="formData.third_party_address" name="third_party_address" autocomplete="off" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="Proof of current Address of the Company/ Organisation"
        placeholder="Please enter the Proof of current Address of the Company/ Organisation" />
      <van-field v-model="formData.name_of_director" name="name_of_director" center autocomplete="off" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="Name of Director(s)"
        placeholder="Please enter the Name of Director(s)" />
      <van-field v-model="formData.name_of_shareholder" name="name_of_shareholder" center autocomplete="off" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="Name of Shareholder(s)"
        placeholder="Please enter the Name of Shareholder(s)" />
      <van-field v-model="formData.nature_of_business2" name="nature_of_business2" center autocomplete="off" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="Nature of Business"
        placeholder="Please enter the Nature of Business" />
      <van-field v-model="formData.profit_loss_statement" name="profit_loss_statement" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" autocomplete="off" type="text" label="Profit & Loss Statement"
        placeholder="Please enter the Profit & Loss Statement" />
      <van-field v-model="formData.source_of_fund2" name="source_of_fund2" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" autocomplete="off" type="text" label="Source of Fund"
        placeholder="Please enter the Source of Fund" />

      <van-field v-model="formData.relationship_with_settlor" name="relationship_with_settlor" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" autocomplete="off" type="text" label="Relationship with Settlor"
        placeholder="Please enter the Relationship with Settlor" />

      </div>
      <div class="minTitle">If Payslip (Item 12) is not available, then please provide:EPF statement/ Unit trust
        statement/ S&P agreement/ etc </div>
      <van-field v-model="formData.source_of_wealth" name="source_of_wealth" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" autocomplete="off" type="text" label="Source of Wealth"
        placeholder="Please enter the Source of Wealth" />
      <div class="minTitle">Please provide: Bank statement with Name of Bank, Name of Account Holder, Account Number.
      </div>
      <van-field v-model="formData.source_of_fund" name="source_of_fund" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" autocomplete="off" type="text" label="Source of Fund(Origin of fund)"
        placeholder="Please enter the Source of Fund(Origin of fund)" />
        <div v-if="formData.settlor_type == 2">
      <div class="minTitle">Contributor’s Contact Person </div>
      <van-field v-model="formData.contributor_name" name="contributor_name" center autocomplete="off" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="Name" placeholder="Please enter the Name" />
      <van-field v-model="formData.contributor_contact" name="contributor_contact" center @keypress="isLetter($event)"
        type="text" autocomplete="off" label="Contact No" placeholder="Please enter the Contact No" />
      <van-field v-model="formData.contributor_email" name="contributor_email" center autocomplete="off" type="text"
        label="Email" placeholder="Please enter the Email" />

      </div>
      <div class="minTitle">Note: [1] Bank statement with Name of Bank, Name of Account Holder, Account Number</div>


      <van-field name="declaration_third_party" label="Declaration of Third-Party Funds (Please tick √)">
        <template #input>
          <van-checkbox-group v-model="formData.declaration_third_party" @change="declarationThirdParty">
            <van-checkbox :name="1">Natural love and affection or as gift to me (Settlor)</van-checkbox>
            <van-checkbox :name="2">Money owed to me (Settlor)</van-checkbox>
            <van-checkbox :name="3">Other, please specify</van-checkbox>
            <van-field v-model="formData.others_please_specify" name="others_please_specify" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="" placeholder="Please enter the Others, please specify"
              :rules="[{ required: isothers_please_specify }]" />

            <van-checkbox :name="4">Relationship between the Settlor and Third-Party</van-checkbox>
            <van-field v-model="formData.relationship_between" name="relationship_between" center type="text" label=""
              oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" placeholder="Please enter the Relationship between the Settlor and Third-Party"
              :rules="[{ required: isrelationship_between }]" />
            <van-checkbox :name="5">All photocopied documents must be verified (i.e. signed, dated, name stated) by the
              Marketing/ Distributing agent</van-checkbox>
          </van-checkbox-group>
        </template>
      </van-field>

      <!-- <van-field name="declaration_third_party" label="Declaration of Third-Party Funds (Please tick √)">
        <template #input>
          <van-radio-group v-model="formData.declaration_third_party" @change="declarationThirdParty">
            <van-radio :name="1">Natural love and affection or as gift to me (Settlor)</van-radio>
            <van-radio :name="2">Money owed to me (Settlor)</van-radio>
            <van-radio :name="3">Other, please specify</van-radio>
            <van-field v-model="formData.others_please_specify" name="others_please_specify" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="" placeholder="Please enter the Others, please specify"
              :rules="[{ required: isothers_please_specify }]" />
            <van-radio :name="4">Relationship between the Settlor and Third-Party</van-radio>
            <van-field v-model="formData.relationship_between" name="relationship_between" center type="text" label=""
              oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" placeholder="Please enter the Relationship between the Settlor and Third-Party"
              :rules="[{ required: isrelationship_between }]" />
            <van-radio :name="5">All photocopied documents must be verified (i.e. signed, dated, name stated) by the
              Marketing/ Distributing agent</van-radio>
          </van-radio-group>
        </template>
      </van-field> -->
      <!-- <van-field
        v-model="formData.others_please_specify"
        name="others_please_specify"
        center
        type="text"
        label="Others, please specify"
        placeholder="Please enter the Others, please specify"

      /> -->
      <!-- <van-field
        v-model="formData.relationship_between"
        name="relationship_between"
        center
        type="text"
        label="Relationship between the Settlor and Third-Party"
        placeholder="Please enter the Relationship between the Settlor and Third-Party"

      /> -->
    
   <!-- -----------------------------------------end----------------------------------------------------    -->
      <div class="tl">Signature of Settlor</div>
      <vue-esign ref="client_signature"
        :style="{ display: (this.xyz === '' ? 'block' : formData.client_signature === null || formData.client_signature === '' ? 'block' : 'none') }"
        :width="800" :height="300" :isCrop="false" :lineWidth="6" lineColor="#000000" bgColor.sync="#fff"
        style="border: 1px solid #666" />
      <van-image
        :style="{ border: '1px solid #666', display: (this.xyz === '1' ? formData.client_signature === null || formData.client_signature === '' ? 'none' : 'block' : 'none') }"
        class="esignImgbox" :src="formData.client_signature" />
      <div class="tr">
        <div class="esignBtn" @click="handleReset('client_signature')" v-if="!isDone">
          Clear
        </div>
        <div class="esignBtn" @click="handleGenerate('client_signature')" v-if="!isDone">
          Confirm
        </div>
      </div>
      <van-field v-model="formData.client_name" name="client_name" center type="text" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" autocomplete="off" label="Name" placeholder="Please enter the Name" />
      <van-field v-model="formData.client_passport" name="client_passport" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" autocomplete="off" type="text" label="NRIC No"
        placeholder="Please enter the NRIC No" />

      <van-field v-model="formData.client_date" autocomplete="off" name="client_date" center label="Date: DD-MM-YYYY"
        placeholder="Please enter the Date" @keypress="isLetterDate($event)" />


      <!-- <van-field
        readonly
        v-model="formData.client_date"
        name="client_date"
        center
        :required="true"
        right-icon="arrow"
        label="Date"
        placeholder="Please enter the Date"
        @click="onShowPicker('client_date')"
        :rules="[{ required: true }]"
      /> -->
      <div class="tl">Signature of Trust Advisor as Witness</div>
      <vue-esign ref="witness_signature"
        :style="{ display: (this.xyz1 === '' ? 'block' : formData.witness_signature === null || formData.witness_signature === '' ? 'block' : 'none') }"
        :width="800" :height="300" :isCrop="false" :lineWidth="6" lineColor="#000000" bgColor.sync="#fff"
        style="border: 1px solid #666" />
      <van-image
        :style="{ border: '1px solid #666', display: (this.xyz1 === '1' ? formData.witness_signature === null || formData.witness_signature === '' ? 'none' : 'block' : 'none') }"
        class="esignImgbox" :src="formData.witness_signature" />
      <div class="tr">
        <div class="esignBtn" @click="handleReset('witness_signature')" v-if="!isDone">
          Clear
        </div>
        <div class="esignBtn" @click="handleGenerate('witness_signature')" v-if="!isDone">
          Confirm
        </div>
      </div>
      <van-field v-model="formData.witness_name" name="witness_name" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" autocomplete="off" type="text" label="Name"
        placeholder="Please enter the Name" />
      <van-field v-model="formData.witness_passport" name="witness_passport" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" autocomplete="off" label="NRIC No"
        placeholder="Please enter the NRIC No" />
      <van-field v-model="formData.witness_date" autocomplete="off" name="witness_date" center label="Date: DD-MM-YYYY"
        placeholder="Please enter the Date" @keypress="isLetterDate($event)" />

      <!-- <van-field
        readonly
        v-model="formData.witness_date"
        name="witness_date"
        center
        :required="true"
        right-icon="arrow"
        label="Date"
        placeholder="Please enter the Date"
        @click="onShowPicker('witness_date')"
        :rules="[{ required: true }]"
      /> -->
      <van-button v-click-outside="outSide" :disabled="selectData" round block type="info" native-type="submit" color="#7C655D" v-if="!isDone">
        Submit
      </van-button>
    </van-form>
    <!-- --------------------------------------------------------------------------------------------------------------------------------------- -->
    <van-form validate-first @submit="submit" :submit-on-enter="false" :scroll-to-error="true"
      v-if="!this.$store.state.isOverseaSignature">
      <div class="minTitle">
        ASIA INTERNATIONAL TRUST BERHAD Islamic(Company No.: 199501032473 (361679-H))
      </div>
      <div class="minTitle">THIRD-PARTY FUNDS DECLARATION FORM</div>
      <div class="minTitle">
        To be completed by the Settlor if the Trust Capital Funds for this application is to be funded by
        anyone other than the Settlor
      </div>

      <van-field name="settlor_type" label="Third Party Contributor (if applicable)">
        <template #input>
          <van-checkbox-group v-model="formData.settlor_type" direction="horizontal">
            <van-checkbox @click="radio3(1)" :name="1">Individual</van-checkbox>
            <van-checkbox @click="radio3(2)" :name="2">Organization</van-checkbox>
          </van-checkbox-group>

        </template>
      </van-field>


<!-- 
      <van-field name="settlor_type" label="Third Party Contributor (if applicable)" >
        <template #input>
          <van-radio-group v-model="formData.settlor_type" direction="horizontal">
            <van-radio :name="1">Individual</van-radio>
            <van-radio :name="2">Organization</van-radio>
          </van-radio-group>
        </template>
      </van-field> -->
      <div class="minTitle">Name of Settlor:</div>
   <!-- ------------------------------------individual-------------2----------------    -->
   <div v-if="formData.settlor_type == 1">
      <div class="minTitle">Third-Party Details (Individual)</div>
      <van-field class="trustorName" v-model="formData.trustor_name" autocomplete="off" name="trustor_name" center
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" :required="true" type="text" label="Name of the Contributor(Individual)"
        placeholder="Please enter the Name of the Contributor(Individual)" :rules="[
          {
            required: true,
          },
        ]" />

      <van-field v-model="formData.trustor_date" autocomplete="off" name="trustor_date" center :required="true"
        label="DATE OF BIRTH: DD-MM-YYYY" placeholder="Please enter Date of Birth"
        :rules="[{ pattern, message: 'Please enter the DATE OF BIRTH' }]" />

      <!-- <van-field
        readonly
        v-model="formData.trustor_date"
        name="trustor_date"
        center
        :required="true"
        right-icon="arrow"
        label="Date of Birth"
        placeholder="Please enter the Date of Birth"
        @click="onShowPicker('trustor_date')"
        :rules="[
          {
            required: true,
          },
        ]"
      /> -->
      <van-field v-model="formData.nationality" name="nationality" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" :required="true" type="text" autocomplete="off" label="Nationality (Please provide Photocopy of IC/ Passport) "
        placeholder="Please enter the Nationality " :rules="[
          {
            required: true,
          },
        ]" />
      <van-field v-model="formData.trustor_passport" name="trustor_passport" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" :required="true" autocomplete="off" type="text" label="NRIC/Passport No"
        placeholder="Please enter the NRIC/Passport No" :rules="[
          {
            required: true,
          },
        ]" />
      <van-field v-model="formData.trustor_address" name="trustor_address" center autocomplete="off" :required="true"
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="Proof of Current Address of the Individual (Please provide Utility Bill)"
        placeholder="Please enter the Proof of current Address of the Individual" :rules="[
          {
            required: true,
          },
        ]" />
      <van-field v-model="formData.trustor_phone" name="trustor_phone" center autocomplete="off" :required="true"
        type="text" @keypress="isLetter($event)" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" label="Contact No" placeholder="Please enter the Contact No"
        :rules="[{ required: true }]" />
      <!-- <van-field
        v-model="formData.trustor_reference_no"
        name="trustor_reference_no"
        center
        :required="true"
        type="text"
        label="Reference No"
        placeholder="Please enter the Reference No"
        :rules="[{ required: true, message: 'Please enter the Reference No' }]"
      /> -->
      <van-field v-model="formData.occupation" name="occupation" center autocomplete="off" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" :required="true" type="text" label="Occupation"
        placeholder="Please enter the Occupation" :rules="[{ required: true }]" />
      <van-field v-model="formData.industry" name="industry" center :required="true" autocomplete="off" type="text"
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" label="Industry" placeholder="Please enter the Industry"
        :rules="[{ required: true }]" />
      <van-field v-model="formData.name_of_employer" name="name_of_employer" center :required="true" autocomplete="off"
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="Name of Employer"
        placeholder="Please enter the Name of Employer" :rules="[{ required: true }]" />
      <van-field v-model="formData.nature_of_business" name="nature_of_business" autocomplete="off" center
        :required="true" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="Nature of Business(if Self-Employed)"
        placeholder="Please enter the Nature of Business(if Self-Employed)" :rules="[{ required: true }]" />
      <van-field v-model="formData.relationship_with_settlor" name="relationship_with_settlor" center autocomplete="off"
        :required="true" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="Relationship with Settlor"
        placeholder="Please enter the Relationship with Settlor" :rules="[{ required: true }]" />
      <van-field v-model="formData.annual_salary_income" name="annual_salary_income" center :required="true" type="text"
        autocomplete="off" label="Annual Salary/Income 
(Please provide Payslip/ Income Tax Return)" placeholder="Please enter the Annual Salary/ Income"
        :rules="[{ required: true }]" />
      </div>
    
       
        <!-- ----------------------------------organization-----------------------2-------------------- -->
        <div v-if="formData.settlor_type == 2">
      <div class="minTitle">Third-Party Details (Legal Entity)</div>
      <van-field v-model="formData.third_party_name" name="third_party_name" center autocomplete="off" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" :required="true" type="text" label="Name of Contributor(Company/Organisation)"
        placeholder="Please enter the Name of Contributor(Company/Organisation)" :rules="[
          {
            required: true,
          },
        ]" />

      <van-field v-model="formData.third_party_date" autocomplete="off" name="third_party_date" center :required="true"
        label="Date of Registration: DD-MM-YYYY" placeholder="Please enter Date of Registration"
        :rules="[{ pattern, message: 'Please enter the Date of Registration' }]" />

      <!-- <van-field
        readonly
        v-model="formData.third_party_date"
        name="third_party_date"
        center
        :required="true"
        right-icon="arrow"
        label="Date of Registration"
        placeholder="Please enter the Date of Registration"
        @click="onShowPicker('third_party_date')"
        :rules="[
          {
            required: true,
          },
        ]"
      /> -->
      <van-field v-model="formData.third_party_passport" name="third_party_passport" center :required="true" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" autocomplete="off" label="Company/ Organisation Registration No."
        placeholder="Please enter the Company/ Organisation Registration No." :rules="[
          {
            required: true,
          },
        ]" />
      <van-field v-model="formData.third_party_phone" name="third_party_phone" center @keypress="isLetter($event)"
        :required="true" type="text" autocomplete="off" label="Company Contact No"
        placeholder="Please enter the Company Contact No" :rules="[{ required: true }]" />
      <van-field v-model="formData.third_party_address" name="third_party_address" autocomplete="off" center
        :required="true" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="Proof of current Address of the Company/ Organisation"
        placeholder="Please enter the Proof of current Address of the Company/ Organisation" :rules="[
          {
            required: true,
          },
        ]" />
      <van-field v-model="formData.name_of_director" name="name_of_director" center autocomplete="off" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" :required="true" type="text" label="Name of Director(s)"
        placeholder="Please enter the Name of Director(s)" :rules="[{ required: true }]" />
      <van-field v-model="formData.name_of_shareholder" name="name_of_shareholder" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" autocomplete="off" :required="true" type="text" label="Name of Shareholder(s)"
        placeholder="Please enter the Name of Shareholder(s)" :rules="[{ required: true }]" />
      <van-field v-model="formData.nature_of_business2" name="nature_of_business2" center autocomplete="off"
        :required="true" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="Nature of Business"
        placeholder="Please enter the Nature of Business" :rules="[{ required: true }]" />
      <van-field v-model="formData.profit_loss_statement" name="profit_loss_statement" center :required="true" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" autocomplete="off" type="text" label="Profit & Loss Statement"
        placeholder="Please enter the Profit & Loss Statement" :rules="[{ required: true }]" />
      <van-field v-model="formData.source_of_fund2" name="source_of_fund2" center :required="true" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" autocomplete="off" type="text" label="Source of Fund"
        placeholder="Please enter the Source of Fund" :rules="[{ required: true }]" />

      <van-field v-model="formData.relationship_with_settlor" name="relationship_with_settlor" center :required="true"
        autocomplete="off" type="text" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" label="Relationship with Settlor"
        placeholder="Please enter the Relationship with Settlor" :rules="[{ required: true }]" />
      </div>

      <div class="minTitle">If Payslip (Item 12) is not available, then please provide:EPF statement/ Unit trust
        statement/ S&P agreement/ etc </div>
      <van-field v-model="formData.source_of_wealth" name="source_of_wealth" center :required="true" autocomplete="off"
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="Source of Wealth"
        placeholder="Please enter the Source of Wealth" :rules="[{ required: true }]" />
      <div class="minTitle">Please provide: Bank statement with Name of Bank, Name of Account Holder, Account Number.
      </div>
      <van-field v-model="formData.source_of_fund" name="source_of_fund" center :required="true" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" autocomplete="off" type="text" label="Source of Fund(Origin of fund)"
        placeholder="Please enter the Source of Fund(Origin of fund)" :rules="[{ required: true }]" />
        <div v-if="formData.settlor_type == 2">
      <div class="minTitle">Contributor’s Contact Person </div>
      <van-field v-model="formData.contributor_name" name="contributor_name" center autocomplete="off" :required="true"
        type="text" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" label="Name" placeholder="Please enter the Name"
        :rules="[{ required: true }]" />
      <van-field v-model="formData.contributor_contact" name="contributor_contact" center @keypress="isLetter($event)"
        :required="true" type="text" autocomplete="off" label="Contact No" placeholder="Please enter the Contact No"
        :rules="[{ required: true }]" />
      <van-field v-model="formData.contributor_email" name="contributor_email" center autocomplete="off" :required="true"
        type="text" label="Email" placeholder="Please enter the Email" :rules="[{ required: true }]" />
        </div>
      <div class="minTitle">Note: [1] Bank statement with Name of Bank, Name of Account Holder, Account Number</div>

      <van-field name="declaration_third_party" label="Declaration of Third-Party Funds (Please tick √)" >
        <template #input>
          <van-checkbox-group v-model="formData.declaration_third_party" @change="declarationThirdParty">
            <van-checkbox :name="1">Natural love and affection or as gift to me (Settlor)</van-checkbox>
            <van-checkbox :name="2">Money owed to me (Settlor)</van-checkbox>
            <van-checkbox :name="3">Other, please specify</van-checkbox>
            <van-field v-model="formData.others_please_specify" name="others_please_specify" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="" placeholder="Please enter the Others, please specify"
              :rules="[{ required: isothers_please_specify }]" />

            <van-checkbox :name="4">Relationship between the Settlor and Third-Party</van-checkbox>
            <van-field v-model="formData.relationship_between" name="relationship_between" center type="text" label=""
              oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" placeholder="Please enter the Relationship between the Settlor and Third-Party"
              :rules="[{ required: isrelationship_between }]" />
            <van-checkbox :name="5">All photocopied documents must be verified (i.e. signed, dated, name stated) by the
              Marketing/ Distributing agent</van-checkbox>
          </van-checkbox-group>
        </template>
      </van-field>
      <!-- <van-field name="declaration_third_party" label="Declaration of Third-Party Funds (Please tick √)" :required="true"
        :rules="[
          {
            required: true,
          },
        ]">
        <template #input>
          <van-radio-group v-model="formData.declaration_third_party" @change="declarationThirdParty">
            <van-radio :name="1">Natural love and affection or as gift to me (Settlor)</van-radio>
            <van-radio :name="2">Money owed to me (Settlor)</van-radio>
            <van-radio :name="3">Other, please specify</van-radio>
            <van-field v-model="formData.others_please_specify" name="others_please_specify" center type="text" label=""
              oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" placeholder="Please enter the Others, please specify"
              :rules="[{ required: isothers_please_specify }]" />
            <van-radio :name="4">Relationship between the Settlor and Third-Party</van-radio>
            <van-field v-model="formData.relationship_between" name="relationship_between" center type="text" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" label=""
              placeholder="Please enter the Relationship between the Settlor and Third-Party"
              :rules="[{ required: isrelationship_between }]" />
            <van-radio :name="5">All photocopied documents must be verified (i.e. signed, dated, name stated) by the
              Marketing/ Distributing agent</van-radio>
          </van-radio-group>
        </template>
      </van-field> -->
      <!-- <van-field
        v-model="formData.others_please_specify"
        name="others_please_specify"
        center
        type="text"
        label="Others, please specify"
        placeholder="Please enter the Others, please specify"

      /> -->
      <!-- <van-field
        v-model="formData.relationship_between"
        name="relationship_between"
        center
        type="text"
        label="Relationship between the Settlor and Third-Party"
        placeholder="Please enter the Relationship between the Settlor and Third-Party"

      /> -->
    
      <!-- -------------------------------end---------------------------------------------------- -->
      <div class="tl">Signature of Settlor</div>
      <vue-esign ref="client_signature"
        :style="{ display: (this.xyz === '' ? 'block' : formData.client_signature === null || formData.client_signature === '' ? 'block' : 'none') }"
        :width="800" :height="300" :isCrop="false" :lineWidth="6" lineColor="#000000" bgColor.sync="#fff"
        style="border: 1px solid #666" />
      <van-image
        :style="{ border: '1px solid #666', display: (this.xyz === '1' ? formData.client_signature === null || formData.client_signature === '' ? 'none' : 'block' : 'none') }"
        class="esignImgbox" :src="formData.client_signature" />
      <div class="tr">
        <div class="esignBtn" @click="handleReset('client_signature')" v-if="!isDone">
          Clear
        </div>
        <div class="esignBtn" @click="handleGenerate('client_signature')" v-if="!isDone">
          Confirm
        </div>
      </div>
      <van-field v-model="formData.client_name" name="client_name" center :required="true" type="text" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" autocomplete="off" label="Name" placeholder="Please enter the Name"
        :rules="[{ required: true }]" />
      <van-field v-model="formData.client_passport" name="client_passport" center :required="true" autocomplete="off"
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="NRIC No" placeholder="Please enter the NRIC No"
        :rules="[{ required: true }]" />

      <van-field v-model="formData.client_date" autocomplete="off" name="client_date" center :required="true"
        label="Date: DD-MM-YYYY" placeholder="Please enter the Date"
        :rules="[{ pattern, message: 'Please enter the Date' }]" />


      <!-- <van-field
        readonly
        v-model="formData.client_date"
        name="client_date"
        center
        :required="true"
        right-icon="arrow"
        label="Date"
        placeholder="Please enter the Date"
        @click="onShowPicker('client_date')"
        :rules="[{ required: true }]"
      /> -->
      <div class="tl">Signature of Trust Advisor as Witness</div>
      <vue-esign ref="witness_signature"
        :style="{ display: (this.xyz1 === '' ? 'block' : formData.witness_signature === null || formData.witness_signature === '' ? 'block' : 'none') }"
        :width="800" :height="300" :isCrop="false" :lineWidth="6" lineColor="#000000" bgColor.sync="#fff"
        style="border: 1px solid #666" />
      <van-image
        :style="{ border: '1px solid #666', display: (this.xyz1 === '1' ? formData.witness_signature === null || formData.witness_signature === '' ? 'none' : 'block' : 'none') }"
        class="esignImgbox" :src="formData.witness_signature" />
      <div class="tr">
        <div class="esignBtn" @click="handleReset('witness_signature')" v-if="!isDone">
          Clear
        </div>
        <div class="esignBtn" @click="handleGenerate('witness_signature')" v-if="!isDone">
          Confirm
        </div>
      </div>
      <van-field v-model="formData.witness_name" name="witness_name" center :required="true" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" autocomplete="off" type="text" label="Name" placeholder="Please enter the Name"
        :rules="[{ required: true }]" />
      <van-field v-model="formData.witness_passport" name="witness_passport" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" :required="true" type="text" autocomplete="off" label="NRIC No"
        placeholder="Please enter the NRIC No" :rules="[{ required: true }]" />
      <van-field v-model="formData.witness_date" autocomplete="off" name="witness_date" center :required="true"
        label="Date: DD-MM-YYYY" placeholder="Please enter the Date"
        :rules="[{ pattern, message: 'Please enter the Date' }]" />

      <!-- <van-field
        readonly
        v-model="formData.witness_date"
        name="witness_date"
        center
        :required="true"
        right-icon="arrow"
        label="Date"
        placeholder="Please enter the Date"
        @click="onShowPicker('witness_date')"
        :rules="[{ required: true }]"
      /> -->
      <van-button  v-click-outside="outSide" :disabled="selectData" round block type="info" native-type="submit" color="#7C655D" v-if="!isDone">
        Submit
      </van-button>
    </van-form>
    <!-- ---------------------------------------------------------------------------------------------------------------------------------------------------    -->
    <van-button round block type="info" color="#7C655D" style="margin-top:5rem;" @click="$emit('onSelect')"
      v-if="$store.state.isOverseaSignature">
      Copy Link for Sharing with Settlor
    </van-button>

    <!-- 日期彈框 -->
    <van-popup v-model="isShowPicker" position="bottom">
      <van-datetime-picker v-model="currentContent" input-align="left" type="date" :min-hour="0"
        confirm-button-text="Confirm" cancel-button-text="Cancel" :min-date="minDate" @cancel="onHiddenPicker"
        @confirm="onConfirmPicker" />
    </van-popup>
  </div>
</template>

<script>
import moment from 'moment'
import { uploadAutograph } from "@/api/util";
import {
  third_party_declaration_formAagt,
  getOrdersForms,
  putOrdersForms,
  getOrderDetail
} from "@/api/order";
import ClickOutside from 'vue-click-outside'
export default {
  props: ['orderDataInfo','user'],
  data() {
    return {
      selectData:false,
      pattern: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,// 正则验证时间
      formData: {
      
        settlor_type:[],
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
        declaration_third_party: [],
        client_signature: "",
        client_name: "",
        client_passport: "",
        client_date: moment(new Date()).format('DD-MM-YYYY'),
        witness_signature: "",
        witness_name: "",
        witness_passport: "",
        witness_date: moment(new Date()).format('DD-MM-YYYY'),
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
      from: "",
      xyz: "",
      xyz1: "",
      isShowPicker: false, // 控制日期彈框
      currentContent: new Date(), // 日期彈框顯示當前日期
      whichDate: "", // 區分是哪個日期觸發彈框
      isFilled: "", // 表單id
      minDate: new Date(1900, 0, 1),
      isDone: false, // 訂單是否已確認
      isothers_please_specify: false,
      isrelationship_between: false,
      individual:true,
      organisation:true,
    };
  },
  created: function () {
    console.log('user data from parent component:')
    console.log(this.user) //prints out an empty string
  },

  mounted() {
   // alert("fsb")
    console.log("===============", this.$store.state.isOverseaSignature)

    if (this.$store.state.isOverseaSignature) {
      this.from = "create"
      this.isFilled = 0
    } else {
      this.from = this.$route.query.from;
      this.isFilled = this.$route.query.isFilled;
      this.isDone = this.$route.query.status == 1 ? true : false;
    }
    if (this.$route.query.isShare) {
      this.isFilled = this.$route.query.AagtThirdPartyDeclarationForm
    }
   // alert("yy---------------------y")

    // this.isFilled = this.$route.query.isFilled;
    // this.isDone = this.$route.query.status == 1 ? true : false;
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
    console.log("--------www-----3333-this.$route.query.AagtKycQuestionnaireForm---", this.$route.query.AagtKycQuestionnaireForm)

// if(!this.$route.query.isShare){

//   getOrderDetail(id)
//         .then((res) => {
//           console.log("--d-d--d-d--d-***********************",res);
//           //this.orderData = res;

//           getOrdersForms(res.AagtKycQuestionnaireForm, { type: "AAGT KYC Form" })
//           .then((res) => {
//             //alert("2")
//             delete res.id
//             delete res.order_id
//             delete res.created_at
//             delete res.updated_at
//             console.log(res, 'shabin*');
//             for (let key in res) {
//               if(key != "settlor_type")
//               {
//                 res[key] = JSON.parse(res[key])
//               }
              
//             }
//             console.log(res, "--------333333333333333333333333333333333333--*-");
//         //  if(res.settlor_type === 'organization'){
//         //   this.individual = false;
//         //   this.organisation = true;
//         //  }
//         //  if(res.settlor_type === 'individual'){
//         //   this.individual = true;
//         //   this.organisation = false;
//         //  }
    
           
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//         })
//         .catch((err) => {
//           console.log(err);
//         });
// }



    // if ( id > 0 && this.$route.query.isShare) {
    // //  alert("yd")
    //   getOrdersForms(this.$route.query.AagtKycQuestionnaireForm, { type: "AAGT KYC Form" })
    //       .then((res) => {
    //         //alert("2")
    //         delete res.id
    //         delete res.order_id
    //         delete res.created_at
    //         delete res.updated_at
    //         console.log(res, 'shabin*');
    //         for (let key in res) {
    //           // if(key != "settlor_type")
    //           // {
    //             res[key] = JSON.parse(res[key])
    //         //  }
              
    //         }
    //         console.log(res, "--------333333333333333333333333333333333333--*-");
    //     //  if(res.settlor_type === 'organization'){
    //     //   this.individual = false;
    //     //   this.organisation = true;
    //     //  }
    //     //  if(res.settlor_type === 'individual'){
    //     //   this.individual = true;
    //     //   this.organisation = false;
    //     //  }
    
           
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    // }


    
  },
  directives: {
    ClickOutside
  },
  methods: {
    radio3(a) {
      // alert("d")
      console.log(a, "------0-------**************-----------*******------------");
      console.log(this.formData.settlor_type, "------1-------**************-----------*******------------");
      console.log(this.formData.settlor_type, "------2-------**************-----------*******------------");

      if (this.formData.settlor_type.length == 0) {
        this.formData.settlor_type = []
      }
      else if (this.formData.settlor_type.length == 2) {
        this.formData.settlor_type.shift()
      }
      else {
        this.formData.settlor_type = [a]
      }
      console.log(this.formData.settlor_type.toString(), "+++++++++++++++++++++++++++++++++++++");



    },
  inSide(){
      this.selectData = true
    },
    outSide(){
    //  alert("vvh")
this.selectData = false
    },
    declarationThirdParty(val) {
      if (val === 3) {
        this.isothers_please_specify = true
        this.isrelationship_between = false
      } else if (val === 4) {
        this.isrelationship_between = true
        this.isothers_please_specify = false
      } else {
        this.isothers_please_specify = false
        this.isrelationship_between = false
      }
    },
    // 如果已填 獲取數據
    getFormData() {
      if (this.isFilled > 0) {
        getOrdersForms(this.isFilled, { type: "AAGT Third Party Declaration Form" })
          .then((res) => {
            console.log("------3rd---get data -------", res);
            this.formData = res;
            this.formData.settlor_type = (this.formData.settlor_type === '' || this.formData.settlor_type == null ? [] : this.formData.settlor_type === "individual"? '1' : this.formData.settlor_type === "organization" ? '2':'')
//this.formData.declaration_third_party = (this.formData.declaration_third_party === '0' || this.formData.declaration_third_party == null? [] : this.formData.declaration_third_party)
console.log("------IiIiI_-------------",this.formData.declaration_third_party)

            this.xyz = "1"
            this.xyz1 = "1"
          })
          .catch((err) => { });
      }
    },
    submit(form) {
      this.selectData = true
      console.log(form);
    //   if(this.$store.state.isOverseaSignature == true){
    //     if (!this.formData.client_signature) {
    //     this.$toast.fail("Please sign your name");
    //     return;

    //   }
    // }
    if(this.$route.query.isShare){
        if (!this.formData.client_signature) {
        this.$toast.fail("Please sign your name");
        return;

      }
    }

    if(!this.$route.query.isShare){
       
       if (!this.formData.witness_signature) {
         this.$toast.fail("Please sign your name");
         return;
       }
       
       }
      // if(this.$store.state.isOverseaSignature == false){
       
      // if (!this.formData.witness_signature) {
      //   this.$toast.fail("Please sign your name");
      //   return;
      // }
      
      // }

      console.log("---3rd--this.filled..submit.-data----", this.formData.settlor_type.toString())
      this.formData.settlor_type = this.formData.settlor_type.toString()
      this.formData.declaration_third_party = (this.formData.declaration_third_party).toString()
      console.log("---3rd--this.filled..submit.-----", this.isFilled)
      console.log("---3rd--this.filled..submit.-data----", this.formData)
      
      let data = JSON.parse(JSON.stringify(this.formData));
      if (this.isFilled > 0) {
        // 修改
        putOrdersForms(this.isFilled, {
          type: "AAGT Third Party Declaration Form",
          data: JSON.stringify(data),
        }).then((res) => {
          console.log(res, "修改Third Party Declaration成功");
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
        console.log("------id 3rd-id-", id)
        console.log("------id 3rd-data-", data)
        third_party_declaration_formAagt(id, data)
          .then((res) => {
            console.log("----6-6-6--6-6-6---", res)
            this.isFilled = res.AagtThirdPartyDeclarationForm
            this.$toast({
              type: "success",
              message: "Submitted successfully",
            });


            if (this.from == "create") {
              this.$store.commit("changePage", {
                tabbar: "/SelectProduct",
                title: "SelectProduct",
              });
              if (!this.$store.state.isOverseaSignature && !this.$route.query.isShare) {
                this.$router.push("/SelectProduct");
              }

            } else {
              this.$router.go(-1);
            }




            //this.$router.go(-1);
          })
          .catch((err) => { });
      }
      this.$emit('getOrderDetail')
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
        var Y = date.getFullYear();
        var M = ("0" + (date.getMonth() + 1)).slice(-2) + "-"
        var D = date.getDate() + "-";
        return D + M + Y;
      }
    },
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[0-9]+$/.test(char)) return true;
      else e.preventDefault();
    },
    isLetterDate(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[0-9,-]+$/.test(char)) return true;
      else e.preventDefault();
    },
    // 清空画布
    handleReset(val) {
      this.$refs[val].reset(); //清空画布
      if (val == 'client_signature') {
        this.formData.client_signature = ''
        this.xyz = ""
      }
      if (val == 'witness_signature') {
        this.formData.witness_signature = ''
        this.xyz1 = ""
      }
    },
    handleGenerate(val) {
      // if (!this.$store.state.isOverseaSignature || val === "witness_signature") {
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

      // }
      // else {
      //   alert("Settlor Signature should be added by the Settlor from the shared link.")

      //   this.$refs["client_signature"].reset();
      // }
    },
  },
};
</script>

<style scoped>
.ThirdPartyDeclaration {
  text-align: left;
}

.minTitle {
  font-weight: bold;
  line-height: 24px;
}

/deep/ .van-field__label {
  width: 13.2rem;
}

/deep/ .van-radio__icon {
  height: 1.5em;
}

/*手机*/
@media screen and (max-width: 768px) {
  /deep/ .van-field__label {
    width: 30rem;
  }
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
/deep/ .van-radio__icon .van-icon,
/deep/ .van-checkbox__icon .van-icon {
  font-size: 18px;
  height: 20px;
  line-height: 20px;
}

</style>
