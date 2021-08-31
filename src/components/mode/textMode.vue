<template>
	<div class="index-text">
	    <div class="index-text-div">
	    	<van-row class="columnboxAbout" v-if="textData.text.length>0" :gutter="$store.state.isPC?20:0">
                <van-col :span="showClass" v-for="(item,index) in textData.text" :key="index">
                    <div class="textContent">
                        <div :style="{fontSize:textData.title_size,color:textData.title_color,fontWeight:textData.title_bold==1?'bold':'normal'}">{{item.title}}</div>
                        <div :style="{fontSize:textData.content_size,color:textData.content_color}">{{item.content}}</div>
                    </div>
                </van-col>
            </van-row>
	    </div>
	</div>
</template>
<script>
export default {
	name:'textMode',
	props:{
		textData:{
			type:Object,
		},		
	},
	computed:{
        showClass(){
            if(this.textData.layout == 1){
                return 24;
            }else if(this.textData.layout == 2){
                return this.$store.state.isPC?12:24;
            }else if(this.textData.layout == 3){
                return this.$store.state.isPC?8:24;
            }else if(this.textData.layout == 4){
                return this.$store.state.isPC?6:12;
            }else if(this.textData.layout == 5){
                return this.$store.state.isPC?5:12;
            }
        }
    },
}
</script>
<style scoped>
/* 文字模块 */
/deep/ .el-col-5{width:20%;}
.columnboxAbout {width:100%;}
.textContent >div{overflow: hidden;}
</style>