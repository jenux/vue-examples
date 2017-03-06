<template>
  <aside class="menu">
    <p class="menu-label">Examples</p>
    <ul class="menu-list" v-for="menu in menus">
      <li><a><router-link :to="menuUrl(menu.path)">{{ menu.title }}</router-link></a></li>
    </ul>
  </aside>
</template>

<script>
  import { routes } from './index'

  export default {
    computed: {
      menus () {
        return routes.filter(x => x.path !== '')
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
