<template>
<div>
  <Header></Header>
  <main>
    <b-container>
<!--      <div>Coming Soon</div>-->
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
import {getAnnouncementList} from "../../api/announcement.js";
import AnnouncementDetail from "./AnnouncementDetail.vue";

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
          key: 'date',
          tdClass: 'date-class',
          thClass:'date-class'
        }
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
    this.getAnnouncementList()
  },
  methods: {
    rowClass (item,type) {
      if (!item || type !== 'row') return
      if (item.is_viewed === 0) {
        return 'table-secondary'
      }else {
        return
      }
    },
    getAnnouncementList() {
      getAnnouncementList().then(res => {
        this.tableList = res
        console.log(res)
        // console.log(this.tableList)
      })
    },
    GoDetail(item) {
      this.$router.push({
        path: './AnnouncementDetail',
        query: {id: item.id}
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
</style>
