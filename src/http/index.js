import  axios from 'axios'
import {Toast } from 'vant';

import store from '../store';

let servie = axios.create({
    baseURL: process.env.BASE_URL, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 10000 // request timeout
});
let route = '';
servie.interceptors.request.use(config => {
    let lang = sessionStorage.getItem('language');
    if(lang=='zh-CN'){
        lang = 'zh-CN';
    }else if(lang=='zh-TW'){
        lang = 'zh-TW'
    }else{
        lang = 'en';
    }
    route = config.url;
    config.headers['Accept-Language']=lang;

    return config;
},error => {
    Promise.reject(error)
});
servie.interceptors.response.use(
    response => {
        // console.log(response);
        console.log(response.status);
        if(response.status==200||response.status==201||response.status==203||response.status==204){
            return response.data;
        }else{
            Toast.fail({
                message: 'Request failed!',
                duration:1800,
                position:'top',
            });
        }
    },
    error => {
        console.log(error);
        console.log(error.response);
        if(error.response.data.errors){
            return Promise.reject(error);
        }else if(error.response.data.message){
            if(error.response.status == 401){
                console.log('token 失效')
                store.commit('refreshToken');
                Toast.fail({
                    message:error.response.data.message,
                    duration:1800,
                    position:'top',
                });
            }else if(route.indexOf('/authorizations')!=-1){
                Toast.fail({
                    message:error.response.data.message,
                    duration:1800,
                    position:'top',
                });
            }else{
                Toast.fail({
                    message:error.response.data.message,
                    duration:1800,
                    position:'top',
                });
            }
        }else{
            Toast.fail({
                message: 'Request failed!',
                duration:1800,
                position:'top',
            });
        }
        return Promise.reject(error)
    }
)
export default  servie; ///　 一定要记得导出