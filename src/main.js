// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

import { App } from './app/'
import { router } from './router'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'

import { Example, Tabs, Pane, Doc } from './components'
Vue.component('v-example', Example)
Vue.component('v-doc', Doc)
Vue.component('tabs', Tabs)
Vue.component('pane', Pane)

/* eslint-disable no-new */
new Vue({
  ...App,
  router
}).$mount('#app')
