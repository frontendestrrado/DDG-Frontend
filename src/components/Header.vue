<template>
	<div class="header bgAsh">
		<div class="header-line"></div>
		<div class="header-main">
			<!-- <van-row style="height: 100%;" v-if="$store.state.isPC">
			  	<van-col :span="6">
			  		<van-image
			  			class="logo hv"
				      	:src="require('@/assets/img/logo.png')"
				      	fit="contain"
				      	@click="isShowTopUl=true;changeActTab('Index');"/>
			  	</van-col>
			  	<van-col :span="18">
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
					<van-icon name="arrow-left" v-if="$store.state.currentPage.tabbar != '/Index'" color="#333" size="30" @click="changeActTab('','');"/>
					<van-image
						v-if="$store.state.currentPage.tabbar == '/Index'"
			  			class="logo hv"
				      	:src="logo"
				      	fit="contain"
				      	@click="isShowTopUl=true;$router.push('/Index');"/>
				</van-col>
				<van-col :span="16" class="tc">
					<!-- <van-image
						v-if="$store.state.currentPage.tabbar == '/Index'"
						class="logo hv"
							:src="logo"
							fit="contain"
							@click="changeActTab('/Index', 'Home');"/> -->
					<div v-if="$store.state.currentPage.tabbar != '/Index'">{{$store.state.currentPage.title}}</div>

				</van-col>
				<van-col :span="4">
					<van-icon v-if="isShowTopUl" name="wap-nav" color="#333" size="30" @click="isShowTopUl=false;" />
					<van-icon v-else name="cross" color="#333" size="30" @click="isShowTopUl=true;" />
				</van-col>
			</van-row>
			<!-- <van-overlay :show="!isShowTopUl" /> -->
			<ul class="menuInfo fontPB" v-if="!isShowTopUl">
				<li class="hv" @click="changeActTab('/Index', 'Index');">Home About Us</li>

	  			<!-- <li class="hv" v-if="tabList.length>0" v-for="(item,index) in tabList" @click="changeActTab(item.page_id?'/Page/'+item.page_id:'', item.title);">{{item.title}}</li> -->
	  			<MenuTop @on-change="changeActTab" :menu-data="tabList" cl-name.sync="menu"/>

	  			<li class="hv" @click="changeActTab('/ContactUs', 'Contact Us');">Contact Us</li>
	  			<li class="hv" v-if="$sessionStorage.token" @click="changeActTab('/Personal', 'My Profile');">My Profile</li>
	  			<!-- <li class="hv" v-else @click="changeActTab('/Login', 'Sign Up / Sign In');">Sign Up / Sign In</li> -->

	  			<li class="hv" v-if="$sessionStorage.token" @click="changeActTab('/NotificationCenter', 'Notification Center');">Notification Center</li>
	  			<li class="hv" @click="changeActTab('/Language', 'Languages');">Language</li>
	  		</ul>
		</div>
	</div>
</template>
<script>
import MenuTop from '@/components/MenuTop'
export default {
	components: {
        MenuTop
    },
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
			logo: ''
		}
	},
	mounted(){
		this.getLogo();
		this.getTabbar();
		this.getUserInfo();
		let lang = this.$i18n.locale;
		this.$store.commit('changeLang',lang);

		let path = this.$router.history.current.path?this.$router.history.current.path:'/Index';
		let biaoti = sessionStorage["currentPage"]?JSON.parse(sessionStorage["currentPage"]).title:this.$router.history.current.name;
		console.log(path, biaoti);
		this.$store.commit('changePage',{tabbar: path, title: biaoti});

		let len = this.$router.history.current.matched.length;
		if(this.$router.history.current.matched[len-1].path == '/Index' || this.$router.history.current.matched[len-1].path == ''){
			sessionStorage.removeItem('historyTitle');
		}
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
                url:'/api/v1/navigations',
            }).then(res => {
				console.log(res);
				this.tabList = res.data;
			})
			.catch(error=>{
				console.log(JSON.stringify(error));
			})
		},
		isNumber(val) {
			var regPos = /^\d+(\.\d+)?$/; //非负浮点数
			var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
	    	if(regPos.test(val) || regNeg.test(val)) {
	        	return true;
	        } else {
	        	return false;
	        }
	    },
		changeActTab(name,title){
			console.log(name,title);
			this.isShowTopUl=true;
			if(name == ''){
				this.$router.go(-1);
			}else{
				if(this.isNumber(name)){
					if(title.indexOf('login')!=-1 || title.indexOf('Login')!=-1 || title.indexOf('登錄')!=-1 || title.indexOf('登录')!=-1){
						sessionStorage.setItem('page_id',name);
						this.$store.commit('changePage',{tabbar: '/Login', title: 'Sign Up / Sign In'});
						this.$router.push('/Login');
					}else{
						this.$store.commit('changePage',{tabbar: '/Page/'+name, title: title});
						this.$router.push('/Page/'+name);
					}
				}else{
					this.$store.commit('changePage',{tabbar: name, title: title});
					this.$router.push(name);
				}
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
		getLogo() {
			this.$axios({
				method: 'get',
				url: '/api/v1/webset',
			}).then(res => {
				console.log(res,'Logo');
				this.logo = res.logo
			}).catch(err => {
				console.log(err,'獲取logo異常');
			})
		}
	},
}
</script>
<style scoped>
	/deep/ .van-dropdown-menu, /deep/ .van-dropdown-menu__item, /deep/ .van-dropdown-menu__bar{background-color: #CBCDCE;box-shadow:none;}
	/deep/ .van-dropdown-menu__title::after{display: none;}
	.header{
		width: 100%;
		/*height: 80px;*/height: 90px;
		background-color: #dee5f2;
	}
	.header-line {
		background:#1F2E4D;
		height:20px;
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
		z-index:10;text-align:center;line-height:40px;background-color:#dee5f2;
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
				/*height: 60px;*/height: 70px;
			}
			.header-line {
				height:10px;
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
				z-index:10;text-align:center;line-height:40px;background-color:#dee5f2;
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
				/*height: 80px;*/height: 90px;
			}
			.header-line {
				height:12px;
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
				/*height: 80px;*/height: 90px;
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
				/*height: 90px;*/height: 100px;
			}
    	.header-main{
    		width:90%;
				max-width: 1200px;height: 80px;
				margin: auto;
			}
    }
</style>