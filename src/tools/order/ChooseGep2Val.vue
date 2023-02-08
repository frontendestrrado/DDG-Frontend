<!-- <template>
    <div >
       <van-button  round block type="info" color="#7C655D" @click="OverseaSignature"  class="Overseas">
        55555
       </van-button>
       <van-button  round block type="info" color="#7C655D" @click="LocalSignature"  class="Local">
        111111111
      </van-button>
    </div>
</template>
 -->

 <template>
  <div class="outerBox" >
     <van-button  v-for="(item,index) in year" :key="index" round block type="info" color="#7C655D" @click="Aigp(item)"  class="Overseas">
      {{item}}
      
     </van-button>
    
     <!-- <van-button  round block type="info" color="#7C655D" @click="Gep"  class="productButton">
      GEP 2
    </van-button> -->
     <!-- <van-button  round block type="info" color="#7C655D" @click="Git"  class="productButton">
      GIT
    </van-button> -->
  </div>
</template>
<script>
import {productListVal} from "@/api/tools";
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
      productListVal()
      .then((res) => {
        console.log(".......productListVal.........",res)
         this.year = res.available;
      })
      .catch((err) => {
        console.log(err.response);
      });
  },
    Aigp(item){
      this.$router.push('/ChooseGep2')
     // alert(Aigp)
          this.$store.commit('changePage',{tabbar: '/CustomerApplicationGep2', title: 'Select One'});
          sessionStorage.setItem("changeGep2Val", item)
          this.$store.commit('changeGep2Val',item)
    },
    // Gep(){
    //   this.$router.push('/ChooseGep2')
    //     this.$store.commit('changePage',{tabbar: '/CustomerApplicationGep2', title: 'Select One'});
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
