<!-- 视频模块 -->
<template>
	<div class="index-movie" v-if="movieData.movie">
		<!--autoplay  movieData.automatic===1?true:false -->
		<video :id="'modeVideo_'+movieData.id" class="modeVideo" controls="controls"
			webkit-playsinline='true'
			playsinline="true"
			x5-playsinline="true"
			x-webkit-airplay="true"
			x5-video-player-type="h5"
			x5-video-player-fullscreen="false"
			x5-video-ignore-metadata="true"
			x5-video-orientation="landscape"
			preload="preload">
			<source :src="movieData.movie" type='video/mp4' ></video>
		</video>
	</div>
</template>
<script>
export default {
	name:'movie',
	props:{
		movieData:{
			type:Object,
		},
	}
}
</script>