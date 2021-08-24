<template>
	<div>
		<template v-for="(value,index) in menuData">
			<van-menu-item v-if="value.sub_navigation_bar&&value.sub_navigation_bar.length>0" :index="value.page_id">
				<li class="hv" slot="title" @click="calssName != value.page_id?calssName = value.page_id:calssName = ''">
					{{ value.title }}
					&nbsp;&nbsp;
					<van-icon name="arrow-up" v-if="calssName == value.page_id"/>
					<van-icon name="arrow-down" v-else/>
				</li>
				<MenuTop :class="calssName == value.page_id ? '':'dpn'" :menu-data="value.sub_navigation_bar" @on-change="changeActTab"/>
			</van-menu-item>
			<van-menu-item v-else :index="value.page_id" @click="changeItem(value.page_id?'/Page/'+value.page_id:'',value.title)">
				<li class="hv" slot="title">{{ value.title }}</li>
			</van-menu-item>
		</template>
	</div>
</template>
<script>
	export default {
		name: 'MenuTop',
		props: ['menuData','calssName'],
		data () {
	        return {
	        }
	    },
	    mounted(){
	    },
	    methods:{
	        changeItem(route,title){
	        	this.$emit('on-change',route,title);
	        },
	        changeActTab(route, name){
	        	this.$emit('on-change',route,name);
			},
	    }
	}
</script>
<style scoped>
/deep/ .van-menu-item, .van-submenu__title{
	height: 40px;line-height: 40px;
}
/deep/ .van-submenu .van-menu-item{
	padding: 0 20px!important;
}
li.hv{display: flex;align-items: center;justify-content:center;}
</style>