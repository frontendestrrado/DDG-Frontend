<template>
	<div class="login">
		<van-tabs v-model="activeName">
			<van-tab title="Sign Up" name="SignUp">
				<div class="inputBox">
					<div class="box">
						<van-field v-model="registForm.name" placeholder="name*" />
						<van-field v-model="registForm.password" type="password" placeholder="Password*" />
						<van-field v-model="registForm.repassword" type="password" placeholder="Repeat Password*" />

						<van-field
						  style="padding-right: 0"
						  v-model="registForm.sms"
						  center
						  clearable
						  placeholder="Enter Verification Code"
						>
						  <template #button>
						    <van-button size="small" class="submitBtn">Send SMS Code</van-button>
						  </template>
						</van-field>
					</div>
					<van-button class="loginBtn" type="default" @click="login();">Sign Up</van-button>
				</div>
			</van-tab>
			<van-tab title="Sign In" name="SignIn">
				<div class="inputBox">
					<div class="box">
						<van-field v-model="loginForm.phone" type="tel" placeholder="Mobile Phone*" />
						<van-field v-model="loginForm.password" type="password" placeholder="Password*" />
					</div>
					<van-button class="loginBtn" type="default" @click="login();">Sign In</van-button>
				</div>
			</van-tab>
		</van-tabs>
</div>
</template>

<script>
	export default {
		data () {
			return {
				activeName: 'SignUp',
				loginForm:{
					phone:'',
					password:'',
				},
				registForm:{
					name:'',
					password:'',
					repassword:'',
					sms:'',
				},
			}
		},
		mounted(){

		},
		methods:{
			login(){
				if(this.username&&this.password){
					this.$axios({
						method: 'post',
						url: '/api/v1/authorizations',
						data:{
							username:this.username,
							password:this.password,
						},
					}).then(res => {
						console.log(res);
						if(res.data.status==200){
							sessionStorage.setItem('token',res.data.success.token);
							this.$toast({
								type:'success',
								message:res.data.message,
							});          	
							const vm=this;
							setTimeout(function(){
								vm.$router.push('/');
							},1000);
						}else{
							this.$toast.allowMultiple();
							for (var item in res.data.error) {
								this.$toast({
									type:'fail',
									message:res.data.error[item],
								});
							}
						}
					}).catch(err => {
						this.$toast({
							type:'fail',
							message:'error',
						});
					});
				}else{
					this.$toast('请输入用户名和密码');
				}
			},
		}
	}
</script>
<style>
.van-field .van-icon{
	font-size: 20px;
}

</style>
<style scoped>
/deep/ .van-tab {background-color: rgba(198,198,198,1);color: #fff;}
/deep/ .van-tab--active {background-color: #FFC80B;color: #fff;}
/deep/ .van-tabs__line{background-color: transparent;}
/deep/ .van-cell{margin-bottom: 10px;padding: 0px 16px;}
.login{
	width: 100%;
}
.inputBox{
	width: 90%;
	margin: 30px auto;
}

.loginBtn{
	width: 100%;
	height: 46px;
	line-height: 46px;
	margin-top: 30px;
	background: #000;
	color: #fff;
	border-color: #000;
	border-radius: 46px;
}
</style>
