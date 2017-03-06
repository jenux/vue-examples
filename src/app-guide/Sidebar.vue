<template>
  <div>
    <nav class="panel">
      <p class="panel-heading">
        Guide
      </p>
    </nav>
    <aside class="menu" v-for="(menus, key) in menuGroups">
      <p class="menu-label" v-if="key !== 'undefined'" v-text="key"></p>
      <ul class="menu-list" v-for="menu in menus">
        <li><a><router-link :to="menuUrl(menu.path)">{{ menu.title }}</router-link></a></li>
      </ul>
    </aside>
  </div>
</template>

<script>
  import { routes } from './index'
  import _ from 'lodash'

  export default {
    name: 'vue-guide-sidebar',
    computed: {
      menuGroups () {
        return _.groupBy(routes.filter(x => x.path !== ''), 'tag')
      }
    },
    methods: {
      menuUrl () {
        let len = arguments.length - 1
        return this.$route.matched[len].path + '/' + arguments[len]
      }
    }
  }
</script>
