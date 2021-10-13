import Vue from 'vue'
import Router from 'vue-router'
import store from '../store';

import Home from '@/views/Home'
import Index from '@/views/Index'
import Login from '@/views/Login'
import Personal from '@/views/Personal'
import ContactUs from '@/views/ContactUs'
import Language from '@/views/Language'

import Advisors from '@/views/Advisors'
import Page from '@/views/Page'
import ErrorPage from '@/views/ErrorPage'

import OrganizeChart from '@/tools/OrganizeChart'
import OrganizeList from '@/tools/OrganizeList'
import OrganizeReport from '@/tools/OrganizeReport'
import Performance from '@/tools/Performance'
import PersonalGrowth from '@/tools/PersonalGrowth'
import TrainingPlan from '@/tools/TrainingPlan'
import ToolBox from '@/tools/ToolBox'
import InvestmentTool from '@/tools/InvestmentTool'
import InviteCustomers from '@/tools/InviteCustomers'
import LearnUse from '@/tools/LearnUse'
import TeachTools from '@/tools/TeachTools'
import FormsPage from '@/tools/FormsPage'
import FilesPage from '@/tools/FilesPage'
import Cases from '@/tools/Cases'

Vue.use(Router)

const router = new Router({
  routes: [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/Index',
    children: [{
      path: '/Index',
      name: '首页',
      component: Index
    },{
      path: '/Login',
      name: '登录',
      component: Login,
    },{
      path: '/Personal',
      name: '个人信息',
      component: Personal,
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
    },{
      path: '/OrganizeList/:id',
      name: '组织图列表',
      component: OrganizeList,
    },{
      path: '/OrganizeReport/:id',
      name: '组织图详情',
      component: OrganizeReport,
    },{
      path: '/Performance',
      name: '业绩',
      component: Performance,
    },{
      path: '/Cases',
      name: '个案',
      component: Cases,
    },{
      path: '/PersonalGrowth',
      name: '个人成长',
      component: PersonalGrowth,
    },{
      path: '/TrainingPlan',
      name: '培训计划',
      component: TrainingPlan,
    },{
      path: '/ToolBox',
      name: '工具箱',
      component: ToolBox,
    },{
      path: '/InvestmentTool',
      name: '招商工具',
      component: InvestmentTool,
    },{
      path: '/InviteCustomers',
      name: '邀请客户',
      component: InviteCustomers,
    },{
      path: '/LearnUse',
      name: '学习使用',
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
//     next();
//     // if (sessionStorage.token ||to.matched.some(record => record.meta.through)) {
//     //     next()
//     // } else {
//     //     return next({ path: '/' })
//     // }
// });

export default router;