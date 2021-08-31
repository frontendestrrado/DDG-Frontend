<template>
	<div class="person from_content">
		<van-cell-group>
            <van-cell title="Name" :value="userInfo.name" is-link>
                <template #right-icon></template>
            </van-cell>
            <van-cell title="Home Address" :value="userInfo.name" is-link>
                <template #right-icon><van-icon name="edit"/></template>
            </van-cell>
            <van-cell title="Phone" :value="userInfo.phone" is-link>
                <template #right-icon><van-icon name="edit"/></template>
            </van-cell>
            <van-cell title="Email Address" :value="userInfo.email" is-link>
                <template #right-icon><van-icon name="edit"/></template>
            </van-cell>
            <van-cell title="Date of Birth" :value="userInfo.birthday" />
            <van-cell title="DCS Code" :value="userInfo.code" />
            <van-cell title="NRIC or Passport #" :value="userInfo.post" />

            <van-cell title="Bank Name" :value="userInfo.birthday" is-link>
                <template #right-icon><van-icon name="edit"/></template>
            </van-cell>
            <van-cell title="Bank Account" :value="userInfo.birthday" is-link>
                <template #right-icon><van-icon name="edit"/></template>
            </van-cell>
            <van-cell title="Account Name" :value="userInfo.birthday" is-link>
                <template #right-icon><van-icon name="edit"/></template>
            </van-cell>
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
    .person{background: #F3F5F7;}
    .person_info{padding: 20px 30px;background-color: #FFC80B;}
    .person_title{font-weight: 500;text-align: left;}
</style>
