<template>
	<div class="main_content" :style="{maxWidth: pageWidth+'px'}">
		<Common :pageData='pageContent'></Common>
		<van-form v-if="isShow" validate-first @failed="onFailed" @submit="sendSubmit">
			<van-field
                v-model="cusData.firstname"
                center
                required
                type="text"
                label="姓氏"
                placeholder="姓氏"
                :rules="[{ required: true, message: '请输入姓氏' }]"
              />
            <van-field
                v-model="cusData.lastname"
                center
                required
                type="text"
                label="名字"
                placeholder="名字"
                :rules="[{ required: true, message: '请输入名字' }]"
              />
            <van-field
                v-model="cusData.email"
                center
                required
                type="text"
                label="邮箱"
                placeholder="邮箱"
                :rules="[{ required: true, validator:validatorEmail, message: '请输入邮箱' }]"
              />
            <van-field
                v-model="cusData.phone"
                center
                :required="true"
                type="digit"
                label="手机号"
                placeholder="手机号"
                :rules="[{ required: true, message: '请输入手机号' }]"
              />
            <van-field
                v-model="cusData.address"
                type="textarea"
                rows="4"
                label="地址"
                placeholder="地址"
              />
            <van-field
                v-model="cusData.message"
                type="textarea"
                rows="4"
                label="留言"
                placeholder="留言"
              />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">发送留言</van-button>
            </div>
		</van-form>
	</div>
</template>

<script>
	import Common from '@/components/mode/common.vue'
  import {getUnread} from '@/api/advisors.js'
	export default {
		components: {
			Common,
		},
		name: 'customPages',
		data () {
			return {
				pageContent: [],
				pageWidth: '1200',
				isShow: false,
        pageName: '',
				cusData: {
					firstname: '',
					lastname: '',
					email: '',
					phone: '',
					address: '',
					message: '',
					user_id: this.$route.query.user_id,
				},
			}
		},
		watch: {
			"$route"(val,oldval){
				if(val.params.page_id!=oldval.params.page_id){
					this.getPageContent();
				}
			}
	    },
		mounted(){
			if(this.$route.query.user_id && this.$route.query.contact){
				this.isShow = true;
				this.setView();
			}
			this.getPageContent();
		},
		methods: {
      /**
       * 如果是advisors頁面如果有未讀消息，會有彈出框提示
       */
      showMessage () {
        if(this.pageName === 'Advisors' && this.$store.state.unreadStatus) {
          getUnread().then(res => {
            if(res > 0) {
              this.$store.commit('changeUnreadStatus',false)
              this.$bvToast.toast(`You have ${res} unread announcement`, {
                title: `MESSAGE`,
                toaster: 'b-toaster-top-center',
                variant: 'info',
                solid: true
              })
            }
          })
        }
      },
			getPageContent(){
				this.$axios({
					method: 'get',
					url:'/api/v1/customPages?id='+this.$route.params.page_id,
				}).then(res => {
					if(res.status === 200){
						this.pageContent = res.data.modules;
						this.pageWidth = res.data.width;
						this.pageName = res.data.name
						this.pageContent.forEach((item,i) => {
							if(item.type === 9){
								item.data_collects.forEach((itemi,j) => {
									this.$set(this.pageContent[i].data_collects[j],'content','')
								})
							}
						})
            this.showMessage()
					}else{
						this.pageContent = [];
						this.pageWidth = '1200';
						// this.$store.commit('changePage',{tabbar: '/ErrorPage', title: 'ErrorPage'});
						// this.$router.push('/ErrorPage');
					}
				}).catch(error=>{

				});
			},
			// 记录客户打开邀请链接
			setView(){
				this.$axios({
	                method: 'PUT',
	                url:'/api/v1/investment/'+this.$route.query.user_id+'/customer/'+this.$route.query.contact+'/link',
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
	        //提交留言
	        sendSubmit(values){
	            this.$axios({
	                method: 'POST',
	                url:'/api/v1/investment/customer/message',
	                data: this.cusData,
	            }).then(res => {
	                console.log(res);
	                if(res.state_code == 200){
	                    this.$toast({
	                        type:'success',
	                        message:res.msg,
	                    });
	                }else{
	                    this.$toast({
	                        type:'fail',
	                        message:res.msg,
	                    });
	                }
	            }).catch(error=>{

	            });
	        },
		},
	}
</script>

<style scoped>
</style>
