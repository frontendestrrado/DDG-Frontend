import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../http';
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shareOrderData:{},
    // isShare:false,

    passport_no:null,
    occupation:null,
    signature:null,
    email:null,
    phone:null,
    house_no:null,
    office_no:null,
    address:null,

    CustomerApplicationId:null,
    campanyIndividualName1:null,
    campanyIndividualName1Gep:null,
    nationalityGep:null,
    nric_pass_roc_noGep:null,

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
    count: 0,
    num: 10,
    language: sessionStorage["language"] ? sessionStorage["language"] : 'en',
    isPC: document.body.clientWidth >= 768 ? true : false,
    currentPage: sessionStorage["currentPage"] ? JSON.parse(sessionStorage["currentPage"]) : {
      tabbar: '/Home',
      title: '首页',
    },
    token: sessionStorage["token"] ? sessionStorage["token"] : '',
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
      if (sessionStorage.token) {
        axios({
          method: 'PUT',
          url: '/api/v1/authorizations/current',
          headers: {
            "Authorization": sessionStorage.token_type + sessionStorage.token,
          }
        }).then(res => {
          console.log('refreshToken');
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
        console.log('no storeToken2');
        sessionStorage.token = '';
        this.commit('changePage', { tabbar: '/Login', title: 'Sign Up / Sign In' });
        router.push('/Login');
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
        case 'OrderSignature' :
           val.title=''
           break;
           case 'OrderSignatureGep' :
            val.title=''
            break;
           case 'Select Product':
            val.title='Select Product'
            break;
        case 'Choose':
          val.title='Select One'
          break;
          case 'ChooseGep':
          val.title='Select One'
          break;
          case 'ChooseGep2':
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
    changeCustomerApplicationId(state,val){
      state.CustomerApplicationId=val
      console.log(val,"hhhhh")
    },
    Changesignature(state,val){
      state.signature=val
      console.log(val,"hhhhh")
    },
    Changeoccupation(state,val){
      state.occupation=val
      console.log(val,"hhhhh")
    },

    nric_pass_roc_noGep(state,val){
      state.nric_pass_roc_noGep=val
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
