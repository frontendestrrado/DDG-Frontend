<template>
  <div class="OrganizeGroup from_content">
    <div class="OrganizeGroup_info">
      <template>
        <!-- @click="$store.commit('changePage',{tabbar: '/OrganizeList/1', title: 'Organizational Chart'});$router.push('/OrganizeList/1')" -->
        <van-cell center v-for="(item,inx) in Groups" :key="inx">
          <template #title>
            <span class="custom-title">Group Leader: {{item.name}}</span>
          </template>
          <template #default>
            <div class="fcb">
              <span>Status:</span><span class="item_status">{{item.status==='1'?'Active':'Inactive'}}</span>
            </div>
            <div class="fcb"><span>Month Sales:</span><span>${{item.total_month_achievement}}</span></div>
            <div class="fcb"><span>Year Sales:</span><span>${{item.total_year_achievement}}</span></div>
          </template>
        </van-cell>
      </template>
    </div>
  </div>
</template>

<script>
import { getMyUTG } from '@/api/tools'
export default {
  data() {
    return {
      type: this.$route.params.id,
			Groups: []
    };
  },
  watch: {
    $route(val, oldval) {
      if (val.params.id != oldval.params.id) {
        this.type = val.params.id;
      }
    },
  },
  mounted() {
		this.getMyGroups()
	},
  methods: {
    //获取我的所有team
    getMyGroups() {
			getMyUTG({
				ranking: 'group'
			}).then(res => {
				console.log(res,'獲取我的Groups');
				this.Groups = res
			}).catch(err => {
				console.log(err.response);
			})
    },
  },
};
</script>
<style scoped>
/deep/ .van-cell__title {
  width: 30%;
  flex: none;
  text-align: left;
}
/deep/ .van-cell__value {
  color: #323233;
}
.OrganizeGroup {
  /* width: 100%; */
}
.item_status {
  color: #43bf77;
}
</style>
