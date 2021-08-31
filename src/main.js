// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './http';
import store from './store';

import Vant from 'vant';
import 'vant/lib/index.css';

import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

Vue.config.productionTip = false
Vue.use(Vant);

Vue.prototype.$axios = axios;
Vue.prototype.$sessionStorage = sessionStorage;
if(process.env.NODE_ENV=='development'){
	Vue.prototype.$build = '/build';
}else{
	Vue.prototype.$build = 'https://www.bunchparty.com/trust';
	// Vue.prototype.$build = 'http://184.168.127.123/trustb'; //正式服
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

/* eslint-disable no-new */
new Vue({
	el: '#app',
	i18n,
	store,
	router,
	components: { App },
	template: '<App/>'
})
