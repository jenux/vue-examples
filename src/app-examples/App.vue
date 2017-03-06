<template>
  <div class="columns">
    <div class="column">
      <sidebar></sidebar>
    </div>
    <div class="column is-three-quarters">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Sidebar from './sidebar'

  export default {
    name: 'vue-examples',
    components: {
      Sidebar
    }
  }
</script>
