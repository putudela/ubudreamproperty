import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import 'bootstrap/dist/js/bootstrap.bundle'

// import VueCarousel from 'vue-carousel'

import axios from 'axios'

import './assets/css/style.css'

const app = createApp(App)

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'

// ==== Global Image Url Staging Laundry BIT House
app.config.globalProperties.imageUrl = 'http://127.0.0.1:8000/listing_img/';

axios.defaults.headers.common.Accept = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Method'] = 'GET', 'POST';

app.use(router).mount('#app')
