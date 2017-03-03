<template>
  <div class="v-example-container">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link" :class="{active: currentView === 'result'}"
           @click="activeView('result')">Result</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" :class="{active: currentView === 'source'}"
           @click="activeView('source')">Source Code</a>
      </li>
    </ul>
    <div style="padding:20px 0">
      <div v-show="currentView === 'result'">
        <component :is="$options.components.demo"></component>
      </div>
      <div v-show="currentView === 'source'">
        <pre><code v-html.bind="sourceCode"></code></pre>
        Load source code
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['src', 'component'],

    data: function () {
      return {
        currentView: 'result'
      }
    },

    computed: {
      sourceCode: function () {
        return this.component.__file
      }
    },

    created: function () {
      this.$options.components.demo = this.component
    },

    methods: {
      activeView: function (v) {
        this.currentView = v
      }
    }
  }
</script>
