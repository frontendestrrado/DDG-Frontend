<template>
	<div class="contactUs main_content">
		<van-row>
            <van-col :span="$store.state.isPC?8:24">
            	<div class="contactUs_info">
					<div class="contactUs_title">Contact Us</div>
					<div class="fcs">
						<van-icon name="envelop-o" color="#000" size="26" />
						<span>email@qq.com</span>
					</div>
					<div class="fcs">
						<van-icon name="phone-o" color="#000" size="26" />
						<span>8888-8888-8888</span>
					</div>
				</div>
            </van-col>
            <van-col :span="$store.state.isPC?16:24">
		        <div class="inputBox">
		       		<div class="box">
						<van-field v-model="name" placeholder="name*" />
						<van-field v-model="phone" type="tel" placeholder="phone" />
						<van-field v-model="email" placeholder="email*" />
						<van-field v-model="message" rows="4" type="textarea" placeholder="message*" />
		       		</div>
		  			<van-button style="margin-top: 30px;" class="submitBtn" type="default" @click="submitMsg();">Submit</van-button>
		        </div>
            </van-col>
        </van-row>

	</div>
</template>

<script>
export default {
    data () {
      	return {
      		name:'',
      		phone:'',
      		email:'',
      		message:'',
      	}
    },
    mounted(){

    },
    methods:{
    	submitMsg(){
    		
    	},
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
	/deep/ .van-row{display: -webkit-box;}
	/deep/ .van-cell{
		margin-bottom: 10px;padding: 0px 16px;
	}
    .contactUs{width: 100%;/*min-height: calc(100vh - 60px);*/margin-top: 20px;background: #F3F5F7;}
    .contactUs_info{height:calc(100% - 40px);padding: 20px 30px;background-color: #FFC80B;}
    .contactUs_title{font-weight: 500;text-align: left;}
    .contactUs_info .fcs{margin-left: 30%;}
    .contactUs_info span{margin-left: 10px;}
	.inputBox{
		width: 90%;
		margin: 30px auto;
	}
	/*手机*/
    @media screen and (max-width: 768px){
        /deep/ .van-row{display: block;}
        .contactUs{margin-top: 0px;}
    }
    /*平板*/
    @media screen and (min-width: 768px) and (max-width: 992px){
        /deep/ .van-row{display: -webkit-box;}
        .contactUs{margin-top: 20px;}
    }
    /*中等屏幕*/
    @media screen and (min-width: 992px) and (max-width: 1200px){
        
    }
    /*大屏幕*/
    @media screen and (min-width: 1200px){
        
    }
</style>
