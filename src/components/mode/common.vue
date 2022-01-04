<template>
	<div class="main_container">
		<!-- Banner1 title2 richText3 movie4 singleimage5 imagetext6 showcaseImage7 text8 -->
		<div v-for="(item,index) in pageData" :key="index">
			<Banner v-if="item.type === 1" :bannerData='item' @on-goto="goPage"></Banner>
			<TilText v-if="item.type === 2" :titleData='item'></TilText>
			<RichText v-if="item.type === 3 && item.content" :richTextData='item'></RichText>
			<Movie v-if="item.type === 4" :movieData='item'></Movie>
			<MultiImg v-if="item.type === 5 || item.type === 7" :imgData='item' @on-goto="goPage"></MultiImg>
			<Graphic v-if="item.type === 6" :graphicData='item' @on-goto="goPage"></Graphic>
			<TextMode v-if="item.type === 8" :textData='item'></TextMode>
			<InputMode v-if="item.type === 9" :formData.sync='item'></InputMode>
			<File v-if="item.type === 10" :fileData='item'></File>
		</div>
	</div>
</template>
<script>
	import "@/assets/css/mode.css"
	import Banner from '@/components/mode/banner'
	import RichText from '@/components/mode/richText'
	import TilText from '@/components/mode/titleText'
	import Movie from '@/components/mode/movie'
	import MultiImg from '@/components/mode/multiImg'
	import Graphic from '@/components/mode/graphic'
	import TextMode from '@/components/mode/textMode'
	import InputMode from '@/components/mode/inputMode'
	import File from '@/components/mode/file'
	export default {
		components: {
			Banner,
			RichText,
			TilText,
			Movie,
			MultiImg,
			Graphic,
			TextMode,
			InputMode,
      File
		},
		props:{
			pageData:{
				type:Array,
				default: () => [
					{
						"id":4,"type":1,
						"quantity":2,"height":400,
						"cutover_time":6,
						"button_shape":1,
						"button_color":"#fff",
						"banners":[
							{"id":123,"tag_line":"0","image":"https://www.wennoanimal.com/uploads/holograms/202105/31//admin_1622449079_BYCwgamKcO.jpg","path":"0"
							},
							{"id":124,"tag_line":"0","image":"https://www.wennoanimal.com/uploads/holograms/202106/28//admin_1624850151_zjKG1WjeHU.jpg","path":"0"
							}
						]
					},
					{
						"id":10,
						"type":2,
						"title":"欢迎来到Wenno，开启你的购物之旅~123",
						"icon":"https://www.wennoanimal.com/uploads/admin/202105/19/60a4e3a430030.png",
						"title_size":"16",
						"title_color":"#000000",
						"align":"center",
						"bg_color":"#ffffff",
						"bg_image":null,
						"path":null
					},
					{
						"id": 1,
						"type": 3,
						"content": '<p>你好呀，哈哈哈哈哈</p>',
					},
					{
						"id":3,"type":4,"height":200,"automatic":0,
						"movie":"https://www.wennoanimal.com/uploads/admin/202105/19/60a4b0dceab16.mp4"
					},
					{
						"id":4,
						"type":7,
						"height":200,
						"showcase_type":2,
						"bg_color":"#ffffff",
						"showcase_image":[
							{
								"id":172,
								"image":"https://www.wennoanimal.com/uploads/holograms/202105/19//admin_1621418384_Y9TOqWxf1s.png",
								"path":"/customPages/customDtl/customDtl?id=9",
								"is_hologram":0,
							},{
								"id":173,
								"image":"https://www.wennoanimal.com/uploads/holograms/202105/19//admin_1621418390_q4R8hWaUr0.png",
								"path":"/hologram/holiday/holiday",
								"is_hologram":0,
							},{
								"id":174,
								"image":"https://www.wennoanimal.com/uploads/holograms/202105/31//admin_1622448679_HsR8MPfynu.png","path":"/customPages/customDtl/customDtl?id=12",
								"is_hologram":0,
							},{
								"id":175,
								"image":"https://www.wennoanimal.com/uploads/holograms/202105/26//admin_1622018405_Z2ysbDAjGE.png","path":"/customPages/animals/animals",
								"is_hologram":0,
							}
						],
					},
					{
						"id": 1,
						"align": "center",
						"bg_color": "#ffffff",
						"color": "#000000",
						"created_at": "2021-07-29 14:31:37",
						"font_in_image_color": "red",
						"font_in_image_size": "14",
						"font_size": "16",
						"imageText": [{
							"created_at": "2021-07-29 14:32:08",
							"font_in_image": "搜索",
							"id": 3,
							"image": "https://www.wennoanimal.com/uploads/holograms/202107/29//admin_1627540312_NGqESn9dYo.jpg",
							"text": "测试",
							"updated_at": "2021-07-29 14:32:08",
						},{
							"created_at": "2021-07-29 14:32:08",
							"font_in_image": "搜索",
							"id": 3,
							"image": "https://www.wennoanimal.com/uploads/holograms/202107/29//admin_1627540312_NGqESn9dYo.jpg",
							"text": "测试",
							"updated_at": "2021-07-29 14:32:08",
						}],
						"layout": 4,	// 布局：1单列 2二列 3三列 4四列 5五列
						"layout_font_in_image": 1,	// 嵌入文字 1上 2中 3下
						"layout_images_text": 4,	// 图文布局：1上文下图 2下文上图 3左文右图 4 右文左图
						"type": 6,
					},
					{
						"content_color": "#d9d9d9",
						"content_size": "撒啊啊飒飒",
						"id": 1,
						"layout": 2,
						"text": [{
							"content": "sss",
							"id": 3,
							"title": "测试",
						},{
							"content": "sss",
							"id": 3,
							"title": "测试2222222222222222222222222222222222",
						}],
						"title_bold": 1,
						"title_color": "#666666",
						"title_size": "14",
						"type": 8,
					},
				],
			},
		},
		data () {
			return {
			}
		},
		mounted(){
		},
		methods:{
			goPage(path,text){
				if(!!path){
					if(path.indexOf('/')==0){
						if(text){
              if (path == '/CustomerApplication') {
                this.$store.commit('changePage',{tabbar: path, title: '1/5 Customer Application'});
              } else {
                this.$store.commit('changePage',{tabbar: path, title: text});
              }
						}else{
							this.$store.commit('changePage',{tabbar: path, title: path.substr(1)});
						}
						this.$router.push(path);
					}else{
						window.open(path);
					}
				}
			},
			goProductDtl(path,type){
				console.log('common:',path,type);
			},
		}
	}
</script>
<style scoped>

</style>