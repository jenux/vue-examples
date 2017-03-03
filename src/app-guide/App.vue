<template>
  <div class="row">
    <div class="col-md-2">
      <sidebar></sidebar>
    </div>
    <div class="col-md-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Sidebar from './sidebar'

  export default {
    name: 'vue-guide',
    components: {
      Sidebar
    }
  }
</script>
