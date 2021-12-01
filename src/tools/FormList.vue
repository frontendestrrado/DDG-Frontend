<template>
  <div class="FormList bodybox">
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/OrganizeReport/1', title: 'KYC'});$router.push('/Page/15')">
      KYC
    </van-cell>
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/OrganizeReport/1', title: 'Customer Application'});$router.push('/Page/14')">
      Customer Application
    </van-cell>
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/OrganizeReport/1', title: 'Letter of Wishes'});$router.push('/Page/36')">
      Letter of Wishes
    </van-cell>
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/OrganizeReport/1', title: 'PDPA Memo'});$router.push('/Page/37')">
      PDPA Memo
    </van-cell>
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/OrganizeReport/1', title: 'Renewal Form (Optional)'});$router.push('/Page/19')">
      Renewal Form (Optional)
    </van-cell>
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/OrganizeReport/1', title: 'Third Party Declaration (Optional)'});$router.push('/Page/17')">
      Third Party Declaration (Optional)
    </van-cell>
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/OrganizeReport/1', title: 'Change of Account Number (Optional)'});$router.push('/Page/18')">
      Change of Account Number (Optional)
    </van-cell>
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/OrganizeReport/1', title: 'Change of Beneficiary (Optional)'});$router.push('/Page/16')">
      Change of Beneficiary (Optional)
    </van-cell>
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/OrganizeReport/1', title: 'Advisor Application'});$router.push('/Page/35')">
      Advisor Application
    </van-cell>
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
}
</script>

<style scoped lang="scss">
.FormList {
  
}
.bodybox {
  width: 90%;
  max-width: 1200px;
  height: 80px;
  margin: 0 auto;
}
</style>