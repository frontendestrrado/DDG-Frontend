<template>
  <div class="Aspirations">
    <div class="title">Aspirations</div>
    <div class="AspirationsOne">
      <div class="content">
        <div class="minTitle">OUR</div>
        <div class="mintit">Vision</div>
        <div class="text">To be the leading Estate Planning Provider in Malaysia with the upmost interpersonal services, customize solutions, and objectives that overcome and simplify the challenges of the complex financial and regulatory environment.</div>
        <div class="mintit">Mission</div>
        <div class="text">We are committed to be a reliable and efficient service provider with integrity by continuously improving our team and advisor’s professional know-how to build and maintain a continuous and mutually beneficial relationship with our clients. </div>
      </div>
    </div>
    <div class="AspirationsTwo">
      <div class="title titleFont titleColor">
        <span>OUR</span><br>
        <span class="mintit">VALUE</span>
      </div>
      <div class="content">
        <div class="text">
          <span class="mintit1">Transparency</span> <br>
          <span>The DNA that demonstrates honesty and openness for lasting relationships</span>
        </div>
        <div class="text">
          <span class="mintit2">Responsibility</span><br>
          <span>Being accountable and accept ownership to complete required duties.</span>
        </div>
        <div class="text">
          <span class="mintit3">Understanding</span><br>
          <span>We listen to understand in order to fulfil our clients’ needs and wants.</span>
        </div>
        <div class="text">
          <span class="mintit4">Sincerity</span><br>
          <span>In pursuit of truth, keeping our word in a truthful and genuine way.</span>
        </div>
        <div class="text">
          <span class="mintit5">Teamwork</span><br>
          <span>Our combined experience and expertise that leads to impeccable results.</span>
        </div>
      </div>
    </div>
    <div class="AspirationsThree"></div>
    <div class="Interval"></div>
    <div class="AspirationsFour">
      <div class="title">Now Estate Planning <br> Made Easy</div>
      <div class="contact" @click="toContactUs()">
        <van-icon name="chat-o" size="3rem" color="#fff" />
      </div>
    </div>
    <div class="AspirationsFive titleFont">
      <span>For more enquiries</span>
      <span class="contactUs" @click="toContactUs()">Contact Us</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    toContactUs() {
      this.$store.commit('changePage', {
        tabbar: '/ContactUs',
        title: 'Contact Us',
      });
      this.$router.push('/ContactUs');
    }
  }
}
</script>

<style scoped lang="scss">
.Aspirations {
  color: #7C655D;
    .title {
      font-size: 3rem;
      font-family: 'Times New Roman';
    }
  .AspirationsOne {
    background: url(../assets/img/Aspirations/Aspirations1.jpg) no-repeat scroll;
    min-height: 50rem;
    background-size: 100%;
    text-align: left;
    .content {
      padding-top: 11%;
      padding-left: 14%;
      width: 35rem;
      color: #B09A8F;
      .minTitle {
        font-size: 4.5rem;
        font-family: 'Times New Roman';
        margin-bottom: 1.5rem;
        font-weight: bold;
        color: #7C655D;
      }
      .mintit {
        font-size: 3rem;
        font-family: 'Times New Roman';
        margin-bottom: 1.5rem;
      }
      .text {
        margin-bottom: 1.5rem;
      }
    }
  }
  .AspirationsTwo {
    background: url(../assets/img/Aspirations/Aspirations2.jpg) no-repeat scroll;
    height: 50rem;
    background-size: 100%;
    text-align: left;
    position: relative;
    .title {
      font-weight: bold;
      font-size: 4.5rem;
      position: absolute;
      top: 19%;
      left: 14%;
      .mintit {
        color: #AF998E;
        font-size: 3.5rem;
      }
    }
    .content {
      position: absolute;
      top: 30%;
      left: 70%;
      height: 27rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .mintit1 {
        color: #B9A089;
      }
      .mintit2 {
        color: #796C64;
      }
      .mintit3 {
        color: #C7BA8D;
      }
      .mintit4 {
        color: #AD9F94;
      }
      .mintit5 {
        color: #58585A;
      }
    }
  }
  .AspirationsThree {
    background: url(../assets/img/Aspirations/Aspirations3-2.png) no-repeat scroll;
    height: 29rem;
    background-size: 100%;
  }
  .AspirationsFour {
    background: url(../assets/img/Aspirations/Aspirations4.jpg) no-repeat scroll;
    height: 41rem;
    background-size: 100%;
    position: relative;
    .title {
      font-size: 3.5rem;
      text-align: right;
      position: absolute;
      top: 22%;
      right: 14%;
    }
    .contact {
      background-color: #55B95F;
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      position: absolute;
      left: 5%;
      bottom: 5%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer
    }
  }
  .AspirationsFive {
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
  .Aspirations {
  color: #7C655D;
    .title {
      font-size: 3rem;
      font-family: 'Times New Roman';
    }
  .AspirationsOne {
    background: url(../assets/img/png/page5.png) no-repeat scroll;
    min-height: 80rem;
    background-size: 100%;
    text-align: left;
    .content {
      padding: 10%;
      width: 100%;
      color: #B09A8F;
      position:absolute;
      top:26%;
      .minTitle {
        font-size: 8rem;
        font-family: 'Calibri';
        margin-bottom: 1.5rem;
        font-weight: bold;
        color: #7C655D;
        padding-top: 1rem;
        // position: absolute;
      }
      .mintit {
        font-size: 5rem;
        font-family: 'Calibri';
        margin-bottom: 1.5rem;
        margin-left: 7rem;
      }
      .text {
        font-size: 2rem;
        margin-bottom: 3rem;
        margin-left: 7rem;
        line-height: 2.5rem;
      }
    }
  }
  .AspirationsTwo {
    background: url(../assets/img/png/page1.png) no-repeat scroll;
    height: 80rem;
    background-size: 100%;
    text-align: left;
    position: relative;
    .title {
      font-weight: bold;
      font-size: 8rem;
      position: absolute;
      top: 15%;
      left: 10%;
      .mintit {
        color: #AF998E;
        font-size: 8rem;
        position: absolute;
        left: 28%;
      }
    }
    .content {
      position: absolute;
      top: 37%;
      left:60%;
      height: 43rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-right: 10rem;
      .mintit1 {
        color: #B9A089;
      }
      .mintit2 {
        color: #796C64;
      }
      .mintit3 {
        color: #C7BA8D;
      }
      .mintit4 {
        color: #AD9F94;
      }
      .mintit5 {
        color: #58585A;
      }
    }
  }
  .AspirationsThree {
    background: url(../assets/img/png/2page.png) no-repeat scroll;
    height: 120rem;
    background-size: 100% 103%; 
  }
  .Interval{
    width: 100%;
    height: 10rem;
  }
  .AspirationsFour {
    background: url(../assets/img/Aspirations/Aspirations4.jpg) no-repeat scroll;
    height: 55rem;
    background-size: 150%;
    background-position-x: -13rem;
    //  background-position-Y: -13rem;
    position: relative;
    .title {
      font-family: "Calibri";
      font-weight: bold;
      font-size: 4rem;
      text-align: right;
      position: absolute;
      top: 5%;
      right: 14%;
    }
    .contact {
      background-color: #55B95F;
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      position: absolute;
      left: 5%;
      bottom: 5%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer
    }
  }
  .AspirationsFive {
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
</style>