import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../http';
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shareOrderData:{},
    // isShare:false,
abc:null,
details_account_owner:null,
details_bank_name:null,
details_account_no:null,
    passport_no:null,
    occupation:null,
    signature:null,
    email:null,
    phone:null,
    house_no:null,
    office_no:null,
    address:null,
    changeGep2Val:null,
    CustomerApplicationId:null,
    campanyIndividualName1:null,
    campanyIndividualName1Gep:null,
    campanyIndividualName1Gep2:null,
    nationalityGep:null,
    nric_pass_roc_noGep:null,
    nric_pass_roc_noGep2:null,

    dobGep:null,
    place_incorporationGep:null,
    occupationGep:null,

    addressGep:null,
    postcodeGep:null,
    countryGep:null,
    phoneGep:null,
    emailGep:null,
    subscriber_signatureGep:null,
   
    isMenuTop:true,
    isOverseaSignature:false,
    customerNotificationCount:0,
    count: 0,
    num: 10,
    language: sessionStorage["language"] ? sessionStorage["language"] : 'en',
    isPC: document.body.clientWidth >= 768 ? true : false,
    currentPage: sessionStorage["currentPage"] ? JSON.parse(sessionStorage["currentPage"]) : {
      tabbar: '/Home',
      title: '首页',
    },
    token: sessionStorage["token"] ? sessionStorage["token"] : '',
    userType: sessionStorage["userType"] ? sessionStorage["userType"] : '',
    token_type: sessionStorage["token_type"] ? sessionStorage["token_type"] : '',
    unreadStatus: true,//未讀消息彈框狀態
  },
  getters: {

  },
  mutations: {
    /**
     * 改變未讀消息彈框狀態
     * @param state
     * @param payload
     */
    changeUnreadStatus (state, payload) {
      state.unreadStatus = payload
    },
    // 刷新token
    refreshToken(state) {
    //  alert("1")
      if (sessionStorage.token) {
    //  alert("2")
        axios({
          method: 'PUT',
          url: '/api/v1/authorizations/current',
          headers: {
            "Authorization": sessionStorage.token_type + sessionStorage.token,
          }
        }).then(res => {
          console.log('refreshToken');
          console.log('refreshToken----',res);
          sessionStorage.setItem('token', res.access_token);
          this.commit('setToken', res.access_token);
          window.location.reload();
        }).catch(error => {
          console.log('no storeToken');
          sessionStorage.token = '';
          this.commit('changePage', { tabbar: '/Login', title: 'Sign Up / Sign In' });
          router.push('/Login');
        });
      } else {
      //  alert("3")
        console.log('no storeToken2');
        sessionStorage.token = '';
        // console.log('$sessionStorage.userType----',$sessionStorage.userType);
        // if($sessionStorage.userType ==='advisor'){
         // alert("4")
         console.log('------advisor--------');
          this.commit('changePage', { tabbar: '/Login', title: 'Sign Up / Sign In' });
          router.push('/Login');
        // }
        // if($sessionStorage.userType ==='customer'){
        // //  alert("5")
        // console.log('----------customer-----------');
        //   this.commit('changePage', { tabbar: '/customerLogin', title: 'Customer Login' });
        //   router.push('/customerLogin');
        // }
      
      }
    },
    // 删除token
    delToken() {
      axios({
        method: 'DELETE',
        url: '/api/v1/authorizations/current',
        headers: {
          "Authorization": sessionStorage.token_type + sessionStorage.token,
        }
      }).then(res => {
        console.log('delToken');
        sessionStorage.token = '';
        this.commit('setToken', '');
        window.location.reload();
      }).catch(error => {
        console.log('no storeToken');
        sessionStorage.token = '';
      });
    },
    setToken(state, val) {
      sessionStorage.setItem('token', val);
      state.token = val;
    },
    setUserType(state, val) {
      sessionStorage.setItem('userType', val);
      state.userType = val;
    },
    
    setTokenType(state, val) {
      sessionStorage.setItem('token_type', val);
      state.token_type = val;
    },
    // 页面语言
    changeLang(state, val) {
      sessionStorage.setItem('language', val);
      state.language = val;
    },
    setIsPC(state, val) {
      state.isPC = val;
    },
    changeCount(state, val) {
      state.count++;
      state.num = val;
    },
    // 切换页面tab
    changePage(state, val) {
      // if(val.title===''){
      //   val.title=state.currentPage.title
      // }
      // if(val.tabbar===''){
      //   val.tabbar=state.currentPage.tabbar
      // }
      switch(val.title) {
        case 'Aspirations':
          val.title = ''
          break;
        case 'Products':
          val.title = ''
          break;
        case 'Our Services':
          val.title = ''
          break;
        case 'AI Generation Trust':
          val.title = ''
          break;
        case 'DDG Leadership':
          val.title = ''
          break;
        case 'OrderDetail':
          val.title = 'Order Detail'
          break;
          case 'OrderDetailGep':
            val.title = 'Order Detail Gep'
            break;
            case 'OrderDetailGep2':
              val.title = 'Order Detail Gep 2'
              break;
        case 'OrderSignature' :
           val.title=''
           break;
           case 'OrderSignatureGep' :
            val.title=''
            break;
            case 'OrderSignatureGep2' :
              val.title=''
              break;
           case 'Select Product':
            val.title='Select Product'
            break;
        case 'Choose':
          val.title='Select One'
          break;
          case 'customerLogin':
            val.title='Customer Login'
            break;
            case 'customerHome':
              val.title='Customer Home'
              break;
              case 'customerNotification':
                val.title='Customer Notification'
                break;
          case 'ChooseGep':
          val.title='Select One'
          break;
          case 'ChooseGep2':
            val.title='Select One'
            break;
            case 'ChooseGep2Val':
            val.title='Select One'
            break;
        case 'DGG Education Framework':
          val.title='DDG Education Framework'
          break;
        case 'My Performance':
          val.title = 'My Performance'
          break
      }

      sessionStorage.setItem('currentPage', JSON.stringify(val));
      // console.log(JSON.parse(sessionStorage.currentPage));
      state.currentPage = val;
    },
    changeIsmenutop(state,val){
      state.isMenuTop = val;
    },
    changeIsOverseaSignature(state,val){
      state.isOverseaSignature = val;
    },
    changecustomerNotificationCount(state,val){
      state.customerNotificationCount = val;
    },
    changeCustomerApplicationId(state,val){
      state.CustomerApplicationId=val
      console.log(val,"hhhhh")
    },
    Changesignature(state,val){
      state.signature=val
      console.log(val,"hhhhh")
    },
    Changedetails_account_owner(state,val){
      state.details_account_owner=val
      console.log(val,"hhhhh")
    },
    Changedetails_bank_name(state,val){
      state.details_bank_name=val
      console.log(val,"hhhhh")
    },
    Changedetails_account_no(state,val){
      state.details_account_no=val
      console.log(val,"hhhhh")
    },
    Changeabc(state,val){
      console.log(val,"..............2......2.........2.........2.......2................")
      state.abc=val
   
    },
    Changeoccupation(state,val){
      state.occupation=val
      console.log(val,"hhhhh")
    },
    

    nric_pass_roc_noGep(state,val){
      state.nric_pass_roc_noGep=val
      console.log(val,"hhhhh.....................")
    }, 
    nric_pass_roc_noGep2(state,val){
      state.nric_pass_roc_noGep2=val
      console.log(val,"hhhhh.....................")
    }, 
    subscriber_signatureGep(state,val){
      state.subscriber_signatureGep=val
      console.log(val,"hhhhh.....................")
    },
    emailGep(state,val){
      state.emailGep=val
      console.log(val,"hhhhh.....................")
    },
    phoneGep(state,val){
      state.phoneGep=val
      console.log(val,"hhhhh.....................")
    },
    countryGep(state,val){
      state.countryGep=val
      console.log(val,"hhhhh.....................")
    },
    postcodeGep(state,val){
      state.postcodeGep=val
      console.log(val,"hhhhh.....................")
    },
    occupationGep(state,val){
      state.occupationGep=val
      console.log(val,"hhhhh.....................")
    },
    place_incorporationGep(state,val){
      state.place_incorporationGep=val
      console.log(val,"hhhhh.....................")
    },
    addressGep(state,val){
      state.addressGep=val
      console.log(val,"hhhhh.....................")
    },
    dobGep(state,val){
      state.dobGep=val
      console.log(val,"hhhhh.....................")
    },
    nationalityGep(state,val){
      state.nationalityGep=val
      console.log(val,"hhhhh.....................")
    },
    ChangecampanyIndividualNameGep(state,val){
      state.campanyIndividualName1Gep=val
      console.log(val,"hhhhh.........ChangecampanyIndividualNameGep............")
    },
    ChangecampanyIndividualNameGep2(state,val){
      state.campanyIndividualName1Gep2=val
      console.log(val,"hhhhh.........ChangecampanyIndividualNameGep............")
    },
    changeGep2Val(state,val){
      state.changeGep2Val=val
      console.log(val,"hhhhh.........changeGep2Val............")
    },
    ChangecampanyIndividualName(state,val){
      state.campanyIndividualName1=val
      console.log(val,"hhhhh.....................")
    },
    Changepassport_no(state,val){
      state.passport_no=val
      console.log(val,"hhhhh.....................")
    },
    Changeemail(state,val){
      state.email=val
      console.log(val,"hhhhh.....................")
    },
    Changephone(state,val){
      state.phone=val
      console.log(val,"hhhhh.....................")
    },
    Changehouse_no(state,val){
      state.house_no=val
      console.log(val,"hhhhh.....................")
    },
    Changeoffice_no(state,val){
      state.office_no=val
      console.log(val,"hhhhh.....................")
    },
    Changeaddress(state,val){
      state.address=val
      console.log(val,"hhhhh.....................")
    },

      
    // changeisShare(state,val){
    //   state.isShare=val
    //   console.log(val)
    //   sessionStorage.setItem('isShare', val);
    //   console.log(sessionStorage.isShare,963699)
    // },
    changeShareOrderData(state,val){
      state.shareOrderData=val
      console.log(state.shareOrderData,99999999999)
    }
  },
  actions: {  //调用mutations里的方法
    setNum({ commit }, val) {
      commit('changeCount', val);
    },
  }
})
