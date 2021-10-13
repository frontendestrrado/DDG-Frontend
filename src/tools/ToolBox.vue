<template>
	<div class="ToolBox">
		<div class="ToolBox_info">
            <van-cell is-link center @click="" title="公司完整资料"></van-cell>
            <van-cell is-link center @click="" title="相关信托产品的各种讲解"></van-cell>
            <van-cell is-link center @click="" title="标准问答资料"></van-cell>
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

<style scoped>
	/deep/ .van-cell__title{text-align: left;}
	/deep/ .van-cell__value{color: #323233;}
    .ToolBox{
        width: 100%;
    }
    .ToolBox_title{font-weight: 500;text-align: left;background-color: #FFC80B;line-height: 35px;text-indent: 20px;}
</style>
