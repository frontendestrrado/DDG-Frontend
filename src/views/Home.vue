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
main{/*background-color: #fff;*/background-color: #F3F5F7;min-height: calc(100vh - 80px);}
@media screen and (max-width: 768px){
	main{min-height: calc(100vh - 60px);}
}
</style>
