<template>
  <div class="dDGLeadership">
      <h1>Our Leadership</h1>
     <div class="dDGLeadershipOneCopy"></div> 
    <div class="dDGLeadershipOne">
      <div class="content">
           <h1>Herman Tan</h1>
          <h2>Managing Director</h2>
           <p class="lineFeed"></p>
          <div class="text1">
            <p>Herman founded DDG in 2021, and brings more than 20 years of financial services experience, </p>
            <p>with more than half of that within senior agency manager roles throughout Southeast Asia. </p>
            <p>As Malaysia’s Top 40 Industry Leaders and Financial Services Professional, </p>
            <p>Herman served in various leadership across operations management, </p>
            <p>agency development and customer solutions, with a track record for driving large-scale change management, </p>
            <p>service delivery and bottom-line  results include 5 multimillion-dollar agencies, </p>
            <p>14 MDRT, and RM300M private trust set.</p>
            <p class="lineFeed"></p>
            <p class="lineFeed"></p>
            <p>Herman holds IARFC’s Registered Financial Consultant for 15 years, </p>
            <p>he is also currently an EMBA and DBA candidate.</p>
          </div>
      </div>
    </div>
    <div class="dDGLeadershipTwoCopy"></div> 
    <div class="dDGLeadershipTwo">
       <div class="content2">
           <h1>Nicole Sew</h1>
          <h2>Executive Director</h2>
           <p class="lineFeed"></p>
          <div  class="text2">
            <p>With over 21 years of experience in agency development in the financial sector encompassing</p>
            <p>Banking, Unit Trust, Life and General Insurance, Private Equity, Private Trust, </p>
            <p>Nicole is now serving as Executive Director for DDG Malaysia.</p>
            <p>Prior to that, she was one of agency leaders at few renowned trustees in Malaysia, </p>
            <p>where she managed more than 300 trust advisors and private trust setup of over RM 120M. </p>
            <p>She is an expert on advising clients on private trust, estate planning and asset management.</p>
            <p class="lineFeed"></p>
            <p class="lineFeed"></p>
            <p>Nicole holds a Diploma in Business Studies majoring in Accounting </p>
            <p>from Tunku Abdul Rahman University College.</p>
          </div>
       </div>
    </div>
    <div class="dDGLeadershipFourCopy"></div> 
    <div class="dDGLeadershipFour">
        <div class="content3">
            <h1>Dato’Lawrence Chiong</h1>
            <h2>Legal Advisor</h2>
             <p class="lineFeed"></p>
            <div  class="text3">
              <p>Dato’ Lawrence has over 20 years of experience in corporate matters relating to multinational  and domestic clients </p>
              <p>in a range of industries and sectors, with focus on matters relating to private equities, shareholders’ dispute.</p>
              <p>He began legal practice in 2002 and later founded CHIONG in 2009, in Johor Bahru.</p>
              <p>Dato’ Lawrence serves corporate clients and individuals across Asia, mostly from</p>
              <p>Singapore, Indonesia, Taiwan, Hong Kong, China and Malaysia.</p>
              <p>In 2015, CHIONG was awarded the “Best Service Provider in Malaysia” by APAC Insider, UK.</p>
              <p class="lineFeed"></p>
              <p class="lineFeed"></p>
              <p>Dato’ earned his LL.B.(UK) from University of Leeds (UK) and LL.M.(Master in Law, International Commercial Law)</p>
              <p>from University of Salford (UK) in 1999 and 2018 respectively.</p>
              <p>He is also a Certified Trainer of HRDF and qualified Mediator (MMC),</p>
              <p>and currently pursuing his DBA at the International University of Malaya-Wales (UK).   </p>
            </div>
        </div>
    </div>
    <div class="dDGLeadershipFiveCopy"></div> 
    <div class="dDGLeadershipFive">
         <div class="content4">
            <h1>Bernard Siow</h1>
            <h2>COO (DDG China)	</h2>
             <p class="lineFeed"></p>
            <div  class="text4">
              <p>With over 28 years of experience - most of which were in Malaysia and China - </p>
              <p>Bernard brings tremendous expertise to his new role as COO of DDG China, </p>
              <p>focusing at advancing the segment’s strong growth to meet DDG International’s long-term strategic priorities in the region.</p>
              <p class="lineFeed"></p>
              <p class="lineFeed"></p>
              <p>In his recent career, his roles were focused on personal development, agency development, organizational effectiveness, </p>
              <p>including driving complex transformation training programs, global leadership, talent management and  </p>
              <p>operational support for DDG China regions. </p>
              <p>Prior to joining DDG, Bernard delivered his motivational leadership and consulting experience to many renowned</p>
              <p>large corporations include Neways International, Asia Life Insurance, Hong Leong Assurance, Prudential Life, Oxy Fresh, E-Excel, </p>
              <p>N-Stream, Uptrend2u, XKL China, BSC Worldwide and Easy Pha-max - through a range of bespoke coaching programs.</p>
            </div>
         </div>
    </div>
    <div class="dDGLeadershipSixCopy"></div> 
    <div class="dDGLeadershipSix">
        <div class="content5">
            <h1>Dr Fred Wu</h1>
            <h2>CEO</h2>
             <p class="lineFeed"></p>
            <div  class="text5">
              <p>A Harvard-educated, entrepreneur and speaker; and widely known for being the founding CEO of GE Consult Asia -</p>
              <p>a leading management consulting firm to support entrepreneurship in Malaysia and ASEAN.</p>
              <p>Dr. Fred has over 20 years of management consulting experience in Malaysia and abroad,</p>
              <p>where he led large scale strategic planning and corporate turnaround projects for many renowned enterprises</p>
              <p>include HUAWEI, Shell, Cuckoo, FELCRA, TNB, KPRJ and Brahim’s SATS.</p>
              <p>He is recipient of many awards including Successful People in Malaysia 2019/2020,</p>
              <p class="lineFeed"></p>
              <p class="lineFeed"></p>
              <p>Britishpedia (UK) and Successful Leader, The Bizz Award 2021, World Confederation of Businesses (USA).</p>
              <p>Dr Fred holds MBA (Marketing) from Charles Sturt University (AUS) and DBA in Strategy & Innovation, Capella University</p>
              <p>He is also a Certified Scrum Master (ISI-CSM), and Chartered Project Manger (ChPM).</p>
              <p>He is currently a PhD candidate in Asia eUniversity (MAS).</p>
            </div>
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
  font-size: 2.4rem;
  color: #7C655D;
}
h2{
  font-weight: normal;
  font-size: 1.5rem;
  color: #7C655D;
}
.lineFeed{
  height: 0.5rem;
  width: 1rem;
}
.dDGLeadership{
   font-family: 'Calibri';
   color: #7C655D;
   font-size: 1rem;
  .dDGLeadershipOne{
        background: url(../assets/img/Leadership/Leadership1.jpg);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 100%;
        height: 39rem;
        position: relative;
        .content{
           position: absolute;
           top:20%;
           right: 33.5%;
           text-align: right;
           .text1{
             font-size: 1.1rem;
           }
        }

    }
    .dDGLeadershipTwo{
        background: url(../assets/img/Leadership/Leadership2.jpg);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 100%;
        height: 36rem;
        text-align: left;
        position: relative;
         .content2{
           position: absolute;
           top:24%;
           left: 32.5%;
           text-align: left;
           .text2{
             font-size: 1.1rem;
           
           }
          }

    }
    .dDGLeadershipFour{
        background: url(../assets/img/Leadership/Leadership3.jpg);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 100%;
        height: 39rem;
        text-align: right;
        position: relative;
         .content3{
           position: absolute;
           top:18%;
           right: 33.5%;
           text-align: right;
           .text3{
             font-size: 1.1rem;
           
           }
          }
    }
    .dDGLeadershipFive{
        background: url(../assets/img/Leadership/Leadership4.jpg);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size:  100% ;
        height: 36rem;
        text-align: left;
        position: relative;
         .content4{
           position: absolute;
           top:23%;
           left: 32.5%;
           text-align: left;
           .text4{
             font-size: 1.1rem;
          
           }
          }
    }
    .dDGLeadershipSix{
        background: url(../assets/img/Leadership/Leadership5.jpg);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 100% ;
        height: 37rem;
        text-align: right;
        position: relative;
        .content5{
           position: absolute;
           top:20%;
           right: 33.5%;
           text-align: right;
           .text5{
             font-size: 1.1rem;
           
           }
          }
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
@media screen and (max-width: 1025px){
  h1 {
  font-weight:bold;
  font-size: 4rem;
  color: #7C655D;
}
h2{
  font-weight: normal;
  font-size: 3rem;
  color: #7C655D;
}
.lineFeed{
  height: 0.5rem;
  width: 1rem;
}
.dDGLeadership{
   font-family: 'Calibri';
   color: #7C655D;
   font-size: 1rem;
   background: url(../assets/img/png/蒙版61@3x.png);
    background-attachment: scroll;
    background-repeat: no-repeat;
    background-size: 100% 500%;
    opacity: 0.8;
  .dDGLeadershipOneCopy{
      background: url(../assets/img/png/HermanTan@3x.png);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 35% ;
        height: 31rem;
        background-position-x: 50%;
        margin-top: 25rem;
   }
  .dDGLeadershipOne{
          h1{
          font-weight: normal;
        }
        background: url(../assets/img/png/蒙版61@3x.png);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 100% 500%;
        // height: 49rem;
        // background: none;
        // position: relative;
        height: auto;
        .content{
           position: static;
          //  top:20%;
          //  right: 33.5%;
           text-align: left;
           padding:0 10%;
           padding-bottom: 3%;
           .text1{
             font-size: 2.4rem;
             line-height: 2.5rem;
           }
        }

    }
    .dDGLeadershipTwoCopy{
       background: url(../assets/img/png/Layer1@3x.png);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 35%;
        height: 31rem;
        background-position-x: 50%;
        margin-top: 25rem;
    }
    .dDGLeadershipTwo{
        background: url(../assets/img/png/page51_copy.png);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 100% 500%;
        height: auto;
        text-align: left;
        // position: relative;
         .content2{
           position: static;
           top:24%;
           left: 32.5%;
           text-align: left;
           padding:0 10%;
           padding-bottom: 3%;
           .text2{
             font-size: 2.4rem;
             line-height: 2.5rem;
            //  font-weight: bold;
           }
          }
           h1{
            font-weight: normal;
          }

    }
    .dDGLeadershipFourCopy{
        background: url(../assets/img/png/Dato3x.png);
        background-attachment: scroll;
        background-repeat: no-repeat;
         background-size: 35%;
        height: 31rem;
        background-position-x: 50%;
        margin-top: 25rem;
    }
    .dDGLeadershipFour{
       h1{
          font-weight: normal;
            margin-right: 4rem;
        }
        h2{
            margin-right: 2rem;
        }
        background: url(../assets/img/png/page7_copy.png);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 100% 500%;
        height: auto;
        text-align: right;
        position: relative;
         .content3{
           position: static;
           top:18%;
           right: 33.5%;
           text-align: left;
           padding:0 10%;
           padding-bottom: 3%;
           .text3{
            font-size: 2.4rem;
            line-height: 2.5rem;
            //  font-weight: bold;
           }
          }
    }
    .dDGLeadershipFiveCopy{
        background: url(../assets/img/png/Bernad.png);
        background-attachment: scroll;
        background-repeat: no-repeat;
         background-size: 35%;
        height: 31rem;
        background-position-x: 50%;
        margin-top: 25rem;
    }
    .dDGLeadershipFive{
       h1{
          font-weight: normal;
        }
         background: url(../assets/img/png/page53copy.png);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size:  100% ;
        height: auto;
        text-align: left;
        // position: relative;
         .content4{
           position: static;
           top:23%;
           left: 32.5%;
           text-align: left;
           padding:0 10%;
           padding-bottom: 3%;
           .text4{
             font-size: 2.4rem;
             line-height: 2.5rem;
           }
          }
    }
    .dDGLeadershipSixCopy{
      background: url(../assets/img/png/DrFred.png);
        background-attachment: scroll;
        background-repeat: no-repeat;
         background-size: 35%;
        height: 31rem;
        background-position-x: 50%;
        margin-top: 25rem;
    }
    .dDGLeadershipSix{
       h1{
          font-weight: normal;
            margin-right: 4rem;
        }
        h2{
            margin-right: 2rem;
        }
        // background: url(../assets/img/png/page6_copy.png);
       
        // background-attachment: scroll;
        // background-repeat: no-repeat;
        // background-size: 100% ;
        background: none;
        height: auto;
        text-align: right;
        position: relative;
        .content5{
           position: static;
           top:20%;
           right: 33.5%;
           text-align: left;
           padding:0 10%;
           padding-bottom: 3%;
           .text5{
            font-size: 2.4rem;
            line-height: 2.5rem;
           }
          }
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
}
/*中等屏幕*/
@media screen and (max-width: 992px){
 
}
/*平板*/
@media screen and (max-width: 768px){
 
}
/*手机*/
@media screen and (max-width: 576px){
	
}
</style>
