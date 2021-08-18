<template>
	<div class="Advisors">
		<div class="Advisors_info">
			<div class="Advisors_title">Business</div>
			<div>
				<van-row>
				  <van-col span="8" @click="changeTab()">
					<div class="ad_icon fcc">
						<van-icon name="friends" color="#222" size="35"/>
					</div>
				  	<div>组织图</div>
				  </van-col>
				  <van-col span="8" @click="changeTab()">
					<div class="ad_icon fcc">
						<van-icon name="friends" color="#222" size="35"/>
					</div>
				  	<div>业绩</div>
				  </van-col>
				  <van-col span="8" @click="changeTab()">
					<div class="ad_icon fcc">
						<van-icon name="friends" color="#222" size="35"/>
					</div>
				  	<div>个人成长</div>
				  </van-col>
				  <van-col span="8" @click="changeTab()">
					<div class="ad_icon fcc">
						<van-icon name="friends" color="#222" size="35"/>
					</div>
				  	<div>培训计划</div>
				  </van-col>
				</van-row>
			</div>
			<div class="Advisors_title">工具箱</div>
			<div>
				<van-row>
				  <van-col span="8" @click="changeTab()">
					<div class="ad_icon fcc">
						<van-icon name="friends" color="#222" size="35"/>
					</div>
				  	<div>工具箱</div>
				  </van-col>
				  <van-col span="8" @click="changeTab()">
					<div class="ad_icon fcc">
						<van-icon name="friends" color="#222" size="35"/>
					</div>
				  	<div>学习使用</div>
				  </van-col>
				  <van-col span="8" @click="changeTab()">
					<div class="ad_icon fcc">
						<van-icon name="friends" color="#222" size="35"/>
					</div>
				  	<div>教导工具</div>
				  </van-col>
				  <van-col span="8" @click="changeTab()">
					<div class="ad_icon fcc">
						<van-icon name="friends" color="#222" size="35"/>
					</div>
				  	<div>表格</div>
				  </van-col>
				  <van-col span="8" @click="changeTab()">
					<div class="ad_icon fcc">
						<van-icon name="friends" color="#222" size="35"/>
					</div>
				  	<div>文件</div>
				  </van-col>
				  <van-col span="8" @click="changeTab()">
					<div class="ad_icon fcc">
						<van-icon name="friends" color="#222" size="35"/>
					</div>
				  	<div>个案</div>
				  </van-col>
				</van-row>
			</div>
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
	/deep/ .van-cell{
		margin-bottom: 10px;padding: 0px 16px;
	}
    .Advisors{
        width: 100%;
    }
    .Advisors_title{font-weight: 500;text-align: left;background-color: #FFC80B;line-height: 35px;text-indent: 10px;}
    .Advisors_info .ad_icon{width: 20vw;height: 20vw;background-color: #C6C6C6;margin: 20px auto 10px;border-radius: 10px;}
	.inputBox{
		width: 90%;
		margin: 30px auto;
	}
</style>
