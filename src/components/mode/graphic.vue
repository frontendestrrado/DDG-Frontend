<template>
	<div class="index-graphic" :style="{backgroundColor:graphicData.bg_color,marginBottom:graphicData.layout == 1?'120px':'0'}">
	    <div class="index-graphic-div">
	    	<van-row class="columnboxAbout" :gutter="$store.state.isPC?20:0">
                <van-col :span="showClass"  v-for="(graphic,index) in graphicData.imageText" :key="index">
                    <div :class="'imgTextLayout layoutImg_'+graphicData.layout_images_text + ' layoutImgOne_'+graphicData.layout" @click="goView(graphic.text)">
						<div :class="graphicData.layout == 1?'imgTextBox1':'imgTextBox'">
							<van-image
							:style="graphicData.layout == 3?'width:60%':'width:90%'"
                            class="image"
							:src="graphic.image"
							fit="contain"
							/>
							<span :class="'bottomText layout_'+graphicData.layout_font_in_image" :style="{fontSize:graphicData.font_in_image_size+'px',color:graphicData.font_in_image_color,textAlign:graphicData.align}">{{graphic.font_in_image}}</span>
						</div>
                        <pre class="textPre" :style="{fontSize:graphicData.font_size+'px',color:graphicData.color,textAlign:graphicData.align,paddingLeft:'10px',lineHeight:graphicData.layout==1?'25px':'20px'}"><!--
                            --><div class="textTitle" v-if="graphicData.layout == 1">{{graphic.text | textTitleHandle}}</div><!--
                            -->{{graphic.text | textHandle(graphicData.layout)}}<!--
                        --></pre>
                    </div>
                </van-col>
            </van-row>
	    </div>
	</div>
</template>
<script>
export default {
	name:'graphic',
	props:{
		graphicData:{
			type:Object,
		},		
	},
	computed:{
        showClass(){
        	if(this.graphicData.layout == 1){
        		return 24;
        	}else if(this.graphicData.layout == 2){
        		return 12;
        		// return this.$store.state.isPC?12:24;
        	}else if(this.graphicData.layout == 3){
        		return 8;
        		// return this.$store.state.isPC?8:24;
        	}else if(this.graphicData.layout == 4){
        		return 6;
        		// return this.$store.state.isPC?6:12;
        	}else if(this.graphicData.layout == 5){
        		return 5;
        		// return this.$store.state.isPC?5:12;
        	}
        }
    },
    methods:{
        goView(text){
            // this.$emit('on-goto',path);
            let biaoti = sessionStorage["currentPage"]?JSON.parse(sessionStorage["currentPage"]).title:this.$router.history.current.name;
            // if(biaoti == 'Advisors'){
                if(text.indexOf('Organizational Chart')!= -1){
                    this.$store.commit('changePage',{tabbar: '/OrganizeChart', title: 'Organizational Chart'});
                    this.$router.push('/OrganizeChart');
                }else if(text.indexOf('Performance')!= -1){
                    this.$store.commit('changePage',{tabbar: '/Performance', title: 'Performance'});
                    this.$router.push('/Performance');
                }else if(text.indexOf('Personal Growth')!= -1){
                    this.$store.commit('changePage',{tabbar: '/PersonalGrowth', title: 'PersonalGrowth'});
                    this.$router.push('/PersonalGrowth');
                }else if(text.indexOf('Training Plan')!= -1){
                    this.$store.commit('changePage',{tabbar: '/TrainingPlan', title: 'TrainingPlan'});
                    this.$router.push('/TrainingPlan');
                }else if(text.indexOf('Tool Box')!= -1){
                    this.$store.commit('changePage',{tabbar: '/ToolBox', title: 'ToolBox'});
                    this.$router.push('/ToolBox');
                }else if(text.indexOf('My Profile')!= -1){
                    this.$store.commit('changePage',{tabbar: '/Personal', title: 'Personal'});
                    this.$router.push('/Personal');
                }else if(text.indexOf('Learning to Use')!= -1){
                    this.$store.commit('changePage',{tabbar: '/LearnUse', title: 'LearnUse'});
                    this.$router.push('/LearnUse');
                }else if(text.indexOf('Teaching Tools')!= -1){
                    this.$store.commit('changePage',{tabbar: '/TeachTools', title: 'TeachTools'});
                    this.$router.push('/TeachTools');
                }else if(text.indexOf('Forms')!= -1){
                    this.$store.commit('changePage',{tabbar: '/FormsPage', title: 'FormsPage'});
                    this.$router.push('/FormsPage');
                }else if(text.indexOf('Files')!= -1){
                    this.$store.commit('changePage',{tabbar: '/FilesPage', title: 'FilesPage'});
                    this.$router.push('/FilesPage');
                }else if(text.indexOf('Cases')!= -1){
                    this.$store.commit('changePage',{tabbar: '/Cases', title: 'Cases'});
                    this.$router.push('/Cases');
                }else if(text.indexOf('Member List')!= -1){
                    this.$store.commit('changePage',{tabbar: '/Members', title: 'Members'});
                    this.$router.push('/Members');
                }else if(text.indexOf('Investment Tools')!= -1){
                    this.$store.commit('changePage',{tabbar: '/InvestmentTools', title: 'InvestmentTools'});
                    this.$router.push('/InvestmentTools');
                }else if(text.indexOf('Info I collected')!= -1){
                    this.$store.commit('changePage',{tabbar: '/InfoIcollected', title: 'InfoIcollected'});
                    this.$router.push('/InfoIcollected');
                }
            // }
        },
    },
    filters: {
        textTitleHandle: function (text) {
            let arr = text.split('\n\n')
            return arr[0]
        },
        textHandle: function (text,val) {
            if (val == 1) {
                let arr = text.split('\n\n')
                arr.shift()
                return arr.join('\n\n')
            } else {
                return text
            }
        }
    }
}
</script>
<style scoped>
/* 图文模块 */
/deep/ .van-col-5{width:20%;}
.index-graphic-div{padding-top: 20px;}
.columnboxAbout {width:100%;display:flex;flex-wrap:wrap;}
.textContent >div{overflow: hidden;}
.imgTextBox{position: relative;display: inline-flex;flex: none;}
.imgTextBox1{
    position: relative;display: inline-flex;
    width: 50%;
    max-width: 50%;
    margin-right:20px;
    flex: none;
}
.bottomText{position: absolute;width: 100%;line-height: 2;}
.layout_1{top:0;left: 0;}
.layout_2{top: 50%;left: 0;transform: translateY(-50%);}
.layout_3{bottom: 0;left: 0;}
.imgTextLayout{display: flex;margin-bottom: 20px;}
.layoutImgOne_1{align-items: center;}
.layoutImg_1{flex-flow: column-reverse;}
.layoutImg_2{flex-flow: column;}
.layoutImg_3{flex-flow: row-reverse;}
.layoutImg_4{flex-flow: row;}
pre{white-space: break-spaces;margin: 0;font-family: 'Avenir,Helvetica,Arial,sans-serif';}
.image {
    width:90%;
    height:auto;
    max-height:400px;
    margin: 0 auto;
}
.textTitle {
    font-size: 40px;
    font-family: FandolSong;
    margin-bottom: 10px;
    line-height: 40px;
}
/* 手機 */
@media screen and (max-width: 768px) {
    .imgTextLayout{
        display: block;
        margin-bottom: 20px;
    }
    .imgTextBox1 {
        width: 70%;
        max-width: 70%;
        margin-right:0;
    }
    .textPre {
        padding: 0 10px;
    }
    .textTitle {
        font-size: 28px;
        line-height: 30px;
    }
}
</style>