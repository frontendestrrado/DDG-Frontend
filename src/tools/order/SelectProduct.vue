<template>
    <div class="outerBox" >
       <van-button  v-for="(item,index) in year" :key="index" round block type="info" color="#7C655D" @click="Aigp(item.product_id)"  class="productButton">
        {{item.product_name}}
        
       </van-button>
      
       <!-- <van-button  round block type="info" color="#7C655D" @click="Gep"  class="productButton">
        GEP
      </van-button> -->
       <!-- <van-button  round block type="info" color="#7C655D" @click="Git"  class="productButton">
        GIT
      </van-button> -->
    </div>
</template>
<script>
import {productList} from "@/api/tools";
export default {
  data() {
    return {
          year: [],
    };
  },
    created() {
      sessionStorage.setItem('orderStatus','')
    },
      mounted() {
      this.productList();
  },
  methods:{
       productList() {
      productList()
        .then((res) => {
          console.log(".......productList.........",res)
           this.year = res.product;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
      Aigp(id){
      //  alert(id)
      //  this.$router.push('/Choose')
      //  this.$store.commit('changePage',{tabbar: '/OrderSignature', title: 'OrderSignature'});
      if(id===1){
         this.$router.push('/Choose')
       this.$store.commit('changePage',{tabbar: '/OrderSignature', title: 'Select One'});
      }
      else if(id===2){
            this.$router.push('/ChooseGep')
          this.$store.commit('changePage',{tabbar: '/CustomerApplicationGep', title: 'Select One'});
      }
      else if(id===3){
        alert("Coming Soon.")
      }
       
      },
      // Gep(){
      //     this.$router.push('/CustomerApplicationGep')
      //     this.$store.commit('changePage',{tabbar: '/CustomerApplicationGep', title: '1/5 KYC'});
      // },
      //   Git(){
       
      //     this.$router.push('/CustomerApplication')
      //     this.$store.commit('changePage',{tabbar: '/CustomerApplication', title: '1/5 Customer Application'});
      // }
    }
}
</script>
<style scoped>
.Local{
  width:70%;margin:0 auto;
}
.Overseas{
  margin:5rem auto;width:70%;
}
@media screen and (min-width: 1025px){
  .Local{
    width:50%;margin:0 auto;
  }
  .Overseas{
    margin:5rem auto;width:50%;
  }
  .productButton{
        margin: 1em;
    width: 200px;
    padding: 100px 60px;
    border-radius: 20px;
    float: left;
    font-size: 30px;
  }
  .outerBox{
        display: block;
    margin: 0 auto;
    width: 60%;
  }
}
</style>
