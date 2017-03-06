<template>
  <div id="app">
    <app-header></app-header>
    <app-view>
      <router-view></router-view>
    </app-view>
  </div>
</template>

<script>
  import Header from './Header'
  import AppView from './AppView'

  export default {
    components: {
      'app-header': Header,
      AppView
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
