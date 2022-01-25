<template>
  <div class="ourServices">
      <h1>Our Services</h1>
    <div class="ourServicesOne">
      
    </div>
    <div class="ourServicesOneContent">
        <div class="text">
            <p>When a person is deceased.ALL of the person’ s assets will be frozen!</p> 
            <p class="lineFeed"></p>
            <p> DDG helps address the estate distribution to be according to a person’s wishes in</p>
            <p class="lineFeed"></p>
            <p>case of death,being incapacitated,or comatose.</p> 
            <p class="lineFeed"></p>
            <p>DDG’s Advisor creates a master plan for the management of your property during life</p>  
            <p class="lineFeed"></p>
            <p>and the distribution of that property at the person’s death.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
        </div>
        <div class="text2">
          <p>Estate Planning:</p>
          <p class="lineFeed"></p>
          <p>1. Give more control over assets during life</p>
          <p class="lineFeed"></p>
          <p>2. Provide care when disabled</p>
          <p class="lineFeed"></p>
          <p>3. Allow for the transfer of wealth to whom and when wanted, at the lowest possible cost</p>
        </div>
        <div class="text2 text3">
          <p>Common estate planning issues addressed in the wealth management process include: </p>  
          <p class="lineFeed"></p>
          <p> <img src="../assets/img/png/复选-选中.png" >Transfer of wealth</p> 
          <p class="lineFeed"></p>
          <p> <img src="../assets/img/png/复选-选中.png" >Minimization of transfer taxes</p> 
          <p class="lineFeed"></p> 
          <p> <img src="../assets/img/png/复选-选中.png" >Asset protection</p> 
          <p class="lineFeed"></p>
          <p> <img src="../assets/img/png/复选-选中.png" >Charitable contribution</p>  
          <p class="lineFeed"></p>
          <p> <img src="../assets/img/png/复选-选中.png" >Confidentiality without disclosure at court</p> 
        </div>
    </div>
    <div class="ourServicesTwo">
      
    </div>
    <div class="ourServicesThree">
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
  name: "OurServices",
  data() {
    return {
      result: ['a', 'b'],
      pageContent: [],
      pageWidth: "1200",
    };
  },
  mounted() {
    // this.getourServicesPage();
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
.ourServices{
    font-size: 2rem;
    font-family: 'Calibri';
    .ourServicesOneContent{
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
          img{
            width: 2rem;
            height: 2rem;
            margin-top:1rem;
            margin-right:2rem ;
          }
        }
        .text3{
          margin-top: 2rem;
        }
    }
    .ourServicesOne{
        background: url(../assets/img/OurServices/OurServices1.jpg);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 100%;
        height: 50rem;
        text-align: right;
        position: relative;
    }
    .ourServicesTwo{
        background: url(../assets/img/OurServices/OurServices2.jpg);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 100%;
        height: 30rem;
        text-align: right;
        position: relative;
    }
    .ourServicesThree{
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
@media screen and (max-width: 1025px){
  .ourServices{
    font-size: 3rem;
    font-family: 'Calibri';
    .ourServicesOneContent{
        padding:3rem 10rem;
        color: #7C655D;
        // line-height: 2rem;
        text-align: left;
        .text{
            font-size: 3rem;
            text-align: center;
        }
        .text2{
          font-size: 3rem;
          text-align: left;
          padding-left: 5rem;
          img{
            width: 2rem;
            height: 1.8rem;
            margin-top:1rem;
            margin-right:2rem ;
          }
        }
        .text3{
          margin-top: 2rem;
        }
    }
    .ourServicesOne{
        background: url(../assets/img/OurServices/OurServices1.jpg);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 100%;
        height: 50rem;
        text-align: right;
        position: relative;
    }
    .ourServicesTwo{
        background: url(../assets/img/OurServices/OurServices2.jpg);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 100%;
        height: 30rem;
        text-align: right;
        position: relative;
    }
    .ourServicesThree{
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
}
</style>
