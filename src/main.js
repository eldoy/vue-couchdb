import Vue from './lib/setup'
import store from './lib/store'
import router from './lib/router'
import db from './lib/db'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$db = db

console.log(store.state)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
