// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './http';
import store from './store';
// import echarts from 'echarts';
import  * as echarts from "echarts"; //5.0 以上的引入方式

import Vant from 'vant';
import 'vant/lib/index.css';
import '@vant/touch-emulator';
import './assets/css/font.css';

import './rem.js'

import vueEsign from 'vue-esign'
Vue.use(vueEsign)

// google地圖
// import 'vue-googlemaps/dist/vue-googlemaps.css'
// import VueGoogleMaps from 'vue-googlemaps'
// Vue.use(VueGoogleMaps, {
//   load: {
//     //填入申请的apiKey账号
//     apiKey: 'AIzaSyAb-8NBGGTK8YuH3CkhkV8eGRDcEJdyGt8',
//     libraries: ['places'],
//     useBetaRenderer: false,
//   },
// })
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    //填入申请的apiKey账号
    key: 'AIzaSyDNC2MO9tl5mMc9H_DcWVisMHC2hI0IR1M', // 家政key
    libraries: 'places', // This is required if you use the Autocomplete plugin
    useBetaRenderer: false,
  },
  installComponents: true
})

import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

Vue.config.productionTip = false
Vue.use(Vant);

Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;
Vue.prototype.$sessionStorage = sessionStorage;

if(process.env.NODE_ENV=='development'){
	Vue.prototype.$build = '/build';
}else{
	Vue.prototype.$build = 'https://www.bunchparty.com/trust';
	// Vue.prototype.$build = 'http://184.168.127.123/trustb'; //正式服
	// Vue.prototype.$build = 'https://ddgint.com/trustb'; //正式服
}

import locales from './lang/vantLocal.js' 
let cn = require( '@/lang/zh-CN'); // 中文简体; 
let en = require( '@/lang/en'); // 英文; 
let tw = require( '@/lang/zh-TW'); // 中文繁体; 

const i18n = new VueI18n({
	locale:sessionStorage.getItem('language')||'en', 
	messages:{
		'zh-CN':{...cn},
		'en':{...en},
		'zh-TW':{...tw},
	}, 
	silentTranslationWarn: false, // 是否关闭翻译报错; 
});
Vue.prototype.$Local = locales;

router.beforeEach((to, from, next) => {    
	// chrome
	document.body.scrollTop = 0
	// firefox
	document.documentElement.scrollTop = 0
	// safari
	window.pageYOffset = 0
	next()
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	i18n,
	store,
	router,
	components: { App },
	template: '<App/>'
})
