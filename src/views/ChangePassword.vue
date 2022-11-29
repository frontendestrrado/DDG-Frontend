<template>
<div>
  <van-form @submit="verifyCode">
    <van-field
      readonly
      clickable
      label="Area Code"
      center
      :required="true"
      :rules="[{ required: true }]"
      :value="areaCode"
      placeholder="Area Code"
      @click="showPickerAreaCode = true"
    />
    <van-popup v-model="showPickerAreaCode" round position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        confirm-button-text="Confirm"
        cancel-button-text="Cancel"
        @cancel="showPickerAreaCode = false"
        @confirm="onConfirm"
      />
    </van-popup>
    <van-field
      v-model="form.phone"
      name="Mobile Number"
      center
      :required="true"
      type="text"
      label="Mobile Number"
      placeholder="Please enter the Mobile Number"
      :rules="[{ required: true}]"
    >
      <van-button
        class="SMSconfirm"
        slot="button"
        native-type="button"
        :disabled="phoneList.isSms"
        @click="sendCode()"
      >Send Code</van-button
      >
    </van-field>

    <van-field
      v-model="phoneList.verify_code"
      center
      :required="true"
      label="Verification Code"
      placeholder="Verification Code"
      :rules="[{ required: true}]"
    />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit" class="loginBtn">Submit</van-button>
    </div>
  </van-form>
</div>
</template>

<script>
import {Toast} from "vant";

export default {
  name: "ChangePassword",
  data() {
    return {
      form: {
        phone: null,

      },
      columns: ["60 Malaysia", "86 China", "852 Hong Kong", "886 Taiwan"],
      showPickerAreaCode: false,//地區碼選項卡是否彈出
      areaCode: "",//國際區號
      phoneList: {//短信數據
        verify_code: "",
        isSms: false,
      },
    }
  },
  created() {

  },
  methods: {
    onConfirm(value) {
      this.areaCode = value;
      this.showPicker = false;
      this.showPickerAreaCode = false
    },
    // 获取验证码
    sendCode() {
      if (!this.phoneList.isSms) {
        if (this.form.phone) {
          var data = { phone: this.areaCode.split(' ')[0] + this.form.phone ,type: 'forget_password'}
          this.$axios({
            method: "POST",
            url: "/api/v1/verify_code",
            data
          })
            .then((res) => {
              console.log(res,data);
              console.log(res,data);
              if (res.state_code === 200) {
                this.$toast({
                  type: "success",
                  message: res.message,
                });
                this.phoneList.isSms = true;
                const vm = this;
                setTimeout(function () {
                  vm.phoneList.isSms = false;
                }, 60000);
              } else {
                this.$toast({
                  type: "fail",
                  message: res.message,
                });
              }
            })
            .catch((err) => {
              this.$toast({
                type: "fail",
                message: "Failed to obtain the verification code. Procedure",
              });
            });
        } else {
          this.$toast("Please enter your mobile phone number first");
        }
      }
    },
    // 验证验证码
    verifyCode(values) {
      console.log(this.areaCode, 333);
      let phone = this.areaCode.split(' ')[0] + this.form.phone
      var phoneInfo = {
        phone: phone,
        verify_code: this.phoneList.verify_code,
        type: 'forget_password'
      };
      this.$axios({
        method: "GET",
        url: "/api/v1/verify_code",
        params: phoneInfo
      })
        .then((res) => {
          console.log(res,'返回的值');
          if (res.state_code === 200) {
            const vm = this;
            setTimeout(function () {
              vm.$router.push({name:'NewPassword',params: {secret: res.secret,phone:phone}})
              // vm.register(values);
            }, 600);
          } else {
            this.$toast({
              type: "fail",
              message: res.message,
            });
          }
        })
        .catch((err) => {
          this.$toast({
            type: "fail",
            message: "Verification code error",
          });
        });
    },

  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-weight: bold;
  color: rgb(137, 115, 89);
  font-size: 30px;
  margin-bottom: 50px;
  @media screen and (max-width: 768px){
    font-size: 20px;
    margin-bottom: 50px;
  }
}
.SMSconfirm {
  height: 30px;
  color: #fff;
  border: none;
  outline: none;
  background-color: #bd9e85;
  font-size: 16px;
  border-radius: 8px;
}
.loginBtn {
  width: 100%;
  height: 46px;
  line-height: 46px;
  margin-top: 30px;
  background: #7b655d;
  color: #fff;
  border-color: #7b655d;
  border-radius: 10px;
}
</style>
