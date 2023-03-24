<template>
  <div class="index-text">
    <div class="index-text-div grybg">
     <div class="col-md-12 pt-5 pb-5">
      <div class="row">
      
      
      <div class="col-md-3" v-on:click="OrganizeChartM">
        <div class="countr">
          {{total_sales_this_month}}
        <div class="text">MTD Personal Sales</div>
        <div>{{total_sales_this_month_count}}</div>
        <div class="text">and Cases</div>
      </div>
        <!-- <div class="titl" >MTD Personal Sales</div> -->
      </div>


      <div class="col-md-3" v-on:click="OrganizeChartY">
        <div class="countr">
        {{total_sales}}
        <div class="text">YTD Personal Sales</div>
        <div>{{total_sales_count}}</div>
        <div class="text">and Cases</div>
      </div>
        <!-- <div class="titl">YTD Personal Sales</div> -->
      </div>

      <div class="col-md-3" v-on:click="OrganizeChartM">
        <div class="countr">
        {{organziataional_sales_this_month}}
        <div class="text">MTD Organization Sales</div>
        <div>{{organziataional_sales_this_month_count}}</div>
        <div class="text">and Cases</div>
      </div>
        <!-- <div class="titl">YTD Personal Sales</div> -->
      </div>

      <div class="col-md-3" v-on:click="OrganizeChartY">
        <div class="countr">
        
        {{Number(organziataional_sales_this_year).toLocaleString()}}
        <div class="text">YTD Organization Sales</div>
        <div>{{organziataional_sales_this_year_count}}</div>
        <div class="text">and Cases</div>
      </div>
        <!-- <div class="titl">YTD Personal Sales</div> -->
      </div>

      <div class="col-md-3">
        <div class="countr">
        {{active_advisors_this_month}}
        <div class="text">MTD Active Advisor</div>
      </div>
        <!-- <div class="titl">YTD Personal Sales</div> -->
      </div>



      <!-- <div class="col-md-3"><div class="countr">{{commission_this_month}}</div>
        <div class="titl">Total Commission this Month</div>
      </div>
      <div class="col-md-3"><div class="countr">{{total_commission}}</div>
        <div class="titl">Total Commission Received</div>
      </div> -->
    </div>
    </div>
    </div>
  </div>
</template>
<script>
import { getdashboard } from "../../api/announcement.js";
export default {
  name: "textMode",
  data() {
    return {     
      commission_this_month:'',
      total_commission:'',
      total_sales:'',
      total_sales_count:'',
      total_sales_this_month:'',
      total_sales_this_month_count:'',
      organziataional_sales_this_month:'',
      organziataional_sales_this_month_count:'',
      organziataional_sales_this_year:'',
      organziataional_sales_this_year_count:'',
      active_advisors_this_month:''
         }
  },
  props: {
    textData: {
      type: Object,
    },
  },
  mounted() {
    this.getdashboard() 
    
    this.$store.commit('ChangeDateFlag', false)   
  },
  methods: {
    getdashboard() {
      getdashboard().then(res => {
        this.commission_this_month = res.commission_this_month
        this.total_commission = res.total_commission
        this.total_sales = res.total_sales
        this.total_sales_count = res.total_sales_count
        this.total_sales_this_month = res.total_sales_this_month
        this.total_sales_this_month_count = res.total_sales_this_month_count
        this.organziataional_sales_this_month = res.organziataional_sales_this_month
        this.organziataional_sales_this_month_count = res.organziataional_sales_this_month_count
        this.organziataional_sales_this_year = res.organziataional_sales_this_year
        this.organziataional_sales_this_year_count = res.organziataional_sales_this_year_count
        this.active_advisors_this_month = res.active_advisors_this_month
        console.log("---888888888----", res)
        // console.log(this.tableList)
      })
    },
    //this.$store.commit('ChangecampanyIndividualName', data.name)
    OrganizeChartY() {
           // targetId = event.currentTarget.id;
           // returns 'foo'
           this.$store.commit('ChangeDateFlag', true)
          // sessionStorage.setItem('ChangeDateFlag', false)
           this.$router.push("/OrganizeChart");
          // this.$store.commit('ChangeDateFlag', true)
          
           
       this.$store.commit('changePage',{tabbar: '/OrganizeChart', title: 'Organizational Chart'});
                    },
                    OrganizeChartM() {
           // targetId = event.currentTarget.id;
           // returns 'foo'
           this.$store.commit('ChangeDateFlag', false)
        //   sessionStorage.setItem('ChangeDateFlag', true)
           this.$router.push("/OrganizeChart");
           //this.$store.commit('ChangeDateFlag', false)
           
           
       this.$store.commit('changePage',{tabbar: '/OrganizeChart', title: 'Organizational Chart'});
                    },
  },
  computed: {
    showClass() {
      if (this.textData.layout == 1) {
        return 24;
      } else if (this.textData.layout == 2) {
        return this.$store.state.isPC ? 12 : 24;
      } else if (this.textData.layout == 3) {
        return this.$store.state.isPC ? 8 : 24;
      } else if (this.textData.layout == 4) {
        return this.$store.state.isPC ? 6 : 12;
      } else if (this.textData.layout == 5) {
        return this.$store.state.isPC ? 5 : 12;
      }
    },
  },
};
</script>
<style scoped>
/* 文字模块 */
/deep/ .el-col-5 {
  width: 20%;
}
.columnboxAbout {
  width: 100%;
}
.textContent > div {
  overflow: hidden;
}
.countr{
  background: #af998f;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 15px;
  padding: 20px 10px;
  margin-bottom: 1.1rem;
  line-height: 28px;
  min-height: 160px;
  max-height: 160px;
}
.grybg{
  background: #e8e5e8;
}
.titl{
  font-weight: 600;
}
.text{
  font-size:64%;
}
</style>
