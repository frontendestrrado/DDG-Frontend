<template>
	<div class="OrganizeChart">
		<div class="OrganizeChart_info">

			<van-cell is-link center @click="$store.commit('changePage',{tabbar: '/OrganizeList/0', title: 'Organizational Chart'});$router.push('/OrganizeList/0')">
			  <template #title>
			    <span class="custom-title">ME</span>
			  </template>
			  <template #default>
			    <div class="fcb"><span>My Level:</span><span>Group</span></div>
			    <div class="fcb"><span>Month Sales:</span><span>$999</span></div>
			    <div class="fcb"><span>Year Sales:</span><span>$999</span></div>
			  </template>
			</van-cell>

			<van-cell is-link center @click="$store.commit('changePage',{tabbar: '/OrganizeList/1', title: 'Organizational Chart'});$router.push('/OrganizeList/1')">
			  <template #title>
			    <span class="custom-title">Direct Recruit 1st Level</span>
			  </template>
			  <template #default>
			    <div class="fcb"><span>Enroll:</span><span>10</span></div>
			    <div class="fcb"><span>Active Enroll:</span><span>3</span></div>
			    <div class="fcb"><span>Month Sales:</span><span>$999</span></div>
			    <div class="fcb"><span>Year Sales:</span><span>$999</span></div>
			  </template>
			</van-cell>
			<van-cell is-link center @click="$store.commit('changePage',{tabbar: '/OrganizeList/2', title: 'Organizational Chart'});$router.push('/OrganizeList/2')">
			  <template #title>
			    <span class="custom-title">Unit</span>
			  </template>
			  <template #default>
			    <div class="fcb"><span>Count:</span><span>1</span></div>
			    <div class="fcb"><span>Month Sales:</span><span>$999</span></div>
			    <div class="fcb"><span>Year Sales:</span><span>$999</span></div>
			  </template>
			</van-cell>
			<van-cell is-link center @click="$store.commit('changePage',{tabbar: '/OrganizeList/3', title: 'Organizational Chart'});$router.push('/OrganizeList/3')">
			  <template #title>
			    <span class="custom-title">Team</span>
			  </template>
			  <template #default>
			    <div class="fcb"><span>Count:</span><span>2</span></div>
			    <div class="fcb"><span>Month Sales:</span><span>$999</span></div>
			    <div class="fcb"><span>Year Sales:</span><span>$999</span></div>
			  </template>
			</van-cell>
			<van-cell is-link center @click="$store.commit('changePage',{tabbar: '/OrganizeList/4', title: 'Organizational Chart'});$router.push('/OrganizeList/4')">
			  <template #title>
			    <span class="custom-title">Group</span>
			  </template>
			  <template #default>
			    <div class="fcb"><span>Count:</span><span>3</span></div>
			    <div class="fcb"><span>Month Sales:</span><span>$999</span></div>
			    <div class="fcb"><span>Year Sales:</span><span>$999</span></div>
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
    .OrganizeChart{
        width: 100%;
    }
    .OrganizeChart_title{font-weight: 500;text-align: left;background-color: #FFC80B;line-height: 35px;text-indent: 20px;}
    .OrganizeChart_info .ad_icon{width: 20vw;height: 20vw;/*background-color: #CBCDCE;*/margin: 20px auto 10px;border-radius: 10px;}
	.inputBox{
		width: 90%;
		margin: 30px auto;
	}
</style>
