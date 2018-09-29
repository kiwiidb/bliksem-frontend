// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Snotify from 'vue-snotify'
import 'vue-snotify/styles/material.css'
import VueClipboard from 'vue-clipboard2'
import VueNativeSock from 'vue-native-websocket'

Vue.config.productionTip = false
Vue.use(Snotify)
Vue.use(Vuetify)
VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)
Vue.use(VueNativeSock, 'ws://localhost:8081/settledinvoice')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
