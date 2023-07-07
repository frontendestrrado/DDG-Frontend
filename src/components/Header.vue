<template>
  <div class="header bgAsh">
    
    <div class="header-main" v-if="$store.state.isMenuTop">
     
      <!-- <van-row style="height: 100%;" v-if="$store.state.isPC">
			  	<van-col :span="6">
			  		<van-image
			  			class="logo hv"
				      	:src="require('@/assets/img/logo.png')"
				      	fit="contain"
				      	@click="isShowTopUl=true;changeActTab('Index');"/>
			  	</van-col>
			  	<van-col :span="18">
					<div class="main-right fontPM">
						<div class="right-item hv" style="margin-left: 5px;">
							<van-dropdown-menu active-color="#FFC80B">
								<van-dropdown-item v-model="lang" :options="language" @change='changeLang'/>
							</van-dropdown-menu>
						</div>
					</div>
			  	</van-col>
			</van-row> -->
      <van-row class="fcb" style="height: 100%">
        <span class="pos-rel">
                <van-image style="width: 80px;" :src="require('@/assets/img/logo.png')" v-if="$sessionStorage.token && this.$route.path !='/customerLogin' && $sessionStorage.userType !='advisor' " fit="contain"/>
              </span>
        <van-col :span="5" style="text-align: left;margin-left:20px">
          <van-icon
            name="arrow-left"
            v-if="$store.state.currentPage.tabbar != '/Home' && this.$route.path !='/Page/10' && this.$route.path !='/customerLogin' && this.$route.path !='/customerHome'"
            color="#333"
            size="30"
            v-show="$store.state.currentPage.tabbar!=='/Login'"
            @click="changeActTab('', '')"
          />
          <van-image
            v-if="$store.state.currentPage.tabbar == '/Home'"
            class="logo hv"
            :src="logo"
            fit="contain"
            @click="
              isShowTopUl = true;
              $router.push('/Home');
            "
          />
        </van-col>
        <van-col :span="24" class="tc titleBig">
<!--           <van-image
						v-if="$store.state.currentPage.tabbar == '/Index'"
						class="logo hv"
							:src="logo"
							fit="contain"
							@click="changeActTab('/Index', 'Home');"/> -->
          <div v-if="$store.state.currentPage.tabbar !== '/Home'">
            {{$store.state.currentPage.title}}
          </div>
        </van-col>
        <!-- <i class="fa-solid fa-house"></i> -->
        <!-- style="display: flex; align-items: center; justify-content: end;" -->
       
        <van-col :span="5" style="display: flex; align-items: center; justify-content: end;">
          
          <!-- v-if="$store.state.currentPage.tabbar == '/Index'" -->
          <span  v-on:click="goHome" v-if="$sessionStorage.token && this.$route.path !='/Login' && this.$route.path !='/Page/10' && $sessionStorage.userType !='customer'" class="pos-rel">
            <van-image
							style="width: 40px;height:auto;margin: 0 auto; margin-right:10px;"
							:src="require('@/assets/img/home2.png')"
							fit="contain"
							/>
              </span>
          <span  v-on:click="isHidden === false ? isHidden= true:isHidden=false" v-if="$sessionStorage.token && $sessionStorage.userType ==='advisor' && this.$route.path !='/Login'" class="pos-rel"><van-image
							style="width: 40px;height:auto;margin: 0 auto; margin-right:10px;"
							:src="require('@/assets/img/bell.png')"
							fit="contain"
							/>
              <div class="notfctn-btn">{{notificationsCount}} </div>
              </span>

              <span  v-on:click="customerNotification" v-if="$sessionStorage.token && $sessionStorage.userType ==='customer' && this.$route.path !='/customerLogin'" class="pos-rel"><van-image
							style="width: 40px;height:auto;margin: 0 auto; margin-right:10px;"
							:src="require('@/assets/img/bell.png')"
							fit="contain"
							/>
              <div class="notfctn-btn">{{this.$store.state.customerNotificationCount}} </div>
              </span>


              <span   v-on:click="isHidden1 === false ? isHidden1= true:isHidden1=false" v-if="$sessionStorage.token && this.$route.path !='/Login' && $sessionStorage.userType !='customer'" class="pos-rel">
                
                <van-image
							style="width: 40px;height:auto;margin: 0 auto; margin-right:10px;"
							v-bind:src= this.$store.state.abc
							fit="contain"
              round
							/>

              </span>

              <span  v-on:click="isHidden2 === false ? isHidden2= true:isHidden2=false" v-if="$sessionStorage.token && this.$route.path !='/customerLogin' && $sessionStorage.userType !='advisor' " class="pos-rel">
                
                <van-image
							style="width: 40px;height:auto;margin: 0 auto; margin-right:10px;"
							v-bind:src= this.$store.state.abc
							fit="contain"
              round
							/>

              </span>
              
              <!-- <img v-bind:src=avatar> -->
              
             

              <div class="notifcation-box logot"  v-if="!isHidden1">


<div class="notfctn-viewall" v-on:click="select11(),isHidden1 = true">
  My profile
        </div>
        <div class="notfctn-viewall"  v-on:click="toLogin(),isHidden1 = true">
          Logout
        </div>

  </div>
  <div class="notifcation-box logot1" v-if="!isHidden2">

        <div class="notfctn-viewall"  v-on:click="toLogin1(),isHidden2 = true">
          Logout
        </div>

  </div>




               <div :id="'clickbox'" v-on:click="test()"  class="notifcation-box" v-if="!isHidden">
<div  class="notfctn-viewall" >
  <span class="p-3" v-on:click="announcementsShow" :style="{color: '#897359' }" :id="'annButId'">Announcements</span> <span :style="{color: '#2c3e50' }" :id="'notButId'" class="p-3" v-on:click="notificationsShow">Notifications</span>

</div>

<div :id="'annId'" :style="{display: 'block'}">
<van-cell  center v-for="(item,index) in tableList.slice(0, 3)" :key="index" :style="{background: item.is_viewed == 0? '#cbcbcb' : '#fff' }">
        <div class="notfctn-row p-0">
          <div class="notifctn-left"  id="foo" v-on:click="select($event, item),isHidden = isHidden">
          <!-- <div class="attachmnt-text">[Announcement]</div> -->
           {{item.title}} <span class="dot-right" v-if="item.is_viewed == 0">*</span>
          </div>
           <div class="notifctn-right">
             <span v-if="item.is_attached == true"><van-image
							style="width: 15px;height:auto;margin: 0 auto; margin-right:6px;"
							:src="require('@/assets/img/attached.png')"
							fit="contain"
							/></span>
             <span class="time-text">2h</span>
          </div>     
        </div>
</van-cell>
        <div class="notfctn-viewall" v-on:click="select1(),isHidden = isHidden">
          View All Notifications
        </div>
</div>
 <div :id="'notId'" :style="{display: 'none'}">
         <van-cell  center v-for="(item,index) in tableList1.slice(0, 3)" :key="index" :style="{background: item.is_read == 0? '#cbcbcb' : '#fff' }">
        <div class="notfctn-row p-0" >
          <div class="notifctn-left"  id="foo" v-on:click="selectA($event, item),isHidden = isHidden">
          <!-- <div class="attachmnt-text">[Notifications]</div> -->
           {{item.title}} <span class="dot-right" v-if="item.is_read == 0">*</span>
          </div>
           <div class="notifctn-right">
             <!-- <span v-if="item.is_attached == true"><van-image
							style="width: 15px;height:auto;margin: 0 auto; margin-right:6px;"
							:src="require('@/assets/img/attached.png')"
							fit="contain"
							/></span> -->
             <span class="time-text">2h</span>
          </div>     
        </div>
</van-cell>
        <div class="notfctn-viewall" v-on:click="select1B(),isHidden = isHidden">
          View All Notifications
        </div>
        </div>
  </div>
          <!-- <div
            class="SignUpIn"
            @click="toLogin"
            v-show="$store.state.currentPage.tabbar!=='/Login'"
          >
            {{isToken?'Logout':'Sign Up / Sign In'}}
          </div>
           -->
          <!-- <div >
            <van-icon
              v-if="isShowTopUl"
              name="wap-nav"
              color="#333"
              size="30"
              @click.stop="isShowTopUl = false"
            />
            <van-icon
              v-else
              name="cross"
              color="#333"
              size="30"
              @click.stop="isShowTopUl = true"
            />
          </div> -->
        </van-col>
      </van-row>
      
      <!-- <van-overlay :show="!isShowTopUl" /> -->
  
      <ul class="menuInfo fontPB" v-if="!isShowTopUl" @click.stop>
        <li class="hv" @click="changeActTab('/Home', 'Home')">
          Home
        </li>
        <!-- <div class="ulline"></div> -->

        <!-- <li class="hv" v-if="tabList.length>0" v-for="(item,index) in tabList" @click="changeActTab(item.page_id?'/Page/'+item.page_id:'', item.title);">{{item.title}}</li> -->
        <MenuTop
          @on-change="changeActTab"
          :menu-data="tabList"
          cl-name.sync="menu"
        />

        <li class="hv" @click="changeActTab('/ContactUs', 'Contact Us')">
          Contact Us
        </li>
        <!-- <div class="ulline"></div> -->
        <!-- <li
          class="hv"
          v-if="$sessionStorage.token"
          @click="changeActTab('/Personal', 'My Profile')"
        >
          My Profile
        </li> -->
        <!-- <li class="hv" v-else @click="changeActTab('/Login', 'Sign Up / Sign In');">Sign Up / Sign In</li> -->

        <!-- <li
          class="hv"
          v-if="$sessionStorage.token"
          @click="changeActTab('/NotificationCenter', 'Notification Center')"
        >
          Notification Center
        </li> -->
        <li class="hv" @click="changeActTab('/Language', 'Languages')">
          Language
        </li>
        <li class="hv" v-if="$sessionStorage.token" @click="logout">
          Logout
        </li>
        <!-- <div class="ulline"></div> -->
      </ul>
    </div>
     
  </div>

</template>

<script>
import MenuTop from "@/components/MenuTop";
import EventHub from '@/util/EventHub';
  import {getUnread} from '@/api/advisors.js'
   import {getAnnouncementList} from '@/api/announcement.js'
   import {getNotificationsList} from '@/api/announcement.js'
   import ClickOutside from 'vue-click-outside'
//    window.addEventListener('click', function(e){   
//   if (document.getElementById('clickbox').contains(e.target)){
//     // Clicked in box
//     alert(isHidden)
//     console.log(C)
//   } else{
//     alert("f")
// console.log(this.isHidden)
//    // isHidden === false ? isHidden= true:isHidden=false
//    // this.isHidden = false
//     // Clicked outside the box
//   }
// });

export default {
  components: {
    MenuTop,
  },
  data() {
    return {
      avatar: this.$store.state.abc,
      notCount:0,
      noticesList:[],
      isHidden: true,
      isHidden1: true,
      isHidden2: true,
      	notificationsCount:	sessionStorage.getItem("notifications_Count"),
        targetId:'',
         pageName: '',
      title:'',
      tabList: [],
       tableList: [],
         tableList1: [],
      isShowTopUl: true,
      lang: this.$i18n.locale,
      language: [
        {
          text: "English",
          value: "en",
        },
        {
          text: "中文简体",
          value: "zh-CN",
        },
        {
          text: "中文繁體",
          value: "zh-TW",
        },
      ],
      logo: "",
      isToken: ''
    };
    
  },

  mounted() {
 if(this.$route.path ==='/Page/10'){

 
   this.getAnnouncementList()
      this.getNotificationsList()
 
   this.showMessage();
  }  
  
  if( this.$route.path !='/Login' && this.$store.state.userType !='customer' &&this.$route.path !='/customerLogin'  ){

  
  if(sessionStorage.token_type != undefined  || sessionStorage.token != undefined){
    this.getUser();
  //  alert("g")
  }
}
  console.log("....****..1.",sessionStorage.token_type)
  console.log("....****..2.",sessionStorage.token)
  //this.getUser();
    this.getLogo();
    this.getTabbar();
    this.getUserInfo();
    let lang = this.$i18n.locale;
    this.$store.commit("changeLang", lang);
    let path = this.$router.history.current.path
      ? this.$router.history.current.path
      : "/Home";
    let biaoti = sessionStorage["currentPage"]
      ? JSON.parse(sessionStorage["currentPage"]).title
      : this.$router.history.current.name;
    // console.log(path, biaoti);
    this.$store.commit("changePage", { tabbar: path, title: biaoti });

    let len = this.$router.history.current.matched.length;
    if (
      this.$router.history.current.matched[len - 1].path == "/Home" ||
      this.$router.history.current.matched[len - 1].path == ""
    ) {
      sessionStorage.removeItem("historyTitle");
    }
    this.isToken = sessionStorage.token
    EventHub.$on('isLogin',(data) => {
      this.isToken = sessionStorage.token
    })
    EventHub.$on('hiddenMenu',(data) => {
      this.isShowTopUl = true
    })
   
  },

//   created() {
//       window.addEventListener('click', function(e){   
//   if (document.getElementById('clickbox').contains(e.target)){
//     // Clicked in box
//     alert(isHidden)
//     console.log(C)
//   } else{
//     alert("f")
// console.log(this.isHidden)
//    // isHidden === false ? isHidden= true:isHidden=false
//    // this.isHidden = false
//     // Clicked outside the box
//   }
// });
//   },
//   events: {
//   nameOfCustomEventToCall (event) {
//     alert("cnfvsdghbjkskj")
//     // do something - probably hide the dropdown menu / modal etc.
//   }
// },
  // events: {
  //   closeEvent () {
  //     console.log('close event called')
  //     this.isHidden = true
  //    // this.hide()
  //   }
  // },
  watch: {
    isShowTopUl() {
      if (!this.isShowTopUl) {
        // document.body.style.overflow='hidden';
      } else {
        document.body.style.overflow = "";
      }
    },
  },
  directives: {
    ClickOutside
  },
  methods: {
  
    hide2 () {
    //  alert("2")
    //  this.opened = false
    this.isHidden = true
  //  this.isHidden === false ? this.isHidden= true:this.isHidden=false
    console.log("______B__________")
   // alert("2")
   // return false;
    },
    hide1 () {
    //  alert("2")
    //  this.opened = false
    this.isHidden1 = true
  //  this.isHidden === false ? this.isHidden= true:this.isHidden=false
    console.log("______B__________")
   // alert("2")
   // return false;
    },
    xyz(){
     // alert("3")
      this.isHidden = true
      this.isHidden1 = false
    },
    qbc(){
     // alert("4")
      this.isHidden = false
      this.isHidden1 = true

    },
    hide () {
   //   alert("5")
    //  this.opened = false
    this.isHidden = true
    this.isHidden1 = true
    console.log("______A__________")
  //  alert("1")
    },
    test1(){
    //  alert("1")
  this.isHidden1 = false
    },
    test(){
    //  alert("1")
  this.isHidden = false
    },
    customerNotification(){
      this.$router.push('/customerNotification')
       this.$store.commit('changePage',{tabbar: '/customerNotification', title: 'Customer Notification'});
    },
  //  getPageContent(){

	// 			this.$axios({
	// 				method: 'get',
	// 				url:'/api/v1/customPages?id='+this.$route.params.page_id,
	// 			}).then(res => {
  //             console.log("++++++++++111111")
	// 				if(res.status === 200){
  //               console.log("++++++++++2222222")
	// 					// this.pageContent = res.data.modules;
	// 					// this.pageWidth = res.data.width;
	// 					this.pageName = res.data.name
	// 				  this.showMessage()
	// 				}else{
	// 				//	this.pageContent = [];
	// 				//	this.pageWidth = '1200';
	// 					// this.$store.commit('changePage',{tabbar: '/ErrorPage', title: 'ErrorPage'});
	// 					// this.$router.push('/ErrorPage');
	// 				}
	// 			}).catch(error=>{

	// 			});
	// 		},
    // 获取头部导航条

    //announcementsShow/notificationsShow/annId/notId
        announcementsShow() {
          document.getElementById('annId').style.display='block'
          document.getElementById('notId').style.display='none'
          
      document.getElementById('notButId').style.color = '#2c3e50'
      document.getElementById('annButId').style.color = '#897359'
        },
            notificationsShow() {
              document.getElementById('notId').style.display='block'
              document.getElementById('annId').style.display='none'
              document.getElementById('notButId').style.color = '#897359'
      document.getElementById('annButId').style.color = '#2c3e50'
            },
    getTabbar() {
      this.$axios({
        method: "get",
        url: "/api/v1/navigations",
      })
        .then((res) => {
          // console.log(">>>>>>>>",res);
          this.tabList = res.data;
        })
        .catch((error) => {
          console.log(JSON.stringify(error));
        });
    },
    getAnnouncementList() {
      getAnnouncementList().then(res => {
        this.tableList = res
        console.log("---Announcement-111---",res)
        // console.log(this.tableList)
      })
    },
      getNotificationsList() {
      getNotificationsList().then(res => {
        this.tableList1 = res
      
        console.log("---getNotificationsList-111---",res)

          var qaz =[]
        for (let i = 0; i < res.length; i++) {
         // alert(res[i].is_read)
if(res[i].is_read ===0){
qaz.push(res[i].is_read)
}
        }
          console.log("---getNotificationsList-111--qaz-",qaz.length)
        // console.log(this.tableList)
      })
    },
     showMessage () {
      	getNotificationsList().then(res => {
					console.log("---getNotificationsList-111-55555--", res)
					var qaz = []
				for (let i = 0; i < res.length; i++) {
						
						if (res[i].is_read == 0) {
							//alert(res[i].is_read)

							qaz.push(res[i].is_read)
						}
					}
				console.log("---getNotificationsList-111--44444444444444-", qaz.length)
				this.notCount=qaz.length
           getUnread().then(res => {
       
            if(res > 0) {
                   console.log("_______________11___2_____",res)
              	this.notificationsCount = res+qaz.length;
                	sessionStorage.setItem("notifications_Count", res+qaz.length)
           
            }
          })
				})
       console.log("++++++++++333333")
       
           console.log("++++++++++444444")
       
        
      },
    isNumber(val) {
      var regPos = /^\d+(\.\d+)?$/; //非负浮点数
      var regNeg =
        /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
      if (regPos.test(val) || regNeg.test(val)) {
        return true;
      } else {
        return false;
      }
    },
    changeActTab(name, title, link) {
      this.isShowTopUl = true;
      if (name == "") {
        if(link=='/Login'){
          this.$store.commit("changePage", {
              tabbar: "/Login",
              title: "Advisor's Sign Up / Sign In",
            });
          this.$router.push("/Login");
        }else{
          let that = this
          this.$router.go(-1);
          setTimeout(() => {
            if(this.$route.path!=null && this.$route.path!=='/Page/10') {
              let arr = this.$route.path.split('/')
              console.log(arr)
              if(arr[1] === 'Performance') {
                this.$store.commit("changePage", {
                  tabbar: "",
                  title: 'My Performance',
                });
              }else if(arr[1] ==='OrganizeChartDetail'){
                this.$store.commit("changePage", {
                  tabbar: "",
                  title: 'Organizational Sales',
                });
              }else if(arr[1] ==='OrganizeChartDetail2'){
                this.$store.commit("changePage", {
                  tabbar: "",
                  title: 'Personal Sales',
                });
              }else if(arr[1] ==='OrganizeChart'){
                this.$store.commit("changePage", {
                  tabbar: "",
                  title: 'Organizational Sales',
                });
              }else{
                this.$store.commit("changePage", {
                  tabbar: "",
                  title: arr[1],
                });
              }
            }else {
              this.$store.commit("changePage", {
                tabbar: "",
                title: '',
              });
            }
          },100)
        }
      } else {
        if (this.isNumber(name)) {
          if (
            title.indexOf("login") != -1 ||
            title.indexOf("Login") != -1 ||
            title.indexOf("登錄") != -1 ||
            title.indexOf("登录") != -1
          ) {
            sessionStorage.setItem("page_id", name);
            this.$store.commit("changePage", {
              tabbar: "/Login",
              title: "Advisor's Sign Up / Sign In",
            });
            this.$router.push("/Login");
          } else {
            if (name == 10) {
              this.$store.commit("changePage", {
                tabbar: "/Page/" + name,
                title: title,
              });
              this.$router.push("/Page/" + name);
            } else {
              this.$store.commit("changePage", {
                tabbar: link,
                title: title,
              });
              this.$router.push(link);
            }
          }
        } else {
          this.$store.commit("changePage", { tabbar: name, title: title });
          this.$router.push(name);
        }
      }
    },
    toLogin1() {
      var result = confirm("Are you sure you want to Logout?");
    if(result){
        // Delete logic goes here
    
      if (this.isToken) {
        this.logout1()
      } else {
        this.$store.commit("changePage", {
          tabbar: "/customerLogin",
          title: "Customer Login",
        });
        this.$router.push("/customerLogin");
      }
    }
    },
    toLogin() {
      var result = confirm("Are you sure you want to Logout?");
    if(result){
        // Delete logic goes here
    
      if (this.isToken) {
        this.logout()
      } else {
        this.$store.commit("changePage", {
          tabbar: "/Login",
          title: "Advisor's Sign Up / Sign In",
        });
        this.$router.push("/Login");
      }
    }
    },
    changeLang(val) {
      console.log(val);
      this.$i18n.locale = val;
      this.$Local(val);
      window.location.reload();
      sessionStorage.setItem("language", val);
    },
    choonseLang(lang) {
      this.$axios({
        method: "get",
        url: "/api/setLocale?lang=" + lang,
        headers: {
          Authorization:
            this.$sessionStorage.token_type + this.$sessionStorage.token,
        },
      })
        .then((response) => {
          console.log(response);
          window.location.reload();
        })
        .catch((error) => {
          console.log(JSON.stringify(error));
        });
    },
    getUserInfo() {},
    getLogo() {
      this.$axios({
        method: "get",
        url: "/api/v1/webset",
      })
        .then((res) => {
          // console.log(res, "Logo");
          this.logo = res.logo;
        })
        .catch((err) => {
          console.log(err, "獲取logo異常");
        });
    },
    notificationsDetails(item) {
      console.log("sss",item)
      this.$router.push({
        path: './AnnouncementDetail',
        query: {id: item.id}
      })
    },
    getUser() {
      this.$axios({
        method: "get",
        url: "/api/v1/user",
        headers: {
          Authorization: sessionStorage.token_type + sessionStorage.token,
        },
      })
        .then((res) => {
        //   console.log(".......user..details...",res)
        //   sessionStorage.setItem("user_id", res.code);
            // sessionStorage.setItem("user_name", res.first_name+" "+res.third_name);
            // sessionStorage.setItem("user_passportNo", res.passport);
            this.$store.commit('Changeabc',res.avatar)
           // sessionStorage.setItem("avatar", res.avatar);
          
        })
        .catch((err) => {
          this.$toast({
            type: "fail",
            message: "error",
          });
        });
    },
    goWhtasapp() {
           window.open("https://api.whatsapp.com/send?phone=919778420812&;text='", '_blank');
                    },
    goHome() {
           // targetId = event.currentTarget.id;
           // returns 'foo'
           this.$router.push("/Page/10");

           
       this.$store.commit('changePage',{tabbar: '/Page/10', title: 'Advisors'});
                    },



                    select11() {
           // targetId = event.currentTarget.id;
           // returns 'foo'
           this.$router.push("/Personal");
        },
    // select: function(event) {
        select1() {
           // targetId = event.currentTarget.id;
           // returns 'foo'
             this.$router.push({
        path: '/Announcement',
        query: {type: "ann"}
        
      })
        },
       select(event, item) {
           // targetId = event.currentTarget.id;
            console.log(item.id); // returns 'foo'
             this.$router.push({
        path: '/AnnouncementDetail',
        query: {id: item.id}
      })
        },
         select1B() {
           // targetId = event.currentTarget.id;
           // returns 'foo'
             this.$router.push({
        path: '/Announcement',
         query: {type: "not"}
        
      })
        },


       selectA(event, item) {
        this.isHidden = true
      //       console.log(item.id); 
      //        this.$router.push({
      //   path: '/NotificationsDetail',
      //   query: {id: item.id}
      // })
      console.log(".......toFill.......item..",item)
          //  console.log(".......toFill.......product_id..",item.product_id)
            this.$router.push({
        path: '/RequestDetails',
        query: { id: item.ticket_id }
      })
  //           if(item.product_id === 1){
  //             this.$store.commit('changePage', {
  //       tabbar: '/OrderDetail',
  //       title: 'OrderDetail',
  //     });
  //     sessionStorage.setItem('orderId',JSON.stringify(item.order_id))
  //    // sessionStorage.setItem('orderStatus',item.status)
  //     this.$router.push({path: '/OrderDetail', query: {id: item.order_id}});
  //           }


  //           else if (item.product_id === 2){
  //  this.$store.commit('changePage', {
  //       tabbar: '/OrderDetailGep',
  //       title: 'OrderDetailGep',
  //     });
  //     sessionStorage.setItem('orderId',JSON.stringify(item.order_id))
  //    // sessionStorage.setItem('orderStatus',item.status)
  //     this.$router.push({path: '/OrderDetailGep', query: {id: item.order_id}});

  //           }

  //           else{
  //  this.$store.commit('changePage', {
  //       tabbar: '/OrderDetailGep2',
  //       title: 'OrderDetailGep2',
  //     });
  //     sessionStorage.setItem('orderId',JSON.stringify(item.order_id))
  //   //  sessionStorage.setItem('orderStatus',item.status)
  //     this.$router.push({path: '/OrderDetailGep2', query: {id: item.order_id}});

  //           }






        },




        logout1() {
      sessionStorage.token = ''
      sessionStorage.token_type = ''
      sessionStorage.userType = ''
      this.$toast({
        type: 'success',
        message: 'Exit \n Successful'
      })
             	sessionStorage.setItem("notifications_Count", '')
      this.$router.push("/customerLogin");
      this.isToken = sessionStorage.token
    //  this.$router.go(0)
    },
    // 退出登錄
    logout() {
      sessionStorage.token = ''
      sessionStorage.token_type = ''
      this.$toast({
        type: 'success',
        message: 'Exit \n Successful'
      })
             	sessionStorage.setItem("notifications_Count", '')
      this.$router.push("/Login");
      this.isToken = sessionStorage.token
      this.$router.go(0)
    },
  },
};
</script>
<style scoped>
/deep/ .van-dropdown-menu,
/deep/ .van-dropdown-menu__item,
/deep/ .van-dropdown-menu__bar {
  background-color: #cbcdce;
  box-shadow: none;
}
/deep/ .van-dropdown-menu__title::after {
  display: none;
}
.header {
  width: 100%;
  /*height: 80px;*/
  height: 90px;
  background-color: #fff;
}
.header-main {
  font-size: 16px;
  position: relative;
}
.mobileMenu {
  display: inline-flex;
  height: 30px;
  line-height: 30px;
  margin-top: 35px;
  margin-left: 20px;
}
.logo {
  width: 100px;
}
.tab {
  width: 100%;
  height: 26px;
  line-height: 26px;
  display: flex;
  justify-content: space-around;
  color: #7b5c55;
}
.tap > li {
  height: 26px;
  text-align: center;
  color: #4b4b4b;
}
.active {
  border-bottom: 2px solid #4b4b4b;
}
.main-right {
  width: 100%;
  height: 24px;
  line-height: 24px;
  color: #7b5d56;
  font-size: 16px;
  display: flex;
  justify-content: space-around;
}
.right-item {
  display: flex;
  align-items: center;
}
.right-item > span {
  text-indent: 10px;
  max-width: 90px;
  margin-right: 5px;
  white-space: nowrap;
  overflow: hidden;
}
.right-item .el-image {
  width: 20px;
  height: 20px;
}
.right-item .langImg {
  width: 30px;
  height: 20px;
}
/*下拉选项*/
.menuInfo {
  font-family: FandolSong;
  position: absolute;
  height: 50vh;
  /*top:80px;*/
  top: 80px;
  right: 0;
  bottom: 0;
  width: auto;
  padding: 0 20px;
  z-index: 10;
  text-align: right;
  line-height: 40px;
  background-color: #7b655d;
  font-size: 24px;
  color: #fff;
  /* overflow-y: auto; */
  min-height: 100%;
}
.active {
  border-bottom: none;
}
.right-item {
  position: relative;
}
.right-item span {
  position: absolute;
  bottom: -20px;
  left: 0%;
  text-indent: 0px;
  font-size: 14px;
}
.SignUpIn {
  margin-right: 10%;
  font-size: 100%;
  color: #897359;
  cursor: pointer;
}
.titleBig {
  font-size: 2.5rem;
  font-family: FandolSong;
  color: #897359;
  margin-top : 2.5rem;
}
/*手机*/
@media screen and (max-width: 768px) {
  .header {
    /*height: 60px;*/
    height: 70px;
  }
  .header-main {
    width: 100%;
    height: 60px;
		margin: 0 auto;
  }
  .mobileMenu {
    display: inline-flex;
    height: 30px;
    line-height: 30px;
    margin-top: 25px;
    margin-left: 20px;
  }
  .logo {
    width: 70px;
  }
  .main-right {
    width: 100%;
    height: 24px;
    line-height: 24px;
    color: #7b5d56;
    font-size: 16px;
    display: flex;
    justify-content: space-around;
  }
  /*下拉选项*/
  .menuInfo {
    position: fixed;
    height: auto;
    width: 100%; /*top:60px;*/
    top: 70px;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 0;
    z-index: 10;
    text-align: center;
    line-height: 40px;
    background-color: #7b655d;
    font-size: 20px;
    color: #fff;
  }
  .active {
    border-bottom: none;
  }
  .right-item {
    position: relative;
  }
  .right-item span {
    position: absolute;
    bottom: -20px;
    left: 0%;
    text-indent: 0px;
    font-size: 14px;
  }
  .SignUpIn {
    display: none;
  }
  .titleBig {
    font-size: 3rem;
  }
}
/*平板*/
@media screen and (min-width: 768px) and (max-width: 992px) {
  .header {
    /*height: 80px;*/
    height: 90px;
  }
  .header-main {
    width: 100%;
    margin: 0 auto;
    height: 80px;
		/* font-size: 40px; */
  }
  .mobileMenu {
    display: inline-flex;
    height: 30px;
    line-height: 30px;
    margin-top: 35px;
    margin-left: 20px;
  }
  .logo {
    width: 86px;
  }
  .tab {
    width: 100%;
    height: 26px;
    line-height: 26px;
    display: flex;
    justify-content: space-around;
    margin-top: 37px;
    color: #7b5c55;
  }
  .tap > li {
    height: 26px;
    text-align: center;
    color: #4b4b4b;
  }
  .active {
    border-bottom: 2px solid #4b4b4b;
  }
  .main-right {
    width: 100%;
    height: 24px;
    line-height: 24px;
    color: #7b5d56;
    font-size: 16px;
    margin-top: 38px;
    display: flex;
    justify-content: space-around;
  }
  .SignUpIn {
    display: none;
  }
  .titleBig {
    font-size: 3rem;
  }
}
/*中等屏幕*/
@media screen and (min-width: 992px) and (max-width: 1200px) {
  .header {
    /*height: 80px;*/
    height: 90px;
  }
  .header-main {
    width: 100%;
    height: 80px;
    margin: 0 auto;
  }
}
/*大屏幕*/
@media screen and (min-width: 1200px) {
  .header {
    /*height: 90px;*/
    height: 100px;
  }
  .header-main {
    width: 100%;
    max-width: 1200px;
    height: 80px;
    margin: 0 auto;
  }
}
.ulline {
  border:1px solid #999;
  width:50%;
  margin-left:50%;
}
.pos-rel{
  position:relative;
}
.notfctn-btn{
    width: 18px;
    height: 18px;
    border: 1px solid red;
    position: absolute;
    border-radius: 50px;
    background-color: red;
    top: 10px;
    right: 12px;
    color: #fff;
    font-size: 14px;
}
.notifcation-box{
      width: 400px;
    min-height: 200px;
    position: absolute;
    z-index: 999;
    background-color: #cbcbcb;
    right: 73px;
    top: 64px;
    border-radius: 15px;

}
.notfctn-row{
      display: flex;
    justify-content: space-between;
           padding: 15px 30px;
    /* border-bottom: 1px solid #fff; */
}
.notifctn-left{
      width: 320px;
    text-align: left;
    font-size:14px;
    font-weight:600px;
}
.notifctn-right{
      width: 200px;
    text-align: right;
    font-size:14px;
    padding-top:8px;

}

.attachmnt-text{
  font-size:12px;
  color:#cd1f1f;
  padding-bottom:5px;
}
.notfctn-viewall{
      text-align: center;
    padding: 15px;
    font-size: 17px;
    font-weight: 600;
}
.notfctn-row-bg{
  background-color:#fff;
}
.dot-right{
  color:red;
  font-size:18px;
}
.notifcation-box.logot{
  min-height: 100px !important;
  width: 200px;
  background-color: #ffffff;
  right: 10px;
  border-radius: 15px;
  border: 1px solid #cbcbcb;
}
.notifcation-box.logot1{
  min-height: 50px !important;
  width: 200px;
  background-color: #ffffff;
  right: 10px;
  border-radius: 15px;
  border: 1px solid #cbcbcb;
}
/deep/ #notId .van-cell.van-cell--center{
  border-bottom: 1px solid #ccc;
}

</style>
