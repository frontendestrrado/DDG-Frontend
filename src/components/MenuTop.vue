<template>
	<div>
		<template v-for="(value,index) in menuData">
			<div v-if="value.sub_navigation_bar&&value.sub_navigation_bar.length>0" :index="value.page_id">
				<template v-if="value.is_login == 1">
					<li v-if="$sessionStorage.token" class="hv" slot="title" @click="calssName != value.page_id?calssName = value.page_id:calssName = ''">
						{{ value.title }}
						&nbsp;&nbsp;
						<van-icon name="arrow-up" v-if="calssName == value.page_id"/>
						<van-icon name="arrow-down" v-else/>
					</li>
					<MenuTop v-if="$sessionStorage.token" :class="calssName == value.page_id ? '':'dpn'" :menu-data="value.sub_navigation_bar" @on-change="changeActTab"/>
				</template>
				<template v-else>
					<li class="hv" slot="title" @click="calssName != value.page_id?calssName = value.page_id:calssName = ''">
						{{ value.title }}
						&nbsp;&nbsp;
						<van-icon name="arrow-up" v-if="calssName == value.page_id"/>
						<van-icon name="arrow-down" v-else/>
					</li>
					<MenuTop :class="calssName == value.page_id ? '':'dpn'" :menu-data="value.sub_navigation_bar" @on-change="changeActTab"/>
				</template>				
			</div>
			<div v-else :index="value.page_id" @click="changeItem(value.page_id?'/Page/'+value.page_id:'',value.title)">
				<template v-if="value.is_login == 1">
					<li v-if="$sessionStorage.token" class="hv" slot="title">{{ value.title }}</li>
				</template>
				<template v-else>
					<li class="hv" slot="title">{{ value.title }}</li>
				</template>
			</div>
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
li.hv{display: flex;align-items: center;justify-content:center;}
</style>