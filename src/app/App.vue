<template>
  <div id="app">
    <app-header>
      <span slot="logo">Vue</span>
      <app-menus slot="navigator" :router="router"></app-menus>
    </app-header>
    <app-view>
      <router-view></router-view>
    </app-view>
  </div>
</template>

<script>
  import Header from './Header'
  import Navigator from './Navigator'
  import AppView from './AppView'

  export default {
    props: ['router'],
    data: function () {
      return {

      }
    },
    components: {
      'app-header': Header,
      'app-view': AppView,
      'app-menus': Navigator
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
  }
</style>
