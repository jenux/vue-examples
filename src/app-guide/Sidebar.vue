<template>
  <nav>
    <h1>Guide</h1>
    <dl v-for="(menus, key) in menuGroups">
      <dt v-if="key !== 'undefined'">{{ key }}</dt>
      <dd>
        <ul>
          <li v-for="menu in menus">
            <router-link :to="menuUrl(menu.path)">{{ menu.title }}</router-link>
          </li>
        </ul>
      </dd>
    </dl>
  </nav>
</template>

<script>
  import { routes } from './index'
  import _ from 'lodash'

  export default {
    name: 'vue-guide-sidebar',
    computed: {
      menuGroups: function () {
        return _.groupBy(routes.filter(x => x.path !== ''), 'tag')
      }
    },
    methods: {
      menuUrl: function () {
        let len = arguments.length - 1
        return this.$route.matched[len].path + '/' + arguments[len]
      }
    }
  }
</script>
