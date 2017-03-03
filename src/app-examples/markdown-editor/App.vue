<template>
  <div>
    <v-doc>
      # Markdown Editor

      > Simple Markedown editor showed as vue official example
      > https://vuejs.org/v2/examples/index.html
    </v-doc>

    <v-example :component="$options.components.MarkdownEditor"></v-example>
  </div>
</template>

<script>
  import MarkdownEditor from './markdown-editor'
  export default {
    components: {
      MarkdownEditor
    }
  }
</script>

