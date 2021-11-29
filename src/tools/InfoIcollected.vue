<template>
  <div class="InfoIcollected bodybox">
    <div class="InfoIcollected_info">
      <!-- 我收集的資料 -->
      <van-cell 
        is-link center 
        v-for="(item,inx) in collectList"
        :key="inx"
        @click="$store.commit('changePage',{tabbar: 'InfoDetail', title: 'InfoDetail'});$router.push({path: '/InfoDetail',query: item})"
      >
        {{ item.content[0].title }}
      </van-cell>
      
    </div>
  </div>
</template>

<script>
import { getUserData } from '@/api/tools'
export default {
  data() {
    return {
      collectList: [],
    };
  },
  created() {
    this.getCollectList();
  },
  computed: {
    valueInfo() {
      return function (val) {
        if (val.indexOf("/uploads/images") != -1) {
          return '<img src="' + val + '" style="width:80%;"/>';
        } else {
          return "<span>" + val + "</span>";
        }
      };
    },
  },
  methods: {
    getCollectList() {
      getUserData().then(res => {
        console.log(res);
        res.forEach(item => {
          item.content = JSON.parse(item.content)
        })
        this.collectList = res;
      }).catch(err => {
        console.log(err.response);
      })
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
/deep/ .van-cell-group {
  margin-bottom: 15px;
}
/deep/ .van-cell__title {
  width: 30%;
  flex: none;
  text-align: left;
}
/deep/ .van-cell__value {
  color: #323233;
}
.InfoIcollected {
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
}
.InfoIcollected_info {
  padding-top: 15px;
}
.ToolBox_title {
  font-weight: 500;
  text-align: left;
  background-color: #ffc80b;
  line-height: 35px;
  text-indent: 20px;
}
</style>
