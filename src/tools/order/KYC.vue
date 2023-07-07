<template>
  <div class="KYC bodybox">
    <van-form validate-first @submit="submit" :submit-on-enter="false" :scroll-to-error="true">
      <div class="minTitle">Compliance Questionnaire(Individual)</div>
      <div class="minTitle">Name of settlor (as per IC):</div>
      <div class="minTitle">Requirement:-</div>
      <div class="contentText">
        1. We have a Regulatory Obligation to verify the source of your fund and
        wealth. Documentary evidence duly verified by Commission of Oath or
        other agreeable authority must be provided to us.
      </div>
      <div class="contentText">
        2. The document checklist (Section E) is to assist you to get ready
        these documents and information in advance for on boarding.
      </div>
      <div class="contentText">
        3. Should more documents be needed to satisfy the regulatory
        requirement, we will advise you in due course.
      </div>
      <div class="contentText">
        4. Section A, B, C, D and E are required to be completely filled and
        signed off by the settlor in Section F.
      </div>
      <div class="contentText">
        5. Marketing Team of DDG INTERNATIONAL BERHAD to fill in Section G and
        signed off.
      </div>
      <div class="minTitle">Compliance Questionnaire</div>
      <div class="minTitle">
        SECTION A INDIVIDUAL (SETTLOR, DIRECTOR, SHAREHOLDER, ULTIMATE
        BENEFICIARY OWNER)
      </div>
      <div class="minTitle">Settlor</div>
      <van-field v-model="formData.settlor.Full" name="Full" center :required="true" type="text" autocomplete="off"
      @input="formData.settlor.Full = formData.settlor.Full.toUpperCase()"
        label="Full Name" placeholder="Please enter the Full Name" :rules="[{ required: true }]" />
      <van-field v-model="formData.settlor.Other" name="Other" center autocomplete="off" type="text"
      @input="formData.settlor.Other = formData.settlor.Other.toUpperCase()"
        label="Other/Previous Name (if any)" placeholder="Please enter the Other/Previous Name (if any)" />
        
      <van-field v-model="formData.settlor.New" name="New" autocomplete="off" center :required="true" type="text"
      @input="formData.settlor.New = formData.settlor.New.toUpperCase()"
        label="NEW - Malaysia NRIC No" placeholder="Please enter the NEW - Malaysia NRIC No" :rules="[
          {
            required: true,
          },
        ]" />

      <van-field v-model="formData.settlor.Old" name="Old" autocomplete="off" center type="text"
      @input="formData.settlor.Old = formData.settlor.Old.toUpperCase()"
        label="OLD - Malaysia NRIC No.(if applicable)"
        placeholder="Please enter the OLD - Malaysia NRIC No.(if applicable)" />
      <van-field v-model="formData.settlor.Nationality" name="Nationality" autocomplete="off" center :required="true"
      @input="formData.settlor.Nationality = formData.settlor.Nationality.toUpperCase()"
        type="text" label="Nationality(state all if multiple nationality)"
        placeholder="Please enter the Nationality(state all if multiple nationality)" :rules="[
          {
            required: true,
          },
        ]" />
      <div class="minTitle">
        For Non-Malaysia NRIC Holders, please provide passport details
      </div>
      <van-field v-model="formData.settlor_non_malaysia.Passport" name="Passport" center type="text" autocomplete="off"
      @input="formData.settlor_non_malaysia.Passport = formData.settlor_non_malaysia.Passport.toUpperCase()"
        label="Passport Number" placeholder="Please enter the Passport Number" />
      <van-field v-model="formData.settlor_non_malaysia.Passport2" name="Passport2" center autocomplete="off"
        type="text" label="Passport Expiry Date: DD-MM-YYYY" placeholder="Please enter the Passport Expiry Date" />
      <van-field v-model="formData.settlor_non_malaysia.Passport3" name="Passport3" center type="text"
      @input="formData.settlor_non_malaysia.Passport3 = formData.settlor_non_malaysia.Passport3.toUpperCase()"
        autocomplete="off" label="Passport Issuing Country" placeholder="Please enter the Passport Issuing Country" />
      <van-field v-model="formData.settlor_non_malaysia.Date" name="Date" autocomplete="off" center
        label="Date of Birth: DD-MM-YYYY" placeholder="Please enter DD-MM-YYYY" />
      <van-field v-model="formData.settlor_non_malaysia.Country" name="Country" center :required="true" type="text"
      @input="formData.settlor_non_malaysia.Country = formData.settlor_non_malaysia.Country.toUpperCase()"
        autocomplete="off" label="Country of Birth" placeholder="Please enter the Country of Birth" :rules="[
          { required: true },
        ]" />
      <van-field name="Gender" label="Gender" :required="true" :rules="[{ required: true }]">
        <template #input>
          <van-radio-group v-model="formData.settlor_non_malaysia.Gender" direction="horizontal">
            <van-radio :name="1">Female</van-radio>
            <van-radio :name="2">Male</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field name="Marital" label="Marital Status" :required="true" :rules="[
        { required: true },
      ]">
        <template #input>
          <van-radio-group v-model="formData.settlor_non_malaysia.Marital" direction="horizontal">
            <van-radio :name="1">Single</van-radio>
            <van-radio :name="2">Married</van-radio>
            <van-radio :name="3">Divorced</van-radio>
            <van-radio :name="4">Widow/ Widower</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <div class="minTitle">Contact Details</div>
      <van-field v-model="formData.settlor_contact_details.Email" name="Email" center autocomplete="off"
        :required="true" type="email" label="Email Address" placeholder="Please enter the Email Address"
        :rules="[{ required: true }]" />
      <van-field v-model="formData.settlor_contact_details.Mobile" name="Mobile" center :required="true"
        autocomplete="off" type="text" label="Mobile Phone No" @keypress="isLetter($event)"
        placeholder="Please enter the Mobile Phone No" :rules="[
          { required: true },
        ]" />
      <van-field v-model="formData.settlor_contact_details.Home" name="Home" center type="text" autocomplete="off"
        @keypress="isLetter($event)" label="Home Phone No" placeholder="Please enter the Home Phone No" />
      <van-field v-model="formData.settlor_contact_details.Office" name="Office" center autocomplete="off" type="text"
        label="Office Phone No" @keypress="isLetter($event)" placeholder="Please enter the Office Phone No" />
      <van-field v-model="formData.settlor_contact_details.Residential" name="Residential" center :required="true"
      @input="formData.settlor_contact_details.Residential = formData.settlor_contact_details.Residential.toUpperCase()"
        type="text" autocomplete="off" label="Residential Address" placeholder="Please enter the Residential Address"
        :rules="[
          { required: true },
        ]" />
      <van-field v-model="formData.settlor_contact_details.Postcode" name="Postcode" autocomplete="off" center
      @input="formData.settlor_contact_details.Postcode = formData.settlor_contact_details.Postcode.toUpperCase()"
        :required="true" type="text" label="Postcode" placeholder="Please enter the Postcode" :rules="[
          { required: true },
        ]" />
      <van-field v-model="formData.settlor_contact_details.Country" name="Country" autocomplete="off" center
      @input="formData.settlor_contact_details.Country = formData.settlor_contact_details.Country.toUpperCase()"
        :required="true" type="text" label="Country" placeholder="Please enter the Country" :rules="[
          { required: true },
        ]" />
      <van-field v-model="formData.settlor_contact_details.Length" name="Length" center :required="true"
        autocomplete="off" type="text" label="Length of stay (Years) "
        placeholder="Please enter the Length of stay (Years) " :rules="[
          {
            required: true,
          },
        ]" />
      <van-field v-model="formData.settlor_contact_details.Mailing" name="Mailing" autocomplete="off" center type="text"
      @input="formData.settlor_contact_details.Mailing = formData.settlor_contact_details.Mailing.toUpperCase()"
        label="Mailing Address(if different from the above address)"
        placeholder="Please enter the Mailing Address(if different from the above address)" />
      <van-field v-model="formData.settlor_contact_details.Postcode2" name="Postcode2" center type="text"
      @input="formData.settlor_contact_details.Postcode2 = formData.settlor_contact_details.Postcode2.toUpperCase()"
        autocomplete="off" label="Postcode" placeholder="Please enter the Postcode" />
      <van-field v-model="formData.settlor_contact_details.Country2" name="Country2" center type="text" label="Country"
      @input="formData.settlor_contact_details.Country2 = formData.settlor_contact_details.Country2.toUpperCase()"
        autocomplete="off" placeholder="Please enter the Country" />
      <div class="minTitle">Spouse</div>

      <van-field v-model="formData.spouse.Full" v-if="formData.settlor_non_malaysia.Marital != 2" name="Full" autocomplete="off" center type="text" label="Full Name"
      @input="formData.spouse.Full = formData.spouse.Full.toUpperCase()" placeholder="Please enter the Full Name" />


        <van-field v-model="formData.spouse.Full"
        @input="formData.spouse.Full = formData.spouse.Full.toUpperCase()" 
         v-if="formData.settlor_non_malaysia.Marital == 2" :rules="[{ required: true }]"  :required="true" name="Full" autocomplete="off" center type="text" label="Full Name"
        placeholder="Please enter the Full Name" />


      <van-field v-model="formData.spouse.Other"  name="Other" center autocomplete="off" type="text"
      @input="formData.spouse.Other = formData.spouse.Other.toUpperCase()"
        label="Other/Previous Name (if any)" placeholder="Please enter the Other/Previous Name (if any)" />

      <van-field v-model="formData.spouse.New" @input="formData.spouse.New = formData.spouse.New.toUpperCase()" v-if="formData.settlor_non_malaysia.Marital != 2" name="New" center type="text" autocomplete="off"
        label="NEW - Malaysia NRIC No" placeholder="Please enter the NEW - Malaysia NRIC No" />
        <van-field v-model="formData.spouse.New" @input="formData.spouse.New = formData.spouse.New.toUpperCase()" v-if="formData.settlor_non_malaysia.Marital == 2" :rules="[{ required: true }]"  :required="true" name="New" center type="text" autocomplete="off"
        label="NEW - Malaysia NRIC No" placeholder="Please enter the NEW - Malaysia NRIC No" />



      <van-field v-model="formData.spouse.Old" name="Old" center autocomplete="off" type="text"
      @input="formData.spouse.Old = formData.spouse.Old.toUpperCase()"
        label="OLD - Malaysia NRIC No.(if applicable)"
        placeholder="Please enter the OLD - Malaysia NRIC No.(if applicable)" />
      <van-field v-model="formData.spouse.Nationality" name="Nationality" center autocomplete="off" type="text"
      @input="formData.spouse.Nationality = formData.spouse.Nationality.toUpperCase()"
        label="Nationality(state all if multiple nationality)"
        placeholder="Please enter the Nationality(state all if multiple nationality)" />
      <div class="minTitle">
        For Non-Malaysia NRIC Holders, please provide passport details
      </div>
      <van-field v-model="formData.spouse_non_malaysia.Passport" name="Passport" autocomplete="off" center type="text"
      @input="formData.spouse_non_malaysia.Passport = formData.spouse_non_malaysia.Passport.toUpperCase()"
        label="Passport Number" placeholder="Please enter the Passport Number" />
      <van-field v-model="formData.spouse_non_malaysia.Passport2" name="Passport2" center type="text" autocomplete="off"
        label="Passport Expiry Date: DD-MM-YYYY" placeholder="Please enter the Passport Expiry Date" />
      <van-field v-model="formData.spouse_non_malaysia.Passport3" name="Passport3" center type="text" autocomplete="off"
      @input="formData.spouse_non_malaysia.Passport3 = formData.spouse_non_malaysia.Passport3.toUpperCase()"
        label="Passport Issuing Country" placeholder="Please enter the Passport Issuing Country" />
      <van-field v-model="formData.spouse_non_malaysia.Date" name="Date" autocomplete="off" center type="text"
        label="Date of Birth: DD-MM-YYYY" placeholder="Please enter DD-MM-YYYY" />
      <van-field v-model="formData.spouse_non_malaysia.Country" name="Country" autocomplete="off" center type="text"
      @input="formData.spouse_non_malaysia.Country = formData.spouse_non_malaysia.Country.toUpperCase()"
        label="Country of Birth" placeholder="Please enter the Country of Birth" />
      <van-field name="Gender" label="Gender">
        <template #input>
          <!-- <van-radio-group v-model="formData.spouse_non_malaysia.Gender" direction="horizontal">
            <van-radio :name="1">Female</van-radio>
            <van-radio :name="2">Male</van-radio>
          </van-radio-group> -->
          <van-checkbox-group v-model="formData.spouse_non_malaysia.Gender" direction="horizontal">
            <van-checkbox @click="radio3(1)" :id="'q1'" :name="1">Female</van-checkbox>
            <van-checkbox @click="radio3(2)" :name="2">Male</van-checkbox>
          </van-checkbox-group>

        </template>
      </van-field>
      <van-field name="Marital" label="Marital Status">
        <template #input>
          <!-- <van-radio-group v-model="formData.spouse_non_malaysia.Marital" direction="horizontal">
            <van-radio :name="1">Single</van-radio>
            <van-radio :name="2">Married</van-radio>
            <van-radio :name="3">Divorced</van-radio>
            <van-radio :name="4">Widow/ Widower</van-radio>
          </van-radio-group> -->
          <van-checkbox-group v-model="formData.spouse_non_malaysia.Marital" direction="horizontal">
            <van-checkbox @click="radio2(1)" :id="'q1'" :name="1">Single</van-checkbox>
            <van-checkbox @click="radio2(2)" :name="2">Married</van-checkbox>
            <van-checkbox @click="radio2(3)" :name="3">Divorced</van-checkbox>
            <van-checkbox @click="radio2(4)" :name="4">Widow/ Widower</van-checkbox>
          </van-checkbox-group>

        </template>
      </van-field>
      <div class="minTitle">Contact Details</div>
      <van-field v-model="formData.spouse_contact_details.Email" name="Email" center autocomplete="off" type="email"
        label="Email Address" placeholder="Please enter the Email Address" />
      <van-field v-model="formData.spouse_contact_details.Mobile" name="Mobile" center type="text" autocomplete="off"
        label="Mobile Phone No" @keypress="isLetter($event)" placeholder="Please enter the Mobile Phone No" />
      <van-field v-model="formData.spouse_contact_details.Home" name="Home" center type="text" autocomplete="off"
        label="Home Phone No" @keypress="isLetter($event)" placeholder="Please enter the Home Phone No" />
      <van-field v-model="formData.spouse_contact_details.Office" name="Office" autocomplete="off" center type="text"
        @keypress="isLetter($event)" label="Office Phone No" placeholder="Please enter the Office Phone No" />
      <van-field v-model="formData.spouse_contact_details.Residential" name="Residential" autocomplete="off" center
      @input="formData.spouse_contact_details.Residential = formData.spouse_contact_details.Residential.toUpperCase()"
        type="text" label="Residential Address" placeholder="Please enter the Residential Address" />
      <van-field v-model="formData.spouse_contact_details.Postcode" name="Postcode" center autocomplete="off"
        type="text" label="Postcode" placeholder="Please enter the Postcode" />
      <van-field v-model="formData.spouse_contact_details.Country" name="Country" autocomplete="off" center type="text"
      @input="formData.spouse_contact_details.Country = formData.spouse_contact_details.Country.toUpperCase()"
        label="Country" placeholder="Please enter the Country" />
      <van-field v-model="formData.spouse_contact_details.Length" name="Length" center autocomplete="off" type="text"
        label="Length of stay (Years) " placeholder="Please enter the Length of stay (Years) " />
      <van-field v-model="formData.spouse_contact_details.Mailing" name="Mailing" center autocomplete="off" type="text"
      @input="formData.spouse_contact_details.Mailing = formData.spouse_contact_details.Mailing.toUpperCase()"
        label="Mailing Address(if different from the above address)"
        placeholder="Please enter the Mailing Address(if different from the above address)" />
      <van-field v-model="formData.spouse_contact_details.Postcode2" name="Postcode2" center type="text"
      @input="formData.spouse_contact_details.Postcode2 = formData.spouse_contact_details.Postcode2.toUpperCase()"
        autocomplete="off" label="Postcode" placeholder="Please enter the Postcode" />

      <van-field v-model="formData.spouse_contact_details.Country2" name="Country2" center autocomplete="off"
      @input="formData.spouse_contact_details.Country2 = formData.spouse_contact_details.Country2.toUpperCase()"
        type="text" label="Country" placeholder="Please enter the Country" />
<br>




      <div class="minTitle">SECTION B OCCUPATION</div>
      <div class="minTitle">Settlor</div>
      <van-field name="Occupation" label="Occupation Type" :required="true" :rules="[
        { required: true },
      ]">
        <template #input>
          <van-radio-group v-model="formData.settlor_occupation.Occupation" direction="horizontal">
            <van-radio :name="1">Salaried</van-radio>
            <van-radio :name="2">Self-Employed</van-radio>
            <van-radio :name="3">Retiree</van-radio>
            <van-radio :name="4">Other</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field v-show="formData.settlor_occupation.Occupation == 4" v-model="formData.settlor_occupation.Occupation_Type"
      @input="formData.settlor_occupation.Occupation_Type = formData.settlor_occupation.Occupation_Type.toUpperCase()"
        name="Occupation_Type" center type="text" label="Other" autocomplete="off" placeholder="Other" />
        
      <van-field v-model="formData.settlor_occupation.Occupation2" name="Occupation2" center :required="true"
      @input="formData.settlor_occupation.Occupation2 = formData.settlor_occupation.Occupation2.toUpperCase()"
        autocomplete="off" type="text" label="Occupation" placeholder="Please enter the Occupation"
        :rules="[{ required: true }]" />
      <van-field v-model="formData.settlor_occupation.Industry" name="Industry" autocomplete="off" center type="text"
      @input="formData.settlor_occupation.Industry = formData.settlor_occupation.Industry.toUpperCase()"
        label="Industry" placeholder="Please enter the Industry" />
      <van-field v-model="formData.settlor_occupation.Name" name="Name" center autocomplete="off" :required="true"
      @input="formData.settlor_occupation.Name = formData.settlor_occupation.Name.toUpperCase()"
        type="text" label="Name of Employer" placeholder="Please enter the Name of Employer" :rules="[
          { required: true },
        ]" />
      <van-field v-model="formData.settlor_occupation.Nature" name="Nature" center type="text" autocomplete="off"
      @input="formData.settlor_occupation.Nature = formData.settlor_occupation.Nature.toUpperCase()"
        label="Nature of Business(if Self-Employed)"
        placeholder="Please enter the Nature of Business(if Self-Employed)" />
      <van-field v-model="formData.settlor_occupation.Annual" name="Annual" center :required="true" type="text"
        autocomplete="off" label="Annual Salary / Income" placeholder="Please enter the Annual Salary / Income" :rules="[
          {
            required: true,
          },
        ]" />
      <div class="minTitle">Spouse</div>
      <van-field name="Occupation" label="Occupation Type">
        <template #input>

          <van-checkbox-group v-model="formData.spouse_occupation.Occupation" direction="horizontal">
            <van-checkbox @click="radio4(1)" :id="'q1'" :name="1">Salaried</van-checkbox>
            <van-checkbox @click="radio4(2)" :name="2">Self-Employed</van-checkbox>
            <van-checkbox @click="radio4(3)" :name="3">Retiree</van-checkbox>
            <van-checkbox @click="radio4(4)" :name="4">Other</van-checkbox>
          </van-checkbox-group>

          <!-- <van-radio-group v-model="formData.spouse_occupation.Occupation" direction="horizontal">
            <van-radio :name="1">Salaried</van-radio>
            <van-radio :name="2">Self-Employed</van-radio>
            <van-radio :name="3">Retiree</van-radio>
          </van-radio-group> -->
        </template>




      </van-field>

      <van-field v-show="formData.spouse_occupation.Occupation == 4" v-model="formData.spouse_occupation.Occupation_Type"
      @input="formData.spouse_occupation.Occupation_Type = formData.spouse_occupation.Occupation_Type.toUpperCase()"
        name="Occupation_Type" center type="text" label="Other" autocomplete="off" placeholder="Other" />
      <van-field v-model="formData.spouse_occupation.Occupation2" name="Occupation2" center autocomplete="off"
      @input="formData.spouse_occupation.Occupation2 = formData.spouse_occupation.Occupation2.toUpperCase()"
        type="text" label="Occupation" placeholder="Please enter the Occupation" />
      <van-field v-model="formData.spouse_occupation.Industry" name="Industry" center type="text" label="Industry"
      @input="formData.spouse_occupation.Industry = formData.spouse_occupation.Industry.toUpperCase()"
        autocomplete="off" placeholder="Please enter the Industry" />
      <van-field v-model="formData.spouse_occupation.Name" name="Name" center autocomplete="off" type="text"
      @input="formData.spouse_occupation.Name = formData.spouse_occupation.Name.toUpperCase()"
        label="Name of Employer" placeholder="Please enter the Name of Employer" />
      <van-field v-model="formData.spouse_occupation.Nature" name="Nature" center autocomplete="off" type="text"
      @input="formData.spouse_occupation.Nature = formData.spouse_occupation.Nature.toUpperCase()"
        label="Nature of Business(if Self-Employed)"
        placeholder="Please enter the Nature of Business(if Self-Employed)" />
      <van-field v-model="formData.spouse_occupation.Annual" name="Annual" center type="text" autocomplete="off"
        label="Annual Salary / Income" placeholder="Please enter the Annual Salary / Income" />
      <div class="minTitle">
        SECTION C ENHANCED CUSTOMER DUE DILIGENCE (EDD)
      </div>
      <van-field name="Are" label="Are you a Political Exposed Person (PEP)?" :required="true" :rules="[
        {
          required: true,
        },
      ]">
        <template #input>
          <van-radio-group v-model="formData.edd.Are" direction="horizontal">
            <van-radio :name="1">YES</van-radio>
            <van-radio :name="0">NO</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field name="Are2" label="Are you connected to any local and/or Foreign Political Exposed Person (PEP)?"
        :required="true" :rules="[
          {
            required: true,
          },
        ]">
        <template #input>
          <van-radio-group v-model="formData.edd.Are2" direction="horizontal">
            <van-radio :name="1">YES</van-radio>
            <van-radio :name="0">NO</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <div class="minTitle">
        If the answer to C2 is YES, please provide the following details:
      </div>
      <van-field v-model="formData.c_two_yes.Pep" name="Pep" center autocomplete="off" type="text"
      @input="formData.c_two_yes.Pep = formData.c_two_yes.Pep.toUpperCase()"
        label="PEP’s Full Name" placeholder="Please enter the PEP’s Full Name" />
      <van-field name="Relationship" label="Relationship with the PEP">
        <template #input>
          <van-checkbox-group v-model="formData.c_two_yes.Relationship">
            <van-checkbox @click="radio1(1)" :id="'q1'" :name="1">Self</van-checkbox>
            <van-checkbox @click="radio1(2)" :name="2">Family Member Spouse / Child / Parent / Child’s
              Spouse</van-checkbox>
            <van-checkbox @click="radio1(3)" :name="3">Close Associate, please specify</van-checkbox>
            <van-checkbox @click="radio1(4)" :name="4">Ultimate Beneficiary,Owner / Shareholder / Director / Partner /
              Authorised Person</van-checkbox>
            <van-checkbox @click="radio1(5)" :name="5">Others, please specify</van-checkbox>
          </van-checkbox-group>

          <!-- <van-radio-group  v-model="formData.c_two_yes.Relationship">
            <van-radio  @click="radio1()" :id="'q1'" :name="1">Self</van-radio>

            <van-radio  @click="radio1()" :id="'q2'" :name="2">Family Member Spouse / Child / Parent / Child’s Spouse</van-radio>
            <van-radio :id="'q3'" :name="3">Close Associate, please specify</van-radio>
            <van-radio :name="4">Ultimate Beneficiary,Owner / Shareholder / Director / Partner /
              Authorised Person</van-radio>
            <van-radio :name="5">Others, please specify</van-radio>
          </van-radio-group> -->

        </template>
      </van-field>
      <van-field v-model="formData.c_two_yes.Close" name="Close" center autocomplete="off" type="text"
      @input="formData.c_two_yes.Close = formData.c_two_yes.Close.toUpperCase()"
        label="Close Associate, please specify" placeholder="Please enter the Close Associate, please specify" />
      <van-field v-model="formData.c_two_yes.Others" name="Others" center autocomplete="off" type="text"
      @input="formData.c_two_yes.Others = formData.c_two_yes.Others.toUpperCase()"
        label="Others, please specify" placeholder="Please enter the Others, please specify" />
      <van-field name="Are" label="Are you an undischarged bankrupt?" :required="true" :rules="[
        {
          required: true,
        },
      ]">
        <template #input>
          <van-radio-group v-model="formData.c_two_yes.Are" direction="horizontal">
            <van-radio :name="1">YES</van-radio>
            <van-radio :name="0">NO</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field name="Do" label="Do you have an US Taxpayer Identification Number “TIN?" :required="true" :rules="[
        {
          required: true,
        },
      ]">
        <template #input>
          <van-radio-group v-model="formData.c_two_yes.Do" direction="horizontal">
            <van-radio :name="1">YES</van-radio>
            <van-radio :name="0">NO</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field v-model="formData.c_two_yes.If" name="If" center autocomplete="off" type="text"
      @input="formData.c_two_yes.If = formData.c_two_yes.If.toUpperCase()"
        label="If YES, please indicate the TIN" placeholder="Please enter the If YES, please indicate the TIN" />
      <div class="minTitle">
        SECTION D SOURCE OF FUND – The bank from which the fund is forwarded to
        the Trustee
      </div>
      <div class="minTitle">Bank 1</div>
      <van-field v-model="formData.bank_one.Bank" name="Bank" center :required="true" autocomplete="off" type="text"
      @input="formData.bank_one.Bank = formData.bank_one.Bank.toUpperCase()"
        label="Bank" placeholder="Please enter the Bank" :rules="[{ required: true }]" />
      <van-field v-model="formData.bank_one.Account" name="Account" center :required="true" autocomplete="off"
        type="text" label="Account No" placeholder="Please enter the Account No" :rules="[{ required: true }]" />
      <van-field v-model="formData.bank_one.Account2" name="Account2" center autocomplete="off" :required="true"
      @input="formData.bank_one.Account2 = formData.bank_one.Account2.toUpperCase()"
        type="text" label="Account Holder" placeholder="Please enter the Account Holder" :rules="[
          { required: true },
        ]" />
      <van-field v-model="formData.bank_one.Transaction" name="Transaction" center :required="true" autocomplete="off"
        type="number" label="Transaction Amount" placeholder="Please enter the Transaction Amount" :rules="[
          { required: true },
        ]" />
      <van-field v-model="formData.bank_one.Years" @keypress="isLetter($event)" name="Years" autocomplete="off" center :required="true" type="text"
        label="Years (estimated) maintaining the account "
        placeholder="Please enter the Years (estimated) maintaining the account " :rules="[
          {
            required: true,
          },
        ]" />
      <van-field v-model="formData.bank_one.Relationship" name="Relationship" center :required="true" autocomplete="off"
      @input="formData.bank_one.Relationship = formData.bank_one.Relationship.toUpperCase()"
        type="text" label="Relationship with Settlor" placeholder="Please enter the Relationship with Settlor" :rules="[
          {
            required: true,
          },
        ]" />

<van-button class="esignBtn" v-if="!bank2" id="addBankId" native-type="button" @click="addBank">Add Bank</van-button>
<van-button class="esignBtn"  v-else id="removeBankId" native-type="button" @click="removeBank">Remove Bank</van-button>

<div v-if="bank2" id="bank2Id">
      <div class="minTitle">Bank 2</div>
      <van-field v-model="formData.bank_two.Bank" :required="true" :rules="[
        { required: true },
      ]" name="Bank" center type="text" autocomplete="off" label="Bank"
      @input="formData.bank_two.Bank = formData.bank_two.Bank.toUpperCase()"
        placeholder="Please enter the Bank" />

      <van-field :required="true" :rules="[
        { required: true },
      ]" v-model="formData.bank_two.Account" name="Account" center autocomplete="off" type="text"
        label="Account No" placeholder="Please enter the Account No" />
      <van-field :required="true" :rules="[
        { required: true },
      ]" v-model="formData.bank_two.Account2" name="Account2" center autocomplete="off" type="text"
      @input="formData.bank_two.Account2 = formData.bank_two.Account2.toUpperCase()"
        label="Account Holder" placeholder="Please enter the Account Holder" />
      <van-field :required="true" :rules="[
        { required: true },
      ]" v-model="formData.bank_two.Transaction" name="Transaction" autocomplete="off" center type="number"
        label="Transaction Amount" placeholder="Please enter the Transaction Amount" />
      <van-field :required="true" :rules="[
        { required: true },
      ]" v-model="formData.bank_two.Years" @keypress="isLetter($event)" name="Years" autocomplete="off" center type="text"
        label="Years (estimated) maintaining the account "
        placeholder="Please enter the Years (estimated) maintaining the account " />
      <van-field :required="true" :rules="[
        { required: true },
      ]" v-model="formData.bank_two.Relationship" name="Relationship" center type="text" autocomplete="off"
      @input="formData.bank_two.Relationship = formData.bank_two.Relationship.toUpperCase()"
        label="Relationship with Settlor" placeholder="Please enter the Relationship with Settlor" />
      <van-field name="Mode" label="Mode of Payment(Cash not accepted)" :required="true" :rules="[
        { required: true },
      ]">
        <template #input>
          <van-radio-group v-model="formData.bank_two.Mode" direction="horizontal">
            <van-radio :name="1">IBG/ Instant Transfer </van-radio>
            <van-radio :name="2">Local Cheque</van-radio>
          </van-radio-group>
        </template>
      </van-field>

    </div>


      <div class="minTitle">SECTION E DOCUMENT CHECKLIST2</div>
      <van-field name="Particulars" label="Particulars" :required="true" :rules="[{ required: true }]">
        <template #input>
          <van-checkbox-group v-model="formData.document_checklist.Particulars">
            <van-checkbox :name="1">IC/ Passport of Settlor</van-checkbox>
            <van-checkbox :name="2">Proof of Address (tick whichever applicable) (Prefer – Water,
              Electricity bill Others – Telephone Bill, Tenancy Agreement, Indah
              Water, etc )</van-checkbox>
            <van-checkbox :name="3">Proof of bank transfer/ cheque pay in slip (Cash not
              acceptable)</van-checkbox>
            <van-checkbox :name="4">Proof of Income(Latest Pay-slip Income tax return )</van-checkbox>
            <van-checkbox :name="5">Source of fund – Bank account to fund the Cash Trust(Bank
              statement showing Name of Bank, Branch,Account Number)</van-checkbox>
          </van-checkbox-group>
        </template>
      </van-field>
      <!-- <van-field name="Documents" label="Documents" :required="true">
        <template #input>
          <van-uploader v-model="Documents" :after-read="afterRead" accept="*" :max-count="1" />
        </template>
      </van-field> -->
      <van-field name="Are" label="Are you one of our existing client in any of our affiliate or our group?"
        :required="true" :rules="[
          {
            required: true,
          },
        ]">
        <template #input>
          <van-radio-group v-model="formData.document_checklist.Are" direction="horizontal">
            <van-radio :name="1">YES</van-radio>
            <van-radio :name="0">NO</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field v-model="formData.document_checklist.If" name="If" center autocomplete="off" type="text"
      @input="formData.document_checklist.If = formData.document_checklist.If.toUpperCase()"
        label="If yes, Kindly indicate what the services provided"
        placeholder="Please enter the If yes, Kindly indicate what the services provided" />
      <div class="minTitle">SECTION F DECLARATION</div>
      <div class="contentText">
        I/we certify that the information I/we have provided is true and
        complete to the best of my knowledge. I am aware that this
        self-declaration statement is subject to review and verification and if
        such information has been falsified, I may be subject to prosecution and
        criminal sanction under written law ASIA INTERNATIONAL TRUST BERHAD
        (AITB) reserved all rights to stop providing any form of services if
        information provided found to be incomplete, inaccurate and/or the
        applicant is under criminal prosecution. I/we fully aware and understand
        that ASIA INTERNATIONAL TRUST BERHAD (AITB) is obliged to notify the
        authority if: - 1. Identity of the individual(s)/Beneficiary is
        difficult to obtain 2. Activity inconsistent with Individual’s profile
        or business 3. Counterfeit/fraud/unauthorised transaction 4. Excessive
        or unnecessary use of nominees I/we understand and consent the usage of
        my/our personal data will be used for all intents and purposes in
        relation to conducting CUSTOMER DUE DILIGENCE (CDD) to meet the
        statutory obligation. I/we are fully responsible to notify ASIA
        INTERNATIONAL TRUST BERHAD (AITB) immediately if any part of the
        information changes which may and/or have significantly resulting in
        information discrepancies and inaccuracies.
      </div>
      <vue-esign ref="signature" :isCrop="false" 
      :lineWidth="6"
       :width="800"
        :height="300"
        style="border: 1px solid #666" lineColor="#000000" bgColor.sync="#fff" :id="'can1'"
        :style="{ display: (this.xyz === '' ? 'block' : formData.declaration.signature === null || formData.declaration.signature === '' ? 'block' : 'none') }" />
      <van-image
        :style="{ border: '1px solid #666', display: (this.xyz === '1' ? formData.declaration.signature === null || formData.declaration.signature === '' ? 'none' : 'block' : 'none') }"
        :id="'img1'" class="esignImgbox" :src="formData.declaration.signature" />
      <div class="tr">
        <div class="esignBtn" @click="handleReset('signature')" v-if="!isDone">
          Clear
        </div>
        <div v-if="!isDone" class="esignBtn" @click="
          handleGenerate('signature', 'declaration')
        ">
          Confirm
        </div>
      </div>
      <van-field v-model="formData.declaration.Name" id="2reset1" name="Name" center :required="true" autocomplete="off"
      @input="formData.declaration.Name = formData.declaration.Name.toUpperCase()"
        type="text" label="Name" placeholder="Please enter the Name" :rules="[{ required: true }]" />
      <van-field v-model="formData.declaration.Date" name="Date" center autocomplete="off" label="Date: DD-MM-YYYY"
        :required="true" placeholder="Please enter DD-MM-YYYY"
        :rules="[{ pattern, message: 'Please enter the DATE' }]" />
      <div class="minTitle">Section G (Office Use)</div>
      <div class="minTitle">For Marketing Officer</div>
      <div class="minTitle">
        Marketing Agent is responsible to fill in this form. This form is
        specifically designed for
      </div>
      <div class="minTitle">
        Marketing Officer and Frontline Officer for onboarding clients.
      </div>
      <div class="minTitle">Distribution Agent Details(Response)</div>
      <van-field v-model="formData.distribution_agent_details.Distribution" name="Distribution" center
      @input="formData.distribution_agent_details.Distribution = formData.distribution_agent_details.Distribution.toUpperCase()"
        autocomplete="off" type="text" label="Distribution Agent Name / Marketing Officer "
        placeholder="Please enter the Distribution Agent Name / Marketing Officer " :required="true"
        :rules="[{ required: true }]" />
      <van-field v-model="formData.distribution_agent_details.Marketing" name="Marketing" center autocomplete="off"
      @input="formData.distribution_agent_details.Marketing = formData.distribution_agent_details.Marketing.toUpperCase()"
        type="text" label="Marketing Officer Name 2 (list all if there are more than one agent)"
        placeholder="Please enter the Marketing Officer Name 2 (list all if there are more than one agent)" />
      <div class="minTitle">
        Distribution Agent Details(Comment for Compliance Officer (if any))
      </div>
      <van-field v-model="formData.distribution_agent_details.Distribution2" name="Distribution2" center
      @input="formData.distribution_agent_details.Distribution2 = formData.distribution_agent_details.Distribution2.toUpperCase()"
        autocomplete="off" type="text" label="Distribution Agent Name / Marketing Officer "
        placeholder="Please enter the Distribution Agent Name / Marketing Officer " />
      <van-field v-model="formData.distribution_agent_details.Marketing2" name="Marketing2" center type="text"
      @input="formData.distribution_agent_details.Marketing2 = formData.distribution_agent_details.Marketing2.toUpperCase()"
        autocomplete="off" label="Marketing Officer Name 2 (list all if there are more than one agent)"
        placeholder="Please enter the Marketing Officer Name 2 (list all if there are more than one agent)" />
      <div class="minTitle">Client Details</div>
      <van-field v-model="formData.client_details.Client" name="Client" center autocomplete="off" :required="true"
      @input="formData.client_details.Client = formData.client_details.Client.toUpperCase()"
        type="text" label="Client Name " placeholder="Please enter the Client Name " :rules="[{ required: true }]" />
      <van-field name="Is" label="Is the photocopy of the IC match the physical person (settlor)? " :required="true"
        :rules="[
          {
            required: true,
          },
        ]">
        <template #input>
          <van-radio-group v-model="formData.client_details.Is" direction="horizontal">
            <van-radio :name="1">YES</van-radio>
            <van-radio :name="0">NO</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field name="Is2" label="Is the mobile number correct for the settlor?" :required="true" :rules="[
        {
          required: true,
        },
      ]">
        <template #input>
          <van-radio-group v-model="formData.client_details.Is2" direction="horizontal">
            <van-radio :name="1">YES</van-radio>
            <van-radio :name="0">NO</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field name="Is3" label="Is the mobile number correct for the beneficiary?" :required="true" :rules="[
        {
          required: true,
        },
      ]">
        <template #input>
          <van-radio-group v-model="formData.client_details.Is3" direction="horizontal">
            <van-radio :name="1">YES</van-radio>
            <van-radio :name="0">NO</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field name="Is4" label="Is there willingness to provide information and documents?" :required="true" :rules="[
        {
          required: true,
        },
      ]">
        <template #input>
          <van-radio-group v-model="formData.client_details.Is4" direction="horizontal">
            <van-radio :name="1">YES</van-radio>
            <van-radio :name="0">NO</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field name="On" label="On-Boarding Mode and how many times you meet the client?" :required="true" :rules="[
        {
          required: true,
        },
      ]">
        <template #input>
          <van-radio-group v-model="formData.client_details.On" direction="horizontal">
            <van-radio :name="1">FACE-TO-FACE</van-radio>
            <van-radio :name="2">NON FACE-TO-FACE</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field v-model="formData.client_details.Face" name="Face" center autocomplete="off" :required="true"
      @input="formData.client_details.Face = formData.client_details.Face.toUpperCase()"
        type="text" label="FACE-TO-FACE times" placeholder="Please enter the FACE-TO-FACE times" :rules="[
          { required: true },
        ]" />
      <van-field v-model="formData.client_details.Non" name="Non" center autocomplete="off" :required="true" type="text"
      @input="formData.client_details.Non = formData.client_details.Non.toUpperCase()"
        label="NON FACE-TO-FACE, times" placeholder="Please enter the NON FACE-TO-FACE, times" :rules="[
          {
            required: true,
          },
        ]" />
      <span style="font-weight: bold">Face to face interaction/ or other way of interaction? Kindly list down
        as many as possible</span>
      <van-button class="esignBtn" native-type="button" @click="addBeneficiary">Add</van-button>
      <div class="beneficiary_info" v-for="(item, inx) in formData.interaction" :key="inx">
        <van-field v-model="item.Date" name="Date" center autocomplete="off" label="Date: DD-MM-YYYY"
          placeholder="Please enter DD-MM-YYYY" />
        <van-field v-model="item.Time" name="Time" center type="text" autocomplete="off" label="Time"
          placeholder="Please enter the Time" />
        <van-field v-model="item.Place" name="Place" center autocomplete="off" type="text" label="Place"
        @input="item.Place = item.Place.toUpperCase()"
          placeholder="Please enter the Place" />
        <van-field v-model="item.Comment" name="Comment" center autocomplete="off" type="text" label="Comment"
        @input="item.Comment = item.Comment.toUpperCase()"
          placeholder="Please enter the Comment" />
        <van-button class="esignDelBtn" v-if="inx > 0" slot="button" native-type="button"
          @click="delBeneficiary(inx)">delete</van-button>
      </div>
      <van-field name="Any" label="Any Introducer? ">
        <template #input>
          <!-- <van-radio-group v-model="formData.assessment_of_client.Any" direction="horizontal">
            <van-radio :name="1">YES</van-radio>
            <van-radio :name="0">NO</van-radio>
          </van-radio-group> -->
          <van-checkbox-group v-model="formData.assessment_of_client.Any" direction="horizontal">
            <van-checkbox @click="radio5(1)" :id="'q1'" :name="1">YES</van-checkbox>
            <van-checkbox @click="radio5(2)" :name="2">NO</van-checkbox>
          </van-checkbox-group>
        </template>
      </van-field>
      <van-field v-model="formData.assessment_of_client.Please" name="Please" center autocomplete="off" type="text"
      @input="formData.assessment_of_client.Please = formData.assessment_of_client.Please.toUpperCase()"
        label="Please state the Name of introducer"
        placeholder="Please enter the Please state the Name of introducer" />
      <div class="minTitle">Assessment of Client</div>
      <van-field name="Risk" label="Risk Rating by Distribution Agent" :required="true" :rules="[
        {
          required: true,
        },
      ]">
        <template #input>
          <van-radio-group v-model="formData.assessment_of_client.Risk" direction="horizontal">
            <van-radio :name="1">High</van-radio>
            <van-radio :name="2">Above Average</van-radio>
            <van-radio :name="3">Moderate</van-radio>
            <van-radio :name="4">Low</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field v-model="formData.assessment_of_client.Any2" name="Any2" center autocomplete="off" type="text"
      @input="formData.assessment_of_client.Any2 = formData.assessment_of_client.Any2.toUpperCase()"
        label="Any indication or information to suggest the client is of high risk? Please elaborate."
        placeholder="Please enter the Any indication or information to suggest the client is of high risk? Please elaborate." />
      <van-field name="Recommended" label="Recommended Decision" :required="true" :rules="[
        { required: true },
      ]">
        <template #input>
          <van-radio-group v-model="formData.assessment_of_client.Recommended" direction="horizontal">
            <van-radio :name="1">Accept</van-radio>
            <van-radio :name="2">Reject</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field v-model="formData.assessment_of_client.Please2" name="Please2" center autocomplete="off" type="text"
      @input="formData.assessment_of_client.Please2 = formData.assessment_of_client.Please2.toUpperCase()"
        label="Please elaborate your decision regardless the answer above is rejected or accepted."
        placeholder="Please enter the Please elaborate your decision regardless the answer above is rejected or accepted." />
      <van-field v-model="formData.assessment_of_client.Remark" name="Remark" center autocomplete="off" type="text"
      @input="formData.assessment_of_client.Remark = formData.assessment_of_client.Remark.toUpperCase()"
        label="Remark/ Comments:" placeholder="Please enter the Remark/ Comments:" />
      <div class="minTitle">
        We declare all the information provided is accurate and we will store
        all the data securely
      </div>
      <div class="tl">Advisor's Signature</div>
      <vue-esign ref="trustor_signature1" :isCrop="false" :lineWidth="6" lineColor="#000000" :width="800" :height="300"
        bgColor.sync="#fff" style="border: 1px solid #666"
        :style="{ display: (this.xyz1 === '' ? 'block' : formData.store_marketing_officer.trustor_signature1 === null || formData.store_marketing_officer.trustor_signature1 === '' ? 'block' : 'none') }" />
      <van-image
        :style="{ border: '1px solid #666', display: (this.xyz1 === '1' ? formData.store_marketing_officer.trustor_signature1 === null || formData.store_marketing_officer.trustor_signature1 === '' ? 'none' : 'block' : 'none') }"
        class="esignImgbox" :src="formData.store_marketing_officer.trustor_signature1" />
      <div class="tr">
        <div class="esignBtn" @click="handleReset('trustor_signature1')" v-if="!isDone">
          Clear
        </div>
        <div v-if="!isDone" class="esignBtn" @click="
          handleGenerate('trustor_signature1', 'store_marketing_officer')
        ">
          Confirm
        </div>
      </div>
      <van-field v-model="formData.store_marketing_officer.Name" id="2reset3" name="Name" center autocomplete="off"
      @input="formData.store_marketing_officer.Name = formData.store_marketing_officer.Name.toUpperCase()"
        :required="true" type="text" label="Name" placeholder="Please enter the Name" :rules="[{ required: true }]" />
      <van-field v-model="formData.store_marketing_officer.Nric" name="Nric" autocomplete="off" center :required="true"
      @input="formData.store_marketing_officer.Nric = formData.store_marketing_officer.Nric.toUpperCase()"
        type="text" label="NRIC No" placeholder="Please enter the NRIC No" :rules="[{ required: true }]" />
      <van-field v-model="formData.store_marketing_officer.Date" name="Date" autocomplete="off" center
        label="Date: DD-MM-YYYY" :required="true" placeholder="Please enter DD-MM-YYYY"
        :rules="[{ required: true, pattern, message: 'Please enter the DATE' }]" />
      <div class="tl">Manager/ HOD of the Company</div>
      <vue-esign ref="trustor_signature2" :width="800" :height="300" :isCrop="false" :lineWidth="6" lineColor="#000000"
        bgColor.sync="#fff" style="border: 1px solid #666"
        :style="{ display: (this.xyz2 === '' ? 'block' : formData.store_manager.trustor_signature2 === null || formData.store_manager.trustor_signature2 === '' ? 'block' : 'none') }" />
      <van-image
        :style="{ border: '1px solid #666', display: (this.xyz2 === '1' ? formData.store_manager.trustor_signature2 === null || formData.store_manager.trustor_signature2 === '' ? 'none' : 'block' : 'none') }"
        class="esignImgbox" :src="formData.store_manager.trustor_signature2" />
      <div class="tr">
        <div class="esignBtn" @click="handleReset('trustor_signature2')" v-if="!isDone">
          Clear
        </div>
        <div v-if="!isDone" class="esignBtn" @click="handleGenerate('trustor_signature2', 'store_manager')">
          Confirm
        </div>
      </div>
      <van-field v-model="formData.store_manager.Name" id="2reset2" name="Name" autocomplete="off" center type="text"
      @input="formData.store_manager.Name = formData.store_manager.Name.toUpperCase()"
        label="Name" placeholder="Please enter the Name" />
      <van-field v-model="formData.store_manager.Nric" name="Nric" center type="text" autocomplete="off" label="NRIC No"
      @input="formData.store_manager.Nric = formData.store_manager.Nric.toUpperCase()"
        placeholder="Please enter the NRIC No" />
      <van-field v-model="formData.store_manager.Date" name="Date" center autocomplete="off" label="Date: DD-MM-YYYY"
        placeholder="Please enter DD-MM-YYYY" />

      <!-- <div class="minTitle">KNOW YOUR CLIENT’S FORM (KYC)</div>
      <van-field
        readonly
        clickable
        label="Area code"
        center
        :required="true"
        :rules="[{ required: true, message: 'Please select the area code' }]"
        :value="areaCode"
        placeholder="Please select the area code"
        @click="showCodePicker = true"
      />
      <van-field
        v-model="phone"
        name="phone"
        center
        :required="true"
        type="digit"
        label="CONTACT NO"
        placeholder="Please enter the CONTACT NO"
        :rules="[
          {
            required: true,
            message: 'Please enter the CONTACT NO',
          },
        ]"
      >
      </van-field>
      <van-popup v-model="showCodePicker" round position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @cancel="showCodePicker = false"
          @confirm="(value) => onConfirm(value)"
        />
      </van-popup>
      <van-field
        v-model="verify_code"
        center
        :required="true"
        label="Verification code"
        placeholder="Please enter the verification code"
        :rules="[
          {
            required: true,
            message: 'Please enter the verification code',
          },
        ]"
      >
        <van-button
          class="SMSconfirm"
          slot="button"
          native-type="button"
          :disabled="isSms"
          @click="sendCode()"
          >Send code</van-button
        >
      </van-field> -->

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
import { uploadAutograph, smsVerify_code, verdict_code, uploadFile } from "@/api/util";
import { kyc_form, getOrdersForms, putOrdersForms } from "@/api/order";
export default {
  props: ['orderDataInfo'],
  data() {
    return {
      pattern: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,// 正则验证时间
      formData: {
        settlor: {
          //Full:  this.$route.query.campanyIndividualName == undefined || this.$route.query.campanyIndividualName === 'undefined' ? "": this.$route.query.campanyIndividualName.name,
          Full: this.$store.state.campanyIndividualName1,
          Other: '',
          New: this.$store.state.passport_no,
          Old: '',
          Nationality: '',
        },
        settlor_non_malaysia: {
          Passport: '',
          Passport2: '',
          Passport3: '',
          Date: '',
          Country: '',
          Gender: '',
          Marital: '',
        },
        settlor_contact_details: {
          Email: this.$store.state.email,
          Mobile: this.$store.state.phone,
          Home: this.$store.state.house_no,
          Office: this.$store.state.office_no,
          Residential: this.$store.state.address,
          Postcode: '',
          Country: '',
          Length: '',
          Mailing: '',
          Postcode2: '',
          Country2: '',
        },
        spouse: {
          Full: this.$store.state.benificary_nme,
          Other: '',
          New: this.$store.state.COMPANY_NO,
          Old: '',
          Nationality: '',
        },
        spouse_non_malaysia: {
          Passport: '',
          Passport2: '',
          Passport3: '',
          Date: '',
          Country: '',
          Gender: [],
          Marital: [],
        },
        spouse_contact_details: {
          Email: '',
          Mobile: '',
          Home: '',
          Office: '',
          Residential: '',
          Postcode: '',
          Country: '',
          Length: '',
          Mailing: '',
          Postcode2: '',
          Country2: '',
        },
        settlor_occupation: {
          Occupation_Type:'',
          Occupation: '',
          Occupation2: this.$store.state.occupation,
          Industry: '',
          Name: '',
          Nature: '',
          Annual: '',
        },
        spouse_occupation: {
          Occupation: [],
          Occupation2: '',
          Occupation_Type: '',
          Industry: '',
          Name: '',
          Nature: '',
          Annual: '',
        },
        edd: {
          Are: '',
          Are2: '',
        },
        c_two_yes: {
          Pep: '',
          Relationship: [],
          Close: '',
          Others: '',
          Are: '',
          Do: '',
          If: '',
        },
        bank_one: {
          Bank: this.$store.state.details_bank_name,
          Account: this.$store.state.details_account_no,
          Account2: this.$store.state.details_account_owner,
          Transaction: '',
          Years: '',
          Relationship: '',
        },
        bank_two: {
          Bank: '',
          Account: '',
          Account2: '',
          Transaction: '',
          Years: '',
          Relationship: '',
          Mode: '',
        },
        document_checklist: {
          Particulars: [],
          Are: '',
          If: '',
          // Documents: '', // 上传的文件url
        },
        // declaration: {
        //   Name: '',
        //   Date: '',
        // },
        onboarding_clients: {},
        distribution_agent_details: {
          Distribution: sessionStorage.getItem("user_name"),
          Marketing: '',
          Distribution2: '',
          Marketing2: '',
        },
        client_details: {
          Client: this.$store.state.campanyIndividualName1,
          Is: '',
          Is2: '',
          Is3: '',
          Is4: '',
          On: '',
          Face: '',
          Non: '',
        },
        interaction: [{
          Date: '',
          Time: '',
          Place: '',
          CommentComment: '',
        }], // Add
        assessment_of_client: {
          Any: [],
          Please: '',
          Risk: '',
          Any2: '',
          Recommended: '',
          Please2: '',
          Remark: '',
        },
        store_marketing_officer: {
          trustor_signature1: '',
          Name: sessionStorage.getItem("user_name"),
          Nric: sessionStorage.getItem("user_passportNo"),
          Date: moment(new Date()).format('DD-MM-YYYY')
        },
        store_manager: {
          trustor_signature2: '',
          Name: '',
          Nric: '',
          Date: moment(new Date()).format('DD-MM-YYYY')
        },
        declaration: {
          signature: this.$store.state.signature,
          Name: this.$store.state.campanyIndividualName1,
          // Nric: '',
          Date: moment(new Date()).format('DD-MM-YYYY'),
        }
      },
      bank2:false,
      sig1: true,
      xyz: "",
      xyz1: "",
      xyz2: "",
      sig2: true,
      sig3: true,

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
    };
  },
  mounted() {
    console.log("...................kkkk.....")
    //  this.$forceUpdate();
    console.log(this.$store.state.isOverseaSignature, "isOverseaSignature-----------------");
    if (this.$store.state.isOverseaSignature) {
     // alert("1")

      this.from = "create"
      this.isFilled = 0
    } else {
      //alert("2")
      this.from = this.$route.query.from;
      this.isFilled = this.$route.query.isFilled;
      this.isDone = this.$route.query.status == 1 ? true : false;
    }
    if (this.$route.query.isShare) {
      //alert("3")
      this.isFilled = this.$route.query.kyc_form
    }
    this.getFormData();
    this.isDone = sessionStorage.getItem('orderStatus') === '2'
console.log("--------------AAAAA--------------",this.$store.state.isFilled)
    if(this.$store.state.reorder == 1){
     
      if (this.$store.state.reorderkyc_form > 0) {
        getOrdersForms(this.$store.state.reorderkyc_form, { type: "KYC" })
          .then((res) => {
            delete res.id
            delete res.order_id
            delete res.created_at
            delete res.updated_at
            console.log(res, 'kyc');
            for (let key in res) {
              res[key] = JSON.parse(res[key])
            }
            console.log(res, "--------333333333333333333333333333333333333-4--");
            // if (res.document_checklist.Documents) {
            //   this.Documents.push({url: res.document_checklist.Documents})
            // }
            res.spouse = {
          Full: this.$store.state.benificary_nme,
          Other: '',
          New: this.$store.state.COMPANY_NO,
          Old: '',
          Nationality: '',
        };
            res.bank_one = {
          Bank: "",
          Account: "",
          Account2: "",
          Transaction: '',
          Years: '',
          Relationship: '',
        };
        res.bank_two= {
          Bank: '',
          Account: '',
          Account2: '',
          Transaction: '',
          Years: '',
          Relationship: '',
          Mode: '',
        };
       var reOrderParticulars= []  
       for (var i = 0; i < res.document_checklist.Particulars.length; i++) {
            if (res.document_checklist.Particulars[i] == 1 || res.document_checklist.Particulars[i] == 2) {
              //  var spliced = arr.splice(i, 1);
                // console.log("Removed element: " + spliced);
                // console.log("Remaining elements: " + arr);
                //
              //  alert(res.document_checklist.Particulars[i] )
                reOrderParticulars.push(res.document_checklist.Particulars[i])
            }
        }
        console.log("***************reOrderParticulars***************",reOrderParticulars)
        res.document_checklist.Particulars = reOrderParticulars
        res.declaration.signature= "";
        res.declaration.Date= moment(new Date()).format('DD-MM-YYYY')
      

        res.client_details.Is3= "";
        res.client_details.Is4= "";
        res.client_details.On= "";
        res.client_details.Face= "";
        res.client_details.Non= "";
        

        res.interaction= [{
          Date: '',
          Time: '',
          Place: '',
          CommentComment: '',
        }];
   res.assessment_of_client= {
          Any: [],
          Please: '',
          Risk: '',
          Any2: '',
          Recommended: '',
          Please2: '',
          Remark: '',
        };
     
        res. store_marketing_officer.trustor_signature1= ''
        res. store_marketing_officer.Date= moment(new Date()).format('DD-MM-YYYY')

        res.store_manager.trustor_signature2 = ''
        res.store_manager.Date = moment(new Date()).format('DD-MM-YYYY')
     
            //       data.c_two_yes.Relationship = data.c_two_yes.Relationship.toString()
            // data.spouse_non_malaysia.Marital = data.spouse_non_malaysia.Marital.toString()
            // data.spouse_non_malaysia.Gender = data.spouse_non_malaysia.Gender.toString()
            // data.spouse_occupation.Occupation = data.spouse_occupation.Occupation.toString()
            this.formData = res;
            this.formData.c_two_yes.Relationship = (this.formData.c_two_yes.Relationship === '' ? [] : this.formData.c_two_yes.Relationship)
            this.formData.spouse_non_malaysia.Marital = (this.formData.spouse_non_malaysia.Marital === '' ? [] : this.formData.spouse_non_malaysia.Marital)
            this.formData.spouse_non_malaysia.Gender = (this.formData.spouse_non_malaysia.Gender === '' ? [] : this.formData.spouse_non_malaysia.Gender)
            this.formData.spouse_occupation.Occupation = (this.formData.spouse_occupation.Occupation === '' ? [] : this.formData.spouse_occupation.Occupation)
            this.formData.assessment_of_client.Any = (this.formData.assessment_of_client.Any === '' ? [] : this.formData.assessment_of_client.Any)
           
            // this.formData.assessment_of_client.Any=(this.formData.assessment_of_client.Any === ''?[]:this.formData.assessment_of_client.Any)
            this.sig1 = false
            this.xyz = "1"
            this.xyz1 = "1"
            this.xyz2 = "1"
            this.sig2 = false
            this.sig3 = false

            // this.phone = res.witness_phone.slice(-11);
            // this.areaCode = res.witness_phone.split(this.phone)[0];
          })
          .catch((err) => {
            console.log(err);
          });
      }

   }


  },
  methods: {
    addBank(){
      this.bank2 = true
      
    },
    removeBank(){
      this.bank2 = false
      this.formData.bank_two = {
        Bank: '',
          Account: '',
          Account2: '',
          Transaction: '',
          Years: '',
          Relationship: '',
          Mode: '',
            };
    
    },
    // moblie validation
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[0-9]+$/.test(char)) return true;
      else e.preventDefault();
    },
    // 如果已填 獲取數據
    getFormData() {
     // alert("e")
      if (this.isFilled > 0) {
       // alert("2")
        getOrdersForms(this.isFilled, { type: "KYC" })
          .then((res) => {
            delete res.id
            delete res.order_id
            delete res.created_at
            delete res.updated_at
            console.log(res, 'kyc');
            for (let key in res) {
              res[key] = JSON.parse(res[key])
            }
            console.log(res, "--------333333333333333333333333333333333333---");
            // if (res.document_checklist.Documents) {
            //   this.Documents.push({url: res.document_checklist.Documents})
            // }
        
            //       data.c_two_yes.Relationship = data.c_two_yes.Relationship.toString()
            // data.spouse_non_malaysia.Marital = data.spouse_non_malaysia.Marital.toString()
            // data.spouse_non_malaysia.Gender = data.spouse_non_malaysia.Gender.toString()
            // data.spouse_occupation.Occupation = data.spouse_occupation.Occupation.toString()
            this.formData = res;
            this.formData.c_two_yes.Relationship = (this.formData.c_two_yes.Relationship === '' ? [] : this.formData.c_two_yes.Relationship)
            this.formData.spouse_non_malaysia.Marital = (this.formData.spouse_non_malaysia.Marital === '' ? [] : this.formData.spouse_non_malaysia.Marital)
            this.formData.spouse_non_malaysia.Gender = (this.formData.spouse_non_malaysia.Gender === '' ? [] : this.formData.spouse_non_malaysia.Gender)
            this.formData.spouse_occupation.Occupation = (this.formData.spouse_occupation.Occupation === '' ? [] : this.formData.spouse_occupation.Occupation)
            this.formData.assessment_of_client.Any = (this.formData.assessment_of_client.Any === '' ? [] : this.formData.assessment_of_client.Any)
           
            if(this.formData.bank_two.Bank === ''){
              this.bank2 = false
            }
            else{
              this.bank2 = true
            }
            // this.formData.assessment_of_client.Any=(this.formData.assessment_of_client.Any === ''?[]:this.formData.assessment_of_client.Any)
            this.sig1 = false
            this.xyz = "1"
            this.xyz1 = "1"
            this.xyz2 = "1"
            this.sig2 = false
            this.sig3 = false

            // this.phone = res.witness_phone.slice(-11);
            // this.areaCode = res.witness_phone.split(this.phone)[0];
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    radio5(a) {
      // alert("d")
      console.log(a, "------0-------**************-----------*******------------");
      console.log(this.formData.assessment_of_client.Any, "------1-------**************-----------*******------------");
      console.log(this.formData.assessment_of_client.Any.length, "------2-------**************-----------*******------------");

      if (this.formData.assessment_of_client.Any.length == 0) {
        this.formData.assessment_of_client.Any = []
      }
      else if (this.formData.assessment_of_client.Any.length == 2) {
        this.formData.assessment_of_client.Any.shift()
      }
      else {
        this.formData.assessment_of_client.Any = [a]
      }
      console.log(this.formData.assessment_of_client.Any.toString(), "+++++++++++++++++++++++++++++++++++++");



    },
    radio4(a) {
      // alert("d")
      console.log(a, "------0-------**************-----------*******------------");
      console.log(this.formData.spouse_occupation.Occupation, "------1-------**************-----------*******------------");
      console.log(this.formData.spouse_occupation.Occupation.length, "------2-------**************-----------*******------------");

      if (this.formData.spouse_occupation.Occupation.length == 0) {
        this.formData.spouse_occupation.Occupation = []
      }
      else if (this.formData.spouse_occupation.Occupation.length == 2) {
        this.formData.spouse_occupation.Occupation.shift()
      }
      else {
        this.formData.spouse_occupation.Occupation = [a]
      }
      console.log(this.formData.spouse_occupation.Occupation.toString(), "+++++++++++++++++++++++++++++++++++++");



    },
    radio3(a) {
      // alert("d")
      console.log(a, "------0-------**************-----------*******------------");
      console.log(this.formData.spouse_non_malaysia.Gender, "------1-------**************-----------*******------------");
      console.log(this.formData.spouse_non_malaysia.Gender.length, "------2-------**************-----------*******------------");

      if (this.formData.spouse_non_malaysia.Gender.length == 0) {
        this.formData.spouse_non_malaysia.Gender = []
      }
      else if (this.formData.spouse_non_malaysia.Gender.length == 2) {
        this.formData.spouse_non_malaysia.Gender.shift()
      }
      else {
        this.formData.spouse_non_malaysia.Gender = [a]
      }
      console.log(this.formData.spouse_non_malaysia.Gender.toString(), "+++++++++++++++++++++++++++++++++++++");



    },
    radio2(a) {
      // alert("d")
      console.log(a, "------0-------**************-----------*******------------");
      console.log(this.formData.spouse_non_malaysia.Marital, "------1-------**************-----------*******------------");
      console.log(this.formData.spouse_non_malaysia.Marital.length, "------2-------**************-----------*******------------");

      if (this.formData.spouse_non_malaysia.Marital.length == 0) {
        this.formData.spouse_non_malaysia.Marital = []
      }
      else if (this.formData.spouse_non_malaysia.Marital.length == 2) {
        this.formData.spouse_non_malaysia.Marital.shift()
      }
      else {
        this.formData.spouse_non_malaysia.Marital = [a]
      }
      console.log(this.formData.spouse_non_malaysia.Marital.toString(), "+++++++++++++++++++++++++++++++++++++");



    },

    radio1(a) {
      // alert("d")
      console.log(a, "------0-------**************-----------*******------------");
      console.log(this.formData.c_two_yes.Relationship, "------1-------**************-----------*******------------");
      console.log(this.formData.c_two_yes.Relationship.length, "------2-------**************-----------*******------------");

      if (this.formData.c_two_yes.Relationship.length == 0) {
        this.formData.c_two_yes.Relationship = []
      }
      else if (this.formData.c_two_yes.Relationship.length == 2) {
        this.formData.c_two_yes.Relationship.shift()
      }
      else {
        this.formData.c_two_yes.Relationship = [a]
      }
      console.log(this.formData.c_two_yes.Relationship.toString(), "+++++++++++++++++++++++++++++++++++++");



    },
    submit(form) {
      console.log(form, "form");
      if (!this.formData.store_marketing_officer.trustor_signature1 && !this.$route.query.isShare) {
        this.$toast.fail("Please sign your name");
        return;
      }
      // if (!this.formData.store_marketing_officer.trustor_signature1 && this.$store.state.isOverseaSignature) {
      //   this.$toast.fail("Please sign your name");
      //   return;
      // }
      // if (!this.formData.store_manager.trustor_signature2 && !this.$store.state.isOverseaSignature) {
      //   this.$toast.fail("Please sign your name");
      //   return;
      // }
      if (!this.formData.declaration.signature && this.$route.query.isShare) {
        this.$toast.fail("Please sign your name");
        return;
      }
      // if (!this.formData.declaration.signature && !this.$store.state.isOverseaSignature) {
      //   this.$toast.fail("Please sign your name");
      //   return;
      // }
      // else if (!this.formData.store_manager.trustor_signature2) {
      //   this.$toast.fail("Please sign your name");
      //   return;
      // }
      let data = JSON.parse(JSON.stringify(this.formData));
      data.spouse_occupation.Occupation = (this.formData.spouse_occupation.Occupation.toString())
      data.assessment_of_client.Any = (this.formData.assessment_of_client.Any.toString())
      data.c_two_yes.Relationship = data.c_two_yes.Relationship.toString()
      data.spouse_non_malaysia.Marital = data.spouse_non_malaysia.Marital.toString()
      data.spouse_non_malaysia.Gender = data.spouse_non_malaysia.Gender.toString()
      //   data.spouse_occupation.Occupation = data.spouse_occupation.Occupation.toString()
      //this.formData.c_two_yes.Relationship.toString()
      console.log(">>>>>>>...", data)
      // data.document_checklist.Documents = this.Documents[0].url
      // data.settlor = JSON.stringify(data.settlor)
      for (let key in data) {
        data[key] = JSON.stringify(data[key])
      }
      // data.witness_phone = this.areaCode.split(" ")[0] + this.phone;
      if (this.isFilled > 0) {
        // 修改
        putOrdersForms(this.isFilled, {
          type: "KYC",
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
        console.log(this.$store.state.CustomerApplicationId)
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

        kyc_form(id, data)
          .then((res) => {
            console.log("----222---2--2--2-2---",res);
            this.isFilled = res.kyc_form
            this.$toast({
              type: "success",
              message: "Submitted successfully",
            });
            if (this.from == "create") {
              this.$store.commit("changePage", {
                tabbar: "/LetterOfWishes",
                title: "3/5 Letter Of Wishes",
              });
              if (!this.$store.state.isOverseaSignature && !this.$route.query.isShare) {
                this.$router.push({
                  path:
                    "/LetterOfWishes?from=create&orderId=" +
                    this.$route.query.orderId, query: { campanyIndividualName: this.$route.query.campanyIndividualName }
                }
                );
              }
            } else {
              this.$router.go(-1);
            }
          })
          .catch((err) => {
            console.log(err.response);
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
    handleReset(val) {
      console.log(this.$refs[val], 111)
      this.$refs[val].reset();
      //  this.$refs[val].reset(); //清空画布
      if (val == 'trustor_signature1') {

        this.sig2 = true
        this.xyz1 = ""
        this.formData.store_marketing_officer.trustor_signature1 = ''
        document.getElementById("2reset3").focus()
      }
      if (val == 'trustor_signature2') {

        this.sig3 = true
        this.xyz2 = ""
        this.formData.store_manager.trustor_signature2 = ''
        document.getElementById("2reset2").focus()
      }
      if (val == 'signature') {

        this.sig1 = true
        this.xyz = ""
        this.formData.declaration.signature = ''
        document.getElementById("2reset1").focus()
      }

    },
    handleGenerate(val, val2) {
      // if(!this.$store.state.isOverseaSignature || val === "trustor_signature1"|| val === "trustor_signature2"){
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
              that.formData[val2][val] = res.path;
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
.esignImgbox {
  border: 1px solid #666666;
  width: 800px;
  height: 300px;

  @media screen and (max-width: 576px) {
    width: 100% !important;
    height: 112.5px !important;
  }

}

.KYC {
  /* padding: 0 16px; */
  text-align: left;
}

.minTitle {
  font-weight: bold;
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

@media screen and (max-width: 576px) {
  .esignImgbox {
    width: 100% !important;
    height: 112.5px !important;
  }
  }

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

/* .esignImgbox {
  border: 1px solid #666666;
} */
</style>
