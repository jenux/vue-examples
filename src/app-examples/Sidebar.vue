<template>
  <nav>
    <h1>Examples</h1>
    <ul>
      <li v-for="menu in menus">
        <router-link :to="menuUrl(menu.path)">{{ menu.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  import { routes } from './index'

  export default {
    computed: {
      menus: function () {
        return routes.filter(x => x.path !== '')
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
