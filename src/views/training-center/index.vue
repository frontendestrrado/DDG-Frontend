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
      <b-row class="text-left top-button">
        <b-col>
          <b-button-group size="sm">
            <b-button variant="success" @click="changeVideoList('newest')"><b-icon icon="check" v-show="topButtonStatus==='newest'"></b-icon>Newest</b-button>
            <b-button variant="info" @click="changeVideoList('most_viewed')"><b-icon icon="check" v-show="topButtonStatus==='most_viewed'"></b-icon>Most viewed</b-button>
            <b-button variant="warning" @click="changeVideoList('most_favorite')"><b-icon icon="check" v-show="topButtonStatus==='most_favorite'"></b-icon>Most Favorite</b-button>
          </b-button-group>
        </b-col>
      </b-row>

    </b-container>
  </main>
<!--  <div>Coming Soon</div>-->
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
      topButtonStatus: 'newest'
    }
  },

  mounted() {
    this.getTrainingCenterList(this.topButtonStatus)
  },
  methods: {
    getTrainingCenterList (status) {
      getTrainingCenterList(status).then(res => {
        console.log(res,222)
      })
    },
    //獲取視頻列表
    changeVideoList (value) {
      if(this.topButtonStatus === value) return
      this.topButtonStatus = value
      console.log(this.topButtonStatus)
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
  position: fixed;
  bottom: 0;
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
