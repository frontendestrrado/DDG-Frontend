import {Locale} from 'vant' 
import enUS from 'vant/lib/locale/lang/en-US'; 
import zhCN from 'vant/lib/locale/lang/zh-CN'; 
import zhHK from 'vant/lib/locale/lang/zh-HK';

export default function locales(a) {
	if(a == 'en'){
		Locale.use('en',enUS) 
	}
	if(a == 'zh-CN'){
		Locale.use('zh-CN',zhCN) 
	} 
	if(a=='zh-TW'){ 
		Locale.use('zh-TW',zhHK) 
	}
}