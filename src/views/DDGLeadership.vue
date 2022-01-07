<template>
  <div class="dDGLeadership">
      <h1>Our Leadership</h1>
    <div class="dDGLeadershipOne">
       <h1>Herman Tan</h1>
       <h2>Managing Director</h2>
       <div>
         <p>Herman Tan: Herman founded DDG in 2021, and brings more than 20 years of financial services experience,</p>
         <p>with more than half of that within senior agency manager roles throughout Southeast Asia.</p>
         <p>As Maleysia's Top 40 Industry Leaders and Financial Services Professional,</p>
         <p>Herman served in various leadership across operations manegement,</p>
         <p>agency development and customer solutions, with a track record for driving large- scale change management,</p>
         <p>service delivery and bottom- -line results include 5 multimillion- dollar agencies,</p>
         <p>14 MDRT, and RM300M private trusts set.</p>
         <p>Herman holds LARFC's Registered Financial Consultant for 15 years,</p>
         <p>he is also currently an EMBA and DBA candidate.</p>
       </div>
    </div>
    <div class="dDGLeadershipTwo">
        <h1>Nicole Sew</h1>
        <h2>Executive Director</h2>
        <div>
          <p>With over 21 years of experience in agency development in the financial sector encompassing</p>
          <p>Banking, Unit Trust, Life and General Insurance, Private Equity, Private Trust,</p>
          <p>Nicole is now serving as Executive Director for DDG Malaysia.</p>
          <p>Prior to that, she was one of agency leaders at few renowned trustees in Malaysia,</p>
          <p>where she managed more than 300 trust advisors and private trust setup of over RM1 20M.</p>
          <p>She is expert on advising clients on private trust, estate planning and asset management.</p>
          <p>Nicole holds a Diploma in Business Studies majoring in Accounting</p>
          <p>from Tunku Abdul Rahman University College.</p>
        </div>
    </div>
    <div class="dDGLeadershipFour">
        <h1>Dato’Lawrence Chiong</h1>
        <h2>Legal Advisor</h2>
        <div>
          <p>Dato' L awrence has over 20 years of experience in corporate matters relating to multinational and domestic clients</p>
          <p>in a range of industries and sectors, with focus on matters relating to private equities, shareholders' dispute.</p>
          <p>He began legal practice in 2002 and later founded CHIONG in 2009, in Johor Bahru.</p>
          <p>Dato' Lawrence serves corporate clients and individuals across Asia, mostly from</p>
          <p>Singapore, Indonesia, Taiwan, Hong Kong, China and Malaysia.</p>
          <p>In 2015, CHIONG was awarded the“Best Service Provider in Malaysia”by APAC Insider, UK.</p>
          <p>Dato' earmed his LL.B. (UK) from University of Leeds (UK) and LLM. (Master in Law, Intemational Commercial Law)</p>
          <p>from University of Salford (UK) in 1999 and 2018 respectively.</p>
          <p>He is also a Certifhed Trainer of HRDF and qualfed Mediator (MMC),</p>
          <p>and currently pursuing his DBA at the International University of Malaya- Wales (UK).</p>
        </div>
    </div>
    <div class="dDGLeadershipFive">
         <h1>Bernard Siow</h1>
         <h2>C0O (DDG China)</h2>
         <div>
           <p>With over 28 years of experience一most of which were in Malaysia and China-</p>
           <p>Bernard brings tremendous expertise to his new role as C00 of DDG China,</p>
           <p>focusing at advancing the segment's strong growth to meet DDG International's long-term strategic priorities in the region.</p>
           <p>In his recent career, his roles were focused on personal development, agency development, organizational effectiveness,</p>
           <p>including driving complex transformation training programs, global leadership, talent management and</p>
           <p>operational support for DDG China regions.</p>
           <p>Prior to joining DDG, Bernard delivered his motivational leadership and consulting experience to many renowned</p>
           <p>large corporations include Neways Intemational, Asia Life Insurance, Hong Leong Assurance, Prudential Life, Oxy Fresh, E- Excel,</p>
           <p>N- Stream, Uptrend2u, XKL China, BSC Worldwide and Easy Pha- max一through a range of bespoke coaching progrems.</p>
         </div>
    </div>
    <div class="dDGLeadershipSix">
         <h1>Dr Fred Wu</h1>
         <h2>CEO</h2>
         <div>
           <p>A Harvard- educated, entrepreneur and speaker, and widely known for being the founding CEO of GE Consult Asia一</p>
           <p>a leading management consulting frm to support entrepreneurship in Malaysia and ASEAN.</p>
           <p>Dr Fred has over 20 years of management consulting experience in Malaysia and abroed,</p>
           <p>where he led large scale strategic planning and corporate turmaround projects for many renowned enterprises</p>
           <p>include HUAWEL, Shell, Cuckoo, FELCRA, TNB, KPRJ and Brahim's SATS.</p>
           <p>He is recipient of many awards including Successful People in Malaysia 2019/2020,</p>
           <p>Britishpedia (UK) and Successful Leader, The Bizz Award 2021, World Confederation of Businesses (USA).</p>
           <p>Dr Fred holds MBA (Marketing) from Charles Sturt University (AUS) and DBA in Strategy & Innovation, Capella University</p>
           <p>(USA). He is also a Certifhed Scrum Master (ISI-CSM), and Chartered Project Manager (ChPM).</p>
           <p>He is curently a PHD candidate in Asia eUniversity (MAS).</p>
         </div>
    </div>
    <div class="dDGLeadershipThree">
        <span>For more enquiries</span>
        <span class="contactUs" @click="toContactUs()">Contact Us</span>
    </div>
  </div>
</template>

<script>
import Common from "@/components/mode/common.vue";
export default {
  components: {
    Common,
  },
  name: "dDGLeadership",
  data() {
    return {
      result: ['a', 'b'],
      pageContent: [],
      pageWidth: "1200",
    };
  },
  mounted() {
    // this.getdDGLeadershipPage();
  },
  methods: {
    toContactUs() {
      this.$store.commit('changePage', {
        tabbar: '/ContactUs',
        title: 'Contact Us',
      });
      this.$router.push('/ContactUs');
    }
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-weight: normal;
  font-size: 3rem;
  color: #7C655D;
  margin-bottom:4rem;
}
.lineFeed{
  height: 0.5rem;
  width: 1rem;
}
.dDGLeadership{
    font-size: 2rem;
   font-family: 'Times New Roman';
    .dDGLeadershipOneContent{
        padding:3rem 10rem;
        color: #7C655D;
        // line-height: 2rem;
        text-align: left;
        .text{
            font-size: 2rem;
            text-align: center;
        }
        .text2{
          font-size: 1rem;
          text-align: left;
          padding-left: 5rem;
        }
        .text3{
          margin-top: 2rem;
        }
    }
    .dDGLeadershipOne{
        background: url(../assets/img/Leadership/Leadership1.jpg);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 100%;
        height: 30rem;
        text-align: right;
        position: relative;
    }
    .dDGLeadershipTwo{
        background: url(../assets/img/Leadership/Leadership2.jpg);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 100%;
        height: 30rem;
        text-align: right;
        position: relative;
    }
    .dDGLeadershipFour{
        background: url(../assets/img/Leadership/Leadership3.jpg);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 100%;
        height: 30rem;
        text-align: right;
        position: relative;
    }
    .dDGLeadershipFive{
        background: url(../assets/img/Leadership/Leadership4.jpg);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 100%;
        height: 30rem;
        text-align: right;
        position: relative;
    }
    .dDGLeadershipSix{
        background: url(../assets/img/Leadership/Leadership5.jpg);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 100%;
        height: 30rem;
        text-align: right;
        position: relative;
    }
    .dDGLeadershipThree{
        height: 10rem;
        background-color: #7C655D;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        font-weight: bold;
        .contactUs {
            background-color: #fff;
            color: #7B655D;
            padding: 0.5rem;
            border-radius: 1rem;
            margin-left: 2rem;
            cursor: pointer;
        }
    }
}
</style>
