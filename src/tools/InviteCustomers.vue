<template>
	<div class="ToolBox">
		<div class="ToolBox_info">
            
            <!-- 邀请信息 -->
            <van-form validate-first @failed="onFailed" @submit="onSubmit">

                <van-field>
                  <template #input>
                    <van-radio-group v-model="radioType" direction="horizontal">
                      <van-radio name="phone">手机号</van-radio>
                      <van-radio name="email">邮箱</van-radio>
                    </van-radio-group>
                  </template>
                </van-field>
                <van-field
                    v-if="radioType=='phone'"
                    v-model="phone"
                    center
                    required="true"
                    type="text"
                    label="手机号"
                    placeholder="手机号"
                    :rules="[{ message: '请输入手机号' }]"
                  />
                <van-field
                    v-if="radioType=='email'"
                    v-model="email"
                    center
                    required="true"
                    type="text"
                    label="邮箱"
                    placeholder="邮箱"
                    :rules="[{ validator:validatorEmail, message: '请输入邮箱' }]"
                  />
                <van-field
                    v-model="message"
                    required="false"
                    type="textarea"
                    rows="4"
                    label="备注"
                    placeholder="备注"
                  />
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">发送邀请</van-button>
                </div>
            </van-form>
		</div>
	</div>
</template>

<script>
export default {
    data () {
      	return {
            radioType: 'phone',
            phone:'',
            email:'',
            message:'',

      	}
    },
    mounted(){

    },
    methods:{
        // 校验函数返回 true 表示校验通过，false 表示不通过
        validatorEmail(val) {
            return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(val)
        },
        onFailed(values,errorInfo) {
            console.log('failed', errorInfo);
            for(var key in values){
                console.log(key,values[key]);
            }
        },
        onSubmit(values){
            let dataVal = {};
            if(this.radioType == 'email'){
                dataVal = {
                    email:this.email,
                    message:this.message,
                }
            }else{
                dataVal = {
                    phone:this.phone,
                    message:this.message,
                }
            }
            this.$axios({
                method: 'POST',
                url:'/api/v1/investment/customer',
                data: dataVal,
            }).then(res => {
                console.log(res);
                if(res.status == 200){

                }else{
                    this.$toast({
                        type:'fail',
                        message:res.data.message,
                    });
                }
            }).catch(error=>{

            });
        },
    }
}
</script>
<style scoped>
	/deep/ .van-cell__title{text-align: left;}
	/deep/ .van-cell__value{color: #323233;}
    /deep/ .van-field .van-icon{
        font-size: 15px;
    }
    .ToolBox{
        width: 100%;
    }
    .ToolBox_title{font-weight: 500;text-align: left;background-color: #FFC80B;line-height: 35px;text-indent: 20px;}
</style>
