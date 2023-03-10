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
        name: '??????',
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
        name: '????????????',
        component: Personal,
      },{
        path: '/NotificationCenter',
        name: '????????????',
        component: NotificationCenter,
      },{
        path: '/NotificationDetail/:id',
        name: '????????????',
        component: NotificationDetail,
      },{
        path: '/ContactUs',
        name: '????????????',
        component: ContactUs,
      },{
        path: '/Language',
        name: '????????????',
        component: Language,
      },{
        path: '/Advisors',
        name: '??????',
        component: Advisors,
      },{
        path: '/Page/:page_id',
        name: '???????????????',
        component: Page,
      },{
        path: '/OrganizeChart',
        name: '?????????',
        component: OrganizeChart,
      },
      {
        path: '/Faq',
        name: '?????????',
        component: Faq,
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
        name: '???????????????',
        component: OrganizeList,
      },{
        path: '/OrganizeReport/:id',
        name: '???????????????',
        component: OrganizeReport,
      },{
        path: '/OrganizeUnit/:id',
        name: '???????????????',
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
        name: '??????',
        component: () => import('@/views/performance/index'),
      },
      {
        path: '/PerformanceDetail',
        name: '????????????',
        component: () => import('@/views/performance/performanceDetail'),
      },{
        path: '/PerformanceList',
        name: '????????????',
        component: PerformanceList,
      },{
        path: '/PerformanceDetail/:id',
        name: '????????????',
        component: PerformanceDetail,
      },{
        path: '/Cases',
        name: '??????',
        component: Cases,
      },{
        path: '/PersonalGrowth',
        name: '????????????',
        component: PersonalGrowth,
      },{
        path: '/ToolBox',
        name: '?????????',
        component: ToolBox,
      },{
        path: '/InviteCustomers',
        name: '????????????',
        component: InviteCustomers,
      },{
        path: '/Members',
        name: '????????????',
        component: Members,
      },{
        path: '/MemberDetail',
        name: '????????????',
        component: MemberDetail,
      },{
        path: '/InvestmentTools',
        name: '????????????',
        component: InvestmentTools,
      },{
        path: '/InfoIcollected',
        name: '??????????????????',
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
        name: '????????????',
        component: LearnUse,
      },{
        path: '/TeachTools',
        name: '????????????',
        component: TeachTools,
      },{
        path: '/FormsPage',
        name: '??????',
        component: FormsPage,
      },{
        path: '/FilesPage',
        name: '??????',
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
      name: '????????????',
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
