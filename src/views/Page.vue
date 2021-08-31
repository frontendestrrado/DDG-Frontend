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
		name: 'customPages',
		data () {
			return {
				pageContent: [],
				pageWidth: '1200',
			}
		},
		watch: {
	        "$route"(val,oldval){
				if(val.params.page_id!=oldval.params.page_id){
					this.getPageContent();
				}
			}
	    },
		mounted(){
			this.getPageContent();
		},
		methods: {
			getPageContent(){
				this.$axios({
					method: 'get',
					url:'/api/v1/customPages?id='+this.$route.params.page_id,
				}).then(res => {
					console.log(res);
					if(res.status == 200){
	                    this.pageContent = res.data.modules;
	                    this.pageWidth = res.data.width;
	                    this.pageContent.forEach((item,i) => {
	                    	if(item.type == 9){
	                    		item.data_collects.forEach((itemi,j) => {
	                    			this.$set(this.pageContent[i].data_collects[j],'content','')
					            })
	                    	}
			            })
	                }else{
	                	this.pageContent = [];
	                	this.pageWidth = '1200';
						// this.$store.commit('changePage',{tabbar: '/ErrorPage', title: 'ErrorPage'});
						// this.$router.push('/ErrorPage');
	                }
				}).catch(error=>{

				});
			},
		},
	}
</script>

<style scoped>
</style>
