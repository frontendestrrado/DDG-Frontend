<template>
    <div >
       <van-button  round block type="info" color="#7C655D" @click="OverseaSignature"  class="Overseas">
        Overseas Signature
       </van-button>
       <van-button  round block type="info" color="#7C655D" @click="LocalSignature"  class="Local">
        Local Signature
      </van-button>
    </div>
</template>
<script>
export default {
    methods:{
      OverseaSignature(){
       this.$store.commit('changeIsOverseaSignature',true)
       this.$router.push('/OrderSignature')
       this.$store.commit('changePage',{tabbar: '/OrderSignature', title: 'OrderSignature'});
      //  this.$store.commit('changeisShare',true)
      },
      LocalSignature(){
          //  this.$store.commit('changeisShare',false)
          this.$store.commit('changeIsOverseaSignature',false)
          this.$router.push('/CustomerApplication')
          this.$store.commit('changePage',{tabbar: '/CustomerApplication', title: '1/5 Customer Application'});
      }
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
}
</style>