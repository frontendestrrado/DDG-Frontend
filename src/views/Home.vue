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
		beforeRouteUpdate (to, from, next) {        
		 //    console.log('********************************************')
			// console.log(sessionStorage.currentPage)
			// console.log('from:'+from.path, from.name);
			// console.log('to:'+to.path, to.name);
			var titleArr = sessionStorage.historyTitle?JSON.parse(sessionStorage.historyTitle):[];
			if(from.path != to.path){
				// console.log('dddddddddddddddddddddddd');
				if(JSON.parse(sessionStorage.currentPage).tabbar == from.path){
					titleArr.pop();
					this.$store.commit('changePage',{tabbar: to.path, title: titleArr[titleArr.length-1]});
					sessionStorage.setItem('historyTitle',JSON.stringify(titleArr));
				}else{
					if(!!JSON.parse(sessionStorage.currentPage).title){
						titleArr.push(JSON.parse(sessionStorage.currentPage).title);
						sessionStorage.setItem('historyTitle',JSON.stringify(titleArr));
					}
				}
			}
			// console.log('********************************************')  
			next();
		},
		mounted(){
			var that = this;
			window.addEventListener('resize',()=>{
	            let val = document.body.clientWidth>=768?true:false;
	            that.$store.commit('setIsPC',val);
	            document.body.style.overflow='';
	        })
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
main{background-color: #fff;min-height: calc(100vh - 80px);}
@media screen and (max-width: 768px){
	main{min-height: calc(100vh - 60px);}
}
</style>
