<template>
	<div class="main">
		<header style="height: auto;">
			<Top></Top>		
		</header>
		<main>
			<router-view/>
		</main>
	</div>
</template>

<script>
	import Top from '@/components/Header.vue'
	export default {
		components: {
			Top,
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
