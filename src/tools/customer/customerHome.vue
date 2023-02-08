<template>
  <!--  my order頁面-->
  <div class="OrderList bodybox">

    <div class="row">
      <div class="col-lg-4">
        <div class="card card-block p-card">
          <div class="profile-box">
            <div class="profile-card rounded">    
              <!-- <img :src="this.avatar"  alt="profile-bg" :style="{ width: '80px' }"
                class="avatar-100 rounded d-block mx-auto img-fluid mb-3"> -->
                <van-uploader v-model="avatar_image_id" :after-read="afterRead" accept="*"
            :max-count="1" />
              <h3 class="font-600 text-white text-center mb-0">{{ details.name }}</h3>
              <!-- <p class="text-white text-center mb-5"></p> -->
            </div>
            <div class="pro-content rounded">
              <div class="text-left mb-3">

                <p class="mb-0 eml">ROC / NRIC /PASSPORT No</p>
                <h6>{{ details.nric }}</h6>
              </div>
              <div class="text-left mb-3">

                <p class="mb-0 eml">Residential / Office Address</p>
                <h6>{{ details.address }}</h6>
              </div>
              <div class="text-left mb-3">

                <p class="mb-0 eml">Mobile No</p>
                <h6>{{ details.phone }}</h6>
              </div>
              <div class="text-left mb-3">

                <p class="mb-0 eml">Email ID</p>
                <h6>{{ details.email }}</h6>
              </div>
              <div class="text-left mb-3">

                <p class="mb-0 eml">ADVISOR NAME</p>
                <h6>{{ details.advisor }}</h6>
              </div>


            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-8 mny">
        <div class="row">
          <div class="col-md-6">
            <div class="card card-block card-stretch card-height rounded">
              <div class="card-body">
                <div class="text-center">
                  <div class="d-flex justify-content-center">
                    <h2>{{ details.total_order_amount_aigt }}</h2> <span>MYR</span>
                  </div>
                  <p class="mb-0">Total Order Amount AIGT</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card card-block card-stretch card-height rounded">
              <div class="card-body">
                <div class="text-center">
                  <h2>{{ details.dividend_aigt }}%</h2>
                  <p class="mb-0">AIGT Dividend %</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="card card-block card-stretch card-height rounded">
              <div class="card-body">
                <div class="text-center">
                  <div class="d-flex justify-content-center">
                    <h2>{{ details.total_order_amount_gep }}</h2> <span>MYR</span>
                  </div>
                  <p class="mb-0">Total Order Amount GEP</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card card-block card-stretch card-height rounded">
              <div class="card-body">
                <div class="text-center">
                  <h2>{{ details.dividend_gep }}%</h2>
                  <p class="mb-0">GEP Dividend %</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="card card-block card-stretch card-height rounded">
              <div class="card-body">
                <div class="text-center">
                  <div class="d-flex justify-content-center">
                    <h2>{{ details.total_order_amount_gep2 }}</h2> <span>MYR</span>
                  </div>
                  <p class="mb-0">Total Order Amount GEP2</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card card-block card-stretch card-height rounded">
              <div class="card-body">
                <div class="text-center">
                  <h2>{{ details.dividend_gep2 }}%</h2>
                  <p class="mb-0">GEP 2 Dividend %</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="card card-block card-stretch card-height rounded">
              <div class="card-body">
                <div class="text-center">
                  <h2>{{ details.total_orders }}</h2>
                  <p class="mb-0">No. of Orders</p>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="col-md-6">
                     <div class="card card-block card-stretch card-height rounded">
                        <div class="card-body">
                           <div class="text-center">
                              <h2>-108.56K</h2>
                              <p class="mb-0">Lorem ipsum dolor sit amet</p>
                           </div>
                        </div>
                     </div>
                  </div> -->
        </div>
      </div>
    </div>



    <van-loading v-if="loadingShow" />
    <div class="card card-block p-card">
      <div class="col-md-12">
    <div class="row mb-3">
      <div class="col-md-3"></div>


      <div class="w-100 pt-3">
        <div class="scroller scroller-left float-left mt-2"><i class="fa fa-chevron-left"></i></div>
        <div class="scroller scroller-right float-right mt-2"><i class="fa fa-chevron-right"></i></div>
        <div class="wrapper">
          <nav class="nav nav-tabs list mt-2" id="myTab" role="tablist">



            <a class="nav-item nav-link active" @click="changeActTab(item.product_id)" :id="'qaz' + item.product_id"
              data-toggle="tab" role="tab" v-for="item in year3" aria-controls="public" aria-expanded="true">
              {{ item.product_name }}</a>
              <a class="nav-item nav-link" @click="changeActTab(item.product_id)" :id="'qaz' + item.product_id"
              data-toggle="tab" role="tab" v-for="item in year2" aria-controls="public" aria-expanded="true">
              {{ item.product_name }}</a>




              
          </nav>
        </div>

      </div>
      <!-- <div class="col-md-3"   v-for="item in year" >
          <van-button @click="announcementsShow" :id="'annButId'"
            :style="{ border: '1px solid #a4aeb9', background: '#1989fa' }" squre block type="info"
            class="announcements">
          {{item.product_name}}
          </van-button>
        </div> -->





      <div class="col-md-3"></div>
    </div>


    <div class="row brdr" v-for="(item, inx) in orderList">
      <div class="col text-left">

        Created Date
        <div class="mt-3 drkfnt">{{ item.created_date }}</div>
      </div>
      <div class="col text-left">

        Order Id
        <div class="mt-3 drkfnt">{{ item.order_id }}</div>
      </div>
      <div class="col text-left">

        Amount
        <div class="mt-3 drkfnt">{{ item.amount }}</div>
      </div>
      <div class="col text-left">

        Approval Date
        <div class="mt-3 drkfnt">{{ item.approved_date }}</div>
      </div>
      <div class="col text-left">

        Acknowledgements
        <div class="mt-3 drkfnt">{{item.fund_received_status === "Fund Received"?"Fund Received":""}}</div>
        <div class="mt-3 drkfnt">{{item.trust_setup_status === "Trust Setup"?"Trust Setup":""}}</div>
      </div>
      <div class="col">

        Action
        <div class="mt-3" v-if="item.fund_received_status === 'Fund Received'">
          <button class="lgtbtn" @click="download(item.fund_received_file)">Download</button>
        </div>
        <div class="mt-3" v-if="item.trust_setup_status === 'Trust Setup'">
          
          <button class="lgtbtn" @click="download(item.trust_setup_file)">Download</button>
        </div>
      </div>

    </div>

   

    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="per_page" align="end"
      @input="changePage"></b-pagination>
    </div>
    </div>
  </div>
</template>

<script>
import HeaderCustomer from "../../tools/customer/HeaderCustomer.vue";
import { customerNotification } from "@/api/organize-chart";
import { getOrdersCustomer, productListCustomer, customerDetails } from "@/api/tools";
import { deleteOrder } from '@/api/order'
import { Dialog } from 'vant';
export default {
  data() {
    return {
      avatar_image_id:[],
      formatted: '',
      selected: '',
      formatted1: '',
      selected1: '',
      // year: [
      //     { value: '1', text: 'AIGP' },
      //     { value: '2', text: 'GEP'  },
      //     { value: '3', text: 'GTI'  }
      //   ],
      year: [],
      year2: [],
      year3: [],
      year1: [
        { value: '0', text: 'Pending (Not yet submitted)' },
        { value: '1', text: 'Complete' },
        { value: '2', text: 'Approved' },
        { value: '3', text: 'Not Approved' },
        { value: '4', text: 'Canceled' }
      ],
      item: {
        value: '',
        text: ''
      },
      orderList: [],
      details: [],
      searchVal: '',
      status: '',
      start_date: '',
      end_date: '',
      price_from: '',
      order: '',
      price_to: '',
      avatar:'',
      product_id: '2',
      loadingShow: true,
      rows: 3,//頁數
      currentPage: 1,//當前頁
      per_page: 15,//每頁條數
      page:1
    };
  },
  mounted() {
    this.$store.commit('changeIsOverseaSignature', false)
    this.getFaq();
    console.log("......sssss...",sessionStorage.getItem('userType'))
   
    
    this.productList();
  
    this.customerDetails();
    
    
    
  },
  computed: {
  },
  methods: {
    download(file) {

      window.open(file, '_self')
    },
    changeActTab(id) {
      console.log(".....id.....id....id....", "qaz" + id)
      this.product_id = id
      
      for (let i = 0; i < this.year.length; i++) {
            document.getElementById("qaz" + this.year[i].product_id).classList.remove("active");
 console.log("...zzz...z...z.z..z.z.z..z...",this.year[i].product_id)
}
document.getElementById("qaz" + id).classList.add("active")
      this.getOrdersCustomer()
    },
    getFaq() {
      customerNotification().then(res => {
        console.log("++++++++++++++++++++getFaq+++++++++++++++++", res)
        // this.me = res.me
        this.avatar = res.avatar
        this.avatar_image_id.push({ url: res.avatar })
        this.$store.commit('Changeabc', res.avatar)
        
        this.$store.commit('changecustomerNotificationCount', res.unread_count)

      })
    },
    afterRead(file) {
      console.log(file, "頭像");
      let formData = new FormData();
      formData.append("image", file.file); // 要提交给后台的文件
      formData.append("type", "avatar");
      console.log(formData);
      this.$axios({
        method: "POST",
        url: "/api/v1/settlor/images",
        headers: {
          Authorization: sessionStorage.token_type + sessionStorage.token,
        },
        data: formData,
      })
        .then((res) => {
          console.log(res.path, "...........path.......");
          console.log(res, ".........res id ............");
          if (res.id) {
            this.$toast.success("Success");
            this.$store.commit('Changeabc',res.path)
          //  sessionStorage.setItem("avatar", res.path);
          }
       //   this.patchEdit("avatar_image_id", res.id);
        })
        .catch((err) => {
          console.log(err, "頭像上傳異常");
          this.$toast({
            type: "fail",
            message: "error",
          });
        });
    },
    reset() {
      this.searchVal = '',
        this.status = '',
        this.start_date = '',
        this.end_date = '',
        this.price_from = '',
        this.price_to = '',
        this.order = '',
        this.product_id = '',
        this.currentPage = 1

      this.getOrders()
    },
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
    showDialog(message) {
      Dialog.alert({
        message: message,
        confirmButtonText: 'Close'
      }).then(() => {
        // on close
      });
    },
    changePage() {
      this.getOrdersCustomer()
    },

    customerDetails() {
      customerDetails()
        .then((res) => {
          console.log(".......customerDetails.........", res)
          this.details = res
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    productList() {
      productListCustomer()
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
          
          this.getOrdersCustomer();
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
    abc(x) {
      document.getElementById("qaz" + x).classList.add("active")
    },
    getOrdersCustomer() {
      getOrdersCustomer({

        product_id: this.product_id,

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
    // onSearch() {
    //   this.order = "date_desc";
    //   this.getOrders()
    // },
    // clearSearch() {
    //   this.order = '';
    //   this.getOrders()
    // },
    //繼續填寫訂單
    //   toFill(item) {
    //     console.log(".......toFill.......item..",item)
    //           console.log(".......toFill.......product_id..",item.product_id)
    //           if(item.product_id === 1){
    //             this.$store.commit('changePage', {
    //       tabbar: '/OrderDetail',
    //       title: 'OrderDetail',
    //     });
    //     sessionStorage.setItem('orderId',JSON.stringify(item.id))
    //     sessionStorage.setItem('orderStatus',item.status)
    //     this.$router.push({path: '/OrderDetail', query: {id: item.id}});
    //           }


    //           else if (item.product_id === 2){
    //  this.$store.commit('changePage', {
    //       tabbar: '/OrderDetailGep',
    //       title: 'OrderDetailGep',
    //     });
    //     sessionStorage.setItem('orderId',JSON.stringify(item.id))
    //     sessionStorage.setItem('orderStatus',item.status)
    //     this.$router.push({path: '/OrderDetailGep', query: {id: item.id}});

    //           }

    //           else{
    //  this.$store.commit('changePage', {
    //       tabbar: '/OrderDetailGep2',
    //       title: 'OrderDetailGep2',
    //     });
    //     sessionStorage.setItem('orderId',JSON.stringify(item.id))
    //     sessionStorage.setItem('orderStatus',item.status)
    //     this.$router.push({path: '/OrderDetailGep2', query: {id: item.id}});

    //           }




    //   },
    //刪除未提交訂單
    // del(id) {
    //   deleteOrder(id).then(res => {
    //    console.log("---res------",res)
    //       console.log("---id------",id)
    //     this.$toast({
    //       type: "success",
    //       message: res.message,
    //     });
    //      this.getOrders()
    //   })
    // }
  },
};
</script>
  
<style scoped lang="scss">
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
</style>
  