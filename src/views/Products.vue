<template>
  <div class="Products">
    <div class="title titleFont titleColor">Products</div>
    <div class="ProductsOne">
      <p class="text1">Create an <span>Estate Plan</span></p> 
      <p class="text2">for Your <span>Loved Ones</span></p>
      <div class="content">
        <div class="text3">
          <h1>Cash Trust</h1>
          <p>Cash Trust Is a trust established by you when you place a sum of cash im a trust that can be made allable to your named beneficlartes tn the event of an emergency.</p>
        </div>
        <div class="text4">
          <h1>Family Trust</h1>
          <p>Pamily trust I1s popular in estate planning- YOUI know your famlly best,
          and a famlty trust can help you customtze how you provide for your famly,
          both during your lelme and after your death.
          It 1s common for the sttor to leave a ltter of wishes for the trustees to gude them
          as to the sttor s wishes in the exerckse of thetr discretton.
          Letters of wishes are not lgally bhndng documents.</p>
        </div>
        <div class="text5">
          <h1>Insurance Trust</h1>
         <p> Insurance trust Is a tnust that owns the insurance pollcy you have purchased and
          olleets the death proceeds when the tmsured is deceased Insurance trust ts to
          ensure that proceeds recelved from the Insurance polcles are managed, protected
          and kept for the beneft of the pollcy holders famly members. In accordance wlth
          Insurer's wishes, the manner of distrbutton shall be made by Trustee tn distrbutng
          the proceeds to intended beneicdarles named by the poltey holder Im the sald Tust.</p>
        </div> 
      </div>
    </div>
    <div class="ProductsThree">
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
  methods:{
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
.Products {
  .title {
    font-size: 3rem;
  }
   font-family: 'Times New Roman';
  .ProductsOne {
    background: url(../assets/img/Products/Products1.jpg) no-repeat scroll;
    height: 50rem;
    background-size: 100%;
    text-align: left;
    position: relative;
    color: #7B655D;
    .text1{
        font-size:2.4rem;
        position: absolute;
        left:18.5%;
        top:13.8%;
        span{
          color: #fff;
        }
      }
    .text2{
        font-size:2.4rem;
        position: absolute;
        left:20%;
        top:19%;  
        span{
          color: #fff;
        }
      }
    .content{
      position: absolute;
      right: 11.8%;
      top:25%;
      font-size:1rem;
      color: #7B655D;
      display: flex;
      flex-direction: column;
      width: 30%;
      .text3{
        font-size:0.5rem;
        line-height: 1rem;
      }
      .text4{
        font-size:0.5rem;
        line-height: 1rem;
        margin:4rem 0;
      }
      .text5{
        font-size:0.5rem;
        line-height: 1rem;
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