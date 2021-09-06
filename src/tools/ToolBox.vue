<template>
	<div class="ToolBox">
		<div class="ToolBox_info">

			工具箱

		</div>
	</div>
</template>

<script>
export default {
    data () {
      	return {
      	}
    },
    mounted(){

    },
    methods:{
    	changeTab(){
    		
    	}
    }
}
</script>
<style>
	.van-field .van-icon{
		font-size: 20px;
	}

</style>
<style scoped>
	/deep/ .van-cell__title{width: 30%;flex:none;text-align: left;}
	/deep/ .van-cell__value{color: #323233;}
    .ToolBox{
        width: 100%;
    }
    .ToolBox_title{font-weight: 500;text-align: left;background-color: #FFC80B;line-height: 35px;text-indent: 20px;}
</style>
