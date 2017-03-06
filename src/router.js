import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import { routes as appRoutes } from './app/'
import { routes as exampleRoutes, App as exampleApp } from './app-examples/'
import { routes as guideRoutes, App as guideApp } from './app-guide/'

let routes = [
  ...appRoutes,
  {
    name: 'home',
    path: '/',
    redirect: '/guide'
  },
  {
    path: '/examples',
    component: exampleApp,
    children: exampleRoutes,
    meta: {
      name: 'examples'
    }
  },
  {
    path: '/guide',
    component: guideApp,
    children: guideRoutes,
    meta: {
      name: 'guide'
    }
  }
]

let router = new Router({
  routes,
  linkActiveClass: 'is-active'
})

export { routes, router }
