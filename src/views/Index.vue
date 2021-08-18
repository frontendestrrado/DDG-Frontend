<template>
	<div class="main_content" :style="{maxWidth: pageWidth+'px'}">
		<Common :pageData='pageContent'></Common>
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
				pageWidth: '1200',
			}
		},
		mounted(){
			this.getHomePage();
		},
		methods: {
			getHomePage(){
				this.$axios({
					method: 'get',
					url:'/api/v1/pages?type=1',
				}).then(res => {
					console.log(res);
					if(res.status == 200){
						this.pageContent = res.data.modules;
					}else{
						this.$router.push('/');
					}
				}).catch(error=>{

				});
			}

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
