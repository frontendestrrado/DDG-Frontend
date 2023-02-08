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
      <div class="minTitle">PRIVACY NOTICE</div>
      12 December 2022
      <div class="contentText">
        Last updated on (12 December 2022)

      </div>
      <div class="contentText">
        DDG International Berhad and/or any of its subsidiaries, related companies, associates, affiliates, jointly
        controlled entities, shareholders and any other entities within the group (“DDG”, “we” or us”) value and respect
        the privacy rights of all our customers across all aspects of our business and we strive to protect your
        Personal Data in compliance with the laws of Malaysia. Therefore, we strongly encourage you to read this Privacy
        Notice (“Notice”) which is issued pursuant to the Personal Data Protection Act 2010 (“Act”) carefully to
        understand our policies and practices regarding your Personal Data and how we will treat it. In essence, this
        Notice explains
      </div>
      <div class="contentText">
        1. The Personal Data that we collect about you;

      </div>
      <div class="contentText">
        2. How we collect your Personal Data;

      </div>
      <div class="contentText">
        3. How we use your Personal Data;
      </div>
      <div class="contentText">
        4. Disclosure of your Personal Data; and
      </div>
      <div class="contentText">
        5. Your Right.
      </div>
      <div class="contentText">
        Unless stated otherwise, the words used herein shall have the same meaning and definition as stated in the Act.
      </div>





      <div class="minTitle">
        1. THE PERSONAL DATA THAT WE COLLECT
      </div>


      <div class="contentText">
        When you engage any of our services and/or send in any enquiries to us, we would or may need to or may collect,
        record, hold, store, use and/or carry out any operation on including organising, consulting on or disclosing
        your Personal Data. Please note that if we are not provided with all the Personal Data that we require, we may
        not be able to provide you with our services or continue to provide you with our services.

      </div>
      <div class="contentText">
        The Personal Data that we collect may include, but not limited to, your name, national registration identity
        card number, nationality, passport number, address, email address, phone number, date of birth, age, gender,
        race, marital status, photograph, bank account details, details of your family members, details of your income,
        employment details and criminal records. If necessary, we may collect sensitive Personal Data including but not
        limited to physical or mental health condition and your religious belief.

      </div>
      <div class="contentText">
        We collect this information only with your consent and/or in strict compliance with applicable laws. If you are
        a company, we may collect data including, but not limited to, company registration number, phone and/or fax
        number, business and/or registered address, financial records, and/or your employees’ Personal Data. In respect
        of your employees’ Personal Data, you are under the obligation to obtain the consent of the employees before
        providing us with the employees’ Personal Data of which we rely solely on your representation and declaration
        that such consent has been obtained.

      </div>
      <div class="minTitle">
        2. HOW WE COLLECT YOUR PERSONAL DATA

      </div>
      <div class="contentText">
        We collect your Personal Data through information or comments you have provided to us by whatsoever means and/or
        in whatsoever manner and/or through information obtained independently by us or given to us from other lawful
        sources as well as any information about you that has been or may be collected, stored, used and processed by us
        from time to time.

      </div>
      <div class="contentText">
        The provision of your Personal Data is voluntary. However, if you do not provide us your Personal Data, we will
        not be able to provide you with our services.

      </div>
      <div class="contentText">
        We may also collect your Personal Data from your employer where the services we provide are related to your
        employer-employee relationship and we may collect your Personal Data from your employees. We may also obtain
        your Personal Data from third parties (including but not limited to, information from your referees, public
        records, or background check agencies who may be engaged to provide us with your Personal Data, including
        information regarding past criminal record(s), if any). In addition to the above, we may also collect your
        Personal Data from any third-party that you have authorised to disclose your Personal Data to us including but
        not limited to third party social networks and advertising networks.
      </div>

      <div class="minTitle">
        3. HOW WE USE YOUR PERSONAL DATA

      </div>
      <div class="contentText">
        We will use your Personal Data for the following purposes including but not limited to:
      </div>
      <div class="contentText">
        (a) for and/or in connection with the conduct of business and provision of services;
      </div>
      <div class="contentText">
        (b) for and/or in connection with pursuing the legitimate interests of DDG including processing which is
        necessary and incidental to the carrying out of the conduct of the business of DDG;
      </div>
      <div class="contentText">
        (c) for and/or in connection with complying with laws and regulations including requirements of any government
        or quasi-government or regulatory authorities or court of law;


      </div>
      <div class="contentText">
        (d) for and/or in connection with all other purposes necessary and/or incidental to our business and all
        purposes necessary for or related to any of the above purposes;
      </div>
      <div class="contentText">
        (e) general business and administrative purposes;
      </div>
      <div class="contentText">
        (f) Providing you with information about goods or services including marketing communications, campaigns or
        promotions;
      </div>
      <div class="contentText">
        (g) Offering or providing related services, including our own value-add services or services of our
        business/strategic/collaborative partners with whom we may collaborate with;
      </div>
      <div class="contentText">
        (h) Conducting due diligence and background checks (including financial and criminal records check), or carrying
        out any other monitoring or screening activities or risk management procedures that may be required by law or
        that may have been put in place by us;
      </div>

      <div class="contentText">

        (i) Conducting credit evaluation with any credit reporting agencies; and

      </div>
      <div class="contentText">
        (j) any purposes required or permitted by any laws, regulations, guidelines, and/or relevant regulatory
        authorities.
      </div>


      <div class="minTitle">
        4. DISCLOSURE OF YOUR PERSONAL DATA

      </div>
      <div class="contentText">
        We may disclose your Personal Data to our subsidiaries, related companies, associates, affiliates, jointly
        controlled entities, shareholders and any other entities within the group.
      </div>
      <div class="contentText">
        In addition to the above, we may also share your Personal Data with the following types of third parties:
      </div>
      <div class="contentText">
        (a) Business/strategic/collaborative partners: They are external parties whom we may collaborate with to provide
        value-added or better services.
      </div>
      <div class="contentText">
        (b) Service providers: They are external parties that we use/engage to help us run our business (e.g. order
        fulfilment, payment processing, fraud detection and identity verification, website operation, support services,
        promotions, website development, data analysis, etc.).
      </div>
      <div class="contentText">
        (c) Credit reporting agencies and debt collectors: To the extent permitted by applicable law, we engage credit
        reporting agencies and debt collectors who are external parties to verify your creditworthiness or to collect
        outstanding invoices.
      </div>
      <div class="contentText">
        (d) Third party recipients in connection with any corporate exercises such as any proposed or actual mergers
        and/or acquisitions, joint venture, investment or funding exercise, asset sale or for any other matter of such
        nature.
      </div>
      <div class="contentText">
        (e) Professional advisors: As part of our operation and management processes, we engage professional advisors
        such as lawyers, auditors, accountants and consultants to carry out professional works.
      </div>
      <div class="contentText">
        (f) Enforcement authorities: As and when required by applicable law, we may disclose your Personal Data to
        enforcement authorities for the purposes of investigation.
      </div>

      <div class="minTitle">
        5. RETENTION OF YOUR PERSONAL DATA

      </div>

      <div class="contentText">
        In accordance with applicable laws, we will use your Personal Data for as long as necessary to satisfy the
        purposes for which your Personal Data was collected or to comply with applicable legal requirements.
      </div>

      <div class="minTitle">
        6. STORAGE OF YOUR PERSONAL DATA

      </div>

      <div class="contentText">
        We use appropriate measures to keep your Personal Data confidential and secure. Please note, however, that these
        protections do not apply to information you choose to share in public areas such as third party social networks.
      </div>
      <div class="contentText">
        Your Personal Data will be processed by our authorised staff or agents, on a need to know basis, depending on
        the specific purposes for which your Personal Data have been collected. We take reasonable steps to keep your
        Personal Data secure and protect it from loss, misuse, or unauthorised alteration. Any of the Personal Data you
        electronically provide to us are stored on secure servers. We also maintain a reasonable physical security
        procedure to manage and protect the use and storage of records containing Personal Data.
      </div>
      <div class="contentText">
        We may need to transfer your Personal Data within our group, and to third parties as noted in Section 4 above,
        in connection with the purposes set out in this Notice. For this reason, we may transfer your Personal Data to
        other countries that may have different laws and data protection compliance requirements to those that apply in
        Malaysia.
      </div>
      <div class="minTitle">
        7. YOUR RIGHT

      </div>
      <div class="minTitle">
        (a) To request access to your Personal Data

      </div>

      <div class="contentText">
        You have the right to access, review and request a physical or electronic copy of your Personal Data. Such
        request can be made by way of contacting us at:
      </div>
      <div class="contentText">
        Contact Person: Personal Data Protection Officer
      </div>
      <div class="contentText">
        Address: No. 11-2, Jalan Kampung Jawa, Off Bagan Luar, 12000 Butterworth, Pulau Pinang, Malaysia.
      </div>
      <div class="contentText">
        Or
      </div>
      <div class="contentText">
        Web Form: https://ddgtrust.com
      </div>
      <div class="contentText">
        Or
      </div>
      <div class="contentText">
        Call us: +6016-5535691
      </div>
      <div class="contentText">
        Or
      </div>
      <div class="contentText">
        Email us: info@ddgint.com
      </div>
      <div class="contentText">

        If the request is submitted by a person other than you, without providing evidence that the request is
        legitimately made on your behalf, the request will be rejected. Please note that any identification information
        provided to us will only be processed in accordance with, and to the extent permitted by applicable laws.

      </div>
      <div class="minTitle">
        (b) To request correction or limit the use of your Personal Data

      </div>
      <div class="contentText">
        Where provided by law, you can (i) request deletion, the portability, correction or revision of your Personal
        Data; (ii) limit the use and disclosure of your Personal Data; and (iii) revoke consent to any of our data
        processing activities. Such request can be made by contacting us at any of the methods stated in paragraph (a)
        above.
      </div>
      <div class="contentText">
        However, please note that, in certain circumstances, we may be required to retain some of your Personal Data
        after you have requested deletion, to satisfy our legal or contractual obligations. We may also be permitted by
        applicable laws to retain some of your Personal Data to satisfy our business needs.
      </div>
      <div class="minTitle">
        8. CHANGES TO OUR PRIVACY POLICY
      </div>
      <div class="contentText">
        We review and update this Privacy Notice from time to time to reflect the changes in law and business practices.
        We would advise you to obtain the latest version of our Privacy Notice by contacting us or visiting our website
        to ensure that you are familiar with the latest version. By continuing to instruct us after communication of our
        latest Privacy Notice, you are deemed to have accepted and consented to the revision and update contained
        therein.
      </div>
      <div class="minTitle">
        9. CONTACT US
      </div>
      <div class="contentText">
        Should you require further information about the Personal Data we hold or the way in which your information is
        being collected or used which are not answered by this Privacy Notice, please contact or write to us at:
      </div>
      <div class="contentText">
        Contact Person: Personal Data Protection Officer
      </div>
      <div class="contentText">
        Address: No. 11-2, Jalan Kampung Jawa, Off Bagan Luar, 12000 Butterworth, Pulau Pinang, Malaysia.
      </div>
      <div class="contentText">
        Or
      </div>
      <div class="contentText">
        Web Form: https://ddgtrust.com
      </div>
      <div class="contentText">
        Or
      </div>
      <div class="contentText">
        Call us: +6016-5535691
      </div>
      <div class="contentText">
        Or
      </div>
      <div class="contentText">
        Email us: info@ddgint.com
      </div>


      <div class="minTitle">
        ACKNOWLEDGMENT AND CONSENT
      </div>
      <div class="contentText">
        I have read this Privacy Notice and understand the reasons for the collection of my Personal Data and the ways
        in which the data may be used and disclosed. I have been provided with a copy of this Privacy Notice and/or have
        been informed of the matters therein.
      </div>
      <div class="contentText">
        I am also aware that I can access and correct my Personal Data on request and if necessary. However, I
        understand that if, in exceptional circumstances, access is denied for legitimate purposes, that the reasons for
        this and possible remedies will be made available to me.
      </div>
      <div class="contentText">
        I have read the above information and by signing and returning a copy of this Privacy Notice, I expressly agree
        and consent to the use, processing, disclosure and transfer of my Personal Data by DDG. Should there be a need
        to retract my consent on processing my Personal Data, I shall write a notice to DDG to cease the processing of
        my Personal Data.
      </div>
      <div class="contentText">
        In respect of Personal Data of third parties, I hereby confirm that I have obtained the consent from the
        person(s) whose Personal Data may be given to you by me or identified from my Personal Data which may be
        processed by DDG for the purposes stated in this Privacy Notice including disclosure to the parties stated in
        the Privacy Notice.
      </div>

      <!-- <div class="contentText">
         Or
      </div>  -->

      <!-- <van-radio-group v-model="formData.have_high_risk" direction="horizontal">
        <van-radio :name="1">I agree to receive communication on marketing and promotion via email, phone calls, text
          messages and/or newsletters.</van-radio>

      </van-radio-group> -->

      <van-field name="eng_agreement"  :required="true"
        :rules="[{ required: true }]" center>
        <template #input>
          <van-checkbox v-model="formData.eng_agreement">I agree to receive communication on marketing and promotion via email, phone calls, text
          messages and/or newsletters.</van-checkbox>
        </template>
      </van-field>



      <div class="tl">Signature</div>

      <vue-esign ref="esign" v-show="sig1" :width="800" :height="300" :isCrop="false"
        :lineWidth="6" lineColor="#000000" bgColor.sync="#fff" style="border: 1px solid #666" />
      <van-image v-show="!sig1" class="esignImgbox"
        :src="formData.eng_signature" />
      <div class="tr">
        <div class="esignBtn" @click="handleReset()" v-if="!isDone">Clear</div>
        <div class="esignBtn" @click="handleGenerate()" v-if="!isDone">Confirm</div>
      </div>

      <van-field v-model="formData.eng_name" autocomplete="off" name="eng_name" center type="text" label="Name"
        placeholder="Please enter the Name" :required="true" :rules="[{ required: true }]" />
      <van-field v-model="formData.eng_nric_passport_no"  autocomplete="off" name="eng_nric_passport_no" center type="text" label="NRIC/Passport No."
        placeholder="Please enter the NRIC/Passport No." :required="true" :rules="[{ required: true }]" />

      <van-field v-model="formData.eng_date" autocomplete="off" name="eng_date" center type="text" label="Date" placeholder="Please enter the Date"
        :required="true" :rules="[{ pattern, message: 'Please enter the DATE ' }]" />


    </div>

<div :id="'malId'" :style="{ display: 'none' }">
  <div class="minTitle">NOTIS PRIVASI</div>
      12 December 2022
      <div class="contentText">
        Dikemas kini pada  (12 December 2022)

      </div>
      <div class="contentText">
        DDG International Berhad dan/atau mana-mana anak syarikatnya, syarikat berkaitan, syarikat bersekutu, entiti dikawal bersama, pemegang saham dan mana-mana entiti lain dalam kumpulannya (“DDG” atau “kami”) menghargai dan menghormati hak privasi semua pelanggan kami dari semua aspek perniagaan kami dan kami berusaha untuk melindungi Data Peribadi anda sementara mematuhi undang-undang Malaysia. Oleh itu, kami menggalakkan anda membaca Notis Privasi (“Notis”) ini yang dikeluarkan menurut Akta Perlindungan Data Peribadi 2010 (“Akta”) dengan teliti untuk memahami dasar dan amalan kami berkenaan Data Peribadi anda dan bagaimana kami mengendalikan Data Peribadi anda. Secara rumusan, Notis ini menerangkan
      </div>
      <div class="contentText">
        1.	Data Peribadi yang kami kumpulkan mengenai anda;

      </div>
      <div class="contentText">
        2.	Bagaimana kami mengumpul Data Peribadi anda;

      </div>
      <div class="contentText">
        3.	Bagaimana kami menggunakan Data Peribadi anda;
      </div>
      <div class="contentText">
        4.	Pendedahan Data Peribadi anda; dan
      </div>
      <div class="contentText">
        5.	Hak anda.
      </div>
      <div class="contentText">
        Melain dinyatakan sebaliknya, perkataan yang digunakan di sini mempunyai makna dan takrifan yang sama seperti yang dinyatakan dalam Akta.
      </div>





      <div class="minTitle">
        1.	DATA PERIBADI YANG KAMI KUMPUL
      </div>


      <div class="contentText">
        Apabila anda menggunakan mana-mana perkhidmatan kami dan/atau mengemukakan sebarang pertanyaan, kami akan atau perlu atau mungkin mengumpul, merekod, menahan, menyimpan, menggunakan dan/atau menjalankan sebarang operasi termasuk mengatur, berunding atau mendedahkan Data Peribadi anda. Sila ambil perhatian bahawa jika kami tidak diberikan semua Data Peribadi yang kami perlukan, kami mungkin tidak dapat memberikan atau terus memberikan perkhidmatan kami kepada anda.

      </div>
      <div class="contentText">
        Data Peribadi yang kami kumpulkan termasuk, tetapi tidak terhad kepada, nama, nombor kad pengenalan, kewarganegaraan, nombor pasport, alamat, alamat e-mel, nombor telefon, tarikh lahir, umur, jantina, bangsa, status perkahwinan, gambar, butiran akaun bank, butiran ahli keluarga anda, butiran pendapatan anda, butiran pekerjaan dan rekod jenayah. Jika perlu, kami mungkin mengumpul Data Peribadi yang sensitif termasuk tetapi tidak terhad kepada keadaan kesihatan fizikal atau mental dan kepercayaan agama anda.

      </div>
      <div class="contentText">
        Kami mengumpul maklumat ini hanya dengan persetujuan anda dan/atau dengan mematuhi undang-undang yang terpakai. Jika anda ialah sebuah syarikat, kami mungkin mengumpul data termasuk, tetapi tidak terhad kepada, nombor pendaftaran syarikat, nombor telefon dan/atau faks, alamat perniagaan dan/atau berdaftar, rekod kewangan dan/atau Data Peribadi pekerja anda. Berkenaan dengan Data Peribadi pekerja anda, anda bertanggungjawab untuk mendapatkan persetujuan pekerja anda sebelum memberikan kami Data Peribadi pekerja yang mana kami bergantung sepenuhnya pada representasi dan pengisytiharan anda bahawa persetujuan tersebut telah diperolehi.

      </div>
      <div class="minTitle">
        2.	BAGAIMANA KAMI MENGUMPUL DATA PERIBADI ANDA

      </div>
      <div class="contentText">
        Kami mengumpul Data Peribadi anda melalui maklumat atau ulasan yang anda berikan kepada kami dengan apa cara sekalipun dan/atau dalam apa jua cara dan/atau melalui maklumat yang diperoleh secara bebas oleh kami atau diberikan kepada kami daripada sumber sah lain serta sebarang maklumat tentang anda yang telah atau mungkin dikumpul, disimpan, digunakan dan diproses oleh kami dari semasa ke semasa.

      </div>
      <div class="contentText">
        Pemberian Data Peribadi anda adalah secara sukarela. Walau bagaimanapun, jika anda tidak memberikan kami Data Peribadi anda, kami mungkin tidak dapat memberikan perkhidmatan kami kepada anda.
      </div>
      <div class="contentText">
        Kami juga mungkin mengumpul Data Peribadi anda daripada majikan anda di mana perkhidmatan yang kami sediakan berkaitan dengan hubungan majikan-pekerja anda dan kami mungkin mengumpul Data Peribadi anda daripada pekerja anda. Kami juga mungkin memperolehi Data Peribadi anda daripada pihak ketiga (termasuk tetapi tidak terhad kepada, maklumat daripada perujuk anda, rekod awam, atau agensi pemeriksaan latar belakang yang mungkin terlibat untuk memberikan kami Data Peribadi anda, termasuk maklumat mengenai rekod jenayah lampau, jika ada). Sebagai tambahan kepada perkara di atas, kami juga mungkin mengumpul Data Peribadi anda daripada mana-mana pihak ketiga yang anda telah beri kuasa untuk mendedahkan Data Peribadi anda kepada kami termasuk tetapi tidak terhad kepada rangkaian sosial dan rangkaian pengiklanan pihak ketiga.
      </div>

      <div class="minTitle">
        3.	BAGAIMANA KAMI MENGGUNA DATA PERIBADI ANDA

      </div>
      <div class="contentText">
        Kami akan menggunakan Data Peribadi anda untuk tujuan berikut termasuk tetapi tidak terhad kepada:
      </div>
      <div class="contentText">
        (a)	untuk dan/atau berkaitan dengan pengendalian perniagaan dan penyediaan perkhidmatan;
      </div>
      <div class="contentText">
        (b)	untuk dan/atau berkaitan dengan mengejar kepentingan sah DDG termasuk pemprosesan yang perlu dan bersampingan dengan perniagaan DDG;
      </div>
      <div class="contentText">
        (c)	untuk dan/atau berkaitan dengan pematuhan undang-undang dan peraturan termasuk keperluan mana-mana kerajaan atau separa kerajaan atau pihak berkuasa kawal selia atau mahkamah;


      </div>
      <div class="contentText">
        (d)	untuk dan/atau berkaitan dengan semua tujuan lain yang perlu dan/atau bersampingan dengan perniagaan kami dan semua tujuan yang perlu untuk atau berkaitan dengan mana-mana tujuan di atas;
      </div>
      <div class="contentText">
        (e)	untuk tujuan perniagaan am dan pentadbiran;
      </div>
      <div class="contentText">
        (f)	Memberi anda maklumat tentang barangan atau perkhidmatan termasuk komunikasi pemasaran, kempen atau promosi;
      </div>
      <div class="contentText">
        (g)	Menawarkan atau menyediakan perkhidmatan berkaitan, termasuk perkhidmatan value added kami sendiri atau perkhidmatan rakan kongsi perniagaan/strategik/kolaboratif kami yang mungkin bekerjasama dengan kami;
      </div>
      <div class="contentText">
        (h)	Menjalankan due diligence dan semakan latar belakang (termasuk semakan rekod kewangan dan jenayah), atau menjalankan sebarang aktiviti pemantauan atau penyaringan lain atau prosedur pengurusan risiko yang mungkin diperlukan oleh undang-undang atau yang mungkin telah dilaksanakan oleh kami;
      </div>

      <div class="contentText">

        (i)	Menjalankan penilaian kredit dengan mana-mana agensi pelaporan kredit; dan

      </div>
      <div class="contentText">
        (j)	Apa-apa tujuan yang diperlukan atau dibenarkan oleh mana-mana undang-undang, peraturan, garis panduan, dan/atau pihak berkuasa yang berkaitan.
      </div>


      <div class="minTitle">
        4.	PENDEDAHAN DATA PERIBADI ANDA

      </div>
      <div class="contentText">
        Kami mungkin mendedahkan Data Peribadi anda kepada anak syarikat kami, syarikat berkaitan, sekutu, entiti dikawal bersama, pemegang saham dan mana-mana entiti lain dalam kumpulan kami.
      </div>
      <div class="contentText">
        Di samping itu, kami juga mungkin berkongsi Data Peribadi anda dengan jenis pihak ketiga berikut:
      </div>
      <div class="contentText">
        (a)	Rakan-rakan kongsi perniagaan/strategik/kolaboratif: Mereka ialah pihak ketiga yang mungkin bekerjasama dengan kami untuk membekalkan perkhidmatan yang lebih baik atau yang value added.
      </div>
      <div class="contentText">
        (b)	Pembekal-pembekal perkhidmatan: Mereka ialah pihak ketiga yang kami gunakan/terlibat untuk membantu kami menjalankan perniagaan kami (seperti pemenuhan pesanan, pemprosesan pembayaran, pengesanan penipuan dan pengesahan identiti, operasi laman web, syarikat penyelidikan pasaran, perkhidmatan sokongan, promosi, pembangunan laman web, analisis data, dan lain-lain).
      </div>
      <div class="contentText">
      
(c)	Agensi-agensi pelaporan kredit dan pemungut-pemungut hutang: Setakat yang dibenarkan oleh undang-undang yang berkenaan, kami melibatkan agensi-agensi pelaporan kredit dan pemungut-pemungut hutang yang merupakan pihak ketiga untuk mengesahkan kelayakan kredit anda atau untuk mengutip invois-invois tertunggak.

      </div>
      <div class="contentText">
        (d)	Penerima-penerima pihak ketiga berkaitan dengan mana-mana aktiviti-aktiviti korporat seperti sebarang cadangan atau penggabungan dan/atau pengambilalihan, usaha sama, pelaburan atau pembiayaan, penjualan aset atau untuk apa-apa perkara lain yang seumpama itu.
      </div>
      <div class="contentText">
        (e)	Penasihat-penasihat profesional: Sebagai sebahagian daripada proses operasi dan pengurusan kami, kami melibatkan penasihat-penasihat profesional seperti peguam, juruaudit, akauntan dan perunding untuk menjalankan kerja profesional.
      </div>
      <div class="contentText">
        (f)	Pihak-pihak penguatkuasaan: Apabila dikehendaki oleh undang-undang yang berkenaan, kami mungkin mendedahkan Data Peribadi anda kepada pihak-pihak berkuasa untuk tujuan penyiasatan.
      </div>

      <div class="minTitle">
        5.	PENYIMPANAN DATA PERIBADI ANDA

      </div>

      <div class="contentText">Selaras dengan undang-undang yang terpakai, kami akan menggunakan Data Peribadi anda selama yang diperlukan untuk memenuhi tujuan Data Peribadi anda dikumpul atau untuk mematuhi keperluan undang-undang yang berkenaan.  
      </div>

      <div class="minTitle">
        6.	PENYIMPANAN DATA PERIBADI ANDA

      </div>

      <div class="contentText">
       
Kami menggunakan langkah yang sesuai untuk memastikan Data Peribadi anda sulit dan selamat. Walau bagaimanapun, sila ambil perhatian bahawa perlindungan ini tidak terpakai pada maklumat yang anda pilih untuk kongsi di awam seperti rangkaian sosial pihak ketiga.

      </div>
      <div class="contentText">
        Data Peribadi anda akan diproses oleh kakitangan atau ejen kami yang diberi kuasa, atas dasar perlu tahu, bergantung pada tujuan khusus di mana Data Peribadi anda telah dikumpulkan. Kami mengambil langkah yang munasabah untuk memastikan Data Peribadi anda selamat dan melindunginya daripada kehilangan, penyalahgunaan atau pengubahan tanpa kebenaran. Sebarang Data Peribadi yang anda berikan secara elektronik disimpan pada server yang selamat. Kami juga mengekalkan prosedur keselamatan fizikal yang munasabah untuk mengurus dan melindungi penggunaan dan penyimpanan rekod yang mengandungi Data Peribadi.
      </div>
      <div class="contentText">
        Kami mungkin perlu memindahkan Data Peribadi anda dalam kumpulan kami, dan kepada pihak ketiga seperti yang dinyatakan dalam Bahagian 4 di atas, berkaitan dengan tujuan yang dinyatakan dalam Notis ini. Atas sebab ini, kami mungkin memindahkan Data Peribadi anda ke negara lain yang mungkin mempunyai undang-undang dan keperluan pematuhan perlindungan data yang berbeza dengan yang terpakai di Malaysia.
      </div>
      <div class="minTitle">
        7.	HAK ANDA

      </div>
      <div class="minTitle">
        (a)	Untuk meminta akses kepada Data Peribadi anda

      </div>

      <div class="contentText">
        Anda mempunyai hak untuk mengakses, menyemak dan meminta salinan fizikal atau elektronik Data Peribadi anda. Permintaan tersebut boleh dibuat dengan menghubungi kami di:
      </div>
      <div class="contentText">
        Orang Yang Dihubungi: Pegawai Perlindungan Data Peribadi
      </div>
      <div class="contentText">
        
Alamat: No. 11-2, Jalan Kampung Jawa, Off Bagan Luar, 12000 Butterworth, Pulau Pinang, Malaysia.

      </div>
      <div class="contentText">
        Atau
      </div>
      <div class="contentText">
        Borang di laman sesawang: https://ddgtrust.com
      </div>
      <div class="contentText">
        Atau
      </div>
      <div class="contentText">
        Hubungi kami: +6016-5535691
      </div>
      <div class="contentText">
        Atau
      </div>
      <div class="contentText">
        Emel kami: info@ddgint.com
      </div>
      <div class="contentText">

        Jika permintaan itu dikemukakan oleh orang selain daripada anda, tanpa memberikan bukti bahawa permintaan itu dibuat secara sah bagi pihak anda, permintaan itu akan ditolak. Sila ambil perhatian bahawa sebarang maklumat pengenalan yang diberikan kepada kami hanya akan diproses mengikut dan setakat yang dibenarkan oleh undang-undang yang berkenaan.
      </div>
      <div class="minTitle">
        

(b)	Untuk meminta pembetulan atau mengehadkan penggunaan Data Peribadi anda


      </div>
      <div class="contentText">
        Jika diperuntukkan oleh undang-undang, anda boleh (i) meminta pemadaman, kemudahalihan, pembetulan atau semakan Data Peribadi anda; (ii) mengehadkan penggunaan dan pendedahan Data Peribadi anda; dan (iii) membatalkan persetujuan kepada mana-mana aktiviti pemprosesan data kami. Permintaan sedemikian boleh dibuat dengan menghubungi kami melalui mana-mana kaedah yang dinyatakan dalam perenggan (a) di atas.


      </div>
      <div class="contentText">Walau bagaimanapun, sila ambil perhatian bahawa, dalam keadaan tertentu, kami mungkin tidak dapat memadamkan Data Peribadi anda tanpa juga memadamkan akaun anda. Kami mungkin dikehendaki untuk mengekalkan beberapa Data Peribadi anda selepas anda meminta pemadaman untuk memenuhi kewajipan undang-undang atau kontrak kami. Kami juga mungkin dibenarkan oleh undang-undang yang terpakai untuk mengekalkan beberapa Data Peribadi anda untuk memenuhi keperluan perniagaan kami.
      </div>
      <div class="minTitle">
        8.	PERUBAHAN PADA NOTIS PRIVASI KAMI
      </div>
      <div class="contentText">
        Kami menyemak dan mengemaskini Notis Privasi ini dari semasa ke semasa untuk mencerminkan perubahan dalam undang-undang dan amalan perniagaan. Kami menasihati anda untuk mendapatkan versi terkini Notis Privasi kami dengan menghubungi kami atau melayari laman web kami untuk memastikan bahawa anda sudah biasa dengan versi terkini. Dengan terus memberi arahan kepada kami selepas komunikasi Notis Privasi terkini kami, anda dianggap telah menerima dan bersetuju dengan semakan dan kemas kini yang terkandung di dalamnya.
      </div>
      <div class="minTitle">
        9.	HUBUNGI KAMI
      </div>
      <div class="contentText">
        Sekiranya anda memerlukan maklumat lanjut tentang Data Peribadi yang kami pegang atau cara maklumat anda dikumpul atau digunakan yang tidak dijawab oleh Notis ini, sila hubungi atau tulis kepada kami di:
      </div>
      <div class="contentText">
        Orang Yang Dihubungi: Pegawai Perlindungan Data Peribadi
      </div>
      <div class="contentText">
        Alamat: No. 11-2, Jalan Kampung Jawa, Off Bagan Luar, 12000 Butterworth, Pulau Pinang, Malaysia.
      </div>
      <div class="contentText">
        Atau
      </div>
      <div class="contentText">
        Borang di laman sesawang: https://ddgtrust.com
      </div>
      <div class="contentText">
        Atau
      </div>
      <div class="contentText">
        Hubungi kami: +6016-5535691
      </div>
      <div class="contentText">
        Atau
      </div>
      <div class="contentText">
        Emel kami: info@ddgint.com
      </div>


      <div class="minTitle">
        PENGAKUAN DAN PERSETUJUAN
      </div>
      <div class="contentText">
        Saya telah membaca Notis Privasi ini dan memahami sebab-sebab pengumpulan Data Peribadi saya dan cara bagaimana data itu boleh digunakan dan didedahkan. Saya telah diberikan salinan Notis Privasi ini dan/atau telah dimaklumkan tentang perkara-perkara di dalamnya.
      </div>
      <div class="contentText">
        Saya juga sedar bahawa saya boleh mengakses dan membetulkan Data Peribadi saya atas permintaan dan jika perlu. Walau bagaimanapun, saya faham bahawa jika, dalam keadaan luar biasa, akses dinafikan untuk tujuan yang sah, sebab tersebut dan remedi akan disediakan kepada saya.
      </div>
      <div class="contentText">
        Saya telah membaca maklumat di atas dan dengan menandatangani dan memulangkan salinan Notis Privasi ini, saya secara nyata bersetuju dan membenarkan penggunaan, pemprosesan, pendedahan dan pemindahan Data Peribadi saya oleh DDG. Sekiranya terdapat keperluan untuk menarik balik persetujuan saya untuk memproses Data Peribadi saya, saya akan menulis notis kepada DDG untuk menghentikan pemprosesan Data Peribadi saya.
      </div>
      <div class="contentText">
        Berkenaan dengan Data Peribadi pihak ketiga, saya dengan ini mengesahkan bahawa saya telah mendapat persetujuan daripada orang yang Data Peribadinya mungkin diberikan kepada anda oleh saya atau dikenal pasti daripada Data Peribadi saya yang mungkin diproses oleh DDG untuk tujuan yang dinyatakan dalam Notis Privasi ini termasuk pendedahan kepada pihak yang dinyatakan dalam Notis Privasi.
      </div>

      <!-- <div class="contentText">
         Or
      </div>  -->

      <!-- <van-radio-group v-model="formData.have_high_risk" direction="horizontal">
        <van-radio :name="1">	Saya bersetuju untuk menerima komunikasi mengenai pemasaran dan promosi melalui e-mel, panggilan telefon, mesej teks dan/atau surat berita.</van-radio>

      </van-radio-group> -->

      <van-field name="malay_agreement"  :required="true"
        :rules="[{ required: true }]" center>
        <template #input>
          <van-checkbox v-model="formData.malay_agreement">Saya bersetuju untuk menerima komunikasi mengenai pemasaran dan promosi melalui e-mel, panggilan telefon, mesej teks dan/atau surat berita.</van-checkbox>
        </template>
      </van-field>



      <div class="tl">Signature</div>

      <vue-esign ref="esign1" v-show="sig2" :width="800" :height="300" :isCrop="false"
        :lineWidth="6" lineColor="#000000" bgColor.sync="#fff" style="border: 1px solid #666" />
      <van-image v-show="!sig2" class="esignImgbox"
        :src="formData.malay_signature" />
      <div class="tr">
        <div class="esignBtn" @click="handleReset1()" v-if="!isDone">Clear</div>
        <div class="esignBtn" @click="handleGenerate1()" v-if="!isDone">Confirm</div>
      </div>

      <van-field v-model="formData.malay_name" autocomplete="off" name="malay_name" center type="text" label="Nama"
        placeholder="Please enter the Nama" :required="true" :rules="[{ required: true }]" />
      <van-field v-model="formData.malay_nric_passport_no" autocomplete="off" name="malay_nric_passport_no" center type="text" label="No. Kad Pengenalan/Pasport"
        placeholder="Please enter the No. Kad Pengenalan/Pasport" :required="true" :rules="[{ required: true }]" />

      <van-field v-model="formData.malay_date" autocomplete="off" name="malay_date" center type="text" label="Tarikh" placeholder="Please enter the Tarikh"
        :required="true" :rules="[{ pattern, message: 'Please enter the Tarikh ' }]" />
</div>



      <van-button v-if="!isDone" round block type="info" native-type="submit" color="#7C655D">
        {{ from == "create" ? "Next / Save" : "Next / Save" }}
      </van-button>
    </van-form>
<!-- -------------------------------------------------------------------------------------------------- -->

  </div>
</template>

<script>
import moment from 'moment'
import { uploadAutograph, smsVerify_code, verdict_code, uploadFile } from "@/api/util";
import { kyc_formGep2, getOrdersForms, putOrdersForms2 } from "@/api/order";
export default {
  props: ['orderDataInfo'],
  data() {
    return {
      pattern: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,// 正则验证时间
      formData: {

        eng_agreement: '',
        eng_signature: '',
        eng_name: this.$store.state.campanyIndividualName1Gep2,
        eng_nric_passport_no: this.$store.state.nric_pass_roc_noGep2,
        eng_date:  moment(new Date()).format('DD-MM-YYYY'),

        malay_agreement: '',
        malay_signature: '',

        malay_name: this.$store.state.campanyIndividualName1Gep2,
        malay_nric_passport_no: this.$store.state.nric_pass_roc_noGep2,
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
      this.isFilled = this.$route.query.GepTwoPdpaForm
    }
    // console.log(".....33....",this.isFilled)
    this.getFormData();
    this.isDone = sessionStorage.getItem('orderStatus') === '2'
  },
  methods: {
    english() {
      document.getElementById('engId').style.display = 'block'
      document.getElementById('malId').style.display = 'none'
      document.getElementById('malButId').style.background = '#fff'
      document.getElementById('malButId').style.color = '#7c655d'
      document.getElementById('malButId').style.border = '1px solid #7c655d'
      document.getElementById('engButId').style.background = '#7c655d'
      document.getElementById('engButId').style.color = '#fff'
      document.getElementById('engButId').style.border = '1px solid #7c655d'
      
     
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
        getOrdersForms(this.isFilled, { type: "GEP II PDPA Form" })
          .then((res) => {
            delete res.id
            delete res.order_id
            delete res.created_at
            delete res.updated_at
            this.sig1=false
            this.sig2=false
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
      console.log("555555555555555555555", form);
      console.log(form, "6666666666");
      console.log(this.formData, "777777777");
      console.log(this.formData.subscriber_signature, "form");
      if (!this.formData.eng_signature) {
        this.$toast.fail("Please sign your english signature");
        return;
      }
      else if (!this.formData.malay_signature) {
        this.$toast.fail("Please sign your malay signature");
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
          type: "GEP II PDPA Form",
          data: JSON.stringify(data),
        }).then((res) => {
          console.log(res, "修改kyc成功");
          this.$toast({
            type: "success",
            message: "Modify the success",
          });
          if (!this.$route.query.isShare) {
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
        kyc_formGep2(id, this.formData)
          .then((res) => {
            console.log(res, "111111111111");
            this.$toast({
              type: "success",
              message: "You can Just moved to Next form",
            });
            if (this.from == "create") {
              this.$store.commit("changePage", {
                tabbar: "/LetterOfWishesGep2",
                title: "3/3 Document Checklist",
              });
              if (!this.$store.state.isOverseaSignature && !this.$route.query.isShare) {
                this.$router.push(
                  "/LetterOfWishesGep2?from=create&orderId=" +
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
      this.formData.malay_signature = ''
    },
    handleGenerate1(index) {
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
    },
    handleReset(index) {
      this.$refs["esign"].reset(); //清空画布
      this.sig1 = true
      this.formData.eng_signature = ''
    },
  
    handleGenerate(index) {
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
</style>
