import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../http';
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        num: 10,
        language: sessionStorage["language"] ? sessionStorage["language"] : 'en',
        isPC: document.body.clientWidth >= 768 ? true : false,
        currentPage: sessionStorage["currentPage"] ? JSON.parse(sessionStorage["currentPage"]) : {
            tabbar: '/Index',
            title: '首页',
        },
        token: sessionStorage["token"] ? sessionStorage["token"] : '',
        token_type: sessionStorage["token_type"] ? sessionStorage["token_type"] : '',
    },
    getters: {

    },
    mutations: {
        // 刷新token
        refreshToken(state) {
            if (sessionStorage.token) {
                axios({
                    method: 'PUT',
                    url: '/api/v1/authorizations/current',
                    headers: {
                        "Authorization": sessionStorage.token_type + sessionStorage.token,
                    }
                }).then(res => {
                    console.log('refreshToken');
                    sessionStorage.setItem('token', res.access_token);
                    this.commit('setToken', res.access_token);
                    window.location.reload();
                }).catch(error => {
                    console.log('no storeToken');
                    sessionStorage.token = '';
                    this.commit('changePage', { tabbar: '/Login', title: 'Sign Up / Sign In' });
                    router.push('/Login');
                });
            } else {
                console.log('no storeToken2');
                sessionStorage.token = '';
                this.commit('changePage', { tabbar: '/Login', title: 'Sign Up / Sign In' });
                router.push('/Login');
            }
        },
        // 删除token
        delToken() {
            axios({
                method: 'DELETE',
                url: '/api/v1/authorizations/current',
                headers: {
                    "Authorization": sessionStorage.token_type + sessionStorage.token,
                }
            }).then(res => {
                console.log('delToken');
                sessionStorage.token = '';
                this.commit('setToken', '');
                window.location.reload();
            }).catch(error => {
                console.log('no storeToken');
                sessionStorage.token = '';
            });
        },
        setToken(state, val) {
            sessionStorage.setItem('token', val);
            state.token = val;
        },
        setTokenType(state, val) {
            sessionStorage.setItem('token_type', val);
            state.token_type = val;
        },
        // 页面语言
        changeLang(state, val) {
            sessionStorage.setItem('language', val);
            state.language = val;
        },
        setIsPC(state, val) {
            state.isPC = val;
        },
        changeCount(state, val) {
            state.count++;
            state.num = val;
        },
        // 切换页面tab
        changePage(state, val) {
            sessionStorage.setItem('currentPage', JSON.stringify(val));
            // console.log(JSON.parse(sessionStorage.currentPage));
            state.currentPage = val;
        }
    },
    actions: {  //调用mutations里的方法
        setNum({ commit }, val) {
            commit('changeCount', val);
        },
    }
})