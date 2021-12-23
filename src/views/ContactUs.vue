<template>
  <div class="contactUs main_content">
    <van-row style="display:flex;flex-direction: column;">
			<!-- :span="$store.state.isPC ? 16 : 24" -->
      <van-col :span="24">
        <div class="contactUs_info" style="text-align: left">
          <div class="contactUs_title">Contact Us</div>
          <div class="fcs">
            <span
              >DDG International Berhad. (Co. No. 202101023257 (1423557-M)</span
            >
          </div>
          <div class="fcs">
            <span>Tel : +6016-5535691</span>
          </div>
          <div class="fcs">
            <span>Email : info@ddgint.com</span>
          </div>
          <div class="fcs">
            <span>Website : www.ddgint.com</span>
          </div>
          <div class="fcs">
            <span
              >No. 11-1, 2 & 3, Jalan Kampung Jawa, Off Bagan Luar, 12000
              Butterworth, Pulau Pinang.</span
            >
          </div>
          <div class="fcs">
            <span>Business Hour: 9.00am – 5.00pm (Monday – Friday) </span>
          </div>
          <!-- <div class="fcs">
						<span>Please create Google map, thanks</span>
					</div> -->
          <!-- <div class="fcs">
						<van-icon name="envelop-o" color="#000" size="26" />
						<span>mailadmin@ddgint.com</span>
					</div>
					<div class="fcs">
						<van-icon name="phone-o" color="#000" size="26" />
						<span>+60165535691</span>
					</div> -->
        </div>
      </van-col>
      <van-col :span="24">
        <div class="inputBox">
          <div class="box">
            <van-field v-model="name" center label="name" placeholder="name" />
            <!-- <van-field v-model="phone" type="tel" placeholder="phone" /> -->
            <van-field v-model="email" center label="email" placeholder="email" />
            <van-field
              v-model="content"
              label="message"
              center
              rows="2"
              type="textarea"
              placeholder="message"
            />
          </div>
          <van-button
            style="margin-top: 30px"
            class="submitBtn"
            type="default"
            @click="submitMsg()"
            >Submit</van-button
          >
        </div>
      </van-col>
    </van-row>
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
    };
  },
  mounted() {},
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
            // if(res.data.status==200){
            // 	this.$toast({
            // 		type:'success',
            // 		message:res.data.message,
            // 	})
            // 	// const vm=this;
            // 	// setTimeout(function(){
            // 	// 	vm.$router.push('/');
            // 	// },1000);
            // }else{
            // 	this.$toast.allowMultiple();
            // 	for (var item in res.data.error) {
            // 		this.$toast({
            //     		type:'fail',
            //     		message:res.data.error[item],
            //     	});
            // 	}
            // }
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

<style scoped>
/deep/ .van-row {
  display: -webkit-box;
}
/deep/ .van-cell {
  margin-bottom: 10px;
  padding: 0px 16px;
}
.contactUs {
  width: 100%; 
	max-width: 1200px;
	/*min-height: calc(100vh - 60px);*/
  /* margin-top: 20px; */
  background: #f3f5f7;
}
.contactUs_info {
  height: calc(100% - 40px);
  padding: 20px 30px;
  background-color: #CFC3B5;
}
.contactUs_title {
  font-weight: 500;
  text-align: left;
}
.contactUs_info .fcs {
  margin-left: 10%;
  margin-top: 15px;
}
.contactUs_info span {
  margin-left: 10px;
}
.inputBox {
  width: 90%;
  margin: 30px auto;
}
/*手机*/
@media screen and (max-width: 768px) {
  /deep/ .van-row {
    display: block;
  }
  .contactUs {
    margin-top: 0px;
  }
}
/*平板*/
@media screen and (min-width: 768px) and (max-width: 992px) {
  /deep/ .van-row {
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
