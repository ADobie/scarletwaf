import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VCharts from 'v-charts'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VCharts)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
