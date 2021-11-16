<template>
    <div class="ToolBox bodybox">
        <div class="ToolBox_info">
            <van-button type="primary" size="large" @click="$store.commit('changePage',{tabbar: '/InviteCustomers', title: 'InviteCustomers'});$router.push('/InviteCustomers');">招商邀请</van-button>

            <!-- 招商列表 -->
            <template v-for="(item,index) in cusList">
                <van-cell :title="item.contact" :value="item.is_open==0?'未查看':'已查看'" :label="item.is_open==1?(item.message?'留言：'+item.message:'留言：无'):''" />
            </template>

        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            cusList:[],
        }
    },
    created(){
        this.getCustomersList();
    },
    mounted(){

    },
    methods:{
        getCustomersList(){
            this.$axios({
                method: 'GET',
                url: '/api/v1/investment/customer',
                headers: {
                    "Authorization": sessionStorage.token_type+sessionStorage.token,
                },
            }).then(res => {
                console.log(res);
                this.cusList = res;
            }).catch(err => {
                this.$toast({
                    type:'fail',
                    message:'error'
                })
            })
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