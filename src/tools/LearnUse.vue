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
    <div >
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
          <van-row class="info middle">Professional Certificate in Qualified TrustAdvisor (QTA)</van-row>
          <van-row class="info middle">Advanced Certificate in Estate Planning</van-row>
          <van-row class="info middle">Graduate Certificate in Estate Planning, Succession And Asset Protection</van-row>
       </van-col>
    </van-row>
    <!-- <van-row style="display:inline-block;" class="spin spin-rowTwo">
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
           <van-row class="info middle rowTwo">International Postgraduate Diploma in Estate Planning and Management</van-row>
           <van-row class="info middle rowTwo">Special Executive Master in Estate & Trust Planning</van-row>
           <van-row class="info middle rowTwo">Chartered Financial Analyst (CFA)</van-row>
        </van-col>
    </van-row>
    <van-row style="display:inline-block;" class="spin spin-rowThree">
       <van-col class="step middle rowThree">Step 07</van-col>
       <van-col class="titleCol middle rowThree" style="height: 6rem;">Postgraduate Programmes</van-col>
       <van-col class="status middle rowThree">Pending</van-col>
       <van-col class="info middle rowThree">MA in Estate & Trust Planning (Level 7)</van-col>
    </van-row> -->
    <div class="layout"></div>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
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
  mounted() {
    this.getUser();
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
@media screen and (max-width: 1025px){
  .layout{
    height: 4rem;
  }
 .spin{
   transform-origin:30% 90%;
   transform: rotateZ(90deg);
   -ms-transform:rotate(90deg); 	/* IE 9 */
   -moz-transform:rotate(90deg); 	/* Firefox */
   -webkit-transform:rotate(90deg); /* Safari 和 Chrome */
   -o-transform:rotate(90deg); 	/* Opera */
 } 
 .spin-rowTwo{
    margin: 25rem auto;
 }
.spin-rowThree{
    margin: 14rem auto;
    margin-left: 12.5rem;
 }
.step{
  width: 5rem;
  background-color: #bd9e85;
  height: 6rem;
  margin-bottom: 2rem;
  margin-right: 5rem;
  transform-origin: 50%;
  transform: rotateZ(-90deg);
}
.titleCol{
  width: 10rem;
  height: 22rem;
  margin: 0 2rem;
  background-color: #bd9e85;
  transform-origin: 50%;
  transform: rotateZ(-90deg);
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
  transform-origin: 50%;
  transform: rotateZ(-90deg);
}
.info{
  width: 18rem;
  background-color: #bd9e85;
  height: 6rem;
  margin-bottom: 2rem;
  padding:  2rem;
  transform-origin: 50%;
  transform: rotateZ(-90deg);
}
.rowTwo{
  /* margin: 25rem auto; */
  background-color:#af998f;
}
.rowThree{
  /* margin: 15rem auto; */
  background-color:#ddc791;
}
}
</style>
