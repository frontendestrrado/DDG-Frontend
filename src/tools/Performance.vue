<template>
	<div class="Performance bodybox">
		<div class="Performance_info">

			<van-cell center :value="'$'+data.totalYearAchievement" title="Yearly"></van-cell>
			<van-cell center :value="'$'+data.totalMonthAchievement" title="Monthly"></van-cell>
			<van-cell center :value="'$'+data.totalWeekAchievement" title="Weekly"></van-cell>
			<van-cell center :value="'$'+data.totalDayAchievement" title="Daily"></van-cell>

            <div style="margin: 16px;">
                <van-button round block type="info" @click="$store.commit('changePage',{tabbar: '/PerformanceList', title: '业绩列表'});$router.push('/PerformanceList')">业绩列表</van-button>
            </div>
		</div>
	</div>
</template>

<script>
export default {
    data () {
      	return {
            data:{},
      	}
    },
    mounted(){
        this.getAchievement();
    },
    methods:{
        // 获取业绩
        getAchievement(){
            this.$axios({
                method: 'get',
                url: '/api/v1/achievement/total',
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
