<template>
  <div class="CreateOrder bodybox">
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/KYC', title: 'KYC'});$router.push('/KYC')">
      Step (1/4) KYC
    </van-cell>
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/CustomerApplication', title: 'Customer Application'});$router.push('/CustomerApplication')">
      Step (2/4) Customer Application
    </van-cell>
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/LetterOfWishes', title: 'Letter Of Wishes'});$router.push('/LetterOfWishes')">
      Step (3/4) Letter Of Wishes
    </van-cell>
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/PDPAMemo', title: 'PDPA Memo'});$router.push('/PDPAMemo')">
      Step (4/4) PDPA Memo
    </van-cell>
    <van-cell is-link center @click="$store.commit('changePage',{tabbar: '/ThirdPartyDeclaration', title: 'Third Party Declaration (Optional)'});$router.push('/ThirdPartyDeclaration')">
      Third Party Declaration (If Applicable)
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

<style scoped>

</style>