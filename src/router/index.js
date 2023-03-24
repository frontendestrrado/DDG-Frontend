import Vue from 'vue'
import Router from 'vue-router'
import store from '../store';

import Home from '@/views/Home'
import Index from '@/views/Index'
import Login from '@/views/Login'
import Personal from '@/views/Personal'
import NotificationCenter from '@/views/NotificationCenter'
import NotificationDetail from '@/views/NotificationDetail'
import ContactUs from '@/views/ContactUs'
import Language from '@/views/Language'

import Advisors from '@/views/Advisors'
import Page from '@/views/Page'
import ErrorPage from '@/views/ErrorPage'

import OrganizeChart from '@/tools/OrganizeChart'
import Faq from '@/tools/Faq'
import Birthday from '@/tools/Birthday'
import HelpDesk from '@/tools/HelpDesk'
import RequestDetails from '@/tools/RequestDetails'
import NewRequest from '@/tools/NewRequest'
import OrganizeList from '@/tools/OrganizeList'
import OrganizeReport from '@/tools/OrganizeReport'
import OrganizeUnit from '@/tools/OrganizeUnit'
import Performance from '@/tools/Performance'
import PerformanceList from '@/tools/PerformanceList'
import PerformanceDetail from '@/tools/PerformanceDetail'
import PersonalGrowth from '@/tools/PersonalGrowth'
import ToolBox from '@/tools/ToolBox'
import FormList from '@/tools/FormList'

import InviteCustomers from '@/tools/InviteCustomers'
import Members from '@/tools/Members'
import MemberDetail from '@/tools/MemberDetail'
import InvestmentTools from '@/tools/InvestmentTools'
import InfoIcollected from '@/tools/InfoIcollected'
import OrderSignature from '@/tools/order/OrderSignature'
import OrderSignatureGep from '@/tools/order/OrderSignatureGep'
import OrderSignatureGep2 from '@/tools/order/OrderSignatureGep2'
import OrderSignatureCustomers from '@/tools/order/OrderSignatureCustomers'
import OrderSignatureCustomersGep from '@/tools/order/OrderSignatureCustomersGep'
import OrderSignatureCustomersGep2 from '@/tools/order/OrderSignatureCustomersGep2'
import LearnUse from '@/tools/LearnUse'
import TeachTools from '@/tools/TeachTools'
import FormsPage from '@/tools/FormsPage'
import FilesPage from '@/tools/FilesPage'
import Cases from '@/tools/Cases'
import AnnouncementDetail from "../views/announcement/AnnouncementDetail.vue";
import NotificationsDetail from "../views/announcement/NotificationsDetail.vue";

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Sign Up / Sign In',
      redirect: '/Login',
    },
    // {
    //   path: '/customerLogin',
    //   name: 'Customer Login',
    //   redirect: '/customerLogin',
    // },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [{
        path: '/Home',
        name: '首页',
        component: Index
      },{
        path: '/Aspirations',
        name: 'Aspirations',
        component: () => import('../views/Aspirations'),
      },{
        path: '/Products',
        name: 'Products',
        component: () => import('../views/Products'),
      },{
        path: '/OurServices',
        name: 'OurServices',
        component: () => import('../views/OurServices'),
      },{
        path: '/TheAIGenerationt',
        name: 'TheAIGenerationt',
        component: () => import('../views/TheAIGenerationt'),
      },{
        path: '/DDGLeadership',
        name: 'DDGLeadership',
        component: () => import('../views/DDGLeadership'),
      },{
        path: '/Login',
        name: 'Advisor\'s Sign Up / Sign In',
        component: Login,
      }
    
      ,{
        path: '/ChangePassword',
        name: 'ChangePassword',
        component: () => import('../views/ChangePassword.vue'),
      },
        {
          path: '/NewPassword',
          name: 'NewPassword',
          component: () => import('../views/NewPassword.vue'),
        },{
        path: '/OrderSignatureCustomers',
        name: 'OrderSignatureCustomers',
        component: OrderSignatureCustomers,
      },
      {
        path: '/OrderSignatureCustomersGep',
        name: 'OrderSignatureCustomersGep',
        component: OrderSignatureCustomersGep,
      },
      {
        path: '/OrderSignatureCustomersGep2',
        name: 'OrderSignatureCustomersGep2',
        component: OrderSignatureCustomersGep2,
      },{
        path: '/OrderSignature',
        name: 'OrderSignature',
        component: OrderSignature,
      },{
        path: '/OrderSignatureGep',
        name: 'OrderSignatureGep',
        component: OrderSignatureGep,
      },
      {
        path: '/OrderSignatureGep2',
        name: 'OrderSignatureGep2',
        component: OrderSignatureGep2,
      },{
        path: '/Personal',
        name: '个人信息',
        component: Personal,
      },{
        path: '/NotificationCenter',
        name: '通知中心',
        component: NotificationCenter,
      },{
        path: '/NotificationDetail/:id',
        name: '通知详情',
        component: NotificationDetail,
      },{
        path: '/ContactUs',
        name: '联系我们',
        component: ContactUs,
      },{
        path: '/Language',
        name: '切换语言',
        component: Language,
      },{
        path: '/Advisors',
        name: '顾问',
        component: Advisors,
      },{
        path: '/Page/:page_id',
        name: '自定义页面',
        component: Page,
      },{
        path: '/OrganizeChart',
        name: '组织图',
        component: OrganizeChart,
      },
      {
        path: '/Faq',
        name: 'Faq',
        component: Faq,
      },
      {
        path: '/birthday',
        name: 'Birthday',
        component: Birthday,
      },
      {
        path: '/NewRequest',
        name: 'SubmitANewRequest',
        component: NewRequest,
      },
      {
        path: '/helpDesk',
        name: 'HelpDesk',
        component: HelpDesk,
      },
      {
        path: '/RequestDetails',
        name: 'RequestDetails',
        component: RequestDetails,
      },
        {
          path: '/OrganizeChartDetail',
          name: 'OrganizeChartDetail',
          component: () => import('../tools/OrganizeChartDetail.vue'),
        },
        {
          path: '/OrganizeChartDetail1',
          name: 'OrganizeChartDetail1',
          component: () => import('../tools/OrganizeChartDetail1.vue'),
        },
        {
          path: '/OrganizeChartDetail2',
          name: 'OrganizeChartDetail2',
          component: () => import('../tools/OrganizeChartDetail2.vue'),
        },
        {
          path: '/OrganizeChartDetail3',
          name: 'OrganizeChartDetail3',
          component: () => import('../tools/OrganizeChartDetail3.vue'),
        },
        {
        path: '/OrganizeList/:id',
        name: '组织图列表',
        component: OrganizeList,
      },{
        path: '/OrganizeReport/:id',
        name: '组织图详情',
        component: OrganizeReport,
      },{
        path: '/OrganizeUnit/:id',
        name: '组织图團隊',
        component: OrganizeUnit,
      },{
        path: '/OrganizeTeam',
        name: 'MyTeam',
        component: () => import('../tools/OrganizeTeam'),
      },{
        path: '/OrganizeGroup',
        name: 'MyGroup',
        component: () => import('../tools/OrganizeGroup'),
      },{
        path: '/Performance',
        name: '业绩',
        component: () => import('@/views/performance/index'),
      },
      {
        path: '/PerformanceDetail',
        name: '业绩詳情',
        component: () => import('@/views/performance/performanceDetail'),
      },{
        path: '/PerformanceList',
        name: '业绩列表',
        component: PerformanceList,
      },{
        path: '/PerformanceDetail/:id',
        name: '业绩详情',
        component: PerformanceDetail,
      },{
        path: '/Cases',
        name: '个案',
        component: Cases,
      },{
        path: '/PersonalGrowth',
        name: '个人成长',
        component: PersonalGrowth,
      },{
        path: '/ToolBox',
        name: '工具箱',
        component: ToolBox,
      },{
        path: '/InviteCustomers',
        name: '邀请客户',
        component: InviteCustomers,
      },{
        path: '/Members',
        name: '成員列表',
        component: Members,
      },{
        path: '/MemberDetail',
        name: '成員詳情',
        component: MemberDetail,
      },{
        path: '/InvestmentTools',
        name: '招商工具',
        component: InvestmentTools,
      },{
        path: '/InfoIcollected',
        name: '我收集的資料',
        component: InfoIcollected,
      },{
        path: '/InfoDetail',
        name: 'InfoDetail',
        component: () => import('@/tools/InfoDetail'),
      },{
        path: '/OrderList',
        name: 'OrderList',
        component: () => import('@/tools/order/OrderList'),
      },{
        path: '/OrderDetail',
        name: 'OrderDetail',
        component: () => import('@/tools/order/OrderDetail'),
      },
      {
        path: '/OrderDetailGep',
        name: 'OrderDetailGep',
        component: () => import('@/tools/order/OrderDetailGep'),
      },
      {
        path: '/OrderDetailGep2',
        name: 'OrderDetailGep2',
        component: () => import('@/tools/order/OrderDetailGep2'),
      },{
        path: '/CreateOrder',
        name: 'CreateOrder',
        component: () => import('@/tools/order/CreateOrder'),
      },{
        path: '/KYC',
        name: 'KYC',
        component: () => import('@/tools/order/KYC'),
      }
      ,{
        path: '/KYCGep',
        name: 'KYCGep',
        component: () => import('@/tools/gep/KYCGep'),
      },
      {
        path: '/ViewSendNotifications',
        name: 'ViewSendNotifications',
        component: () => import('@/tools/gep/ViewSendNotifications'),
      },
       {
        path: '/SendNotifications',
        name: 'SendNotifications',
        component: () => import('@/tools/gep/SendNotifications'),
      },
      {
        path: '/ManageNotifications',
        name: 'ManageNotifications',
        component: () => import('@/tools/gep/ManageNotifications'),
      },{
        path: '/CustomerApplicationGep',
        name: 'CustomerApplicationGep',
        component: () => import('@/tools/gep/CustomerApplicationGep'),
      },
      {
        path: '/LetterOfWishesGep2',
        name: 'LetterOfWishesGep2',
        component: () => import('@/tools/gep/LetterOfWishesGep2'),
      },
      {
        path: '/KYCGep2',
        name: 'KYCGep2',
        component: () => import('@/tools/gep/KYCGep2'),
      },
      {
        path: '/CustomerApplicationGep2',
        name: 'CustomerApplicationGep2',
        component: () => import('@/tools/gep/CustomerApplicationGep2'),
      },
      {
        path: '/CustomerApplication',
        name: 'CustomerApplication',
        component: () => import('@/tools/order/CustomerApplication'),
      },
      {
        path: '/CustomerApplicationNew',
        name: 'CustomerApplicationNew',
        component: () => import('@/tools/advisorNew/CustomerApplicationNew'),
      },{
        path: '/SelectProduct',
        name: 'SelectProduct',
        component: () => import('@/tools/order/SelectProduct'),
      },
      ,{
        path: '/Gep',
        name: 'Gep',
        component: () => import('@/tools/order/Gep'),
      },{
        path: '/customerLogin',
        name: 'customerLogin',
        component: () => import('@/tools/customer/customerLogin'),
      },
      
      {
        path: '/customerHome',
        name: 'customerHome',
        component: () => import('@/tools/customer/customerHome'),
      },
      {
        path: '/customerNotification',
        name: 'customerNotification',
        component: () => import('@/tools/customer/customerNotification'),
      },
      {
        path: '/Choose',
        name: 'Choose',
        component: () => import('@/tools/order/Choose'),
      },{
        path: '/ChooseGep',
        name: 'ChooseGep',
        component: () => import('@/tools/order/ChooseGep'),
      },{
        path: '/ChooseGep2',
        name: 'ChooseGep2',
        component: () => import('@/tools/order/ChooseGep2'),
      },
      {
        path: '/ChooseGep2Val',
        name: 'ChooseGep2Val',
        component: () => import('@/tools/order/ChooseGep2Val'),
      },{
        path: '/LetterOfWishes',
        name: 'LetterOfWishes',
        component: () => import('@/tools/order/LetterOfWishes'),
      },{
        path: '/LetterOfWishesGep',
        name: 'LetterOfWishesGep',
        component: () => import('@/tools/gep/LetterOfWishesGep'),
      },{
        path: '/PDPAMemo',
        name: 'PDPAMemo',
        component: () => import('@/tools/order/PDPAMemo'),
      },
      {
        path: '/PDPAMemoGep',
        name: 'PDPAMemoGep',
        component: () => import('@/tools/gep/PDPAMemoGep'),
      },{
        path: '/DocumentChecklistGep',
        name: 'DocumentChecklistGep',
        component: () => import('@/tools/gep/DocumentChecklistGep'),
      },
      
      {
        path: '/DocumentChecklist',
        name: 'DocumentChecklist',
        component: () => import('@/tools/order/DocumentChecklist'),
      },{
        path: '/ThirdPartyDeclaration',
        name: 'ThirdPartyDeclaration',
        component: () => import('@/tools/order/ThirdPartyDeclaration'),
      },{
        path: '/LearnUse',
        name: '培训计划',
        component: LearnUse,
      },{
        path: '/TeachTools',
        name: '教导工具',
        component: TeachTools,
      },{
        path: '/FormsPage',
        name: '表格',
        component: FormsPage,
      },{
        path: '/FilesPage',
        name: '文件',
        component: FilesPage,
      },]
    },
    {
      path: '/TrainingCenter',
      name: 'TrainingCenter',
      beforeEnter: (to,from,next) => {
        if(sessionStorage.getItem('token')) {
          next()
        }else{
          next(false)
        }
      },
      component: () => import('@/views/training-center/index.vue'),
    },
    {
      path: '/VideoDetail',
      name: 'VideoDetail',
      beforeEnter: (to,from,next) => {
        if(sessionStorage.getItem('token')) {
          next()
        }else{
          next(false)
        }
      },
      component: () => import('@/views/training-center/VideoDetail.vue'),
    },
    {
      path: '/Announcement',
      name: 'Announcement',
      beforeEnter: (to,from,next) => {
        if(sessionStorage.getItem('token')) {
          next()
        }else{
          next(false)
        }
      },
      component: () => import('@/views/announcement/index.vue'),
    },
    {
      path: '/AnnouncementDetail',
      name: 'AnnouncementDetail',
      beforeEnter: (to,from,next) => {
        if(sessionStorage.getItem('token')) {
          next()
        }else{
          next(false)
        }
      },
      component: () => import('@/views/announcement/AnnouncementDetail.vue')
    },
    {
      path: '/NotificationsDetail',
      name: 'NotificationsDetail',
      beforeEnter: (to,from,next) => {
        if(sessionStorage.getItem('token')) {
          next()
        }else{
          next(false)
        }
      },
      component: () => import('@/views/announcement/NotificationsDetail.vue')
    },
    {
      path: '/FormList',
      name: 'FormList',
      beforeEnter: (to,from,next) => {
        if(sessionStorage.getItem('token')) {
          next()
        }else{
          next(false)
        }
      },
      component: () => import('@/views/forms/index.vue'),
    },
    {
      path: '/ErrorPage',
      name: '报错页面',
      component: ErrorPage,
    }
  ]
})

//push
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = Router.prototype.replace
Router.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}

// router.beforeEach((to, from, next) => {
//     // console.log('********************************************')
//     // console.log('from:'+from.path, from.name);
//     // console.log('to:'+to.path, to.name);
//     // console.log('********************************************')
//     if(to.path=='/OrderSignature'){
//       this.$store.commit('changeIsmenutop',false)
//     }else{
//       this.$store.commit('changeIsmenutop',true)
//     }
//     next();
//     // if (sessionStorage.token ||to.matched.some(record => record.meta.through)) {
//     //     next()
//     // } else {
//     //     return next({ path: '/' })
//     // }

// });
router.mode = 'hash'
export default router;
