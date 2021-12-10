<template>
  <div class="FormList bodybox">
    <!-- <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/Page/15', title: 'KYC'});$router.push('/Page/15')">
      Step (1/4) KYC
    </van-cell>
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/Page/14', title: 'Customer Application'});$router.push('/Page/14')">
      Step (2/4) Customer Application
    </van-cell>
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/Page/36', title: 'Letter of Wishes'});$router.push('/Page/36')">
      Step (3/4) Letter Of Wishes
    </van-cell>
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/Page/37', title: 'PDPA Memo'});$router.push('/Page/37')">
      Step (4/4) PDPA Memo
    </van-cell> -->
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/Page/19', title: 'Renewal Form (Optional)'});$router.push('/Page/19')">
      Renewal Form (Optional)
    </van-cell>
    <!-- <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/Page/17', title: 'Third Party Declaration (Optional)'});$router.push('/Page/17')">
      Third Party Declaration (If Applicable)
    </van-cell> -->
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/Page/18', title: 'Change of Account Number (Optional)'});$router.push('/Page/18')">
      Change of Account Number (Optional)
    </van-cell>
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/Page/16', title: 'Change of Beneficiary (Optional)'});$router.push('/Page/16')">
      Change of Beneficiary (Optional)
    </van-cell>
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/Page/35', title: 'Advisor Application'});$router.push('/Page/35')">
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