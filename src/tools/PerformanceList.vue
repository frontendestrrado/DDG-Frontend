
<template>
	<div class="Performance bodybox">
		<div class="Performance_info">

            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="暂无更多数据"
                @load="load_more_items"
            >
                <van-cell-group inset v-for="(item,index) in data" :key="index">
                    <van-cell center is-link @click="$store.commit('changePage',{tabbar: '/PerformanceDetail', title: '业绩详情'});$router.push('/PerformanceDetail/'+item.id)">
                        <div>订单号:{{item.no}}</div>
                        <div>金额:{{item.amount}}</div>
                    </van-cell>
                </van-cell-group>
            </van-list>
    	</div>
	</div>
</template>

<script>
export default {
    data () {
      	return {
            data:[],
            page:0,
            maxPage:50,
            loading:false,
            finished:false,
      	}
    },
    mounted(){
    	this.getAchievementList();
        // api/v1/achievements/:achievement
    },
    methods:{
    	// 业绩列表
    	getAchievementList(){
    		this.$axios({
                method: 'get',
                url: '/api/v1/achievements?search=&order=created_at_asc&page='+this.page,
                headers: {
                    "Authorization": sessionStorage.token_type+sessionStorage.token,
                }
            }).then(res => {
            	console.log(res.data);
                this.data = res.data;
                this.maxPage = Math.ceil(res.meta.total/res.meta.per_page);
                this.loading = false;
            }).catch(err => {
                this.$toast({
            		type:'fail',
            		message:'error',
        		});
            });
    	},
        load_more_items(){
            this.loading=true;
            this.page+=1;
            if(this.page>=this.maxPage){
                this.page=this.maxPage;
                this.finished=true;
            }
            this.getAchievementList();
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
