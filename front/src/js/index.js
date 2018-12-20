import Vue from 'vue';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ja';
import VueRouter from 'vue-router';
import axios from 'axios';
import routes from './routes';
import 'element-ui/lib/theme-chalk/index.css';
import '../css/index.css';

// import components
import header from '../components/header/header.vue'

// use vue-router element-ui
Vue.use(VueRouter);
Vue.use(ElementUI, { locale });

// regist axios to Vue instance
Vue.prototype.$axios = axios.create({
    baseURL: '/kotonoha/',
    headers: {
        'ContentType': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
    responseType: 'json'
});

// new vue-router instance
const router = new VueRouter({
    routes: routes
});

// new vue instance
const app = new Vue({
    el: '#app',
    components: {
        'kotonoha-header': header,
    },
    router,
    data: {
        message: 'Hello Vue!'
    },
    methods: { 

    },
    mounted: function() {
    },
})

