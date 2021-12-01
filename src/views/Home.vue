<template>
	<div class="main">
		<header style="height: auto;">
			<Top></Top>	
		</header>
		<main>
			<router-view/>
		</main>
		<div class="ContactUs">
      <div class="bodybox">
        <div class="ContactUsTitle">Contact Us</div>
        <div>DDG International Berhad. (Co. No. 202101023257 (1423557-M)</div>
        <div>Tel : +6016-5535691</div>
        <div>Email : info@ddgint.com</div>
        <div>Website : www.ddgint.com </div>
        <div>No. 11-1, 2 & 3, Jalan Kampung Jawa, Off Bagan Luar, 12000 Butterworth, Pulau Pinang.</div>
        <div>Business Hour: 9.00am – 5.00pm (Monday – Friday) </div>
      </div>
		</div>	
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
.ContactUs {
	color: #444;
	background: #CFC3B5;
	padding: 10px;
  margin-top: 20px;
  text-align: left;
}
.ContactUsTitle {
	font-size:28px;
  color: #222;
  font-family: FandolSong;
}
.ContactUs div {
	margin-bottom: 10px;
}
@media screen and (max-width: 768px){
	main{min-height: calc(100vh - 60px);}
	.ContactUs {
		font-size: 12px;
		line-height: 12px;
	}
	.ContactUsTitle {
		font-size: 20px;
    font-family: FandolSong;
	}
}
</style>
