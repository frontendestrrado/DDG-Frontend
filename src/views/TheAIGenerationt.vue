<template>
  <div class="Generation">
      <h1>The AI“爱”Generation Trust</h1>
    <div class="GenerationOne">
        <h1>The AI  <span>“爱”</span></h1>
        <h1>Generation Trust</h1>
        <div class="content">
            <p class="title">
              Al(means fovo in Mandarin) is at the root of our pbiiasopm
              -this AI Genemtion trust,
              under the purview of Asia indemationnl Trust Berhad nd diatributed excluniwely by DDG,
              offers imdeccsble protection for yout assets due to the
              indopendeint trustoo's mardate owur the trust asbets and distribution
            </p>
            <p style="margin-top:2rem" class="title">
              A famlly's suoooss in sunthining tto wealth from one cenerstion to onother is ihentfnble.
              end if reotiees careful ianning sne inmalermentation
            </p>
        </div> 
    </div>
    <div class="GenerationTwo">
      
    </div>
    <div class="GenerationFour">
      
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
.Generation{
     color: #7C655D;
    .title {
      font-size: 3rem;
      font-family: 'Times New Roman';
    }
     position: relative;
    .GenerationOne{
        background: url(../assets/img/Generation/AI1.jpg);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 100%;
        height: 50rem;
        text-align: center;
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
          //  line-height: 2rem;
           position: absolute;
           right: 0;
           top:20rem;
        }
    }
    .GenerationTwo{
        background: url(../assets/img/Generation/AI2.jpg);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 100%;
        height: 30rem;
        text-align: right;
        position: relative;
    }
    .GenerationFour{
        background: url(../assets/img/Generation/AI3.jpg);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 100%;
        height: 50rem;
        text-align: right;
        position: relative;
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
