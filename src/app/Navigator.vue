<template>
  <ul class="navbar-nav  mr-auto">
    <li class="nav-item">
      <router-link to="/guide" class="nav-link">Guide</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/examples" class="nav-link">Examples</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/about" class="nav-link">About</router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['router'],
    data: function () {
      return {
        name: 'navigator'
      }
    }
  }
</script>
