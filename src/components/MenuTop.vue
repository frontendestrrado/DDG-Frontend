<template>
	<div>
		<template v-for="(value,index) in menuData">
			<div v-if="value.sub_navigation_bar&&value.sub_navigation_bar.length>0" :index="value.page_id">
				<template v-if="value.is_login == 1">
					<li v-if="$sessionStorage.token" class="hv" slot="title" @click="changeMenu(value.page_id);">
						{{ value.title }}
						&nbsp;&nbsp;
						<van-icon name="arrow-up" v-if="calssName == value.page_id"/>
						<van-icon name="arrow-down" v-else/>
					</li>
					<MenuTop v-if="$sessionStorage.token" :class="calssName == value.page_id ? '':'dpn'" :menu-data="value.sub_navigation_bar" @on-change="changeActTab"/>
				</template>
				<template v-else>
					<li class="hv" slot="title" @click="changeMenu(value.page_id);">
						{{ value.title }}
						&nbsp;&nbsp;
						<van-icon name="arrow-up" v-if="calssName == value.page_id"/>
						<van-icon name="arrow-down" v-else/>
					</li>
					<MenuTop :class="calssName == value.page_id ? '':'dpn'" :menu-data="value.sub_navigation_bar" :cl-name.sync="calssName" @on-change="changeActTab"/>
				</template>
			</div>
			<div v-else :index="value.page_id" @click="changeItem(value.page_id?value.page_id:'',value.title, value.link)">
				<template v-if="value.is_login == 1">
					<li v-if="$sessionStorage.token" class="hv" slot="title">{{ value.title }}</li>
          <!-- <div class="ulline"></div> -->
				</template>
				<template v-else>
					<li v-if="$sessionStorage.token && value.title == 'Advisors’Login'" class="hv" slot="title"></li>
					<li v-else class="hv" slot="title">{{ value.title }}</li>
          <!-- <div v-if="value.title" class="ulline"></div> -->
				</template>
			</div>
		</template>
	</div>
</template>
<script>
	export default {
		name: 'MenuTop',
		props: ['menuData','clName'],
		data () {
	        return {
	        	calssName: this.clName,
	        }
	    },
	    mounted(){
	    },
	    methods:{
		      //跳轉路由
	        changeItem(route,title,link){
	        	this.$emit('on-change',route,title,link);
						console.log(111,route,title);
	        },
	        changeActTab(route, name){
	        	this.$emit('on-change',route,name);
			},
			changeMenu(page_id){
				if(this.calssName != page_id){
					this.calssName = page_id;
				}else{
					this.calssName = 'childMenu';
				}
			}
	    }
	}
</script>
<style scoped>
li.hv{display: flex;align-items: center;justify-content:right;}
.ulline {
  border:1px solid #999;
  width:50%;
  margin-left:50%;
}
/*手机*/
@media screen and (max-width: 768px) {
  li.hv{display: flex;align-items: center;justify-content:center;}
}
</style>
