<template>
  <div>
    <h3>Markdown Editor</h3>
    <div class="markdown-editor">
      <textarea :value="input" @input="update"></textarea>
      <!--<textarea v-model="input"></textarea>-->
      <div class="result" v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import _ from 'lodash'

export default {
  data: function () {
    return {
      input: ''
    }
  },
  computed: {
    compiledMarkdown: function () {
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

<style scoped>
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
</style>
