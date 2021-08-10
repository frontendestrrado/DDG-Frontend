import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Index from '@/views/Index'
import Login from '@/views/Login'

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
      name: 'Login',
      component: Login,
      meta: { through: true },
    }]
  }
  ]
})
