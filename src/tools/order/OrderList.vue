<template>
<!--  my order頁面-->
  <div class="OrderList bodybox">
   <div class="row">
    <div class="col-md-12">
       <van-search
      v-model="searchVal"
      placeholder="Customer Name / Order Number"
      @search="onSearch"
      @clear="clearSearch"
    />
    </div>
   </div>


  <div class="row bodybox1">
     <div class="col-md-6">
       <van-loading v-if="loadingShow" />
 
    <div class="van-search block">
    <div id="app" class="slect-boxdiv">
  <select @change="onSearch" v-model="product_id" >
         <option value="">All Products</option>
         <option  v-for="item in year" :value="item.product_id">{{item.product_name}}</option>
     </select>
       </div>
       </div>
     </div>
    <div class="col-md-6">
      <van-loading v-if="loadingShow" />
       <div class="van-search block1">
      <div id="app" class="slect-boxdiv">
  <select  @change="onSearch" v-model="status" >
         <option value="">All Orders</option>
         <option  v-for="item in year1" :value="item.value">{{item.text}}</option>
     </select>
       </div>
    </div>
    </div>
  </div>
    <div class="row bodybox1">
     <div class="col-md-6">
       <van-loading v-if="loadingShow" />
       <div>
    <b-input-group class="mb-3 van-search pl-0">
      <b-form-input
        id="example-input"
        v-model="start_date"
        type="text"
    
        placeholder="From Date"
        autocomplete="off"
      ></b-form-input>
      <b-input-group-append>
        <b-form-datepicker
          v-model="start_date"
          button-only
          right
   
          locale="en-US"
          aria-controls="example-input"
          @context="onContext"
        ></b-form-datepicker>
      </b-input-group-append>
    </b-input-group>
  </div>
     <!-- <van-search
      v-model="start_date"
      placeholder="dd-mm-yyyy"
      @search="onSearch"
      @clear="clearSearch"
    /> -->
     </div>
      <div class="col-md-6">
        <van-loading v-if="loadingShow" />
          <div>
    <b-input-group class="mb-3 van-search pl-3 pr-0">
      <b-form-input
        id="example-input"
        v-model="end_date"
        type="text"
    
        placeholder="To Date"
        autocomplete="off"
      ></b-form-input>
      <b-input-group-append>
        <b-form-datepicker
          v-model="end_date"
          button-only
          right
   
          locale="en-US"
          aria-controls="example-input"
          @context="onContext1"
        ></b-form-datepicker>
      </b-input-group-append>
    </b-input-group>
  </div>
     <!-- <van-search
      v-model="value"
      placeholder="dd-mm-yyyy"
      @search="onSearch"
      @clear="clearSearch"
    /> -->
      </div>
    </div>
       <div class="row">
        <div class="col-md-6">
               <van-loading v-if="loadingShow" />
     <van-search
      v-model="price_from"
      placeholder="Order Amount From"
      @search="onSearch"
      @clear="clearSearch"
    />
        </div>
       <div class="col-md-6">
         <van-loading v-if="loadingShow" />
     <van-search
      v-model="price_to"
      placeholder="Order Amount To"
      @search="onSearch"
      @clear="clearSearch"
    />
       </div>
       </div>
       <div class="row bodybox1">
     <div class="col-md-6">
       <van-loading v-if="loadingShow" />
 
    <div class="van-search block">
    <div id="app" class="slect-boxdiv">
      <select v-model="order" >
         <option  v-for="item in year4" :value="item.value">{{item.text}}</option>
     </select>
       </div>
       </div>
     </div>

  </div>
       
   <!-- <div class="row bodybox1">
    <div class="col-md-6">
      <van-loading v-if="loadingShow" />
       <div class="van-search block1">
      <div id="app" class="slect-boxdiv">
  <select v-model="order" >
         <option  v-for="item in year4" :value="item.value">{{item.text}}</option>
     </select>
       </div>
    </div>
    </div>
  </div> -->
        <div class="row col-md-12 btn-rightalign">

          <div class="col-md-2">
        <van-button  round block type="info"   @click="onExport"   class="btn-export">
        Export
      </van-button>
       </div>

      <div class="col-md-2">
         <van-button  round block type="info" @click="reset"   class="btn-reset">
        Reset
        
       </van-button>
      </div>
       <div class="col-md-2">
        <van-button  round block type="info"   @click="onSearch"   class="btn-search">
        Search
      </van-button>
       </div>
      
    </div>
    <van-loading v-if="loadingShow" />

    <van-row class="orderList" v-for="(item,inx) in orderList.data" :key="inx"  type="flex" justify="space-between" align="center">
      <van-col span="8" align="start">
        <div class="orderList1">
          <van-tag type="success" size="large">{{item.settlor_name}}</van-tag>
        </div>
        <span>{{item.no}}</span>
         <div class="orderList2">
          <van-tag class="aigp" type="danger" v-if="item.product_id===1" size="large">{{item.product}}</van-tag>
          <van-tag  class="aigp1" type="danger" v-if="item.product_id===2" size="large">{{item.product}}</van-tag>
          <van-tag  class="aigp2" type="danger" v-if="item.product_id===4" size="large">{{item.product}}</van-tag>
          <van-tag  class="aigp3" type="danger" v-if="item.product_id===5" size="large">{{item.product}}</van-tag>
        
        </div>
        <div class="orderList2">
       
          <!-- moment(new Date()).format('YYYY-MM-DD'), -->
          <van-tag type="success" plain  size="large">Effective Date : {{item.effective_date}}</van-tag>
        </div>
      <div class="orderList2">
          <van-tag type="success" plain  size="large">Maturity Date :{{item.maturity_date}}</van-tag>
        </div>
        
        <div>
          <van-tag type="danger" v-if="item.status===0" size="large">Not Yet Submit</van-tag>
          <van-tag type="success" plain v-if="item.status===1" size="large">Waiting For Approval</van-tag>
          <van-tag type="success" v-if="item.status===2" size="large">Approved</van-tag>
          <van-tag type="danger" v-if="item.status===3" size="large">Not Approved</van-tag>
          <van-tag type="danger" v-if="item.status===4" size="large">Canceled</van-tag>
          <a class="FilledCol reason" @click="showDialog(item.reject_reason)" v-show="item.status == 3"> Reason? </a>
        </div>
      </van-col>
      <van-col span="8" align="end" class="order-status">
        <div v-if="item.product_id==4" 
        @click="
  $store.commit('changePage', { tabbar: '/CustomerApplicationGep2', title: '1/3 Subscription form' });
    
$router.push({
  path: '/CustomerApplicationGep2',
  query: { orderId: item.id, isFilled: item.gepTwoSubscriptionForm, status: item.status },
});
        "
        >
          <span class="txtFund1"> Subscription form </span>
          <span class="NotFilledCol " v-if="item.gepTwoSubscriptionForm==0"> (Not Filled) </span>
          <span class="FilledCol " v-else> (Filled) </span>
        </div>
        <div v-if="item.product_id==4" 
        @click="
  $store.commit('changePage', { tabbar: '/KYCGep2', title: '2/3 PDPA' });
$router.push({
  path: '/KYCGep2',
  query: { orderId: item.id, isFilled: item.GepTwoPdpaForm, status: item.status },
});
        "
        >
          <span class="txtFund1"> PDPA </span>
          <span class="NotFilledCol" v-if="item.GepTwoPdpaForm==0"> (Not Filled) </span>
          <span class="FilledCol" v-else> (Filled) </span>
        </div>
        <div v-if="item.product_id==4" 
        @click="
  $store.commit('changePage', {
    tabbar: '/LetterOfWishesGep2',
    title: '3/3 Document Checklist',
  });
$router.push({
  path: '/LetterOfWishesGep2',
  query: { orderId: item.id, isFilled: item.GepTwoDocumentCheckListForm, status: item.status },
});
        "
        >
          <span class="txtFund1"> Document Checklist </span>
          <span class="NotFilledCol" v-if="item.GepTwoDocumentCheckListForm==0"> (Not Filled) </span>
          <span class="FilledCol" v-else> (Filled) </span>
        </div>
        <div v-if="item.product_id==5" 
        @click="
          $store.commit('changePage', { tabbar: '/CustomerApplicationAagt', title: '1/5 Customer Application' });
          $router.push({
            path: '/CustomerApplicationAagt',
            query: { orderId: item.id, isFilled: item.AagtApplicationForm, status: item.status },
          });
        "
        >
          <span @click="getOrderDetail(item.id)" class="txtFund1"> Customer Application </span>
          <span class="NotFilledCol" v-if="item.AagtApplicationForm==0"> (Not Filled) </span>
          <span class="FilledCol" v-else> (Filled) </span>
        </div>
        <div v-if="item.product_id==1" 
        @click="
          $store.commit('changePage', { tabbar: '/CustomerApplication', title: '1/5 Customer Application' });
          // this.$store.commit('ChangeEditSig', true);
          $router.push({
            path: '/CustomerApplication',
            query: { orderId: item.id, isFilled: item.customer_app_form, status: item.status },
          });
        "
        >
          <span class="txtFund1"> Customer Application </span>
          <span class="NotFilledCol" v-if="item.customer_app_form==0"> (Not Filled) </span>
          <span class="FilledCol" v-else> (Filled) </span>
        </div>
        <div v-if="item.product_id==2" 
        @click="
          $store.commit('changePage', { tabbar: '/CustomerApplicationGep', title: '1/5 KYC' });
          $router.push({
            path: '/CustomerApplicationGep',
            query: { orderId: item.id, isFilled: item.gep_kyc_form, status: item.status },
          });
        "
        >
          <span class="txtFund1"> KYC form </span>
          <span class="NotFilledCol" v-if="item.gep_kyc_form==0"> (Not Filled) </span>
          <span class="FilledCol" v-else> (Filled) </span>
        </div>
        <div v-if="item.product_id==5"
        @click="
          $store.commit('changePage', { tabbar: '/KYCAagt', title: '2/5 Compliance Questionnaire' });
          $router.push({
            path: '/KYCAagt',
            query: { orderId: item.id, isFilled: item.AagtKycQuestionnaireForm, status: item.status },
          });
        "
        >
          <span @click="getOrderDetail(item.id)" class="txtFund1"> Compliance Questionaire </span>
          <span class="NotFilledCol" v-if="item.AagtKycQuestionnaireForm==0"> (Not Filled) </span>
          <span class="FilledCol" v-else> (Filled) </span>
        </div>

        <div v-if="item.product_id==1"
        @click="
          $store.commit('changePage', { tabbar: '/KYC', title: '2/5 Compliance Questionnaire' });
          $router.push({
            path: '/KYC',
            query: { orderId: item.id, isFilled: item.kyc_form, status: item.status },
          });
        "
        >
          <span class="txtFund1"> Compliance Questionaire </span>
          <span class="NotFilledCol" v-if="item.kyc_form==0"> (Not Filled) </span>
          <span class="FilledCol" v-else> (Filled) </span>
        </div>
        <div v-if="item.product_id==2"
        @click="
          $store.commit('changePage', { tabbar: '/KYCGep', title: '2/5 SUBSCRIPTION FORM' });
          $router.push({
            path: '/KYCGep',
            query: { orderId: item.id, isFilled: item.subcriptionform, status: item.status },
          });
        "
        >
          <span class="txtFund1"> Subscription form </span>
          <span class="NotFilledCol" v-if="item.subcriptionform==0"> (Not Filled) </span>
          <span class="FilledCol" v-else> (Filled) </span>
        </div>
        <div v-if="item.product_id==5"
        @click="
          $store.commit('changePage', {
            tabbar: '/LetterOfWishesAagt',
            title: '3/5 Letter Of Wishes',
          });
          $router.push({
            path: '/LetterOfWishesAagt',
            query: { orderId: item.id, isFilled: item.AagtLetterOfWishesForm, status: item.status },
          });
        ">

          <span @click="getOrderDetail(item.id)" class="txtFund1"> Letter Of Wishes  </span>
          <span class="NotFilledCol" v-if="item.AagtLetterOfWishesForm==0"> (Not Filled) </span>
          <span class="FilledCol" v-else> (Filled) </span>
        </div>
        <div v-if="item.product_id==1"
        @click="
          $store.commit('changePage', {
            tabbar: '/LetterOfWishes',
            title: '3/5 Letter Of Wishes',
          });
          $router.push({
            path: '/LetterOfWishes',
            query: { orderId: item.id, isFilled: item.letter_of_wishes_form, status: item.status },
          });
        ">

          <span class="txtFund1"> Letter Of Wishes  </span>
          <span class="NotFilledCol" v-if="item.letter_of_wishes_form==0"> (Not Filled) </span>
          <span class="FilledCol" v-else> (Filled) </span>
        </div>
        <div v-if="item.product_id==2"
        @click="
          $store.commit('changePage', {
            tabbar: '/PDPAMemoGep',
            title: '4/5 NON-DISCLOSURE AGREEMENT',
          });
          $router.push({ path: '/PDPAMemoGep', query: { orderId: item.id,isFilled: item.gepNonDisclosureAgreement, status: item.status } });
        "
        >
          <span class="txtFund1"> Non Disclosure Agreement  </span>
          <span class="NotFilledCol" v-if="item.gepNonDisclosureAgreement==0"> (Not Filled) </span>
          <span class="FilledCol" v-else> (Filled) </span>
        </div>
        <div v-if="item.product_id==5"
        
        @click="
    
          $store.commit('changePage', {
            tabbar: '/PdpaAagt',
            title: '4/5 PDPA Memo',
          });
          $router.push({ path: '/PdpaAagt', query: { orderId: item.id,isFilled: item.AagtPdpaForm, status: item.status } });
        "
        >
          <span   @click="getOrderDetail(item.id)" class="txtFund1"> PDPA Memo </span>
          <span class="NotFilledCol" v-if="item.AagtPdpaForm==0"> (Not Filled) </span>
          <span class="FilledCol" v-else> (Filled) </span>
        </div>
        <div v-if="item.product_id==1"
        @click="
          $store.commit('changePage', {
            tabbar: '/PDPAMemo',
            title: '4/5 PDPA Memo',
          });
          $router.push({ path: '/PDPAMemo', query: { orderId: item.id,isFilled: item.pdpa_memo_form, status: item.status } });
        "
        >
          <span class="txtFund1"> PDPA Memo </span>
          <span class="NotFilledCol" v-if="item.pdpa_memo_form==0"> (Not Filled) </span>
          <span class="FilledCol" v-else> (Filled) </span>
        </div>
        <div v-if="item.product_id==2"
        @click="
          $store.commit('changePage', {
            tabbar: '/DocumentChecklistGep',
            title: '5/5 Document Checklist',
          });
          $router.push({ path: '/DocumentChecklistGep', query: { orderId: item.id,isFilled: item.gepDocumentCheckListForm, status: item.status } });
        "
        >
          <span class="txtFund1"> Document Checklist  </span>
          <span class="NotFilledCol" v-if="item.gepDocumentCheckListForm==0"> (Not Filled) </span>
          <span class="FilledCol" v-else> (Filled) </span>
        </div>
        <div v-if="item.product_id==5"
        @click="
          $store.commit('changePage', {
            tabbar: '/DocumentChecklistAagt',
            title: '5/5 Document Checklist',
          });
          $router.push({ path: '/DocumentChecklistAagt', query: { orderId: item.id,isFilled: item.AagtDocumentCheckListForm, status: item.status } });
        "
        >
          <span @click="getOrderDetail(item.id)" class="txtFund1"> Document Checklist </span>
          <span class="NotFilledCol" v-if="item.AagtDocumentCheckListForm==0"> (Not Filled) </span>
          <span class="FilledCol" v-else> (Filled) </span>
        </div>
        <div v-if="item.product_id==1"
        @click="
          $store.commit('changePage', {
            tabbar: '/DocumentChecklist',
            title: '5/5 Document Checklist',
          });
          $router.push({ path: '/DocumentChecklist', query: { orderId: item.id,isFilled: item.document_check_list_form, status: item.status } });
        "
        >
          <span class="txtFund1" @click="getOrderDetail(item.id)"> Document Checklist </span>
          <span class="NotFilledCol" v-if="item.document_check_list_form==0"> (Not Filled) </span>
          <span class="FilledCol" v-else> (Filled) </span>
        </div>
        <div v-if="item.product_id==2"
        @click="
          $store.commit('changePage', {
            tabbar: '/LetterOfWishesGep',
            title: '3/5 THIRD PARTY FUND DECLARATION',
          });
          $router.push({
            path: '/LetterOfWishesGep',
            query: { orderId: item.id, isFilled: item.gepthirdPartyDeclarationForm, status: item.status },
          });
        "
        >
          <span class="txtFund1"> Third Party Declaration form </span>
          <span class="NotFilledCol" v-if="item.gepthirdPartyDeclarationForm==0"> (Not Filled) </span>
          <span class="FilledCol" v-else> (Filled) </span>
        </div>
        <div v-if="item.product_id==1"
        
        @click="
          $store.commit('changePage', {
            tabbar: '/ThirdPartyDeclaration',
            title: 'Third Party Declaration',
          });
          $router.push({
            path: '/ThirdPartyDeclaration',
            query: { orderId: item.id,isFilled: item.third_party_declaration_form, status: item.status },
          });
        "
        >
          <span class="txtFund1"> Third Party Declaration </span>
          <span class="NotFilledCol" v-if="item.third_party_declaration_form==0"> (Not Filled) </span>
          <span class="FilledCol" v-else> (Filled) </span>
        </div>

        <div v-if="item.product_id==5"
        
        @click="
          $store.commit('changePage', {
            tabbar: '/ThirdPartyDeclarationAagt',
            title: 'Third Party Declaration',
          });
          $router.push({
            path: '/ThirdPartyDeclarationAagt',
            query: { orderId: item.id,isFilled: item.AagtThirdPartyDeclarationForm, status: item.status },
          });
        "
        >
          <span class="txtFund1"> Third Party Declaration </span>
          <span class="NotFilledCol" v-if="item.AagtThirdPartyDeclarationForm==0"> (Not Filled) </span>
          <span class="FilledCol" v-else> (Filled) </span>
        </div>
      </van-col>
      <van-col span="8" align="end">


        <!-- :style="{ border: '1px solid '+i.color_code}" -->

        <div class="pb-3"  v-if="item.product_id==1 && item.status!==0" >
          <span v-if="item.fund_received_status==='Pending'"> Fund received acknowledgement </span>
          <span class="txtFund" title="Click to download" @click="download(item.fund_received_file)" v-else> Fund received acknowledgement </span>
        
          <span class="NotFilledCol" v-if="item.fund_received_status==='Pending'"> (Pending) </span>
          <span class="FilledCol" v-else> (Completed) </span>
         
           </div>
        

           <div class="pb-3"  v-if="item.product_id==1 && item.status!==0" >
          <span v-if="item.trust_setup_status==='Pending'">Trust setup acknowledgement   </span>
          <span class="txtFund" title="Click to download" @click="download(item.trust_setup_file)" v-else> Trust setup acknowledgement </span>
        
          <span class="NotFilledCol" v-if="item.trust_setup_status==='Pending'"> (Pending) </span>
          <span class="FilledCol" v-else> (Completed) </span>
         
           </div>

           
          <!-- <p class="pb-3" v-if="item.product_id==1 && item.status!==0">
            Trust setup acknowledgement  
            <span class="NotFilledCol" v-if="item.trust_setup_status==='Pending'"> (Pending) </span>
          <span class="FilledCol" v-else> (Completed) </span>
          <span v-if="item.trust_setup_status!=='Pending'"><van-image
							style="width: 15px;height:auto;margin: 0 auto; margin-right:6px;"
							:src="require('@/assets/img/download.png')"
							fit="contain"
              @click="download(item.trust_setup_file)"
              title="Click to download"
							/></span>

          </p> -->
          
          <van-button class="aigp" type="danger" v-if="item.product_id===1 || item.product_id===5 " size="small" @click="reorder(item)">Reorder</van-button>  
        <van-button type="danger" :disabled="item.status!==0" size="small" @click="del(item.id)">Delete</van-button>
        <van-button type="primary"  @click="toFill(item)" size="small">{{item.status===2?"View":"To fill"}}</van-button><br>
         
        <!-- <van-button type="warning" size="small" v-show="item.reject_reason!=null" style="margin-top: 10px" @click="showDialog(item.reject_reason)">Reject Reason</van-button> -->
      </van-col>
    </van-row>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page = "per_page"
      align="center"
      @input="changePage"
    ></b-pagination>
  </div>
</template>

<script>
import moment from 'moment'
import { getOrders ,productList, getOrdersExport} from "@/api/tools";
import { createOrders, getOrdersForms, putOrdersForms,getOrderDetail } from "@/api/order";
import {deleteOrder} from '@/api/order'
import { Dialog } from 'vant';
import fileDownload from 'js-file-download'
export default {
  data() {
    return {
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
         year1: [
          { value: '0', text: 'Pending (Not yet submitted)' }, 
          { value: '1', text: 'Complete'  },
          { value: '2', text: 'Approved'  },
          { value: '3', text: 'Not Approved'  },
          { value: '4', text: 'Canceled'  }
        ],
        year4: [
          { value: 'date_desc', text: 'Order date desc' }, 
          { value: 'maturity_date', text: 'Maturity'  }
        ],

        item: {
          value: '',
          text: ''
        },
      orderList: [],
      
      searchVal: '',
        status: '',
          start_date: '',
            end_date: '',
              price_from: '',
              order:'date_desc',
                price_to: '',
                  product_id: '',
      loadingShow: true,
      rows: 3,//頁數
      currentPage: 1,//當前頁
      per_page: 15//每頁條數
    };
  },
  mounted() {
    this.$store.commit('changeIsOverseaSignature',false)
    this.$store.commit('ChangeEditStatus', true)
   this.$store.commit('ChangeEditSig', false)
    
    this.getOrders();
      this.productList();
      this.$store.commit('ChangeReorder', '')
      this.$store.commit('ChangeIdReorder', '')
      this.$store.commit('ChangeAigtId1', '')
      this.$store.commit('ChangeAigtId2', '')
      this.$store.commit('ChangeAigtId3', '')
      this.$store.commit('ChangeAigtId4', '')
      this.$store.commit('ChangeAigtId5', '')

      this.$store.commit('ChangeAagtId1', '')
      this.$store.commit('ChangeAagtId2', '')
      this.$store.commit('ChangeAagtId3', '')
      this.$store.commit('ChangeAagtId4', '')
      this.$store.commit('ChangeAagtId5', '')

  },
  computed: {
  },
  methods: {
    getOrderDetail(id) {
      this.$store.commit('ChangeEditSig', true)
     // alert("ffffff")
      getOrderDetail(id)
        .then((res) => {
          console.log(">>>>>>>>>>>>>>",res);
          console.log(">>>>>>>>>1>>>>>",res.remote);
          if(res.remote == 'true'){
         //  alert("a")
            this.$store.commit('changeIsOverseaSignatureRemote',true)
          }
          else
          {
         //  alert("b")
            this.$store.commit('changeIsOverseaSignatureRemote',false)
          }
        
        })
        .catch((err) => {
          console.log(err);
        });
    },
    reset(){
 this.searchVal= '',
 this.status= '',
 this.start_date= '',
 this.end_date= '',
 this.price_from= '',
 this.price_to= '',
 this.order='date_desc',
 this.product_id= '',
 this.currentPage=1
 
     this.getOrders()
    },
    download(file) {
      console.log("9999999999999999999",file)
      let url = file.split('public')
      console.log("ccccccccccccccccccccc",url)
      console.log("aaaaaaaaaaaaaaaaaa",url[0])
      console.log("bbbbbbbbbbbbbbbb",url[1])
      window.open(url[0] + 'file/download?path=public' + url[1], '_self')
// window.open(file, '_self')
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
      this.getOrders()
    },
     productList() {
      productList()
        .then((res) => {
          console.log(".......productList.........",res)
           this.year = res.product;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    getOrders() {
      console.log("....d1.....",this.start_date)
      console.log("....d1.....",this.end_date)
      getOrders({
        search: this.searchVal,
         status: this.status,
          start_date: this.start_date,
           end_date: this.end_date,
            price_from: this.price_from,
             price_to: this.price_to,
              product_id: this.product_id,
        order: this.order,
     //   order: "date_desc",
        page: this.currentPage
      })
        .then((res) => {
          console.log(".......555.........",res)
          this.orderList = res;
          this.per_page = res.meta.per_page
          this.rows = res.meta.total
          this.loadingShow = false
          console.log(res)
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    onExport(){
      getOrdersExport({
        search: this.searchVal,
         status: this.status,
          start_date: this.start_date,
           end_date: this.end_date,
            price_from: this.price_from,
             price_to: this.price_to,
              product_id: this.product_id,
        order: this.order,
     //   order: "date_desc",
        page: this.currentPage
      })
        .then((res) => {
          console.log(".......555....export.....",res)

          let url1 = res.file.split('storage')
      console.log("ccccccccccccccccccccc",url1)
      console.log("aaaaaaaaaaaaaaaaaa",url1[0])
      console.log("bbbbbbbbbbbbbbbb",url1[1])
      window.open(url1[0] + 'file/download?path=storage' + url1[1], '_self')

        //  fileDownload(res.file,'file.xls')
          // this.orderList = res;
          // this.per_page = res.meta.per_page
          // this.rows = res.meta.total
          // this.loadingShow = false
          // console.log(res)
        })
        .catch((err) => {
          console.log(err.response);
        });

    },
    onSearch() {
     // this.order = "date_desc";
      this.getOrders()
    },
    clearSearch() {
      this.order = 'date_desc';
      this.getOrders()
    },
    //繼續填寫訂單
    toFill(item) {
      console.log(".......toFill.......item..",item)
            console.log(".......toFill.......product_id..",item.product_id)
            if(item.product_id === 1){
              this.$store.commit('changePage', {
        tabbar: '/OrderDetail',
        title: 'OrderDetail',
      });

      this.$store.commit('ChangeEditSig', true)
      sessionStorage.setItem('orderId',JSON.stringify(item.id))
      sessionStorage.setItem('orderStatus',item.status)
      this.$router.push({path: '/OrderDetail', query: {id: item.id}});
            }


            else if (item.product_id === 2){
   this.$store.commit('changePage', {
        tabbar: '/OrderDetailGep',
        title: 'OrderDetailGep',
      });
      this.$store.commit('ChangeEditSig', true)
      sessionStorage.setItem('orderId',JSON.stringify(item.id))
      sessionStorage.setItem('orderStatus',item.status)
      this.$router.push({path: '/OrderDetailGep', query: {id: item.id}});

            }

            else if (item.product_id === 4){
   this.$store.commit('changePage', {
        tabbar: '/OrderDetailGep2',
        title: 'OrderDetailGep2',
      });
      this.$store.commit('ChangeEditSig', true)
      sessionStorage.setItem('orderId',JSON.stringify(item.id))
      sessionStorage.setItem('orderStatus',item.status)
      this.$router.push({path: '/OrderDetailGep2', query: {id: item.id}});

            }
            else if (item.product_id === 5){
              this.$store.commit('changePage', {
        tabbar: '/OrderDetailAagt',
        title: 'OrderDetailAagt',
      });
      this.$store.commit('ChangeEditSig', true)
      sessionStorage.setItem('orderId',JSON.stringify(item.id))
      sessionStorage.setItem('orderStatus',item.status)
      this.$router.push({path: '/OrderDetailAagt', query: {id: item.id}});
            }




     
    },
    reorder(item){

      if(item.product_id===1 ){
        this.$store.commit('changeIsOverseaSignature',true)
      console.log("---item------",item)
      
      this.$store.commit('ChangeReorder', 1)

      this.$store.commit('ChangeIdReorder', item.id)
      this.$store.commit('ChangeAigtId1', item.customer_app_form)
      this.$store.commit('ChangeAigtId2', item.kyc_form)
      this.$store.commit('ChangeAigtId3', item.letter_of_wishes_form)
      this.$store.commit('ChangeAigtId4', item.pdpa_memo_form)
      this.$store.commit('ChangeAigtId5', item.document_check_list_form)
               this.$store.commit('changeIsOverseaSignature',true)
       this.$router.push('/OrderSignature')
       this.$store.commit('changePage',{tabbar: '/OrderSignature', title: 'OrderSignature'});

      }

      if(item.product_id===5 ){
        this.$store.commit('ChangeEditStatus', false)
        this.$store.commit('changeIsOverseaSignature',true)
      console.log("---item------",item)
      
      this.$store.commit('ChangeReorder', 1)

      this.$store.commit('ChangeIdReorder', item.id)
      this.$store.commit('ChangeAagtId1', item.AagtApplicationForm)
      this.$store.commit('ChangeAagtId2', item.AagtKycQuestionnaireForm)
      this.$store.commit('ChangeAagtId3', item.AagtLetterOfWishesForm)
      this.$store.commit('ChangeAagtId4', item.AagtPdpaForm)
      this.$store.commit('ChangeAagtId5', item.AagtDocumentCheckListForm)
               this.$store.commit('changeIsOverseaSignature',true)
       this.$router.push('/OrderSignatureAagt')
       this.$store.commit('changePage',{tabbar: '/OrderSignatureAagt', title: 'OrderSignatureAagt'});

      }
    
    
    
    },
    
    //刪除未提交訂單
    del(id) {
      deleteOrder(id).then(res => {
       console.log("---res------",res)
          console.log("---id------",id)
        this.$toast({
          type: "success",
          message: res.message,
        });
         this.getOrders()
      })
    }
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
  .btn-rightalign{
    justify-content: right;
  }
  .btn-reset{
        background-color: transparent;
    border-radius: 10px;
    color: red;
    border: 1px solid #6c757d;
  }
  .btn-export{
      background-color: #897359;
      color: #fff;
       border-radius: 10px;
      border: 1px solid #897359;
  }
  .btn-search{
      background-color: #6c757d;
      color: #fff;
       border-radius: 10px;
      border: 1px solid #6c757d;
  }
  .slect-boxdiv{
     // text-align: right !important;
    //margin: 0px 15px 0px 0px
}
.slect-boxdiv select{
      width: 100%;
   // padding: 5px;
    border:0px solid #c4c4c4;
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
.bodybox1{
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
.van-search.block{
  display: block;
  padding-left: 0%;
}
.van-search.block1{
  display: block;
  padding-left: 13px;
  padding-right: 0px;
}
.reason{
   color: #08a6e3;
   cursor: pointer;
}
.aigp{
   background-color: #08a6e3;
}
.aigp1{
   background-color: #cd12c7;
}
.aigp2{
   background-color: #4c201c;
}
.aigp3{
   background-color: #000000;
}
.orderList{
  border: 1px solid #eef0f5;
    border-radius: 12px;
    padding: 15px;
}
.orderList1{
     padding-bottom: 6px;
}
.orderList2{
     padding-bottom: 6px;
    margin-top: 6px;
}
   

}

.txtFund:hover {
    text-decoration: underline;
    color: #08a6e3;
    cursor: pointer;
}
.txtFund {
    
    color: #08a6e3;
    
}


.txtFund1:hover {
    text-decoration: underline;
    color: #bd0d0d;
    cursor: pointer;
}


</style>
