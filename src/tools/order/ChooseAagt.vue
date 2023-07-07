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
       this.$store.commit('changeIsOverseaSignature',true)
       this.$store.commit('changeIsOverseaSignatureRemote',true)
       this.$router.push('/OrderSignatureAagt')
       this.$store.commit('changePage',{tabbar: '/OrderSignatureAagt', title: 'OrderSignatureAagt'});
      //  this.$store.commit('changeisShare',true)
      },
      LocalSignature(){
          //  this.$store.commit('changeisShare',false)
          this.$store.commit('changeIsOverseaSignature',false)
          this.$store.commit('changeIsOverseaSignatureRemote',false)
          this.$router.push('/CustomerApplicationAagt')
          this.$store.commit('changePage',{tabbar: '/CustomerApplicationAagt', title: '1/5 Customer Application'});
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
