<template>
  <div class="Generation">
      <h1>The AI “爱” Generation Trust</h1>
    <div class="GenerationOne">
        <div class="contentOne">
           <div class="contentOne-title">
              <h1>The AI “爱” </h1>
              <h1>Generation Trust</h1>
           </div>
        </div>
        <div class="contentTwo">
            <div class="content">
            <p class="text1">
              AI (means love in Mandarin) is at the root of our philosophy
              – this AI Generation Trust,
              under the purview of Asia International Trust Berhad
              and distributed exclusively by DDG,
              offers impeccable protection for your assets due to the
              independent trustee’s mandate over the trust assets and distributions.
            </p>
            <p class="text2">

              A famil's success in sustaining its wealth from
              one generation to another is inevitable,
              and it requires careful planning and implementation.
            </p>
        </div>
        <p class="text3">Overview</p>
        <div class="line"></div>
        </div>
    </div>
    <div class="GenerationTwo">
        <p class="GenerationTwoText">Why Trust</p>
        <div class="line"></div>
        <p class="GenerationTwoText2">
           “Trusts” – Trusts are a type of will-substitute.
            Drafted and administered properly, they avoid probate
            and give you the power to decide how
            and when (and, of course, to whom) your estate will be distributed
            during your lifetime and after you are gone.
            There are many different types of trusts available depending on
            your estate-planning or special needs goals.
            The best type of trust for you can be discussed during consultation.
            All trusts come with thorough instructions for
            the Settlors (how to properly title assets to the trust)
            and the Trustees (how to properly administer the trust),
            including any Social Security Administration requirements for
            special needs trust administration.
        </p>
        <p class="GenerationTwoText3">
            While the primary focus of DDG International Berhad is to provide
            comprehensive estate-planning and wealth management solutions
            and trusts for individuals and families,
            incorporating estate planning solutions for special needs
            family members may be the most comprehensive part of the
            company’s practice.
        </p>
    </div>
    <div class="GenerationFour">
       <p class="GenerationFourText">Why AI <span>“爱”</span></p>
       <p class="GenerationFourText2">Generation Trust</p>
       <div class="GenerationFourText3">
          <p>Potential tax-efficient wealth transfer  </p>
          <p class="lineFeed"></p>
          <p>for your future generations</p>
       </div>
       <div class="GenerationFourText4">
          <p>A family strategy to preserve your </p>
          <p class="lineFeed"></p>
          <p>family’s wealth by accumulating it through trust</p>
       </div>
       <div class="GenerationFourText5">
          <p>AI <span>“爱”</span></p>
          <p>Generation Trust</p>
          <p>Structure</p>
       </div>
       <div class="GenerationFourText6">
         <div class="row">
            <p class="col">Trustee</p>
            <p class="colTwo">Asia international Trust Berhed</p>
         </div>
         <div class="row">
            <p class="col">Product Name</p>
            <p class="colTwo">Al Generation Trust</p>
         </div>
         <div class="row">
            <p class="col">Objective</p>
            <p class="colTwo">Wealth protection and accumulation</p>
         </div>
         <div class="rowSpecial">
            <p class="col">Eligibility</p>
            <div class="colTwo">
              <p>Malaysian individual:</p>
              <p class="lineFeed"></p>
              <p>RM30.000 + multiple of RM10,000</p>
              <p class="lineFeed"></p>
              <p>Malaysian Corporation/Foreigner & Permanent Resident:</p>
              <p class="lineFeed"></p>
              <p>RM50,000+ multiple of RM10,000</p>
            </div>
         </div>
         <div class="row">
            <p class="col">Tenure</p>
            <p class="colTwo">fixed term of two(2) years</p>
         </div>
         <div class="row">
            <p class="col">Projected Dividend</p>
            <p class="colTwo">8.5% per annum</p>
         </div>
         <div class="row">
            <p class="col">Lock-in Period</p>
            <p class="colTwo">Six(6) months from the date of acceptance</p>
         </div>
         <div class="row">
            <p class="col">Deduction</p>
            <p class="colTwo">25%(after 6 months lockdown period)</p>
         </div>
       </div>
    </div>
    <div class="GenerationThree">
        <span>For more enquiries</span>
        <span class="contactUs" @click="toContactUs()">Contact Us</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  name: "Generation",
  data() {
    return {
      pageContent: [],
      pageWidth: "1200",
    };
  },
  mounted() {
    // this.getGenerationPage();
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
  font-size: 4rem;
  color: #7C655D;
  margin-bottom:4rem;
}
.lineFeed{
  height: 0.5rem;
  width: 1rem;
}
.Generation{
    color: #7C655D;
    font-size: 1.5rem;
    font-family: "Times New Roman";
    position: relative;
    >h1 {
      font-size: 36px;
      font-weight: 600;
      @media screen and (max-width: 1025px) {
        font-size: 14px;
      }

    }
    .GenerationOne{
        background: url(../assets/img/Generation/AI1.jpg);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 100%;
        height: 50rem;
        position: relative;

        h1{
          margin-bottom:1rem;
          margin-left: 100px;
          font-size: 70px;
          font-weight: 600;
        }
        .content{
           width: 36rem;
           text-align: left;
           position: absolute;
           right: 0;
           top:20rem;
           .text1{
             line-height: 1.5rem;
           }
           .text2{
             margin-top:2rem ;
             line-height: 1.5rem;
           }
        }
        .text3{
              font-size: 1.5rem;
              color: #fff;
              position: absolute;
              bottom:8.5%;
              right: 35%;
           }
    }
    .GenerationTwo{
        background: url(../assets/img/Generation/AI2.jpg);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 50rem;
        text-align: right;
        position: relative;
        .GenerationTwoText{
          font-size: 1.8rem;
          color: #fff;
          position: absolute;
          top:16%;
          left: 6.5%;
        }
        .GenerationTwoText2{
          font-family: Calibri;
          font-size: 1.1rem;
           line-height: 1.2rem;
          width: 25rem;
          text-align: left;
          position: absolute;
          left: 30%;
          top:18%;
        }
        .GenerationTwoText3{
          font-family: Calibri;
          font-size: 1rem;
          line-height: 1.2rem;
          width: 27rem;
          text-align: left;
          position: absolute;
          bottom: 20%;
          left: 13%;
        }
    }
    .GenerationFour{
        background: url(../assets/img/Generation/AI3.jpg);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 100%;
        height: 72rem;
        position: relative;
        color: #fff;
        padding-top:2rem ;
        .GenerationFourText{
          font-size: 2rem;
          margin-left: 8rem;
          text-align: left;
          span{
            font-size: 4rem;
          }
        }
        .GenerationFourText2{
          font-size: 2rem;
          margin-left: 8rem;
          text-align: left;
        }
        .GenerationFourText3{
          text-align: left;
          position: absolute;
          left: 15%;
          top:16%;
        }
        .GenerationFourText4{
          text-align: left;
          position: absolute;
          left: 15%;
          top:25%;
        }
        .GenerationFourText5{
          text-align: left;
          color: #7C655D;
          font-size: 3rem;
          position: absolute;
          bottom:25%;
          left: 13%;
          span{
            font-size: 4rem;
          }
        }
        .GenerationFourText6{
          width: 47%;
          height: 59%;
          position:absolute;
          bottom:2.6rem;
          right: 2rem;
          // background-color: rgb(160, 33, 33);
          .row{
            height: 9.5%;
            width: 100%;
            display: flex;
            .col{
              height: 100%;
              width: 25%;
              font-size: 1rem;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .colTwo{
              height: 100%;
              width: 75%;
              font-size: 1rem;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
          .rowSpecial{
              height: 33.4%;
              width: 100%;
              display: flex;
              .col{
                height: 100%;
                width: 25%;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
              }
              .colTwo{
                height: 100%;
                width: 75%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
              }
          }
        }
    }
    .GenerationThree{
        height: 10rem;
        text-align: right;
        position: relative;
        height: 10rem;
        background-color: #7C655D;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        font-weight: bold;
        .contactUs {
            background-color: #fff;
            color: #7B655D;
            padding: 1.3rem;
            border-radius: 1rem;
            margin-left: 2rem;
            cursor: pointer;
        }
    }
}
@media screen and (max-width: 1025px) {
  .Generation .GenerationOne{
        height: 100rem;
        position: relative;
        display: flex;
        flex-direction: column;
        background:none;
        .contentOne{
           width: 100%;
           height: 100rem;
           background: url(../assets/img/png/组55@3x.png);
           background-attachment: scroll;
           background-repeat: no-repeat;
           background-size: 100% 100%;
           position: relative;
           .contentOne-title{
             position: absolute;
             bottom: 25%;
             right: 3%;
             h1{
               font-size: 4.2rem;
               font-weight: bold;
               letter-spacing: 0.3rem;
             }
           }
        }
        .contentTwo{
          width: 100%;
           height: 60rem;
           padding: 20px;
           position: relative;
          .content{
             width: 80%;
             line-height: 3rem;
             position: static;
            .text1{
              font-size: 2.5rem;
              line-height: 3rem;
            }
            .text2{
              font-size: 2.5rem;
              margin-top:2rem ;
              line-height: 3rem;
            }
          }
          .text3{
             position: absolute;
             font-size: 3rem;
             background-color: #7C655D;
             color: #fff;
             right: 15%;
             bottom: 0;
             width: 20rem;
             height: 5rem;
             display: flex;
             align-items: center;
             justify-content: center;
          }
          .line{
            position: absolute;
            background-color: #7C655D;
            height: 50rem;
            width: 0.5rem;
            right: 15%;
            bottom: 10%;
            border-radius: 0.5rem;
          }
        }
     }
  .Generation .GenerationTwo{
        background: url(../assets/img/png/组57@3x.png);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 100% 105%;
        height: 100rem;
        text-align: right;
        position: relative;
        .GenerationTwoText{
          font-size: 3rem;
          color: #fff;
          background-color: #7C655D;
          position: absolute;
          top:15%;
          left: 8%;
          width: 20rem;
          height: 5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .GenerationTwoText2{
          font-size: 2.5rem;
          line-height: 3rem;
          width: 55rem;
          text-align: left;
          position: absolute;
          left: 35%;
          top:18%;
        }
        .GenerationTwoText3{
          font-size: 2.5rem;
          line-height: 3rem;
          width: 50rem;
          text-align: left;
          position: absolute;
          bottom: 6%;
          left: 13%;
        }
        .line{
            position: absolute;
            background-color: #7C655D;
            height: 0.5rem;
            width: 30rem;
            left: 20%;
            top: 15%;
            border-radius: 0.5rem;
          }
    }
  .Generation    .GenerationFour{
        background: url(../assets/img/png/page2.png);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 100%;
        height: 160rem;
        position: relative;
        color: #fff;
        padding-top:2rem ;
        font-size: 2rem;
        .GenerationFourText{
          font-size: 4rem;
          margin-top:2rem;
          margin-left: 8rem;
          text-align: left;
          span{
            font-size: 4rem;
          }
        }
        .GenerationFourText2{
          font-size: 4rem;
          margin-left: 8rem;
           margin-top:2rem;
          text-align: left;
        }
        .GenerationFourText3{
          text-align: left;
          position: absolute;
          left: 20%;
          top:11.5%;
        }
        .GenerationFourText4{
          text-align: left;
          position: absolute;
          left: 20%;
          top:17%;
        }
        .GenerationFourText5{
          text-align: left;
          color: #7C655D;
          font-size: 4rem;
          position: absolute;
          top:27%;
          left: 13%;
          span{
            font-size: 4rem;
          }
        }
        .GenerationFourText6{
          width: 90%;
          height: 49.5%;
          position:absolute;
          bottom:9rem;
          right: 4rem;
          // background-color: rgb(160, 33, 33);
          .row{
            height: 9.5%;
            width: 100%;
            display: flex;
            .col{
              height: 100%;
              width: 25%;
              font-size: 2rem;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .colTwo{
              height: 100%;
              width: 75%;
              font-size: 2rem;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
          .rowSpecial{
              height: 33.4%;
              width: 100%;
              display: flex;
              .col{
                height: 100%;
                width: 25%;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
              }
              .colTwo{
                height: 100%;
                width: 75%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
              }
          }
        }
    }
   }
</style>
