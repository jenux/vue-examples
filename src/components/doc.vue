<template>
  <div class="v-doc" v-html.bind="compiled"></div>
</template>

<script>
  import marked from 'marked'

  export default {
    data () {
      return {
        input: ''
      }
    },
    computed: {
      compiled: function () {
        return this.input ? marked(this.input) : '...'
      }
    },
    created () {
      this.input = this.dedent(this.$slots.default[0].text)
    },
    methods: {
      dedent (str) {
        var match = str.match(/^[ \t]*(?=\S)/gm)
        if (!match) return str

        var indent = Math.min.apply(Math, match.map(function (el) {
          return el.length
        }))

        var re = new RegExp('^[ \\t]{' + indent + '}', 'gm')
        return indent > 0 ? str.replace(re, '') : str
      }
    }
  }
</script>
<style>
  .v-doc h1,
  .v-doc h2,
  .v-doc h3,
  .v-doc h4 {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 1.2rem 0;
  }
  .v-doc h2 {
    font-size: 1.15rem;
    margin: 1rem 0;
  }
</style>
