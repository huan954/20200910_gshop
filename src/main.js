// 入口js
// import Vue from 'vue'
// import App from './App.vue'
// import roter from './router/index'

// new Vue({
//     // router,
//     render:h => h(App),
// }).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})