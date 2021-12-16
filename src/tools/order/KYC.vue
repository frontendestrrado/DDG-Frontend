<template>
  <div class="KYC bodybox">
    <van-form
      validate-first
      @submit="submit"
      :submit-on-enter="false"
      :scroll-to-error="true"
    >
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
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Full Name"
        placeholder="Please enter the Full Name"
        :rules="[{ required: true, message: 'Please enter the Full Name' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        type="text"
        label="Other/Previous Name (if any)"
        placeholder="Please enter the Other/Previous Name (if any)"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="NEW - Malaysia NRIC No"
        placeholder="Please enter the NEW - Malaysia NRIC No"
        :rules="[
          {
            required: true,
            message: 'Please enter the NEW - Malaysia NRIC No',
          },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        type="text"
        label="OLD - Malaysia NRIC No.(if applicable)"
        placeholder="Please enter the OLD - Malaysia NRIC No.(if applicable)"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Nationality(state all if multiple nationality)"
        placeholder="Please enter the Nationality(state all if multiple nationality)"
        :rules="[
          {
            required: true,
            message:
              'Please enter the Nationality(state all if multiple nationality)',
          },
        ]"
      />
      <div class="minTitle">
        For Non-Malaysia NRIC Holders, please provide passport details
      </div>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Passport Number"
        placeholder="Please enter the Passport Number"
        :rules="[
          { required: true, message: 'Please enter the Passport Number' },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Passport Expiry Date"
        placeholder="Please enter the Passport Expiry Date"
        :rules="[
          { required: true, message: 'Please enter the Passport Expiry Date' },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Passport Issuing Country"
        placeholder="Please enter the Passport Issuing Country"
        :rules="[
          {
            required: true,
            message: 'Please enter the Passport Issuing Country',
          },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Date of Birth"
        placeholder="Please enter the Date of Birth"
        :rules="[{ required: true, message: 'Please enter the Date of Birth' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Country of Birth"
        placeholder="Please enter the Country of Birth"
        :rules="[
          { required: true, message: 'Please enter the Country of Birth' },
        ]"
      />
      <van-field
        name="source_of_funds"
        label="Gender"
        :required="true"
        :rules="[{ required: true, message: 'Please enter the Gender' }]"
      >
        <template #input>
          <van-radio-group
            v-model="formData.source_of_funds"
            direction="horizontal"
          >
            <van-radio :name="1">Female</van-radio>
            <van-radio :name="2">Male</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        name="source_of_funds"
        label="Marital Status"
        :required="true"
        :rules="[
          { required: true, message: 'Please enter the Marital Status' },
        ]"
      >
        <template #input>
          <van-radio-group
            v-model="formData.source_of_funds"
            direction="horizontal"
          >
            <van-radio :name="1">Single</van-radio>
            <van-radio :name="2">Married</van-radio>
            <van-radio :name="3">Divorced</van-radio>
            <van-radio :name="4">Widow/ Widower</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <div class="minTitle">Contact Details</div>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Email Address"
        placeholder="Please enter the Email Address"
        :rules="[{ required: true, message: 'Please enter the Email Address' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Mobile Phone No"
        placeholder="Please enter the Mobile Phone No"
        :rules="[
          { required: true, message: 'Please enter the Mobile Phone No' },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Home Phone No"
        placeholder="Please enter the Home Phone No"
        :rules="[{ required: true, message: 'Please enter the Home Phone No' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Office Phone No"
        placeholder="Please enter the Office Phone No"
        :rules="[
          { required: true, message: 'Please enter the Office Phone No' },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Residential Address"
        placeholder="Please enter the Residential Address"
        :rules="[
          { required: true, message: 'Please enter the Residential Address' },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Postcode"
        placeholder="Please enter the Postcode"
        :rules="[{ required: true, message: 'Please enter the Postcode' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Country"
        placeholder="Please enter the Country"
        :rules="[{ required: true, message: 'Please enter the Country' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Length of stay (Years) "
        placeholder="Please enter the Length of stay (Years) "
        :rules="[
          {
            required: true,
            message: 'Please enter the Length of stay (Years) ',
          },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Mailing Address(if different from the above address)"
        placeholder="Please enter the Mailing Address(if different from the above address)"
        :rules="[
          {
            required: true,
            message:
              'Please enter the Mailing Address(if different from the above address)',
          },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Postcode"
        placeholder="Please enter the Postcode"
        :rules="[{ required: true, message: 'Please enter the Postcode' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Country"
        placeholder="Please enter the Country"
        :rules="[{ required: true, message: 'Please enter the Country' }]"
      />
      <div class="minTitle">Spouse</div>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Full Name"
        placeholder="Please enter the Full Name"
        :rules="[{ required: true, message: 'Please enter the Full Name' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        type="text"
        label="Other/Previous Name (if any)"
        placeholder="Please enter the Other/Previous Name (if any)"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="NEW - Malaysia NRIC No"
        placeholder="Please enter the NEW - Malaysia NRIC No"
        :rules="[
          {
            required: true,
            message: 'Please enter the NEW - Malaysia NRIC No',
          },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        type="text"
        label="OLD - Malaysia NRIC No.(if applicable)"
        placeholder="Please enter the OLD - Malaysia NRIC No.(if applicable)"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Nationality(state all if multiple nationality)"
        placeholder="Please enter the Nationality(state all if multiple nationality)"
        :rules="[
          {
            required: true,
            message:
              'Please enter the Nationality(state all if multiple nationality)',
          },
        ]"
      />
      <div class="minTitle">
        For Non-Malaysia NRIC Holders, please provide passport details
      </div>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Passport Number"
        placeholder="Please enter the Passport Number"
        :rules="[
          { required: true, message: 'Please enter the Passport Number' },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Passport Expiry Date"
        placeholder="Please enter the Passport Expiry Date"
        :rules="[
          { required: true, message: 'Please enter the Passport Expiry Date' },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Passport Issuing Country"
        placeholder="Please enter the Passport Issuing Country"
        :rules="[
          {
            required: true,
            message: 'Please enter the Passport Issuing Country',
          },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Date of Birth"
        placeholder="Please enter the Date of Birth"
        :rules="[{ required: true, message: 'Please enter the Date of Birth' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Country of Birth"
        placeholder="Please enter the Country of Birth"
        :rules="[
          { required: true, message: 'Please enter the Country of Birth' },
        ]"
      />
      <van-field
        name="source_of_funds"
        label="Gender"
        :required="true"
        :rules="[{ required: true, message: 'Please enter the Gender' }]"
      >
        <template #input>
          <van-radio-group
            v-model="formData.source_of_funds"
            direction="horizontal"
          >
            <van-radio :name="1">Female</van-radio>
            <van-radio :name="2">Male</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        name="source_of_funds"
        label="Marital Status"
        :required="true"
        :rules="[
          { required: true, message: 'Please enter the Marital Status' },
        ]"
      >
        <template #input>
          <van-radio-group
            v-model="formData.source_of_funds"
            direction="horizontal"
          >
            <van-radio :name="1">Single</van-radio>
            <van-radio :name="2">Married</van-radio>
            <van-radio :name="3">Divorced</van-radio>
            <van-radio :name="4">Widow/ Widower</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <div class="minTitle">Contact Details</div>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Email Address"
        placeholder="Please enter the Email Address"
        :rules="[{ required: true, message: 'Please enter the Email Address' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Mobile Phone No"
        placeholder="Please enter the Mobile Phone No"
        :rules="[
          { required: true, message: 'Please enter the Mobile Phone No' },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Home Phone No"
        placeholder="Please enter the Home Phone No"
        :rules="[{ required: true, message: 'Please enter the Home Phone No' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Office Phone No"
        placeholder="Please enter the Office Phone No"
        :rules="[
          { required: true, message: 'Please enter the Office Phone No' },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Residential Address"
        placeholder="Please enter the Residential Address"
        :rules="[
          { required: true, message: 'Please enter the Residential Address' },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Postcode"
        placeholder="Please enter the Postcode"
        :rules="[{ required: true, message: 'Please enter the Postcode' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Country"
        placeholder="Please enter the Country"
        :rules="[{ required: true, message: 'Please enter the Country' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Length of stay (Years) "
        placeholder="Please enter the Length of stay (Years) "
        :rules="[
          {
            required: true,
            message: 'Please enter the Length of stay (Years) ',
          },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Mailing Address(if different from the above address)"
        placeholder="Please enter the Mailing Address(if different from the above address)"
        :rules="[
          {
            required: true,
            message:
              'Please enter the Mailing Address(if different from the above address)',
          },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Postcode"
        placeholder="Please enter the Postcode"
        :rules="[{ required: true, message: 'Please enter the Postcode' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Country"
        placeholder="Please enter the Country"
        :rules="[{ required: true, message: 'Please enter the Country' }]"
      />

      <div class="minTitle">SECTION B OCCUPATION</div>
      <div class="minTitle">Settlor</div>
      <van-field
        name="source_of_funds"
        label="Occupation Type"
        :required="true"
        :rules="[
          { required: true, message: 'Please enter the Occupation Type' },
        ]"
      >
        <template #input>
          <van-radio-group
            v-model="formData.source_of_funds"
            direction="horizontal"
          >
            <van-radio :name="1">Salaried</van-radio>
            <van-radio :name="2">Self-Employed</van-radio>
            <van-radio :name="3">Retiree</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Occupation"
        placeholder="Please enter the Occupation"
        :rules="[{ required: true, message: 'Please enter the Occupation' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Industry"
        placeholder="Please enter the Industry"
        :rules="[{ required: true, message: 'Please enter the Industry' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Name of Employer"
        placeholder="Please enter the Name of Employer"
        :rules="[
          { required: true, message: 'Please enter the Name of Employer' },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Nature of Business(if Self-Employed)"
        placeholder="Please enter the Nature of Business(if Self-Employed)"
        :rules="[
          {
            required: true,
            message: 'Please enter the Nature of Business(if Self-Employed)',
          },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Annual Salary / Income"
        placeholder="Please enter the Annual Salary / Income"
        :rules="[
          {
            required: true,
            message: 'Please enter the Annual Salary / Income',
          },
        ]"
      />
      <div class="minTitle">Spouse</div>
      <van-field
        name="source_of_funds"
        label="Occupation Type"
        :required="true"
        :rules="[
          { required: true, message: 'Please enter the Occupation Type' },
        ]"
      >
        <template #input>
          <van-radio-group
            v-model="formData.source_of_funds"
            direction="horizontal"
          >
            <van-radio :name="1">Salaried</van-radio>
            <van-radio :name="2">Self-Employed</van-radio>
            <van-radio :name="3">Retiree</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Occupation"
        placeholder="Please enter the Occupation"
        :rules="[{ required: true, message: 'Please enter the Occupation' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Industry"
        placeholder="Please enter the Industry"
        :rules="[{ required: true, message: 'Please enter the Industry' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Name of Employer"
        placeholder="Please enter the Name of Employer"
        :rules="[
          { required: true, message: 'Please enter the Name of Employer' },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Nature of Business(if Self-Employed)"
        placeholder="Please enter the Nature of Business(if Self-Employed)"
        :rules="[
          {
            required: true,
            message: 'Please enter the Nature of Business(if Self-Employed)',
          },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Annual Salary / Income"
        placeholder="Please enter the Annual Salary / Income"
        :rules="[
          {
            required: true,
            message: 'Please enter the Annual Salary / Income',
          },
        ]"
      />
      <div class="minTitle">
        SECTION C ENHANCED CUSTOMER DUE DILIGENCE (EDD)
      </div>
      <van-field
        name="source_of_funds"
        label="Are you a Political Exposed Person (PEP)?"
        :required="true"
        :rules="[
          {
            required: true,
            message:
              'Please enter the Are you a Political Exposed Person (PEP)?',
          },
        ]"
      >
        <template #input>
          <van-radio-group
            v-model="formData.source_of_funds"
            direction="horizontal"
          >
            <van-radio :name="1">YES</van-radio>
            <van-radio :name="0">NO</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        name="source_of_funds"
        label="Are you connected to any local and/or Foreign Political Exposed Person (PEP)?"
        :required="true"
        :rules="[
          {
            required: true,
            message:
              'Please enter the Are you connected to any local and/or ForeignPolitical Exposed Person (PEP)?',
          },
        ]"
      >
        <template #input>
          <van-radio-group
            v-model="formData.source_of_funds"
            direction="horizontal"
          >
            <van-radio :name="1">YES</van-radio>
            <van-radio :name="0">NO</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <div class="minTitle">
        If the answer to C2 is YES, please provide the following details:
      </div>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="PEP’s Full Name"
        placeholder="Please enter the PEP’s Full Name"
        :rules="[
          { required: true, message: 'Please enter the PEP’s Full Name' },
        ]"
      />
      <van-field
        name="source_of_funds"
        label="Relationship with the PEP"
        :required="true"
        :rules="[
          {
            required: true,
            message: 'Please enter the Relationship with the PEP',
          },
        ]"
      >
        <template #input>
          <van-radio-group
            v-model="formData.source_of_funds"
            direction="horizontal"
          >
            <van-radio :name="1">Self</van-radio>
            <van-radio :name="2"
              >Family Member Spouse / Child / Parent / Child’s Spouse</van-radio
            >
            <van-radio :name="3">Close Associate, please specify</van-radio>
            <van-radio :name="4"
              >Ultimate Beneficiary,Owner / Shareholder / Director / Partner /
              Authorised Person</van-radio
            >
            <van-radio :name="5">Others, please specify</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        v-model="formData.name"
        name="name"
        center
        type="text"
        label="Close Associate, please specify"
        placeholder="Please enter the Close Associate, please specify"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        type="text"
        label="Others, please specify"
        placeholder="Please enter the Others, please specify"
      />
      <van-field
        name="other_income"
        label="Are you an undischarged bankrupt?"
        :required="true"
        :rules="[
          {
            required: true,
            message: 'Please enter the Are you an undischarged bankrupt?',
          },
        ]"
      >
        <template #input>
          <van-radio-group
            v-model="formData.other_income"
            direction="horizontal"
          >
            <van-radio :name="1">YES</van-radio>
            <van-radio :name="0">NO</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        name="other_income"
        label="Do you have an US Taxpayer Identification Number “TIN?"
        :required="true"
        :rules="[
          {
            required: true,
            message:
              'Please enter the Do you have an US Taxpayer Identification Number “TIN?',
          },
        ]"
      >
        <template #input>
          <van-radio-group
            v-model="formData.other_income"
            direction="horizontal"
          >
            <van-radio :name="1">YES</van-radio>
            <van-radio :name="0">NO</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="If YES, please indicate the TIN"
        placeholder="Please enter the If YES, please indicate the TIN"
        :rules="[
          {
            required: true,
            message: 'Please enter the If YES, please indicate the TIN',
          },
        ]"
      />
      <div class="minTitle">
        SECTION D SOURCE OF FUND – The bank from which the fund is forwarded to
        the Trustee
      </div>
      <div class="minTitle">Bank 1</div>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Bank"
        placeholder="Please enter the Bank"
        :rules="[{ required: true, message: 'Please enter the Bank' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Account No"
        placeholder="Please enter the Account No"
        :rules="[{ required: true, message: 'Please enter the Account No' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Account Holder"
        placeholder="Please enter the Account Holder"
        :rules="[
          { required: true, message: 'Please enter the Account Holder' },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="number"
        label="Transaction Amount"
        placeholder="Please enter the Transaction Amount"
        :rules="[
          { required: true, message: 'Please enter the Transaction Amount' },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Years (estimated) maintaining the account "
        placeholder="Please enter the Years (estimated) maintaining the account "
        :rules="[
          {
            required: true,
            message:
              'Please enter the Years (estimated) maintaining the account ',
          },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Relationship with Settlor"
        placeholder="Please enter the Relationship with Settlor"
        :rules="[
          {
            required: true,
            message: 'Please enter the Relationship with Settlor',
          },
        ]"
      />
      <div class="minTitle">Bank 2</div>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Bank"
        placeholder="Please enter the Bank"
        :rules="[{ required: true, message: 'Please enter the Bank' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Account No"
        placeholder="Please enter the Account No"
        :rules="[{ required: true, message: 'Please enter the Account No' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Account Holder"
        placeholder="Please enter the Account Holder"
        :rules="[
          { required: true, message: 'Please enter the Account Holder' },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="number"
        label="Transaction Amount"
        placeholder="Please enter the Transaction Amount"
        :rules="[
          { required: true, message: 'Please enter the Transaction Amount' },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Years (estimated) maintaining the account "
        placeholder="Please enter the Years (estimated) maintaining the account "
        :rules="[
          {
            required: true,
            message:
              'Please enter the Years (estimated) maintaining the account ',
          },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Relationship with Settlor"
        placeholder="Please enter the Relationship with Settlor"
        :rules="[
          {
            required: true,
            message: 'Please enter the Relationship with Settlor',
          },
        ]"
      />
      <van-field
        name="source_of_funds"
        label="Mode of Payment(Cash not accepted)"
        :required="true"
        :rules="[
          { required: true, message: 'Please enter the Mode of Payment' },
        ]"
      >
        <template #input>
          <van-radio-group
            v-model="formData.source_of_funds"
            direction="horizontal"
          >
            <van-radio :name="1">IBG/ Instant Transfer </van-radio>
            <van-radio :name="2">Local Cheque</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <div class="minTitle">SECTION E DOCUMENT CHECKLIST</div>
      <van-field
        name="source_of_funds"
        label="Particulars"
        :required="true"
        :rules="[{ required: true, message: 'Please enter the Particulars' }]"
      >
        <template #input>
          <van-radio-group
            v-model="formData.source_of_funds"
            direction="horizontal"
          >
            <van-radio :name="1">IC/ Passport of Settlor</van-radio>
            <van-radio :name="2"
              >Proof of Address (tick whichever applicable) (Prefer – Water,
              Electricity bill Others – Telephone Bill, Tenancy Agreement, Indah
              Water, etc )</van-radio
            >
            <van-radio :name="3"
              >Proof of bank transfer/ cheque pay in slip (Cash not
              acceptable)</van-radio
            >
            <van-radio :name="4"
              >Proof of Income(Latest Pay-slip Income tax return )</van-radio
            >
            <van-radio :name="5"
              >Source of fund – Bank account to fund the Cash Trust(Bank
              statement showing Name of Bank, Branch,Account Number)</van-radio
            >
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        name="other_income"
        label="Are you one of our existing client in any of our affiliate or our group?"
        :required="true"
        :rules="[
          {
            required: true,
            message:
              'Please enter the Are you one of our existing client in any of our affiliate or our group?',
          },
        ]"
      >
        <template #input>
          <van-radio-group
            v-model="formData.other_income"
            direction="horizontal"
          >
            <van-radio :name="1">YES</van-radio>
            <van-radio :name="0">NO</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        v-model="formData.name"
        name="name"
        center
        type="text"
        label="If yes, Kindly indicate what the services provided"
        placeholder="Please enter the If yes, Kindly indicate what the services provided"
      />
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
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="NAME"
        placeholder="Please enter the NAME"
        :rules="[{ required: true, message: 'Please enter the NAME' }]"
      />
      <van-field
        readonly
        v-model="formData.trustor_signature_date"
        name="trustor_signature_date"
        center
        :required="true"
        right-icon="arrow"
        label="DATE"
        placeholder="Please enter the DATE"
        @click="onShowPicker('trustor_signature_date')"
        :rules="[{ required: true, message: 'Please enter the DATE' }]"
      />
      <div class="minTitle">Section G (Office Use)</div>
      <div class="minTitle">For Marketing Officer</div>
      <div class="minTitle">
        Marketing Agent is responsible to fill in this form. This form is
        specifically designed for
      </div>
      <div class="minTitle">
        Marketing Officer and Frontline Officer for onboarding clients.
      </div>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="No"
        placeholder="Please enter the No"
        :rules="[{ required: true, message: 'Please enter the No' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Details"
        placeholder="Please enter the Details"
        :rules="[{ required: true, message: 'Please enter the Details' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Response"
        placeholder="Please enter the Response"
        :rules="[{ required: true, message: 'Please enter the Response' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        type="text"
        label="Comment for Compliance Officer (if any)"
        placeholder="Please enter the Comment for Compliance Officer (if any)"
      />
      <div class="minTitle">Distribution Agent Details</div>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Distribution Agent Name / Marketing Officer "
        placeholder="Please enter the Distribution Agent Name / Marketing Officer "
        :rules="[
          {
            required: true,
            message:
              'Please enter the Distribution Agent Name / Marketing Officer ',
          },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Marketing Officer Name 2 (list all if there are more than one agent)"
        placeholder="Please enter the Marketing Officer Name 2 (list all if there are more than one agent)"
        :rules="[
          {
            required: true,
            message:
              'Please enter the Marketing Officer Name 2 (list all if there are more than one agent)',
          },
        ]"
      />
      <div class="minTitle">Client Details</div>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Client Name "
        placeholder="Please enter the Client Name "
        :rules="[{ required: true, message: 'Please enter the Client Name ' }]"
      />
      <van-field
        name="other_income"
        label="Is the photocopy of the IC match the physical person (settlor)? "
        :required="true"
        :rules="[
          {
            required: true,
            message:
              'Please enter the Is the photocopy of the IC match the physical person (settlor)? ',
          },
        ]"
      >
        <template #input>
          <van-radio-group
            v-model="formData.other_income"
            direction="horizontal"
          >
            <van-radio :name="1">YES</van-radio>
            <van-radio :name="0">NO</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        name="other_income"
        label="Is the mobile number correct for the settlor?"
        :required="true"
        :rules="[
          {
            required: true,
            message:
              'Please enter the Is the mobile number correct for the settlor?',
          },
        ]"
      >
        <template #input>
          <van-radio-group
            v-model="formData.other_income"
            direction="horizontal"
          >
            <van-radio :name="1">YES</van-radio>
            <van-radio :name="0">NO</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        name="other_income"
        label="Is the mobile number correct for the beneficiary?"
        :required="true"
        :rules="[
          {
            required: true,
            message:
              'Please enter the Is the mobile number correct for the beneficiary?',
          },
        ]"
      >
        <template #input>
          <van-radio-group
            v-model="formData.other_income"
            direction="horizontal"
          >
            <van-radio :name="1">YES</van-radio>
            <van-radio :name="0">NO</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        name="other_income"
        label="Is there willingness to provide information and documents?"
        :required="true"
        :rules="[
          {
            required: true,
            message:
              'Please enter the Is there willingness to provide information and documents?',
          },
        ]"
      >
        <template #input>
          <van-radio-group
            v-model="formData.other_income"
            direction="horizontal"
          >
            <van-radio :name="1">YES</van-radio>
            <van-radio :name="0">NO</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        name="other_income"
        label="On-Boarding Mode and how many times you meet the client?"
        :required="true"
        :rules="[
          {
            required: true,
            message:
              'Please enter the On-Boarding Mode and how many times you meet the client?',
          },
        ]"
      >
        <template #input>
          <van-radio-group
            v-model="formData.other_income"
            direction="horizontal"
          >
            <van-radio :name="1">FACE-TO-FACE</van-radio>
            <van-radio :name="2">NON FACE-TO-FACE</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="FACE-TO-FACE times"
        placeholder="Please enter the FACE-TO-FACE times"
        :rules="[
          { required: true, message: 'Please enter the FACE-TO-FACE times' },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="NON FACE-TO-FACE, times"
        placeholder="Please enter the NON FACE-TO-FACE, times"
        :rules="[
          {
            required: true,
            message: 'Please enter the NON FACE-TO-FACE, times',
          },
        ]"
      />
      <span style="font-weight: bold"
        >Face to face interaction/ or other way of interaction? Kindly list down
        as many as possible</span
      >
      <van-button class="esignBtn" native-type="button" @click="addBeneficiary"
        >Add</van-button
      >
      <div
        class="beneficiary_info"
        v-for="(item, inx) in formData.company"
        :key="inx"
      >
        <van-field
          readonly
          v-model="item.trustor_signature_date"
          name="trustor_signature_date"
          center
          :required="true"
          right-icon="arrow"
          label="Date"
          placeholder="Please enter the Date"
          @click="onShowPicker('trustor_signature_date')"
          :rules="[{ required: true, message: 'Please enter the Date' }]"
        />
        <van-field
          v-model="item.name"
          name="name"
          center
          :required="true"
          type="text"
          label="Time"
          placeholder="Please enter the Time"
          :rules="[{ required: true, message: 'Please enter the Time' }]"
        />
        <van-field
          v-model="item.name"
          name="name"
          center
          :required="true"
          type="text"
          label="Place"
          placeholder="Please enter the Place"
          :rules="[{ required: true, message: 'Please enter the Place' }]"
        />
        <van-field
          v-model="item.name"
          name="name"
          center
          :required="true"
          type="text"
          label="Comment"
          placeholder="Please enter the Comment"
          :rules="[{ required: true, message: 'Please enter the Comment' }]"
        />
        <van-button
          class="esignDelBtn"
          v-if="inx > 0"
          slot="button"
          native-type="button"
          @click="delBeneficiary(inx)"
          >delete</van-button
        >
      </div>
      <van-field
        name="other_income"
        label="Any Introducer? "
        :required="true"
        :rules="[
          {
            required: true,
            message: 'Please enter the Any Introducer? ',
          },
        ]"
      >
        <template #input>
          <van-radio-group
            v-model="formData.other_income"
            direction="horizontal"
          >
            <van-radio :name="1">YES</van-radio>
            <van-radio :name="0">NO</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Please state the Name of introducer"
        placeholder="Please enter the Please state the Name of introducer"
        :rules="[
          {
            required: true,
            message: 'Please enter the Please state the Name of introducer',
          },
        ]"
      />
      <div class="minTitle">Assessment of Client</div>
      <van-field
        name="source_of_funds"
        label="Risk Rating by Distribution Agent"
        :required="true"
        :rules="[
          {
            required: true,
            message: 'Please enter the Risk Rating by Distribution Agent',
          },
        ]"
      >
        <template #input>
          <van-radio-group
            v-model="formData.source_of_funds"
            direction="horizontal"
          >
            <van-radio :name="1">High</van-radio>
            <van-radio :name="2">Above Average</van-radio>
            <van-radio :name="3">Moderate</van-radio>
            <van-radio :name="4">Low</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Any indication or information to suggest the client is of high risk? Please elaborate."
        placeholder="Please enter the Any indication or information to suggest the client is of high risk? Please elaborate."
        :rules="[
          {
            required: true,
            message:
              'Please enter the Any indication or information to suggest the client is of high risk? Please elaborate.',
          },
        ]"
      />
      <van-field
        name="source_of_funds"
        label="Recommended Decision"
        :required="true"
        :rules="[
          { required: true, message: 'Please enter the Recommended Decision' },
        ]"
      >
        <template #input>
          <van-radio-group
            v-model="formData.source_of_funds"
            direction="horizontal"
          >
            <van-radio :name="1">Accept</van-radio>
            <van-radio :name="2">Reject</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Please elaborate your decision regardless the answer above is rejected or accepted."
        placeholder="Please enter the Please elaborate your decision regardless the answer above is rejected or accepted."
        :rules="[
          {
            required: true,
            message:
              'Please enter the Please elaborate your decision regardless the answer above is rejected or accepted.',
          },
        ]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Remark/ Comments:"
        placeholder="Please enter the Remark/ Comments:"
        :rules="[
          { required: true, message: 'Please enter the Remark/ Comments:' },
        ]"
      />
      <div class="minTitle">
        We declare all the information provided is accurate and we will store
        all the data securely
      </div>
      <div class="tl">Marketing Officer/ Frontline Officer</div>
      <vue-esign
        ref="trustor_signature"
        :width="1200"
        :height="300"
        :isCrop="false"
        :lineWidth="6"
        lineColor="#000000"
        bgColor.sync="#fff"
        style="border: 1px solid #666"
      />
      <div class="tr">
        <div class="esignBtn" @click="handleReset('trustor_signature')">
          clear
        </div>
        <div class="esignBtn" @click="handleGenerate('trustor_signature')">
          confirm
        </div>
      </div>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Name"
        placeholder="Please enter the Name"
        :rules="[{ required: true, message: 'Please enter the Name' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="NRIC No"
        placeholder="Please enter the NRIC No"
        :rules="[{ required: true, message: 'Please enter the NRIC No' }]"
      />
      <van-field
        readonly
        v-model="formData.trustor_signature_date"
        name="trustor_signature_date"
        center
        :required="true"
        right-icon="arrow"
        label="Date"
        placeholder="Please enter the Date"
        @click="onShowPicker('trustor_signature_date')"
        :rules="[{ required: true, message: 'Please enter the Date' }]"
      />
      <div class="tl">Manager/ HOD of the Company</div>
      <vue-esign
        ref="trustor_signature"
        :width="1200"
        :height="300"
        :isCrop="false"
        :lineWidth="6"
        lineColor="#000000"
        bgColor.sync="#fff"
        style="border: 1px solid #666"
      />
      <div class="tr">
        <div class="esignBtn" @click="handleReset('trustor_signature')">
          clear
        </div>
        <div class="esignBtn" @click="handleGenerate('trustor_signature')">
          confirm
        </div>
      </div>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="Name"
        placeholder="Please enter the Name"
        :rules="[{ required: true, message: 'Please enter the Name' }]"
      />
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="NRIC No"
        placeholder="Please enter the NRIC No"
        :rules="[{ required: true, message: 'Please enter the NRIC No' }]"
      />
      <van-field
        readonly
        v-model="formData.trustor_signature_date"
        name="trustor_signature_date"
        center
        :required="true"
        right-icon="arrow"
        label="Date"
        placeholder="Please enter the Date"
        @click="onShowPicker('trustor_signature_date')"
        :rules="[{ required: true, message: 'Please enter the Date' }]"
      />

      <!-- <div class="minTitle">KNOW YOUR CLIENT’S FORM (KYC)</div>
      <div class="minTitle">KNOW YOUR CLIENT’S FORM (KYC)</div>
      <div class="minTitle">KNOW YOUR CLIENT’S FORM (KYC)</div>
      <div class="minTitle">KNOW YOUR CLIENT’S FORM (KYC)</div>
      <div class="minTitle">KNOW YOUR CLIENT’S FORM (KYC)</div>
      <div class="minTitle">KNOW YOUR CLIENT’S FORM (KYC)</div>
      <van-field
        v-model="formData.name"
        name="name"
        center
        :required="true"
        type="text"
        label="TRUSTOR"
        placeholder="Please enter the TRUSTOR"
        :rules="[{ required: true, message: 'Please enter the TRUSTOR' }]"
      />
      <van-field
        name="source_of_funds"
        label="SOURCE"
        :required="true"
        :rules="[{ required: true, message: 'Please enter the SOURCE' }]"
      >
        <template #input>
          <van-radio-group
            v-model="formData.source_of_funds"
            direction="horizontal"
          >
            <van-radio :name="1">EMPLOYMENT</van-radio>
            <van-radio :name="2">RETIRED</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        name="other_income"
        label="INCOME"
        :required="true"
        :rules="[
          {
            required: true,
            message: 'Please enter the INCOME',
          },
        ]"
      >
        <template #input>
          <van-radio-group
            v-model="formData.other_income"
            direction="horizontal"
          >
            <van-radio :name="1">YES</van-radio>
            <van-radio :name="0">NO</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <div class="tl">TRUSTOR SIGNATURE</div>
      <vue-esign
        ref="trustor_signature"
        :width="1200"
        :height="300"
        :isCrop="false"
        :lineWidth="6"
        lineColor="#000000"
        bgColor.sync="#fff"
        style="border: 1px solid #666"
      />
      <div class="tr">
        <div class="esignBtn" @click="handleReset('trustor_signature')">
          clear
        </div>
        <div class="esignBtn" @click="handleGenerate('trustor_signature')">
          confirm
        </div>
      </div>
      <van-field
        readonly
        v-model="formData.trustor_signature_date"
        name="trustor_signature_date"
        center
        :required="true"
        right-icon="arrow"
        label="DATE"
        placeholder="Please enter the DATE"
        @click="onShowPicker('trustor_signature_date')"
        :rules="[{ required: true, message: 'Please enter the DATE' }]"
      />
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
      <van-button round block type="info" native-type="submit">
        {{ from == "create" ? "next" : "submit" }}
      </van-button>
    </van-form>
    <!-- 日期彈框 -->
    <van-popup v-model="isShowPicker" position="bottom">
      <van-datetime-picker
        v-model="currentContent"
        type="date"
        :min-hour="0"
        @cancel="onHiddenPicker"
        @confirm="onConfirmPicker"
      />
    </van-popup>
  </div>
</template>

<script>
import { uploadAutograph, smsVerify_code, verdict_code } from "@/api/util";
import { kyc_form, getOrdersForms, putOrdersForms } from "@/api/order";
export default {
  data() {
    return {
      formData: {
        name: "",
        nric_no: "",
        contact_no: "",
        email: "",
        source_of_funds: 0,
        company: [
          {
            Date: "",
            Time: "",
            Place: "",
            Comment: "",
          },
        ],
        occupation: "",
        business_running: "",
        year_income: "",
        other_income: 0,
        other_income_details: 0,
        why_set_trust: "",
        have_trust: 0,
        have_pep: 0,
        income_legitimate: 0,
        income_legitimate_details: "",
        have_high_risk: 0,
        have_high_risk_details: 0,
        trustor_signature: "",
        trustor_name: "",
        trustor_signature_date: "",
        witness_signature: "",
        witness_name: "",
        witness_date: "",
        witness_phone: "",
        other_income_details_content: "",
        have_trust_details: "",
        have_pep_details: "",
        have_high_risk_details_content: "",
      },
      isShowPicker: false, // 日期彈框
      currentContent: new Date(), // 日期彈框顯示當前日期
      whichDate: "", // 區分是哪個日期觸發彈框
      showCodePicker: false, // 區號彈框
      columns: ["60 Malaysia", "86 China", "852 Hong Kong", "886 Taiwan"],
      areaCode: "", // 區號
      phone: "",
      verify_code: "",
      isSms: false,
      from: "", // 記錄哪個頁面進入的
      isFilled: "", // 表單id(未填0)
    };
  },
  mounted() {
    console.log(this.$route.query, 222222);
    this.from = this.$route.query.from;
    this.isFilled = this.$route.query.isFilled;
    this.getFormData();
  },
  methods: {
    // 如果已填 獲取數據
    getFormData() {
      if (this.isFilled > 0) {
        getOrdersForms(this.isFilled, { type: "KYC" })
          .then((res) => {
            console.log(res);
            this.formData = res;
            this.phone = res.witness_phone.slice(-11);
            this.areaCode = res.witness_phone.split(this.phone)[0];
          })
          .catch((err) => {});
      }
    },
    submit(form) {
      console.log(form, "form");
      if (!this.formData.trustor_signature) {
        this.$toast.fail("Please sign your name");
        return;
      } else if (!this.formData.witness_signature) {
        this.$toast.fail("Please sign your name");
        return;
      }
      // 验证验证码
      let data = [];
      data.push({
        phone: this.areaCode.split(" ")[0] + this.phone,
        verify_code: this.verify_code,
      });
      verdict_code(JSON.stringify(data))
        .then((res) => {
          console.log(res, "验证回调");
          if (res.state_code == 200) {
            // 验证成功 提交表单
            let data = JSON.parse(JSON.stringify(this.formData));
            data.witness_phone = this.areaCode.split(" ")[0] + this.phone;
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
                this.$router.go(-1);
              });
            } else {
              kyc_form(this.$route.query.orderId, data)
                .then((res) => {
                  console.log(res);
                  this.$toast({
                    type: "success",
                    message: "Submitted successfully",
                  });
                  if (this.from == "create") {
                    this.$store.commit("changePage", {
                      tabbar: "/LetterOfWishes",
                      title: "Letter Of Wishes",
                    });
                    this.$router.push(
                      "/LetterOfWishes?from=create&orderId=" +
                        this.$route.query.orderId
                    );
                  } else {
                    this.$router.go(-1);
                  }
                })
                .catch((err) => {
                  console.log(err.response);
                });
            }
          } else {
            this.$toast({
              type: "fail",
              message: res.message,
            });
          }
        })
        .catch((err) => {
          console.log(err.response);
          this.$toast({
            type: "fail",
            message: "Verification code error",
          });
        });
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
      this.$refs[val].reset(); //清空画布
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
              that.formData[val] = res.path;
              that.$toast({
                type: "success",
                message: "Signature success",
              });
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
    onShowPicker(val) {
      this.isShowPicker = true;
      this.whichDate = val;
    },
    // 日期彈框
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
    // 添加beneficiary_info
    addBeneficiary() {
      if (this.formData.company.length < 4) {
        this.formData.company.push({
          Date: "",
          Time: "",
          Place: "",
          Comment: "",
        });
      }
    },
    delBeneficiary(inx) {
      this.formData.company.splice(inx, 1);
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
  background-color: #2f75f4;
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
  background-color: #2f75f4;
  font-size: 16px;
  border-radius: 10px;
  height: 35px;
}
/*手机*/
@media screen and (max-width: 768px) {
  /deep/ .van-field__label {
    width: 6.5rem;
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
</style>