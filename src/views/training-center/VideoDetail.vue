<template>
  <div>
    <Header></Header>
    <div>
      <b-container fluid>
        <b-row class="mb-5">
          <b-col class="top-title">AIGT</b-col>
        </b-row>
        <b-row class="mb-5 text-left">
          <b-col class="top-video-title">[AIGT] {{videoDetail.title}}</b-col>
        </b-row>
<!--        <b-row class="mb-5 text-left">
          <b-col>
            <i class="iconfont icon-yanjing mr-2"></i><span>{{videoDetail.is_like}}</span>
            <span class="division"></span>
            <i class="iconfont icon-wujiaoxingkong mr-2"  @click="collect(videoDetail.id)" :style="{'color': videoDetail.is_like===0 ? '' : 'red'}"></i><span>{{videoDetail.like_count}}</span>
            <span class="division"></span>
            <span>{{videoDetail.created_at}}</span>
          </b-col>
        </b-row>-->
        <b-row class="mb-5">
          <b-col @mouseenter="videoShowPause()" @mouseleave="videoHidePause()" class="my-video">
            <video :src="videoDetail.video"  @timeupdate="onTimeUpdate" id="video" controls class="my-video" ref="videoPlayer" >
            </video>
            <img src="@/assets/img/traning-center/play.svg" class="play" @click="changePlay(true)" v-show="!status"></img>
            <img src="@/assets/img/traning-center/pause.svg" class="pause" @click="changePlay(false)" v-show="status===true && videoPause===true"></img>
          </b-col>
        </b-row>
        <b-row class="text-left footer-title">
          <b-col>MORE VIDEOS</b-col>
        </b-row>
        <b-row class="mt-5">
          <b-col v-for="item in videoDetail.more_videos" :key="item.id" cols="6" md="4" class="mb-5">
            <b-card
              :img-src="item.image"
              img-alt="Image"
              img-top
              border-variant="light"
              class="mb-2"
              @click="goDetail(item.id)"
            >
              <b-card-text class="time">
                {{item.duration}}
              </b-card-text>
              <b-card-text class="video-title ml-1">
                {{item.title}}
              </b-card-text>
              <b-card-text class="video-time mt-1">
                {{item.created_at}}
              </b-card-text>
              <b-card-text class="video-status mt-5 mb-1 ml-1">
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/common/Footer.vue";
import {getVideoDetail,collect} from "../../api/trainingCenter.js";
import { videoCompleteApi } from "@/api/tools";
var myPlayer = document.querySelector('#video');
var percentageCompleted = 0;
var totalLength;
var videoStarted, videoTwentyFive, videoFifty, videoSeventyFive, videoComplete = false;


export default {
  name: "VideoDetail",
  data () {
    return {
      videoDetail: {},//視頻信息
      status: false,//視頻播放狀態
      videoPause: false,//暫停標籤是否顯示
      timer:1000,
    }
  },
  created() {
    this.getVideoDetail(this.$route.query.id)
  },
  watch: {
    /**
     * 監聽路由變化
     */
    $route (to, from) {
      if(to.query.id !== from.query.id)  this.getVideoDetail(this.$route.query.id)
    },
  },
  methods: {
    // onTimeUpdate () {
    //       this.currentTime = this.$refs.audio.currentTime
    //     }


        onTimeUpdate() {
    totalLength = this.$refs.videoPlayer.duration % 60;   
    console.log("...77777777.....",totalLength)
    console.log("...77777777.....",this.$refs.videoPlayer.currentTime)
    percentageCompleted = (this.$refs.videoPlayer.currentTime / totalLength) * 100;
  //  console.log(totalLength);
    console.log('percentage', (percentageCompleted+'%'));
    if(this.$refs.videoPlayer.currentTime==this.$refs.videoPlayer.duration){
    //  alert("completed")
      videoCompleteApi(this.$route.query.id)
  .then((res) => {
    console.log(".......aaaaaaaaaaa.........", res)
  //  this.getFaq();
    console.log(res)
  })
  .catch((err) => {
    console.log(err.response);
  });
      
    }

    // is 0
    if ((!videoStarted) && (percentageCompleted > 0)) {
        console.log('VIDEO_STARTED');
        videoStarted = true;

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'playStart'
        });
    }
    // is 25
    if ((!videoTwentyFive) && (percentageCompleted > 25)) {
        console.log('VIDEO_25');
        videoTwentyFive = true;

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'playTwentyFive'
        });
    }
    // is 50
    if ((!videoFifty) && (percentageCompleted > 50)) {
        console.log('VIDEO_50');
        videoFifty = true;

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'playFifty'
        });
    }
    // is 75
    if ((!videoSeventyFive) && (percentageCompleted > 75)) {
        console.log('VIDEO_75');
        videoSeventyFive = true;

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'playSeventyFive'
        });
    }
    // is 100
    if ((!videoComplete) && (percentageCompleted > 99)) {
   //   alert("usfsg")
        console.log('VIDEO_100');
        videoComplete = true;

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'playComplete'
        });
    }


},
    /**
     * 收藏視頻
     */
    collect (id) {
     collect(id).then(res => {
      this.getVideoDetail(this.$route.query.id)
     })
    },
    /**
     * 獲取視頻
     */
    getVideoDetail (id) {
      getVideoDetail(id).then(res => {
        this.videoDetail = res
      })
    },
    /**
     * 改變視頻播放狀態
     */
    changePlay (status) {
    
      this.status = status
      this.status ? this.$refs.videoPlayer.play() : this.$refs.videoPlayer.pause()
   //   this.getPercentage()
    },

    /**
     * 鼠標移入暫停按鈕顯示
     */
    videoShowPause () {
      this.videoPause = true
    },
    /**
     * 鼠標移入暫停按鈕隱藏
     */
    videoHidePause () {
      this.videoPause = false
    },
    /**
     * 跳轉視頻播放頁面
     */
    goDetail (id) {
      this.$router.push({
        path: 'VideoDetail',
        query: {id: id}
      })
    }

  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>

.my-video {
  width: 100%;
  height: 800px;
  position: relative;
  @media screen and (max-width: 768px) {
    height: 200px;
  }
  .play {
    position: absolute !important;
    cursor: pointer;
    width: 150px;
    height: 150px;
    left: 50%;
    margin-left: -90px;
    top: 50%;
    margin-top: -100px;
    z-index: 999;
    @media screen and (max-width: 768px) {
      width: 80px;
      height: 80px;
      margin-left: -40px;
      margin-top: -40px;
      display: none;
    }
  }
  .pause {
    position: absolute !important;
    cursor: pointer;
    left: 50%;
    margin-left: -100px;
    top: 50%;
    margin-top: -100px;
    width: 150px;
    height: 150px;
    @media screen and (max-width: 768px) {
      display: none;
      width: 80px;
      height: 80px;
      margin-left: -40px;
      margin-top: -40px;
    }
  }
}
.footer-title {
  font-size: 30px;
  font-family: "Times New Roman";
  font-weight: bold;
}
.card {
  cursor: pointer;
  .time {
    position: absolute;
    right: 1%;
    display: inline-block;
    background-color: #402810;
    color: white;
    margin-top: -35px;
    @media screen and (max-width: 768px) {
      margin-top: -20px;
    }
  }
}
.video-title {
  font-family: Calibri;
  font-weight: bold;
  text-align: start;
  line-height: 25px;
  height: 60px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    line-height: 20px;
    height: 40px;
    overflow: hidden;
  }
}
.video-time {
  font-size: 14px;
  color: #8d8d8d;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
}
.video-status {
  text-align: start;
  font-size: 12px;
  color: #8d8d8d;
  span {
    color: #8d8d8d !important;
    font-size: 12px !important;
  }
}
.footer {
  bottom: 0;
}
.top-title {
  color: #7c655d;
  font-size: 30px;
  font-weight: bold;
  font-family: "Times New Roman";

}
.top-video-title {
  font-size: 30px;
  font-weight: bold;
  font-family: "Times New Roman";
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
}
.icon-yanjing {
  color: #2eb2e4;
  span {
    color: black;
    font-size: 14px;
  }
}
.icon-wujiaoxingkong {
  span {
    font-size: 14px;
  }
}
.division {
  display: inline-block;
  height: 10px;
  width: 1px;
  background: #a6a6a6;
  margin-right: 5px;
}
span {
  font-size: 14px;
}
</style>
