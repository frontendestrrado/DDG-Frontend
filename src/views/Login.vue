<template>
	<div class="login from_content">
		<van-tabs v-model="activeName">
			<van-tab title="Sign Up" name="SignUp">
				<div class="inputBox">
					<div class="main_content" :style="{maxWidth: pageWidth+'px'}">
						<Common :pageData='pageContent'></Common>
					</div>
					<!-- <div class="box">
						<van-field v-model="registForm.name" autocomplete="off" placeholder="name*" />
						<van-field v-model="registForm.phone" autocomplete="off" placeholder="Phone*" />
						<van-field v-model="registForm.password" autocomplete="off" type="password" placeholder="Password*" />
						<van-field v-model="registForm.repassword" autocomplete="off" type="password" placeholder="Repeat Password*" />
						<van-field
						  style="padding-right: 0"
						  v-model="registForm.smscode"
						  center
						  clearable
						  placeholder="Enter Verification Code"
						>
						  <template #button>
						    <van-button size="small" class="submitBtn" :disabled='isSms' @click="sendCode();">Send SMS Code</van-button>
						  </template>
						</van-field>
					</div>
					<van-button class="loginBtn" type="default" @click="register();">Sign Up</van-button> -->
				</div>
			</van-tab>
			<van-tab title="Sign In" name="SignIn">
				<div class="inputBox">
					<div class="box">
						<van-field v-model="loginForm.username" type="tel" placeholder="Mobile Phone*" />
						<van-field v-model="loginForm.password" type="password" placeholder="Password*" />
					</div>
					<van-button class="loginBtn" type="default" @click="login();">Sign In</van-button>
				</div>
			</van-tab>
		</van-tabs>
</div>
</template>

<script>
	import Common from '@/components/mode/common.vue'
	export default {
		components: {
			Common,
		},
		name: 'customPages',
		data () {
			return {
				pageContent: [],
				pageWidth: '1200',
				isSms:false,
				activeName: 'SignUp',
				loginForm:{
					username:'',
					password:'',
				},
				registForm:{
					name:'',
					phone:'',
					password:'',
					repassword:'',
					smskey: '',
					smscode:'',
				},
			}
		},
		mounted(){
			this.getPageContent();
		},
		methods:{
			getPageContent(){
				this.$axios({
					method: 'get',
					url:'/api/v1/customPages?id='+this.$sessionStorage.page_id,
				}).then(res => {
					console.log(res);
					if(res.status == 200){
	                    this.pageContent = res.data.modules;
	                    this.pageWidth = res.data.width;
	                    this.pageContent.forEach((item,i) => {
	                    	if(item.type == 9){
	                    		item.data_collects.forEach((itemi,j) => {
	                    			this.$set(this.pageContent[i].data_collects[j],'content','')
					            })
	                    	}
			            })
	                }else{
	                	this.pageContent = [];
	                	this.pageWidth = '1200';
	                }
				}).catch(error=>{

				});
			},
			login(){
				if(this.loginForm.username&&this.loginForm.password){
					this.$axios({
						method: 'post',
						url: '/api/v1/authorizations',
						data:{
							username:this.loginForm.username,
							password:this.loginForm.password,
						},
					}).then(res => {
						console.log(res);
						if(res){
							this.$store.commit('setToken',res.access_token);
							this.$store.commit('setTokenType',res.token_type);
							this.$toast({
								type:'success',
								message:'登录成功',
							});          	
							const vm=this;
							setTimeout(function(){
								vm.$store.commit('changePage',{tabbar: '/Index', title: 'Home'});
								vm.$router.push('/Index');
							},1000);
						}
					}).catch(err => {
						this.$toast.allowMultiple();
						for (var item in err.errors) {
							this.$toast({
								type:'fail',
								message:err.errors[item],
							});
						}
					});
				}else{
					this.$toast('请输入用户名和密码');
				}
			},
			sendCode(){
				if(this.registForm.phone){
					this.$axios({
		                method: 'post',
		                url: '/api/v1/verificationCodes',
		                data:{
		                	phone:this.registForm.phone,
		                },
		            }).then(res => {
		            	console.log(res);
		            	this.isSms=true;
		            	this.registForm.smskey=res.key;
		            	const vm=this;
		            	setTimeout(function(){
		            		vm.isSms=false;
		            	},60000);
		            }).catch(err => {
		            	this.$toast({
		            		type:'fail',
		            		message:'获取验证码失败',
	            		});
		            });
				}else{
					this.$toast('请输入手机号');
				}
			},
			register(){
				if(!this.registForm.smskey){
					this.$toast('请先获取验证码');
					return;
				}
				if(this.registForm.password!=this.registForm.repassword){
					this.$toast('两次密码不一致');
					return;
				}
				if(this.registForm.name&&this.registForm.password&&this.registForm.smscode){
					this.$axios({
						method: 'post',
						url: '/api/v1/users',
						data:{
							name:this.registForm.name,
							password:this.registForm.password,
							phone: this.registForm.phone,
							verification_key: this.registForm.smskey,
							verification_code: this.registForm.smscode,
						},
					}).then(res => {
						console.log(res);
						if(res.id){
							this.$toast({
								type:'success',
								message:'注册成功，请前去登录',
							});          	
							const vm=this;
							setTimeout(function(){
								// vm.$router.push('/');
								vm.activeName = 'SignIn';
							},1000);
						}
					}).catch(err => {
						this.$toast.allowMultiple();
						for (var item in err.errors) {
							this.$toast({
								type:'fail',
								message:err.errors[item],
							});
						}
					});
				}else{
					this.$toast('请输入完全部信息');
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
	margin-top: 20px;background-color: #F3F5F7;padding-bottom: 20px;
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
	background: #87898A;
	color: #fff;
	border-color: #87898A;
	border-radius: 46px;
}
@media screen and (max-width: 576px){
  .login{margin-top: 0;}
}
@media screen and (max-width: 768px){
  .login{margin-top: 0;}
}
@media screen and (min-width: 768px) and (max-width: 992px){
  .login{margin-top: 20px;}
}
@media screen and (min-width: 992px) and (max-width: 1200px){
  .login{margin-top: 20px;}
}
</style>
