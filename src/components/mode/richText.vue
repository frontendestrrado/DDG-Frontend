<!-- 富文本模块 -->
<template>
	<div class="index-rich">
		<div class="content" v-html="richTextData.content"></div>
	</div>
</template>
<script>
export default {
	name:'richText',
	props:{
		richTextData:{
			type:Object,
		},
	}
}
</script>