<template>
  <div class="OrganizeTeam from_content">
    <div class="OrganizeTeam_info">
      <template>
        <!-- @click="$store.commit('changePage',{tabbar: '/OrganizeList/1', title: 'Organizational Chart'});$router.push('/OrganizeList/1')" -->
        <van-cell center v-for="(item,inx) in teams" :key="inx">
          <template #title>
            <span class="custom-title">Team Leader: {{item.name}}</span>
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
			teams: []
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
		this.getMyTeams()
	},
  methods: {
    //获取我的所有team
    getMyTeams() {
			getMyUTG({
				ranking: 'team'
			}).then(res => {
				console.log(res,'獲取我的teams');
				this.teams = res
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
.OrganizeTeam {
  /* width: 100%; */
}
.item_status {
  color: #43bf77;
}
</style>
