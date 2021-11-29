<template>
	<div class="person from_content">
		<van-cell-group>
            <!-- <van-field center label="Name" :readonly="true" v-model="userInfo.name"></van-field> -->
            <van-uploader v-model="fileList" multiple :max-count="1" :after-read="afterRead" />
            <!-- <van-field
                ref="name"
                center
                label="Name"
                :readonly="actUserBtn=='name'?false:true"
                v-model="userInfo.name">
                <van-icon slot="right-icon" v-if="actUserBtn=='name'" name="success" size="30px" @click="patchEdit('name')" />
                <van-icon slot="right-icon" v-else name="edit" size="30px" @click="showEditBtn('name')"/>
            </van-field> -->
            <van-field center label="name" :readonly="true" v-model="userInfo.name"></van-field>
            <van-field
            ref="address"
            center
            label="Home Address"
            :readonly="actUserBtn=='address'?false:true"
            v-model="userInfo.address">
                <van-icon slot="right-icon" v-if="actUserBtn=='address'" name="success" size="30px" @click="patchEdit('address')" />
                <van-icon slot="right-icon" v-else name="edit" size="30px" @click="showEditBtn('address')"/>
            </van-field>
            <van-field
            ref="phone"
            center
            label="Phone"
            :readonly="actUserBtn=='phone'?false:true"
            v-model="userInfo.phone">
                <van-icon slot="right-icon" v-if="actUserBtn=='phone'" name="success" size="30px" @click="patchEdit('phone')" />
                <van-icon slot="right-icon" v-else name="edit" size="30px" @click="showEditBtn('phone')"/>
            </van-field>
            <van-field
            ref="email"
            center
            label="email"
            :readonly="actUserBtn=='email'?false:true"
            v-model="userInfo.email">
                <van-icon slot="right-icon" v-if="actUserBtn=='email'" name="success" size="30px" @click="patchEdit('email')" />
                <van-icon slot="right-icon" v-else name="edit" size="30px" @click="showEditBtn('email')"/>
            </van-field>
            <van-field center label="Date of Birth" :readonly="true" v-model="userInfo.birthday"></van-field>
            <van-field center label="DCS Code" :readonly="true" v-model="userInfo.code"></van-field>
            <van-field center label="NRIC or Passport #" :readonly="true" v-model="userInfo.post"></van-field>

            <van-field
            ref="bankName"
            center
            label="Bank Name"
            :readonly="actUserBtn=='bankName'?false:true"
            v-model="userInfo.bankName">
                <van-icon slot="right-icon" v-if="actUserBtn=='bankName'" name="success" size="30px" @click="patchEdit('bankName')" />
                <van-icon slot="right-icon" v-else name="edit" size="30px" @click="showEditBtn('bankName')"/>
            </van-field>
            <van-field
            ref="bankAccount"
            center
            label="Bank Account"
            :readonly="actUserBtn=='bankAccount'?false:true"
            v-model="userInfo.bankAccount">
                <van-icon slot="right-icon" v-if="actUserBtn=='bankAccount'" name="success" size="30px" @click="patchEdit('bankAccount')" />
                <van-icon slot="right-icon" v-else name="edit" size="30px" @click="showEditBtn('bankAccount')"/>
            </van-field>
            <van-field
            ref="accountName"
            center
            label="Account Name"
            :readonly="actUserBtn=='accountName'?false:true"
            v-model="userInfo.accountName">
                <van-icon slot="right-icon" v-if="actUserBtn=='accountName'" name="success" size="30px" @click="patchEdit('accountName')" />
                <van-icon slot="right-icon" v-else name="edit" size="30px" @click="showEditBtn('accountName')"/>
            </van-field>
            <van-field center label="Created Date" :readonly="true" v-model="userInfo.created_at"></van-field>
            <!-- <van-cell title="Home Address" :value="userInfo.name" is-link>
                <template #right-icon><van-icon name="edit" size="30px"/></template>
            </van-cell>
            <van-cell title="Phone" :value="userInfo.phone" is-link>
                <template #right-icon><van-icon name="edit" size="30px"/></template>
            </van-cell>
            <van-cell title="Email Address" :value="userInfo.email" is-link>
                <template #right-icon><van-icon name="edit" size="30px"/></template>
            </van-cell>
            <van-cell title="Date of Birth" :value="userInfo.birthday" />
            <van-cell title="DCS Code" :value="userInfo.code" />
            <van-cell title="NRIC or Passport #" :value="userInfo.post" />
            <van-cell title="Bank Name" :value="userInfo.birthday" is-link>
                <template #right-icon><van-icon name="edit" size="30px"/></template>
            </van-cell>
            <van-cell title="Bank Account" :value="userInfo.birthday" is-link>
                <template #right-icon><van-icon name="edit" size="30px"/></template>
            </van-cell>
            <van-cell title="Account Name" :value="userInfo.birthday" is-link>
                <template #right-icon><van-icon name="edit" size="30px"/></template>
            </van-cell> -->
		</van-cell-group>
	</div>
</template>

<script>
export default {
    data () {
      	return {
      		userInfo:'',
            saveContent:false,
            actUserBtn:-1,
            timer:null,
            fileList: [],
      	}
    },
    mounted(){
    	this.getUser();
    },
    methods:{
    	getUser(){
			this.$axios({
                method: 'get',
                url: '/api/v1/user',
                headers: {
                    "Authorization": sessionStorage.token_type+sessionStorage.token,
                }
            }).then(res => {
            	console.log(res);
            	this.userInfo = res;
                this.fileList = [{ url: res.avatar}]
            }).catch(err => {
                this.$toast({
            		type:'fail',
            		message:'error',
        		});
            });
    	},
        showEditBtn(index){
            this.actUserBtn=index;
            this.$refs[index].focus();
        },
        hideEditBtn(index){
            const vm=this;
            setTimeout(function(){
                if(index==vm.actUserBtn||index==-1){
                    vm.actUserBtn=-1;
                }
            },60);

        },
        // 保存用户信息
        patchEdit(index,id){
            this.hideEditBtn(-1);
            var data = {};
            if (id) {
                data[index] = id
            } else {
                data[index] = this.userInfo[index];
            }
            console.log(data,'保存用户信息');
            this.$axios({
                method: 'PATCH',
                url: '/api/v1/user',
                headers: {
                    "Authorization": sessionStorage.token_type+sessionStorage.token,
                },
                data,
            }).then(res => {
                console.log(res);
                this.userInfo = res;
            }).catch(err => {
                this.$toast({
                    type:'fail',
                    message:'error',
                });
            });
        },
        // 頭像上傳
        afterRead(file) {
            console.log(file,'頭像');
            let formData = new FormData();
            formData.append('image', file.file) // 要提交给后台的文件
            formData.append('type', 'avatar');
            console.log(formData);
            this.$axios({
                method: 'POST',
                url: '/api/v1/images',
                headers: {
                    "Authorization": sessionStorage.token_type+sessionStorage.token,
                },
                data: formData
            }).then(res => {
                console.log(res,'頭像上傳');
                if (res.id) {
                    this.$toast.success('頭像上傳成功')
                }
                this.patchEdit('avatar_image_id',res.id)
            }).catch(err => {
                console.log(err,'頭像上傳異常');
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
	.van-field .van-icon{
		font-size: 20px;
	}
	/deep/ .van-cell .van-cell__title{text-align: left;}
    /* /deep/ .van-cell.van-field{border-bottom: 1px solid #CBCDCE;} */
    .person{background: #F3F5F7;}
    .person_info{padding: 20px 30px;background-color: #FFC80B;}
    .person_title{font-weight: 500;text-align: left;}
    .editBtn{position: absolute;right: 0px;top: 0px;}
</style>
