<template>
	<div class="login">
       <div class="inputBox">
       		<div class="box">
       			<van-field
				    v-model="username"
				    clearable
				    placeholder="Mobile Phone*"
				>
				</van-field>
				<van-field
				    v-model="password"
				    type="password"
				    placeholder="Password*"
	  			>
	  			</van-field>
       		</div>
  			<van-button class="loginBtn" type="default" @click="login();">Login</van-button>
       </div>
	</div>
</template>

<script>
export default {
    data () {
      	return {
      		username:'',
      		password:'',
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
	/deep/ .van-dropdown-item__option--active,/deep/  .van-dropdown-item__option--active ,/deep/ .van-dropdown-item__icon, /deep/ .van-dropdown-menu__title--active{
		color: #2f75f4;
	}
	/deep/ .van-dropdown-menu__title{
		/*color: #fff;*/
	}
	/deep/ .van-cell{
		/*border-bottom: 2px solid #000;*/
		margin-bottom: 10px;padding: 0px 16px;
	}
    .login{
        width: 100%;
        background: #F3F5F7;
    }
	.inputBox{
		width: 90%;
		margin: 30px auto;
	}
	.box{

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
