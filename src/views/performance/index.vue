
<template>
<section>
 <div class="">
   <div id="app" class="slect-boxdiv">
     <select @change="goDetail2(selectedValue)" v-model="selectedValue" >
         <option value="0">Please select Year</option>
         <option  v-for="item in year" :value="item">{{item.date}}</option>
     </select>
</div>
<!-- <div id="app" class="slect-boxdiv">
     <select v-model="selectedValue">
         <option disabled value="">Please select Date</option>
         <option v-for="item in year" :value="item">{{item.date}}</option>
     </select>
</div> -->
 </div>
  <b-table hover :fields="fields" :items="list"  style="cursor: pointer" :per-page="perPage" id="my-table" :current-page="currentPage">
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
    <b-pagination
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      v-model="currentPage"
    ></b-pagination>
  </div>
<!--  <h1 class="Coming">Coming Soon</h1>-->
</section>
</template>
<script type="text/javascript" src="js/list.min.js"></script>
<script type="text/javascript" src="js/your-own.js"></script>
<script>
import {dateApi, dateApiDate, pdfApi} from "@/api/performance"
import Dropdown from 'vue-simple-search-dropdown';

export default {
  name: "index",
  mounted() {
    this.getMonth(new Date().getFullYear())
    this.getYear()
    setTimeout(()=> this.filters = ["Apache", "Cochise"], 3000)
  },
  data() {
    return {
      el: '#app',
              filters: null,
        selectedValue: "0",
      list: [],
      year:[],
      fields: [
        {key: 'date',label: 'Date'},
            {key: 'commission',label: 'Total commission'},
        {key: 'actions',label: 'Actions'}
      ],
      perPage: 5,
      currentPage: 1,
      currentYear:2022
    }
  },
  methods: {
      getYear() {
      dateApiDate().then(res => {
       // this.list = Object.values(res.data)
          console.log("*******111*****",res.data)
          this.year = res.data
      })
    },
    getMonth(id) {
      dateApi(id).then(res => {
         console.log("************",res)
        this.list = Object.values(res)
          console.log("********2222****",Object.values(res))
      })
    },
    goDetail2(year){
 console.log(";;;;;;;;;;;;;;;;;;;",year.date)
  dateApi(year.date).then(res => {
         console.log("************",res)
        this.list = Object.values(res)
          console.log("********2222****",Object.values(res))
      })
    },
    goDetail1(goDetail1) {
          console.log("----////////--------",goDetail1.item.date.split('-'))
         
          let url = goDetail1.item.date.split('-')
  pdfApi(url[0],url[1]).then(res => {
  console.log(".......p...d...f...",res.data)
  console.log("9999999999999999999",res.data)
      let url1 = res.data.split('storage')
      console.log("ccccccccccccccccccccc",url1)
      console.log("aaaaaaaaaaaaaaaaaa",url1[0])
      console.log("bbbbbbbbbbbbbbbb",url1[1])
      window.open(url1[0] + 'file/download?path=storage' + url1[1], '_self')
        //  console.log("xxxxxxxxxxxxx",res.data.split('storage'))
        //     let url = res.data.split('storage')
      
  

      //  console.log("aaaaaaaaaaaaaaaaaa",url[0])
      //  console.log("bbbbbbbbbbbbbbbb",url[1])
   //   window.open('https://dev.ddgint.com/backend/' + 'file/download?path=storage/app//public/myperformance/exports/90/pdf/MyPerformance-2022-01.pdf' + url[1], '_self')

        // console.log("ccccccccccccccccccccc",goDetail1)
                //console.log("9999999999999999999",this.fileData.link)
      // let url = this.fileData.link.split('uploads')
      // console.log("ccccccccccccccccccccc",url)
      // console.log("ddddddddddddddddddddddd")
      // console.log("aaaaaaaaaaaaaaaaaa",url[0])
      // console.log("bbbbbbbbbbbbbbbb",url[1])
      //       console.log("mmmmmmmmmmmmmmmmmmmmmmmmm",url[0] + 'file/download?path=uploads' + url[1])
  // const response = await this.$http.get(this.appApiPath + "/testpdf", {
  //       responseType: "arraybuffer",
       });
      // const blob = new Blob([res.data], { type: "application/pdf" });
      // console.log(".......mmmmmmmmmmm.........",blob)
      // const link = document.createElement("a");
      // console.log(".......bbbbbbbbbbbbbbb.........",link)
      // link.href = "https://dev.ddgint.com/backend/storage/app//public/myperformance/exports/90/pdf/MyPerformance-2022-01.pdf"
      // link.download = "test.pdf";
      // link.click();
    //  })

      //  console.log("9999999999999999999",this.fileData.link)
    
         //   console.log("mmmmmmmmmmmmmmmmmmmmmmmmm",url[0] + 'file/download?path=public' + url[1])
//  console.log("9999999999999999999",this.fileData.link)
      // let url = this.fileData.link.split('uploads')
      // window.open(url[0] + 'file/download?path=uploads' + url[1], '_self')

      // sessionStorage.setItem('currentPage',JSON.stringify({tabbar: '/PerformanceDetail',title: 'PerformanceDetail'}))
      // this.$router.push({
      //   path: '/PerformanceDetail',
      //   query: {
      //     year: row.item.date.split('-')[0],
      //     month: row.item.date.split('-')[1]
      //   }
      // })
    },
    goDetail(row) {
      sessionStorage.setItem('currentPage',JSON.stringify({tabbar: '/PerformanceDetail',title: 'PerformanceDetail'}))
      this.$router.push({
        path: '/PerformanceDetail',
        query: {
          year: row.item.date.split('-')[0],
          month: row.item.date.split('-')[1]
        }
      })
    }
  },
  computed: {
    rows() {
      return this.list.length
    }
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
.slect-boxdiv{
      text-align: right !important;
    margin: 10px 70px;
}
.slect-boxdiv select{
      width: 250px;
    padding: 5px;
    border: 1px solid #c4c4c4;
}
</style>
