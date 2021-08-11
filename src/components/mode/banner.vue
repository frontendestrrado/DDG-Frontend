<template>
	<div class="lunbo" v-if="bannerData.quantity>0">
		<van-swipe :height="bannerHeight+'px'" :autoplay="bannerData.cutover_time*1000" :class="'button_shape_'+bannerData.button_shape">
			<van-swipe-item v-for="(item,index) in bannerData.banners" :key="index">
				<div class="bannerContent" @click="goBanner(item.path)">
					<van-image
					style="width: 100%;height:auto;"
					:src="item.image?item.image:require('@/assets/img/test.png')"
					fit="contain"
					/>
				</div>
			</van-swipe-item>
		</van-swipe>
	</div>
</template>
<script>
	export default {
		name:'banner',
		props:{
			bannerData:{
				type:Object,
			},
		},
		data () {
			return {
				bannerHeight: 400,
			}
		},
		watch: {
			bannerData() {
				this.bannerDataW();
			}
		},
		mounted(){
			let that =this;
			window.addEventListener('resize',()=>{
				that.getImgH();
			})
		},
		methods:{
			bannerDataW(){
				var self = this;
				this.$nextTick(function(){
					self.getImgH();
				});
			},
			getImgH(){
				var w=document.documentElement.clientWidth || document.body.clientWidth;
				// $('.lunbo').find('.el-carousel__indicator > .el-carousel__button').css('background-color',this.bannerData.button_color);
				this.bannerHeight = w/750 * 400;
				console.log(this.bannerHeight);
			},
			goBanner(path){
				console.log(path);
			},
		}
	}
</script>
<style scoped>
/* banner图模块 */
/deep/ .el-carousel__container{height: 100%;}
/deep/ .el-carousel__arrow{width: 50px;height: 50px;font-size: 25px;}
.bannerContent{
	width: 100%;height: 100%;position: relative;
}
/deep/ .button_shape_1 .el-carousel__button{width: 15px;height: 2px;}
/deep/ .button_shape_2 .el-carousel__button{width: 8px;height: 8px;border-radius: 0%;}
/deep/ .button_shape_3 .el-carousel__button{width: 10px;height: 10px;border-radius: 50%;}
</style>