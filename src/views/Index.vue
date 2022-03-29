<template>
  <div class="Home">
    <!-- <Common :pageData="pageContent"></Common> -->
    <div class="homeOne">
      <span class="title titleFont">Welcome to<br> DDG International <br> Berhad</span>
      <van-button @click="toContactUs" type="default" color="7C655D" class="contactUs titleFont">Contact Us</van-button>
    </div>
    <div class="homeTwo">
      <span class="minTitle titleFont">Safeguard Your Wealth <br> Protect Your Family</span><br>
      <span class="content">Here at DDG, we can help preserve your wealth while offering you greater <br> flexibility over the management and distribution of your assets.</span>
    </div>
    <div class="homeThree">
      <div class="minTitle titleFont">About Us</div>
      <div class="mintit">DDG International: <br> Venture into Potential</div>
      <div class="content">DDG International Berhad (DDG), is a joint collaboration between Asia International Trust Berhad, a well-established Trustee in the ASEAN region and Chiong & Partners, one of Malaysia’s leading trust advocates and award-winning legal firm. </div>
      <div class="content">Established on 5th of July 2021, DDG is headquartered in Butterworth, Penang and has footprint across Malaysia, Singapore and China. At DDG, we pride ourselves on delivering results to our clients – with over RM300M private trusts have been set, both offshore and onshore, for the past 4 years. With innovative ideas and cutting-edge solutions, DDG helps make financial progress towards a foreseeable financial future for clients with varied and bespoke portfolios. </div>
      <div class="content">Founded and led by Herman Tan, a Penang-born entrepreneur, he brings more than 20 years of financial services experience, with more than half of that within business roles throughout ASEAN region. With Herman’s financial leadership support – backed by a pool of legal advisors and corporate consultants, DDG maintains its impeccable standing to provide innovative, comprehensive, and professional estate planning and trust management solutions to its clients.</div>
      <div class="mintit line">DDG Academy: <br> Your Career. Our Passion</div>
      <div class="content">At DDG, we strongly believe that education should be part of the service we offer to clients and therefore DDG Academy is founded, and it is made up of a group of legal advisors and trust experts and educators that work together to “improve the career” of all our DDG advisors and young people. A common mission is shared – that is to nurture successful trust specialists who are knowledgeable, confident and can think and act independently.</div>
      <div class="content">At the heart of DDG Academy is the belief that the work that we do must transform the career chances of our advisors. DDG believes that the best way to transform career chances is to actively shape the minds, attitudes and habits of young people through the DDG education framework that enables them to become the leaders of tomorrow.</div>
    </div>
    <div class="homeFour">
      <div class="minTitle titleFont">Why Choose Us</div>
      <div class="icons">
        <div>One-stop solution on estate, and trust advisory </div>
        <div>Customized solutions for your family</div>
        <div>Advice from qualified legal advisors</div>
        <div>Support from well-trained professional team</div>
        <div>Backed by seamless trust application</div>
      </div>
    </div>
     <div class="ProductsThree">
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
  name: "Home",
  data() {
    return {
      ScreenClientWidth:1025,
      isHomeThreee:false,
      pageContent: [],
      pageWidth: "1200",
    };
  },
  mounted() {
    this.ScreenClientWidth=document.body.clientWidth;
    this.getHomePage();
    this.checkScreen();
  },
  watch:{
    ScreenClientWidth(val,old){
       if(val!==old) this.checkScreen();
    }
  },
  methods: {
    getHomePage() {
      this.$axios({
        method: "get",
        url: "/api/v1/pages?type=1",
      })
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            this.pageContent = res.data.modules;
            this.pageWidth = res.data.width;
            this.pageContent.forEach((item, i) => {
              if (item.type == 9) {
                item.data_collects.forEach((itemi, j) => {
                  this.$set(
                    this.pageContent[i].data_collects[j],
                    "content",
                    ""
                  );
                });
              }
            });
          } else {
            this.$router.push("/");
          }
        })
        .catch((error) => {});
    },
    toContactUs() {
      this.$store.commit('changePage', {
        tabbar: '/ContactUs',
        title: 'Contact Us',
      });
      this.$router.push('/ContactUs');
    },
    //
  // 屏幕检测变化
    checkScreen(){
      if (document.body.clientWidth <1025){
          this.isHomeThreee=false
      }else{
        this.isHomeThreee=true
      }
    }
  },
};
</script>

<style scoped lang="scss">
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.homeOne {
  font-family:" Calibri";
  background: url(../assets/img/Home/Home1.png);
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: 100%;
  height: 50rem;
  text-align: right;
  position: relative;
  .title {
    font-size: 4rem;
    color: #7C655D;
    font-weight: bold;
    position: absolute;
    top: 30%;
    right: 5%;
  }
  .contactUs {
    font-size: 1.2rem;
    background-color: #7C655D;
    position: absolute;
    top: 70%;
    right: 7%;
    border-radius: 15px;
    height: 3rem;
    width: 9rem;
  }
}
.homeTwo {
  background-color: #BC9D84;
  // height: 15rem;
  text-align: left;
  padding: 3rem 3rem;
  color: #fff;
  .minTitle {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  .content {
    display: inline-block;
    margin-top: 1rem;
    font-size: 1.1rem;
    line-height: 2rem;
  }
}
.homeThree {
  background: url(../assets/img/Home//Home3.jpg);
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 109rem;
  text-align: left;
  position: relative;
  padding: 5rem 5rem;
  color: #7C655D;
  .minTitle {
    font-size: 5rem;
    margin-top: 10rem;
  }
  .mintit {
    font-size: 1.5rem;
    margin-top: 2rem;
    line-height: 2rem;
  }
  .content {
    margin-top: 2rem;
    width: 50rem;
    line-height: 1.5rem;
  }
}
.homeFour {
  background: url(../assets/img/Home/Home4.jpg);
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: 100%;
  height: 24rem;
  position: relative;
  color: #fff;
  .minTitle {
    font-size: 3rem;
    padding-top: 3rem;
  }
  .icons {
    position: absolute;
    top: 70%;
    left: 19%;
    display: flex;
    justify-content: space-between;
    width: 55rem;
    div {
      width: 10rem;
    }
  }
}
.ProductsThree{
        height: 10rem;
        background-color: #7C655D;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size:3rem;
        font-weight: bold;
        @media screen and (max-width: 768px){
          margin-top: -1px;
        }
        .contactUs {
            background-color: #fff;
            color: #7B655D;
            padding: 1.3rem;
            border-radius: 1rem;
            margin-left: 2rem;
            cursor: pointer;
        }
    }
@media screen and (max-width: 1025px){
  h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.homeOne {
  font-family:" Calibri";
  background: url(../assets/img/Home/Home1.png);
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: 100%;
  height: 50rem;
  text-align: right;
  position: relative;
  .title {
    font-size: 4rem;
    color: #7C655D;
    font-weight: bold;
    position: absolute;
    top: 30%;
    right: 5%;
  }
  .contactUs {
    font-size: 1.2rem;
    background-color: #7C655D;
    position: absolute;
    top: 60%;
    right: 7%;
    border-radius: 15px;
    height: 3rem;
    width: 9rem;
  }
}
.homeTwo {
  background-color: #BC9D84;
  // height: 15rem;
  text-align: left;
  padding: 3rem 3rem;
  color: #fff;
  .minTitle {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  .content {
    display: inline-block;
    margin-top: 1rem;
    font-size: 1.1rem;
    line-height: 2rem;
  }
}
.homeThree {
  font-family:" Calibri";
  background: url(../assets/img/png/蒙版51@3x.png);
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  min-height: 109rem;
  text-align: left;
  position: relative;
  padding: 10rem;
  color: #7C655D;
  .minTitle {
    font-size: 5rem;
    margin-top: 10rem;
  }
  .mintit {
    font-size: 3.4rem;
    margin-top: 2rem;
    line-height: 4rem;
  }
  .line{
    margin-top:5rem ;
  }
  .content {
    font-size: 2.5rem;
    margin-top: 2rem;
    width: 70rem;
    line-height: 3rem;
  }
}
.homeFour {
  font-family: "Calibri";
  background: url(../assets/img/png/page3.png);
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: 100%;
  height: 80rem;
  position: relative;
  color: #fff;
  .minTitle {
    font-family: "Calibri";
    text-align: left;
    font-size: 3.5rem;
    padding-top: 9rem;
    margin-left:9rem ;
  }
  .icons {
    position:absolute;
    top:18%;
    left: 30%;
    display: flex;
    flex-direction: column;
    width: 55rem;
     div {
      width: 100%;
      font-size: 2.8rem;
      text-align: left;
      height:12rem;
      display: flex;
      align-items: center;
    }
  }
}
.ProductsThree{
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
@media screen and (max-width: 1200px){
  .homeOne {
    .contactUs {
      height: 3rem;
      width: 9rem;
    }
  }
}
/*中等屏幕*/
@media screen and (max-width: 992px){
  .homeOne {
    .contactUs {
      height: 5rem;
      width: 14rem;
    }
  }
}
/*平板*/
@media screen and (max-width: 768px){
  .homeOne {
    .contactUs {
      height: 6rem;
      width: 14rem;
      font-size: 2rem;
    }
  }
  .homeThree {
    .content {
      line-height: 2.5rem;
    }
  }
}
/*手机*/
@media screen and (max-width: 576px){
	.homeOne {
    .contactUs {
      height: 8rem;
      width: 22rem;
    }
  }
  .homeThree {
    .mintit {
      line-height: 4rem;
    }
    .content {
      line-height: 3rem;
    }
  }
}

</style>
