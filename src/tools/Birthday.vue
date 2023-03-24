
<template>
    <section>
        <!-- <b-table hover :fields="fields" :items="list" style="cursor: pointer" :per-page="per_page" id="my-table" :current-page="currentPage"> -->
            <b-table hover :items="list" :fields="fields" style="cursor: pointer" :per-page="perPage" id="my-table" :current-page="currentPage">
            <template #cell(actions)="row">
                <b-button size="sm" @click="goDetail(row)">
                    Details
                </b-button>
                <b-button size="sm" @click="goDetail1(row)">
                    Download
                </b-button>
            </template>
        </b-table>
        <div class="page">

            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="per_page" 
            align="center"
                @input="changePage"></b-pagination>


            <!-- <b-pagination
      :total-rows="rows"
      :per-page="per_page"
      aria-controls="my-table"
      v-model="currentPage"
    ></b-pagination> -->
        </div>
        <!--  <h1 class="Coming">Coming Soon</h1>-->
    </section>
</template>
<script type="text/javascript" src="js/list.min.js"></script>
<script type="text/javascript" src="js/your-own.js"></script>
<script>
import {dateApi} from "@/api/performance"
import { getBirthday } from "@/api/tools";
import Dropdown from 'vue-simple-search-dropdown';

export default {

  mounted() {
    this.getMonth()
  
  },
  data() {
    return {
      el: '#app',
              filters: null,
        selectedValue: "0",
      list: [],
    
      fields: [
        {key: 'sl',label: 'No'},
            {key: 'no',label: 'Order Number'},
        {key: 'name',label: 'Settlor Name'},
        {key: 'address',label: 'House Address'},
            {key: 'phone',label: 'Handphone Number'},
        {key: 'dob',label: 'D.O.B'}
      ],
      per_page: 10,
      currentPage: 1,
      rows: 3
    }
  },
  methods: {
    changePage() {
  this.getMonth()
},
    getMonth() {
  getBirthday({
    page: this.currentPage
  })
    .then((res) => {
      console.log(".......555....bbb dddd.....",res)
      this.list = res.data;
      this.per_page = res.per_page
      this.rows = res.total
      console.log(".......555....bbb dddd.....",res.data)
    })
    .catch((err) => {
      console.log(err.response);
    });


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
    margin: 10px 70px;
}

.slect-boxdiv select {
    width: 250px;
    padding: 5px;
    border: 1px solid #c4c4c4;
}
</style>
