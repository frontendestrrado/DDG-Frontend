<template>
  <div class="Products">
    <div class="title titleFont titleColor">Products</div>
    <div class="ProductsOne">
      <p class="text1">Create an <span>Estate Plan</span></p> 
      <p class="text2">for Your <span>Loved Ones</span></p>
      <div class="content">
        <div class="text3">
          <h1>Cash Trust</h1>
          <p>Cash Trust is a trust established by you when you place a sum of cash in a trust
              that can be made available to your named beneficiaries in the event of an emergency.</p>
        </div>
        <div class="text4">
          <h1>Family Trust</h1>
          <p>Family Trust is popular in estate planning. You know your family best, 
              and a family trust can help you customize how you provide for your family, 
              both during your lifetime and after your death. 
              It is common for the settlor to leave a letter of wishes for the trustees to guide them 
              as to the settlor’s wishes in the exercise of their discretion.
              Letters of wishes are not legally binding documents.</p>
        </div>
        <div class="text5">
          <h1>Insurance Trust</h1>
         <p>Insurance Trust is a trust that owns the insurance policy you have purchased and 
            collects the death proceeds when the insured is deceased. Insurance Trust is to 
            ensure that proceeds received from the insurance policies are managed, protected 
            and kept for the benefit of the policy holder’s family members. In accordance with 
            insurer’s wishes, the manner of distribution shall be made by Trustee in distributing 
            the proceeds to intended beneficiaries named by the policy holder in the said Trust.</p>
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
    background-size: 100% 110%;
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
      right: 12%;
      top:25%;
      font-size:1rem;
      color: #7B655D;
      display: flex;
      flex-direction: column;
      width: 28%;
      height: 56%;
      // background-color: #fff;
      .text3{
        font-size: 0.8rem;
        
        position: absolute;
        top:6%;
        h1{
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
      }
      .text4{
         font-size: 0.8rem;
        
         position: absolute;
         top:39%;
          h1{
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
      }
      .text5{
        font-size: 0.8rem;
        position: absolute;
     
        top:78%;
         h1{
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
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
@media screen and (max-width: 1025px){
  .Products {
  .title {
    font-size: 3rem;
  }
   font-family: 'Times New Roman';
  .ProductsOne {
    background: url(../assets/img/png/page4.png) no-repeat scroll;
    height: 80rem;
    background-size: 100% 110%;
    text-align: left;
    position: relative;
    color: #fff;
    .text1{
        font-size:4rem;
        position: absolute;
        left:12%;
        top:9%;
        span{
          color: #7B655D;
        }
      }
    .text2{
        font-size:4rem;
        position: absolute;
        left:15%;
        top:14%;  
        span{
          color: #7B655D;
        }
      }
    .content{
      position: absolute;
      right: 8%;
      top:30%;
      font-size:1rem;
      color: #7B655D;
      display: flex;
      flex-direction: column;
      width: 50%;
      height: 56%;
      // background-color: #fff;
      .text3{
        font-size: 0.8rem;
        
        position: absolute;
        top:6%;
        h1{
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
      }
      .text4{
         font-size: 0.8rem;
        
         position: absolute;
         top:39%;
          h1{
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
      }
      .text5{
        font-size: 0.8rem;
        position: absolute;
     
        top:78%;
         h1{
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
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
}
</style>