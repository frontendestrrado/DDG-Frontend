<template>
  <div class="OrganizeChart from_content">
    <div class="OrganizeChart_info">
      <van-cell-group title="" class="first">
        <van-cell center>
          <template #title>
            <span class="custom-title">ME</span>
          </template>
          <template #default>
            <div class="fcb"><span>Status:</span><span>{{me.status=='1'?'Active':'inactive'}}</span></div>
            <div class="fcb"><span>Rank:</span><span>{{me.level}}</span></div>
            <div class="fcb"><span>Total Personal Sales:</span><span>MYR {{me.total_personal_sales | NumFormat}}</span></div>
            <div class="fcb"><span>Total Organizational Sales:</span><span>MYR {{me.total_organziataional_sales | NumFormat}}</span></div>
          </template>
        </van-cell >
      </van-cell-group>
      <van-cell-group title="" v-for="(item,index) in down_line" :key="index">
        <van-cell center  v-for="i in item" :key="i.code" border>
          <template #title>
            <span class="custom-title">{{i.name}}</span>
          </template>
          <template #default>
            <div class="fcb"><span>Rank:</span><span>{{i.grade}}</span></div>
            <div class="fcb"><span>Personal Sales:</span><span>MYR {{i.personal_sales | NumFormat}}</span></div>
            <div class="fcb"><span>Organizational Sales:</span><span>MYR {{i.grade_advisor_sales | NumFormat}}</span></div>
          </template>
        </van-cell>
      </van-cell-group>

    </div>
<!--    <h1>Coming Soon</h1>-->
  </div>
</template>

<script>
import  {organizeChartApi} from "../api/organize-chart";

export default {
  data() {
    return {
			me: {},
		  down_line: []
		};
  },
  mounted() {
    this.getChildren();
  },
  filters: {
    NumFormat(value) {
      if(!value) return '0'
      value = value.toFixed(2)
      let intPart = Math.trunc(value)// 获取整数部分
      return intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断
      }
  },
  methods: {
    //获取组织图
    getChildren() {
      organizeChartApi().then(res => {
        console.log(res)
        this.me = res.me
        this.down_line = res.first_level_advisor
      })
    },
  },
};
</script>
<style lang="scss" scoped>
.OrganizeChart_info {
  .first .van-cell--center:first-of-type {
   border-bottom: 5px solid black;
  }
}
</style>
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

