<!-- 多图模块 -->
<template>
	<div class="index-proImg" :style="{backgroundColor:imgData.bg_color}">
		<div v-for="(single,index) in imgData.showcase_image" :key="index" v-if="single.image">
			<div :class="'showcase-detail-'+imgData.showcase_type">
				<div class='product-item' @click="goProductDtl(single.path,single.is_hologram)">
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