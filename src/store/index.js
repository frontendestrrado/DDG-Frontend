import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count:0,
        num:10,
        language:sessionStorage["language"]?sessionStorage["language"]:'en',
        isPC:document.body.clientWidth>=768?true:false,
    },
    getters: {

    },
    mutations: {
        // 页面语言
        changeLanguage (state,val) {
            state.language=val;
        },
        setIsPC (state,val) {
            state.isPC = val;
        },
        changeCount (state,val) {
            state.count++;
            state.num = val;
        },    
    },
    actions: {  //调用mutations里的方法
        setNum ({commit},val){
            commit('changeCount',val);
        }
    }
})