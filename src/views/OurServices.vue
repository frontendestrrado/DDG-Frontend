<template>
  <div class="ourServices">
      <h1>Our Services</h1>
    <div class="ourServicesOne">
      
    </div>
    <div class="ourServicesOneContent">
        <p>
            When a person is deceased.ALL of the person’ s assets will be frozen!
            DDG helps address the estate distribution to be according to a person’s wishes in
            case of death,being incapacitated,or comatose.
            DDG’s Advisor creates a master plan for the management of your property during life
            and the distribution of that property at the person’s death.
      </p>
      <h2>Estate Pianning:</h2>
      <ol>
          <li> 
              Give more control over assets during Iife
          </li>
          <li>
              Provide care when disabied
          </li>
          <li>
             Allow for tho trensfor of woaith to whom and whon wanted at the lowest possible cost
          </li>
      </ol>
      <div>
        <label>Common estate planning issues addressed in the weaith management process include: </label>
        <van-checkbox-group v-model="result" >
            <van-checkbox name="a">Transfer of wealth</van-checkbox>
            <van-checkbox name="b">Minimization of transfer taxes</van-checkbox>
            <van-checkbox name="b">Asset protection</van-checkbox>
            <van-checkbox name="b">Charitable contribution</van-checkbox>
            <van-checkbox name="b">Confdentiality without disciosure at court</van-checkbox>
        </van-checkbox-group>
      </div>
    </div>
    <div class="ourServicesTwo">
      
    </div>
    <div class="ourServicesThree">
        <span class="enquiries">For more enquiries</span>
        <van-button @click="toContactUs" type="default" color="7C655D" class="contactUs">Contact Us</van-button>
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
    // getourServicesPage() {
    //   this.$axios({
    //     method: "get",
    //     url: "/api/v1/pages?type=1",
    //   })
    //     .then((res) => {
    //       console.log(res);
    //       if (res.status == 200) {
    //         this.pageContent = res.data.modules;
    //         this.pageWidth = res.data.width;
    //         this.pageContent.forEach((item, i) => {
    //           if (item.type == 9) {
    //             item.data_collects.forEach((itemi, j) => {
    //               this.$set(
    //                 this.pageContent[i].data_collects[j],
    //                 "content",
    //                 ""
    //               );
    //             });
    //           }
    //         });
    //       } else {
    //         this.$router.push("/");
    //       }
    //     })
    //     .catch((error) => {});
    // },
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
a {
  color: #42b983;
}
.ourServices{
    .ourServicesOneContent{
        padding:5rem 10rem;
        color: #7C655D;
        line-height: 3rem;
        text-align: left;
        p{
            // letter-spacing: 0.1rem;
            line-height: 3rem;
            text-align: center;
        }
        h2{
            margin-top: 4rem;
        }
        ol{
            margin-bottom: 4rem;
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
        background: url(../assets/img/OurServices/OurServices3.jpg);
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 100%;
        height: 10rem;
        text-align: right;
        position: relative;
        .enquiries{
            font-size: 2rem;
            color: #fff;
            position: absolute;
            top: 33%;
            left: 30%;
        }
        .contactUs {
            background-color: #fff;
            position: absolute;
            top: 25%;
            left: 52%;
            border-radius: 1rem;
            height: 3rem;
            width: 11rem;
            span{
              color: #7C655D;
            }
        }
    }
}
</style>
