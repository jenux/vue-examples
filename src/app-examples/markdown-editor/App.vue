<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <v-doc>
            # Markdown Editor

            > Simple Markedown editor showed as vue official example
            > https://vuejs.org/v2/examples/index.html
          </v-doc>
        </div>
      </div>
    </section>

    <v-example
      url="/app-examples/markdown-editor/markdown-editor.vue"
      :component="$options.components.MarkdownEditor"></v-example>
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

