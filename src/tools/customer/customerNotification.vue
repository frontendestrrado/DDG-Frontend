<template>
  <div class="OrganizeChart from_content">
    <div class="OrganizeChart_info">
      <template>
        <div class="card card-block p-card">
          <h2 class="text-left mb-3 pl-3"  :style="{ color: '#7c655d' }" ><b>Notifications</b></h2>
        <div class="col-md-12">

          <div class="outBox1"  @click="readNotification(item.id)" :style="{background: item.read_at === ''? '#ccc' : '#fff'}"  center v-for="(item, index) in orderList">
            <div>
              <span class="custom-title">{{ item.created_at }}</span>
            </div>
            <div>
              <div class="custom-title" v-html="item.title"></div>
            </div>
          </div>

          <b-pagination v-model="currentPage" :total-rows="rows" :per-page="per_page" align="end"
            @input="changePage"></b-pagination>

        </div>
  </div>
      </template>
    </div>
    <!-- <h1>Loading...</h1> -->
  </div>
</template>
<script>
import { organizeChartApi, organizeChartApi1 } from "@/api/organize-chart";
import { getOrdersCustomerNot, readNot } from "@/api/tools";
import { customerNotification } from "@/api/organize-chart";

export default {
  data() {
    return {
      loadingShow: true,
      rows: 3,//頁數
      currentPage: 1,//當前頁
      per_page: 15,//每頁條數
      page:1,
      formatted: '',
      selected: '',
      formatted1: '',
      selected1: '',
      start_date: '',
      avatar:'',
      end_date: '',
      me: {},
      orderList:[],
      down_line: [],
      start_date: "",
      end_date: "",
      faqData: []
    };
  },
  mounted() {
    // this.getChildren();
    this.getFaq();
    this.getFaq1();
  },
  filters: {
    NumFormat(value) {
      if (!value) return '0'
      value = value.toFixed(2)
      let intPart = Math.trunc(value)// 获取整数部分
      return intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断
    }
  },
  methods: {
    readNotification(id){
      console.log(".....iidd....",id)
      readNot(id)
  .then((res) => {
    console.log(".......aaaaaaaaaaa.........", res)
    this.getFaq();
    console.log(res)
  })
  .catch((err) => {
    console.log(err.response);
  });
    },
    //获取组织图
    onContext(ctx) {
      // The date formatted in the locale, or the `label-no-date-selected` string
      this.formatted = ctx.selectedFormatted
      // The following will be an empty string until a valid date is entered
      this.selected = ctx.selectedYMD
    },
    onContext1(ctx) {
      // The date formatted in the locale, or the `label-no-date-selected` string
      this.formatted1 = ctx.selectedFormatted
      // The following will be an empty string until a valid date is entered
      this.selected1 = ctx.selectedYMD
    },
    search() {
      organizeChartApi1({
        start_date: this.start_date,
        end_date: this.end_date,
      })
        .then((res) => {

          console.log("....sss......", res)
          this.me = res.me
          this.down_line = res.first_level_advisor

        })
    },
    changeActTab(id) {
      console.log(".....id.....id....id....", "qaz" + id)

      // document.getElementById("edc" + id).style.display = "none";
      // console.log(".....length.....length....length....",length)
      //document.getElementById("qaz"+id).style.display = "block";

      // for (let i = 0; i < length; i++) {
      if (document.getElementById("qaz" + id).style.display === "block") {

        document.getElementById("qaz" + id).style.display = "none";
        document.getElementById("iop" + id).innerHTML = "+";
        document.getElementById("iop" + id).style.fontWeight = "bold";
      }
      else {

        document.getElementById("qaz" + id).style.display = "block";
        document.getElementById("iop" + id).innerHTML = "-";
        document.getElementById("iop" + id).style.fontWeight = "bold";
      }

      // console.log(".....length.....length....length....","qaz"+id+i)
      //}

    },
    getFaq1() {
      customerNotification().then(res => {
        console.log("++++++++++++++++++++getFaq+++++++++++++++++", res)
        // this.me = res.me
        this.avatar = res.avatar
        this.$store.commit('Changeabc', res.avatar)
        
        this.$store.commit('changecustomerNotificationCount', res.unread_count)

      })
    },
    getFaq() {
      getOrdersCustomerNot({

      //  product_id: this.product_id,

        //   order: "date_desc",
          page: this.currentPage
      })
        .then((res) => {
          console.log(".......555.........", res)
          this.orderList = res.data;
          
           this.per_page = res.meta.per_page
            this.rows = res.meta.total
          this.loadingShow = false
          console.log(res)
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    getChildren() {
      organizeChartApi().then(res => {
        console.log("aaaaaaaaa", res)
        this.me = res.me
        this.down_line = res.first_level_advisor
      })
    },
    getFaqsdv() {
      customerNotificationList().then(res => {
        console.log("++++++++++++++++++++getFaq+++++++++++++++++", res)
        // this.me = res.me
        this.faqData = res.notifications

      })
    },
  },
};
</script>
<style lang="scss" scoped>
.OrganizeChart_info {
  .first .van-cell--center:first-of-type {
    border-bottom: 5px solid black;
  }
}
</style>
<style scoped>
h1 {
  font-size: 50px;
}

/deep/ .van-cell__title {
  width: 30%;
  flex: none;
  text-align: left;
}

/deep/ .van-cell__value {
  color: #323233;
}

/deep/ [class*=van-hairline]::after {
  border: 0 solid #fff !important;
  content: none;
}

.OrganizeChart {
  /* width: 100%; */
}

.outBox {
  text-align: left;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  line-height: 30px;
  margin-bottom: 15px;

}

.outBox1 {
  text-align: left;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  line-height: 30px;
  margin-bottom: 15px;
  width: 100%;
  /* float: right; */
}

.OrganizeChart_title {
  font-weight: 500;
  text-align: left;
  background-color: #ffc80b;
  line-height: 35px;
  text-indent: 20px;
}

.OrganizeChart_info .ad_icon {
  width: 20vw;
  height: 20vw;
  /*background-color: #CBCDCE;*/
  margin: 20px auto 10px;
  border-radius: 10px;
}

.inputBox {
  width: 90%;
  margin: 30px auto;
}

.van-cell__title {
  width: 50%;
}

.search {
  background: #7b655d;
  border: 1px solid #7b655d;
  margin-top: 12px;
}

.right-icon {
  display: flex;
  flex-direction: column;
  margin-top: 12px;
}

.right-icon i {
  margin-top: 10px;
  cursor: pointer;
}

.card {
  border: none;
  position: relative;
}

.card-block {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.card {
  background: #fff;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  border-radius: 8px;
  margin-bottom: 30px;
  border: none;
  -webkit-box-shadow: 0px 16px 40px 0px #0000000a;
  -moz-box-shadow: 0px 16px 40px 0px #0000000A;
  -ms-box-shadow: 0px 16px 40px 0px #0000000A;
  -o-box-shadow: 0px 16px 40px 0px #0000000A;
  box-shadow: 0px 16px 40px 0px #0000000a;
}

.p-card {
  padding: 12px;
}
/deep/ .page-item.active .page-link {
    z-index: 3;
    color: #fff;
    background-color: #bc9c85;
    border-color: #bc9c85;
}
</style>

