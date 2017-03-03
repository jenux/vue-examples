<template>
  <div class="__example">
    <tabs>
      <pane title="Result">Result Rendered</pane>
      <pane title="Surce Code">Source Code rendered</pane>
    </tabs>
  </div>
</template>
<script>
  export default {
    props: ['src'],

    data: function () {
      return {
        currentView: 'demo'
      }
    },
    created: function () {

    },
    components: {
      demo: {template: '<div>demo page</div>'},
      sourceCode: {template: '<div>souce code</div>'}
    },
    methods: {
      setView: function (v) {
        this.currentView = v
      }
    }
  }
</script>
