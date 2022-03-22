<template>
<div>
  <Header></Header>
  <main>
    <b-container>
<!--      <div>Coming Soon</div>-->
      <b-table striped hover :items="tableList" :fields="fields" head-variant="light" @row-clicked="GoDetail" selectable></b-table>
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
          key: 'date',
          tdClass: 'date-class',
          thClass:'date-class'
        }
      ],
      tableList: [],
    }
  },
  mounted() {
    this.getAnnouncementList()
  },
  methods: {
    getAnnouncementList() {
      getAnnouncementList().then(res => {
        this.tableList = res
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
    >>>table {
      box-shadow:4px 4px 12px 4px rgba(20%,20%,40%,0.5);
      border-radius: 15px;
      overflow: hidden;
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
    position: fixed;
    bottom: 0;
  }
</style>
