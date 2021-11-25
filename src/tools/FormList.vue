<template>
  <div class="FormList bodybox">
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/OrganizeReport/1', title: 'Customer Application Form'});$router.push('/Page/14')">
      Customer Application Form
    </van-cell>
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/OrganizeReport/1', title: 'KYC Form'});$router.push('/Page/15')">
      KYC Form
    </van-cell>
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/OrganizeReport/1', title: 'Notice of Change Beneficiary Form'});$router.push('/Page/16')">
      Notice of Change Beneficiary Form
    </van-cell>
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/OrganizeReport/1', title: 'Third Party Fund Declaration Form'});$router.push('/Page/17')">
      Third Party Fund Declaration Form
    </van-cell>
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/OrganizeReport/1', title: 'Notice of Update of Bank Accounts Form'});$router.push('/Page/18')">
      Notice of Update of Bank Accounts Form
    </van-cell>
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/OrganizeReport/1', title: 'Renewal Form'});$router.push('/Page/19')">
      Renewal Form
    </van-cell>
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/OrganizeReport/1', title: 'Advisor Application Form'});$router.push('/Page/35')">
      Advisor Application Form
    </van-cell>
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/OrganizeReport/1', title: 'Letter of Wishes'});$router.push('/Page/36')">
      Letter of Wishes
    </van-cell>
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/OrganizeReport/1', title: 'PDPA Bilingual'});$router.push('/Page/37')">
      PDPA Bilingual
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