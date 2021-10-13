<template>
	<div class="Members from_content">
		<div class="Members_info">
			<van-cell is-link center @click="$store.commit('changePage',{tabbar: '/MemberDetail', title: 'MemberDetail'});$router.push('/MemberDetail')">
				<div>
					<van-image
						width="50"
						height="50"
						src="https://img01.yzcdn.cn/vant/cat.jpeg"
					/>
				</div>
				<div>bing</div>
				<div>123456</div>
				<div>職位</div>
			</van-cell>
			<van-cell is-link center @click="$store.commit('changePage',{tabbar: '/MemberDetail', title: 'MemberDetail'});$router.push('/MemberDetail')">
				<div>
					<van-image
						width="50"
						height="50"
						src="https://img01.yzcdn.cn/vant/cat.jpeg"
					/>
				</div>
				<div>bing</div>
				<div>123456</div>
				<div>職位</div>
			</van-cell>
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

    },
    methods:{
    	changeTab(){
    		
    	}
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
	/deep/ .van-cell__value{
		color: #323233;
		display:flex;
		justify-content: 
		space-between;
		align-items: center;
	}
	.Members{
			/* width: 100%; */
			justify-content: space-between;
	}
	.ToolBox_title{font-weight: 500;text-align: left;background-color: #FFC80B;line-height: 35px;text-indent: 20px;}
</style>
