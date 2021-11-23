<template>
  <div class="OrganizeChart from_content">
    <div class="OrganizeChart_info">
      <template v-if="type == 0">
        <van-cell
          is-link
          center
          @click="
            $store.commit('changePage', {
              tabbar: '/OrganizeList/1',
              title: 'Organizational Chart',
            });
            $router.push('/OrganizeList/1');
          "
          value="1"
          title="Personal Enrollment"
        >
        </van-cell>
        <van-cell
          is-link
          center
          @click="
            $store.commit('changePage', {
              tabbar: '/OrganizeList/2',
              title: 'Organizational Chart',
            });
            $router.push('/OrganizeList/2');
          "
          value="0"
          title="Unit"
        >
        </van-cell>
        <van-cell
          is-link
          center
          @click="
            $store.commit('changePage', {
              tabbar: '/OrganizeList/3',
              title: 'Organizational Chart',
            });
            $router.push('/OrganizeList/3');
          "
          value="0"
          title="Team"
        >
        </van-cell>
        <van-cell
          is-link
          center
          @click="
            $store.commit('changePage', {
              tabbar: '/OrganizeList/4',
              title: 'Organizational Chart',
            });
            $router.push('/OrganizeList/4');
          "
          value="0"
          title="Group"
        >
        </van-cell>
      </template>
      <template v-else>
        <van-cell
          is-link
          center
					v-for="(item,inx) in data"
					:key="inx"
          @click="
            $store.commit('changePage', {
              tabbar: '/OrganizeReport/1',
              title: 'Organizational Chart',
            });
            $router.push('/OrganizeReport/1');
          "
        >
          <template #title>
            <span class="custom-title">Advisor：{{item.name}}</span>
          </template>
          <template #default>
            <div class="fcb">
              <span>Status:</span><span class="item_status">{{item.status=='1'?'Active':'Inactive'}}</span>
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
export default {
  data() {
    return {
      type: this.$route.params.id,
			data: []
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
		// 获取我的下线
		this.getChildren()
	},
  methods: {
    changeTab() {},
    //获取我的下线
    getChildren() {
      this.$axios({
        method: "get",
        url: "/api/v1/children",
        headers: {
          Authorization: sessionStorage.token_type + sessionStorage.token,
        },
      })
        .then((res) => {
          console.log(res);
					this.data = res
        })
        .catch((err) => {
        });
    },
  },
};
</script>
<style>
.van-field .van-icon {
  font-size: 20px;
}
</style>
<style scoped>
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
.item_status {
  color: #43bf77;
}
</style>
