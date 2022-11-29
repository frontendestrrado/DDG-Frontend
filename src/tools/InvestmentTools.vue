<template>
    <div class="outerBox">
       <van-button round block type="info" color="#7C655D" @click="Aigp"  class="productButton">
        Notifications
        
       </van-button>
    </div>
</template>
<script>
export default {
  methods:{
      Aigp(){
        this.$router.push('/ManageNotifications')
          this.$store.commit('changePage',{tabbar: '/ManageNotifications', title: 'CRM'});
       
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
