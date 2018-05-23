// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css'
import Vue from 'vue'
import i18n from './i18n'
import Element from 'element-ui'

// 自定义 element-ui 主题
import './assets/scss/element-variables.scss'


// 引用axios文件
import axios from './untils/http.js'
// 将API方法绑定到全局
Vue.prototype.$http = axios

import App from './App'
import router from './router'
import store from './store'
import promise from 'es6-promise'
promise.polyfill()

Vue.config.productionTip = false

Vue.use(Element, {
  size: 'small',
  i18n: (key, value) => i18n.t(key, value)
})

/* eslint-disable no-new */
 new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
