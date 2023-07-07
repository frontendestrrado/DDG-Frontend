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
              v-model="registForm.thirdName"
              name="thirdName"
              center
              :required="true"
              type="text"
              label="Surname"
              placeholder="Please enter the Surname"
              :rules="[
                { required: true, message: ' Please enter the Surname'},
              ]"
            />
            <van-field
              v-model="registForm.firstName"
              name="firstName"
              center
              :required="true"
              type="text"
              label="First Name"
              placeholder="Please enter the First Name"
              :rules="[
                { required: true,message: 'Please enter the First Name' },
              ]"
            />
            <van-field
              v-model="registForm.email"
              name="Email Address"
              center
              :required="true"
              type="email"
              label="Email Address"
              placeholder="username@domain.com"
              :rules="[
                { required: true,message: 'Please enter the Email Address' },
              ]"
            />
            <van-field
              v-model="registForm.bttCode"
              name="BTT Code"
              center
              :required="true"
              type="text"
              label="QTA/BTT Code"
              
              placeholder="Please enter the BTT Code ( BTT Code format: DDG/BTT/Year/M05/12345 )"
              :rules="[
                { required: true,message: 'Please enter the BTT Code ( BTT Code format: DDG/BTT/Year/M05/12345 )' },
              ]"
            />


          
            





            <van-field name="uploader" label="QTA/BTT Cert" :required="true">
              <template #input>
                <van-uploader v-model="uploader" :after-read="afterRead" accept="*" :max-count="1" class="picture"/>
              </template>
            </van-field>
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
              v-model="registForm.post_code"
              name="Post Code"
              center
              :required="true"
              type="text"
              label="Post Code"
              placeholder="Post Code"
              :rules="[
                { required: true, message: 'Please enter the Post Code' },
              ]"
            />
            <van-field
              readonly
              clickable
              label="Area"
              center
              :required="true"
              :rules="[{ required: true, message: 'Area' }]"
              :value="Area"
              placeholder="Area"
              @click="showPicker = true"
            />
            <van-popup v-model="showPicker" round position="bottom">
              <van-picker
                show-toolbar
                :columns="areaList"
                confirm-button-text="Confirm"
                cancel-button-text="Cancel"
                @cancel="showPicker = false"
                @confirm="onConfirmArea"
                default-index="0"
              />
            </van-popup>
            <van-field
              v-model="registForm.birthday"
              name="Date Of Birth"
              center
              :required="true"
              type="text"
              label="Date of Birth: DD-MM-YYYY"
              placeholder="DD-MM-YYYY"
              :rules="[{ pattern, message: 'Please enter the correct date of birth' }]"
            />
            <van-field
              v-model="registForm.sponsor"
              name="Introducer ID"
              @keyup="onChangeBtt"
              center
              :required="true"
              type="text"
              label="Introducer ID"
              placeholder="DDG/surname/0001"
              :rules="[{ required: true, message: 'Please enter the Introducer ID' }]"
            />
            <div  v-click-outside="hide" class="bttDrop"  @click="setBttCode" :id="'bttId'" :style="{ display: 'none' }">
{{this.bttCodeValue}}{{" - "}}{{this.bttCodeValueName}}       </div>
       
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
              label="Confirm Password"
              placeholder="Confirm Password"
              :rules="[{ required: true, message: 'Confirm password' }]"
            />
            <van-field
              readonly
              clickable
              label="Area Code"
              center
              :required="true"
              :rules="[{ required: true, message: 'Area code' }]"
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
              v-model="registForm.phone"
              name="Mobile Number"
              center
              id="regPhoneId"
              @paste="onpaste"
              @keypress="isLetter($event)"
              @keyup="abc"
              :required="true"
              type="text"
              label="Mobile Number"
              placeholder="Please enter the Mobile Number"
              :rules="[{ required: true, message: 'Please enter the Mobile Number' }]"
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
              :rules="[{ required: true, message: 'Verification code' }]"
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
                confirm-button-text="Confirm"
                cancel-button-text="Cancel"
                @cancel="showPicker2 = false"
                @confirm="onConfirm2"
              />
            </van-popup>
            <van-field
              v-model="loginForm.username"
              label="Phone"
              :required="true"
              center
              type="tel"
              placeholder="Mobile Phone*"
            />
            <van-field
              v-model="loginForm.password"
              label="Password"
              :required="true"
              center
              type="password"
              placeholder="Password* (Must be 6 Digit Numberic)"
            />
          </div>
          <van-button class="loginBtn" type="default" @click="login()">Sign In</van-button>
          <van-button class="loginBtn" type="default" @click="forgetPassword">Forgot/Change Password</van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getBttCode } from "@/api/tools";
import Common from "@/components/mode/common.vue";
import EventHub from '@/util/EventHub'
import { uploadAutograph, uploadFile } from "@/api/util";
  import {getUnread} from '@/api/advisors.js'
  import { getNotificationsList } from '@/api/announcement.js'
  import ClickOutside from 'vue-click-outside'
export default {
  components: {
    Common,
  },
  name: "Login",
  data() {
    return {
      notCount: 0,
      pageContent: [],
      pageWidth: "1200",
      isSms: false,
      activeName: "SignIn",
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
        email: '',
        bankAccountNo: "",
        bankAccountName: "",
        password_confirmation: "",
        post_code: ''
      },
      isShowPicker: false,
      currentContent: new Date(),
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(),
      phoneList: {
        verify_code: "",
        isSms: false,
      },
bttCodeValue:"",
bttCodeValueName:"",
      areaCode: "",
      areaCode2: "",
      showPicker: false,
			showPicker2: false,
      Area: '', //地區
      areaList: [
        {
          text: 'Northern Region',
          children: [
            {text: 'Kedah'},
            {text: 'Pulau Pinang (Penang)'},
            {text: 'Perak and Perlis'},
          ]
        },
        {
          text: 'Central Region',
          children: [
            {text: 'Wilayah Persekutuan (Kuala Lumpur)'},
            {text: 'Wilayah Persekutuan (Putrajaya)'},
            {text: 'Selangor'},
            {text: 'Negeri Sembilan'},
          ]
        },
        {
          text: 'Southern Region',
          children: [
            {text: 'Melaka (Malacca)'},
            {text: 'Johor'},
          ]
        },
        {
          text: 'East Coast Region',
          children: [
            {text: 'Pahang'},
            {text: 'Terengganu'},
            {text: 'Kelantan'},
          ]
        },
        {
          text: 'Eastern Malaysia',
          children: [
            {text: 'Sabah'},
            {text: 'Sarawak'},
            {text: 'Wilayah Persekutuan (Labuan)'},
          ]
        },
      ], //地區列表
      columns: ["60 Malaysia", "86 China", "852 Hong Kong", "886 Taiwan"],
      uploader: [],
      pattern: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,// 正则验证时间
      showPickerAreaCode: false,//地區碼選項卡是否彈出
       setBttFlag:true
    };
  },
  mounted() {
    this.getPageContent();
     
  },
  directives: {
    ClickOutside
  },
  methods: {
    hide () {
    //  this.opened = false
    document.getElementById('bttId').style.display = 'none'
    //this.setBttFlag=true
    
   // alert("3")
   if(this.setBttFlag == false){
    this.registForm.sponsor = this.bttCodeValue
   }
   else{
    this.registForm.sponsor = ''
   }
    },
    setBttCode(){
      this.setBttFlag=false
      this.registForm.sponsor = this.bttCodeValue
      
      document.getElementById('bttId').style.display = 'none'
      if(this.bttCodeValue === "User Not Found"){
        this.registForm.sponsor = ''
      }
    },
    onChangeBtt(val){
      this.setBttFlag=true
      console.log("denhb",val.target._value.length)
      getBttCode({
        introducer: val.target._value
})
  .then((res) => {
    console.log(".......555.....btt code....", res)
    document.getElementById('bttId').style.display = 'block'
    if(res.state_code == 200){
      
      this.bttCodeValue = res.data.code
      this.bttCodeValueName = res.data.name
      
    }
    else{
      this.bttCodeValue = "User Not Found"
      this.bttCodeValueName = ""
    }
    
    // this.orderList = res.data;
    
    //  this.per_page = res.meta.per_page
    //   this.rows = res.meta.total
    // this.loadingShow = false
    console.log(res)
  })
  .catch((err) => {
    console.log(err.response);
  });
    },
    showMessage () {

				getNotificationsList().then(res => {
					console.log("---getNotificationsList-111-55555--", res)
					var qaz = []
				for (let i = 0; i < res.length; i++) {
						
						if (res[i].is_read == 0) {
							//alert(res[i].is_read)

							qaz.push(res[i].is_read)
						}
					}
				console.log("---getNotificationsList-111--44444444444444-", qaz.length)
				this.notCount=qaz.length
           getUnread().then(res => {
       
            if(res > 0) {
                   console.log("_______________11________",res)
              	
                	sessionStorage.setItem("notifications_Count", res+qaz.length)
           
            }
          })
				})
	
       console.log("++++++++++333333")
       
           console.log("++++++++++444444")
       
        
      },
    forgetPassword() {
      sessionStorage.setItem('currentPage',JSON.stringify({tabbar: '/ChangePassword',
        title: 'Forgot/Change Password'}))
      this.$router.push('/ChangePassword')
    },

  abc(){
//alert("d")
  },

    onpaste(evt){
      console.log('11111111111111111111111111', this.registForm.phone)
      console.log('22222222222222222222222222', document.getElementById('regPhoneId').value)
    //  this.registForm.phone = ''
      console.log('on paste', evt.clipboardData.getData('text'))
      evt.preventDefault()
    //   var value = $('#first').val();
    // var updated = value.replace(/[^A-Za-z0-9&. ]/g, '');
    // $('#first').val(updated);
    

//alert("2222222")
var a=evt.clipboardData.getData('text');
a=a.replace(/\-/g,''); // 1125, but a string, so convert it to number
a=parseInt(a,10);
console.log("__________a___________",a)
this.registForm.phone = a

console.log('111111111111111***************11111111111', this.registForm.phone)
     
      return true;
    },
    onConfirmArea(e) {
      this.Area = e
      this.showPicker = false;
    },
    onConfirm(value) {
      this.areaCode = value;
      this.showPicker = false;
      this.showPickerAreaCode = false
    },
		onConfirm2(value) {
      this.areaCode2 = value;
      this.showPicker2 = false;
    },
    // 圖片上傳
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file,'上傳的文件');
      let data = new FormData()
      data.append('file', file.file)
      uploadFile(data).then(res => {
        this.$toast.success('Success')
        this.uploader[0].url = res.file
      })
    },
    getPageContent() {
      this.$axios({
        method: "get",
        url: "/api/v1/customPages?id=" + this.$sessionStorage.page_id,
      })
        .then((res) => {
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
            console.log(res,".....a.a.a.a.a.a..a.a.a.a.a.a..a.a.a.a.a.a.a.a.a...");
            if (res) {
               this.showMessage();
              this.$store.commit("setToken", res.access_token);
              this.$store.commit("setTokenType", res.token_type);
              this.$store.commit("setUserType", res.user_type);
              sessionStorage.setItem('userType', res.user_type);
              this.$toast({
                type: "success",
                message: "Login \n successful",
              });
             sessionStorage.setItem('isShow1',false)
              this.getUser();
              const vm = this;
              setTimeout(function () {
                
               if(res.design_type === 'old'){
                
                vm.$store.commit("changePage", {
                  tabbar: "/Page/10",
                  title: "Advisors",
                });
                vm.$router.push("/Page/10");
              }
              else{
                window.location = "https://qa.ddgint.com/New/#/Page/10";
              }
        

              }, 1000);
            }
        
            EventHub.$emit('isLogin')
          })
          .catch((err) => {
            console.log(err.response,3333333);
            if(err.response === undefined){
              this.$toast("Please enter your mobile number and password");
            }
            else{
              this.$toast.allowMultiple();
						
            }
          
            
            
           // this.$toast("Please enter your mobile number and password");
            
          });
      } else {
				if (!this.areaCode2) {
					this.$toast('Please select the area code')
				} else {
					this.$toast("Please enter your mobile number and password");
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
          console.log(".......user..details...",res)
          sessionStorage.setItem("user_id", res.code);
            sessionStorage.setItem("user_name", (res.first_name+" "+res.third_name).toUpperCase());
            sessionStorage.setItem("user_passportNo", res.passport);
            this.$store.commit('Changeabc',res.avatar)
           // sessionStorage.setItem("avatar", res.avatar);
          
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
          var data = { phone: this.areaCode.split(' ')[0] + this.registForm.phone ,type:'sign_up'};
          this.$axios({
            method: "POST",
            url: "/api/v1/verify_code",
            data,
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
  /*  onShowPicker() {
      this.isShowPicker = true;
    },
    onHiddenPicker() {
      this.currentContent = "";
      this.isShowPicker = false;
    },*/
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
      var phoneInfo = {
        phone: this.areaCode.split(' ')[0] + this.registForm.phone,
        verify_code: this.phoneList.verify_code,
        type: 'sign_up'
      };
      this.$axios({
        method: "GET",
        url: "/api/v1/verify_code",
        params: phoneInfo
      })
        .then((res) => {
          console.log(res,'返回的值');
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
    isLetter(event) {

      var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
       event.preventDefault();
       return false;
    }
console.log("_________key_______",key)

    // var a='1-125';
// a=a.replace(/\-/g,''); // 1125, but a string, so convert it to number
// a=parseInt(a,10);
// console.log("__________a___________",a)


      // let char = String.fromCharCode(e.keyCode);
      // if (/^[0-9]+$/.test(char)) return true;
      // else e.preventDefault();
    },
    /**
     * 註冊
     */
    register() {


      if (this.registForm.password != this.registForm.password_confirmation) {
        this.$toast("The passwords are inconsistent");
        return;
      }
      if (this.uploader.length < 1) {
        this.$toast("Please upload BTT Code Picture");
        return;
      }

    
      console.log("____*****________this.registForm.sponsor,___",this.registForm.sponsor)
      this.$axios({
        method: "post",
        url: "/api/v1/users",
        data: {
          firstName: this.registForm.firstName,
          thirdName: this.registForm.thirdName,
          email: this.registForm.email,
          bttCode: this.registForm.bttCode,
          password: this.registForm.password,
          phone: this.areaCode.split(' ')[0] + this.registForm.phone,
          area: this.Area.join(','),
          post_code: this.registForm.post_code,
          passport: this.registForm.passport,
          address: this.registForm.address,
          birthday: this.registForm.birthday,
          sponsor: this.registForm.sponsor,
          bank: this.registForm.bank,
          bankAccountNo: this.registForm.bankAccountNo,
          bankAccountName: this.registForm.bankAccountName,
          password_confirmation: this.registForm.password_confirmation,
          btt_code_image: this.uploader[0].url,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.id) {
            this.$toast({
              type: "success",
              message: "Registration successful, please go to log in",
            });
         
            this.registForm.firstName = ''
           this.registForm.thirdName= ''
           this.registForm.email= ''
           this.registForm.bttCode= ''
           this.registForm.password= ''
           this.areaCode= ''
          this.registForm.phone = ''
           this.Area= ''
           this.registForm.post_code= ''
           this.registForm.passport= ''
           this.registForm.address= ''
           this.registForm.birthday= ''
           this.registForm.sponsor= ''
           this.registForm.bank= ''
           this.registForm.bankAccountNo= ''
           this.registForm.bankAccountName= ''
           this.registForm.password_confirmation= ''
           this.uploader[0].url= ''
           this.phoneList.verify_code = ''

            const vm = this;
            setTimeout(function () {
         //vm.$router.push('/');
         window.location.reload();
              vm.activeName = "SignIn";
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err)
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
  background-color:#af998f;
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
/* /deep/  .van-toast__text {
  word-wrap: break-word;
  word-break: normal;
  font-size: 24px;
} */
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
  background: #7b655d;
  color: #fff;
  border-color: #7b655d;
  border-radius: 10px;
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
    width: 30rem;
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
.picture {
  padding-top: 10px;
}
.bttDrop{
  display: none;
    z-index: 1;
    position: absolute;
    background: rgb(255, 255, 255);
    width: 90%;
    padding: 15px 10px;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 16px 40px 0px;
    cursor: pointer;
}
.bttDrop:hover{
  display: none;
    z-index: 1;
    position: absolute;
    background:#af998f;
    color: #fff;
    width: 90%;
    padding: 15px 10px;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 16px 40px 0px;
    cursor: pointer;
}
</style>
