<template>
	<div class="ToolBox">
		<div class="ToolBox_info">
            
            <van-button type="primary" size="large" @click="$router.push('/InviteCustomers');">招商邀请</van-button>

            <!-- 招商列表 -->
            <div class="topList">
                <van-cell title="test@qq.com" label="备注">
                </van-cell>
                <van-cell title="18878789999" label="备注">
                </van-cell>
                <van-cell title="test@qq.com" label="备注">
                </van-cell>
                <van-cell title="18878789999" label="备注">
                </van-cell>
                <van-cell title="test@qq.com" label="备注">
                </van-cell>
                <van-cell title="18878789999" label="备注">
                </van-cell>
                <van-cell title="test@qq.com" label="备注">
                </van-cell>
                <van-cell title="test@qq.com" label="备注">
                </van-cell>
                <van-cell title="test@qq.com" label="备注">
                </van-cell>
            </div>
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
