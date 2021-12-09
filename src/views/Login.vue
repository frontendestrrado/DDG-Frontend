<template>
  <div class="login from_content">
    <van-tabs v-model="activeName">
      <van-tab title="Sign Up" name="SignUp">
        <div class="inputBox">
          <!-- <div class="main_content" :style="{maxWidth: pageWidth+'px'}">
						<Common :pageData='pageContent'></Common>
					</div> -->

          <van-form validate-first @failed="onFailed" @submit="verifyCode" :submit-on-enter="false">
            <van-field
              v-model="registForm.firstName"
              name="firstName"
              center
              :required="true"
              type="text"
              label="First Name (as per NRIC)"
              placeholder="Please enter the First Name (as per NRIC)"
              :rules="[
                { required: true,message: 'Please enter the First Name (as per NRIC)' },
              ]"
            />
            <van-field
              v-model="registForm.thirdName"
              name="thirdName"
              center
              :required="true"
              type="text"
              label="Surname"
              placeholder="Please enter the Surname"
              :rules="[
                { required: true, message: 'Please enter the Surname'},
              ]"
            />
            <van-field
              v-model="registForm.bttCode"
              name="BTT CODE"
              center
              :required="true"
              type="text"
              label="BTT CODE"
              placeholder="Please enter the BTT CODE"
              :rules="[
                { required: true,message: 'Please enter the BTT CODE' },
              ]"
            />
            <van-field
              v-model="registForm.passport"
              name="NRIC Name Or Passport # / Company Re.Number"
              center
              :required="true"
              type="text"
              label="NRIC or Passport Number / Company Re. Number"
              placeholder="NRIC or Passport Number / Company Re. Number"
              :rules="[
                {
                  required: true,
                  message: 'Please enter the NRIC or Passport Number / Company Re. Number',
                },
              ]"
            />
            
            <van-field
              v-model="registForm.address"
              name="Residential Address"
              center
              :required="true"
              type="text"
              label="Residential Address"
              placeholder="Residential Address"
              :rules="[
                { required: true, message: 'Please enter the Residential Address' },
              ]"
            />
            <van-field
              v-model="registForm.birthday"
              name="Date Of Birth"
              center
              :required="true"
              type="text"
              label="Date Of Birth"
              placeholder="YYYY-MM-DD"
              @click="onShowPicker()"
            />
            <van-popup v-model="isShowPicker" position="bottom">
              <van-datetime-picker
                v-model="currentContent"
                type="date"
                :min-date="minDate"
                :max-date="maxDate"
                @cancel="onHiddenPicker"
                @confirm="onConfirmPicker"
              />
            </van-popup>
            <van-field
              v-model="registForm.sponsor"
              name="Introducer ID"
              center
              :required="true"
              type="text"
              label="Introducer ID"
              placeholder="DDG/surname/0001"
              :rules="[{ required: true, message: 'Please enter the Introducer ID' }]"
            />
            <van-field
              v-model="registForm.bank"
              name="Bank Name"
              center
              :required="true"
              type="text"
              label="Bank Name"
              placeholder="Bank Name"
              :rules="[{ required: true, message: 'Please enter the Bank Name' }]"
            />
            <van-field
              v-model="registForm.bankAccountNo"
              name="Bank Account No."
              center
              :required="true"
              type="text"
              label="Bank Account No."
              placeholder="Bank Account No."
              :rules="[{ required: true, message: 'Please enter the Bank Account No.' }]"
            />
            <van-field
              v-model="registForm.bankAccountName"
              name="Bank Account Name"
              center
              :required="true"
              type="text"
              label="Bank Account Name"
              placeholder="Bank Account Name"
              :rules="[{ required: true, message: 'Please enter the Bank Account Name' }]"
            />
            <van-field
              v-model="registForm.password"
              name="password"
              center
              :required="true"
              type="password"
              label="Password"
              placeholder="Password* (Must be 6 Digit Numberic)"
              :rules="[{ required: true, message: 'Password* (Must be 6 Digit Numberic)' }]"
            />
            <van-field
              v-model="registForm.password_confirmation"
              name="Confirm password"
              center
              :required="true"
              type="password"
              label="Confirm password"
              placeholder="Confirm password"
              :rules="[{ required: true, message: 'Confirm password' }]"
            />
            <van-field
              readonly
              clickable
              label="Area code"
              center
              :required="true"
              :rules="[{ required: true, message: 'Area code' }]"
              :value="areaCode"
              placeholder="Area code"
              @click="showPicker = true"
            />
            <van-field
              v-model="registForm.phone"
              name="Mobile Number"
              center
              :required="true"
              type="text"
              label="Mobile Number"
              placeholder="Please enter the Mobile Number"
              :rules="[{ required: true, message: 'Please enter the Mobile Number' }]"
            />
            <van-popup v-model="showPicker" round position="bottom">
              <van-picker
                show-toolbar
                :columns="columns"
                @cancel="showPicker = false"
                @confirm="onConfirm"
              />
            </van-popup>
            <van-field
              v-model="phoneList.verify_code"
              center
              :required="true"
              label="Verification code"
              placeholder="Verification code"
              :rules="[{ required: true, message: 'Verification code' }]"
            >
              <van-button
                class="SMSconfirm"
                slot="button"
                native-type="button"
                :disabled="phoneList.isSms"
                @click="sendCode()"
                >Send code</van-button
              >
            </van-field>
            <van-button class="loginBtn" type="default" native-type="submit"
              >Sign Up</van-button
            >
          </van-form>
        </div>
      </van-tab>
      <van-tab title="Sign In" name="SignIn">
        <div class="inputBox">
          <div class="box">
						<van-field
              readonly
              clickable
              label="Area code"
              center
              :required="true"
              :rules="[{ required: true, message: 'Please enter the Area code' }]"
              :value="areaCode2"
              placeholder="Please enter the Area code"
              @click="showPicker2 = true"
            />
						<van-popup v-model="showPicker2" round position="bottom">
              <van-picker
                show-toolbar
                :columns="columns"
                @cancel="showPicker2 = false"
                @confirm="onConfirm2"
              />
            </van-popup>
            <van-field
              v-model="loginForm.username"
              label="phone"
              :required="true"
              center
              type="tel"
              placeholder="Mobile Phone*"
            />
            <van-field
              v-model="loginForm.password"
              label="password"
              :required="true"
              center
              type="password"
              placeholder="Password* (Must be 6 Digit Numberic)"
            />
          </div>
          <van-button class="loginBtn" type="default" @click="login()"
            >Sign In</van-button
          >
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Common from "@/components/mode/common.vue";
import EventHub from '@/util/EventHub'
export default {
  components: {
    Common,
  },
  name: "Login",
  data() {
    return {
      pageContent: [],
      pageWidth: "1200",
      isSms: false,
      activeName: "SignUp",
      loginForm: {
        username: "",
        password: "",
      },
      registForm: {
        firstName: "",
        thirdName: "",
        bttCode: '',
        password: "",
        phone: "",
        passport: "",
        address: "",
        birthday: "",
        sponsor: "",
        bank: "",
        bankAccountNo: "",
        bankAccountName: "",
        password_confirmation: "",
      },
      isShowPicker: false,
      currentContent: new Date(),
      minDate: new Date(1950, 0, 1),
      maxDate: new Date(),
      phoneList: {
        verify_code: "",
        isSms: false,
      },

      areaCode: "",
      areaCode2: "",
      showPicker: false,
			showPicker2: false,
      columns: ["60 Malaysia", "86 China", "852 Hong Kong", "886 Taiwan"],
    };
  },
  mounted() {
    this.getPageContent();
  },
  methods: {
    onConfirm(value) {
      this.areaCode = value;
      this.showPicker = false;
    },
		onConfirm2(value) {
      this.areaCode2 = value;
      this.showPicker2 = false;
    },
    getPageContent() {
      this.$axios({
        method: "get",
        url: "/api/v1/customPages?id=" + this.$sessionStorage.page_id,
      })
        .then((res) => {
          console.log(res, "Sign Up");
          if (res.status == 200) {
            this.pageContent = res.data.modules;
            this.pageWidth = res.data.width;
            this.pageContent.forEach((item, i) => {
              if (item.type == 9) {
                item.data_collects.forEach((itemi, j) => {
                  this.$set(
                    this.pageContent[i].data_collects[j],
                    "content",
                    ""
                  );
                });
              }
            });
          } else {
            this.pageContent = [];
            this.pageWidth = "1200";
          }
        })
        .catch((error) => {});
    },
    login() {
      if (this.loginForm.username && this.loginForm.password && this.areaCode2) {
        this.$axios({
          method: "post",
          url: "/api/v1/authorizations",
          data: {
            username: this.areaCode2.split(' ')[0] + this.loginForm.username,
            password: this.loginForm.password,
          },
        })
          .then((res) => {
            console.log(res,'登录回调');
            if (res) {
              this.$store.commit("setToken", res.access_token);
              this.$store.commit("setTokenType", res.token_type);
              this.$toast({
                type: "success",
                message: "Login successful",
              });
              this.getUser();
              const vm = this;
              setTimeout(function () {
                vm.$store.commit("changePage", {
                  tabbar: "/Page/10",
                  title: "Advisors",
                });
                vm.$router.push("/Page/10");
              }, 1000);
            }
            EventHub.$emit('isLogin')
          })
          .catch((err) => {
            this.$toast.allowMultiple();
						console.log(err.response,3333333);
          });
      } else {
				if (!this.areaCode2) {
					this.$toast('Please select the area code')
				} else {
					this.$toast("Please enter your user name and password");
				}
      }
    },
    // 获取用户信息
    getUser() {
      this.$axios({
        method: "get",
        url: "/api/v1/user",
        headers: {
          Authorization: sessionStorage.token_type + sessionStorage.token,
        },
      })
        .then((res) => {
          sessionStorage.setItem("user_id", res.id);
        })
        .catch((err) => {
          this.$toast({
            type: "fail",
            message: "error",
          });
        });
    },
    // 获取验证码
    sendCode() {
      if (!this.phoneList.isSms) {
        if (this.registForm.phone) {
          var data = [{ phone: this.areaCode.split(' ')[0] + this.registForm.phone }];
          this.$axios({
            method: "POST",
            url: "/api/v1/sin_up/sms/verify_code",
            data: {
              phone: JSON.stringify(data),
            },
          })
            .then((res) => {
              console.log(res);
              if (res.state_code == 200) {
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
    // 展示时间或日期弹框
    onShowPicker() {
      this.isShowPicker = true;
    },
    onHiddenPicker() {
      this.currentContent = "";
      this.isShowPicker = false;
    },
    onConfirmPicker() {
      this.registForm.birthday = this.formatDateYMD(this.currentContent);
      this.isShowPicker = false;
    },
    formatDateYMD(value) {
      if (!value) {
        return "";
      } else {
        var date = new Date(value);
        var Y = date.getFullYear() + "-";
        var M = date.getMonth() + 1 + "-";
        var D = date.getDate();
        return Y + M + D;
      }
    },
    onFailed(values, errorInfo) {
      console.log("failed", errorInfo);
      console.log(values,33333);
      this.$toast({
        type: "fail",
        message: values.errors[0].message,
      });
      for (var key in values) {
        console.log(key, values[key]);
      }
    },
    // 验证验证码
    verifyCode(values) {
      console.log(this.areaCode, 333);
      let data = [];
      var phoneInfo = {
        phone: this.areaCode.split(' ')[0] + this.registForm.phone,
        verify_code: this.phoneList.verify_code,
      };
      data.push(phoneInfo);
      this.$axios({
        method: "GET",
        url: "/api/v1/sin_up/sms/verify_code?data=" + JSON.stringify(data),
      })
        .then((res) => {
          console.log(res);
          if (res.state_code == 200) {
            const vm = this;
            setTimeout(function () {
              vm.register();
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
    register() {
      if (this.registForm.password != this.registForm.password_confirmation) {
        this.$toast("The passwords are inconsistent");
        return;
      }
      console.log(this.registForm);
      this.$axios({
        method: "post",
        url: "/api/v1/users",
        data: {
          firstName: this.registForm.firstName,
          thirdName: this.registForm.thirdName,
          bttCode: this.registForm.bttCode,
          password: this.registForm.password,
          phone: this.areaCode.split(' ')[0] + this.registForm.phone,
          passport: this.registForm.passport,
          address: this.registForm.address,
          birthday: this.registForm.birthday,
          sponsor: this.registForm.sponsor,
          bank: this.registForm.bank,
          bankAccountNo: this.registForm.bankAccountNo,
          bankAccountName: this.registForm.bankAccountName,
          password_confirmation: this.registForm.password_confirmation,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.id) {
            this.$toast({
              type: "success",
              message: "Registration successful, please go to log in",
            });
            const vm = this;
            setTimeout(function () {
              // vm.$router.push('/');
              vm.activeName = "SignIn";
            }, 1000);
          }
        })
        .catch((err) => {
          this.$toast.allowMultiple();
          for (var item in err.errors) {
            this.$toast({
              type: "fail",
              message: err.errors[item],
            });
          }
        });
    },
  },
};
</script>
<style scoped>
/deep/ .van-tab {
  background-color: rgba(198, 198, 198, 1);
  color: #fff;
}
/deep/ .van-tab:first-child {
  margin-right: 20px;
}
/deep/ .van-tab--active {
  background-color: #d9c998;
  color: #fff;
}
/deep/ .van-tabs__line {
  background-color: transparent;
}
/deep/ .van-cell {
  margin-bottom: 10px;
  padding: 0px 16px;
}
/deep/ .van-field__label {
  width: 12.2rem;
}
.login {
  margin-top: 20px;
  background-color: #f3f5f7;
  padding-bottom: 20px;
}
.inputBox {
  width: 90%;
  margin: 30px auto;
}

.loginBtn {
  width: 100%;
  height: 46px;
  line-height: 46px;
  margin-top: 30px;
  background: #1F2E4D;
  color: #fff;
  border-color: #1F2E4D;
  border-radius: 10px;
}
.SMSconfirm {
  height: 30px;
  color: #fff;
  border: none;
  outline: none;
  background-color: #2f75f4;
  font-size: 16px;
  border-radius: 8px;
}
@media screen and (max-width: 576px) {
  .login {
    margin-top: 0;
  }
}
@media screen and (max-width: 768px) {
  .login {
    margin-top: 0;
  }
  /deep/ .van-field__label {
    width: 6.5rem;
  }
}
@media screen and (min-width: 768px) and (max-width: 992px) {
  .login {
    margin-top: 20px;
  }
}
@media screen and (min-width: 992px) and (max-width: 1200px) {
  .login {
    margin-top: 20px;
  }
}
</style>
