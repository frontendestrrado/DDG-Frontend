<template>
	<div class="notificPage">
		<div class="notices_info">
			<van-cell center v-for="(item,index) in noticesList" :key="index">
				<div>{{item.type}}</div>
				<!-- van-multi-ellipsis--l2 -->
				<div class="itemContent">{{item.content}}</div>
			</van-cell>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				noticesList:[],
			}
		},
		mounted(){
			this.getNotices();
		},
		methods: {
			getNotices(){
				this.$axios({
					method: 'get',
					url:'/api/v1/user/notices',
					headers: {
	                    "Authorization": sessionStorage.token_type+sessionStorage.token,
	                },
				}).then(res => {
					console.log(res);
					this.noticesList = res;
				}).catch(error=>{

				});
			},
		},
	}
</script>

<style scoped>
/deep/ .van-cell{width: calc(100% - 32px);margin: 10px 16px;overflow: hidden;border-radius: 8px; }
.notificPage{min-height: 100vh;background-color: #f2f2f7;}
.notices_info{width: 100%;padding-top: 10px;}
.itemContent{margin-top: 4px;color: #969799;font-size: 12px;line-height: 18px;}
</style>
