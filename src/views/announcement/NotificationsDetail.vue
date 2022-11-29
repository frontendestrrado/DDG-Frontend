<template>
  <div>
    <Header></Header>
    <b-container class="box">
      <b-row class="text-center title">
        <b-col>
          {{content.title}}
        </b-col>
      </b-row>
      <b-row class="text-left">
        <b-col>Dear All Advisors,</b-col>
      </b-row>

      <b-row class="text-left" >
      <b-col v-html="content.content" class="content"></b-col>
      </b-row>

      <b-row class="text-left">
        <b-col>Regards,</b-col>
      </b-row>
      <b-row class="text-left">
        <b-col>DDG Admin</b-col>
      </b-row>
      <b-row class="text-left">
        <b-col>{{content.created_at}}</b-col>
      </b-row>
    </b-container>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/common/Footer.vue";
import {getNotificationDetail} from '@/api/announcement.js'
export default {
  name: "AnnouncementDetail",
   created() {
     this.getNotificationDetail(this.$route.query.id)
  },
  data() {
    return {
      content: {}
    }
  },
  methods: {
    getNotificationDetail(id) {
       console.log("....................0000000000.....id.......",id)
      getNotificationDetail(id).then(res => {
        console.log("....................0000000000............",res)
        this.content = res
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
.title {
  background-color: #7c655d;
  color: white;
  font-family: "Times New Roman";
  font-weight: bold;
  line-height: 60px;
  margin-bottom: 100px !important;
  @media screen and (max-width: 768px) {
    margin-bottom: 20px !important
  }

}
.box {
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0,0,0,.5);
  margin-bottom: 100px;
  margin-top: 100px;
  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
    margin-top: 50px;
  }
  .content {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .row {
    margin-bottom: 5px;
    font-family: "Times New Roman";
    font-weight: bold;
    &:last-of-type {
      margin-bottom: 100px !important;
      @media screen and (max-width: 768px) {
        margin-bottom: 20px !important
      }
    }
  }
}
.footer {
  position: fixed;
  bottom: 0;
}
</style>
