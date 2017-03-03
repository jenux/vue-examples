import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import { routes as appRoutes } from './app/'
import { routes as exampleRoutes, App as exampleApp } from './app-examples/'
import { routes as guideRoutes, App as guideApp } from './app-guide/'

let routes = [
  ...appRoutes,
  {
    path: '/',
    redirect: '/guide'
  },
  {
    path: '/examples',
    component: exampleApp,
    children: exampleRoutes
  },
  {
    path: '/guide',
    component: guideApp,
    children: guideRoutes
  }
]

let router = new Router({
  routes
})

export { routes, router }
