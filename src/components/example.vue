<template>
  <tabs class="v-example">
    <tab title="Result">
      <component :is="$options.components.demo"></component>
    </tab>
    <tab title="Source Code">
      <highlight-code lang="javascript">
        let str = 'Hello, World!';
        console.log(str);
      </highlight-code>
    </tab>
  </tabs>
</template>
<script>
  export default {
    props: ['url', 'component'],

    data () {
      return {
        sourceCode: ''
      }
    },

    created () {
      this.$options.components.demo = this.component

      // let sourceCode = require('app-examples/markdown-editor/markdown-editor.vue')
      // console.info('**** source code', sourceCode)
    }
  }
</script>
<style>
  .v-example {
    margin-bottom: 30px;
  }
</style>
