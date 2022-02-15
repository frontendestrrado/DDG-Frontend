<template>
    <div>
       <van-button  round block type="info" color="#7C655D" @click="OverseaSignature" style="margin-bottom:5rem;">
        Overseas Signature
       </van-button>
       <van-button  round block type="info" color="#7C655D" @click="LocalSignature">
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
      },
      LocalSignature(){
          this.$store.commit('changeIsOverseaSignature',false)
          this.$router.push('/CustomerApplication')
          this.$store.commit('changePage',{tabbar: '/CustomerApplication', title: '1/5 Customer Application'});
      }
    }
}
</script>
<style scoped>

</style>