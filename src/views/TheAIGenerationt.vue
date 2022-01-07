<template>
  <div class="Generation">
      <h1>The AI“爱”Generation Trust</h1>
    <div class="GenerationOne">
        <h1>The AI  <span>“爱”</span></h1>
        <h1>Generation Trust</h1>
        <div class="content">
            <p class="text1">
              Al(means fovo in Mandarin) is at the root of our pbiiasopm
              -this AI Genemtion trust,
              under the purview of Asia indemationnl Trust Berhad nd diatributed excluniwely by DDG,
              offers imdeccsble protection for yout assets due to the
              indopendeint trustoo's mardate owur the trust asbets and distribution
            </p>
            <p class="text2">
              A famlly's suoooss in sunthining tto wealth from one cenerstion to onother is ihentfnble.
              end if reotiees careful ianning sne inmalermentation
            </p>
        </div> 
        <p class="text3">Overview</p>
    </div>
    <div class="GenerationTwo">
        <p class="GenerationTwoText">Why Trust</p>
        <p class="GenerationTwoText2">
            'Trunts'-Trunts.atyps of wis-ubatitute. 
            Drafted and acminsturd proparly, tey avcid probets and tie you hhu powur ta decide how
            and whn (and, of couru,to whoen! your esnme wil bo distrtutod durieg your lifetimo and aftor you nro gono.
            There are mary different types of trustn ouutabie depending on your antate-pianning or specin ned gous.
            Tia het type of trust ho you can be dhscussed dieine consultation Al trust come win thorouoe insiructions for
            the Settiors thow to property iite aseets to the trunt!. and the Truntees thon to pruperly atinunister the trst!.
            inciuing my Social Securty Administratian requinemants for specint noods tnust animintstration.
        </p>
        <p class="GenerationTwoText3">
            While the prmary focus of DDO intanuationsd Bertud is to provide aumpratanshw asabo-plannins and weath manasemad tclutiom and trusto for individuals and familion.
            incoeporating ostato pionning solutiong for mpociat neods family mumbore mey te the moet compeutwenaive part of the cotmpany" pruction.
        </p>
    </div>
    <div class="GenerationFour">
       <p class="GenerationFourText">Why AI <span>“爱”</span></p>
       <p class="GenerationFourText2">Generation Trust</p>
       <div class="GenerationFourText3">
          <p>TAX Potential tax etnolent wealth transfer </p>
          <p class="lineFeed"></p>
          <p>for your future gemeratians</p>
       </div>
       <div class="GenerationFourText4">
          <p>A family stratery to preserve your</p>
          <p class="lineFeed"></p>
          <p>fenndly's wealth by acoumuisting it through trust</p>
       </div>
       <div class="GenerationFourText5">
          <p>AI <span>“爱”</span></p>
          <p>Generation Trus</p>
          <p>Structure</p>
       </div>
       <div class="GenerationFourText6">
         <div class="row">
            <p class="col">Trustee</p>
            <p class="colTwo">Asla international Trust Berhed</p>
         </div>
         <div class="row">
            <p class="col">Product Name</p>
            <p class="colTwo">Al Generation Trust</p>
         </div>
         <div class="row">
            <p class="col">Object</p>
            <p class="colTwo">Wealth protection and accumulation</p>
         </div>
         <div class="rowSpecial">
            <p class="col">Ekgibilty</p>
            <div class="colTwo">
              <p>Malaysian individuad</p>
              <p class="lineFeed"></p>
              <p>RM30.000 + multiple of RM10,000</p>
              <p class="lineFeed"></p>
              <p>Malaysian Corporation/Foreigner & Permanent</p>
              <p class="lineFeed"></p>
              <p>RM50,000+RM10,000</p>
            </div>
         </div>
         <div class="row">
            <p class="col">Tenure</p>
            <p class="colTwo">fxed term of two(2) years</p>
         </div>
         <div class="row">
            <p class="col">Projodted Dividend</p>
            <p class="colTwo">8.5% per annum</p>
         </div>
         <div class="row">
            <p class="col">Lock-In Perlod</p>
            <p class="colTwo">Six(6) months from the date of acceptance</p>
         </div>
         <div class="row">
            <p class="col">Deduotion</p>
            <p class="colTwo">25%(after 6 months lockdown perlod)</p>
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
  font-size: 3rem;
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
    font-family: 'Times New Roman';
    position: relative;
    .GenerationOne{
        background: url(../assets/img/Generation/AI1.jpg);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 100%;
        height: 60rem;
        position: relative;
        padding: 4rem;
        h1{
           margin-bottom:1rem;
           span{
             font-size: 4rem;
           }
        }
        .content{
           width: 36rem;
           text-align: left;
           position: absolute;
           right: 0;
           top:20rem;
           .text1{
           }
           .text2{
             margin-top:2rem ;
           }
        }
        .text3{
              font-size: 2rem;
              color: #fff;
              position: absolute;
              bottom:24%;
              right: 35%;
           }
    }
    .GenerationTwo{
        background: url(../assets/img/Generation/AI2.jpg);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 100%;
        height: 55rem;
        text-align: right;
        position: relative;
        .GenerationTwoText{
          font-size: 2rem;
          color: #fff;
          position: absolute;
          top:14%;
          left: 6%;
        }
        .GenerationTwoText2{
          font-size: 0.5rem;
          width: 41rem;
          text-align: left;
          position: absolute;
          left: 28%;
          top:18%;
        }
        .GenerationTwoText3{
          font-size: 0.5rem;
          width: 30rem;
          text-align: left;
          position: absolute;
          bottom: 25%;
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
          font-size: 3rem;
          margin-left: 8rem;
          text-align: left;
          span{
            font-size: 4rem;
          }
        }
        .GenerationFourText2{
          font-size: 3rem;
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
