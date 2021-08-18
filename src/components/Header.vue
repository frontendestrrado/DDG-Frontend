<template>
	<div class="header">
		<div class="header-main">
			<!-- <van-row style="height: 100%;" v-if="$store.state.isPC">
			  	<van-col :span="6">
			  		<van-image
			  			class="logo hv"
				      	:src="require('@/assets/img/logo.png')"
				      	fit="contain"
				      	@click="isShowTopUl=true;changeActTab('Index');"/>
			  	</van-col>
			  	<van-col :span="12">
			  		<ul class="tab fontPR">
	  					<li class="hv" v-for="(item,index) in tabItem" @click="isShowTopUl=true;">{{item.title}}</li>
			  		</ul>
			  	</van-col>
			  	<van-col :span="6">
					<div class="main-right fontPM">
						<div class="right-item hv" style="margin-left: 5px;">
							<van-dropdown-menu active-color="#FFC80B">
								<van-dropdown-item v-model="lang" :options="language" @change='changeLang'/>
							</van-dropdown-menu>

						</div>
					</div>
			  	</van-col>
			</van-row> -->
			<van-row class="fcb" style="height: 100%;">
				<van-col :span="4">
					<van-icon name="arrow-left" v-if="$store.state.currentPage.tabbar != '/Index'" color="#FFC80B" size="30" @click="changeActTab('','');"/>
					<!-- <van-image
						v-if="$store.state.currentPage.tabbar != '/Index'"
			  			class="logo hv"
				      	:src="require('@/assets/img/logo.png')"
				      	fit="contain"
				      	@click="isShowTopUl=true;$router.push('/Index');"/> -->
				</van-col>
			  	<van-col :span="16" class="tc">
			  		<van-image
						v-if="$store.state.currentPage.tabbar == '/Index'"
			  			class="logo hv"
				      	:src="require('@/assets/img/logo.png')"
				      	fit="contain"
				      	@click="changeActTab('/Index', 'Home');"/>
				    <div v-else>{{$store.state.currentPage.title}}</div>

			  	</van-col>
			  	<van-col :span="4">
					<van-icon v-if="isShowTopUl" name="wap-nav" color="#FFC80B" size="30" @click="isShowTopUl=false;" />
					<van-icon v-else name="cross" color="#FFC80B" size="30" @click="isShowTopUl=true;" />
			  	</van-col>
			</van-row>
			<!-- <van-overlay :show="!isShowTopUl" /> -->
			<ul class="menuInfo fontPB" v-if="!isShowTopUl">
	  			<li class="hv" v-if="tabList.length>0" v-for="(item,index) in tabList" @click="changeActTab(item.page_id?'/Page/'+item.page_id:'', item.title);">{{item.title}}</li>

	  			<li class="hv" @click="changeActTab('/Advisors', 'Advisors');">Advisors</li>
	  			<li class="hv" @click="changeActTab('/ContactUs', 'Contact Us');">Contact Us</li>
	  			<li class="hv" v-if="$sessionStorage.token" @click="changeActTab('/Personal', 'Personal');">Personal</li>
	  			<li class="hv" v-else @click="changeActTab('/Login', 'Sign Up / Sign In');">Sign Up / Sign In</li>
	  			<li class="hv" @click="changeActTab('/Language', 'Languages');">Language</li>
	  		</ul>
		</div>
	</div>
</template>
<script>

export default {
	data () {
		return {
			tabList: [],
			isShowSale:0,
			isShowTopUl:true,
			lang:this.$i18n.locale,
	        language:[	
	        	{
					text: 'English',
					value: 'en',
				},
				{
					text: '中文简体',
					value: 'zh-CN',
				},
				{
					text: '中文繁體',
					value: 'zh-TW',
				},
			],
		}
	},
	mounted(){
		this.getTabbar();
		this.getUserInfo();
		let lang = this.$i18n.locale;
		this.$store.commit('changeLang',lang);

		let path = this.$router.history.current.path?this.$router.history.current.path:'/Index';
		let biaoti = this.$router.history.current.name;
		console.log(path, biaoti);
		this.$store.commit('changePage',{tabbar: path, title: biaoti});
	},
	watch: {
 		isShowTopUl(){
			if(!this.isShowTopUl){
				document.body.style.overflow='hidden';
			}else{
				document.body.style.overflow='';
			}
		}
  	},
	methods:{
		// 获取头部导航条
		getTabbar(){
			this.$axios({
                method: 'get',
                url:'api/v1/navigations',
            }).then(res => {
				console.log(res);
				this.tabList = res.data;
			})
			.catch(error=>{
				console.log(JSON.stringify(error));
			})
		},
		changeActTab(name,title){
			console.log(name);
			this.isShowTopUl=true;
			if(name == ''){
				let len = this.$router.history.current.matched.length;
				console.log(this.$router.history.current.matched[len-2])
				let path = this.$router.history.current.matched[len-2].path?this.$router.history.current.matched[len-2].path:'/Index';
				let biaoti = this.$router.history.current.matched[len-2].name;
				console.log(path, biaoti);
				this.$store.commit('changePage',{tabbar: path, title: biaoti});
				this.$router.push(path);
			}else{
				this.$store.commit('changePage',{tabbar: name, title: title});
				this.$router.push(name);
			}
		},
		changeLang(val){
			console.log(val);
			this.$i18n.locale = val;
			this.$Local(val);
			window.location.reload();
			sessionStorage.setItem('language',val);
		},
		choonseLang(lang){
			this.$axios({
                method: 'get',
                url:'/api/setLocale?lang='+lang,
                headers: {
                    "Authorization": this.$sessionStorage.token_type+this.$sessionStorage.token,
                },
            }).then(response => {
				console.log(response);
				window.location.reload();
			})
			.catch(error=>{
				console.log(JSON.stringify(error));
			})
		},
		getUserInfo(){
			
		},
	},
}
</script>
<style scoped>
	/deep/ .van-dropdown-menu, /deep/ .van-dropdown-menu__item, /deep/ .van-dropdown-menu__bar{background-color: #C6C6C6;box-shadow:none;}
	/deep/ .van-dropdown-menu__title::after{display: none;}
	.header{
		width: 100%;
		height: 80px;
		background-color: #C6C6C6;
	}
	.header-main{
		font-size: 16px;
	}
	.mobileMenu{
		display:inline-flex;height:30px;line-height: 30px;margin-top: 35px;margin-left: 20px;
	}
	.logo{
		width: 80px;
	}
	.tab{
		width: 100%;
		height: 26px;
		line-height: 26px;
		display: flex;
		justify-content: space-around;
		color:#7B5C55;
	}
	.tap>li{
		height: 26px;
		text-align: center;
		color: #4B4B4B;
	}
	.active{
		border-bottom: 2px solid #4B4B4B;
	}
	.main-right{
		width: 100%;
		height: 24px;
		line-height: 24px;
		color: #7B5D56;
		font-size: 16px;
		display: flex;
		justify-content: space-around;
	}
	.right-item{
		display: flex;
		align-items: center;
	}
	.right-item>span{
		text-indent: 10px;max-width:90px;margin-right:5px;white-space:nowrap;
		overflow:hidden;

	}
	.right-item .el-image{
		width:20px;height:20px;
	}
	.right-item .langImg{
		width:30px;height:20px;
	}
	/*下拉选项*/
	.menuInfo{
		position:fixed;height:auto;top:80px;right:0;width:auto;padding: 0 20px;
		z-index:10;text-align:center;line-height:40px;background-color:#FFC80B;
		font-size:24px;color:#7B5C55;overflow-y: auto;min-height: 100%;
	}
	.active{
		border-bottom:none;
	}
	.right-item{
		position:relative;
	}
	.right-item span{
		position:absolute;bottom:-20px;left:0%;
		text-indent:0px;font-size:14px;
	}
    /*手机*/
    @media screen and (max-width: 768px){
    	.header{
			height: 60px;
		}
		.header-main{
			width: 100%;
			height: 60px;
		}
		.mobileMenu{
			display:inline-flex;height:30px;line-height: 30px;margin-top: 25px;margin-left: 20px;
		}
		.logo{
			width: 45px;
		}
		.main-right{
			width: 100%;
			height: 24px;
			line-height: 24px;
			color: #7B5D56;
			font-size: 16px;
			display: flex;
			justify-content: space-around;
		}
		/*下拉选项*/
		.menuInfo{
			position:fixed;height:auto;width:100%;top:60px;left:0;width:100%;padding: 0;
			z-index:10;text-align:center;line-height:40px;background-color:#FFC80B;
			font-size:20px;color:#7B5C55;
		}
		.active{
			border-bottom:none;
		}
		.right-item{
			position:relative;
		}
		.right-item span{
			position:absolute;bottom:-20px;left:0%;
			text-indent:0px;font-size:14px;
		}
    }
    /*平板*/
    @media screen and (min-width: 768px) and (max-width: 992px){
    	.header{
			height: 80px;
		}
    	.header-main{
			width: 95%;margin:auto;
			height: 80px;
		}
		.header-main{
			font-size: 16px;
		}
		.mobileMenu{
			display:inline-flex;height:30px;line-height: 30px;margin-top: 35px;margin-left: 20px;
		}
		.logo{
			width: 86px;
		}
		.tab{
			width: 100%;
			height: 26px;
			line-height: 26px;
			display: flex;
			justify-content: space-around;
			margin-top: 37px;
			color:#7B5C55;
		}
		.tap>li{
			height: 26px;
			text-align: center;
			color: #4B4B4B;
		}
		.active{
			border-bottom: 2px solid #4B4B4B;
		}
		.main-right{
			width: 100%;
			height: 24px;
			line-height: 24px;
			color: #7B5D56;
			font-size: 16px;
			margin-top: 38px;
			display: flex;
			justify-content: space-around;
		}
    }
    /*中等屏幕*/
    @media screen and (min-width: 992px) and (max-width: 1200px){
    	.header{
			height: 80px;
		}
    	.header-main{
			width: 90%;
			height: 80px;
			margin: auto;
		}
    }
    /*大屏幕*/
    @media screen and (min-width: 1200px){
    	.header{
			height: 80px;
		}
    	.header-main{
    		width:90%;
			max-width: 1200px;height: 80px;
			margin: auto;
		}
    }
</style>