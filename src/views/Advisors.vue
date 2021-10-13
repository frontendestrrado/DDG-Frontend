<template>
	<div class="Advisors">
		<div class="Advisors_info">
			<div class="Advisors_title">Business / 商业</div>
			<div>
				<van-row>
				  <van-col span="8" @click="changeTab()">
					<div class="ad_icon fcc">
						<van-image
							style="width: 100%;height:auto;margin: 0 auto;"
							:src="require('@/assets/img/icon_11.png')"
							fit="contain"
							/>
					</div>
				  	<div>Organizational Chart<br/>组织图</div>
				  </van-col>
				  <van-col span="8" @click="changeTab()">
					<div class="ad_icon fcc">
						<van-image
							style="width: 100%;height:auto;margin: 0 auto;"
							:src="require('@/assets/img/icon_12.png')"
							fit="contain"
							/>
					</div>
				  	<div>Performance<br/>业绩</div>
				  </van-col>
				  <van-col span="8" @click="changeTab()">
					<div class="ad_icon fcc">
						<van-image
							style="width: 100%;height:auto;margin: 0 auto;"
							:src="require('@/assets/img/icon_13.png')"
							fit="contain"
							/>
					</div>
				  	<div>Personal Growth<br/>个人成长</div>
				  </van-col>
				  <van-col span="8" @click="changeTab()">
					<div class="ad_icon fcc">
						<van-image
							style="width: 100%;height:auto;margin: 0 auto;"
							:src="require('@/assets/img/icon_14.png')"
							fit="contain"
							/>
					</div>
				  	<div>Training Plan<br/>培训计划</div>
				  </van-col>
				  <van-col span="8" @click="changeTab()">
					<div class="ad_icon fcc">
						<van-image
							style="width: 100%;height:auto;margin: 0 auto;"
							:src="require('@/assets/img/icon_15.png')"
							fit="contain"
							/>
					</div>
				  	<div>Tool Box<br/>工具箱</div>
				  </van-col>
				</van-row>
			</div>
			<div class="Advisors_title">Tool Box / 工具箱</div>
			<div>
				<van-row>
				  <van-col span="8" @click="changeTab()">
					<div class="ad_icon fcc">
						<van-image
							style="width: 100%;height:auto;margin: 0 auto;"
							:src="require('@/assets/img/icon_26.png')"
							fit="contain"
							/>
					</div>
				  	<div>My Profile<br/>关于我</div>
				  </van-col>
				  <van-col span="8" @click="changeTab()">
					<div class="ad_icon fcc">
						<van-image
							style="width: 100%;height:auto;margin: 0 auto;"
							:src="require('@/assets/img/icon_22.png')"
							fit="contain"
							/>
					</div>
				  	<div>Learning to Use<br/>学习使用</div>
				  </van-col>
				  <van-col span="8" @click="changeTab()">
					<div class="ad_icon fcc">
						<van-image
							style="width: 100%;height:auto;margin: 0 auto;"
							:src="require('@/assets/img/icon_23.png')"
							fit="contain"
							/>
					</div>
				  	<div>Teaching Tools<br/>教导工具</div>
				  </van-col>
				  <van-col span="8" @click="changeTab()">
					<div class="ad_icon fcc">
						<van-image
							style="width: 100%;height:auto;margin: 0 auto;"
							:src="require('@/assets/img/icon_24.png')"
							fit="contain"
							/>
					</div>
				  	<div>Forms<br/>表格</div>
				  </van-col>
				  <van-col span="8" @click="changeTab()">
					<div class="ad_icon fcc">
						<van-image
							style="width: 100%;height:auto;margin: 0 auto;"
							:src="require('@/assets/img/icon_25.png')"
							fit="contain"
							/>
					</div>
				  	<div>Files<br/>文件</div>
				  </van-col>
				  <van-col span="8" @click="changeTab()">
					<div class="ad_icon fcc">
						<van-image
							style="width: 100%;height:auto;margin: 0 auto;"
							:src="require('@/assets/img/icon_26.png')"
							fit="contain"
							/>
					</div>
				  	<div>Cases<br/>个案</div>
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

<style scoped>
	/deep/ .van-cell{
		margin-bottom: 10px;padding: 0px 16px;
	}
    .Advisors{
        width: 100%;
    }
    .Advisors_title{font-weight: 500;text-align: left;background-color: #FFC80B;line-height: 35px;text-indent: 20px;}
    .Advisors_info .ad_icon{width: 20vw;height: 20vw;/*background-color: #CBCDCE;*/margin: 20px auto 10px;border-radius: 10px;}
	.inputBox{
		width: 90%;
		margin: 30px auto;
	}
</style>
