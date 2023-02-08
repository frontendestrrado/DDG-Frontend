<template>
  


  <div class="OrganizeChart from_content">
    <div class="row mb-3">
      <div class="col-md-3"></div>
    <div class="w-100 pt-3">
        <div class="scroller scroller-left float-left mt-2"><i class="fa fa-chevron-left"></i></div>
        <div class="scroller scroller-right float-right mt-2"><i class="fa fa-chevron-right"></i></div>
        <div class="wrapper">
          <nav class="nav nav-tabs list mt-2 align" id="myTab" role="tablist">



            <a class="nav-item nav-link active" @click="changeActTab1(item.product_id)" :id="'qaz' + item.product_id"
              data-toggle="tab" role="tab" v-for="item in year3" aria-controls="public" aria-expanded="true">
              {{ item.product_name }}</a>
              <a class="nav-item nav-link" @click="changeActTab1(item.product_id)" :id="'qaz' + item.product_id"
              data-toggle="tab" role="tab" v-for="item in year2" aria-controls="public" aria-expanded="true">
              {{ item.product_name }}</a>




              
          </nav>
        </div>

      </div>
      <div class="col-md-3"></div>
    </div>

    <div class="col-md-3"></div>

      <div class="col-md-3"></div>
    <div class="OrganizeChart_info">
      <template>
        <div class="outBox1" center v-for="(item, index) in faqData">
          <div @click="changeActTab(item.id)">
            <span class="custom-title" :id="'iop' + item.id"><b>+ </b></span>
            <span
              class="custom-title"><b>{{ item.question }}</b></span>
          </div>
          <div :style="{ display: 'none' }" :id="'qaz' + item.id">
            <div class="custom-title" v-html="'Ans : '+ item.answer"></div>
          </div>
        </div>
      </template>
    </div>
    <!-- <h1>Loading...</h1> -->
  </div>
</template>
<script>
import { organizeChartApi, organizeChartApi1, faqApi } from "../api/organize-chart";
import { getOrders ,productList} from "@/api/tools";
export default {
  data() {
    return {
      year:[],
      year2: [],
      year3: [],
      product_id: '2',
      formatted: '',
      selected: '',
      formatted1: '',
      selected1: '',
      start_date: '',
      end_date: '',
      me: {},
      down_line: [],
      start_date: "",
      end_date: "",
      faqData: []
    };
  },
  mounted() {
    this.getChildren();
    this.productList();
    this.getFaq();
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
    changeActTab1(id) {
      console.log(".....id.....id....id....", "qaz" + id)
      this.product_id = id
      
      for (let i = 0; i < this.year.length; i++) {
            document.getElementById("qaz" + this.year[i].product_id).classList.remove("active");
 console.log("...zzz...z...z.z..z.z.z..z...",this.year[i].product_id)
}
document.getElementById("qaz" + id).classList.add("active")
      this.getFaq()
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
        if(document.getElementById("qaz"+id).style.display === "block"){
      
      document.getElementById("qaz" + id).style.display = "none";
      document.getElementById("iop" + id).innerHTML="+";
      document.getElementById("iop" + id).style.fontWeight="bold";
        }
        else{
      
      document.getElementById("qaz" + id).style.display = "block";
      document.getElementById("iop" + id).innerHTML="-";
      document.getElementById("iop" + id).style.fontWeight="bold";
        }

      // console.log(".....length.....length....length....","qaz"+id+i)
      //}

    },
    productList() {
      productList()
        .then((res) => {
          console.log(".......productList.........", res.product)
          this.year = res.product;
          // this.year2 = res.product.splice(0,1);
          // this.year3 = res.product.splice(1,3);
     //    this.year2 = res.product.shift();
     var a =[]
     for (let i = 1; i < res.product.length; i++) {
     // alert(i)
      this.year2.push(res.product[i])
     }
     var b =[]
     for (let j = 0; j < 1; j++) {
    //  alert(j)
      this.year3.push(res.product[j])
     }
     console.log("....rrrrrr..a.",a)
     console.log("....rrrrrr..b.",b)
         console.log("...A...",this.year)
         console.log("...B...",this.year2)
         console.log("...C...",this.year3)
          this.product_id=res.product[0].product_id
       //   if(res.product[0].product_id)
          
          this.getFaq();
       //   document.getElementById("qaz" + res.product[0].product_id).classList.add("active")

          //   var element = document.getElementById("qaz"+res.product[0].product_id);
          // document.getElementById("qaz" + res.product[0].product_id).classList.add(" active");
         // this.changeActTab(this.product_id)
          
        
         // document.getElementById("qaz" + res.product[0].product_id).classList.add("active")
        })
        .catch((err) => {
          console.log(err.response);
        });
//this.abc(this.product_id);
        
    },
    getChildren() {
      organizeChartApi().then(res => {
        console.log("aaaaaaaaa", res)
        this.me = res.me
        this.down_line = res.first_level_advisor
      })
    },
    getFaq() {
      // faqApi().
      faqApi({

product_id: this.product_id,

//   order: "date_desc",
  // page: this.currentPage
})
      .then(res => {
        console.log("+++++++++++++++++++++++++++++++++++++", res, this.product_id)
        // this.me = res.me
        this.faqData = res
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
  width: 98%;
  float: right;
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

h3 {
    font-size: 1.5em;
    color: #fff !important;
    font-weight: 500;
    line-height: 1.5;
}
h6{
  font-size: 1.3em;
  color: #7c655d;
  margin-top: 5px;
}
.card-stretch h2{
  color: #7c655d;
}
.van-row {
  margin: 20px 0;
}

.order-status {
  >div {
    >span:first-of-type {
      color: #969799;
    }
  }
}

/deep/ .van-field__left-icon {
  line-height: 40px;
}

/deep/ .van-cell__title {
  text-align: left;
}

.OrderList {
  .NotFilledCol {
    color: red;
  }

  .FilledCol {
    color: #03BF03;
  }

  .btn-rightalign {
    justify-content: right;
  }

  .btn-reset {
    background-color: transparent;
    border-radius: 10px;
    color: red;
    border: 1px solid #6c757d;
  }

  .btn-search {
    background-color: #6c757d;
    color: #fff;
    border-radius: 10px;
    border: 1px solid #6c757d;
  }

  .slect-boxdiv {
    // text-align: right !important;
    //margin: 0px 15px 0px 0px
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
    height: 45px;
  }

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

  .aigp {
    background-color: #08a6e3;
  }

  .aigp1 {
    background-color: #cd12c7;
  }

  .aigp2 {
    background-color: #4c201c;
  }

  .orderList {
    border: 1px solid #eef0f5;
    border-radius: 12px;
    padding: 15px;
  }

  .orderList1 {
    padding-bottom: 6px;
  }

  .orderList2 {
    padding-bottom: 6px;
    margin-top: 6px;
  }

  .countr {
    background: #af998f;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 600;
    border-radius: 15px;
    padding: 20px 10px;
    margin-bottom: 1.1rem;
  }
}


.p-card {
  padding: 12px;
}

.profile-card {
  background: #7c655d;
  padding: 30px 0 65px 0;
  position: relative;
  overflow: hidden;
}

.profile-card:before {
  content: '';
  position: absolute;
  right: -63px;
  top: -3px;
  width: 120px;
  height: 120px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(36deg);
}

.profile-card:after {
  content: '';
  position: absolute;
  left: -62px;
  bottom: 9px;
  width: 126px;
  height: 125px;
  border-radius: 35px;
  background: #dbdfe8;
  transform: rotate(28deg);
}

.profile-box {
  background: #fafbfe;
  position: relative;
  padding-bottom: 320px;
  -webkit-border-radius: 0 0 8px 8px;
  -moz-border-radius: 0 0 8px 8px;
  -ms-border-radius: 0 0 8px 8px;
  -o-border-radius: 0 0 8px 8px;
  border-radius: 0 0 8px 8px;
}

.pro-content {
  margin-top: -55px;
  position: absolute;
  background: #fff;
  padding: 20px;
  left: 20px;
  right: 20px;
  -webkit-box-shadow: 0px 2px 25px 0px rgba(45, 69, 95, 0.06);
  -moz-box-shadow: 0px 2px 25px 0px rgba(45, 69, 95, 0.06);
  -ms-box-shadow: 0px 2px 25px 0px rgba(45, 69, 95, 0.06);
  -o-box-shadow: 0px 2px 25px 0px rgba(45, 69, 95, 0.06);
  box-shadow: 0px 2px 25px 0px rgba(45, 69, 95, 0.06);
}

.p-icon {
  width: 45px;
  height: 45px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  border-radius: 8px;
  background: #dff6f8;
  line-height: 45px;
  color: #05bbc9;
  text-align: center;
  font-size: 26px;
}

h2 {
  // font-family: "Poppins", sans-serif;
  font-weight: 500;
  margin: 0px;
  line-height: 1.5;
  color: #303030;
  font-size: 2.3em;
}

.card-block.card-height {
  height: calc(100% - 30px);
}

.card-block.card-stretch {
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
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

.rounded {
  border-radius: 8px !important;
}

.mny span {
  display: block;
  bottom: -25px;
  position: relative;
}

.wrapper {
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  padding: 5px;
  height: 50px;
}

.list {
  position: absolute;
  left: 0px;
  top: 0px;
  min-width: 3500px;
  margin-top: 0px;
}

.list li {
  display: table-cell;
  position: relative;
  text-align: center;
  cursor: grab;
  cursor: -webkit-grab;
  color: #efefef;
  vertical-align: middle;
}

.scroller {
  text-align: center;
  cursor: pointer;
  display: none;
  padding: 7px;
  padding-top: 13px;
  white-space: no-wrap;
  vertical-align: middle;
  background-color: #fff;
}

.wrapper .nav-tabs .nav-link.active {
  padding: 15px 90px;
  background: #7c655d;
  color: #fff;
  border-radius: 12px;
}

.wrapper .nav-tabs .nav-link {
  padding: 10px 90px;
  background: #fff;
  color: #333;
}

.wrapper .nav-tabs {
  border: 0;
}
.brdr{
  border: 1px solid #bc9c85;
  border-radius: 10px;
  padding: 18px 10px;
  margin-bottom: 1.5rem;
}
.drkfnt{
  color: #7c655d;
  font-size: 16px;
  font-weight: 600;
}
.lgtbtn{
  background: #bc9c85;
  border: 0;
  padding: 5px 15px;
  border-radius: 4px;
  color: #fff;
}
/deep/ .page-item.active .page-link {
    z-index: 3;
    color: #fff;
    background-color: #bc9c85;
    border-color: #bc9c85;
}
.align{
  margin-left: 39px;
}
</style>

