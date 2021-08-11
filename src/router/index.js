import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Index from '@/views/Index'
import Login from '@/views/Login'
import ContactUs from '@/views/ContactUs'
import Language from '@/views/Language'

import Advisors from '@/views/Advisors'
import Page from '@/views/Page'
import ErrorPage from '@/views/ErrorPage'

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
    }]
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

export default router;