import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from '@/api'
import "@/mock"
import '@/common/stylus/style.styl'
import '@/common/stylus/transition.stylus'

// import axios from 'axios'
Vue.config.productionTip = false;
Vue.prototype.$http = http
Vue.prototype.bus = new Vue()
// (async()=>{
//   const data = axios.get("/api/sellers")
//   console.log(data.data);
  
// })()
new Vue({
  render: h => h(App),
  router
}).$mount('#app');


