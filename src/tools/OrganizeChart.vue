<template>
  <div class="OrganizeChart from_content">
    <div class="OrganizeChart_info">
      <!-- @click="$store.commit('changePage',{tabbar: '/OrganizeList/0', title: 'Organizational Chart'});$router.push('/OrganizeList/0')" -->
      <van-cell center>
        <template #title>
          <span class="custom-title">ME</span>
        </template>
        <template #default>
          <div class="fcb"><span>Status:</span><span>{{me.status=='1'?'Active':'inactive'}}</span></div>
          <div class="fcb"><span>My Level:</span><span>{{me.level}}</span></div>
          <div class="fcb"><span>Total Personal Sales:</span><span>${{me.total_personal_sales}}</span></div>
          <div class="fcb"><span>Total Organziational Sales:</span><span>${{me.total_organziataional_sales}}</span></div>
        </template>
      </van-cell>

      <van-cell center>
<!--        @click="
        $store.commit('changePage', {
        tabbar: '/OrganizeList/1',
        title: 'Organizational Chart',
        });
        $router.push('/OrganizeList/1');
        "-->
        <template #title>
          <span class="custom-title">My Direct Recruit 1st Level</span>
        </template>
        <template #default>
          <div class="fcb"><span>Enroll:</span><span>{{level.enroll}}</span></div>
          <div class="fcb"><span>Active Enroll:</span><span>{{level.activeEnroll}}</span></div>
          <div class="fcb"><span>Total Personal Sales:</span><span>${{level.total_personal_sales}}</span></div>
          <div class="fcb"><span>Total Organziational Sales:</span><span>${{level.total_organziataional_sales}}</span></div>
        </template>
      </van-cell>
      <van-cell center>
<!--        @click="
        $store.commit('changePage', {
        tabbar: '/OrganizeUnit/1',
        title: 'Organizational Chart',
        });
        $router.push('/OrganizeUnit/1');
        "-->


        <template #title>
          <span class="custom-title">My Unit</span>
        </template>
        <template #default>
          <div class="fcb"><span>Count:</span><span>{{unit.count}}</span></div>
          <div class="fcb"><span>Total Personal Sales:</span><span>${{unit.total_personal_sales}}</span></div>
          <div class="fcb"><span>Total Organziational Sales:</span><span>${{unit.total_organziataional_sales}}</span></div>
        </template>
      </van-cell>
      <van-cell
        center

      >
<!--        @click="
        $store.commit('changePage', {
        tabbar: '/OrganizeTeam',
        title: 'Organizational Chart',
        });
        $router.push('/OrganizeTeam');
        "-->
        <template #title>
          <span class="custom-title">My Team</span>
        </template>
        <template #default>
          <div class="fcb"><span>Count:</span><span>{{team.count}}</span></div>
          <div class="fcb"><span>Total Personal Sales:</span><span>${{team.total_personal_sales}}</span></div>
          <div class="fcb"><span>Total Organziational Sales:</span><span>${{team.total_organziataional_sales}}</span></div>
        </template>
      </van-cell>
      <van-cell
        center

      >
<!--        @click="
        $store.commit('changePage', {
        tabbar: '/OrganizeGroup',
        title: 'Organizational Chart',
        });
        $router.push('/OrganizeGroup');
        "-->
        <template #title>
          <span class="custom-title">My Group</span>
        </template>
        <template #default>
          <div class="fcb"><span>Count:</span><span>{{group.count}}</span></div>
          <div class="fcb"><span>Total Personal Sales::</span><span>${{group.total_personal_sales}}</span></div>
          <div class="fcb"><span>Total Organziational Sales:</span><span>${{group.total_organziataional_sales}}</span></div>
        </template>
      </van-cell>
    </div>
<!--    <h1>Coming Soon</h1>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
			me: {},
			level: {},
			unit: {},
			team: {},
			group: {},
		};
  },
  mounted() {
    this.getChildren();
  },
  methods: {
    //获取组织图
    getChildren() {
      this.$axios({
        method: "get",
        url: "/api/v1/organization",
        headers: {
          Authorization: sessionStorage.token_type + sessionStorage.token,
        },
      })
        .then((res) => {
					this.me = res.me
					this.level = res.first_level
					this.unit = res.unit
					this.team = res.team
					this.group = res.group
        })
        .catch((err) => {
          // this.$toast({
          //   type: "fail",
          //   message: "error",
          // });
        });
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 50px;
}
/deep/ .van-cell__title {
  width: 30%;
  flex: none;
  text-align: left;
}
/deep/ .van-cell__value {
  color: #323233;
}
.OrganizeChart {
  /* width: 100%; */
}
.OrganizeChart_title {
  font-weight: 500;
  text-align: left;
  background-color: #ffc80b;
  line-height: 35px;
  text-indent: 20px;
}
.OrganizeChart_info .ad_icon {
  width: 20vw;
  height: 20vw; /*background-color: #CBCDCE;*/
  margin: 20px auto 10px;
  border-radius: 10px;
}
.inputBox {
  width: 90%;
  margin: 30px auto;
}
.van-cell__title {
  width: 50%;
}
</style>
