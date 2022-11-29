<template>
  <div>
    <Header></Header>
    <main>
      <div class="row mb-5">
        <div class="col-md-3"></div>
        <div class="col-md-3">
          <van-button @click="announcementsShow" :id="'annButId'"
            :style="{ border: '1px solid #a4aeb9', background: '#1989fa' }" squre block type="info"
            class="announcements">
            Announcements
          </van-button>
        </div>
        <div class="col-md-3">
          <van-button @click="notificationsShow" :id="'notButId'" squre block type="info"
            :style="{ border: '1px solid #a4aeb9', background: '#a4aeb9' }" class="notifications">
            Notifications
          </van-button>
        </div>
        <div class="col-md-3"></div>
      </div>

      <b-container :id="'annId'" :style="{ display: 'block' }">
        <!--      <div>Coming Soon</div>-->
        <b-table hover :items="tableList" :fields="fields" head-variant="light" @row-clicked="GoDetail" selectable
          :per-page="perPage" id="my-table" :current-page="currentPage" :tbody-tr-class="rowClass">
          <template #cell(title)="data">
            {{ data.item.title }}<i class="iconfont icon-yuandian" v-show="data.item.is_viewed === 0"></i>
          </template>
          <template #cell(attachment)="row">
    
      <b-button size="sm"  v-if="row.item.attachment_type === 'pdf'" @click="goDetail1(row)">
        <van-image 
        
							style="width: 20px;height:auto;margin: 0 auto; margin-right:10px;"
							:src="require('@/assets/img/pdf.png')"
							fit="contain"
							/>
           
            
        Download
      </b-button>
      <b-button size="sm" v-if="row.item.attachment_type === 'jpg' || row.item.attachment_type === 'jpeg'  || row.item.attachment_type === 'png'"  @click="goDetail1(row)">
        <van-image
							style="width: 20px;height:auto;margin: 0 auto; margin-right:10px;"
							:src="require('@/assets/img/photo.png')"
							fit="contain"
							/>
           
            
        Download
      </b-button>
    </template>
        </b-table>
        <b-pagination :per-page="perPage" aria-controls="my-table" :total-rows="rows" v-model="currentPage"
          class="pagination-table"></b-pagination>
      </b-container>

      <b-container :id="'notId'" :style="{ display: 'none' }">
        <!--      <div>Coming Soon</div>-->
        <b-table hover :items="tableList1" :fields="fields1" head-variant="light" @row-clicked="GoDetail1" selectable
          :per-page="perPage" id="my-table" :current-page="currentPage" :tbody-tr-class="rowClass1">
          <template #cell(title)="data">
            {{ data.item.title }}<i class="iconfont icon-yuandian" v-show="data.item.is_read === 0"></i>
          </template>
        </b-table>
        <b-pagination :per-page="perPage" aria-controls="my-table" :total-rows="rows1" v-model="currentPage"
          class="pagination-table"></b-pagination>
      </b-container>

    </main>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/common/Footer.vue";
import { getAnnouncementList, getNotificationsList } from "../../api/announcement.js";
import AnnouncementDetail from "./AnnouncementDetail.vue";
import NotificationsDetail from "./NotificationsDetail.vue";

export default {
  name: "Announcement",
  data() {
    return {
      fields: [
        {
          key: 'title',
          tdClass: 'title-class',
        },
        {
          key: 'department'
        },
        {
          key: 'attachment'
        },
        {
          key: 'date',
          tdClass: 'date-class',
          thClass: 'date-class'
        }
      ],
      fields1: [
        { key: 'title', label: 'Title' },
        { key: 'type', label: 'Type' },
        {
          key: 'created_at',
          label: 'Date',
          tdClass: 'date-class',
          thClass: 'date-class'
        }
      ],
      tableList: [],
      tableList1: [],
      perPage: 20,
      currentPage: 1,
    }
  },
  computed: {
    rows() {
      return this.tableList.length
    },
    rows1() {
      return this.tableList1.length
    }
  },
  mounted() {
    this.getAnnouncementList()
    this.getNotificationsList()
    if(this.$route.query.type==="ann"){

document.getElementById("annButId").click()
    }
    if(this.$route.query.type==="not"){

document.getElementById("notButId").click()
    }
    
    
  },
  methods: {
    goDetail1(a) {
console.log(".........aaaa......",a)
window.open(a.item.attachment)
  },
    rowClass(item, type) {
      if (!item || type !== 'row') return
      if (item.is_viewed === 0) {
        return 'table-secondary'
      } else {
        return
      }
    },
    rowClass1(item, type) {
      if (!item || type !== 'row') return
      if (item.is_read === 0) {
        return 'table-secondary'
      } else {
        return
      }
    },
    announcementsShow() {
      document.getElementById('annId').style.display = 'block'
      document.getElementById('notId').style.display = 'none'
      document.getElementById('notButId').style.background = '#a4aeb9'
      document.getElementById('notButId').style.border = '#a4aeb9'
      document.getElementById('annButId').style.background = '#1989fa'
      document.getElementById('annButId').style.border = '1px solid #1989fa'

    },
    notificationsShow() {
      document.getElementById('notId').style.display = 'block'
      document.getElementById('annId').style.display = 'none'
      document.getElementById('annButId').style.background = '#a4aeb9'
      document.getElementById('annButId').style.border = '1px solid #a4aeb9'
      document.getElementById('notButId').style.background = '#1989fa'
      document.getElementById('notButId').style.border = '1px solid #1989fa'
    },
    getAnnouncementList() {
      getAnnouncementList().then(res => {
        this.tableList = res
        console.log("---Announcement----", res)
        // console.log(this.tableList)
      })
    },
    getNotificationsList() {
      getNotificationsList().then(res => {
        this.tableList1 = res
        console.log("---getNotificationsList----", res)
        // console.log(this.tableList)
      })
    },
    GoDetail(item) {
      console.log("&&&&&&&&&&&", item)
      this.$router.push({
        path: './AnnouncementDetail',
        query: { id: item.id }
      })
    },
     GoDetail1(item) {
      console.log("&&&&&&&&&&&", item)
      this.$router.push({
        path: './NotificationsDetail',
        query: { id: item.id }
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
      box-shadow: 4px 4px 12px 4px rgba(20%, 20%, 40%, 0.5);
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
</style>
