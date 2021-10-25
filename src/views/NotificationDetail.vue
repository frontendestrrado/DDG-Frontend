<template>
	<div class="notificPage">
		<div class="notices_info">
			
				<van-cell center>
					<div>名称</div>
					<div class="itemContent">描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息</div>
				</van-cell>
				<van-cell center>
					<div>名称</div>
					<div class="itemContent">描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息</div>
				</van-cell>
				<van-cell center>
					<div>名称</div>
					<div class="itemContent">描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息</div>
				</van-cell>
				<van-cell center>
					<div>名称</div>
					<div class="itemContent">描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息</div>
				</van-cell>
				<van-cell center>
					<div>名称</div>
					<div class="itemContent">描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息</div>
				</van-cell>
				<van-cell center>
					<div>名称</div>
					<div class="itemContent">描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息</div>
				</van-cell>
				<van-cell center>
					<div>名称</div>
					<div class="itemContent">描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息</div>
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
			// this.setNotices();
		},
		methods: {
			// 标记已读
			setNotices(){
				this.$axios({
					method: 'PUT',
					url:'/api/v1/user/notices/'+this.$route.params.id,
					headers: {
	                    "Authorization": sessionStorage.token_type+sessionStorage.token,
	                },
				}).then(res => {
					console.log(res);
					if(res.status == 200){
						this.noticesList = res.data;
					}else{

					}
				}).catch(error=>{

				});
			}
		},
	}
</script>

<style scoped>
/deep/ .van-cell{width: calc(100% - 32px);margin: 10px 16px;overflow: hidden;border-radius: 8px; }
.notificPage{min-height: 100vh;background-color: #f2f2f7;}
.notices_info{width: 100%;padding-top: 10px;}
.itemContent{margin-top: 4px;color: #969799;font-size: 12px;line-height: 18px;}
</style>
