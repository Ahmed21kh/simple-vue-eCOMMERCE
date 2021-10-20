import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import '@firebase/firestore'
import 'firebase/firestore'
import './firebase/config'
Vue.config.productionTip = false;

 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


new Vue({
  router,
  store,
  render: h => h(App),
  }).$mount('#app')
