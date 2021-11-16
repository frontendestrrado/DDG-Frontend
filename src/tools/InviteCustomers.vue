<template>
	<div class="ToolBox bodybox">
		<div class="ToolBox_info">
            
            <!-- 邀请信息 -->
            <van-form validate-first @failed="onFailed" @submit="onSubmit">
                <van-field>
                  <template #input>
                    <van-radio-group v-model="radioType" direction="horizontal">
                      <van-radio name="email">邮箱</van-radio>
                      <van-radio name="phone">手机号</van-radio>
                    </van-radio-group>
                  </template>
                </van-field>

                <template v-if="radioType=='email'" v-for="(email,index) in emails">
                    <van-field
                        v-model="email.val"
                        :key="'email'+index"
                        center
                        :required="true"
                        type="text"
                        label="邮箱"
                        placeholder="邮箱"
                        :rules="[{ required: true, validator:validatorEmail, message: '请输入邮箱' }]"
                        :right-icon="index==0?'add':'clear'"
                        @click-right-icon="index==0 ? addPhone(0):delPhone(0,index)"
                      />
                </template>
                <template v-if="radioType=='phone'" v-for="(phone,index) in phones">
                    <van-field
                        v-model="phone.val"
                        :key="'phone'+index"
                        center
                        :required="true"
                        type="text"
                        label="手机号"
                        placeholder="手机号"
                        :rules="[{ required: true, message: '请输入手机号' }]"
                        :right-icon="index==0?'add':'clear'"
                        @click-right-icon="index==0 ? addPhone(1):delPhone(1,index)"
                      />
                </template>

                <van-field
                    v-model="message"
                    :required="false"
                    type="textarea"
                    rows="4"
                    label="留言"
                    placeholder="留言"
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
            radioType: 'email',
            phones:[{val:''}],
            emails:[{val:''}],
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
        addPhone(type){
            if(type==0){
                this.emails.push({val:''});
            }else if(type==1){
                this.phones.push({val:''});
            }
        },
        delPhone(type, index){
            if(type==0){
                this.emails.splice(index,1); 
            }else if(type==1){
                this.phones.splice(index,1); 
            }
        },
        onSubmit(values){
            let dataVal = {};
            if(this.radioType == 'email'){
                let emaillist = [];
                this.emails.forEach((item,i) => {
                    emaillist.push(item.val);
                })
                dataVal = {
                    contact:JSON.stringify(emaillist),
                    message:this.message,
                    contact_type: 0,//联系方式类型 0 邮箱 1手机号
                }
            }else{
                let phonelist = [];
                this.phones.forEach((item,i) => {
                    phonelist.push(item.val);
                })
                dataVal = {
                    contact:JSON.stringify(phonelist),
                    message:this.message,
                    contact_type: 1,
                }
            }
            console.log(dataVal);
            this.$axios({
                method: 'POST',
                url:'/api/v1/investment/customer',
                data: dataVal,
                headers: {
                    "Authorization": sessionStorage.token_type+sessionStorage.token,
                },
            }).then(res => {
                console.log(res);
                if(res.state_code == 200){
                    this.$toast({
                        type:'success',
                        message:res.message,
                    });
                }else{
                    this.$toast({
                        type:'fail',
                        message:res.message,
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
    /deep/ .van-field__right-icon .van-icon{
        font-size: 25px;color: #1989fa;
    }
    .ToolBox{
        width: 100%;
    }
    .ToolBox_title{font-weight: 500;text-align: left;background-color: #FFC80B;line-height: 35px;text-indent: 20px;}
</style>
