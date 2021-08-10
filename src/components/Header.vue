<template>
	<div class="header">
		<div class="header-main">
			<van-row style="height: 100%;" v-if="$store.state.isPC">
			  	<van-col :span="6">
			  		<van-image
			  			class="logo hv"
				      	:src="require('@/assets/img/logo.png')"
				      	fit="contain"
				      	@click="isShowTopUl=true;changeActTab('Index');"/>
			  	</van-col>
			  	<van-col :span="12">
			  		<ul class="tab fontPR">
	  					<li class="hv" @click="isShowTopUl=true;">animal</li>
	  					<li class="hv" @click="isShowTopUl=true;">animal</li>
	  					<li class="hv" @click="isShowTopUl=true;">animal</li>
	  					<li class="hv" @click="isShowTopUl=true;">animal</li>
	  					<li class="hv" @click="isShowTopUl=true;">animal</li>
			  		</ul>
			  	</van-col>
			  	<van-col :span="6">
					<van-icon name="wap-nav"  color="#FFC80B" size="40"/>
					<div class="main-right fontPM">
						<div class="right-item hv" style="margin-left: 5px;">
							<div>{{ lang }}</div>
							<el-select v-model="lang" @change="changeLang($event)">
								<el-option
									v-if="item.title=='en'||item.title=='zh-TW'||item.title=='zh-CN'"
									v-for="item in language"
									:key="item.title"
									:label="item.language"
									:value="item.title">
									<span style="display: inline-block;color: #8492a6;font-size: 13px">{{ item.language }}</span>
							  </el-option>
						  </el-select>
						</div>
					</div>
			  	</van-col>
			</van-row>
			<van-row style="height: 100%;" v-else>
				<van-col :span="4">
					<van-icon name="arrow-left" color="#FFC80B" size="30"/>
				</van-col>
			  	<van-col :span="16" class="tc">
			  		<van-image
			  			class="logo hv"
				      	:src="require('@/assets/img/logo.png')"
				      	fit="contain"
				      	@click="isShowTopUl=true;changeActTab('Index');"/>
			  	</van-col>
			  	<van-col :span="4">
					<van-icon v-if="isShowTopUl" name="wap-nav" color="#FFC80B" size="30" @click="isShowTopUl=false;" />
					<van-icon v-else name="cross" color="#FFC80B" size="30" @click="isShowTopUl=true;" />
			  	</van-col>
			</van-row>
			<ul class="menuInfo fontPB" v-if="!$store.state.isPC&&!isShowTopUl">
	  			<li class="hv" @click="isShowTopUl=true;">animal</li>
	  			<li class="hv" @click="isShowTopUl=true;">animal</li>
	  			<li class="hv" @click="isShowTopUl=true;">animal</li>
	  			<li class="hv" @click="isShowTopUl=true;">animal</li>
	  			<li class="hv" @click="isShowTopUl=true;">animal</li>
	  			<li class="hv" @click="isShowTopUl=true;">animal</li>
	  		</ul>
		</div>
	</div>
</template>
<script>

export default {
	data () {
		return {
			barList: [],
			isShowSale:0,
			isShowTopUl:true,
			lang:this.$i18n.locale,
	        language:[	
	        	{
					language: 'English',
					title: 'en',
				},
				{
					language: '中文简体',
					title: 'zh-CN',
				},
				{
					language: '中文繁體',
					title: 'zh-TW',
				},
			],
		}
	},
	mounted(){
		this.getUserInfo();
		this.isSale();
		if(this.$sessionStorage.actTab){
			this.$store.commit('setActTab',this.$sessionStorage.actTab);
		}
		let language = this.$route.query.lang;
		let lang = this.$i18n.locale;
		console.log(lang,language);
		if(!!language){
			this.$store.commit('changeLanguage',language);
			this.setShowImg(language);
		}else{
			this.$store.commit('changeLanguage',lang);
			this.setShowImg(lang);
		}
		console.log(this.$router.history.current.path);
		if(this.$router.history.current.path.indexOf('/Animal')!=-1){
			this.$store.commit('setActTab','AnimalLibrary');
	    }
	},
	watch: {
 		isShowTopUl(){
			if(!this.$store.state.isPC&&!this.isShowTopUl){
				document.body.style.overflow='hidden';
			}else{
				document.body.style.overflow='';
			}
  		}
  	},
	methods:{
		changeActTab(name){
			this.$store.commit('setActTab',name);
			this.setShowImg(this.$i18n.locale);
		},
		changeLang(val){
			this.setShowImg(val);
			this.$i18n.locale = val;
            this.$store.commit('setAnimal','');
            this.$store.commit('setAnimalBg','Land');
			if(this.$store.state.actTab=='AnimalLibrary'){
				let query = this.$router.history.current.query;
				let path = this.$router.history.current.path;
				this.$router.push(path);
				window.location.reload();
			}else{
				window.location.reload();
			}
			sessionStorage.setItem('language',val);
			// this.$options.methods.choonseLang(val);
		},
		choonseLang(lang){
			this.$axios({
                method: 'get',
                url:'/api/setLocale?lang='+lang,
                headers: {
                    "Authorization": this.$localStorage.token_type+this.$localStorage.token,
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
			if (this.$localStorage.token) {

          	} else {
            	return false;
          	}
		},
	},
}
</script>
<style scoped>
	/deep/ .el-input--suffix .el-input__inner{
		background:transparent;border:none;width:110px;padding:0 0 0 30px;margin-left:-30px;
	}
	/deep/ .el-select{
		width:5px;opacity:0;
	}
	/deep/ .el-input>.el-input__inner, input{
		width:5px;opacity:0;height:24px;line-height:24px;
	}
	/deep/ .el-select .el-input__inner:focus{
		background:transparent;border:none;
	}
	/deep/ .el-icon-arrow-up:before,/deep/ .el-input__icon:after{
		content:'';
	}
	/deep/ .el-badge{
		z-index: 1;
	}
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
			width: 64.5px;
		}
		.main-right{
			width: 100%;
			height: 24px;
			line-height: 24px;
			color: #7B5D56;
			font-size: 16px;
			margin-top: 28px;
			display: flex;
			justify-content: space-around;
		}
		.menuInfo{
			position:fixed;height:auto;width:100%;top:60px;left:0;width:100%;
			z-index:10;text-align:center;line-height:40px;background-color:#FFC80B;
			font-size:24px;color:#7B5C55;
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
		/deep/ .el-badge__content{
		    font-size: 10px;
		    height: 12px;
		    line-height: 12px;
		    padding:0 4px;
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
    	.header-main{
    		width:90%;
			max-width: 1200px;
			margin: auto;
		}
    }
</style>