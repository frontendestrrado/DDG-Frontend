<template>
	<div class="Members">
		<div class="Members_info">
			<van-cell is-link center @click="$store.commit('changePage',{tabbar: '/OrganizeList/0', title: 'Organizational Chart'});$router.push('/OrganizeList/0')">
				<template #title>
					<span class="custom-title">頭像</span>
				</template>
				<template #default>
					<div class="fcb"><span>bing</span><span>職位</span></div>
					<div class="fcb"><span>456</span><span></span></div>
				</template>
			</van-cell>
			<van-cell is-link center @click="$store.commit('changePage',{tabbar: '/OrganizeList/0', title: 'Organizational Chart'});$router.push('/OrganizeList/0')">
				<template #title>
					<span class="custom-title">頭像</span>
				</template>
				<template #default>
					<div class="fcb"><span>bing</span><span>職位</span></div>
					<div class="fcb"><span>456</span><span></span></div>
				</template>
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
	/deep/ .van-cell__value{color: #323233;}
    .Members{
        width: 100%;
    }
    .ToolBox_title{font-weight: 500;text-align: left;background-color: #FFC80B;line-height: 35px;text-indent: 20px;}
</style>
