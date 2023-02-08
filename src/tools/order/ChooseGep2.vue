<template>
    <div >
       <van-button  round block type="info" color="#7C655D" @click="OverseaSignature"  class="Overseas">
        Remote Signature
       </van-button>
       <van-button  round block type="info" color="#7C655D" @click="LocalSignature"  class="Local">
        In-Person Signature
      </van-button>
    </div>
</template>
<script>
export default {
    created() {
      sessionStorage.setItem('orderStatus','')
    },
  methods:{
      OverseaSignature(){
        sessionStorage.setItem('signAlert',true)
       this.$store.commit('changeIsOverseaSignature',true)
       this.$router.push('/OrderSignatureGep2')
       this.$store.commit('changePage',{tabbar: '/OrderSignatureGep2', title: 'OrderSignature'});
      //  this.$store.commit('changeisShare',true)
      },
      LocalSignature(){
          //  this.$store.commit('changeisShare',false)
          sessionStorage.setItem('signAlert',false)
          this.$store.commit('changeIsOverseaSignature',false)
          this.$router.push('/CustomerApplicationGep2')
          this.$store.commit('changePage',{tabbar: '/CustomerApplicationGep2', title: 'Subscription form'});
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
