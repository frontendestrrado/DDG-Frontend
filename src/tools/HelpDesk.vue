
<template>
  <div class="OrderList bodybox">
    <div class="row bodybox1">
      <div class="col-md-6 text-left">
      <h3 class="h3">My Requests ({{ this.rows }}) </h3>
    </div>
    <div class="col-md-6 text-right">
      <b-button variant="primary" size="sm" @click="NewRequest()">
           + New Request
          </b-button>
        </div>
    </div>
    <div class="row bodybox1">
      <div class="col-md-9">
        <van-search v-model="searchval" placeholder="Search Request"  class="p-0" @search="onSearch" @clear="clearSearch" />
      </div>
      <div class="col-md-3">
        <van-loading v-if="loadingShow" />
        <div class="van-search block1">
          <div id="app" class="slect-boxdiv">
            <select @change="onSearch" v-model="status">
              <option value="">All</option>
              <option value="1">Open</option>
              <option value="2">In Progress</option>
              <option value="3">Closed</option>
              <!-- <option  v-for="item in year1" :value="item.value">{{item.text}}</option> -->
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="bodybox1">
    <section :style="{ width: '100%'}"  >
     

      <b-table hover @row-clicked="GoDetail" :items="list" :fields="fields" style="cursor: pointer" :per-page="perPage" id="my-table" :current-page="currentPage">
        <template #cell(status)="row">
          <b-button v-if="row.value === 'Closed'" size="sm" variant="success">
            {{ row.value }}
          </b-button>
          <b-button v-if="row.value === 'In Progress'" size="sm" variant="warning">
            {{ row.value }}
          </b-button>
          <b-button v-if="row.value === 'Open'" variant="danger" size="sm">
            {{ row.value }}
          </b-button>
        </template>
        </b-table>

        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="per_page" 
            align="center"
                @input="changePage"></b-pagination>
      <!-- <b-table hover @row-clicked="GoDetail" :items="list" :fields="fields" style="cursor: pointer" :per-page="per_page" id="my-table"
        :current-page="currentPage" >
        <template #cell(status)="row">
          <b-button v-if="row.value === 'Closed'" size="sm" variant="success">
            {{ row.value }}
          </b-button>
          <b-button v-if="row.value === 'In Progress'" size="sm" variant="warning">
            {{ row.value }}
          </b-button>
          <b-button v-if="row.value === 'Open'" variant="danger" size="sm">
            {{ row.value }}
          </b-button>
        </template>
      </b-table> -->
      <!-- <div class="page">

        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="per_page" align="center"
          @input="changePage"></b-pagination>
      </div>
    -->
    </section>
  </div>
  </div>
</template>
<script type="text/javascript" src="js/list.min.js"></script>
<script type="text/javascript" src="js/your-own.js"></script>
<script>
import {dateApi} from "@/api/performance"
import { getHelpDesk } from "@/api/tools";
import Dropdown from 'vue-simple-search-dropdown';

export default {


  data() {
    return {
      el: '#app',
              filters: null,
        selectedValue: "0",
      list: [],
    
      fields: [
        {key: 'sl_no',label: 'Sl'},
            {key: 'token',label: 'ID'},
        {key: 'title',label: 'Title'},
        {key: 'ticket_date',label: 'Created On'},
            {key: 'status',label: 'Status'}
      ],
      per_page: 10,
      currentPage: 1,
      rows: 3,
      searchval:'',
      status:'',
      loadingShow: true,
    }
  },
  mounted() {
    this.getMonth()
  
  },
  methods: {
    NewRequest(){
      this.$router.push('/NewRequest')
       this.$store.commit('changePage',{tabbar: '/NewRequest', title: 'Submit a New Request'});
    },
    onSearch() {
   //  alert("d")
      this.getMonth()
    },
    clearSearch() {
     
      this.getMonth()
    },
    changePage() {
  this.getMonth()
},
    getMonth() {
      console.log(".......this.currentPage.....",this.currentPage)
      console.log(".......this.searchval....",this.searchval)
      console.log(".......this.status.....",this.status)
  getHelpDesk({
    page: this.currentPage,
    search: this.searchval,
    status:this.status
  })
    .then((res) => {
      console.log(".......555....bbb dddd.....",res)
    //   return this.res.data.map((d, index) => ({ ...d, sno: index + 1 }))
    //   console.log("----d--d--d--d-d--d--",d)
      this.list = res.data;
    this.per_page = res.meta.per_page
      this.rows = res.meta.total
      this.loadingShow = false
      console.log(res)
    //   console.log(".......555....bbb dddd.....",res.data)
    })
    .catch((err) => {
      console.log(err.response);
    });


    },

    GoDetail(item) {
      console.log("&&&&&&&&&&&", item)
      this.$router.push({
        path: './RequestDetails',
        query: { id: item.id }
      })
    },
  },
  computed: {
    // rows() {
    //   return this.list.length
    // }
  }
}
</script>

<style lang="scss" scoped>
.page {
  margin-left: 48vw;
}

.Coming {
  font-size: 3vw;
}

.slect-boxdiv {
  text-align: right !important;
 // margin: 10px 70px;
}

.slect-boxdiv select {
  width: 250px;
  padding: 5px;
  border: 1px solid #c4c4c4;
}

.OrderList {
.bodybox1 {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 12px;
  background-color: #fff;
}

.van-search.block {
  display: block;
  padding-left: 0%;
}

.van-search.block1 {
  display: block;
  padding-left: 13px;
  padding-right: 0px;
}

.slect-boxdiv select {
  width: 100%;
  // padding: 5px;
  border: 0px solid #c4c4c4;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  background-color: #f7f8fa;
  border-radius: 2px;
  padding: 10px 12px;
  height: 50px;
}
}
.h3{
  text-align: left;
    font-size: 20px;
    font-weight: bold;
    color: #897359;
}
</style>
