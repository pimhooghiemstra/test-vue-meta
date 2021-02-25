import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMeta from 'vue-meta'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(VueMeta)
window.axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
