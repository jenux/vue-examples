<template>
  <div class="markdown-editor">
    <textarea :value="input" @input="update"></textarea>
    <!--<textarea v-model="input"></textarea>-->
    <div class="result" v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
import marked from 'marked'
import _ from 'lodash'

export default {
  data () {
    return {
      input: '# Title'
    }
  },
  computed: {
    compiledMarkdown () {
      return marked(this.input)
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300)
  }
}
</script>

<style>
  .markdown-editor {
    display: flex;
    border: 1px solid #ddd;
    min-height:400px;
  }
  .markdown-editor textarea {
    width: 35%;
    padding: 20px;
    background: #f6f6f6;
    outline: 0;
    resize: none;
    border: none;
    border-right: 1px solid #ccc;
  }
  .markdown-editor .result {
    padding: 20px;
  }

  .markdown-editor h1,
  .markdown-editor h2,
  .markdown-editor h3,
  .markdown-editor h4 {
    font-size: 1.25rem;
    font-weight: bold;
    margin: 1.2rem 0;
  }
  .markdown-editor h2 {
    font-size: 1.15rem;
    margin: 1rem 0;
  }

  .markdown-editor h3 {
    font-size: 1rem
  }
  .markdown-editor h4 {
    font-size: 0.9rem
  }
</style>
