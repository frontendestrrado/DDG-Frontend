<template>
  <!-- 培训计划 -->
  <div class="LearnUse bodybox">
    <div class="title">Foundation Programmes</div>
    <div class="content">
      <div>Step 01</div>
      <div>{{bttCode ? 'Completed' : 'Pending'}}</div>
    </div>
    <div class="content">
      <div>Step 02</div>
      <div>Pending</div>
    </div>
    <div class="content">
      <div>Step 03</div>
      <div>Pending</div>
    </div>
    <div class="title">Undergraduate Programmes</div>
    <div class="content">
      <div>Step 04</div>
      <div>Pending</div>
    </div>
    <div class="content">
      <div>Step 05</div>
      <div>Pending</div>
    </div>
    <div class="content">
      <div>Step 06</div>
      <div>Pending</div>
    </div>
    <div class="title">Postgraduate Programmes</div>
    <div class="content">
      <div>Step 07</div>
      <div>Pending</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bttCode: "",
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.$axios({
        method: "get",
        url: "/api/v1/user",
        headers: {
          Authorization: sessionStorage.token_type + sessionStorage.token,
        },
      })
        .then((res) => {
          console.log(res, 222);
          this.bttCode = res.btt_code
        })
        .catch((err) => {
          this.$toast({
            type: "fail",
            message: "error",
          });
        });
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
.LearnUse {
  width: 100%;
  text-align: left;
}
.title {
  font-weight: 600;
  font-size: 20px;
  margin: 10px 16px;
}
.content {
  display: flex;
  margin: 10px 16px;
}
.content div {
  width: 100px;
}
</style>
