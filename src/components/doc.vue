<template>
  <div class="v-doc-container" v-html.bind="compiled"></div>
</template>

<script>
  import marked from 'marked'

  export default {
    data: function () {
      return {
        input: ''
      }
    },
    computed: {
      compiled: function () {
        return this.input ? marked(this.input) : '...'
      }
    },
    created: function () {
      this.input = this.dedent(this.$slots.default[0].text)
    },
    methods: {
      dedent: function (str) {
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
