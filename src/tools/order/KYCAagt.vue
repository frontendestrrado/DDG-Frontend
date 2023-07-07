<template>
  <div class="KYC bodybox">
    <van-form validate-first @submit="submit" :submit-on-enter="false" :scroll-to-error="true">

      <!-- ---------------------settlor-----------settlor---------------------- -->

      <div class="minTitle">
        SECTION A INDIVIDUAL (SETTLOR, SPOUSE, BENEFICIARY(IES))
      </div>
      <div class="minTitle">Settlor</div>

      <van-field oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" v-model="formData.settlor.Full" name="Full" center :required="true" type="text"
        autocomplete="off" label="Full Name (NRIC/ Passport)" placeholder="Please enter the Full Name (NRIC/ Passport)"
        :rules="[{ required: true }]" />

        <!-- <van-field name="settlor_type" label="Settlor Type :" :required="true" :rules="[{ required: true }]">
        <template #input>
          <van-radio-group v-model="formData.settlor_type" direction="horizontal">
            <van-radio :name="1">Individual</van-radio>
            <van-radio :name="2">Organization</van-radio>
          </van-radio-group>
        </template>
      </van-field> -->
      

      <van-field name="Malaysian" label="Nationality" :required="true" :rules="[{ required: true }]">
        <template #input>
          <van-radio-group v-model="formData.settlor.Malaysian" direction="horizontal">
            <van-radio :name="1">Malaysian</van-radio>
            <van-radio :name="2">Non-Malaysian</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <van-field v-show="formData.settlor.Malaysian == 1" v-model="formData.settlor.New" name="New" autocomplete="off"
        center :required="true" type="text" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" label="NEW - Malaysia NRIC No"
        placeholder="Please enter the NEW - Malaysia NRIC No" :rules="[
          {
            required: true,
          },
        ]" />

      <van-field v-show="formData.settlor.Malaysian == 1" v-model="formData.settlor.Old" name="Old" autocomplete="off"
        center type="text" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" label="OLD - Malaysia NRIC No.(if applicable)"
        placeholder="Please enter the OLD - Malaysia NRIC No.(if applicable)" />



      <van-field v-if="formData.settlor.Malaysian == 2" v-model="formData.settlor.Nationality" name="Nationality"
        autocomplete="off" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="Country(state all if multiple Country)"
        placeholder="Please enter the Country(state all if multiple Country)" :required="true" :rules="[{ required: true }]" />


      <!-- <van-field v-show="formData.settlor.Malaysian == 1" v-model="formData.settlor.Nationality" name="Nationality" autocomplete="off" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="Country(state all if multiple Country)"
        placeholder="Please enter the Country(state all if multiple Country)" /> -->



      <!-- ------------------settlor_non_malaysia---------------settlor_non_malaysia----------------------------------- -->



      <div class="minTitle">
        For Non-Malaysia NRIC Holders, please provide passport details
      </div>
      <van-field  v-model="formData.settlor_non_malaysia.Passport" name="Passport"
        center type="text" autocomplete="off" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" label="Passport Number" placeholder="Please enter the Passport Number" />

      <van-field  v-model="formData.settlor_non_malaysia.Passport2"
        name="Passport2" center autocomplete="off" type="text" label="Passport Expiry Date: DD-MM-YYYY"
        placeholder="Please enter the Passport Expiry Date" />

      <van-field  v-model="formData.settlor_non_malaysia.Passport3"
        name="Passport3" center type="text" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" autocomplete="off" label="Passport Issuing Country"
        placeholder="Please enter the Passport Issuing Country" />

      <van-field v-model="formData.settlor_non_malaysia.Date" :rules="[{ required: true }]" :required="true" name="Date" autocomplete="off" center
        label="Date of Birth: DD-MM-YYYY" placeholder="Please enter DD-MM-YYYY" />

      <van-field v-model="formData.settlor_non_malaysia.Country" :rules="[{ required: true }]" :required="true" name="Country" center  type="text"
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" autocomplete="off" label="Country of Birth"
        placeholder="Please enter the Country of Birth"  />

      <van-field name="Gender" :rules="[{ required: true }]" :required="true" label="Gender" >
        <template #input>
          <van-radio-group v-model="formData.settlor_non_malaysia.Gender" direction="horizontal">
            <van-radio :name="1">Female</van-radio>
            <van-radio :name="2">Male</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <van-field name="Race" label="Race" :rules="[{ required: true }]" :required="true" >
        <template #input>
          <van-radio-group v-model="formData.settlor_non_malaysia.Race" direction="horizontal">
            <van-radio :name="1">Malay</van-radio>
            <van-radio :name="2">Chinese</van-radio>
            <van-radio :name="3">Indian</van-radio>
            <van-radio :name="4">Others</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <van-field v-show="formData.settlor_non_malaysia.Race == 4" v-model="formData.settlor_non_malaysia.RaceOthers"
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" name="RaceOthers" center type="text" label="Other" autocomplete="off"
        placeholder="Other" />

      <van-field name="Religion" label="Religion" :rules="[{ required: true }]" :required="true">
        <template #input>
          <van-radio-group v-model="formData.settlor_non_malaysia.Religion" direction="horizontal">
            <van-radio :name="1">Christian</van-radio>
            <van-radio :name="2">Islam</van-radio>
            <van-radio :name="3">Buddhist</van-radio>
            <van-radio :name="4">Hindu</van-radio>
            <van-radio :name="5">Others</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field v-show="formData.settlor_non_malaysia.Religion == 5"
        v-model="formData.settlor_non_malaysia.ReligionOthers" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" name="ReligionOthers" center type="text" label="Other" autocomplete="off"
        placeholder="Other" />
      <van-field name="Marital" label="Marital Status" :rules="[{ required: true }]" :required="true">
        <template #input>
          <van-radio-group v-model="formData.settlor_non_malaysia.Marital" direction="horizontal" >
            <van-radio :name="1">Single</van-radio>
            <van-radio :name="2">Married</van-radio>
            <van-radio :name="3">Divorced</van-radio>
            <van-radio :name="4">Widow/ Widower</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <!-- ------------------settlor_contact_details--------------------settlor_contact_details----------------------------------------------- -->
      <div class="minTitle">Contact Details</div>
      <van-field v-model="formData.settlor_contact_details.Email" name="Email" center autocomplete="off" :required="true"
        type="email" label="Email Address" placeholder="Please enter the Email Address" :rules="[{ required: true }]" />

      <van-field v-model="formData.settlor_contact_details.Mobile" name="Mobile" center :required="true"
        autocomplete="off" type="text" label="Mobile Phone No" @keypress="isLetter($event)"
        placeholder="Please enter the Mobile Phone No" :rules="[
          { required: true },
        ]" />

      <van-field v-model="formData.settlor_contact_details.Home" name="Home" center type="text" autocomplete="off"
        @keypress="isLetter($event)" label="Home Phone No" placeholder="Please enter the Home Phone No" />


      <van-field v-model="formData.settlor_contact_details.Office" name="Office" center autocomplete="off" type="text"
        label="Office Phone No" @keypress="isLetter($event)" placeholder="Please enter the Office Phone No" />

      <van-field name="Residential_type" label="Residential Type" :required="true" :rules="[
        { required: true },
      ]">
        <template #input>
          <van-radio-group v-model="formData.settlor_contact_details.Residential_type" direction="horizontal">
            <van-radio :name='1'>Own</van-radio>
            <van-radio :name='2'>Rent</van-radio>
            <van-radio :name='3'> Staying with family</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <van-field v-model="formData.settlor_contact_details.Residential" name="Residential" center :required="true"
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" autocomplete="off" label="Residential Address"
        placeholder="Please enter the Residential Address" :rules="[
          { required: true },
        ]" />

      <van-field v-model="formData.settlor_contact_details.Postcode" name="Postcode" autocomplete="off" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" :required="true" type="text" label="Postcode"
        placeholder="Please enter the Postcode" :rules="[
          { required: true },
        ]" />

      <van-field v-model="formData.settlor_contact_details.Country" name="Country" autocomplete="off" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" :required="true" type="text" label="Country"
        placeholder="Please enter the Country" :rules="[
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
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" label="Mailing Address(if different from the above address)"
        placeholder="Please enter the Mailing Address(if different from the above address)" />

      <van-field v-model="formData.settlor_contact_details.Postcode2" name="Postcode2" center type="text" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" autocomplete="off" label="Postcode" placeholder="Please enter the Postcode" />

      <van-field v-model="formData.settlor_contact_details.Country2" name="Country2" center type="text" label="Country"
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" autocomplete="off" placeholder="Please enter the Country" />

      <!-- ----------------spouse-----------------------------spouse------------------------spouse----------------------------------------------         -->


      <div class="minTitle">Spouse</div>
      <van-field v-model="formData.spouse.Full" name="Full" center type="text" autocomplete="off" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" label="Full Name (NRIC/ Passport)"
        placeholder="Please enter the Full Name (NRIC/ Passport)" />

      <van-field v-model="formData.spouse.New" name="New" autocomplete="off" center type="text" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" label="NEW - Malaysia NRIC No"
        placeholder="Please enter the NEW - Malaysia NRIC No" />

      <van-field v-model="formData.spouse.Old" name="Old" autocomplete="off" center type="text" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" label="OLD - Malaysia NRIC No.(if applicable)"
        placeholder="Please enter the OLD - Malaysia NRIC No.(if applicable)" />

      <van-field v-model="formData.spouse.Nationality" name="Nationality" autocomplete="off" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="Country(state all if multiple Country)"
        placeholder="Please enter the Country(state all if multiple Country)" />


      <van-field name="Nationality" label="Nationality">
        <template #input>
          <van-radio-group v-model="formData.spouse.Malaysian" direction="horizontal">
            <van-radio :name="1">Malaysian</van-radio>
            <van-radio :name="2">Non-Malaysian</van-radio>
          </van-radio-group>
        </template>
      </van-field>


      <!-- ---------spouse_non_malaysia---------------------spouse_non_malaysia------------------------------spouse_non_malaysia-------------------------------------------       -->
      <div class="minTitle">
        For Non-Malaysia NRIC Holders, please provide passport details
      </div>
      <van-field v-model="formData.spouse_non_malaysia.Passport" name="Passport" center type="text" autocomplete="off"
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" label="Passport Number" placeholder="Please enter the Passport Number" />

      <van-field v-model="formData.spouse_non_malaysia.Passport2" name="Passport2" center autocomplete="off" type="text"
        label="Passport Expiry Date: DD-MM-YYYY" placeholder="Please enter the Passport Expiry Date" />

      <van-field v-model="formData.spouse_non_malaysia.Passport3" name="Passport3" center type="text" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" autocomplete="off" label="Passport Issuing Country"
        placeholder="Please enter the Passport Issuing Country" />

      <van-field v-model="formData.spouse_non_malaysia.Date" name="Date" autocomplete="off" center
        label="Date of Birth: DD-MM-YYYY" placeholder="Please enter DD-MM-YYYY" />

      <van-field v-model="formData.spouse_non_malaysia.Country" name="Country" center type="text" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" autocomplete="off" label="Country of Birth"
        placeholder="Please enter the Country of Birth" />

      <van-field name="Gender" label="Gender">
        <template #input>
          <van-radio-group v-model="formData.spouse_non_malaysia.Gender" direction="horizontal">
            <van-radio :name="1">Female</van-radio>
            <van-radio :name="2">Male</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <van-field name="Race" label="Race">
        <template #input>
          <van-radio-group v-model="formData.spouse_non_malaysia.Race" direction="horizontal">
            <van-radio :name="1">Malay</van-radio>
            <van-radio :name="2">Chinese</van-radio>
            <van-radio :name="3">Indian</van-radio>
            <van-radio :name="4">Others</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field v-show="formData.spouse_non_malaysia.Race == 4" v-model="formData.spouse_non_malaysia.RaceOthers"
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" name="RaceOthers" center type="text" label="Other" autocomplete="off"
        placeholder="Other" />
      <van-field name="Religion" label="Religion">
        <template #input>
          <van-radio-group v-model="formData.spouse_non_malaysia.Religion" direction="horizontal">
            <van-radio :name="1">Christian</van-radio>
            <van-radio :name="2">Islam</van-radio>
            <van-radio :name="3">Buddhist</van-radio>
            <van-radio :name="4">Hindu</van-radio>
            <van-radio :name="5">Others</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field v-show="formData.spouse_non_malaysia.Religion == 5" v-model="formData.spouse_non_malaysia.ReligionOthers"
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" name="ReligionOthers" center type="text" label="Other" autocomplete="off"
        placeholder="Other" />
      <van-field name="Marital" label="Marital Status">
        <template #input>
          <van-radio-group v-model="formData.spouse_non_malaysia.Marital" direction="horizontal">
            <van-radio :name="1">Single</van-radio>
            <van-radio :name="2">Married</van-radio>
            <van-radio :name="3">Divorced</van-radio>
            <van-radio :name="4">Widow/ Widower</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <!-- <van-field v-model="formData.settlor.Other" name="Other" center autocomplete="off" type="text"
      @input="formData.settlor.Other = formData.settlor.Other.toUpperCase()"
        label="Other/Previous Name (if any)" placeholder="Please enter the Other/Previous Name (if any)" /> -->


      <!-- -------------spouse_contact_details----------------spouse_contact_details----------------------spouse_contact_details--------------------------------------        -->
      <div class="minTitle">Contact Details</div>
      <van-field v-model="formData.spouse_contact_details.Email" name="Email" center autocomplete="off" type="email"
        label="Email Address" placeholder="Please enter the Email Address" />

      <van-field v-model="formData.spouse_contact_details.Mobile" name="Mobile" center autocomplete="off" type="text"
        label="Mobile Phone No" @keypress="isLetter($event)" placeholder="Please enter the Mobile Phone No" />

      <van-field v-model="formData.spouse_contact_details.Home" name="Home" center type="text" autocomplete="off"
        @keypress="isLetter($event)" label="Home Phone No" placeholder="Please enter the Home Phone No" />

      <van-field v-model="formData.spouse_contact_details.Office" name="Office" center autocomplete="off" type="text"
        label="Office Phone No" @keypress="isLetter($event)" placeholder="Please enter the Office Phone No" />

      <van-field name="Residential_type" label="Residential Type">
        <template #input>
          <van-radio-group v-model="formData.spouse_contact_details.Residential_type" direction="horizontal">
            <van-radio :name="1">Own</van-radio>
            <van-radio :name="2">Rent</van-radio>
            <van-radio :name="3"> Staying with family</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <van-field v-model="formData.spouse_contact_details.Residential" name="Residential" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" autocomplete="off" label="Residential Address"
        placeholder="Please enter the Residential Address" />

      <van-field v-model="formData.spouse_contact_details.Postcode" name="Postcode" autocomplete="off" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="Postcode" placeholder="Please enter the Postcode" />

      <van-field v-model="formData.spouse_contact_details.Country" name="Country" autocomplete="off" center oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="Country" placeholder="Please enter the Country" />

      <van-field v-model="formData.spouse_contact_details.Length" name="Length" center autocomplete="off" type="text"
        label="Length of stay (Years) " placeholder="Please enter the Length of stay (Years) " />

      <van-field v-model="formData.spouse_contact_details.Mailing" name="Mailing" autocomplete="off" center type="text"
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" label="Mailing Address(if different from the above address)"
        placeholder="Please enter the Mailing Address(if different from the above address)" />

      <van-field v-model="formData.spouse_contact_details.Postcode2" name="Postcode2" center type="text" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" autocomplete="off" label="Postcode" placeholder="Please enter the Postcode" />

      <van-field v-model="formData.spouse_contact_details.Country2" name="Country2" center type="text" label="Country"
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" autocomplete="off" placeholder="Please enter the Country" />



      <!-- -----------------settlor_occupation---------------settlor_occupation--------------------------settlor_occupation--------------------------- -->

      <div class="minTitle">SECTION B OCCUPATION</div>
      <div class="minTitle">Settlor</div>
      <van-field name="Occupation" label="Occupation Type" :required="true" :rules="[
        { required: true },
      ]">
        <template #input>
          <van-radio-group v-model="formData.settlor_occupation.Occupation" direction="horizontal">
            <van-radio :name="1">Salaried</van-radio>
            <van-radio :name="2">Self-Employed</van-radio>
            <van-radio :name="3">Housewife</van-radio>
            <van-radio :name="4">Unemployed</van-radio>
            <van-radio :name="5">Retiree</van-radio>
            <van-radio :name="6">Other</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <van-field v-show="formData.settlor_occupation.Occupation == 6"
        v-model="formData.settlor_occupation.Occupation_Type" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" name="Occupation_Type" center type="text" label="Other" autocomplete="off"
        placeholder="Other" />

      <van-field v-model="formData.settlor_occupation.Occupation2" name="Occupation2" center  oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" autocomplete="off" type="text" label="Occupation (*If retiree / currently unemployed, state previous occupation)"
        placeholder="Please enter the Occupation" :rules="[{ required: true }]" :required="true"/>

      <van-field v-model="formData.settlor_occupation.Industry" name="Industry" autocomplete="off" center type="text"
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" label="Industry (*If retiree / currently unemployed, state previous industry)" placeholder="Please enter the Industry" />

      <van-field v-model="formData.settlor_occupation.Name" name="Name" center autocomplete="off" :required="true"
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="Name of Employer & Address 
or Name of Business (if self-employed)
   *If retiree / currently unemployed,  
     state previous name of employer
"
        placeholder="Please enter the Name of Employer" :rules="[
          { required: true },
        ]" />

      <van-field v-model="formData.settlor_occupation.Nature" name="Nature" center type="text" autocomplete="off" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" label="Nature of Business(if Self-Employed)"
        placeholder="Please enter the Nature of Business(if Self-Employed)" />

      <van-field name="Annual" label="Annual Salary / Income " :required="true" :rules="[
        { required: true },
      ]">
        <template #input>
          <van-radio-group v-model="formData.settlor_occupation.Annual" direction="horizontal">
            <van-radio :name="1">Up to RM30,000 </van-radio>
            <van-radio :name="2">RM30,001 – RM60,000 </van-radio>
            <van-radio :name="3">RM60,001 – RM120,000 </van-radio>
            <van-radio :name="4">RM120,001- RM300,000 </van-radio>
            <van-radio :name="5">Above RM300,000 </van-radio>
          </van-radio-group>
        </template>
      </van-field>


      <!-- ---------spouse_occupation------------------------spouse_occupation------------------spouse_occupation-----------------------------------       -->
      <div class="minTitle">Spouse</div>
      <van-field name="Occupation" label="Occupation Type">
        <template #input>

          <van-checkbox-group v-model="formData.spouse_occupation.Occupation" direction="horizontal">
            <van-checkbox @click="radio4(1)" :id="'q1'" :name="1">Salaried</van-checkbox>
            <van-checkbox @click="radio4(2)" :name="2">Self-Employed</van-checkbox>
            <van-checkbox @click="radio4(3)" :name="3">Housewife</van-checkbox>
            <van-checkbox @click="radio4(4)" :name="4">Unemployed</van-checkbox>
            <van-checkbox @click="radio4(5)" :name="5">Retiree</van-checkbox>
            <van-checkbox @click="radio4(6)" :name="6">Other</van-checkbox>


          </van-checkbox-group>

          <!-- <van-radio-group v-model="formData.spouse_occupation.Occupation" direction="horizontal">
            <van-radio :name="1">Salaried</van-radio>
            <van-radio :name="2">Self-Employed</van-radio>
            <van-radio :name="3">Retiree</van-radio>
          </van-radio-group> -->
        </template>




      </van-field>

      <van-field v-show="formData.spouse_occupation.Occupation == 6" v-model="formData.spouse_occupation.Occupation_Type"
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" name="Occupation_Type" center type="text" label="Other" autocomplete="off"
        placeholder="Other" />

      <van-field v-model="formData.spouse_occupation.Occupation2" name="Occupation2" center autocomplete="off" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="Occupation (*If retiree / currently unemployed, state previous occupation)" placeholder="Please enter the Occupation" />

      <van-field v-model="formData.spouse_occupation.Industry" name="Industry" center type="text" label="Industry (*If retiree / currently unemployed, state previous industry)"
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" autocomplete="off" placeholder="Please enter the Industry" />

      <van-field v-model="formData.spouse_occupation.Name" name="Name" center autocomplete="off" type="text" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" label="Name of Employer & Address 
or Name of Business (if self-employed)
   *If retiree / currently unemployed,  
     state previous name of employer
" placeholder="Please enter the Name of Employer" />

      <van-field v-model="formData.spouse_occupation.Nature" name="Nature" center autocomplete="off" type="text" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" label="Nature of Business(if Self-Employed)"
        placeholder="Please enter the Nature of Business(if Self-Employed)" />

      <van-field name="Annual" label="Annual Salary / Income ">
        <template #input>
          <van-radio-group v-model="formData.spouse_occupation.Annual" direction="horizontal">
            <van-radio :name="1">Up to RM30,000 </van-radio>
            <van-radio :name="2">RM30,001 – RM60,000 </van-radio>
            <van-radio :name="3">RM60,001 – RM120,000 </van-radio>
            <van-radio :name="4">RM120,001- RM300,000 </van-radio>
            <van-radio :name="5">Above RM300,000 </van-radio>
          </van-radio-group>
        </template>
      </van-field>


      <!-- -----------edd------------edd------------edd-------------edd---------------edd------------------       -->
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


      <!-- --------c_two_yes--------------c_two_yes---------------c_two_yes------------------------------------------       -->


      <div class="minTitle">
        If the answer to C2 is YES, please provide the following details:
      </div>
      <van-field v-model="formData.c_two_yes.Pep" name="Pep" center autocomplete="off" type="text" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" label="PEP’s Full Name" placeholder="Please enter the PEP’s Full Name" />

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

      <van-field v-model="formData.c_two_yes.Others" name="Others" center autocomplete="off" type="text" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" label="Others, please specify"
        placeholder="Please enter the Others, please specify" />

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


      <!-- --------bank_one--------------bank_one----------------bank_one-------------------bank_one----------------------- -->


      <div class="minTitle">
        SECTION D SOURCE OF FUND – The bank from which the fund is forwarded to
        the Trustee
      </div>
      <div class="minTitle">Bank 1</div>
      <van-field v-model="formData.bank_one.Bank" name="Bank" center :required="true" autocomplete="off" type="text"
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" label="Bank" placeholder="Please enter the Bank"
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

      <van-field v-model="formData.bank_one.Transaction" name="Transaction" center :required="true" autocomplete="off"
        type="number" label="Transaction Amount" placeholder="Please enter the Transaction Amount" :rules="[
          { required: true },
        ]" />

      <van-field name="Mode" label="Mode of Payment(Cash not accepted)" :required="true" :rules="[
        { required: true },
      ]">
        <template #input>
          <van-radio-group v-model="formData.bank_one.Mode" direction="horizontal">
            <van-radio :name="1">IBG/ Instant Transfer </van-radio>
            <van-radio :name="2">Local Cheque (*Cash not accepted; No 3rd party transfer)</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <van-field v-model="formData.bank_one.Years" name="Years" autocomplete="off" center :required="true" type="text"
        label="Years (estimated) maintaining the account "
        placeholder="Please enter the Years (estimated) maintaining the account " :rules="[
          {
            required: true,
          },
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
        <van-field v-model="formData.bank_two.Transaction" :required="true" :rules="[
          { required: true },
        ]" name="Transaction" autocomplete="off" center type="number" label="Transaction Amount"
          placeholder="Please enter the Transaction Amount" />
        <van-field name="Mode" label="Mode of Payment(Cash not accepted)" :required="true" :rules="[
          { required: true },
        ]">
          <template #input>
            <van-radio-group v-model="formData.bank_two.Mode" direction="horizontal">
              <van-radio :name="1">IBG/ Instant Transfer </van-radio>
              <van-radio :name="2">Local Cheque (*Cash not accepted; No 3rd party transfer)</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field v-model="formData.bank_two.Years" :required="true" :rules="[
          { required: true },
        ]" name="Years" autocomplete="off" center type="text" label="Years (estimated) maintaining the account "
          placeholder="Please enter the Years (estimated) maintaining the account " />
      </div>

      <!-- --------ecp------------------ecp-------------ecp-----------------ecp---------------------         -->



      <div class="minTitle">SECTION E EMERGENCY CONTACT PARTICULARS (INDIVIDUAL OVER 18 YEARS OLD)</div>
      <van-field v-model="formData.ecp.Name" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" name="Name" center autocomplete="off" type="text" label="NAME"
        placeholder="Please enter the NAME" :required="true" :rules="[
          { required: true },
        ]" />

      <van-field v-model="formData.ecp.NRIC_PASSPORT_NO" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" name="NRIC_PASSPORT_NO" center autocomplete="off" type="text"
        label="NRIC / PASSPORT NO." placeholder="Please enter the NRIC / PASSPORT NO." :required="true" :rules="[
          { required: true },
        ]" />

      <van-field v-model="formData.ecp.DOB" name="DOB" center autocomplete="off" type="text"
        label="DATE OF BIRTH: DD-MM-YYYY" placeholder="Please enter the DATE OF BIRTH" :required="true" :rules="[
          { required: true },
        ]" />

      <van-field v-model="formData.ecp.RELATIONSHIP" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" name="RELATIONSHIP" center autocomplete="off" type="text"
        label="RELATIONSHIP WITH SETTLOR" placeholder="Please enter the RELATIONSHIP WITH SETTLOR" :required="true"
        :rules="[
          { required: true },
        ]" />

      <van-field v-model="formData.ecp.CONTACT_NO" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" name="CONTACT_NO" center autocomplete="off" type="text" label="CONTACT NUMBER"
        placeholder="Please enter the CONTACT NUMBER" :required="true" :rules="[
          { required: true },
        ]" />

      <van-field v-model="formData.ecp.EMAIL" name="EMAIL" center autocomplete="off" type="text" label="EMAIL ADDRESS"
        placeholder="Please enter the EMAIL ADDRESS" :required="true" :rules="[
          { required: true },
        ]" />


      <!-- -----------declaration-----------declaration--------------declaration------------declaration---------------declaration---------------------         -->



      <div class="minTitle">SECTION F DECLARATION</div>
      <div class="contentText">
        I declare that the information I have provided is true and complete to the best of my knowledge. I am aware that
        this self-declaration statement is
        subject to review and verification and if such information has been falsified, I may be subject to prosecution and
        criminal sanction under written law.
      </div>
      
      <div class="contentText">
        <b>ASIA INTERNATIONAL TRUST BERHAD (AITB)</b> reserved all rights to stop providing any form of services
        if
        information provided found to be
        incomplete, inaccurate and/or the applicant is under criminal prosecution.

      </div>
      
      <div class="contentText">
        I am fully aware and understand that ASIA INTERNATIONAL TRUST BERHAD (AITB) is obliged to notify the
        authority
        if:-
      </div>
      
      <div class="contentText">
        1. Identity of the individual(s)/ Beneficiary is difficult to obtain

      </div>
      <div class="contentText">
        2. Activity inconsistent with Individual’s profile or business

      </div>
      <div class="contentText">
        3. Counterfeit/ fraud/ unauthorised transaction
      </div>
      <div class="contentText">
        4. Excessive or unnecessary use of nominees
      </div>
      
      <div class="contentText">
        I understand and consent to the usage of my personal data for all intents and purposes in relation to conducting
        to meet the statutory obligation. I
        am fully responsible to notify <b>ASIA INTERNATIONAL TRUST BERHAD (AITB)</b> immediately if any part of
        the
        information changes which may and/or
        have significantly resulting in information discrepancies and inaccuracies.

      </div>
      <br>
      <div class="tl">SETTLOR’S SIGNATURE</div>
      <vue-esign ref="signature" :isCrop="false" :lineWidth="6" :width="800" :height="300" style="border: 1px solid #666"
        lineColor="#000000" bgColor.sync="#fff" :id="'can1'"
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
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="Name" placeholder="Please enter the Name"
        :rules="[{ required: true }]" />
      <van-field v-model="formData.declaration.Date" name="Date" center autocomplete="off" label="Date: DD-MM-YYYY"
        :required="true" placeholder="Please enter DD-MM-YYYY" :rules="[{ pattern, message: 'Please enter the DATE' }]" />

      <!-- ------------client_details---------------client_details---------------client_details-----------------client_details-------------------------- -->



      <div class="minTitle">Section G (Office Use)</div>
      <div class="minTitle">For Advisor</div>
      <div class="minTitle">
        The advisor is responsible to fill in this form. This form is specifically designed for the Advisor and
        Frontline Officer for the onboarding of clients.
      </div>



      <div class="minTitle">Client Details</div>

      <van-field name="IsPhotocopy" label="Is the photocopy of the IC match the physical person (settlor)? "
        :required="true" :rules="[
          {
            required: true,
          },
        ]">
        <template #input>
          <van-radio-group v-model="formData.client_details.IsPhotocopy" direction="horizontal">
            <van-radio :name="1">YES</van-radio>
            <van-radio :name="0">NO</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <van-field v-model="formData.client_details.IsPhotocopyComment" id="2reset1" name="IsPhotocopyComment" center
        autocomplete="off" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="" placeholder="Please enter the Comment" />




      <van-field name="IsWillingness" label="Is there willingness to provide information and documents?" :required="true"
        :rules="[
          {
            required: true,
          },
        ]">
        <template #input>
          <van-radio-group v-model="formData.client_details.IsWillingness" direction="horizontal">
            <van-radio :name="1">YES</van-radio>
            <van-radio :name="0">NO</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field v-model="formData.client_details.IsWillingnessComment" id="2reset1" name="IsWillingnessComment" center
        autocomplete="off" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="" placeholder="Please enter the Comment" />


      <van-field name="OnBoarding" label="On-Boarding Mode and how many times you meet the client?" :required="true"
        :rules="[
          {
            required: true,
          },
        ]">
        <template #input>
          <van-radio-group v-model="formData.client_details.OnBoarding" direction="horizontal">
            <van-radio :name="1">FACE-TO-FACE</van-radio>
            <van-radio :name="2">NON FACE-TO-FACE</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field v-model="formData.client_details.OnBoardingComment" id="2reset1" name="OnBoardingComment" center
        autocomplete="off" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="" placeholder="Please enter the Comment" />

      <van-field v-model="formData.client_details.Face" name="Face" center autocomplete="off" :required="true" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="FACE-TO-FACE times"
        placeholder="Please enter the FACE-TO-FACE times" :rules="[
          { required: true },
        ]" />
      <van-field v-model="formData.client_details.Non" name="Non" center autocomplete="off" :required="true" type="text"
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" label="NON FACE-TO-FACE, times"
        placeholder="Please enter the NON FACE-TO-FACE, times" :rules="[
          {
            required: true,
          },
        ]" />

      <!-- --------interaction-----------interaction----------------interaction---------------interaction-----------------------------------         -->



      <span style="font-weight: bold">Face to face interaction/ or other way of interaction? Kindly list down
        as many as possible</span>
      <van-button class="esignBtn" native-type="button" @click="addBeneficiary">Add</van-button>
      <div class="beneficiary_info" v-for="(item, inx) in formData.interaction" :key="inx">
        <van-field v-model="item.Date" name="Date" center autocomplete="off" label="Date: DD-MM-YYYY"
          placeholder="Please enter DD-MM-YYYY" />
        <van-field v-model="item.Time" name="Time" center type="text" autocomplete="off" label="Time"
          placeholder="Please enter the Time" />
        <van-field v-model="item.Place" name="Place" center autocomplete="off" type="text" label="Place (eg. Old Town Coffee Jalan Pudu)" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" placeholder="Please enter the Place" />
        <van-field v-model="item.Comment" name="Comment" center autocomplete="off" type="text" label="Comment" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" placeholder="Please enter the Comment" />
        <van-button class="esignDelBtn" v-if="inx > 0" slot="button" native-type="button"
          @click="delBeneficiary(inx)">delete</van-button>
      </div>


      <!-- ----------assessment_of_client----------------------assessment_of_client----------------assessment_of_client---------------------------------------       -->

      <div class="minTitle">Assessment of Client</div>
      <van-field name="Risk" label="KYC Risk Rating by
Advisor" :required="true" :rules="[
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
      <van-field v-model="formData.assessment_of_client.RiskComment" id="2reset1" name="RiskComment" center
        autocomplete="off" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="" placeholder="Please enter the Comment" />


      <van-field v-model="formData.assessment_of_client.Any" name="Any" center autocomplete="off" type="text" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);"
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
      <van-field v-model="formData.assessment_of_client.RecommendedComment" name="RecommendedComment" center
        autocomplete="off" type="text"
        @input="formData.assessment_of_client.RecommendedComment = formData.assessment_of_client.RecommendedComment.toUpperCase()"
        label="" placeholder="Please enter the Comment" />


      <van-field v-model="formData.assessment_of_client.Remark" name="Remark" center autocomplete="off" type="text"
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" label="Remark/ Comments:" placeholder="Please enter the Remark/ Comments:" />

      <!-- --------advisor------------------advisor----------------------advisor--------------advisor----------         -->

      <div class="minTitle">
        We declare all the information provided is accurate and we will store all the data securely
      </div>
      <div class="tl">Advisor's Signature</div>
      <vue-esign ref="advisor_signature" :isCrop="false" :lineWidth="6" lineColor="#000000" :width="800" :height="300"
        bgColor.sync="#fff" style="border: 1px solid #666"
        :style="{ display: (this.xyz1 === '' ? 'block' : formData.advisor.advisor_signature === null || formData.advisor.advisor_signature === '' ? 'block' : 'none') }" />
      <van-image
        :style="{ border: '1px solid #666', display: (this.xyz1 === '1' ? formData.advisor.advisor_signature === null || formData.advisor.advisor_signature === '' ? 'none' : 'block' : 'none') }"
        class="esignImgbox" :src="formData.advisor.advisor_signature" />
      <div class="tr">
        <div class="esignBtn" @click="handleReset('advisor_signature')" v-if="!isDone">
          Clear
        </div>
        <div v-if="!isDone" class="esignBtn" @click="
          handleGenerate('advisor_signature', 'advisor')
          ">
          Confirm
        </div>
      </div>
      <van-field v-model="formData.advisor.Name" id="2reset3" name="Name" center autocomplete="off" oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" :required="true" type="text" label="Name" placeholder="Please enter the Name"
        :rules="[{ required: true }]" />

      <van-field v-model="formData.advisor.Date" name="Date" autocomplete="off" center label="Date: DD-MM-YYYY"
        :required="true" placeholder="Please enter DD-MM-YYYY"
        :rules="[{ required: true, pattern, message: 'Please enter the DATE' }]" />

      <van-field v-model="formData.advisor.Advisor_Code" name="Advisor_Code" autocomplete="off" center :required="true"
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" type="text" label="Advisor Code: " placeholder="Please enter the Advisor Code"
        :rules="[{ required: true }]" />


      <!-- ------------------------------------------------------------------------------------------ -->
      <div class="tl">Operation Manager/ HOD of the Company</div>
      <vue-esign ref="manager_signature" :width="800" :height="300" :isCrop="false" :lineWidth="6" lineColor="#000000"
        bgColor.sync="#fff" style="border: 1px solid #666"
        :style="{ display: (this.xyz2 === '' ? 'block' : formData.store_manager.manager_signature === null || formData.store_manager.manager_signature === '' ? 'block' : 'none') }" />
      <van-image
        :style="{ border: '1px solid #666', display: (this.xyz2 === '1' ? formData.store_manager.manager_signature === null || formData.store_manager.manager_signature === '' ? 'none' : 'block' : 'none') }"
        class="esignImgbox" :src="formData.store_manager.manager_signature" />
      <div class="tr">
        <div class="esignBtn" @click="handleReset('manager_signature')" v-if="!isDone">
          Clear
        </div>
        <div v-if="!isDone" class="esignBtn" @click="handleGenerate('manager_signature', 'store_manager')">
          Confirm
        </div>
      </div>
      <van-field v-model="formData.store_manager.Name" id="2reset2" name="Name" autocomplete="off" center type="text"
        oninput="
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);" label="Name" placeholder="Please enter the Name" />

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

      <!-- <van-button v-if="!isDone" round block type="info" native-type="submit" color="#7C655D">
        {{ from == "create" ? "Next / Save" : "Next / Save" }}
      </van-button> -->

      <van-button v-click-outside="outSide" :disabled="selectData" v-if="!isDone" round block type="info" native-type="submit" color="#7C655D">
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
import { kyc_formAagt, getOrdersForms, putOrdersForms, getOrderDetail } from "@/api/order";
import Vue from 'vue';
import ClickOutside from 'vue-click-outside'
export default {
  props: ['orderDataInfo'],
  data() {
    return {
      selectData:false,
      pattern: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,// 正则验证时间
      formData: {
        // settlor_type:1,
        settlor: {
          //Full:  this.$route.query.campanyIndividualName == undefined || this.$route.query.campanyIndividualName === 'undefined' ? "": this.$route.query.campanyIndividualName.name,
          New: this.$store.state.passport_noAagt,
          Old: '',
          Full: this.$store.state.campanyIndividualName1Aagt,
          Malaysian: 1,
          Nationality: '',
        },
        settlor_non_malaysia: {
          Religion: '',
          Race: '',

          RaceOthers: '',
          ReligionOthers: '',
          Date: this.$store.state.born_dateAagt,
          Gender: '',
          Country: '',
          Marital: '',
          // Passport: this.$store.state.passport_noAagt,
          Passport: '',
          Passport2: '',
          Passport3: '',
        },

        settlor_contact_details: {
          Email: this.$store.state.emailAagt,
          Mobile: this.$store.state.phoneAagt,
          Home: '',
          Office: this.$store.state.office_noAagt,
          Residential_type: '',
          Residential: this.$store.state.addressAagt,
          Postcode: '',
          Country: '',
          Length: '',
          Mailing: '',
          Postcode2: '',
          Country2: '',
        },
        spouse: {
          New: this.$store.state.COMPANY_NOAagt,
          Old: '',
          Full:  this.$store.state.benificary_nmeAagt,
          Malaysian: '',
          Nationality: '',
        },
        spouse_non_malaysia: {
          Race: '',
          Religion: '',
          RaceOthers: '',
          ReligionOthers: '',
          Passport: '',
          Passport2: '',
          Passport3: '',
          Date: '',
          Country: '',
          Gender: '',
          Marital: '',
        },

        spouse_contact_details: {
          Email: '',
          Mobile: '',
          Home: '',
          Office: '',
          Residential_type: '',
          Residential: '',
          Postcode: '',
          Country: '',
          Length: '',
          Mailing: '',
          Postcode2: '',
          Country2: '',
        },

        settlor_occupation: {
          Occupation: '',
          Occupation2: this.$store.state.occupationAagt,
          Industry: '',
          Name: '',
          Nature: '',
          Annual: '',
        },
        spouse_occupation: {
          Occupation: [],
          Occupation2: '',
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

        },
       
        bank_one: {
          Bank: this.$store.state.bank_oneBank,
          Account:this.$store.state.bank_oneAccount,
          Account2: this.$store.state.bank_oneAccount2,
          Transaction: '',
          Years: '',
          Mode: ''
        },
        bank_two: {
          Bank: this.$store.state.bank_twoBank,
          Account:this.$store.state.bank_twoAccount,
          Account2: this.$store.state.bank_twoAccount2,
          Transaction: '',
          Years: '',
          Mode: '',
        },

        ecp: {
          Name: '',
          NRIC_PASSPORT_NO: '',
          DOB: '',
          RELATIONSHIP: '',
          CONTACT_NO: '',
          EMAIL: '',
        },
        declaration: {
          Date: moment(new Date()).format('DD-MM-YYYY'),
          Name: this.$store.state.campanyIndividualName1Aagt,
          signature: '',
        },

        client_details: {
          IsPhotocopy: '',
          IsPhotocopyComment: '',
          IsWillingness: '',
          IsWillingnessComment: '',
          OnBoarding: '',
          OnBoardingComment: '',
          Non: '',
          Face: '',
        },
        interaction: [{
          Date: '',
          Time: '',
          Place: '',
          Comment: '',
        }], // Add

        assessment_of_client: {
          Risk: "",
          RiskComment: '',
          Any: '',
          Recommended: '',
          RecommendedComment: '',
          Remark: '',
        },

        advisor: {

          Date: moment(new Date()).format('DD-MM-YYYY'),
          Name: sessionStorage.getItem("user_name"),
          Advisor_Code: sessionStorage.getItem("user_id"),
          advisor_signature: '',
        },

        store_manager: {

          Date: moment(new Date()).format('DD-MM-YYYY'),
          Name: '',
          manager_signature: '',
        }
      },
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
      bank2: false
    };
  },
  mounted() {
    console.log("...................kkkk.....",this.$store.state.editStatus)
    //  this.$forceUpdate();
    console.log(this.$store.state.campanyIndividualName1, "222222yyyyy");
    if (this.$store.state.isOverseaSignature) {

      this.from = "create"
      this.isFilled = 0
    } else {
      this.from = this.$route.query.from;
      this.isFilled = this.$route.query.isFilled;
      this.isDone = this.$route.query.status == 1 ? true : false;
    }
    if (this.$route.query.isShare) {
      this.isFilled = this.$route.query.AagtKycQuestionnaireForm
    }
    this.getFormData();
    this.isDone = sessionStorage.getItem('orderStatus') === '2'

    if (this.formData.bank_two.Bank === '') {
              this.bank2 = false
            }
            else {
              this.bank2 = true
            }


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

              this.formData.settlor.New = res.passport_no
              this.formData.settlor.Full = res.name

              this.formData.settlor_non_malaysia.Date = res.born_date
              this.formData.settlor_non_malaysia.Passport = res.passport_no

              this.formData.settlor_contact_details.Email = res.email
              this.formData.settlor_contact_details.Mobile = res.phone
              this.formData.settlor_contact_details.Office = res.office_no
              this.formData.settlor_contact_details.Residential = res.address

              this.formData.settlor_occupation.Occupation2 = res.occupation

              this.formData.bank_one.Bank = res.bank

              this.formData.declaration.Date = moment(new Date()).format('DD-MM-YYYY')
              this.formData.declaration.Name = res.name

              this.formData.advisor.Date = moment(new Date()).format('DD-MM-YYYY')
              this.formData.advisor.Name = sessionStorage.getItem("user_name")
              this.formData.advisor.Advisor_Code = sessionStorage.getItem("user_id")

              this.formData.store_manager.Date = moment(new Date()).format('DD-MM-YYYY')

            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }




    if (this.$store.state.reorder == 1) {

      if (this.$store.state.reorderkyc_formAagt > 0) {
        getOrdersForms(this.$store.state.reorderkyc_formAagt, { type: "AAGT KYC Form" })
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
            // res.spouse = {
            //   Full: this.$store.state.benificary_nme,
            //   Other: '',
            //   New: this.$store.state.COMPANY_NO,
            //   Old: '',
            //   Nationality: '',
            // };
            res.bank_one = {
              Bank: "",
              Account: "",
              Account2: "",
              Transaction: '',
              Years: '',
              Relationship: '',
              Mode: '',
            };
            res.bank_two = {
              Bank: '',
              Account: '',
              Account2: '',
              Transaction: '',
              Years: '',
              Relationship: '',
              Mode: '',
            };
            // var reOrderParticulars = []
            // for (var i = 0; i < res.document_checklist.Particulars.length; i++) {
            //   if (res.document_checklist.Particulars[i] == 1 || res.document_checklist.Particulars[i] == 2) {
            //     //  var spliced = arr.splice(i, 1);
            //     // console.log("Removed element: " + spliced);
            //     // console.log("Remaining elements: " + arr);
            //     //
            //     //  alert(res.document_checklist.Particulars[i] )
            //     reOrderParticulars.push(res.document_checklist.Particulars[i])
            //   }
            // }
            // console.log("***************reOrderParticulars***************", reOrderParticulars)
            // res.document_checklist.Particulars = reOrderParticulars
            res.declaration.signature = "";
            res.declaration.Date = moment(new Date()).format('DD-MM-YYYY')




            res.client_details.OnBoarding = "";
            res.client_details.OnBoardingComment = "";
            res.client_details.IsWillingness = "";
            res.client_details.IsWillingnessComment = "";


            res.client_details.Face = "";
            res.client_details.Non = "";


            res.interaction = [{
              Date: '',
              Time: '',
              Place: '',
              Comment: '',
            }];
            res.assessment_of_client = {
              Any: [],
              Please: '',
              Risk: '',
              Any2: '',
              Recommended: '',
              Please2: '',
              Remark: '',
            };

            res.advisor.advisor_signature = ''
            res.advisor.Date = moment(new Date()).format('DD-MM-YYYY')

            res.store_manager.manager_signature = ''
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
    // moblie validation
    //     <van-button class="esignBtn" :style="{ display: 'block'}" id="addBankId" native-type="button" @click="addBank">Add Bank</van-button>
    // <van-button class="esignBtn" :style="{ display: 'none'}" id="removeBankId" native-type="button" @click="removeBank">Remove Bank</van-button>
    // <div :style="{ display: 'none'}" id="bank2Id">

    addBank() {
      this.bank2 = true

    },
    removeBank() {
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
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[0-9]+$/.test(char)) return true;
      else e.preventDefault();
    },
    // 如果已填 獲取數據
    getFormData() {
      //    alert("1")
      if (this.isFilled > 0) {
        getOrdersForms(this.isFilled, { type: "AAGT KYC Form" })
          .then((res) => {
            //alert("2")
            delete res.id
            delete res.order_id
            delete res.created_at
            delete res.updated_at
            console.log(res, 'shabin');
            for (let key in res) {
              // if(key != "settlor_type")
              // {
                res[key] = JSON.parse(res[key])
             // }
              
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

          //  this.formData.c_two_yes.Relationship = (this.formData.c_two_yes.Relationship === '' ? [] : this.formData.c_two_yes.Relationship)
            // this.formData.spouse_non_malaysia.Marital = (this.formData.spouse_non_malaysia.Marital === '' ? [] : this.formData.spouse_non_malaysia.Marital)
            // this.formData.spouse_non_malaysia.Gender = (this.formData.spouse_non_malaysia.Gender === '' ? [] : this.formData.spouse_non_malaysia.Gender)
           // this.formData.spouse_occupation.Occupation = (this.formData.spouse_occupation.Occupation === '' ? [] : this.formData.spouse_occupation.Occupation)
         //   this.formData.assessment_of_client.Any = (this.formData.assessment_of_client.Any === '' ? [] : this.formData.assessment_of_client.Any)

            if (this.formData.bank_two.Bank === '') {
              this.bank2 = false
            }
            else {
              this.bank2 = true
            }


            //this.formData.settlor_type = this.formData.settlor_type === 'individual' ? 1:2
        

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
  //    alert("hshsg")
      this.selectData = true
      console.log(form, "form");
      if (!this.formData.advisor.advisor_signature && !this.$route.query.isShare) {
        this.$toast.fail("Please sign your name");
        return;
      }
       if (!this.formData.declaration.signature && this.$route.query.isShare ) {
        this.$toast.fail("Please sign your name");
        return;
      }
      // if (!this.formData.advisor.advisor_signature && !this.$store.state.isOverseaSignature) {
      //   this.$toast.fail("Please sign your name");
      //   return;
      // }
      // if (!this.formData.store_manager.manager_signature && !this.$store.state.isOverseaSignature && !this.$route.query.isShare && this.$store.state.isOverseaSignatureRemote == false ) {
      //   this.$toast.fail("Please sign your name");
      //   return;
      // }
      // if (!this.formData.declaration.signature && this.$store.state.isOverseaSignature == false && this.$store.state.isOverseaSignatureRemote == false ) {
      //   this.$toast.fail("Please sign your name");
      //   return;
      // }
      // else if (!this.formData.store_manager.manager_signature) {
      //   this.$toast.fail("Please sign your name");
      //   return;
      // }
      let data = JSON.parse(JSON.stringify(this.formData));
      data.spouse_occupation.Occupation = (this.formData.spouse_occupation.Occupation.toString())
      // data.assessment_of_client.Any = (this.formData.assessment_of_client.Any.toString())
      data.c_two_yes.Relationship = data.c_two_yes.Relationship.toString()
      // data.spouse_non_malaysia.Marital = data.spouse_non_malaysia.Marital.toString()
      // data.spouse_non_malaysia.Gender = data.spouse_non_malaysia.Gender.toString()
      // if(data.settlor_type == 1){
      //   data.settlor_type = 'individual'
      // }else{
      //   data.settlor_type = 'organization'
      // }
      //   data.spouse_occupation.Occupation = data.spouse_occupation.Occupation.toString()
      //this.formData.c_two_yes.Relationship.toString()
      console.log(">>>>>>>...", data)
      // data.document_checklist.Documents = this.Documents[0].url
      // data.settlor = JSON.stringify(data.settlor)
      for (let key in data) {
        //if(key != "settlor_type")
        // {
          data[key] = JSON.stringify(data[key])
       // }
        
      }
      console.log(">>>>>>>.2.data.", data)
     // console.log(">>>>>>>.2.settlor_type.", data.settlor_type)
      // data.witness_phone = this.areaCode.split(" ")[0] + this.phone;
      if (this.isFilled > 0) {
        // 修改
        putOrdersForms(this.isFilled, {
          type: "AAGT KYC Form",
          data: JSON.stringify(data),
        }).then((res) => {
          console.log(res, "---------A--------修改kyc成功------A-----");
          this.$toast({
            type: "success",
            message: "Modify the success",
          });
          if (!this.$route.query.isShare && !this.$store.state.isOverseaSignature) {
            this.$router.go(-1);
          }

        });
        if(this.$store.state.isOverseaSignature){
          this.$emit('onSelect6')
        }
       
        if(this.$route.query.isShare){
          this.$emit('onSelect4')
        }
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
        console.log("--------www--------", id)
        kyc_formAagt(id, data)
          .then((res) => {
            console.log("----222---2--2--2-2---", res);
            this.isFilled = res.AagtKycQuestionnaireForm
            this.$toast({
              type: "success",
              message: "Submitted successfully",
            });
            if (this.from == "create") {
              this.$store.commit("changePage", {
                tabbar: "/LetterOfWishesAagtA",
                title: "3/5 Letter Of Wishes",
              });
              if (!this.$store.state.isOverseaSignature && !this.$route.query.isShare) {
                this.$router.push({
                  path:
                    "/LetterOfWishesAagt?from=create&orderId=" +
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
      if (val == 'advisor_signature') {

        this.sig2 = true
        this.xyz1 = ""
        this.formData.advisor.advisor_signature = ''
        document.getElementById("2reset3").focus()
      }
      if (val == 'manager_signature') {

        this.sig3 = true
        this.xyz2 = ""
        this.formData.store_manager.manager_signature = ''
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
      // if ( (this.$store.state.isOverseaSignature ==false && this.$store.state.isOverseaSignatureRemote == false) || val === "advisor_signature" || val === "manager_signature") {
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
            // this.$refs['manager_signature'].resultImg=that.formData[val2][val]
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
      // else {
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
