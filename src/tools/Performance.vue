<template>
	<div class="Performance">
		<div class="Performance_info">

			<van-cell center value="$9999999" title="Yearly"></van-cell>
			<van-cell center value="$99999" title="Monthly"></van-cell>
			<van-cell center value="$9999" title="Weekly"></van-cell>
			<van-cell center value="$99" title="Daily"></van-cell>

		</div>
	</div>
</template>

<script>
export default {
    data () {
      	return {
      	}
    },
    mounted(){
    	this.getOrderList();
    	this.getAchievementList();
    },
    methods:{
    	// 订单列表
    	getOrderList(){
    		this.$axios({
                method: 'get',
                url: '/api/v1/orders?search=&order=date_desc',
                headers: {
                    "Authorization": sessionStorage.token_type+sessionStorage.token,
                }
            }).then(res => {
            	console.log(res);
            }).catch(err => {
                this.$toast({
            		type:'fail',
            		message:'error',
        		});
            });
    	},
    	// 业绩列表
    	getAchievementList(){
    		this.$axios({
                method: 'get',
                url: '/api/v1/achievements?search=20210917111033796872&order=created_at_asc',
                headers: {
                    "Authorization": sessionStorage.token_type+sessionStorage.token,
                }
            }).then(res => {
            	console.log(res);
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
	/deep/ .van-cell__title{width: 30%;flex:none;text-align: left;}
	/deep/ .van-cell__value{color: #323233;}
    .Performance{
        width: 100%;
    }
    .Performance_title{font-weight: 500;text-align: left;background-color: #FFC80B;line-height: 35px;text-indent: 20px;}
    .Performance_info .ad_icon{width: 20vw;height: 20vw;/*background-color: #CBCDCE;*/margin: 20px auto 10px;border-radius: 10px;}
	.inputBox{
		width: 90%;
		margin: 30px auto;
	}
</style>
