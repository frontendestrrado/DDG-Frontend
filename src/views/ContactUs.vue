<template>
  <div class="contactUs main_content">
    <van-row>
			<!-- :span="$store.state.isPC ? 16 : 24" -->
      <van-col :span="24">
        <div class="contactUs_info" style="text-align: left">
          <div class="contactUs_title">INFO</div>
          <div class="fcs">
            <span>DDG International Berhad. <br>(Co. No. 202101023257 (1423557-M) </span>
          </div>
          <div class="fcs">
            <van-icon name="phone" />
            <span>+6016-5535691</span>
          </div>
          <div class="fcs">
            <van-icon name="envelop-o" />
            <span>info@ddgint.com</span>
          </div>
          <div class="fcs">
            <van-icon name="gem-o" />
            <span>www.ddgint.com</span>
          </div>
          <div class="fcs">
            <van-icon name="location-o" />
            <span
              >No. 11-1, 2 & 3, Jalan Kampung Jawa, Off Bagan Luar, 12000
              Butterworth, Pulau Pinang.</span
            >
          </div>
          <div class="fcs">
            <van-icon name="underway-o" />
            <span> 9.00am – 5.00pm (Monday – Friday) </span>
          </div>
        </div>
      </van-col>
      <van-col :span="24">
        <div class="inputBox">
          <div class="minTitle">
            DROP US A MESSAGE.
          </div>
          <div class="box">
            <van-field v-model="name" center label="YOUR NAME" />
            <!-- <van-field v-model="phone" type="tel" placeholder="phone" /> -->
            <van-field v-model="email" center label="YOUR EMAIL"/>
            <van-field
              v-model="content"
              label="MESSAGE"
              center
              rows="2"
              type="textarea"
            />
          </div>
          <van-button
            style="margin-top: 30px"
            class="submitBtn"
            type="default"
            @click="submitMsg()"
            >SEND</van-button
          >
        </div>
      </van-col>
    </van-row>
    <!-- <GmapMap
      :center="{lat:10, lng:10}"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100%; height: 600px;"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
      />
    </GmapMap> -->
      <div class="mapImg">
         <img src="../assets/img/ditu.png" >
      </div>
      <div class="mapImg">
          <img src="../assets/img/ditutwo.png" >
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      // phone:'',
      email: "",
      content: "",
      markers: []
    };
  },
  mounted() {
    // 地圖
  },
  methods: {
    submitMsg() {
      if (this.name && this.email && this.content) {
        this.$axios({
          method: "post",
          url: "/api/v1/contract",
          data: {
            name: this.name,
            email: this.email,
            content: this.content,
          },
        })
          .then((res) => {
            console.log(res);
            this.$toast({
              type: "success",
              message: "Submitted successfully",
            });
          })
          .catch((err) => {
            this.$toast({
              type: "fail",
              message: "error",
            });
          });
      } else {
        this.$toast("Please complete the information");
      }
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep .van-row {
  display: -webkit-box;
  display: flex;
  .van-col{

  }
}
::v-deep .van-cell {
  margin-bottom: 10px;
  padding: 0px 16px;
}
.contactUs {
  width: 100%; 
	max-width: 1200px;
	/*min-height: calc(100vh - 60px);*/
  /* margin-top: 20px; */
  background: #f3f5f7;
  .mapImg{
    height: 20%;
    width: 100%;
    padding: 5rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
.contactUs_info {
  height: calc(100% - 40px);
  padding: 20px 30px;
  background-color: #B09A8F;
  border-radius: 10px;
  color: #fff;
  .contactUs_title {
    font-weight: 600;
    text-align: left;
    font-size: 26px;
    font-family: "Calibri";
  }
  .van-icon {
    font-size: 28px;
    margin-right: 20px;
  }
}
.contactUs_info .fcs {
  // margin-left: 10%;
  margin-top: 20px;
}
.contactUs_info span {
  // margin-left: 10px;
}
.inputBox {
  width: 90%;
  margin: 30px auto;
  .minTitle {
    font-weight: 600;
    text-align: left;
    font-size: 26px;
    color: #7B655D;
    margin-bottom: 20px;
    font-family: "Calibri";
  }
}
@media screen and (max-width: 1025px){
  ::v-deep .van-row {
  display: -webkit-box;
  display: flex;
  flex-direction: column;
  .van-col{

  }
}
}
/*手机*/
@media screen and (max-width: 768px) {
  ::v-deep .van-row {
    display: block;
  }
  .contactUs {
    margin-top: 0px;
  }
}
/*平板*/
@media screen and (min-width: 768px) and (max-width: 992px) {
  ::v-deep .van-row {
    display: -webkit-box;
  }
  .contactUs {
    margin-top: 20px;
  }
}
/*中等屏幕*/
@media screen and (min-width: 992px) and (max-width: 1200px) {
}
/*大屏幕*/
@media screen and (min-width: 1200px) {
}
</style>
