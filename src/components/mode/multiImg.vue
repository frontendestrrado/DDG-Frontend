<!-- 多图模块 -->
<template>
	<div class="index-proImg" :style="{backgroundColor:imgData.bg_color}">
		<div class="showcase-detail" v-for="(single,index) in imgData.single_image" :key="index" v-if="single.image&&imgData.type === 5">
			<div class='product-item' @click="goProductDtl(single.path)">
				<van-image
				class="product-proImg pcShow"
				style="width: 100%;height:auto;"
				:src="single.image"
				fit="contain"
				/>
				<van-image
				class="product-proImg mpShow"
				style="width: 100%;height:auto;"
				:src="single.phone_image ? single.phone_image : single.image"
				fit="contain"
				/>
			</div>
		</div>
		<div :class="'showcase-detail-'+imgData.showcase_type" v-for="(single,index) in imgData.showcase_image" :key="index" v-if="single.image&&imgData.type === 7">
			<div class='product-item' @click="goProductDtl(single.path)">
				<van-image
				class="product-proImg"
				style="width: 100%;"
				:src="single.image"
				fit="contain"/>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name:'multiImage',
	props:{
		imgData:{
			type:Object,
		},
	},
	methods:{
		goProductDtl(path){
			this.$emit('on-goto',path);
		},
	}
}
</script>

<style scoped>
.pcShow {
	display: block;
}
.mpShow {
	display: none;
}
/*中等屏幕*/
@media screen and (max-width: 1200px){
  .pcShow {
		display: block;
	}
	.mpShow {
		display: none;
	}
}
/*平板*/
@media screen and (max-width: 992px){
  .pcShow {
		display: block;
	}
	.mpShow {
		display: none;
	}
}
/*手机*/
@media screen and (max-width: 768px){
  .pcShow {
		display: none;
	}
	.mpShow {
		display: block;
	}
}
@media screen and (max-width: 576px){
	.pcShow {
		display: none;
	}
	.mpShow {
		display: block;
	}
}
</style>