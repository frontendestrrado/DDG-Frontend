<template>
  <!-- 培训计划 -->
  <!-- <div class="LearnUse bodybox">
    <div class="title">Foundation Programmes</div>
    <div class="content">
      <div>Step 01</div>
      <div>{{bttCode ? 'Completed' : 'Pending'}}</div>
    </div>
    <div class="content">
      <div>Step 02</div>
      <div>Pending</div>
    </div>
    <div class="content">
      <div>Step 03</div>
      <div>Pending</div>
    </div>
    <div class="title">Undergraduate Programmes</div>
    <div class="content">
      <div>Step 04</div>
      <div>Pending</div>
    </div>
    <div class="content">
      <div>Step 05</div>
      <div>Pending</div>
    </div>
    <div class="content">
      <div>Step 06</div>
      <div>Pending</div>
    </div>
    <div class="title">Postgraduate Programmes</div>
    <div class="content">
      <div>Step 07</div>
      <div>Pending</div>
    </div>
  </div> -->
  <div>
    <div v-if="isShow">
      <van-row style="display:inline-block;" class="spin">
        <van-col>
          <van-row class="step middle">Step 01</van-row>
          <van-row class="step middle">Step 02</van-row>
          <van-row class="step middle">Step 03</van-row>
        </van-col>
        <van-col class="titleCol middle">Foundation Programmes</van-col>
        <van-col>
          <van-row class="middle status">{{bttCode ? 'Completed' : 'Pending'}}</van-row>
          <van-row class="status middle">Pending</van-row>
          <van-row class="status middle">Pending</van-row>
        </van-col>
        <van-col>
            <van-row class="info middle"><span v-if="bttCode">Professional Certificate in Qualified TrustAdvisor (QTA)</span></van-row>
            <van-row class="info middle"><span></span></van-row>
            <van-row class="info middle"><span></span></van-row>
        </van-col>
      </van-row>
      <van-row style="display:inline-block;" class="spin spin-rowTwo">
          <van-col>
            <van-row class="step middle rowTwo">Step 04</van-row>
            <van-row class="step middle rowTwo">Step 05</van-row>
            <van-row class="step middle rowTwo">Step 06</van-row>
          </van-col>
          <van-col class="titleCol middle rowTwo">Undergraduate Programmes</van-col>
          <van-col>
            <van-row class="status middle rowTwo">Pending</van-row>
            <van-row class="status middle rowTwo">Pending</van-row>
            <van-row class="status middle rowTwo">Pending</van-row>
          </van-col>
          <van-col>
            <van-row class="info middle rowTwo"><span></span></van-row>
            <van-row class="info middle rowTwo"><span></span></van-row>
            <van-row class="info middle rowTwo"><span></span></van-row>
          </van-col>
      </van-row>
      <van-row style="display:inline-block;" class="spin spin-rowThree">
        <van-col class="step middle rowThree">Step 07</van-col>
        <van-col class="titleCol middle rowThree" style="height: 6rem;">Postgraduate Programmes</van-col>
        <van-col class="status middle rowThree">Pending</van-col>
        <van-col class="info middle rowThree"><span></span></van-col>
      </van-row>
    
    </div>
    <div v-else>
      <div style="width:70%;margin: 0 auto;">
        <van-row style="display:inline-block;">
          <van-col class="step middle">Step 01</van-col>
          <van-col class="step middle">Step 02</van-col>
          <van-col class="step middle">Step 03</van-col>
        </van-row>
        <van-row style="display:inline-block;">
          <van-col class="titleCol middle">Foundation Programmes</van-col>
        </van-row>
        <van-row style="display:inline-block;">
          <van-col class="middle status">{{bttCode ? 'Completed' : 'Pending'}}</van-col>
          <van-col class="middle status">Pending</van-col>
          <van-col class="middle status">Pending</van-col>

        </van-row>
        <van-row style="display:inline-block;">
          <van-col class="info middle" v-if="bttCode">Professional Certificate in Qualified TrustAdvisor (QTA)</van-col>
          <van-col class="info middle"><span></span></van-col>
          <van-col class="info middle"><span></span></van-col>
          
        </van-row>
      </div>
      <div style="width:70%;margin: 0 auto;">
        <van-row style="display:inline-block;">
          <van-col class="step middle rowTwo">Step 04</van-col>
          <van-col class="step middle rowTwo">Step 05</van-col>
          <van-col class="step middle rowTwo">Step 06</van-col>
        </van-row>
        <van-row style="display:inline-block;">
          <van-col class="titleCol middle rowTwo">Undergraduate Programmes</van-col>
        </van-row>
        <van-row style="display:inline-block;">
          <van-col class="middle status rowTwo">Pending</van-col>
          <van-col class="middle status rowTwo">Pending</van-col>
          <van-col class="middle status rowTwo">Pending</van-col>
        </van-row>
        <van-row style="display:inline-block;">
          <van-col class="info middle rowTwo"><span></span></van-col>
          <van-col class="info middle rowTwo"><span></span></van-col>
          <van-col class="info middle rowTwo"><span></span></van-col>
        </van-row>
      </div>
      <div style="width:20.5%;margin: 0 auto;">
        <van-row style="display:inline-block;">
          <van-col class="step middle rowThree">Step 07</van-col>
        </van-row>
        <van-row style="display:inline-block;">
          <van-col class="titleCol middle rowThree" style="width:15rem">Postgraduate Programmes</van-col>
        </van-row>
        <van-row style="display:inline-block;">
          <van-col class="middle status rowThree">Pending</van-col>
        </van-row>
        <van-row style="display:inline-block;">
          <van-col class="info middle rowThree"><span></span></van-col>
        </van-row>
      </div>

       
       
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      windowWidth: document.documentElement.clientWidth,  //实时屏幕宽度
      isShow:true,
      bttCode: "",
      formData:{
        title:['Foundation Programmes','Undergraduate Programmes','Postgraduate Programmes'],
        step:['Step 01','Step 02','Step 03','Step 04','Step 05','Step 06','Step 07'],
        pend:['Pending','Pending','Pending','Pending','Pending','Pending','Pending'],
        info:[
          'Professional Certificate in Qualified TrustAdvisor (QTA)',
          'Advanced Certificate in Estate Planning',
          'Graduate Certificate in Estate Planning, Succession And Asset Protection',
          'International Postgraduate Diploma in Estate Planning and Management',
          'Special Executive Master in Estate & Trust Planning',
          'Chartered Financial Analyst (CFA)',
          'MA in Estate & Trust Planning (Level 7)'
        ]
      }
    };
  },
  created(){
    
  },
  mounted() {
    var that = this;
    // <!--把window.onresize事件挂在到mounted函数上-->
    window.onresize = () => {
      // console.log('1212')
        return (() => {
          window.fullWidth = document.documentElement.clientWidth;
          that.windowWidth = window.fullWidth; // 宽
        })()
      };
    if(document.documentElement.clientWidth<1010){
       this.isShow=false
    }else{
      this.isShow=true
    }
    this.getUser();
  },
  computed:{
   
  },
  watch: {
      windowWidth (val) {
        // let that = this;
        // console.log("实时屏幕寬度：",val, that.windowWidth );
        if(val<1010){
          this.isShow=false
        }else{
          this.isShow=true
        }
      },
  },    
  methods: {
    getUser() {
      this.$axios({
        method: "get",
        url: "/api/v1/user",
        headers: {
          Authorization: sessionStorage.token_type + sessionStorage.token,
        },
      })
        .then((res) => {
          console.log(res, 222);
          this.bttCode = res.btt_code
        })
        .catch((err) => {
          this.$toast({
            type: "fail",
            message: "error",
          });
        });
    },
  },
};
</script>

<style scoped>
/deep/ .van-cell__title {
  width: 30%;
  flex: none;
  text-align: left;
}
/deep/ .van-cell__value {
  color: #323233;
}
.LearnUse {
  width: 100%;
  text-align: left;
}
.title {
  font-weight: 600;
  font-size: 20px;
  margin: 10px 16px;
}
.content {
  display: flex;
  margin: 10px 16px;
}
.content div {
  width: 100px;
}
/*——————————————————————————————————頁面UI重寫—————————————————————————————————— */
.step{
  width: 5rem;
  background-color: #bd9e85;
  height: 6rem;
  margin-bottom: 2rem;
}
.titleCol{
  width: 10rem;
  height: 22rem;
  margin: 0 2rem;
  background-color: #bd9e85;
}
.middle{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.status{
  width: 7rem;
  background-color: #bd9e85;
  height: 6rem;
  margin-bottom: 2rem;
  margin-right:2rem;
}
.info{
  width: 18rem;
  background-color: #bd9e85;
  height: 6rem;
  margin-bottom: 2rem;
  padding:  2rem;
  
}
.rowTwo{
  background-color:#af998f;
}
.rowThree{
  background-color:#ddc791;
}
@media screen and (max-width: 1030px){
  .step{
    width: 15rem;
    background-color: #bd9e85;
    height: 5rem;
    margin-bottom: 2rem;
    margin-right: 2rem;
  }
  .titleCol{
    width: 49rem;
    height: 10rem;
    margin: 0 0rem;
    background-color: #bd9e85;
    margin-bottom: 2rem;
    margin-right: 2rem;
  }
  .middle{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .status{
    width: 15rem;
    background-color: #bd9e85;
    height: 6rem;
    margin-bottom: 2rem;
    margin-right:2rem;
  }
  .info{
    width: 15rem;
    background-color: #bd9e85;
    height: 18rem;
    margin-bottom: 2rem;
    padding:  2rem;
    margin-right:2rem ;
  }
  .rowTwo{
    background-color:#af998f;
  }
  .rowThree{
    background-color:#ddc791;
  }
}
</style>
