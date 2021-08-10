<template>
	<div class="hello">
		<Common></Common>
		<!-- <Common :pageData='pageContent'></Common> -->
	</div>
</template>

<script>
	import Common from '@/components/mode/common.vue'
	export default {
		components: {
			Common,
		},
		name: 'Home',
		data () {
			return {
				pageContent: [],
			}
		},
		mounted(){
		},
		methods: {
		},
	}
</script>

<style scoped>
h1, h2 {
	font-weight: normal;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
