<template>
	<div class="Performance bodybox">
		<div class="Performance_info">
            <van-cell center title="订单号" :value="data.no"></van-cell>
            <van-cell center title="金额" :value="data.amount"></van-cell>
            <van-cell center title="时间" :value="data.created_at"></van-cell>
		</div>
	</div>
</template>

<script>
export default {
    data () {
      	return {
            data:'',
      	}
    },
    mounted(){
    	this.getAchievementDtl();
    },
    methods:{
    	// 业绩详情
    	getAchievementDtl(){
    		this.$axios({
                method: 'get',
                url: '/api/v1/achievements/'+this.$route.params.id,
                headers: {
                    "Authorization": sessionStorage.token_type+sessionStorage.token,
                }
            }).then(res => {
            	console.log(res);
                this.data = res;
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

<style scoped>
    /deep/ .van-cell-group--inset{margin-bottom: 10px;}
	/deep/ .van-cell__title{width: 30%;flex:none;text-align: left;}
	/deep/ .van-cell__value{color: #323233;}
    .Performance{
        width: 100%;min-height: calc(100vh - 60px);background: #fff;
    }
    .Performance_title{font-weight: 500;text-align: left;background-color: #FFC80B;line-height: 35px;text-indent: 20px;}
    .Performance_info{padding-top: 10px;}
    .Performance_info .ad_icon{width: 20vw;height: 20vw;/*background-color: #CBCDCE;*/margin: 20px auto 10px;border-radius: 10px;}
	.inputBox{
		width: 90%;
		margin: 30px auto;
	}
</style>
