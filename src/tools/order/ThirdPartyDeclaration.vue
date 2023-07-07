<template>
  <div class="ThirdPartyDeclaration bodybox">
    <van-form
      validate-first
      @submit="submit"
      :submit-on-enter="false"
      :scroll-to-error="true"
      v-if="this.$store.state.isOverseaSignature == true"
    >
      <div class="minTitle">
        ASIA INTERNATIONAL TRUST BERHAD (Company No.: 199501032473 (361679-H))
      </div>
      <div class="minTitle">THIRD-PARTY FUNDS DECLARATION FORM</div>
      <div class="minTitle">
        To be completed by the Settlor if the Trust Capital Funds for this application is to be funded by
        anyone other than the Settlor
      </div>
      <div class="minTitle">Name of Settlor:</div>
      <div class="minTitle">Third-Party Details (Individual)</div>
      <van-field
        class="trustorName"
        v-model="formData.trustor_name"
        @input="formData.trustor_name = formData.trustor_name.toUpperCase()"
        autocomplete="off"
        name="trustor_name"
        center
       
        type="text"
        label="Name of the Contributor(Individual)"
        placeholder="Please enter the Name of the Contributor(Individual)"
        
      />

      <van-field v-model="formData.trustor_date" autocomplete="off" name="trustor_date" center
        label="DATE OF BIRTH: DD-MM-YYYY" placeholder="Please enter Date of Birth"
         />

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
      <van-field
        v-model="formData.nationality"
        name="nationality"
        center
        @input="formData.nationality = formData.nationality.toUpperCase()"
        type="text"
        autocomplete="off"
        label="Nationality "
        placeholder="Please enter the Nationality "
      
      />
      <van-field
        v-model="formData.trustor_passport"
        name="trustor_passport"
        center
        @input="formData.trustor_passport = formData.trustor_passport.toUpperCase()"
        autocomplete="off"
        type="text"
        label="NRIC/Passport No"
        placeholder="Please enter the NRIC/Passport No"
       
      />
      <van-field
        v-model="formData.trustor_address"
        name="trustor_address"
        center
        autocomplete="off"
        @input="formData.trustor_address = formData.trustor_address.toUpperCase()"
        
        type="text"
        label="Proof of current Address of the Individual"
        placeholder="Please enter the Proof of current Address of the Individual"
      
      />
      <van-field
        v-model="formData.trustor_phone"
        name="trustor_phone"
        center
        autocomplete="off"
        
        type="text"
        label="Contact No"
        placeholder="Please enter the Contact No"
        
      />
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
      <van-field
        v-model="formData.occupation"
        name="occupation"
        center
        @input="formData.occupation = formData.occupation.toUpperCase()"
        autocomplete="off"
       
        type="text"
        label="Occupation"
        placeholder="Please enter the Occupation"
        
      />
      <van-field
        v-model="formData.industry"
        name="industry"
        center
        @input="formData.industry = formData.industry.toUpperCase()"
        autocomplete="off"
        type="text"
        label="Industry"
        placeholder="Please enter the Industry"
        
      />
      <van-field
        v-model="formData.name_of_employer"
        name="name_of_employer"
        center
        
        autocomplete="off"
        @input="formData.name_of_employer = formData.name_of_employer.toUpperCase()"
        type="text"
        label="Name of Employer"
        placeholder="Please enter the Name of Employer"
        
      />
      <van-field
        v-model="formData.nature_of_business"
        name="nature_of_business"
        autocomplete="off"
        center
        @input="formData.nature_of_business = formData.nature_of_business.toUpperCase()"
        type="text"
        label="Nature of Business(if Self-Employed)"
        placeholder="Please enter the Nature of Business(if Self-Employed)"
        
      />
      <van-field
        v-model="formData.relationship_with_settlor"
        name="relationship_with_settlor"
        center
        autocomplete="off"
        @input="formData.relationship_with_settlor = formData.relationship_with_settlor.toUpperCase()"
        type="text"
        label="Relationship with Settlor"
        placeholder="Please enter the Relationship with Settlor"
        
      />
      <van-field
        v-model="formData.annual_salary_income"
        name="annual_salary_income"
        center
        
        type="text"
        autocomplete="off"
        label="Annual Salary/ Income"
        placeholder="Please enter the Annual Salary/ Income"
        
      />
      <div class="minTitle">If Payslip (Item 12) is not available, then please provide:EPF statement/ Unit trust statement/ S&P agreement/ etc </div>
      <van-field
        v-model="formData.source_of_wealth"
        name="source_of_wealth"
        center
        @input="formData.source_of_wealth = formData.source_of_wealth.toUpperCase()"
        autocomplete="off"
        type="text"
        label="Source of Wealth"
        placeholder="Please enter the Source of Wealth"
        
      />
      <div class="minTitle">Please provide: Bank statement with Name of Bank, Name of Account Holder, Account Number.</div>
      <van-field
        v-model="formData.source_of_fund"
        name="source_of_fund"
        center
        @input="formData.source_of_fund = formData.source_of_fund.toUpperCase()"
        autocomplete="off"
        type="text"
        label="Source of Fund(Origin of fund)"
        placeholder="Please enter the Source of Fund(Origin of fund)"
        
      />
      <div class="minTitle">Third-Party Details (Legal Entity)</div>
      <van-field
        v-model="formData.third_party_name"
        name="third_party_name"
        center
        autocomplete="off"
        @input="formData.third_party_name = formData.third_party_name.toUpperCase()"
        
        type="text"
        label="Name of Contributor(Company/Organisation)"
        placeholder="Please enter the Name of Contributor(Company/Organisation)"
       
      />

      <van-field v-model="formData.third_party_date" autocomplete="off" name="third_party_date" center 
        label="Date of Registration: DD-MM-YYYY" placeholder="Please enter Date of Registration"
        />

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
      <van-field
        v-model="formData.third_party_passport"
        name="third_party_passport"
        center
        @input="formData.third_party_passport = formData.third_party_passport.toUpperCase()"
        type="text"
        autocomplete="off"
        label="Company/ Organisation Registration No."
        placeholder="Please enter the Company/ Organisation Registration No."
       
      />
      <van-field
        v-model="formData.third_party_phone"
        name="third_party_phone"
        center
        
        type="text"
        autocomplete="off"
        label="Company Contact No"
        placeholder="Please enter the Company Contact No"
        
      />
      <van-field
        v-model="formData.third_party_address"
        name="third_party_address"
        autocomplete="off"
        center
        @input="formData.third_party_address = formData.third_party_address.toUpperCase()"
        
        type="text"
        label="Proof of current Address of the Company/ Organisation"
        placeholder="Please enter the Proof of current Address of the Company/ Organisation"
     
      />
      <van-field
        v-model="formData.name_of_director"
        name="name_of_director"
        center
        autocomplete="off"
        @input="formData.name_of_director = formData.name_of_director.toUpperCase()"
        
        type="text"
        label="Name of Director(s)"
        placeholder="Please enter the Name of Director(s)"
        
      />
      <van-field
        v-model="formData.name_of_shareholder"
        name="name_of_shareholder"
        center
        autocomplete="off"
        @input="formData.name_of_shareholder = formData.name_of_shareholder.toUpperCase()"
        
        type="text"
        label="Name of Shareholder(s)"
        placeholder="Please enter the Name of Shareholder(s)"
        
      />
      <van-field
        v-model="formData.nature_of_business2"
        name="nature_of_business2"
        center
        autocomplete="off"
        @input="formData.nature_of_business2 = formData.nature_of_business2.toUpperCase()"
        type="text"
        label="Nature of Business"
        placeholder="Please enter the Nature of Business"
        
      />
      <van-field
        v-model="formData.profit_loss_statement"
        name="profit_loss_statement"
        center
        @input="formData.profit_loss_statement = formData.profit_loss_statement.toUpperCase()"
        autocomplete="off"
        type="text"
        label="Profit & Loss Statement"
        placeholder="Please enter the Profit & Loss Statement"
        
      />
      <van-field
        v-model="formData.source_of_fund2"
        name="source_of_fund2"
        center
        @input="formData.source_of_fund2 = formData.source_of_fund2.toUpperCase()"
        autocomplete="off"
        type="text"
        label="Source of Fund"
        placeholder="Please enter the Source of Fund"
        
      />

      <van-field
        v-model="formData.third_party_reference_no"
        name="third_party_reference_no"
        center
        @input="formData.third_party_reference_no = formData.third_party_reference_no.toUpperCase()"
        autocomplete="off"
        type="text"
        label="Relationship with Settlor"
        placeholder="Please enter the Relationship with Settlor"
        
      />
      <div class="minTitle">Contributor’s Contact Person </div>
      <van-field
        v-model="formData.contributor_name"
        name="contributor_name"
        center
        autocomplete="off"
        @input="formData.contributor_name = formData.contributor_name.toUpperCase()"
        type="text"
        label="Name"
        placeholder="Please enter the Name"
        
      />
      <van-field
        v-model="formData.contributor_contact"
        name="contributor_contact"
        center
        
        type="text"
        autocomplete="off"
        label="Contact No"
        placeholder="Please enter the Contact No"
        
      />
      <van-field
        v-model="formData.contributor_email"
        name="contributor_email"
        center
        autocomplete="off"
        
        type="text"
        label="Email"
        placeholder="Please enter the Email"
        
      />
      <div class="minTitle">Note: [1] Bank statement with Name of Bank, Name of Account Holder, Account Number</div>
      <van-field
        name="declaration_third_party"
        label="Declaration of Third-Party Funds (Please tick √)"
       
      
      >
        <template #input>
          <van-radio-group
            v-model="formData.declaration_third_party"
            @change="declarationThirdParty"
          >
            <van-radio :name="1"
              >Natural love and affection or as gift to me (Settlor)</van-radio
            >
            <van-radio :name="2">Money owed to me (Settlor)</van-radio>
            <van-radio :name="3">Other, please specify</van-radio>
            <van-field
              v-model="formData.others_please_specify"
              name="others_please_specify"
              center
              @input="formData.others_please_specify = formData.others_please_specify.toUpperCase()"
              type="text"
              label=""
              placeholder="Please enter the Others, please specify"
              :rules="[{ required:isothers_please_specify }]"
            />
            <van-radio :name="4"
              >Relationship between the Settlor and Third-Party</van-radio>
            <van-field
              v-model="formData.relationship_between"
              name="relationship_between"
              center
              type="text"
              label=""
              @input="formData.relationship_between = formData.relationship_between.toUpperCase()"
              placeholder="Please enter the Relationship between the Settlor and Third-Party"
              :rules="[{ required: isrelationship_between }]"
            />
            <van-radio :name="5">All photocopied documents must be verified (i.e. signed, dated, name stated) by the Marketing/ Distributing agent</van-radio>
          </van-radio-group>
        </template>
      </van-field>
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
      <div class="tl">Signature of Settlor</div>
      <vue-esign
        ref="client_signature"
        :style="{ display: (this.xyz === '' ? 'block' : formData.client_signature === null || formData.client_signature === '' ? 'block' : 'none') }"
      
        :width="800"
        :height="300"
        :isCrop="false"
        :lineWidth="6"
        lineColor="#000000"
        bgColor.sync="#fff"
        style="border: 1px solid #666"
      />
      <van-image
      :style="{ border: '1px solid #666', display: (this.xyz === '1' ? formData.client_signature === null || formData.client_signature === '' ? 'none' : 'block' : 'none') }"
     
       
        class="esignImgbox"
        :src="formData.client_signature"
      />
      <div class="tr">
        <div class="esignBtn" @click="handleReset('client_signature')" v-if="!isDone">
          Clear
        </div>
        <div class="esignBtn" @click="handleGenerate('client_signature')" v-if="!isDone">
          Confirm
        </div>
      </div>
      <van-field
        v-model="formData.client_name"
        name="client_name"
        center
        
        type="text"
        @input="formData.client_name = formData.client_name.toUpperCase()"
        autocomplete="off"
        label="Name"
        placeholder="Please enter the Name"
     
      />
      <van-field
        v-model="formData.client_passport"
        name="client_passport"
        center
        @input="formData.client_passport = formData.client_passport.toUpperCase()"
        autocomplete="off"
        type="text"
        label="NRIC No"
        placeholder="Please enter the NRIC No"
        
      />

      <van-field v-model="formData.client_date" autocomplete="off" name="client_date" center 
        label="Date: DD-MM-YYYY" placeholder="Please enter the Date"
         />


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
      <vue-esign
        ref="witness_signature"
        :style="{ display: (this.xyz1 === '' ? 'block' : formData.witness_signature === null || formData.witness_signature === '' ? 'block' : 'none') }"
   
        :width="800"
        :height="300"
        :isCrop="false"
        :lineWidth="6"
        lineColor="#000000"
        bgColor.sync="#fff"
        style="border: 1px solid #666"
      />
      <van-image
      :style="{ border: '1px solid #666', display: (this.xyz1 === '1' ? formData.witness_signature === null || formData.witness_signature === '' ? 'none' : 'block' : 'none') }"
        class="esignImgbox"
       
        :src="formData.witness_signature"
      />
      <div class="tr">
        <div class="esignBtn" @click="handleReset('witness_signature')" v-if="!isDone">
          Clear
        </div>
        <div class="esignBtn" @click="handleGenerate('witness_signature')" v-if="!isDone">
          Confirm
        </div>
      </div>
      <van-field
        v-model="formData.witness_name"
        name="witness_name"
        center
        @input="formData.witness_name = formData.witness_name.toUpperCase()"
        autocomplete="off"
        type="text"
        label="Name"
        placeholder="Please enter the Name"
        
      />
      <van-field
        v-model="formData.witness_passport"
        name="witness_passport"
        center
        @input="formData.witness_passport = formData.witness_passport.toUpperCase()"
        type="text"
        autocomplete="off"
        label="NRIC No"
        placeholder="Please enter the NRIC No"
        
      />
      <van-field v-model="formData.witness_date" autocomplete="off" name="witness_date" center 
        label="Date: DD-MM-YYYY" placeholder="Please enter the Date"
         />

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
      <van-button  round block type="info" native-type="submit" color="#7C655D" v-if="!isDone">
        Submit
      </van-button>
    </van-form>
<!-- --------------------------------------------------------------------------------------------------------------------------------------- -->
<van-form
      validate-first
      @submit="submit"
      :submit-on-enter="false"
      :scroll-to-error="true"
      v-if="!this.$store.state.isOverseaSignature"
    >
      <div class="minTitle">
        ASIA INTERNATIONAL TRUST BERHAD (Company No.: 199501032473 (361679-H))
      </div>
      <div class="minTitle">THIRD-PARTY FUNDS DECLARATION FORM</div>
      <div class="minTitle">
        To be completed by the Settlor if the Trust Capital Funds for this application is to be funded by
        anyone other than the Settlor
      </div>
      <div class="minTitle">Name of Settlor:</div>
      <div class="minTitle">Third-Party Details (Individual)</div>
      <van-field
        class="trustorName"
        v-model="formData.trustor_name"
        autocomplete="off"
        name="trustor_name"
        center
        @input="formData.trustor_name = formData.trustor_name.toUpperCase()"
        :required="true"
        type="text"
        label="Name of the Contributor(Individual)"
        placeholder="Please enter the Name of the Contributor(Individual)"
        :rules="[
          {
            required: true,
          },
        ]"
      />

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
      <van-field
        v-model="formData.nationality"
        name="nationality"
        center
        @input="formData.nationality = formData.nationality.toUpperCase()"
        :required="true"
        type="text"
        autocomplete="off"
        label="Nationality "
        placeholder="Please enter the Nationality "
        :rules="[
          {
            required: true,
          },
        ]"
      />
      <van-field
        v-model="formData.trustor_passport"
        name="trustor_passport"
        center
        @input="formData.trustor_passport = formData.trustor_passport.toUpperCase()"
        :required="true"
        autocomplete="off"
        type="text"
        label="NRIC/Passport No"
        placeholder="Please enter the NRIC/Passport No"
        :rules="[
          {
            required: true,
          },
        ]"
      />
      <van-field
        v-model="formData.trustor_address"
        name="trustor_address"
        center
        autocomplete="off"
        :required="true"
        @input="formData.trustor_address = formData.trustor_address.toUpperCase()"
        type="text"
        label="Proof of current Address of the Individual"
        placeholder="Please enter the Proof of current Address of the Individual"
        :rules="[
          {
            required: true,
          },
        ]"
      />
      <van-field
        v-model="formData.trustor_phone"
        name="trustor_phone"
        center
        autocomplete="off"
        :required="true"
        type="text"
        @input="formData.trustor_phone = formData.trustor_phone.toUpperCase()"
        label="Contact No"
        placeholder="Please enter the Contact No"
        :rules="[{ required: true }]"
      />
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
      <van-field
        v-model="formData.occupation"
        name="occupation"
        center
        autocomplete="off"
        @input="formData.occupation = formData.occupation.toUpperCase()"
        :required="true"
        type="text"
        label="Occupation"
        placeholder="Please enter the Occupation"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.industry"
        name="industry"
        center
        :required="true"
        autocomplete="off"
        type="text"
        @input="formData.industry = formData.industry.toUpperCase()"
        label="Industry"
        placeholder="Please enter the Industry"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.name_of_employer"
        name="name_of_employer"
        center
        :required="true"
        autocomplete="off"
        @input="formData.name_of_employer = formData.name_of_employer.toUpperCase()"
        type="text"
        label="Name of Employer"
        placeholder="Please enter the Name of Employer"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.nature_of_business"
        name="nature_of_business"
        autocomplete="off"
        center
        :required="true"
        @input="formData.nature_of_business = formData.nature_of_business.toUpperCase()"
        type="text"
        label="Nature of Business(if Self-Employed)"
        placeholder="Please enter the Nature of Business(if Self-Employed)"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.relationship_with_settlor"
        name="relationship_with_settlor"
        center
        autocomplete="off"
        :required="true"
        @input="formData.relationship_with_settlor = formData.relationship_with_settlor.toUpperCase()"
        type="text"
        label="Relationship with Settlor"
        placeholder="Please enter the Relationship with Settlor"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.annual_salary_income"
        name="annual_salary_income"
        center
        :required="true"
        type="text"
        autocomplete="off"
        label="Annual Salary/ Income"
        placeholder="Please enter the Annual Salary/ Income"
        :rules="[{ required: true }]"
      />
      <div class="minTitle">If Payslip (Item 12) is not available, then please provide:EPF statement/ Unit trust statement/ S&P agreement/ etc </div>
      <van-field
        v-model="formData.source_of_wealth"
        name="source_of_wealth"
        center
        :required="true"
        autocomplete="off"
        @input="formData.source_of_wealth = formData.source_of_wealth.toUpperCase()"
        type="text"
        label="Source of Wealth"
        placeholder="Please enter the Source of Wealth"
        :rules="[{ required: true }]"
      />
      <div class="minTitle">Please provide: Bank statement with Name of Bank, Name of Account Holder, Account Number.</div>
      <van-field
        v-model="formData.source_of_fund"
        name="source_of_fund"
        center
        :required="true"
        @input="formData.source_of_fund = formData.source_of_fund.toUpperCase()"
        autocomplete="off"
        type="text"
        label="Source of Fund(Origin of fund)"
        placeholder="Please enter the Source of Fund(Origin of fund)"
        :rules="[{ required: true }]"
      />
      <div class="minTitle">Third-Party Details (Legal Entity)</div>
      <van-field
        v-model="formData.third_party_name"
        name="third_party_name"
        center
        autocomplete="off"
        @input="formData.third_party_name = formData.third_party_name.toUpperCase()"
        :required="true"
        type="text"
        label="Name of Contributor(Company/Organisation)"
        placeholder="Please enter the Name of Contributor(Company/Organisation)"
        :rules="[
          {
            required: true,
          },
        ]"
      />

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
      <van-field
        v-model="formData.third_party_passport"
        name="third_party_passport"
        center
        :required="true"
        @input="formData.third_party_passport = formData.third_party_passport.toUpperCase()"
        type="text"
        autocomplete="off"
        label="Company/ Organisation Registration No."
        placeholder="Please enter the Company/ Organisation Registration No."
        :rules="[
          {
            required: true,
          },
        ]"
      />
      <van-field
        v-model="formData.third_party_phone"
        name="third_party_phone"
        center
        :required="true"
        type="text"
        autocomplete="off"
        label="Company Contact No"
        placeholder="Please enter the Company Contact No"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.third_party_address"
        name="third_party_address"
        autocomplete="off"
        center
        :required="true"
        @input="formData.third_party_address = formData.third_party_address.toUpperCase()"
        type="text"
        label="Proof of current Address of the Company/ Organisation"
        placeholder="Please enter the Proof of current Address of the Company/ Organisation"
        :rules="[
          {
            required: true,
          },
        ]"
      />
      <van-field
        v-model="formData.name_of_director"
        name="name_of_director"
        center
        autocomplete="off"
        @input="formData.name_of_director = formData.name_of_director.toUpperCase()"
        :required="true"
        type="text"
        label="Name of Director(s)"
        placeholder="Please enter the Name of Director(s)"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.name_of_shareholder"
        name="name_of_shareholder"
        center
        @input="formData.name_of_shareholder = formData.name_of_shareholder.toUpperCase()"
        autocomplete="off"
        :required="true"
        type="text"
        label="Name of Shareholder(s)"
        placeholder="Please enter the Name of Shareholder(s)"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.nature_of_business2"
        name="nature_of_business2"
        center
        autocomplete="off"
        :required="true"
        @input="formData.nature_of_business2 = formData.nature_of_business2.toUpperCase()"
        type="text"
        label="Nature of Business"
        placeholder="Please enter the Nature of Business"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.profit_loss_statement"
        name="profit_loss_statement"
        center
        :required="true"
        @input="formData.profit_loss_statement = formData.profit_loss_statement.toUpperCase()"
        autocomplete="off"
        type="text"
        label="Profit & Loss Statement"
        placeholder="Please enter the Profit & Loss Statement"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.source_of_fund2"
        name="source_of_fund2"
        center
        :required="true"
        @input="formData.source_of_fund2 = formData.source_of_fund2.toUpperCase()"
        autocomplete="off"
        type="text"
        label="Source of Fund"
        placeholder="Please enter the Source of Fund"
        :rules="[{ required: true }]"
      />

      <van-field
        v-model="formData.third_party_reference_no"
        name="third_party_reference_no"
        center
        :required="true"
        autocomplete="off"
        type="text"
        @input="formData.third_party_reference_no = formData.third_party_reference_no.toUpperCase()"
        label="Relationship with Settlor"
        placeholder="Please enter the Relationship with Settlor"
        :rules="[{ required: true }]"
      />
      <div class="minTitle">Contributor’s Contact Person </div>
      <van-field
        v-model="formData.contributor_name"
        name="contributor_name"
        center
        autocomplete="off"
        :required="true"
        type="text"
        @input="formData.contributor_name = formData.contributor_name.toUpperCase()"
        label="Name"
        placeholder="Please enter the Name"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.contributor_contact"
        name="contributor_contact"
        center
        :required="true"
        type="text"
        autocomplete="off"
        label="Contact No"
        placeholder="Please enter the Contact No"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.contributor_email"
        name="contributor_email"
        center
        autocomplete="off"
        :required="true"
        type="text"
        label="Email"
        placeholder="Please enter the Email"
        :rules="[{ required: true }]"
      />
      <div class="minTitle">Note: [1] Bank statement with Name of Bank, Name of Account Holder, Account Number</div>
      <van-field
        name="declaration_third_party"
        label="Declaration of Third-Party Funds (Please tick √)"
        :required="true"
        :rules="[
          {
            required: true,
          },
        ]"
      >
        <template #input>
          <van-radio-group
            v-model="formData.declaration_third_party"
            @change="declarationThirdParty"
          >
            <van-radio :name="1"
              >Natural love and affection or as gift to me (Settlor)</van-radio
            >
            <van-radio :name="2">Money owed to me (Settlor)</van-radio>
            <van-radio :name="3">Other, please specify</van-radio>
            <van-field
              v-model="formData.others_please_specify"
              name="others_please_specify"
              center
              type="text"
              label=""
              @input="formData.others_please_specify = formData.others_please_specify.toUpperCase()"
              placeholder="Please enter the Others, please specify"
              :rules="[{ required:isothers_please_specify }]"
            />
            <van-radio :name="4"
              >Relationship between the Settlor and Third-Party</van-radio>
            <van-field
              v-model="formData.relationship_between"
              name="relationship_between"
              center
              type="text"
              @input="formData.relationship_between = formData.relationship_between.toUpperCase()"
              label=""
              placeholder="Please enter the Relationship between the Settlor and Third-Party"
              :rules="[{ required: isrelationship_between }]"
            />
            <van-radio :name="5">All photocopied documents must be verified (i.e. signed, dated, name stated) by the Marketing/ Distributing agent</van-radio>
          </van-radio-group>
        </template>
      </van-field>
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
      <div class="tl">Signature of Settlor</div>
      <vue-esign
        ref="client_signature"
        :style="{ display: (this.xyz === '' ? 'block' : formData.client_signature === null || formData.client_signature === '' ? 'block' : 'none') }"
      
        :width="800"
        :height="300"
        :isCrop="false"
        :lineWidth="6"
        lineColor="#000000"
        bgColor.sync="#fff"
        style="border: 1px solid #666"
      />
      <van-image
      :style="{ border: '1px solid #666', display: (this.xyz === '1' ? formData.client_signature === null || formData.client_signature === '' ? 'none' : 'block' : 'none') }"
     
       
        class="esignImgbox"
        :src="formData.client_signature"
      />
      <div class="tr">
        <div class="esignBtn" @click="handleReset('client_signature')" v-if="!isDone">
          Clear
        </div>
        <div class="esignBtn" @click="handleGenerate('client_signature')" v-if="!isDone">
          Confirm
        </div>
      </div>
      <van-field
        v-model="formData.client_name"
        name="client_name"
        center
        :required="true"
        type="text"
        @input="formData.client_name = formData.client_name.toUpperCase()"
        autocomplete="off"
        label="Name"
        placeholder="Please enter the Name"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.client_passport"
        name="client_passport"
        center
        :required="true"
        autocomplete="off"
        @input="formData.client_passport = formData.client_passport.toUpperCase()"
        type="text"
        label="NRIC No"
        placeholder="Please enter the NRIC No"
        :rules="[{ required: true }]"
      />

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
      <vue-esign
        ref="witness_signature"
        :style="{ display: (this.xyz1 === '' ? 'block' : formData.witness_signature === null || formData.witness_signature === '' ? 'block' : 'none') }"
   
        :width="800"
        :height="300"
        :isCrop="false"
        :lineWidth="6"
        lineColor="#000000"
        bgColor.sync="#fff"
        style="border: 1px solid #666"
      />
      <van-image
      :style="{ border: '1px solid #666', display: (this.xyz1 === '1' ? formData.witness_signature === null || formData.witness_signature === '' ? 'none' : 'block' : 'none') }"
        class="esignImgbox"
       
        :src="formData.witness_signature"
      />
      <div class="tr">
        <div class="esignBtn" @click="handleReset('witness_signature')" v-if="!isDone">
          Clear
        </div>
        <div class="esignBtn" @click="handleGenerate('witness_signature')" v-if="!isDone">
          Confirm
        </div>
      </div>
      <van-field
        v-model="formData.witness_name"
        name="witness_name"
        center
        :required="true"
        @input="formData.witness_name = formData.witness_name.toUpperCase()"
        autocomplete="off"
        type="text"
        label="Name"
        placeholder="Please enter the Name"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="formData.witness_passport"
        name="witness_passport"
        center
        @input="formData.witness_passport = formData.witness_passport.toUpperCase()"
        :required="true"
        type="text"
        autocomplete="off"
        label="NRIC No"
        placeholder="Please enter the NRIC No"
        :rules="[{ required: true }]"
      />
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
      <van-button  round block type="info" native-type="submit" color="#7C655D" v-if="!isDone">
        Submit
      </van-button>
    </van-form>
 <!-- ---------------------------------------------------------------------------------------------------------------------------------------------------    -->
    <van-button   round block type="info" color="#7C655D" style="margin-top:5rem;"  @click="$emit('onSelect')" v-if="$store.state.isOverseaSignature">
       Copy Link for Sharing with Settlor
    </van-button>

    <!-- 日期彈框 -->
    <van-popup v-model="isShowPicker" position="bottom">
      <van-datetime-picker
        v-model="currentContent"
        input-align="left"
        type="date"
        :min-hour="0"
        confirm-button-text="Confirm"
        cancel-button-text="Cancel"
        :min-date="minDate"
        @cancel="onHiddenPicker"
        @confirm="onConfirmPicker"
      />
    </van-popup>
  </div>
</template>

<script>
import { uploadAutograph } from "@/api/util";
import {
  third_party_declaration_form,
  getOrdersForms,
  putOrdersForms,
} from "@/api/order";
export default {
  props: ['orderDataInfo'],
  data() {
    return {
      pattern: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,// 正则验证时间
      formData: {
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
      from: "", 
      xyz: "",
      xyz1:"",
      isShowPicker: false, // 控制日期彈框
      currentContent: new Date(), // 日期彈框顯示當前日期
      whichDate: "", // 區分是哪個日期觸發彈框
      isFilled: "", // 表單id
      minDate: new Date(1900, 0, 1),
      isDone: false, // 訂單是否已確認
      isothers_please_specify:false,
      isrelationship_between:false
    };
  },
  mounted() {
   // alert("fsb")
    console.log("===============",this.$store.state.isOverseaSignature)

    if(this.$store.state.isOverseaSignature){
      this.from = "create"
      this.isFilled=0
    }else{
      this.from = this.$route.query.from;
      this.isFilled = this.$route.query.isFilled;
      this.isDone = this.$route.query.status == 1 ? true : false;
    }
    if(this.$route.query.isShare){
      this.isFilled=this.$route.query.third_party_declaration_form
    }


    // this.isFilled = this.$route.query.isFilled;
    // this.isDone = this.$route.query.status == 1 ? true : false;
    this.getFormData();
    this.isDone = sessionStorage.getItem('orderStatus') === '2'
  },
  methods: {
    declarationThirdParty(val){
       if(val===3){
         this.isothers_please_specify=true
         this. isrelationship_between=false
       }else if(val===4){
         this. isrelationship_between=true
         this.isothers_please_specify=false
       }else{
         this.isothers_please_specify=false
         this. isrelationship_between=false
       }
    },
    // 如果已填 獲取數據
    getFormData() {
      if (this.isFilled > 0) {
        getOrdersForms(this.isFilled, { type: "Third Party Declaration" })
          .then((res) => {
            console.log("------3rd---get data -------",res);
            this.formData = res;
            this.xyz = "1"
            this.xyz1 = "1"
          })
          .catch((err) => {});
      }
    },
    submit(form) {
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
  
console.log("---3rd--this.filled..submit.-----",this.isFilled)
console.log("---3rd--this.filled..submit.-data----",this.formData)
      let data = JSON.parse(JSON.stringify(this.formData));
      if (this.isFilled > 0) {
        // 修改
        putOrdersForms(this.isFilled, {
          type: "Third Party Declaration",
          data: JSON.stringify(data),
        }).then((res) => {
          console.log(res, "修改Third Party Declaration成功");
          this.$toast({
            type: "success",
            message: "Modify the success",
          });
          if(!this.$route.query.isShare && !this.$store.state.isOverseaSignature){
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
        console.log("------id 3rd-id-",id)
        console.log("------id 3rd-data-",data)
        third_party_declaration_form(id, data)
          .then((res) => {
            console.log("----6-6-6--6-6-6---",res)
            this.isFilled = res.third_party_declaration_form
            this.$toast({
              type: "success",
              message: "Submitted successfully",
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




            //this.$router.go(-1);
          })
          .catch((err) => {});
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
        var M = ("0" + (date.getMonth()+ 1)).slice(-2)+ "-"
        var D = date.getDate() + "-";
        return D + M + Y;
      }
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
      // if(!this.$store.state.isOverseaSignature || val === "witness_signature"){
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
      // else{
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
/deep/ .van-radio__icon{
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
</style>
