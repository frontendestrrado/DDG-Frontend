import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Index from '@/views/Index'
import Login from '@/views/Login'
import ContactUs from '@/views/ContactUs'
import Language from '@/views/Language'

import Advisors from '@/views/Advisors'

Vue.use(Router)

export default new Router({
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
      name: 'Advisors',
      component: Advisors,
    }]
  }
  ]
})
