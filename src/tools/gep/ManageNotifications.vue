<template>
<div>
  <!-- <Header></Header> -->
  <main>
    <b-container>
  <h3 class="h3">Notifications</h3>
      <b-table  hover
                :items="tableList"
                :fields="fields"
                head-variant="light"
                @row-clicked="GoDetail"
                selectable
                :per-page="perPage"
                id="my-table"
                :current-page="currentPage"
                :tbody-tr-class="rowClass"
      >
        <template #cell(title)="data">
          {{data.item.title}}<i class="iconfont icon-yuandian" v-show="data.item.is_viewed === 0"></i>
        </template>
      </b-table>
      <h1 class="h1" @click="Aigp">View Send Notifications >></h1>
      <b-pagination
        :per-page="perPage"
        aria-controls="my-table"
        :total-rows="rows"
        v-model="currentPage"
        class="pagination-table"
      ></b-pagination>
    </b-container>

  </main>

    <Footer class="footer"></Footer>
</div>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/common/Footer.vue";
import {getCrmNotifications} from "../../api/announcement.js";
// import AnnouncementDetail from "./AnnouncementDetail.vue";

export default {
  data() {
    return {
      fields: [
          {key: 'name',label: 'Notification title'},
            {key: 'notice_type',label: 'Notification type'}
      ],
      tableList: [],
      perPage: 20,
      currentPage: 1,
    }
  },
  computed: {
    rows() {
      return this.tableList.length
    }
  },
  mounted() {
    this.getCrmNotifications()
  },
  methods: {
    // rowClass (item,type) {
    //   if (!item || type !== 'row') return
    //   if (item.is_viewed === 0) {
    //     return 'table-secondary'
    //   }else {
    //     return
    //   }
    // },
     Aigp(){
        this.$router.push('/ViewSendNotifications')
          this.$store.commit('changePage',{tabbar: '/ViewSendNotifications', title: 'CRM'});
       
      },
    getCrmNotifications() {
         console.log("---wwwwwwwwwwwwwwwwwwwwwwwwww----")
      getCrmNotifications().then(res => {
        this.tableList = res
        console.log("---getCrmNotifications----",res)
        // console.log(this.tableList)
      })
    },
    GoDetail(item) {
      console.log("&&&&&&&&&&&",item)
      this.$router.push({
        path: './SendNotifications',
        query: {id: item.notice_id}
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
main {
  margin-top: 100px;
  margin-bottom: 300px;
  @media screen and (max-width: 768px) {
    margin-top: 30px;
    margin-bottom: 100px;
  }
  .container {
    .icon-yuandian {
      color: red;
    }
    >>>table {
      box-shadow:4px 4px 12px 4px rgba(20%,20%,40%,0.5);
      border-radius: 15px;
      overflow: hidden;
    }
    .pagination-table {
      justify-content: center;
      margin-top: 50px;
    }
  }
  >>>.title-class {
    text-align: start !important;
   padding-left: 30px !important;
    @media screen and (max-width: 768px) {
      padding-left: 10px !important;
    }
  }
}
  .footer {
    bottom: 0;
    z-index: 999;
  }
  .h3{
    text-align: left;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #897359;
  }
  .h1{
    text-align: right;
    font-size: 16px;
    font-weight: bold;
    margin-top: 1rem;
    color: #1989fa;
  }
</style>
