<template>
	<div class="index-title" :style="{backgroundColor:graphicData.bg_color}">
	    <div class="index-title-div">
	    	<van-row class="columnboxAbout" :gutter="$store.state.isPC?20:0">
                <van-col :span="showClass"  v-for="(graphic,index) in graphicData.imageText" :key="index">
                    <div :class="'fontPR  imgTextLayout layoutImg_'+graphicData.layout_images_text ">
						<div class="imgTextBox">
							<van-image
							style="width: 100%;height:auto;"
							:src="graphic.image"
							fit="contain"
							/>
							<span :class="'bottomText layout_'+graphicData.layout_font_in_image" :style="{fontSize:graphicData.font_in_image_size,color:graphicData.font_in_image_color,textAlign:graphicData.align}">{{graphic.font_in_image}}</span>
						</div>
						<p :style="{fontSize:graphicData.font_size,color:graphicData.color,textAlign:graphicData.align}">{{graphic.text}}</p>
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
        		return this.$store.state.isPC?12:24;
        	}else if(this.graphicData.layout == 3){
        		return this.$store.state.isPC?8:24;
        	}else if(this.graphicData.layout == 4){
        		return this.$store.state.isPC?6:12;
        	}else if(this.graphicData.layout == 5){
        		return this.$store.state.isPC?5:12;
        	}
        }
    },
}
</script>
<style scoped>
/* 图文模块 */
/deep/ .van-col-5{width:20%;}
.columnboxAbout {width:100%;}
.textContent >div{overflow: hidden;}
.imgTextBox{position: relative;display: inline-flex;}
.bottomText{position: absolute;width: 100%;line-height: 2;}
.layout_1{top:0;left: 0;}
.layout_2{top: 50%;left: 0;transform: translateY(-50%);}
.layout_3{bottom: 0;left: 0;}
.imgTextLayout{display: flex;}
.layoutImg_1{flex-flow: column-reverse;}
.layoutImg_2{flex-flow: column;}
.layoutImg_3{flex-flow: row-reverse;}
.layoutImg_4{flex-flow: row;}
</style>