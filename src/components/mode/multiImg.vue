<!-- 多图模块 -->
<template>
	<div class="index-proImg" :style="{backgroundColor:imgData.bg_color}">
		<div v-for="(single,index) in imgData.single_image" :key="index" v-if="single.image">
			<!-- <div :class="'showcase-detail-'+imgData.showcase_type"> -->
			<div class="showcase-detail-1">
				<div class='product-item' @click="goProductDtl(single.path)">
					<van-image
					class="product-proImg"
					style="width: 100%;height:auto;"
					:src="single.image"
					fit="contain"
					/>
				</div>
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
		goProductDtl(path,type){
			console.log(path,type);
		},
	}
}
</script>