<template>
  <div class="__tabs">
    <p>A | B | C</p>
    <div class="__tabs_panes">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Pane from './pane'

  export default {
    components: {
      Pane
    }
  }
</script>
