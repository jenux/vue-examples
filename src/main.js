// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueHighlightJS from 'vue-highlight.js'
Vue.use(VueResource)
Vue.use(VueHighlightJS)

import { App } from './app/'
import { router } from './router'
import 'font-awesome/css/font-awesome.css'
import 'bulma/css/bulma.css'
import 'highlight.js/styles/default.css'

import { Example, Doc, Tabs, Tab } from './components'
Vue.component('v-example', Example)
Vue.component('v-doc', Doc)
Vue.component('tabs', Tabs)
Vue.component('tab', Tab)

/* eslint-disable no-new */
new Vue({
  ...App,
  router
}).$mount('#app')
