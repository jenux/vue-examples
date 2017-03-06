<template>
  <div v-show="isSelected"><slot></slot></div>
</template>
<script>
  export default {
    props: {
      title: { required: true },
      selected: { default: false }
    },
    data () {
      return {
        isSelected: false
      }
    },
    mounted () {
      this.isSelected = this.selected
    },
    computed: {
      href () {
        return '#' + this.title.toLowerCase().replace(/ /g, '-')
      }
    }
  }
</script>
