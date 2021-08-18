<template>
	<div class="person">
			<van-cell-group>
			  <van-cell title="Name" :value="userInfo.name" />
			  <van-cell title="Phone" :value="userInfo.phone"/>
			  <van-cell title="Email" :value="userInfo.email"/>
			</van-cell-group>
	</div>
</template>

<script>
export default {
    data () {
      	return {
      		userInfo:'',
      	}
    },
    mounted(){
    	this.getUser();
    },
    methods:{
    	getUser(){
			this.$axios({
                method: 'get',
                url: '/api/v1/user',
                headers: {
                    "Authorization": sessionStorage.token_type+sessionStorage.token,
                }
            }).then(res => {
            	console.log(res);
            	this.userInfo = res;
            }).catch(err => {
                this.$toast({
            		type:'fail',
            		message:'error',
        		});
            });
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
	/deep/ .van-cell .van-cell__title{text-align: left;}
    .person{width: 100%;min-height: calc(100vh - 60px);background: #F3F5F7;}
    .person_info{padding: 20px 30px;background-color: #FFC80B;}
    .person_title{font-weight: 500;text-align: left;}
</style>
