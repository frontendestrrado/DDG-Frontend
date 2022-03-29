<template>
<div>
  <Header></Header>
  <main>
    <b-container fluid>
      <b-row class="text-center title">
        <b-col>AIGT</b-col>
      </b-row>
      <b-row class="all">
        <b-col>
          <div class="all-div">
            <span >All</span>
          </div>
        </b-col>
      </b-row>
      <b-row class="text-left top-button mb-3">
        <b-col>
          <b-button-group size="sm">
            <b-button variant="success" @click="changeVideoList('newest')"><b-icon icon="check" v-show="topButtonStatus==='newest'"></b-icon>Newest</b-button>
            <b-button variant="info" @click="changeVideoList('most_viewed')"><b-icon icon="check" v-show="topButtonStatus==='most_viewed'"></b-icon>Most viewed</b-button>
            <b-button  @click="changeVideoList('most_favorite')"><b-icon icon="check" v-show="topButtonStatus==='most_favorite'"></b-icon>Most Favorite</b-button>
          </b-button-group>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col v-for="(item,index) in videoList" :key="item.id" cols="6" md="2" class="mb-5">
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
<!--              <i class="iconfont icon-yanjing mr-2"><span>{{item.is_like}}</span></i>
              <i class="iconfont icon-fenxiang mr-2"><span>{{item.share}}</span></i>
              <i class="iconfont icon-wujiaoxingkong mr-2"><span>{{item.like_count}}</span></i>-->
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>

    </b-container>
  </main>
  <Footer class="footer"></Footer>
</div>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/common/Footer.vue";
import {getTrainingCenterList} from "../../api/trainingCenter.js";

export default {
name: "TrainingCenter",
  data() {
    return {
      topButtonStatus: 'newest',//頂部按鈕狀態
      videoList: [],//視頻列表
    }
  },

  created() {
    this.getTrainingCenterList(this.topButtonStatus)
  },
  methods: {
    /**
     * 獲取視頻列表
     * @param status
     */
    getTrainingCenterList (status) {
      getTrainingCenterList(status).then(res => {
        this.videoList = res.data
      })
    },
    /**
     * 切換視頻排序方式
     * @param value
     */
    changeVideoList (value) {
      if(this.topButtonStatus === value) return
      this.topButtonStatus = value
      this.getTrainingCenterList(this.topButtonStatus)
      console.log(this.videoList)
    },
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
.footer {
  bottom: 0;
}
main {
  margin-bottom: 100px;
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
  .card-body {
    padding: 0
  }
  .card {
    cursor: pointer;
    .time {
      position: absolute;
      right: 1%;
      display: inline-block;
      background-color: #402810;
      color: white;
      margin-top: -25px;
      @media screen and (max-width: 768px) {
        margin-top: -15px;
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
      font-size: 10px;
    }
  }
  .video-status {
    text-align: start;
    font-size: 12px;
    color: #8d8d8d;
    span {
      font-size: 12px;
    }
  }
}
.title {
  background-color: #fafafa;
  font-weight: bold;
  font-family: "Times New Roman";
  line-height: 80px;
  @media screen and (max-width: 768px) {
    line-height: 40px;
  }
}
.all {
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  background-color: #f6f8f5;
  color: #1ca9e3;
  span {
    border-bottom: 2px solid #1ca9e3;
    font-size: 14px;
    @media screen and (max-width: 768px) {
      font-size: 10px;
    }
  }
  .all-div {
    background-color: white;
    width: 50px;
    margin: auto;
  }
  line-height: 30px;
  @media screen and (max-width: 768px) {
    line-height: 20px;
  }
}
.bi-check {
  @media screen and (max-width: 768px) {
    font-size: 15px !important;
  }
}
.top-button {
/*  button:nth-of-type(2) {
    border-left: 0.5px solid #5e5e5e;
    border-right: 1px solid #5e5e5e;
  }
  button:nth-of-type(1) {
    border-right: 1px solid #5e5e5e;
  }
  button:nth-of-type(3) {
    border-left: 0.5px solid #5e5e5e;
  }*/
}
</style>
