<template>
    <div class="index-input">
        <div class="index-input-div">
            <van-row class="columnboxAbout" v-if="formData.data_collects.length>0" :gutter="$store.state.isPC?20:0">
                <van-form validate-first @failed="onFailed" @submit="verifyCode">

                    <van-col :span="showClass" v-for="(item,index) in formData.data_collects" :key="index">
                    <!-- type  1文本 2密码 3手机号 4邮箱 5日期 6时间 7文本框 8图片 9按钮 -->
                        <template v-if="item.type==1 || item.type==2 || item.type==4">
                            <van-field
                                v-model="item.content"
                                :name="item.title"
                                center
                                :required="item.is_require == 1 ? true:false"
                                :type="item.type==2?'password':item.type==3?'digit':'text'"
                                :label="item.title"
                                :placeholder="item.title"
                                :rules="[{ validator:item.type==4?validatorEmail:'', required: item.is_require == 1 ? true:false, message: '请输入'+item.title }]"
                              />
                        </template>
                        <template v-if="item.type==3 && phoneList[index]">
                            <van-field
                                v-model="phoneList[index].phone"
                                :name="item.title"
                                center
                                :required="item.is_require == 1 ? true:false"
                                type="digit"
                                :label="item.title"
                                :placeholder="item.title"
                                :rules="[{ required: item.is_require == 1 ? true:false, message: '请输入'+item.title }]"
                              />
                            <van-field
                                v-model="phoneList[index].verify_code"
                                center
                                :required="true"
                                label="验证码"
                                placeholder="请输入短信验证码"
                                :rules="[{required: true, message: '请输入验证码'}]"
                                >
                                <!-- class="SMSconfirm" class="SMSconfirm" -->
                                <van-button :class="'SMSconfirm codeBtn_'+phoneList[index].isSms" slot="button" native-type="button" :disabled='phoneList[index].isSms' @click="sendCode(index);">发送验证码</van-button>
                            </van-field>
                        </template>
                        <!-- <template solt="label" :style="{color: item.title_color,fontSize:item.title_size+'px',fontWeight:item.title_bold==1?'bold':'normal'}">{{item.title}}</template> -->
                        <!-- solt="input" -->
                          <!-- content_size -->
                        <template v-if="item.type==5||item.type==6">
                            <van-field
                                readonly
                                v-model="item.content"
                                :name="item.title"
                                center
                                :required="item.is_require == 1 ? true:false"
                                right-icon="arrow"
                                :label="item.title"
                                :placeholder="item.type==5?'YYYY-MM-DD':'hh:ss'"
                                @click="onShowPicker(index,item.type)"
                              />
                        </template>
                        <template v-if="item.type==7">
                            <van-field
                                v-model="item.content"
                                :name="item.title"
                                :required="item.is_require == 1 ? true:false"
                                type="textarea"
                                rows="4"
                                :label="item.title"
                                :placeholder="item.title"
                                :rules="[{ required: item.is_require == 1 ? true:false, message: '请输入'+item.title }]"
                              />
                        </template>
                        <template v-if="item.type==8">
                            <van-field readonly :name="item.title" :label="item.title" :required="item.is_require == 1 ? true:false" :rules="[{ required: item.is_require == 1 ? true:false, message: '请上传'+item.title+'图片' }]" v-model="item.content" @click="uploadClickImg(index)">
                                <template #input>
                                    <van-image
                                        v-if="item.content"
                                        width="50"
                                        height="50"
                                        :src="item.content"
                                    />
                                    <van-image
                                        v-else
                                        width="50"
                                        height="50"
                                        fit="contain"
                                        :src="require('@/assets/img/image.png')"
                                    />
                                </template>
                            </van-field>
                        </template>
                        <template v-if="item.type==9">
                            <div style="margin: 16px;">
                                <van-button round block type="info" native-type="submit">{{item.title}}</van-button>
                            </div>
                        </template>

                    </van-col>
                </van-form>
            </van-row>

            <van-popup v-model="isShowPicker" position="bottom">
                <van-datetime-picker
                    v-model="currentContent"
                    :type="pickerTpye"
                    :min-hour="0"
                    :min-date="minDate"
                    :max-date="maxDate"
                    @cancel="onHiddenPicker"
                    @confirm="onConfirmPicker"
                />
            </van-popup>

            <input type="file" name="avatar" id="uppic" accept="image/gif,image/jpeg,image/jpg,image/png" @change="changeImage" ref="imgInput" style="opacity: 0;width: 0;height: 0;padding: 0;display: inherit;">

            <!-- <van-uploader v-model="fileList" :after-read="afterRead" :name="checkUploadIndex" :max-count="1" :max-size="1000 * 1024" @oversize="onOversize" :multiple="false" :deletable="false" :preview-full-image="false" :show-upload="false"></van-uploader> -->
        </div>
    </div>
</template>
<script>
export default {
    name:'inputMode',
    props:{
        formData:{
            type:Object,
        },
    },
    data () {
        return {
            isShowPicker: false,
            currentContent: '',
            pickerTpye: '',
            checkIndex: '',
            fileList:[],
            checkUploadIndex: '',
            uploadImg: 'https://www.bunchparty.com/trust/uploads/collects/202108/31//1630379513_1630379513_fs6mjWgy8o.png',//测试图
            minDate:new Date(1950, 0, 1),
            maxDate:new Date(),
            phoneList: [],
        }
    },
    watch: {
        cartList: function() {
            this.$nextTick(function(){
                if(this.cartList.length>0){
                    this.getFight();
                }
            })
        },
    },
    computed:{
        showClass(){
            if(this.formData.layout == 1){
                return 24;
            }else if(this.formData.layout == 2){
                return this.$store.state.isPC?12:24;
            }else if(this.formData.layout == 3){
                return this.$store.state.isPC?8:24;
            }else if(this.formData.layout == 4){
                return this.$store.state.isPC?6:12;
            }else if(this.formData.layout == 5){
                return this.$store.state.isPC?5:12;
            }
        },
    },
    mounted(){
        let phoneData = [];
        if(this.formData.data_collects.length>0){
            this.formData.data_collects.forEach((item,i) => {
                let data = {};
                if(item.type == 3){
                    data = {
                        phone: '',
                        verify_code: '',
                        isSms: false,
                    };
                }
                phoneData.push(data);
            })
        }
        this.phoneList = phoneData;
    },
    methods:{
        onSubmit(values){
            let content = [];
            for(var key in values){
                if(key==''||key=="undefined"||key==null||key==undefined){
                }else{
                    var contentVal = {
                        title: key,
                        value: values[key],
                    }
                    content.push(contentVal);
                }
            }
            this.$axios({
                method: 'POST',
                url:'/api/v1/collect',
                data:{
                    page_id:this.$route.params.page_id,
                    module_id:this.formData.page_module_relation_id,
                    content: JSON.stringify(content),
                },
            }).then(res => {
                console.log(res);
                if(res.status == 200){
                    console.log(this.pageContent);
                }else{
                    this.$toast({
                        type:'fail',
                        message:res.data.message,
                    });
                }
            }).catch(error=>{

            });
        },
        onFailed(values,errorInfo) {
            console.log('failed', errorInfo);
            for(var key in values){
                console.log(key,values[key]);
            }
        },
        // 校验函数返回 true 表示校验通过，false 表示不通过
        validatorEmail(val) {
            return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(val)
        },
        // 展示时间或日期弹框
        onShowPicker(index, type){
            this.checkIndex = index;
            if(type == 5){
                this.pickerTpye = 'date';
            }else if(type == 6){
                this.pickerTpye = 'time';
            }
            this.isShowPicker=true;
        },
        onHiddenPicker(){
            this.currentContent = '';
            this.pickerTpye = '';
            this.isShowPicker=false;
        },
        onConfirmPicker(){
            if(this.pickerTpye == 'date'){
                this.formData.data_collects[this.checkIndex].content = this.formatDateYMD(this.currentContent);
            }else if(this.pickerTpye == 'time'){
                this.formData.data_collects[this.checkIndex].content = this.currentContent;
            }
            this.isShowPicker = false;
        },
        formatDateYMD(value){
            if (!value){ 
                return '';
            }else{
                var date = new Date(value);
                var Y = date.getFullYear()+'-';
                var M = (date.getMonth()+1)+ '-';
                var D = date.getDate();
                return Y+M+D;
            }
        },
        uploadClickImg(index){
            this.checkUploadIndex = index;
            this.$refs['imgInput'].click();
        },
        changeImage(){
            var file = this.$refs['imgInput'].files[0];
            console.log(this.$refs.imgInput);
            console.log(file);
            var reader = new FileReader();
            let self = this;
            reader.readAsDataURL(file)
            reader.onload = function(e) {
                // self.formData.data_collects[self.checkUploadIndex].content = this.result;

                let formData = new FormData();
                formData.append('image', file) // 要提交给后台的文件
                formData.append('type', 'collect');
                console.log(formData);
                self.$axios({
                    method: 'POST',
                    url: '/api/v1/upload/images',
                    data:formData,
                }).then(res => {
                    console.log(res);
                    self.formData.data_collects[self.checkUploadIndex].content = res.path;
                }).catch(err => {
                    self.$toast({
                        type:'fail',
                        message:'上传图片失败',
                    });
                });
            }
        },
        afterRead(file,detail) {
            // 此时可以自行将文件上传至服务器
            console.log(file);
            console.log(detail);
            this.formData.data_collects[detail.name].content = this.uploadImg;
            console.log(this.formData.data_collects[detail.name].content);
            // let formData=new FormData();
            // formData.append('type','collect');
            // formData.append('image',file.file);
            // this.$axios({
            //     method: 'POST',
            //     url: '/api/v1/upload/images',
            //     data:formData,
            // }).then(res => {
            //     console.log(res);
            //     this.uploadImg=res.path;
            // }).catch(err => {
            //     this.$toast({
            //         type:'fail',
            //         message:'上传图片失败',
            //     });
            // });
        },
        onOversize(file){
            Toast('文件大小不能超过 1M');
        },
        //获取验证码
        sendCode(index){
            // let nowIndex;
            // if(this.phoneList.length>0){
            //     this.phoneList.forEach((item,i) => {
            //         if(item.index == index){
            //             nowIndex = i;
            //         }
            //     })
            // }
            if(!this.phoneList[index].isSms){
                if(this.phoneList[index].phone){
                    var data = [{"phone":this.phoneList[index].phone}]
                    this.$axios({
                        method: 'POST',
                        url: '/api/v1/sin_up/sms/verify_code',
                        data:{
                            phone: JSON.stringify(data),
                        },
                    }).then(res => {
                        console.log(res);
                        if(res.state_code==200){
                            this.$toast({
                                type:'success',
                                message:res.message,
                            });
                            this.phoneList[index].isSms=true;
                            const vm=this;
                            setTimeout(function(){
                                vm.phoneList[index].isSms=false;
                            },60000);
                        }else{
                            this.$toast({
                                type:'fail',
                                message:res.message,
                            });
                        }
                    }).catch(err => {
                        this.$toast({
                            type:'fail',
                            message:'获取验证码失败',
                        });
                    });
                }else{
                    this.$toast('请先输入手机号');
                }
            }
        },
        // 验证验证码
        verifyCode(values){
            let data = [];
            let num = 0;
            this.phoneList.forEach((item,i) => {
                if(item.phone){
                    num++;
                    var phoneInfo = {
                        phone: item.phone,
                        verify_code: item.verify_code,
                    };
                    data.push(phoneInfo);
                }
            })
            if(num == 0){
                setTimeout(function(){
                    vm.onSubmit(values);
                },600);
            }else{
                if(num==data.length){
                    this.$axios({
                        method: 'GET',
                        url: '/api/v1/sin_up/sms/verify_code?data='+JSON.stringify(data),
                    }).then(res => {
                        console.log(res);
                        if(res.state_code==200){
                            // this.$toast({
                            //     type:'success',
                            //     message:res.message,
                            // });
                            const vm=this;
                            setTimeout(function(){
                                vm.onSubmit(values);
                            },600);
                        }else{
                            this.$toast({
                                type:'fail',
                                message:res.message,
                            });
                        }
                    }).catch(err => {
                        this.$toast({
                            type:'fail',
                            message:'验证码错误',
                        });
                    });
                }
            }
        },
    },
}
</script>
<style scoped>
/* 输入框模块 */
/deep/ .el-col-5{width:20%;}
.columnboxAbout {width:100%;}
.textContent >div{overflow: hidden;}
.SMSconfirm{
    color: #fff;
    border: none;
    outline: none;
    background-color: #2f75f4;
    font-size: 16px;
    border-radius: 13px;
}
.index-input-div {
    width: 90%;
    margin: auto;
}
</style>