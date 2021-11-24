<template>
  <div class="InfoIcollected bodybox">
    <div class="InfoIcollected_info">
      <!-- 我收集的資料 -->
      <van-cell-group inset v-for="(item, index) in collectList" :key="index">
        <template v-for="(val, index) in item.content">
          <van-cell
            center
            v-if="typeof val.value == 'object'"
            :title="val.title"
            :value="val.value"
          >
            <template #default>
              <template v-for="(child, i) in val.value">
                <template v-if="typeof child == 'object'">
                  <div class="">
                    <span v-for="(childval, j) in child">
                      {{ childval.title }}:{{ childval.value }}
                    </span>
                  </div>
                </template>
                <template v-else>
                  <span>{{ child }} </span>
                </template>
              </template>
            </template>
          </van-cell>
          <van-cell center v-else :title="val.title">
            <template #default>
              <p v-html="valueInfo(val.value)"></p>
            </template>
          </van-cell>
          <!-- <van-cell center :title="val.title" :value="val.value + typeof val.value"></van-cell> -->
        </template>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
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
      this.$axios({
        method: "get",
        url: "/api/v1/user/data",
        headers: {
          Authorization: sessionStorage.token_type + sessionStorage.token,
        },
      })
        .then((res) => {
          console.log(res);
          // let data = [];
          res.forEach((item) => {
            item.content = JSON.parse(item.content);
          });
          this.collectList = res;
        })
        .catch((error) => {});
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
